import { format } from 'date-fns';
import { useTranslation } from 'react-i18next';

import type { ISODate } from '@/domain/types';
import { fromISODate } from '@/engine/dates';
import { currentLanguage, dateFnsLocale } from '@/i18n';

export function useFormat() {
  const { t } = useTranslation();
  const locale = dateFnsLocale(currentLanguage());
  return {
    long: (iso: ISODate) => format(fromISODate(iso), t('dates.formatLong'), { locale }),
    short: (iso: ISODate) => format(fromISODate(iso), t('dates.formatShort'), { locale }),
    monthYear: (date: Date) => format(date, t('dates.formatMonthYear'), { locale }),
    weekday: (date: Date) => format(date, 'EEEEE', { locale }),
    time: (date: Date) => format(date, 'p', { locale }),
  };
}
