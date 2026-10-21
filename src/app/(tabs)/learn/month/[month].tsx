import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View, type ColorValue } from 'react-native';

import {
  MONTHS_IN_PROGRAM,
  dailyOf,
  getMonth,
  isDailyUnlocked,
  isMonthWrapUnlocked,
  isWeeklyUnlocked,
} from '@/content';
import { wrapProgramDay } from '@/content/program';
import { useProgram } from '@/hooks/use-program';
import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { Card, Icon, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { readingMinutes } from '@/ui/reading';
import { usePhaseTheme } from '@/ui/theme';

const GRID_COLUMNS = 6;

/**
 * One programme month: its 30 cards as a grid (done, read, unread, locked), the weekly reads
 * with a week badge, and the wrap with a countdown.
 */
export default function MonthScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const { month: monthParam } = useLocalSearchParams<{ month: string }>();
  const m = Number(monthParam) || 1;
  const { content, position, progress } = useProgram();
  const month = getMonth(content, m);

  if (!month) {
    return (
      <>
        <Stack.Screen options={{ title: t('learn.month', { n: m }) }} />
        <Screen>
          <Card>
            <Txt>{t('learn.contentMissing')}</Txt>
          </Card>
        </Screen>
      </>
    );
  }

  const cards = dailyOf(content, month);
  const readCount = cards.filter((c) => progress[c.id]?.readAt).length;
  const doneCount = cards.filter((c) => progress[c.id]?.actionDoneAt).length;
  const wrapUnlocked = isMonthWrapUnlocked(position, m);
  const wrapDay = wrapProgramDay(m);
  const daysToWrap = wrapDay - position.programDay;
  const best = progress[month.wrap.id];

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <Screen>
        <View style={styles.header}>
          <Txt variant="boxLabel" color={theme.accent}>
            {t('learn.monthOf', { n: m, total: MONTHS_IN_PROGRAM }).toUpperCase()}
          </Txt>
          <Txt variant="screenTitle">{month.theme}</Txt>
          <Txt color={colors.secondaryLabel}>{month.focus}</Txt>
        </View>

        <Card style={styles.progressCard}>
          <View style={styles.progressRow}>
            <Txt variant="footnote" style={{ flexShrink: 1 }}>
              {t('learn.monthProgress', { read: readCount, total: cards.length, done: doneCount })}
            </Txt>
            {position.month === m ? (
              <Txt variant="footnote" color={theme.accent} style={styles.semibold}>
                {t('learn.dayBadge', { n: position.programDay })}
              </Txt>
            ) : null}
          </View>
          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { width: `${Math.round((readCount / cards.length) * 100)}%` as `${number}%` },
                { backgroundColor: theme.accent },
              ]}
            />
          </View>
        </Card>

        <SectionTitle>{t('learn.daily')}</SectionTitle>
        <Card style={{ gap: spacing.md }}>
          <View style={styles.grid}>
            {cards.map((c) => {
              const unlocked = isDailyUnlocked(position, m, c.day);
              const read = !!progress[c.id]?.readAt;
              const done = !!progress[c.id]?.actionDoneAt;
              const isToday = position.month === m && position.dayInMonth === c.day;
              const state = !unlocked ? 'locked' : done ? 'done' : read ? 'read' : 'unread';
              return (
                <Pressable
                  key={c.id}
                  disabled={!unlocked}
                  onPress={() => router.push(`/(tabs)/learn/daily/${c.id}`)}
                  accessibilityRole="button"
                  accessibilityLabel={`${c.title}, ${t(`learn.legend${state[0].toUpperCase()}${state.slice(1)}` as 'learn.legendRead')}`}
                  style={({ pressed }) => [
                    styles.cell,
                    state === 'done' && { backgroundColor: theme.accent, borderColor: theme.accent },
                    state === 'read' && { backgroundColor: theme.soft, borderColor: theme.soft },
                    state === 'locked' && styles.cellLocked,
                    isToday && { borderWidth: 2, borderColor: colors.label },
                    pressed && styles.pressed,
                  ]}>
                  <Txt
                    variant="callout"
                    color={
                      state === 'done'
                        ? colors.onAccent
                        : state === 'read'
                          ? theme.accent
                          : state === 'locked'
                            ? colors.tertiaryLabel
                            : colors.label
                    }
                    style={styles.cellText}>
                    {String(c.day)}
                  </Txt>
                </Pressable>
              );
            })}
          </View>
          <View style={styles.legend}>
            <Legend color={theme.accent} label={t('learn.legendDone')} />
            <Legend color={theme.soft} label={t('learn.legendRead')} />
            <Legend outline label={t('learn.legendUnread')} />
            <Legend color={colors.fill} label={t('learn.legendLocked')} />
          </View>
        </Card>

        <SectionTitle>{t('learn.weekly')}</SectionTitle>
        <Card style={styles.list}>
          {month.weekly.map((w, i) => {
            const unlocked = isWeeklyUnlocked(position, m, w.week);
            const read = !!progress[w.id]?.readAt;
            return (
              <Row
                key={w.id}
                title={w.title}
                subtitle={
                  !unlocked
                    ? t('learn.locked', { n: (m - 1) * 30 + (w.week - 1) * 7 + 1 })
                    : read
                      ? t('learn.read')
                      : t('learn.weeklyUnread', { min: readingMinutes(w.body) })
                }
                lead={
                  <View
                    style={[
                      styles.badge,
                      {
                        backgroundColor: !unlocked
                          ? colors.fill
                          : read
                            ? theme.soft
                            : theme.accent,
                      },
                    ]}>
                    <Txt
                      variant="caption"
                      color={
                        !unlocked ? colors.tertiaryLabel : read ? theme.accent : colors.onAccent
                      }
                      style={styles.badgeText}>
                      {t('learn.weekBadge', { n: w.week })}
                    </Txt>
                  </View>
                }
                onPress={unlocked ? () => router.push(`/(tabs)/learn/weekly/${w.id}`) : undefined}
                last={i === month.weekly.length - 1}
              />
            );
          })}
        </Card>

        <Card
          onPress={wrapUnlocked ? () => router.push(`/(tabs)/learn/wrap/${month.wrap.id}`) : undefined}
          style={styles.wrapCard}>
          <View style={[styles.badge, { backgroundColor: wrapUnlocked ? theme.soft : colors.fill }]}>
            <Icon
              name={wrapUnlocked ? 'star.fill' : 'lock.fill'}
              size={14}
              color={wrapUnlocked ? theme.accent : colors.tertiaryLabel}
            />
          </View>
          <View style={{ flex: 1, flexShrink: 1 }}>
            <Txt>{t('learn.wrap')}</Txt>
            <Txt variant="footnote">
              {wrapUnlocked
                ? best?.quizTotal
                  ? t('learn.bestScore', { score: best.quizScore, total: best.quizTotal })
                  : month.wrap.title
                : daysToWrap === 1
                  ? t('learn.unlocksTomorrow')
                  : t('learn.unlocksIn', { n: wrapDay, days: daysToWrap })}
            </Txt>
          </View>
          {wrapUnlocked ? (
            <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
          ) : null}
        </Card>
      </Screen>
    </>
  );
}

