import { formatDistanceToNow } from 'date-fns';

import { currentLanguage, dateFnsLocale } from '@/i18n';

/** "3 minutter siden" / "2 days ago" in the active language. */
export function relativeTime(timestamp: number): string {
  return formatDistanceToNow(new Date(timestamp), {
    addSuffix: true,
    locale: dateFnsLocale(currentLanguage()),
  });
}
