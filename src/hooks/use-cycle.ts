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

/** Day status for calendar cells, including projected future cycles. */
export function useCalendarDays(dates: ISODate[]) {
  const { today, periods, settings } = useCycle();
  return useMemo(() => {
    const projected = projectedPeriods(periods, settings, today, 3);
    const realStarts = new Set(periods.map((p) => p.startDate));
    const map = new Map<ISODate, DayStatus & { projected: boolean }>();
    for (const d of dates) {
      const s = dayStatus(projected, settings, d);
      if (s) map.set(d, { ...s, projected: !realStarts.has(s.cycleStart) });
    }
    return map;
  }, [dates, periods, settings, today]);
}