function Legend({
  color,
  outline,
  label,
}: {
  color?: ColorValue;
  outline?: boolean;
  label: string;
}) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendDot,
          outline
            ? { borderWidth: 1, borderColor: colors.tertiaryLabel }
            : { backgroundColor: color },
        ]}
      />
      <Txt variant="footnote">{label}</Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  header: { gap: spacing.sm, paddingTop: spacing.xs },
  progressCard: { gap: spacing.sm + 2, paddingVertical: spacing.md },
  progressRow: { flexDirection: 'row', justifyContent: 'space-between', gap: spacing.sm },
  semibold: { fontFamily: fontFor(600) },
  track: { height: 6, borderRadius: 3, backgroundColor: colors.fill, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3 },
  grid: { flexDirection: 'row', flexWrap: 'wrap', gap: 6 },
  cell: {
    width: `${100 / GRID_COLUMNS}%` as `${number}%`,
    // The gap takes its share of the row: six cells and five 6 pt gaps.
    flexBasis: `${(100 - 5 * 1.9) / GRID_COLUMNS}%` as `${number}%`,
    aspectRatio: 1,
    borderRadius: radius.cell,
    borderWidth: 1,
    borderColor: colors.separator,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cellLocked: { backgroundColor: colors.fill, borderColor: colors.fill },
  cellText: { fontFamily: fontFor(600), fontVariant: ['tabular-nums'] },
  pressed: { opacity: 0.6 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  list: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontFamily: fontFor(700) },
  wrapCard: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
});
