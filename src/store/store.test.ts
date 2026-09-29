import { DEFAULT_SETTINGS } from '@/domain/types';

import { createSnapshot } from './snapshot';
import {
  SCHEMA_VERSION,
  selectActiveLogs,
  selectActivePeriods,
  selectSnapshotData,
  useStore,
} from './store';

jest.mock('@react-native-async-storage/async-storage', () =>
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);

const onboard = () =>
  useStore.getState().completeOnboarding({
    role: 'tracker',
    language: 'da',
    partnerName: 'Anna',
    programStartDate: '2026-03-01',
    lastPeriodStart: '2026-02-20',
    cycleLength: 29,
    periodLength: 4,
  });

beforeEach(() => {
  useStore.getState().resetAll();
});

describe('store', () => {
  it('returns reference-stable results from derived selectors', () => {
    // zustand re-renders forever if a selector returns a fresh array/object for unchanged state.
    onboard();
    const state = useStore.getState();
    expect(selectActivePeriods(state)).toBe(selectActivePeriods(state));
    expect(selectActiveLogs(state)).toBe(selectActiveLogs(state));
    expect(selectSnapshotData(state)).toBe(selectSnapshotData(state));
    useStore.getState().startPeriod('2026-03-20');
    const next = useStore.getState();
    expect(selectActivePeriods(next)).not.toBe(selectActivePeriods(state));
    expect(selectActivePeriods(next)).toHaveLength(2);
  });

  it('has the current schema version', () => {
    expect(useStore.getState().schemaVersion).toBe(SCHEMA_VERSION);
    expect(useStore.persist.getOptions().version).toBe(SCHEMA_VERSION);
  });

  it('completes onboarding with a profile, settings and the first period', () => {
    onboard();
    const s = useStore.getState();
    expect(s.profile?.partnerName).toBe('Anna');
    expect(s.settings.defaultCycleLength).toBe(29);
    expect(selectActivePeriods(s).map((p) => p.startDate)).toEqual(['2026-02-20']);
  });

  it('logs and edits periods without duplicates', () => {
    onboard();
    const id = useStore.getState().startPeriod('2026-03-20');
    expect(useStore.getState().startPeriod('2026-03-20')).toBe(id);
    useStore.getState().endPeriod(id, '2026-03-24');
    expect(useStore.getState().periods[id].endDate).toBe('2026-03-24');
    useStore.getState().endPeriod(id, '2026-03-10'); // before start: ignored
    expect(useStore.getState().periods[id].endDate).toBe('2026-03-24');
    useStore.getState().deletePeriod(id);
    expect(selectActivePeriods(useStore.getState()).map((p) => p.startDate)).toEqual([
      '2026-02-20',
    ]);
  });

  it('trims an overlapping earlier period when a new one starts', () => {
    onboard();
    const first = useStore.getState().startPeriod('2026-03-20');
    useStore.getState().endPeriod(first, '2026-03-26');
    useStore.getState().startPeriod('2026-03-24');
    expect(useStore.getState().periods[first].endDate).toBe('2026-03-23');
  });

  it('upserts one log per date', () => {
    onboard();
    useStore.getState().upsertLog('2026-03-05', { symptoms: ['cramps'] });
    useStore.getState().upsertLog('2026-03-05', { mood: 'low' });
    const logs = Object.values(useStore.getState().logs);
    expect(logs).toHaveLength(1);
    expect(logs[0]).toMatchObject({ symptoms: ['cramps'], mood: 'low' });
    useStore.getState().deleteLog('2026-03-05');
    expect(Object.values(useStore.getState().logs)[0].deleted).toBe(true);
  });

  it('tracks lesson progress', () => {
    onboard();
    useStore.getState().markRead('m01-d01');
    const first = useStore.getState().progress['m01-d01'].readAt;
    useStore.getState().markRead('m01-d01');
    expect(useStore.getState().progress['m01-d01'].readAt).toBe(first);
    useStore.getState().toggleActionDone('m01-d01');
    expect(useStore.getState().progress['m01-d01'].actionDoneAt).toBeDefined();
    useStore.getState().recordQuiz('m01-wrap', 4, 7);
    useStore.getState().recordQuiz('m01-wrap', 2, 7);
    expect(useStore.getState().progress['m01-wrap'].quizScore).toBe(4);
  });

  it("stores the couple's own week focus, trimmed and capped", () => {
    onboard();
    useStore.getState().setWeekFocus(2, '  Mere tid sammen  ');
    const first = useStore.getState().weekFocus['2'];
    expect(first).toMatchObject({ week: 2, text: 'Mere tid sammen' });
    expect(first.updatedAt).toBeGreaterThan(0);
    useStore.getState().setWeekFocus(2, 'Mere tid sammen');
    expect(useStore.getState().weekFocus['2']).toBe(first); // unchanged text: no new write
    useStore.getState().setWeekFocus(3, 'x'.repeat(200));
    expect(useStore.getState().weekFocus['3'].text).toHaveLength(120);
    useStore.getState().setWeekFocus(2, '');
    expect(useStore.getState().weekFocus['2'].text).toBe('');
  });

  it('toggles week actions per cycle start', () => {
    onboard();
    const toggle = useStore.getState().toggleWeekAction;
    toggle('2026-02-20', 1, 2);
    toggle('2026-02-20', 1, 0);
    expect(useStore.getState().weekActionsDone['2026-02-20']['1']).toEqual([0, 2]);
    toggle('2026-02-20', 1, 2);
    expect(useStore.getState().weekActionsDone['2026-02-20']['1']).toEqual([0]);
    toggle('2026-02-20', 4, 1);
    toggle('2026-03-20', 1, 1);
    expect(useStore.getState().weekActionsDone).toEqual({
      '2026-02-20': { '1': [0], '4': [1] },
      '2026-03-20': { '1': [1] },
    });
  });

  it('round-trips the week focus and actions through a snapshot', () => {
    onboard();
    useStore.getState().setWeekFocus(1, 'Ro');
    useStore.getState().toggleWeekAction('2026-02-20', 1, 1);
    const snap = createSnapshot(selectSnapshotData(useStore.getState()), 'dev');
    expect(snap.weekFocus).toHaveLength(1);
    useStore.getState().resetAll();
    expect(useStore.getState().weekFocus).toEqual({});
    expect(useStore.getState().weekActionsDone).toEqual({});
    useStore.getState().applySnapshot(snap, { includeProfile: true, includeProgress: true });
    expect(useStore.getState().weekFocus['1'].text).toBe('Ro');
    expect(useStore.getState().weekActionsDone['2026-02-20']['1']).toEqual([1]);
  });

  it('persists the week focus and actions and fills them in for older state', () => {
    const persisted = useStore.persist.getOptions().partialize!(useStore.getState()) as object;
    expect(Object.keys(persisted)).toEqual(
      expect.arrayContaining(['weekFocus', 'weekActionsDone']),
    );
    const merge = useStore.persist.getOptions().merge!;
    const merged = merge(
      { settings: { reminders: { pmsWindow: false } } },
      useStore.getState(),
    ) as typeof useStore extends { getState: () => infer S } ? S : never;
    expect(merged.weekFocus).toEqual({});
    expect(merged.weekActionsDone).toEqual({});
    expect(merged.settings.reminders.cycleWeek).toBe(true);
    expect(merged.settings.reminders.pmsWindow).toBe(false);
  });

  it('applies a partner snapshot without touching the own profile', () => {
    onboard();
    const other = createSnapshot(
      {
        ...selectSnapshotData(useStore.getState()),
        profile: { ...useStore.getState().profile!, id: 'other', partnerName: 'Bo' },
        periods: { x: { id: 'x', startDate: '2026-03-21', updatedAt: 5 } },
      },
      'other-device',
    );
    const result = useStore
      .getState()
      .applySnapshot(other, { includeProfile: false, includeProgress: false });
    expect(result.periods).toBe(1);
    expect(useStore.getState().profile?.partnerName).toBe('Anna');
    expect(useStore.getState().periods.x).toBeDefined();
  });

  it('resets everything but keeps the device id', () => {
    onboard();
    const device = useStore.getState().deviceId;
    useStore.getState().resetAll();
    const s = useStore.getState();
    expect(s.profile).toBeUndefined();
    expect(s.settings).toEqual(DEFAULT_SETTINGS);
    expect(s.deviceId).toBe(device);
  });

  it('migrates older persisted state without throwing', () => {
    const migrate = useStore.persist.getOptions().migrate!;
    const legacy = {
      schemaVersion: 0,
      deviceId: 'd',
      periods: {},
      logs: {},
      progress: {},
      pairing: {},
    };
    expect(() => migrate(legacy, 0)).not.toThrow();
  });
});
