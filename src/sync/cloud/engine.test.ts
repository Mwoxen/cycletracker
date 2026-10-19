import { DEFAULT_SETTINGS, type DayLog, type PeriodEvent, type Profile } from '@/domain/types';
import {
  createSyncSnapshot,
  mergeSnapshot,
  type CycleSettings,
  type Snapshot,
  type SnapshotData,
} from '@/store/snapshot';
import { decodePayload, encodePayload } from '@/sync/payload';

import { runCloudSync, type SyncDeps } from './engine';
import type { CloudAccount, CloudRecord, CloudRole, CloudTransport } from './transport';

/** Both phones see the same shared space; this stands in for iCloud. */
class FakeCloud {
  records = new Map<string, CloudRecord>();
  account: CloudAccount = 'available';
  failWith?: string;
  writes: string[] = [];

  transport(): CloudTransport {
    return {
      accountStatus: async () => this.account,
      state: async () => ({ role: undefined, participants: 0 }),
      createShare: async () => 'https://www.icloud.com/share/fake',
      joinShare: async () => undefined,
      write: async (name, payload) => {
        if (this.failWith) throw new Error(this.failWith);
        this.records.set(name, { payload, updatedAt: Date.now() });
        this.writes.push(name);
      },
      read: async (name) => {
        if (this.failWith) throw new Error(this.failWith);
        return this.records.get(name);
      },
      stop: async () => undefined,
    };
  }
}

const profile = (role: Profile['role']): Profile => ({
  id: role,
  role,
  language: 'da',
  partnerName: 'Anna',
  programStartDate: '2026-03-01',
  plan: 'free',
  onboardedAt: 1,
});

const period = (
  id: string,
  startDate: string,
  updatedAt: number,
  extra: Partial<PeriodEvent> = {},
): PeriodEvent => ({
  id,
  startDate,
  updatedAt,
  ...extra,
});

const log = (date: string, updatedAt: number, extra: Partial<DayLog> = {}): DayLog => ({
  id: `log-${date}`,
  date,
  symptoms: [],
  updatedAt,
  ...extra,
});

/** A simulated phone: its own data, and the two callbacks the engine needs. */
function phone(role: CloudRole, initial: Partial<SnapshotData> = {}) {
  let data: SnapshotData = {
    profile: profile(role === 'owner' ? 'user' : 'tracker'),
    settings: DEFAULT_SETTINGS,
    periods: {},
    logs: {},
    progress: {},
    pairing: {},
    weekFocus: {},
    weekActionsDone: {},
    phaseActionsDone: {},
    ...initial,
  };
  const applied: CycleSettings[] = [];
  return {
    get data() {
      return data;
    },
    set(partial: Partial<SnapshotData>) {
      data = { ...data, ...partial };
    },
    applied,
    deps: (cloud: FakeCloud, extra: Partial<SyncDeps> = {}) => ({
      transport: cloud.transport(),
      role,
      buildOutgoing: () => createSyncSnapshot(data, `device-${role}`),
      applyIncoming: (s: Snapshot) => {
        const r = mergeSnapshot(data, s, { includeProfile: false, includeProgress: false });
        data = r.data;
        return { periods: r.periodsChanged, logs: r.logsChanged };
      },
      applyCycleSettings: (s: CycleSettings) => {
        applied.push(s);
        const same =
          data.settings.defaultCycleLength === s.defaultCycleLength &&
          data.settings.defaultPeriodLength === s.defaultPeriodLength &&
          data.settings.lutealLength === s.lutealLength;
        if (!same) data = { ...data, settings: { ...data.settings, ...s } };
        return !same;
      },
      ...extra,
    }),
  };
}

