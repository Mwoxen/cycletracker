import { DEFAULT_SETTINGS, type PeriodEvent, type Settings } from '@/domain/types';

import {
  computeStats,
  cycleSnapshot,
  dayStatus,
  isPredictedPeriodDay,
  projectedPeriods,
  phaseForCycleDay,
  predict,
} from './cycle';
import { addDaysISO, daysBetween, isValidISODate } from './dates';

const settings: Settings = { ...DEFAULT_SETTINGS };

let counter = 0;
function period(
  startDate: string,
  endDate?: string,
  extra: Partial<PeriodEvent> = {},
): PeriodEvent {
  counter += 1;
  return { id: `p${counter}`, startDate, endDate, updatedAt: counter, ...extra };
}

describe('dates', () => {
  it('adds days across month boundaries', () => {
    expect(addDaysISO('2026-01-30', 3)).toBe('2026-02-02');
    expect(addDaysISO('2026-03-01', -1)).toBe('2026-02-28');
  });
  it('computes calendar day differences', () => {
    expect(daysBetween('2026-01-01', '2026-01-29')).toBe(28);
    expect(daysBetween('2026-01-29', '2026-01-01')).toBe(-28);
  });
  it('validates ISO dates', () => {
    expect(isValidISODate('2026-02-28')).toBe(true);
    expect(isValidISODate('2026-02-30')).toBe(false);
    expect(isValidISODate('26-02-28')).toBe(false);
  });
});

describe('computeStats', () => {
  it('falls back to defaults with no data', () => {
    const s = computeStats([], settings);
    expect(s.averageCycleLength).toBe(28);
    expect(s.averagePeriodLength).toBe(5);
    expect(s.regularity).toBe('unknown');
    expect(s.periodCount).toBe(0);
  });

  it('uses defaults with a single period', () => {
    const s = computeStats([period('2026-01-01')], settings);
    expect(s.averageCycleLength).toBe(28);
    expect(s.lengths).toEqual([]);
    expect(s.periodCount).toBe(1);
  });

  it.each([
    [['2026-01-01', '2026-01-29', '2026-02-26', '2026-03-26'], 28, 'regular'],
    [['2026-01-01', '2026-01-31', '2026-03-02', '2026-04-01'], 30, 'regular'],
    [['2026-01-01', '2026-01-25', '2026-03-01', '2026-03-22'], 27, 'irregular'],
  ])('averages %j to %i (%s)', (starts, expected, regularity) => {
    const s = computeStats(
      starts.map((d) => period(d)),
      settings,
    );
    expect(s.averageCycleLength).toBe(expected);
    expect(s.regularity).toBe(regularity);
  });

  it('ignores implausible cycles and deleted periods', () => {
    const periods = [
      period('2025-06-01'),
      period('2026-01-01'), // 214-day gap: outlier
      period('2026-01-29'),
      period('2026-02-26'),
      period('2026-02-27', undefined, { deleted: true }),
    ];
    const s = computeStats(periods, settings);
    expect(s.lengths).toEqual([28, 28]);
    expect(s.periodCount).toBe(4);
  });

  it('only uses the most recent six cycles', () => {
    const starts: string[] = [];
    let d = '2025-01-01';
    for (let i = 0; i < 10; i++) {
      starts.push(d);
      d = addDaysISO(d, i < 3 ? 35 : 26);
    }
    const s = computeStats(
      starts.map((x) => period(x)),
      settings,
    );
    expect(s.lengths).toHaveLength(6);
    expect(s.averageCycleLength).toBe(26);
  });

  it('averages logged period lengths', () => {
    const s = computeStats(
      [period('2026-01-01', '2026-01-04'), period('2026-01-29', '2026-02-04')],
      settings,
    );
    expect(s.averagePeriodLength).toBe(6); // (4 + 7) / 2 = 5.5 -> 6
  });
});

describe('predict', () => {
  it('returns undefined without data', () => {
    expect(predict([], settings, '2026-05-01')).toBeUndefined();
  });

  it('predicts next period, ovulation and windows with defaults', () => {
    const p = predict([period('2026-03-01')], settings, '2026-03-10');
    expect(p).toBeDefined();
    expect(p?.nextPeriodStart).toBe('2026-03-29');
    expect(p?.nextPeriod).toEqual({ start: '2026-03-29', end: '2026-04-02' });
    expect(p?.ovulationDate).toBe('2026-03-15');
    expect(p?.fertileWindow).toEqual({ start: '2026-03-10', end: '2026-03-16' });
    expect(p?.pmsWindow).toEqual({ start: '2026-03-24', end: '2026-03-28' });
    expect(p?.daysUntilNextPeriod).toBe(19);
    expect(p?.isLate).toBe(false);
  });

  it('reports a late period', () => {
    const p = predict([period('2026-03-01')], settings, '2026-04-02');
    expect(p?.isLate).toBe(true);
    expect(p?.daysLate).toBe(4);
    expect(p?.daysUntilNextPeriod).toBe(-4);
  });

  it('rolls the prediction forward when logging stopped long ago', () => {
    const p = predict([period('2026-01-01')], settings, '2026-04-01');
    expect(p?.nextPeriodStart).toBe('2026-03-26');
    expect(p?.isLate).toBe(true);
    expect(p?.daysLate).toBe(6);
  });

  it('ignores periods logged after today', () => {
    const p = predict([period('2026-03-01'), period('2026-03-29')], settings, '2026-03-10');
    expect(p?.lastPeriodStart).toBe('2026-03-01');
  });

  it('keeps ovulation inside short cycles', () => {
    const periods = [period('2026-01-01'), period('2026-01-19'), period('2026-02-06')];
    const p = predict(periods, settings, '2026-02-10');
    expect(p?.nextPeriodStart).toBe('2026-02-24');
    // 18-day cycle, luteal clamped to 18 - 5 - 2 = 11.
    expect(p?.ovulationDate).toBe('2026-02-13');
    expect(daysBetween('2026-02-06', p?.ovulationDate ?? '')).toBeGreaterThan(5);
  });
});

