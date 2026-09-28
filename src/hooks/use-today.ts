import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import type { ISODate } from '@/domain/types';
import { todayISO } from '@/engine/dates';

/** Today's ISO date, refreshed when the app returns to the foreground. */
export function useToday(): ISODate {
  const [today, setToday] = useState(() => todayISO());
  useEffect(() => {
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') {
        const now = todayISO();
        setToday((prev) => (prev === now ? prev : now));
      }
    });
    return () => sub.remove();
  }, []);
  return today;
}
