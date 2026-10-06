import { DEFAULT_SETTINGS, type PeriodEvent, type Profile } from '@/domain/types';

import {
  createSnapshot,
  createSyncSnapshot,
  mergeSnapshot,
  parseSnapshot,
  previewMerge,
  serializeSnapshot,
  type SnapshotData,
} from './snapshot';

const profile: Profile = {
  id: 'me',
  role: 'user',
  language: 'da',
  partnerName: 'Anna',
  programStartDate: '2026-03-01',
  plan: 'free',
  onboardedAt: 1,
};

function data(overrides: Partial<SnapshotData> = {}): SnapshotData {
  return {
    profile,
    settings: DEFAULT_SETTINGS,
    periods: {},
    logs: {},
    progress: {},
    pairing: {},
    weekFocus: {},
    weekActionsDone: {},
    phaseActionsDone: {},
    ...overrides,
  };
}

const p = (id: string, startDate: string, updatedAt: number, extra = {}): PeriodEvent => ({
  id,
  startDate,
  updatedAt,
  ...extra,
});

describe('snapshot round trip', () => {
  it('serializes and parses back the same content', () => {
    const d = data({ periods: { a: p('a', '2026-03-01', 10) } });
    const snap = createSnapshot(d, 'dev1', 123);
    const parsed = parseSnapshot(serializeSnapshot(snap));
    expect(parsed).toEqual(snap);
  });

  it('rejects garbage', () => {
    expect(() => parseSnapshot('nope')).toThrow('invalid-json');
    expect(() => parseSnapshot('42')).toThrow('not-an-object');
    expect(() => parseSnapshot('{"version": 99}')).toThrow('unsupported-version');
  });

  it('sanitizes foreign or corrupt data so screens cannot crash on it', () => {
    const parsed = parseSnapshot(
      JSON.stringify({
        version: 1,
        exportedAt: 'yesterday',
        deviceId: 'x',
        senderName: 'Anna',
        profile: { role: 'admin', language: 'da', programStartDate: '2026-03-01' },
        settings: { defaultCycleLength: 0, lutealLength: '14', reminders: { dailyCardHour: 99 } },
        periods: [
          { id: 'p1', updatedAt: 1, startDate: 'not-a-date' },
          { id: 'p2', updatedAt: 1, startDate: '2026-03-01', endDate: 42 },
          { id: 'p3', updatedAt: 1, startDate: '2026-03-01' },
        ],
        logs: [
          { id: 'l1', updatedAt: 1 },
          { id: 'l2', updatedAt: 1, date: '2026-03-02', symptoms: ['cramps', 'teleportation'] },
          { id: 'l3', updatedAt: 1, date: '2026-03-03' },
        ],
        progress: [],
        pairing: { partnerName: 5, lastSyncAt: 'now' },
        weekFocus: [
          { week: 2, text: 'x'.repeat(200), updatedAt: 3 },
          { week: 7, text: 'no', updatedAt: 3 },
          { week: 1, text: 42, updatedAt: 3 },
          { week: 3, text: 'ok', updatedAt: 'now' },
        ],
        weekActionsDone: {
          '2026-03-01': { '1': [0, 2, 2, 5, -1, 1.5, 'x'], '9': [0], x: [1] },
          'not-a-date': { '1': [0] },
        },
      }),
    );
    expect(parsed.exportedAt).toBe(0);
    expect(parsed.senderName).toBe('Anna');
    expect(parsed.profile).toBeUndefined();
    expect(parsed.settings).toEqual({
      ...DEFAULT_SETTINGS,
      defaultCycleLength: 21,
      reminders: { ...DEFAULT_SETTINGS.reminders, dailyCardHour: 23 },
    });
    expect(parsed.periods.map((p) => p.id)).toEqual(['p3']);
    expect(parsed.logs.map((l) => l.id)).toEqual(['l2', 'l3']);
    expect(parsed.logs[0].symptoms).toEqual(['cramps']);
    expect(parsed.logs[1].symptoms).toEqual([]);
    expect(parsed.pairing).toEqual({});
    expect(parsed.weekFocus).toEqual([{ week: 2, text: 'x'.repeat(120), updatedAt: 3 }]);
    expect(parsed.weekActionsDone).toEqual({ '2026-03-01': { '1': [0, 2] } });
  });

  it('defaults week focus and actions when a snapshot predates them', () => {
    const parsed = parseSnapshot(JSON.stringify({ version: 1, periods: [], logs: [] }));
    expect(parsed.weekFocus).toEqual([]);
    expect(parsed.weekActionsDone).toEqual({});
    expect(parsed.settings).toBeUndefined();
    const older = parseSnapshot(
      JSON.stringify({ version: 1, settings: { reminders: { pmsWindow: false } } }),
    );
    expect(older.settings?.reminders.cycleWeek).toBe(true);
    expect(older.settings?.reminders.weeklyRead).toBe(true);
    expect(older.settings?.reminders.monthWrap).toBe(true);
    expect(older.settings?.reminders.pmsWindow).toBe(false);
  });

  it('signs sync payloads with the sender name only for the user role', () => {
    const base: SnapshotData = {
      profile: { ...profile, role: 'user', partnerName: 'Anna' },
      settings: DEFAULT_SETTINGS,
      periods: {},
      logs: {},
      progress: {},
      pairing: {},
      weekFocus: {},
      weekActionsDone: {},
      phaseActionsDone: {},
    };
    expect(createSyncSnapshot(base, 'd1').senderName).toBe('Anna');
    const tracker = { ...base, profile: { ...base.profile!, role: 'tracker' as const } };
    expect(createSyncSnapshot(tracker, 'd1').senderName).toBeUndefined();
  });

  it('drops malformed records instead of failing', () => {
    const parsed = parseSnapshot(
      JSON.stringify({ version: 1, periods: [{ id: 'x' }, p('ok', '2026-01-01', 1)], logs: 'no' }),
    );
    expect(parsed.periods.map((x) => x.id)).toEqual(['ok']);
    expect(parsed.logs).toEqual([]);
  });
});

