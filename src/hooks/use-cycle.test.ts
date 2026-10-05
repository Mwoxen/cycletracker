import { phaseColor, phaseSoft, phaseTint } from '@/ui/colors';
import { cellMarks } from '@/ui/month-grid';

import { isPredictedDay, type CalendarDayStatus } from './use-cycle';

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

describe('isPredictedDay', () => {
  it('is true for expected periods and projected cycles, false for logged ones', () => {
    expect(isPredictedDay(status({ isPredictedPeriod: true, phase: 'menstrual' }))).toBe(true);
    expect(isPredictedDay(status({ isLoggedPeriod: true, projected: true }))).toBe(true);
    expect(isPredictedDay(status({ isLoggedPeriod: true }))).toBe(false);
    expect(isPredictedDay(undefined)).toBe(false);
  });
});

describe('cellMarks', () => {
  it('fills a logged period and dashes an expected one', () => {
    expect(cellMarks(status({ isLoggedPeriod: true, phase: 'menstrual' }))).toEqual({
      fill: phaseColor.menstrual,
      dashed: undefined,
      bar: false,
    });
    expect(cellMarks(status({ isPredictedPeriod: true, phase: 'menstrual' }))).toEqual({
      fill: phaseSoft.menstrual,
      dashed: phaseColor.menstrual,
      bar: false,
    });
    expect(
      cellMarks(status({ isLoggedPeriod: true, projected: true, phase: 'menstrual' })).dashed,
    ).toBe(phaseColor.menstrual);
  });

  it('tints the fertile window, dashes ovulation and bars PMS', () => {
    expect(cellMarks(status({ isFertile: true }))).toEqual({
      fill: phaseTint.ovulation,
      dashed: undefined,
      bar: false,
    });
    expect(cellMarks(status({ isFertile: true, isOvulation: true, phase: 'ovulation' }))).toEqual({
      fill: phaseTint.ovulation,
      dashed: phaseColor.ovulation,
      bar: false,
    });
    expect(cellMarks(status({ isPms: true, phase: 'luteal' }))).toEqual({
      fill: phaseSoft.luteal,
      dashed: undefined,
      bar: true,
    });
    expect(cellMarks(status({ phase: 'luteal' })).bar).toBe(false);
    expect(cellMarks(status({ phase: 'follicular' })).fill).toBe(phaseSoft.follicular);
    expect(cellMarks(undefined).fill).toBeUndefined();
  });
});