describe('dayStatus', () => {
  const periods = [period('2026-03-01', '2026-03-05'), period('2026-03-29')];

  it('returns undefined before the first period', () => {
    expect(dayStatus(periods, settings, '2026-02-01')).toBeUndefined();
  });

  it.each([
    ['2026-03-01', 1, 'menstrual', true],
    ['2026-03-05', 5, 'menstrual', true],
    ['2026-03-06', 6, 'follicular', false],
    ['2026-03-13', 13, 'follicular', false],
    ['2026-03-14', 14, 'ovulation', false],
    ['2026-03-15', 15, 'ovulation', false],
    ['2026-03-16', 16, 'ovulation', false],
    ['2026-03-17', 17, 'luteal', false],
    ['2026-03-28', 28, 'luteal', false],
  ])('%s is cycle day %i in %s', (date, day, phase, logged) => {
    const s = dayStatus(periods, settings, date);
    expect(s?.cycleDay).toBe(day);
    expect(s?.phase).toBe(phase);
    expect(s?.isLoggedPeriod).toBe(logged);
    expect(s?.cycleLength).toBe(28);
  });

  it('uses the actual cycle length for completed cycles', () => {
    const p = [period('2026-01-01'), period('2026-02-05')]; // 35 days
    const s = dayStatus(p, settings, '2026-01-20');
    expect(s?.cycleLength).toBe(35);
    // Ovulation predicted on day 22 (35 - 14 + 1): day 20 is still follicular.
    expect(s?.phase).toBe('follicular');
    expect(dayStatus(p, settings, '2026-01-22')?.isOvulation).toBe(true);
  });

  it('marks predicted period days when no end date is logged', () => {
    const s = dayStatus([period('2026-03-29')], settings, '2026-03-31');
    expect(s?.isPredictedPeriod).toBe(true);
    expect(s?.phase).toBe('menstrual');
    expect(dayStatus([period('2026-03-29')], settings, '2026-04-03')?.isPredictedPeriod).toBe(
      false,
    );
  });

  it('flags fertile and pms windows', () => {
    expect(dayStatus(periods, settings, '2026-03-10')?.isFertile).toBe(true);
    expect(dayStatus(periods, settings, '2026-03-16')?.isFertile).toBe(true);
    expect(dayStatus(periods, settings, '2026-03-17')?.isFertile).toBe(false);
    expect(dayStatus(periods, settings, '2026-03-24')?.isPms).toBe(true);
    expect(dayStatus(periods, settings, '2026-03-23')?.isPms).toBe(false);
  });

  it('stays luteal when the period is late', () => {
    const s = dayStatus([period('2026-03-01')], settings, '2026-04-05');
    expect(s?.phase).toBe('luteal');
    expect(s?.cycleDay).toBe(36);
    expect(s?.cycleLength).toBe(36);
  });

  it('marks predicted next-period days from the prediction', () => {
    const p = predict([period('2026-03-01')], settings, '2026-03-10');
    expect(isPredictedPeriodDay(p, '2026-03-29')).toBe(true);
    expect(isPredictedPeriodDay(p, '2026-04-02')).toBe(true);
    expect(isPredictedPeriodDay(p, '2026-04-03')).toBe(false);
    expect(isPredictedPeriodDay(undefined, '2026-04-03')).toBe(false);
  });
});

describe('cycleSnapshot', () => {
  it('has no data when nothing is logged', () => {
    const s = cycleSnapshot([], settings, '2026-03-10');
    expect(s.hasData).toBe(false);
    expect(s.prediction).toBeUndefined();
    expect(s.today).toBeUndefined();
  });
  it('combines stats, prediction and today', () => {
    const s = cycleSnapshot([period('2026-03-01')], settings, '2026-03-10');
    expect(s.hasData).toBe(true);
    expect(s.today?.cycleDay).toBe(10);
    expect(s.prediction?.daysUntilNextPeriod).toBe(19);
  });
});

describe('phaseForCycleDay', () => {
  it.each([
    [1, 'menstrual'],
    [5, 'menstrual'],
    [6, 'follicular'],
    [13, 'follicular'],
    [14, 'ovulation'],
    [16, 'ovulation'],
    [17, 'luteal'],
    [28, 'luteal'],
  ])('day %i of a 28-day cycle is %s', (day, phase) => {
    expect(phaseForCycleDay(day, 28, 5, 14)).toBe(phase);
  });
});

describe('projectedPeriods', () => {
  it('adds predicted periods after the last real one', () => {
    const real = [period('2026-03-01', '2026-03-05')];
    const all = projectedPeriods(real, settings, '2026-03-10', 2);
    expect(all.map((p) => p.startDate)).toEqual(['2026-03-01', '2026-03-29', '2026-04-26']);
    expect(all[1].id).toBe('predicted-0');
    expect(all[1].endDate).toBe('2026-04-02');
    // Days in the projected cycle resolve to phases.
    expect(dayStatus(all, settings, '2026-04-12')?.phase).toBe('ovulation');
  });
  it('returns real periods only when there is no data', () => {
    expect(projectedPeriods([], settings, '2026-03-10')).toEqual([]);
  });
});
