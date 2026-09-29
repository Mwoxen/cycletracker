/**
 * Cycle engine: pure functions, no React, no I/O.
 *
 * The single source of truth is the list of period start dates. Everything else
 * (cycle length, predictions, phases) is derived from it plus the settings.
 */
import type { CycleWeek, ISODate, PeriodEvent, Phase, Settings } from '@/domain/types';

import { addDaysISO, compareISO, daysBetween } from './dates';

/** Cycles shorter or longer than this are treated as outliers and ignored for averages. */
export const MIN_PLAUSIBLE_CYCLE = 15;
export const MAX_PLAUSIBLE_CYCLE = 60;
/** How many recent cycles feed the average. */
export const CYCLES_FOR_AVERAGE = 6;
/** Standard deviation above which we call the cycle irregular. */
export const IRREGULAR_STDDEV = 4;
/** Fertile window: five days before ovulation through one day after. */
export const FERTILE_DAYS_BEFORE_OVULATION = 5;
export const FERTILE_DAYS_AFTER_OVULATION = 1;
/** PMS window: this many days before the predicted period. */
export const PMS_WINDOW_DAYS = 5;

export interface CycleStats {
  /** Cycle lengths (days between consecutive starts), oldest first, outliers removed. */
  lengths: number[];
  /** Average of the recent plausible cycles, or the default from settings. */
  averageCycleLength: number;
  /** Rounded standard deviation of the recent cycles; 0 if fewer than 2. */
  variability: number;
  regularity: 'unknown' | 'regular' | 'irregular';
  averagePeriodLength: number;
  /** Number of logged periods (not deleted). */
  periodCount: number;
}

export interface CycleWindow {
  start: ISODate;
  /** Inclusive. */
  end: ISODate;
}

export interface CyclePrediction {
  lastPeriodStart: ISODate;
  /** Predicted next period start date. */
  nextPeriodStart: ISODate;
  /** Predicted next period window. */
  nextPeriod: CycleWindow;
  ovulationDate: ISODate;
  fertileWindow: CycleWindow;
  pmsWindow: CycleWindow;
  /** Days from `today` until the next predicted period; negative when late. */
  daysUntilNextPeriod: number;
  isLate: boolean;
  daysLate: number;
}

export interface DayStatus {
  date: ISODate;
  /** 1-based day of the current cycle. */
  cycleDay: number;
  phase: Phase;
  /** True when the day falls inside a logged period (start..end). */
  isLoggedPeriod: boolean;
  isPredictedPeriod: boolean;
  isFertile: boolean;
  isOvulation: boolean;
  isPms: boolean;
  /** The period this day belongs to (start of cycle). */
  cycleStart: ISODate;
  /** Expected cycle length used for this cycle. */
  cycleLength: number;
}

export interface CycleSnapshot {
  hasData: boolean;
  stats: CycleStats;
  prediction?: CyclePrediction;
  today?: DayStatus;
}

/** Sorted, non-deleted periods, oldest first. */
export function sortedPeriods(periods: PeriodEvent[]): PeriodEvent[] {
  return periods
    .filter((p) => !p.deleted)
    .slice()
    .sort((a, b) => compareISO(a.startDate, b.startDate));
}

/** Only periods that started on or before the given day. */
export function periodsUpTo(periods: PeriodEvent[], date: ISODate): PeriodEvent[] {
  return sortedPeriods(periods).filter((p) => compareISO(p.startDate, date) <= 0);
}

function mean(values: number[]): number {
  return values.reduce((a, b) => a + b, 0) / values.length;
}

function stddev(values: number[]): number {
  if (values.length < 2) return 0;
  const m = mean(values);
  return Math.sqrt(mean(values.map((v) => (v - m) ** 2)));
}

export function computeStats(periods: PeriodEvent[], settings: Settings): CycleStats {
  const sorted = sortedPeriods(periods);
  const allLengths: number[] = [];
  for (let i = 1; i < sorted.length; i++) {
    allLengths.push(daysBetween(sorted[i - 1].startDate, sorted[i].startDate));
  }
  const plausible = allLengths.filter((l) => l >= MIN_PLAUSIBLE_CYCLE && l <= MAX_PLAUSIBLE_CYCLE);
  const recent = plausible.slice(-CYCLES_FOR_AVERAGE);

  const averageCycleLength =
    recent.length > 0 ? Math.round(mean(recent)) : settings.defaultCycleLength;
  const variability = recent.length >= 2 ? Math.round(stddev(recent)) : 0;
  const regularity: CycleStats['regularity'] =
    recent.length < 3 ? 'unknown' : variability > IRREGULAR_STDDEV ? 'irregular' : 'regular';

  const periodLengths = sorted
    .filter((p) => p.endDate && compareISO(p.endDate, p.startDate) >= 0)
    .map((p) => daysBetween(p.startDate, p.endDate as ISODate) + 1)
    .filter((l) => l >= 1 && l <= 14)
    .slice(-CYCLES_FOR_AVERAGE);
  const averagePeriodLength =
    periodLengths.length > 0 ? Math.round(mean(periodLengths)) : settings.defaultPeriodLength;

  return {
    lengths: recent,
    averageCycleLength,
    variability,
    regularity,
    averagePeriodLength,
    periodCount: sorted.length,
  };
}