describe('automatic sync between two phones', () => {
  it('sends the cycle owner’s data to the partner', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', {
      periods: { p1: period('p1', '2026-05-01', 10) },
      logs: { 'log-2026-05-02': log('2026-05-02', 11, { flow: 'medium' }) },
    });
    const him = phone('participant');

    expect(await runCloudSync(her.deps(cloud))).toMatchObject({
      ok: true,
      received: false,
      wrote: true,
    });
    expect(await runCloudSync(him.deps(cloud))).toMatchObject({
      ok: true,
      received: true,
      changed: 2,
    });

    expect(Object.keys(him.data.periods)).toEqual(['p1']);
    expect(him.data.logs['log-2026-05-02']?.flow).toBe('medium');
  });

  it('writes a different record on each side, so the phones never overwrite each other', async () => {
    const cloud = new FakeCloud();
    await runCloudSync(phone('owner').deps(cloud));
    await runCloudSync(phone('participant').deps(cloud));
    expect([...cloud.records.keys()].sort()).toEqual(['from-owner', 'from-partner']);
  });

  it('carries a correction she makes later to him: the newer change wins', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', { periods: { p1: period('p1', '2026-05-01', 10) } });
    const him = phone('participant');
    await runCloudSync(her.deps(cloud));
    await runCloudSync(him.deps(cloud));

    her.set({ periods: { p1: period('p1', '2026-05-03', 50) } });
    await runCloudSync(her.deps(cloud));
    const result = await runCloudSync(him.deps(cloud));

    expect(result).toMatchObject({ ok: true, changed: 1 });
    expect(him.data.periods.p1?.startDate).toBe('2026-05-03');
  });

  it('passes on a deleted period and a deleted log', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', {
      periods: { p1: period('p1', '2026-05-01', 10) },
      logs: { 'log-2026-05-02': log('2026-05-02', 11) },
    });
    const him = phone('participant');
    await runCloudSync(her.deps(cloud));
    await runCloudSync(him.deps(cloud));

    her.set({
      periods: { p1: period('p1', '2026-05-01', 60, { deleted: true }) },
      logs: { 'log-2026-05-02': log('2026-05-02', 61, { deleted: true }) },
    });
    await runCloudSync(her.deps(cloud));
    await runCloudSync(him.deps(cloud));

    expect(him.data.periods.p1?.deleted).toBe(true);
    expect(him.data.logs['log-2026-05-02']?.deleted).toBe(true);
  });

  it('does not let an older copy overwrite a newer one', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', { periods: { p1: period('p1', '2026-05-03', 50) } });
    const him = phone('participant', { periods: { p1: period('p1', '2026-05-01', 10) } });
    await runCloudSync(him.deps(cloud));
    await runCloudSync(her.deps(cloud));

    expect(her.data.periods.p1?.startDate).toBe('2026-05-03');
    await runCloudSync(him.deps(cloud));
    expect(him.data.periods.p1?.startDate).toBe('2026-05-03');
  });

  it('converges when both phones changed different things between syncs', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', { periods: { p1: period('p1', '2026-05-01', 10) } });
    const him = phone('participant', {
      weekFocus: { '2': { week: 2, text: 'Tur i skoven', updatedAt: 20 } },
    });
    await runCloudSync(her.deps(cloud));
    await runCloudSync(him.deps(cloud));
    await runCloudSync(her.deps(cloud));

    expect(Object.keys(him.data.periods)).toEqual(['p1']);
    expect(her.data.weekFocus['2']?.text).toBe('Tur i skoven');
  });

  it('is harmless to run again: the second round changes nothing', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', { periods: { p1: period('p1', '2026-05-01', 10) } });
    const him = phone('participant');
    await runCloudSync(her.deps(cloud));
    await runCloudSync(him.deps(cloud));
    const again = await runCloudSync(him.deps(cloud));
    expect(again).toMatchObject({ ok: true, changed: 0 });
    expect(Object.keys(him.data.periods)).toEqual(['p1']);
  });

  it('never sends the app’s own state: no profile, reminders or lesson progress', async () => {
    const cloud = new FakeCloud();
    const her = phone('owner', {
      progress: { a: { lessonId: 'a', readAt: 5 } },
      settings: { ...DEFAULT_SETTINGS, appearance: 'dark' },
    });
    await runCloudSync(her.deps(cloud));
    const sent = decodePayload(cloud.records.get('from-owner')!.payload);
    expect(sent.progress).toEqual([]);
    expect(sent.profile).toBeUndefined();
    expect(sent.settings).toBeUndefined();
    expect(sent.weekActionsDone).toEqual({});
  });

  describe('her cycle numbers', () => {
    it('reach the partner, so his predictions match hers', async () => {
      const cloud = new FakeCloud();
      const her = phone('owner', {
        settings: {
          ...DEFAULT_SETTINGS,
          defaultCycleLength: 31,
          defaultPeriodLength: 6,
          lutealLength: 13,
        },
      });
      const him = phone('participant');
      await runCloudSync(her.deps(cloud));
      await runCloudSync(him.deps(cloud));
      expect(him.applied).toEqual([
        { defaultCycleLength: 31, defaultPeriodLength: 6, lutealLength: 13 },
      ]);
    });

    it('count as a change on his phone, and not when they are what he already had', async () => {
      const cloud = new FakeCloud();
      const her = phone('owner', { settings: { ...DEFAULT_SETTINGS, defaultCycleLength: 31 } });
      await runCloudSync(her.deps(cloud));
      const him = phone('participant');
      let same = false;
      const deps = him.deps(cloud, { applyCycleSettings: () => !same });
      expect(await runCloudSync(deps)).toMatchObject({ ok: true, changed: 1 });
      same = true;
      expect(await runCloudSync(deps)).toMatchObject({ ok: true, changed: 0 });
    });

    it('are never applied on her own phone from his data', async () => {
      const cloud = new FakeCloud();
      const him = phone('participant');
      await runCloudSync(him.deps(cloud));
      const her = phone('owner');
      await runCloudSync(her.deps(cloud));
      expect(her.applied).toEqual([]);
      expect(
        decodePayload(cloud.records.get('from-partner')!.payload).cycleSettings,
      ).toBeUndefined();
    });
  });

  describe('when something is wrong', () => {
    it('does nothing and says so when there is no iCloud account', async () => {
      const cloud = new FakeCloud();
      cloud.account = 'noAccount';
      const result = await runCloudSync(phone('owner').deps(cloud));
      expect(result).toEqual({ ok: false, reason: 'unavailable' });
      expect(cloud.writes).toEqual([]);
    });

    it('reports an error from iCloud without throwing', async () => {
      const cloud = new FakeCloud();
      cloud.failWith = 'network down';
      const result = await runCloudSync(phone('owner').deps(cloud));
      expect(result).toEqual({ ok: false, reason: 'error', message: 'network down' });
    });

    it('skips a record it cannot read, and still publishes its own data', async () => {
      const cloud = new FakeCloud();
      cloud.records.set('from-owner', { payload: 'not-a-snapshot', updatedAt: 1 });
      const him = phone('participant', { periods: { p9: period('p9', '2026-06-01', 5) } });
      const result = await runCloudSync(him.deps(cloud));
      expect(result).toMatchObject({ ok: true, received: false, wrote: true });
      expect(cloud.writes).toEqual(['from-partner']);
    });

    it('stops, without writing, when the other phone has a newer app version', async () => {
      const cloud = new FakeCloud();
      const future = encodePayload({
        ...createSyncSnapshot(phone('owner').data, 'x'),
        version: 99,
      });
      cloud.records.set('from-owner', { payload: future, updatedAt: 1 });
      const result = await runCloudSync(phone('participant').deps(cloud));
      expect(result).toEqual({ ok: false, reason: 'newer-app' });
      expect(cloud.writes).toEqual([]);
    });

    it('refuses to publish more than a record can hold', async () => {
      const cloud = new FakeCloud();
      const her = phone('owner', {
        logs: { 'log-2026-05-02': log('2026-05-02', 1, { note: 'x'.repeat(5000) }) },
      });
      const result = await runCloudSync(her.deps(cloud, { maxPayload: 100 }));
      expect(result).toEqual({ ok: false, reason: 'too-large' });
      expect(cloud.writes).toEqual([]);
    });
  });
});