describe('mergeSnapshot', () => {
  it('applies last-write-wins per record', () => {
    const current = data({
      periods: { a: p('a', '2026-03-01', 10), b: p('b', '2026-03-29', 20) },
    });
    const incoming = createSnapshot(
      data({
        periods: {
          a: p('a', '2026-03-02', 5), // older: ignored
          b: p('b', '2026-03-30', 25), // newer: wins
          c: p('c', '2026-04-27', 1), // new
        },
      }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: false, includeProgress: false });
    expect(r.data.periods.a.startDate).toBe('2026-03-01');
    expect(r.data.periods.b.startDate).toBe('2026-03-30');
    expect(r.data.periods.c).toBeDefined();
    expect(r.periodsChanged).toBe(2);
  });

  it('carries deletions', () => {
    const current = data({ periods: { a: p('a', '2026-03-01', 10) } });
    const incoming = createSnapshot(
      data({ periods: { a: p('a', '2026-03-01', 11, { deleted: true }) } }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: false, includeProgress: false });
    expect(r.data.periods.a.deleted).toBe(true);
  });

  it('keeps own profile and progress on partner sync', () => {
    const other: Profile = { ...profile, id: 'other', role: 'tracker' };
    const current = data({ progress: { l1: { lessonId: 'l1', readAt: 5 } } });
    const incoming = createSnapshot(
      data({ profile: other, progress: { l2: { lessonId: 'l2', readAt: 6 } } }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: false, includeProgress: false });
    expect(r.data.profile?.id).toBe('me');
    expect(Object.keys(r.data.progress)).toEqual(['l1']);
  });

  it('restores profile, settings and progress from a backup', () => {
    const current: SnapshotData = data({ profile: undefined });
    const incoming = createSnapshot(
      data({
        settings: { ...DEFAULT_SETTINGS, defaultCycleLength: 30 },
        progress: {
          l1: { lessonId: 'l1', readAt: 5, quizScore: 3, quizTotal: 5 },
        },
      }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: true, includeProgress: true });
    expect(r.data.profile?.id).toBe('me');
    expect(r.data.settings.defaultCycleLength).toBe(30);
    expect(r.data.progress.l1.quizScore).toBe(3);
  });

  it('merges progress keeping earliest read and best quiz', () => {
    const current = data({
      progress: { l1: { lessonId: 'l1', readAt: 9, quizScore: 2, quizTotal: 5 } },
    });
    const incoming = createSnapshot(
      data({
        progress: {
          l1: { lessonId: 'l1', readAt: 4, actionDoneAt: 7, quizScore: 4, quizTotal: 5 },
        },
      }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: true, includeProgress: true });
    expect(r.data.progress.l1).toEqual({
      lessonId: 'l1',
      readAt: 4,
      actionDoneAt: 7,
      quizScore: 4,
      quizTotal: 5,
    });
  });

  it('applies last-write-wins to the week focus on every merge', () => {
    const current = data({
      weekFocus: {
        '1': { week: 1, text: 'mine', updatedAt: 10 },
        '2': { week: 2, text: 'ours', updatedAt: 10 },
      },
    });
    const incoming = createSnapshot(
      data({
        weekFocus: {
          '1': { week: 1, text: 'older', updatedAt: 5 },
          '2': { week: 2, text: 'newer', updatedAt: 15 },
          '3': { week: 3, text: 'new', updatedAt: 1 },
        },
      }),
      'dev2',
    );
    const r = mergeSnapshot(current, incoming, { includeProfile: false, includeProgress: false });
    expect(r.data.weekFocus['1'].text).toBe('mine');
    expect(r.data.weekFocus['2'].text).toBe('newer');
    expect(r.data.weekFocus['3'].text).toBe('new');
  });

  it('unions ticked week actions only when progress is included', () => {
    const current = data({ weekActionsDone: { '2026-03-01': { '1': [0] } } });
    const incoming = createSnapshot(
      data({
        weekActionsDone: { '2026-03-01': { '1': [2], '2': [1] }, '2026-03-29': { '1': [0] } },
      }),
      'dev2',
    );
    const sync = mergeSnapshot(current, incoming, {
      includeProfile: false,
      includeProgress: false,
    });
    expect(sync.data.weekActionsDone).toEqual({ '2026-03-01': { '1': [0] } });
    const restore = mergeSnapshot(current, incoming, {
      includeProfile: true,
      includeProgress: true,
    });
    expect(restore.data.weekActionsDone).toEqual({
      '2026-03-01': { '1': [0, 2], '2': [1] },
      '2026-03-29': { '1': [0] },
    });
  });

  it('unions ticked phase actions on restore, drops bad keys and leaves them out of sync', () => {
    const current = data({ phaseActionsDone: { '2026-03-01': { menstrual: [0] } } });
    const incoming = createSnapshot(
      data({ phaseActionsDone: { '2026-03-01': { menstrual: [2], luteal: [1] } } }),
      'dev2',
    );
    expect(createSyncSnapshot(current, 'dev').phaseActionsDone).toEqual({});
    const restore = mergeSnapshot(current, incoming, {
      includeProfile: true,
      includeProgress: true,
    });
    expect(restore.data.phaseActionsDone).toEqual({
      '2026-03-01': { menstrual: [0, 2], luteal: [1] },
    });
    const parsed = parseSnapshot(
      JSON.stringify({
        ...incoming,
        phaseActionsDone: { '2026-03-01': { menstrual: [1, 99, 'x'], bogus: [0] }, nope: {} },
      }),
    );
    expect(parsed.phaseActionsDone).toEqual({ '2026-03-01': { menstrual: [1] } });
    // Older snapshots without the field merge as empty.
    const old = mergeSnapshot(
      current,
      { ...incoming, phaseActionsDone: undefined as unknown as typeof incoming.phaseActionsDone },
      { includeProfile: true, includeProgress: true },
    );
    expect(old.data.phaseActionsDone).toEqual(current.phaseActionsDone);
  });

  it('is idempotent', () => {
    const current = data({ periods: { a: p('a', '2026-03-01', 10) } });
    const snap = createSnapshot(current, 'dev1');
    const once = mergeSnapshot(current, snap, { includeProfile: true, includeProgress: true });
    const twice = mergeSnapshot(once.data, snap, { includeProfile: true, includeProgress: true });
    expect(twice.data).toEqual(once.data);
    expect(twice.periodsChanged).toBe(0);
  });
});

