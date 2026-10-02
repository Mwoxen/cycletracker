import { bandKind, bandSegments, isPredictedDay, type CalendarDayStatus } from './use-cycle';

function status(extra: Partial<CalendarDayStatus>): CalendarDayStatus {
  return {
    date: '2026-05-10',
    cycleDay: 1,
    phase: 'follicular',
    isLoggedPeriod: false,
    isPredictedPeriod: false,
    isFertile: false,
    isOvulation: false,
    isPms: false,
    cycleStart: '2026-05-01',
    cycleLength: 28,
    projected: false,
    ...extra,
  };
}

describe('bandKind', () => {
  it('bands a logged period', () => {
    expect(bandKind(status({ isLoggedPeriod: true, phase: 'menstrual' }))).toBe('period');
  });
  it('gives predicted period days and the rest of the menstrual phase the light band', () => {
    expect(bandKind(status({ isPredictedPeriod: true, phase: 'menstrual' }))).toBe('predicted');
    expect(bandKind(status({ isLoggedPeriod: true, projected: true, phase: 'menstrual' }))).toBe(
      'predicted',
    );
    expect(bandKind(status({ phase: 'menstrual' }))).toBe('predicted');
    expect(isPredictedDay(status({ isLoggedPeriod: true, projected: true }))).toBe(true);
    expect(isPredictedDay(status({ isLoggedPeriod: true }))).toBe(false);
  });
  it('bands the fertile window including ovulation, PMS, and otherwise the phase', () => {
    expect(bandKind(status({ isFertile: true }))).toBe('fertile');
    expect(bandKind(status({ isFertile: true, isOvulation: true, phase: 'ovulation' }))).toBe(
      'fertile',
    );
    expect(bandKind(status({ isPms: true, phase: 'luteal' }))).toBe('pms');
    expect(bandKind(status({ phase: 'luteal' }))).toBe('luteal');
    expect(bandKind(status({ phase: 'follicular' }))).toBe('follicular');
    expect(bandKind(undefined)).toBeUndefined();
  });
});

describe('bandSegments', () => {
  it('connects runs and rounds their ends within the row', () => {
    expect(
      bandSegments(['period', 'period', undefined, 'fertile', 'fertile', 'fertile', 'pms']),
    ).toEqual([
      { kind: 'period', start: true, end: false },
      { kind: 'period', start: false, end: true },
      undefined,
      { kind: 'fertile', start: true, end: false },
      { kind: 'fertile', start: false, end: false },
      { kind: 'fertile', start: false, end: true },
      { kind: 'pms', start: true, end: true },
    ]);
  });
  it('rounds at the row edges and makes single days full pills', () => {
    expect(bandSegments(['fertile'])).toEqual([{ kind: 'fertile', start: true, end: true }]);
    expect(bandSegments([undefined, undefined])).toEqual([undefined, undefined]);
    expect(bandSegments(['pms', 'fertile'])).toEqual([
      { kind: 'pms', start: true, end: true },
      { kind: 'fertile', start: true, end: true },
    ]);
  });
});