/** Clamp luteal length so ovulation always lands after the period and before the next period. */
function effectiveLuteal(cycleLength: number, luteal: number, periodLength: number): number {
  const maxLuteal = Math.max(1, cycleLength - periodLength - 2);
  return Math.min(Math.max(luteal, 7), maxLuteal);
}

export function predict(
  periods: PeriodEvent[],
  settings: Settings,
  today: ISODate,
): CyclePrediction | undefined {
  const sorted = periodsUpTo(periods, today);
  if (sorted.length === 0) return undefined;
  const stats = computeStats(sorted, settings);
  const last = sorted[sorted.length - 1];
  const cycleLength = stats.averageCycleLength;
  const periodLength = stats.averagePeriodLength;
  const luteal = effectiveLuteal(cycleLength, settings.lutealLength, periodLength);

  let nextPeriodStart = addDaysISO(last.startDate, cycleLength);
  // If the prediction is already far in the past (user stopped logging), keep it
  // as "late" for up to one cycle, then roll forward so the calendar stays useful.
  let daysLate = daysBetween(nextPeriodStart, today);
  while (daysLate > cycleLength) {
    nextPeriodStart = addDaysISO(nextPeriodStart, cycleLength);
    daysLate = daysBetween(nextPeriodStart, today);
  }

  const ovulationDate = addDaysISO(nextPeriodStart, -luteal);
  const fertileWindow: CycleWindow = {
    start: addDaysISO(ovulationDate, -FERTILE_DAYS_BEFORE_OVULATION),
    end: addDaysISO(ovulationDate, FERTILE_DAYS_AFTER_OVULATION),
  };
  const pmsWindow: CycleWindow = {
    start: addDaysISO(nextPeriodStart, -PMS_WINDOW_DAYS),
    end: addDaysISO(nextPeriodStart, -1),
  };
  const daysUntilNextPeriod = daysBetween(today, nextPeriodStart);

  return {
    lastPeriodStart: last.startDate,
    nextPeriodStart,
    nextPeriod: { start: nextPeriodStart, end: addDaysISO(nextPeriodStart, periodLength - 1) },
    ovulationDate,
    fertileWindow,
    pmsWindow,
    daysUntilNextPeriod,
    isLate: daysUntilNextPeriod < 0,
    daysLate: Math.max(0, -daysUntilNextPeriod),
  };
}

function inWindow(date: ISODate, w: CycleWindow): boolean {
  return compareISO(date, w.start) >= 0 && compareISO(date, w.end) <= 0;
}

/**
 * Status for any calendar day. Past days are anchored to the logged cycle they belong to;
 * days after the last logged period use the prediction.
 */
export function dayStatus(
  periods: PeriodEvent[],
  settings: Settings,
  date: ISODate,
): DayStatus | undefined {
  const sorted = periodsUpTo(periods, date);
  if (sorted.length === 0) return undefined;
  const all = sortedPeriods(periods);
  const idx = sorted.length - 1;
  const cycleStartEvent = sorted[idx];
  const next = all[idx + 1];
  const stats = computeStats(sorted, settings);

  // Length of this cycle: actual when the next period is known, otherwise predicted.
  let cycleLength = next
    ? daysBetween(cycleStartEvent.startDate, next.startDate)
    : stats.averageCycleLength;
  const cycleDayRaw = daysBetween(cycleStartEvent.startDate, date) + 1;
  // Late period without a next start: extend the current cycle so the day stays luteal.
  if (!next && cycleDayRaw > cycleLength) cycleLength = cycleDayRaw;

  const periodLength = cycleStartEvent.endDate
    ? daysBetween(cycleStartEvent.startDate, cycleStartEvent.endDate) + 1
    : stats.averagePeriodLength;
  const luteal = effectiveLuteal(cycleLength, settings.lutealLength, periodLength);
  const cycleEndExclusive = addDaysISO(cycleStartEvent.startDate, cycleLength);
  const ovulationDate = addDaysISO(cycleEndExclusive, -luteal);
  const fertile: CycleWindow = {
    start: addDaysISO(ovulationDate, -FERTILE_DAYS_BEFORE_OVULATION),
    end: addDaysISO(ovulationDate, FERTILE_DAYS_AFTER_OVULATION),
  };
  const pms: CycleWindow = {
    start: addDaysISO(cycleEndExclusive, -PMS_WINDOW_DAYS),
    end: addDaysISO(cycleEndExclusive, -1),
  };

  const isLoggedPeriod =
    compareISO(date, cycleStartEvent.startDate) >= 0 &&
    compareISO(date, cycleStartEvent.endDate ?? cycleStartEvent.startDate) <= 0;
  const isPredictedPeriod =
    !cycleStartEvent.endDate && !isLoggedPeriod && cycleDayRaw <= periodLength;
  const isOvulation = date === ovulationDate;

  let phase: Phase;
  if (isLoggedPeriod || cycleDayRaw <= periodLength) phase = 'menstrual';
  else if (compareISO(date, addDaysISO(ovulationDate, -1)) < 0) phase = 'follicular';
  else if (compareISO(date, addDaysISO(ovulationDate, 1)) <= 0) phase = 'ovulation';
  else phase = 'luteal';

  return {
    date,
    cycleDay: cycleDayRaw,
    phase,
    isLoggedPeriod,
    isPredictedPeriod,
    isFertile: inWindow(date, fertile),
    isOvulation,
    isPms: inWindow(date, pms) && !isLoggedPeriod,
    cycleStart: cycleStartEvent.startDate,
    cycleLength,
  };
}

