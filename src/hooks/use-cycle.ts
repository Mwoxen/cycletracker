import { useMemo } from 'react';

import type { ISODate } from '@/domain/types';
import { cycleSnapshot, dayStatus, projectedPeriods, type DayStatus } from '@/engine/cycle';
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

export type CalendarDayStatus = DayStatus & { projected: boolean };

/** Continuous calendar bands, in priority order when windows overlap. */
export type BandKind = 'period' | 'fertile' | 'pms';

export interface BandSegment {
  kind: BandKind;
  /** First cell of a run within its row: rounded leading edge. */
  start: boolean;
  /** Last cell of a run within its row: rounded trailing edge. */
  end: boolean;
}

/** True for a day drawn as a dashed "expected period" circle (never banded). */
export function isPredictedDay(s: CalendarDayStatus | undefined): boolean {
  if (!s) return false;
  const logged = s.isLoggedPeriod && !s.projected;
  return !logged && (s.isPredictedPeriod || (s.isLoggedPeriod && s.projected));
}

/** Which band a day belongs to, if any. Predicted period days get no band. */
export function bandKind(s: CalendarDayStatus | undefined): BandKind | undefined {
  if (!s) return undefined;
  if (s.isLoggedPeriod && !s.projected) return 'period';
  if (isPredictedDay(s)) return undefined;
  if (s.isFertile || s.isOvulation) return 'fertile';
  if (s.isPms) return 'pms';
  return undefined;
}

/**
 * Turns one row of band kinds into segments that connect horizontally: a run of equal kinds
 * shares one band with rounded ends; a single day becomes a full pill.
 */
export function bandSegments(kinds: (BandKind | undefined)[]): (BandSegment | undefined)[] {
  return kinds.map((kind, i) =>
    kind
      ? {
          kind,
          start: i === 0 || kinds[i - 1] !== kind,
          end: i === kinds.length - 1 || kinds[i + 1] !== kind,
        }
      : undefined,
  );
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
