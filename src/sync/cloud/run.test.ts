import { encodePayload } from '@/sync/payload';
import { createSyncSnapshot } from '@/store/snapshot';
import { selectSnapshotData, useStore } from '@/store/store';

import { forgetPublished, syncWithPartner } from './run';
import type { CloudRecord, CloudRole, CloudTransport } from './transport';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

function transport(role: CloudRole | undefined, records = new Map<string, CloudRecord>()) {
  const t: CloudTransport & { records: Map<string, CloudRecord>; reads: number } = {
    records,
    reads: 0,
    accountStatus: async () => 'available',
    state: async () => ({ role, participants: 1 }),
    createShare: async () => 'url',
    joinShare: async () => undefined,
    write: async (name, payload) => {
      records.set(name, { payload, updatedAt: Date.now() });
    },
    read: async (name) => {
      t.reads += 1;
      return records.get(name);
    },
    stop: async () => undefined,
  };
  return t;
}

const onboard = (role: 'user' | 'tracker') => {
  useStore.getState().completeOnboarding({
    role,
    language: 'da',
    partnerName: 'Anna',
    programStartDate: '2026-03-01',
    lastPeriodStart: '2026-02-20',
    cycleLength: 29,
    periodLength: 4,
  });
  useStore.getState().setHydrated(true);
};

beforeEach(() => {
  forgetPublished();
  useStore.getState().resetAll();
  useStore.getState().setCloudSync({ lastSyncAt: undefined, lastError: undefined });
});

describe('syncWithPartner', () => {
  it('does nothing before the app is hydrated or has a profile', async () => {
    const t = transport('owner');
    expect(await syncWithPartner(t)).toEqual({ ok: false, reason: 'not-connected' });
    expect(t.reads).toBe(0);
  });

  it('does nothing and reports no error while not paired', async () => {
    onboard('tracker');
    const out = await syncWithPartner(transport(undefined));
    expect(out).toEqual({ ok: false, reason: 'not-connected' });
    expect(useStore.getState().cloudSync.lastError).toBeUndefined();
  });

  it("brings her data and her cycle numbers to the partner's phone", async () => {
    // Her phone has published; this phone is the partner's.
    const cloud = new Map<string, CloudRecord>();
    onboard('user');
    useStore.getState().updateSettings({ defaultCycleLength: 33 });
    useStore.getState().startPeriod('2026-03-20');
    const s = useStore.getState();
    cloud.set('from-owner', {
      payload: encodePayload(createSyncSnapshot(selectSnapshotData(s), s.deviceId)),
      updatedAt: 1,
    });

    useStore.getState().resetAll();
    onboard('tracker');
    const out = await syncWithPartner(transport('participant', cloud));
    expect(out).toMatchObject({ ok: true, received: true });
    const after = useStore.getState();
    expect(Object.values(after.periods).map((p) => p.startDate)).toContain('2026-03-20');
    expect(after.settings.defaultCycleLength).toBe(33);
    expect(after.profile?.role).toBe('tracker');
    expect(after.cloudSync.lastSyncAt).toBeDefined();
    expect(cloud.has('from-partner')).toBe(true);
  });

  it('records why a round failed', async () => {
    onboard('tracker');
    const t = transport('participant');
    t.accountStatus = async () => 'noAccount';
    await syncWithPartner(t);
    expect(useStore.getState().cloudSync.lastError).toBe('unavailable');
  });

  it('runs one round at a time, with one follow-up for everyone who asked meanwhile', async () => {
    onboard('tracker');
    const t = transport('participant');
    const first = syncWithPartner(t);
    const second = syncWithPartner(t);
    const third = syncWithPartner(t);
    expect(third).toBe(second);
    await Promise.all([first, second, third]);
    expect(t.reads).toBe(2);
  });

  it('lets a request made during a round see a connection made after the round began', async () => {
    onboard('tracker');
    let role: CloudRole | undefined;
    const t = transport(undefined);
    t.state = async () => ({ role, participants: 0 });
    const running = syncWithPartner(t); // starts while not connected
    role = 'participant';
    const outcome = await syncWithPartner(t);
    await running;
    expect(outcome).toMatchObject({ ok: true });
    expect(t.records.has('from-partner')).toBe(true);
  });

  it('does not write the same data twice, and writes again after a local change', async () => {
    onboard('tracker');
    const t = transport('participant');
    expect(await syncWithPartner(t)).toMatchObject({ ok: true, wrote: true });
    expect(await syncWithPartner(t)).toMatchObject({ ok: true, wrote: false });
    useStore.getState().upsertLog('2026-03-05', { mood: 'good' });
    expect(await syncWithPartner(t)).toMatchObject({ ok: true, wrote: true });
    expect(t.records.get('from-partner')).toBeDefined();
  });

  it('settles after receiving data: a second round changes nothing and writes nothing', async () => {
    const cloud = new Map<string, CloudRecord>();
    onboard('user');
    useStore.getState().startPeriod('2026-03-20');
    const s = useStore.getState();
    cloud.set('from-owner', {
      payload: encodePayload(createSyncSnapshot(selectSnapshotData(s), s.deviceId)),
      updatedAt: 1,
    });
    useStore.getState().resetAll();
    forgetPublished();
    onboard('tracker');
    const t = transport('participant', cloud);
    expect(await syncWithPartner(t)).toMatchObject({ ok: true, received: true, wrote: true });
    const periods = useStore.getState().periods;
    expect(await syncWithPartner(t)).toMatchObject({ ok: true, received: true, changed: 0, wrote: false });
    // The store object is the same, so the sync hook has no reason to start another round.
    expect(useStore.getState().periods).toBe(periods);
  });
});