/** Days after the last logged period start that belong to the predicted next period. */
export function isPredictedPeriodDay(
  prediction: CyclePrediction | undefined,
  date: ISODate,
): boolean {
  return !!prediction && inWindow(date, prediction.nextPeriod);
}

export function cycleSnapshot(
  periods: PeriodEvent[],
  settings: Settings,
  today: ISODate,
): CycleSnapshot {
  const stats = computeStats(periods, settings);
  const prediction = predict(periods, settings, today);
  const todayStatus = dayStatus(periods, settings, today);
  return { hasData: !!prediction, stats, prediction, today: todayStatus };
}

/** Typical timing of a phase inside an average cycle, for the phase library. */
export function phaseForCycleDay(
  cycleDay: number,
  cycleLength: number,
  periodLength: number,
  lutealLength: number,
): Phase {
  const luteal = effectiveLuteal(cycleLength, lutealLength, periodLength);
  const ovulationDay = cycleLength - luteal + 1;
  if (cycleDay <= periodLength) return 'menstrual';
  if (cycleDay < ovulationDay - 1) return 'follicular';
  if (cycleDay <= ovulationDay + 1) return 'ovulation';
  return 'luteal';
}

/* Cycle weeks: the cycle split into four weeks, the last one running to the end of the cycle. */

export const DAYS_PER_CYCLE_WEEK = 7;
/** Week 4 always covers at least days 22-28, even in a shorter cycle. */
export const MIN_CYCLE_WEEK_4_END = 28;

/** Which cycle week a 1-based cycle day falls in; every day from 22 onward is week 4. */
export function cycleWeekFor(cycleDay: number): CycleWeek {
  const week = Math.ceil(Math.max(1, cycleDay) / DAYS_PER_CYCLE_WEEK);
  return Math.min(4, Math.max(1, week)) as CycleWeek;
}

/** Inclusive 1-based cycle day range of a cycle week in a cycle of the given length. */
export function cycleWeekRange(week: CycleWeek, cycleLength: number): { from: number; to: number } {
  const from = (week - 1) * DAYS_PER_CYCLE_WEEK + 1;
  if (week < 4) return { from, to: week * DAYS_PER_CYCLE_WEEK };
  return { from, to: Math.max(MIN_CYCLE_WEEK_4_END, Math.round(cycleLength)) };
}

/** Calendar dates on which each cycle week begins (cycle days 1, 8, 15 and 22). */
export function cycleWeekStartDates(cycleStart: ISODate): Record<CycleWeek, ISODate> {
  return {
    1: cycleStart,
    2: addDaysISO(cycleStart, DAYS_PER_CYCLE_WEEK),
    3: addDaysISO(cycleStart, 2 * DAYS_PER_CYCLE_WEEK),
    4: addDaysISO(cycleStart, 3 * DAYS_PER_CYCLE_WEEK),
  };
}

/** The phase that dominates each cycle week, for colouring. */
export const CYCLE_WEEK_PHASE: Record<CycleWeek, Phase> = {
  1: 'menstrual',
  2: 'follicular',
  3: 'ovulation',
  4: 'luteal',
};

/**
 * Real periods plus predicted future period starts, so the calendar can show
 * phases beyond the current cycle. Predicted events get ids starting with "predicted-".
 */
export function projectedPeriods(
  periods: PeriodEvent[],
  settings: Settings,
  today: ISODate,
  cycles = 3,
): PeriodEvent[] {
  const real = sortedPeriods(periods);
  const prediction = predict(real, settings, today);
  if (!prediction) return real;
  const stats = computeStats(real, settings);
  const out = [...real];
  let start = prediction.nextPeriodStart;
  const lastReal = real[real.length - 1];
  for (let i = 0; i < cycles; i++) {
    if (compareISO(start, lastReal.startDate) > 0 && !real.some((p) => p.startDate === start)) {
      out.push({
        id: `predicted-${i}`,
        startDate: start,
        endDate: addDaysISO(start, stats.averagePeriodLength - 1),
        updatedAt: 0,
      });
    }
    start = addDaysISO(start, stats.averageCycleLength);
  }
  return out;
}
