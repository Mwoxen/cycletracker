import { encodePayload } from '@/sync/payload';
import { createSyncSnapshot } from '@/store/snapshot';
import { selectSnapshotData, useStore } from '@/store/store';

import { syncWithPartner } from './run';
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

  it('runs one round at a time', async () => {
    onboard('tracker');
    const t = transport('participant');
    const [a, b] = await Promise.all([syncWithPartner(t), syncWithPartner(t)]);
    expect(b).toBe(a);
    expect(t.reads).toBe(1);
  });
});
