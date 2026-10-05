import { useMemo } from 'react';

import { getContent, type CycleWeekFocus } from '@/content';
import type { CycleWeek, ISODate } from '@/domain/types';
import {
  cycleSnapshot,
  cycleWeekFor,
  cycleWeekRange,
  cycleWeekStartDates,
  dayStatus,
  projectedPeriods,
  type DayStatus,
} from '@/engine/cycle';
import { isoWeekOf } from '@/engine/dates';
import { selectActivePeriods, useStore } from '@/store/store';

import { useToday } from './use-today';

export function useCycle() {
  const today = useToday();
  const periods = useStore(selectActivePeriods);
  const settings = useStore((s) => s.settings);
  return useMemo(
    () => ({ today, periods, settings, snapshot: cycleSnapshot(periods, settings, today) }),
    [today, periods, settings],
  );
}

export interface CycleWeekState {
  /** The cycle week today falls in. */
  week: CycleWeek;
  /** Cycle day range of the current week. */
  range: { from: number; to: number };
  /** ISO calendar week number of today. */
  isoWeek: number;
  cycleStart: ISODate;
  cycleLength: number;
  cycleDay: number;
  today: ISODate;
  /** Calendar date each cycle week starts on in this cycle. */
  startDates: Record<CycleWeek, ISODate>;
  /** Content for the current week. */
  focus: CycleWeekFocus;
  /** The couple's own focus sentence for the current week, if any. */
  ownFocus?: string;
  /** Action indexes ticked for the current week of this cycle. */
  doneIndexes: number[];
  /** Content for all four weeks, in order. */
  weeks: CycleWeekFocus[];
  /** The couple's own focus per week, keyed by `String(week)`. */
  ownFocusByWeek: Record<string, string>;
  /** Ticked action indexes per week of this cycle, keyed by `String(week)`. */
  doneByWeek: Record<string, number[]>;
}

/** Everything the cycle-week card needs, or undefined without cycle data. */
export function useCycleWeek(): CycleWeekState | undefined {
  const { snapshot } = useCycle();
  const language = useStore((s) => s.profile?.language ?? 'en');
  const weekFocus = useStore((s) => s.weekFocus);
  const weekActionsDone = useStore((s) => s.weekActionsDone);
  return useMemo(() => {
    const day = snapshot.today;
    if (!day || !snapshot.hasData) return undefined;
    const weeks = getContent(language).cycleWeeks;
    const week = cycleWeekFor(day.cycleDay);
    const weekContent = weeks.find((w) => w.week === week);
    if (!weekContent) return undefined;
    const ownFocusByWeek: Record<string, string> = {};
    for (const f of Object.values(weekFocus)) if (f.text) ownFocusByWeek[String(f.week)] = f.text;
    const doneByWeek = weekActionsDone[day.cycleStart] ?? {};
    return {
      week,
      range: cycleWeekRange(week, day.cycleLength),
      isoWeek: isoWeekOf(day.date),
      cycleStart: day.cycleStart,
      cycleLength: day.cycleLength,
      cycleDay: day.cycleDay,
      today: day.date,
      startDates: cycleWeekStartDates(day.cycleStart),
      focus: weekContent,
      ownFocus: ownFocusByWeek[String(week)],
      doneIndexes: doneByWeek[String(week)] ?? [],
      weeks,
      ownFocusByWeek,
      doneByWeek,
    };
  }, [snapshot, language, weekFocus, weekActionsDone]);
}

export type CalendarDayStatus = DayStatus & { projected: boolean };

/** True for a day drawn as an "expected period" (dashed) rather than a logged one. */
export function isPredictedDay(s: CalendarDayStatus | undefined): boolean {
  if (!s) return false;
  const logged = s.isLoggedPeriod && !s.projected;
  return !logged && (s.isPredictedPeriod || (s.isLoggedPeriod && s.projected));
}

/** Day status for calendar cells, including projected future cycles. */
export function useCalendarDays(dates: ISODate[]) {
  const { today, periods, settings } = useCycle();
  return useMemo(() => {
    const projected = projectedPeriods(periods, settings, today, 3);
    const realStarts = new Set(periods.map((p) => p.startDate));
    const map = new Map<ISODate, CalendarDayStatus>();
    for (const d of dates) {
      const s = dayStatus(projected, settings, d);
      if (s) map.set(d, { ...s, projected: !realStarts.has(s.cycleStart) });
    }
    return map;
  }, [dates, periods, settings, today]);
}
