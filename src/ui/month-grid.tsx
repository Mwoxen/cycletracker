import { eachDayOfInterval, endOfMonth, endOfWeek, startOfWeek } from 'date-fns';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import {
  Pressable,
  StyleSheet,
  View,
  type ColorValue,
  type StyleProp,
  type ViewStyle,
} from 'react-native';

import type { ISODate } from '@/domain/types';
import { toISODate } from '@/engine/dates';
import {
  bandKind,
  bandSegments,
  isPredictedDay,
  useCalendarDays,
  type BandKind,
} from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, fonts, phaseBand, phaseColor, radius, spacing } from '@/ui/colors';
import { Card, Txt } from '@/ui/primitives';

const WEEK_STARTS_ON = 1; // Monday
const CELL = 36;

const bandColor: Record<BandKind, ColorValue> = phaseBand;

/** One month as a card: heading, weekday row and a grid with continuous phase bands. */
export function MonthGrid({
  month,
  today,
  onSelectDay,
}: {
  /** Any date inside the month to show (normally its first day). */
  month: Date;
  today: ISODate;
  onSelectDay: (date: ISODate) => void;
}) {
  const fmt = useFormat();
  const logs = useStore(selectActiveLogs);

  const weeks = useMemo(() => {
    const start = startOfWeek(month, { weekStartsOn: WEEK_STARTS_ON });
    const end = endOfWeek(endOfMonth(month), { weekStartsOn: WEEK_STARTS_ON });
    const days = eachDayOfInterval({ start, end }).map((d) => ({
      date: d,
      iso: toISODate(d),
      inMonth: d.getMonth() === month.getMonth(),
    }));
    const rows: (typeof days)[] = [];
    for (let i = 0; i < days.length; i += 7) rows.push(days.slice(i, i + 7));
    return rows;
  }, [month]);
  const isos = useMemo(() => weeks.flat().map((d) => d.iso), [weeks]);
  const statuses = useCalendarDays(isos);
  const loggedDates = useMemo(() => new Set(logs.map((l) => l.date)), [logs]);
  const weekdays = useMemo(() => weeks[0].map((d) => fmt.weekday(d.date)), [weeks, fmt]);

  return (
    <Card style={{ gap: spacing.sm }}>
      <Txt style={styles.heading}>{fmt.monthYear(month)}</Txt>
      <View style={styles.weekRow}>
        {weekdays.map((w, i) => (
          <Txt key={i} variant="caption" style={styles.weekday}>
            {w}
          </Txt>
        ))}
      </View>
      {weeks.map((week) => {
        const segments = bandSegments(week.map((d) => bandKind(statuses.get(d.iso))));
        return (
          <View key={week[0].iso} style={styles.weekRow}>
            {week.map((d, i) => {
              const s = statuses.get(d.iso);
              const seg = segments[i];
              const isToday = d.iso === today;
              const predicted = isPredictedDay(s);
              const ovulation = !!s?.isOvulation && !predicted && !isToday;
              const number = isToday
                ? colors.white
                : d.inMonth
                  ? colors.label
                  : colors.tertiaryLabel;
              return (
                <Pressable
                  key={d.iso}
                  onPress={() => onSelectDay(d.iso)}
                  accessibilityRole="button"
                  accessibilityLabel={fmt.long(d.iso)}
                  style={({ pressed }) => [styles.cell, pressed && { opacity: 0.6 }]}>
                  {seg ? (
                    <View
                      style={[
                        styles.band,
                        { backgroundColor: bandColor[seg.kind] },
                        seg.start && styles.bandStart,
                        seg.end && styles.bandEnd,
                      ]}
                    />
                  ) : null}
                  <View
                    style={[
                      styles.circle,
                      ovulation && styles.ovulation,
                      predicted && styles.predicted,
                      isToday && { backgroundColor: colors.red },
                    ]}>
                    <Txt variant="callout" color={number} style={isToday && styles.bold}>
                      {d.date.getDate()}
                    </Txt>
                    {loggedDates.has(d.iso) ? (
                      <View
                        style={[
                          styles.logDot,
                          { backgroundColor: isToday ? colors.white : colors.tint },
                        ]}
                      />
                    ) : null}
                  </View>
                </Pressable>
              );
            })}
          </View>
        );
      })}
    </Card>
  );
}

/** Legend as small wrapping chips. */
export function Legend() {
  const { t } = useTranslation();
  const items: { label: string; style: StyleProp<ViewStyle> }[] = [
    { label: t('calendar.period'), style: { backgroundColor: phaseBand.period } },
    {
      label: t('calendar.predictedPeriod'),
      style: [styles.predicted, { backgroundColor: phaseBand.predicted }],
    },
    { label: t('phases.follicular'), style: { backgroundColor: phaseBand.follicular } },
    { label: t('calendar.fertile'), style: { backgroundColor: phaseBand.fertile } },
    { label: t('calendar.ovulation'), style: styles.ovulation },
    { label: t('phases.luteal'), style: { backgroundColor: phaseBand.luteal } },
    { label: t('calendar.pms'), style: { backgroundColor: phaseBand.pms } },
    { label: t('calendar.logged'), style: styles.legendLogDot },
  ];
  return (
    <View style={styles.legend} accessibilityLabel={t('calendar.legend')}>
      {items.map((it) => (
        <View key={it.label} style={styles.legendChip}>
          <View style={[styles.legendSwatch, it.style]} />
          <Txt variant="footnote" color={colors.label}>
            {it.label}
          </Txt>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 18,
    lineHeight: 22,
    fontWeight: '600',
    fontFamily: fonts?.rounded,
    paddingHorizontal: spacing.xs,
  },
  weekRow: { flexDirection: 'row' },
  weekday: { flex: 1, textAlign: 'center' },
  cell: { flex: 1, alignItems: 'center', paddingVertical: 3 },
  band: {
    position: 'absolute',
    top: 3,
    bottom: 3,
    left: 0,
    right: 0,
  },
  bandStart: { borderTopLeftRadius: CELL / 2, borderBottomLeftRadius: CELL / 2, left: 2 },
  bandEnd: { borderTopRightRadius: CELL / 2, borderBottomRightRadius: CELL / 2, right: 2 },
  circle: {
    width: CELL,
    height: CELL,
    borderRadius: CELL / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  predicted: { borderWidth: 1.5, borderColor: colors.red, borderStyle: 'dashed' },
  ovulation: { borderWidth: 2.5, borderColor: phaseColor.ovulation },
  bold: { fontWeight: '700' },
  logDot: { position: 'absolute', bottom: 4, width: 4, height: 4, borderRadius: 2 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  legendChip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: colors.card,
    borderRadius: radius.chip,
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  legendSwatch: { width: 14, height: 14, borderRadius: 7 },
  legendLogDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: colors.tint,
    marginHorizontal: 4,
  },
});
