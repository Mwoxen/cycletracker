import { addMonths, startOfMonth } from 'date-fns';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { fromISODate } from '@/engine/dates';
import { useCycle } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { Legend, MonthGrid } from '@/ui/month-grid';
import { Button, Screen } from '@/ui/primitives';
import { TabSwipe } from '@/ui/tab-swipe';

const MONTHS_AHEAD = 2;
const MONTHS_PER_PRESS = 3;

export default function CalendarScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const { today, snapshot } = useCycle();
  const [earlier, setEarlier] = useState(0);

  const months = useMemo(() => {
    const current = startOfMonth(fromISODate(today));
    const list: Date[] = [];
    for (let i = -earlier; i <= MONTHS_AHEAD; i += 1) list.push(addMonths(current, i));
    return list;
  }, [today, earlier]);

  const subtitle =
    snapshot.prediction && snapshot.today
      ? t('calendar.subtitle', {
          n: snapshot.today.cycleDay,
          date: fmt.short(snapshot.prediction.nextPeriodStart),
        })
      : t('home.regularity.unknown');

  return (
    <TabSwipe tab="calendar">
      <Screen title={t('calendar.title')} subtitle={subtitle}>
        <Legend />
        <View style={styles.earlierRow}>
          <Button
            title={t('calendar.showEarlier')}
            variant="plain"
            onPress={() => setEarlier((n) => n + MONTHS_PER_PRESS)}
          />
          {earlier > 0 ? (
            <Button
              title={t('calendar.hideEarlier')}
              variant="plain"
              onPress={() => setEarlier(0)}
            />
          ) : null}
        </View>
        {months.map((m) => (
          <MonthGrid
            key={m.toISOString()}
            month={m}
            today={today}
            onSelectDay={(date) => router.push(`/log/${date}`)}
          />
        ))}
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  earlierRow: { flexDirection: 'row', justifyContent: 'center', flexWrap: 'wrap' },
});
