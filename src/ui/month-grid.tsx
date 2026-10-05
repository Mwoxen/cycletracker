import { eachDayOfInterval, endOfMonth, endOfWeek, startOfWeek } from 'date-fns';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, type StyleProp, type ViewStyle } from 'react-native';

import type { ISODate } from '@/domain/types';
import { toISODate } from '@/engine/dates';
import { isPredictedDay, useCalendarDays, type CalendarDayStatus } from '@/hooks/use-cycle';
import { useFormat } from '@/hooks/use-format';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, fontFor, phaseColor, phaseSoft, phaseTint, radius, spacing } from '@/ui/colors';
import { Pressed } from '@/ui/pressed';
import { Card, Txt } from '@/ui/primitives';
import { useSurfaceHex } from '@/ui/theme';

const WEEK_STARTS_ON = 1; // Monday
const CELL_HEIGHT = 44;
const GAP = 4;

/**
 * How a day is drawn (docs/design/README.md §4): a logged period fills in the menstrual colour,
 * an expected period gets a dashed border, the fertile window the ovulation tint, ovulation the
 * tint plus a dashed border, PMS a bar at the bottom. The follicular and luteal phases keep a
 * faint wash in their own colour so the whole cycle stays readable at a glance.
 */
export function cellMarks(s: CalendarDayStatus | undefined) {
  if (!s) return { fill: undefined, dashed: undefined, bar: false };
  const loggedPeriod = s.isLoggedPeriod && !s.projected;
  if (loggedPeriod) return { fill: phaseColor.menstrual, dashed: undefined, bar: false };
  const predicted = isPredictedDay(s);
  if (predicted) return { fill: phaseSoft.menstrual, dashed: phaseColor.menstrual, bar: false };
  if (s.isOvulation) return { fill: phaseTint.ovulation, dashed: phaseColor.ovulation, bar: false };
  if (s.isFertile) return { fill: phaseTint.ovulation, dashed: undefined, bar: false };
  if (s.phase === 'menstrual') return { fill: phaseSoft.menstrual, dashed: undefined, bar: false };
  if (s.phase === 'follicular')
    return { fill: phaseSoft.follicular, dashed: undefined, bar: false };
  return { fill: phaseSoft.luteal, dashed: undefined, bar: s.isPms };
}

/** One month as a card: heading, weekday row and a 7-column grid of 44 pt cells. */
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
  const surface = useSurfaceHex();

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
          <Txt key={i} variant="label" style={styles.weekday}>
            {w.toUpperCase()}
          </Txt>
        ))}
      </View>
      {weeks.map((week) => (
        <View key={week[0].iso} style={styles.weekRow}>
          {week.map((d) => {
            const s = d.inMonth ? statuses.get(d.iso) : undefined;
            const marks = cellMarks(s);
            const isToday = d.iso === today;
            const loggedPeriod = !!s?.isLoggedPeriod && !s.projected;
            const number = loggedPeriod
              ? colors.onAccent
              : d.inMonth
                ? colors.label
                : colors.tertiaryLabel;
            return (
              <Pressed
                key={d.iso}
                onPress={() => onSelectDay(d.iso)}
                scale={0.9}
                accessibilityRole="button"
                accessibilityLabel={fmt.long(d.iso)}
                testID={`day-${d.iso}`}
                style={[
                  styles.cell,
                  marks.fill ? { backgroundColor: marks.fill } : null,
                  marks.dashed ? [styles.dashed, { borderColor: marks.dashed }] : null,
                  isToday && [styles.today, { borderColor: surface.text }],
                ]}>
                {loggedDates.has(d.iso) ? (
                  <View
                    style={[
                      styles.logDot,
                      { backgroundColor: loggedPeriod ? colors.onAccent : surface.text },
                    ]}
                  />
                ) : null}
                <Txt
                  variant="callout"
                  color={number}
                  style={[styles.number, isToday && styles.todayNumber]}>
                  {d.date.getDate()}
                </Txt>
                {marks.bar ? <View style={styles.bar} /> : null}
              </Pressed>
            );
          })}
        </View>
      ))}
    </Card>
  );
}

/** Legend in two columns with 20×20 swatches (radius 7). */
export function Legend() {
  const { t } = useTranslation();
  const surface = useSurfaceHex();
  const items: { label: string; style: StyleProp<ViewStyle>; bar?: boolean }[] = [
    { label: t('calendar.period'), style: { backgroundColor: phaseColor.menstrual } },
    {
      label: t('calendar.predictedPeriod'),
      style: [
        styles.swatchDashed,
        { backgroundColor: phaseSoft.menstrual, borderColor: phaseColor.menstrual },
      ],
    },
    { label: t('phases.follicular'), style: { backgroundColor: phaseSoft.follicular } },
    { label: t('calendar.fertile'), style: { backgroundColor: phaseTint.ovulation } },
    {
      label: t('calendar.ovulation'),
      style: [
        styles.swatchDashed,
        { backgroundColor: phaseTint.ovulation, borderColor: phaseColor.ovulation },
      ],
    },
    { label: t('phases.luteal'), style: { backgroundColor: phaseSoft.luteal } },
    { label: t('calendar.pms'), style: { backgroundColor: phaseSoft.luteal }, bar: true },
    { label: t('calendar.logged'), style: { backgroundColor: colors.cardSecondary } },
  ];
  return (
    <View style={styles.legend} accessibilityLabel={t('calendar.legend')}>
      {items.map((it) => (
        <View key={it.label} style={styles.legendItem}>
          <View style={[styles.swatch, it.style]}>
            {it.bar ? <View style={styles.swatchBar} /> : null}
            {it.label === t('calendar.logged') ? (
              <View style={[styles.swatchDot, { backgroundColor: surface.text }]} />
            ) : null}
          </View>
          <Txt variant="footnote" style={styles.legendText} numberOfLines={1}>
            {it.label}
          </Txt>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  heading: {
    fontFamily: fontFor(400),
    fontSize: 19,
    lineHeight: 24,
    color: colors.label,
    paddingHorizontal: spacing.xs,
  },
  weekRow: { flexDirection: 'row', gap: GAP },
  weekday: { flex: 1, textAlign: 'center', letterSpacing: 0.5 },
  cell: {
    flex: 1,
    height: CELL_HEIGHT,
    borderRadius: radius.cell,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  dashed: { borderWidth: 1.5, borderStyle: 'dashed' },
  today: { borderWidth: 2, borderStyle: 'solid' },
  number: { fontFamily: fontFor(500) },
  todayNumber: { fontFamily: fontFor(800) },
  logDot: { position: 'absolute', top: 5, width: 4, height: 4, borderRadius: 2 },
  bar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: phaseColor.luteal,
  },
  legend: { flexDirection: 'row', flexWrap: 'wrap', rowGap: spacing.sm, columnGap: spacing.sm },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, width: '47%' },
  swatch: {
    width: 20,
    height: 20,
    borderRadius: 7,
    overflow: 'hidden',
    alignItems: 'center',
    justifyContent: 'center',
  },
  swatchDashed: { borderWidth: 1.5, borderStyle: 'dashed' },
  swatchBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 3,
    backgroundColor: phaseColor.luteal,
  },
  swatchDot: { width: 4, height: 4, borderRadius: 2 },
  legendText: { flex: 1, flexShrink: 1 },
});
