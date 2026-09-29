import { DEFAULT_SETTINGS, type Profile } from '@/domain/types';
import { cycleSnapshot } from '@/engine/cycle';

import { buildWidgetState, writeWidgetState } from './sync';

const profile: Profile = {
  id: 'p',
  role: 'tracker',
  language: 'da',
  partnerName: 'Anna',
  programStartDate: '2026-03-01',
  plan: 'free',
  onboardedAt: 1,
};

describe('widget state', () => {
  it('builds a compact state from the cycle snapshot', () => {
    const snapshot = cycleSnapshot(
      [{ id: 'a', startDate: '2026-03-01', updatedAt: 1 }],
      DEFAULT_SETTINGS,
      '2026-03-10',
    );
    const state = buildWidgetState(profile, DEFAULT_SETTINGS, snapshot, '2026-03-10');
    expect(state).toMatchObject({
      name: 'Anna',
      isTracker: true,
      lang: 'da',
      date: '2026-03-10',
      cycleDay: 10,
      cycleLength: 28,
      periodLength: 5,
      lutealLength: 14,
      daysUntilPeriod: 19,
      hasData: true,
    });
  });

  it('marks missing data', () => {
    const snapshot = cycleSnapshot([], DEFAULT_SETTINGS, '2026-03-10');
    expect(buildWidgetState(profile, DEFAULT_SETTINGS, snapshot, '2026-03-10').hasData).toBe(false);
  });

  it('never throws when the native module is unavailable', () => {
    const snapshot = cycleSnapshot([], DEFAULT_SETTINGS, '2026-03-10');
    expect(() =>
      writeWidgetState(buildWidgetState(profile, DEFAULT_SETTINGS, snapshot, '2026-03-10')),
    ).not.toThrow();
  });
});
