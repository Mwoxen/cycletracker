import { useMemo } from 'react';

import {
  currentWeekly,
  getContent,
  getWrap,
  isMonthAvailable,
  isWrapUnlocked,
  pickTodaysCard,
  programPosition,
} from '@/content';
import { useStore } from '@/store/store';

import { useCycle } from './use-cycle';

export function useContent() {
  const language = useStore((s) => s.profile?.language ?? 'en');
  return useMemo(() => getContent(language), [language]);
}

export function useProgram() {
  const profile = useStore((s) => s.profile);
  const progress = useStore((s) => s.progress);
  const content = useContent();
  const { today, snapshot } = useCycle();
  return useMemo(() => {
    const start = profile?.programStartDate ?? today;
    const position = programPosition(start, today);
    const available = isMonthAvailable(content, position.month);
    const { scheduled, phaseMatch } = pickTodaysCard(content, position, snapshot.today?.phase);
    const weekly = currentWeekly(content, position);
    const wrap = isWrapUnlocked(position) ? getWrap(content, position.month) : undefined;
    return {
      content,
      position,
      available,
      card: scheduled,
      phaseMatch,
      weekly,
      wrap,
      progress,
    };
  }, [profile?.programStartDate, today, content, snapshot.today?.phase, progress]);
}