describe('createSyncSnapshot', () => {
  it('only includes cycle data changed since the given time', () => {
    const d = data({
      periods: { a: p('a', '2026-03-01', 10), b: p('b', '2026-03-29', 20) },
      progress: { l1: { lessonId: 'l1', readAt: 1 } },
    });
    const snap = createSyncSnapshot(d, 'dev1', 15);
    expect(snap.periods.map((x) => x.id)).toEqual(['b']);
    expect(snap.profile).toBeUndefined();
    expect(snap.progress).toEqual([]);
  });

  it('shares the week focus but never the ticked actions', () => {
    const d = data({
      weekFocus: {
        '1': { week: 1, text: 'old', updatedAt: 10 },
        '4': { week: 4, text: 'new', updatedAt: 20 },
      },
      weekActionsDone: { '2026-03-01': { '1': [0] } },
    });
    const snap = createSyncSnapshot(d, 'dev1', 15);
    expect(snap.weekFocus.map((f) => f.week)).toEqual([4]);
    expect(snap.weekActionsDone).toEqual({});
  });
});

describe('previewMerge', () => {
  it('counts what a merge would change without writing', () => {
    const current = data({
      periods: { a: p('a', '2026-03-01', 10), b: p('b', '2026-03-29', 20) },
    });
    const incoming = createSnapshot(
      data({
        periods: {
          a: p('a', '2026-03-02', 5),
          b: p('b', '2026-03-30', 25),
          c: p('c', '2026-04-27', 1),
        },
      }),
      'dev2',
    );
    const preview = previewMerge(current, incoming);
    expect(preview).toEqual({
      newPeriods: 1,
      updatedPeriods: 1,
      newLogs: 0,
      updatedLogs: 0,
      periodRange: { from: '2026-03-02', to: '2026-04-27' },
    });
    expect(current.periods.b.startDate).toBe('2026-03-29');
  });
});
