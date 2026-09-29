import { useEffect, useState } from 'react';
import { AppState } from 'react-native';

import type { ISODate } from '@/domain/types';
import { todayISO } from '@/engine/dates';

/** Today's ISO date, refreshed when the app returns to the foreground and at midnight. */
export function useToday(): ISODate {
  const [today, setToday] = useState(() => todayISO());
  useEffect(() => {
    const refresh = () => {
      const now = todayISO();
      setToday((prev) => (prev === now ? prev : now));
    };
    const sub = AppState.addEventListener('change', (state) => {
      if (state === 'active') refresh();
    });
    // Also roll over at midnight while the app is open.
    const now = new Date();
    const midnight = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 5);
    const handle = setTimeout(refresh, midnight.getTime() - now.getTime());
    return () => {
      sub.remove();
      clearTimeout(handle);
    };
  }, [today]);
  return today;
}
