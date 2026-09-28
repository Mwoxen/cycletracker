import {
  addMonths,
  eachDayOfInterval,
  endOfMonth,
  endOfWeek,
  startOfMonth,
  startOfWeek,
} from 'date-fns';
import * as Haptics from 'expo-haptics';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { ISODate } from '@/domain/types';
import { fromISODate, toISODate } from '@/engine/dates';
import { useCalendarDays } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, phaseTint, spacing } from '@/ui/colors';
import { Card, Symbol, Txt } from '@/ui/primitives';

const WEEK_STARTS_ON = 1; // Monday

export function MonthGrid({
  today,
  onSelectDay,
}: {
  today: ISODate;
  onSelectDay: (date: ISODate) => void;
}) {
  const { t } = useTranslation();
  const fmt = useFormat();
  const [offset, setOffset] = useState(0);
  const hasData = useStore((s) => Object.values(s.periods).some((p) => !p.deleted));
  const logs = useStore(selectActiveLogs);

  const monthStart = useMemo(
    () => startOfMonth(addMonths(fromISODate(today), offset)),
    [today, offset],
  );
  const days = useMemo(() => {
    const start = startOfWeek(monthStart, { weekStartsOn: WEEK_STARTS_ON });
    const end = endOfWeek(endOfMonth(monthStart), { weekStartsOn: WEEK_STARTS_ON });
    return eachDayOfInterval({ start, end }).map((d) => ({
      date: d,
      iso: toISODate(d),
      inMonth: d.getMonth() === monthStart.getMonth(),
    }));
  }, [monthStart]);
  const isos = useMemo(() => days.map((d) => d.iso), [days]);
  const statuses = useCalendarDays(isos);
  const loggedDates = useMemo(() => new Set(logs.map((l) => l.date)), [logs]);
  const weekdays = useMemo(() => days.slice(0, 7).map((d) => fmt.weekday(d.date)), [days, fmt]);

  const move = (delta: number) => {
    void Haptics.selectionAsync();
    setOffset((o) => o + delta);
  };

  return (
    <Card style={{ gap: spacing.sm }}>
      <View style={styles.header}>
        <Pressable onPress={() => move(-1)} hitSlop={12} accessibilityRole="button">
          <Symbol name="chevron.left" size={18} />
        </Pressable>
        <Pressable onPress={() => setOffset(0)}>
          <Txt variant="headline">{fmt.monthYear(monthStart)}</Txt>
        </Pressable>
        <Pressable onPress={() => move(1)} hitSlop={12} accessibilityRole="button">
          <Symbol name="chevron.right" size={18} />
        </Pressable>
      </View>
      <View style={styles.weekRow}>
        {weekdays.map((w, i) => (
          <Txt key={i} variant="caption" style={styles.weekday}>
            {w}
          </Txt>
        ))}
      </View>
      <View style={styles.grid}>
        {days.map((d) => {
          const s = statuses.get(d.iso);
          const isToday = d.iso === today;
          const period = s?.isLoggedPeriod && !s.projected;
          const predicted = (s?.isPredictedPeriod || (s?.isLoggedPeriod && s.projected)) && !period;
          const bg = period
            ? colors.red
            : s && !predicted
              ? s.isPms
                ? phaseTint.luteal
                : s.isFertile
                  ? phaseTint.ovulation
                  : s.phase === 'follicular'
                    ? phaseTint.follicular
                    : s.phase === 'luteal'
                      ? 'transparent'
                      : phaseTint[s.phase]
              : 'transparent';
          return (
            <Pressable
              key={d.iso}
              onPress={() => onSelectDay(d.iso)}
              accessibilityRole="button"
              accessibilityLabel={fmt.long(d.iso)}
              style={({ pressed }) => [styles.cell, pressed && { opacity: 0.6 }]}>
              <View
                style={[
                  styles.circle,
                  { backgroundColor: bg },
                  predicted && styles.predicted,
                  isToday && styles.today,
                  !d.inMonth && { opacity: 0.35 },
                ]}>
                <Txt
                  variant="callout"
                  color={period ? colors.white : colors.label}
                  style={isToday && { fontWeight: '700' }}>
                  {d.date.getDate()}
                </Txt>
                {s?.isOvulation ? <View style={styles.ovulationDot} /> : null}
              </View>
              <View style={[styles.logDot, { opacity: loggedDates.has(d.iso) ? 1 : 0 }]} />
            </Pressable>
          );
        })}
      </View>
      {!hasData ? <Txt variant="footnote">{t('calendar.noData')}</Txt> : null}
    </Card>
  );
}

export function Legend() {
  const { t } = useTranslation();
  const items: { label: string; style: object }[] = [
    { label: t('calendar.period'), style: { backgroundColor: colors.red } },
    { label: t('calendar.predictedPeriod'), style: styles.predicted },
    { label: t('calendar.fertile'), style: { backgroundColor: phaseTint.ovulation } },
    { label: t('calendar.ovulation'), style: { backgroundColor: colors.orange } },
    { label: t('calendar.pms'), style: { backgroundColor: phaseTint.luteal } },
    {
      label: t('calendar.logged'),
      style: { backgroundColor: colors.tint, width: 6, height: 6, borderRadius: 3 },
    },
  ];
  return (
    <Card>
      <View style={styles.legend}>
        {items.map((it) => (
          <View key={it.label} style={styles.legendItem}>
            <View style={[styles.legendSwatch, it.style]} />
            <Txt variant="footnote">{it.label}</Txt>
          </View>
        ))}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: spacing.xs,
  },
  weekRow: { flexDirection: 'row' },
  weekday: { flex: 1, textAlign: 'center' },
  grid: { flexDirection: 'row', flexWrap: 'wrap' },
  cell: { width: `${100 / 7}%`, alignItems: 'center', paddingVertical: 3 },
  circle: {
    width: 38,
    height: 38,
    borderRadius: 19,
    alignItems: 'center',
    justifyContent: 'center',
  },
  predicted: { borderWidth: 1.5, borderColor: colors.red, borderStyle: 'dashed' },
  today: { borderWidth: 2, borderColor: colors.tint },
  ovulationDot: {
    position: 'absolute',
    bottom: 3,
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: colors.orange,
  },
  logDot: { width: 5, height: 5, borderRadius: 2.5, backgroundColor: colors.tint, marginTop: 2 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6, width: '46%' },
  legendSwatch: { width: 16, height: 16, borderRadius: 8 },
});
