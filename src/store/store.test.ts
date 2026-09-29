import { DEFAULT_SETTINGS } from '@/domain/types';

import { createSnapshot } from './snapshot';
import { SCHEMA_VERSION, selectActivePeriods, selectSnapshotData, useStore } from './store';

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
