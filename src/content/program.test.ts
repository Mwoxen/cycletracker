import { PROGRAM_DAYS } from './types';
import {
  isDailyUnlocked,
  isMonthWrapUnlocked,
  isWeeklyUnlocked,
  isWrapUnlocked,
  programPosition,
} from './program';

describe('programPosition', () => {
  it.each([
    ['2026-03-01', 1, 1, 1, 1],
    ['2026-03-07', 7, 1, 7, 1],
    ['2026-03-08', 8, 1, 8, 2],
    ['2026-03-30', 30, 1, 30, 4],
    ['2026-03-31', 31, 2, 1, 1],
    ['2026-04-27', 58, 2, 28, 4],
    ['2027-02-23', 360, 12, 30, 4],
    ['2027-02-24', 361, 12, 31, 4],
    ['2027-02-28', 365, 12, 35, 4],
  ])('%s -> day %i, month %i, day-in-month %i, week %i', (today, day, month, dim, week) => {
    const p = programPosition('2026-03-01', today);
    expect(p.programDay).toBe(day);
    expect(p.month).toBe(month);
    expect(p.dayInMonth).toBe(dim);
    expect(p.weekInMonth).toBe(week);
    expect(p.completed).toBe(false);
    expect(p.notStarted).toBe(false);
  });

  it('clamps before the start', () => {
    const p = programPosition('2026-03-01', '2026-02-20');
    expect(p.notStarted).toBe(true);
    expect(p.programDay).toBe(1);
  });

  it('clamps after the end', () => {
    const p = programPosition('2026-03-01', '2027-03-10');
    expect(p.completed).toBe(true);
    expect(p.programDay).toBe(PROGRAM_DAYS);
    expect(p.month).toBe(12);
    expect(p.dayInMonth).toBe(35);
    // The last bonus day is not yet "completed"; the day after it is.
    expect(programPosition('2026-03-01', '2027-02-28').completed).toBe(false);
    expect(programPosition('2026-03-01', '2027-03-01').completed).toBe(true);
  });
});

describe('unlocking', () => {
  const pos = programPosition('2026-03-01', '2026-03-20'); // day 20, month 1, week 3
  it('unlocks daily cards up to today', () => {
    expect(isDailyUnlocked(pos, 1, 20)).toBe(true);
    expect(isDailyUnlocked(pos, 1, 21)).toBe(false);
    expect(isDailyUnlocked(pos, 2, 1)).toBe(false);
  });
  it('unlocks weekly reads at the start of each week', () => {
    expect(isWeeklyUnlocked(pos, 1, 3)).toBe(true);
    expect(isWeeklyUnlocked(pos, 1, 4)).toBe(false);
  });
  it('unlocks the bonus cards on days 361-365', () => {
    const day360 = programPosition('2026-03-01', '2027-02-23');
    expect(isDailyUnlocked(day360, 12, 31)).toBe(false);
    const day361 = programPosition('2026-03-01', '2027-02-24');
    expect(isDailyUnlocked(day361, 12, 31)).toBe(true);
    expect(isDailyUnlocked(day361, 12, 32)).toBe(false);
  });
  it('unlocks the wrap on the last day of the month', () => {
    expect(isWrapUnlocked(pos)).toBe(false);
    expect(isMonthWrapUnlocked(pos, 1)).toBe(false);
    const last = programPosition('2026-03-01', '2026-03-30');
    expect(isWrapUnlocked(last)).toBe(true);
    expect(isMonthWrapUnlocked(last, 1)).toBe(true);
  });
});
