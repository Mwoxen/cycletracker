import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, type ColorValue } from 'react-native';

import { PROGRAM_DAYS, findDaily, type DailyCard } from '@/content';
import { dailyProgramDay } from '@/content/program';
import type { ISODate, LessonProgress } from '@/domain/types';
import { addDaysISO, toISODate } from '@/engine/dates';
import { readingStreak } from '@/engine/insights';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { useToday } from '@/hooks/use-today';
import { colors, fontFor, spacing } from '@/ui/colors';
import { Empty } from '@/ui/empty';
import { Card, Row, Screen, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { Stat } from '@/ui/stat';
import { usePhaseTheme } from '@/ui/theme';

export type StatKind = 'read' | 'done' | 'streak';

const STRIP_DAYS = 14;
const dayKey = (ts: number): ISODate => toISODate(new Date(ts));

/**
 * Fremdrift: the three numbers from the Learn tab on one screen, a 14-day strip, and a
 * segment that switches the list between cards read, actions done and the streak days.
 */
export default function StatsScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const fmt = useFormat();
  const today = useToday();
  const { kind: param } = useLocalSearchParams<{ kind?: string }>();
  const [kind, setKind] = useState<StatKind>(
    param === 'done' || param === 'streak' ? param : 'read',
  );
  const { content, progress } = useProgram();

  const items = useMemo(() => {
    const withCard = (p: LessonProgress) => {
      const card = findDaily(content, p.lessonId);
      return card ? { card, progress: p } : undefined;
    };
    return Object.values(progress)
      .map(withCard)
      .filter((x): x is { card: DailyCard; progress: LessonProgress } => !!x);
  }, [content, progress]);
  const read = useMemo(
    () =>
      items
        .filter((x) => x.progress.readAt)
        .sort((a, b) => (b.progress.readAt ?? 0) - (a.progress.readAt ?? 0)),
    [items],
  );
  const done = useMemo(
    () =>
      items
        .filter((x) => x.progress.actionDoneAt)
        .sort((a, b) => (b.progress.actionDoneAt ?? 0) - (a.progress.actionDoneAt ?? 0)),
    [items],
  );
  const streak = useMemo(() => readingStreak(progress, today), [progress, today]);

  /** Per day: what was read and whether an action was done, for the strip and the streak list. */
  const byDay = useMemo(() => {
    const map = new Map<ISODate, { cards: DailyCard[]; done: boolean }>();
    for (const { card, progress: p } of items) {
      if (p.readAt) {
        const day = dayKey(p.readAt);
        const entry = map.get(day) ?? { cards: [], done: false };
        entry.cards.push(card);
        map.set(day, entry);
      }
      if (p.actionDoneAt) {
        const day = dayKey(p.actionDoneAt);
        const entry = map.get(day) ?? { cards: [], done: false };
        entry.done = true;
        map.set(day, entry);
      }
    }
    return map;
  }, [items]);

  const strip = useMemo(
    () =>
      Array.from({ length: STRIP_DAYS }, (_, i) => {
        const date = addDaysISO(today, i - (STRIP_DAYS - 1));
        const entry = byDay.get(date);
        return { date, read: !!entry?.cards.length, done: !!entry?.done, today: date === today };
      }),
    [byDay, today],
  );

  /** Streak days newest first, each with the cards read that day. */
  const streakDays = useMemo(() => {
    let cursor = byDay.get(today)?.cards.length ? today : addDaysISO(today, -1);
    const days: { date: ISODate; cards: DailyCard[] }[] = [];
    for (let i = 0; i < streak; i += 1) {
      days.push({ date: cursor, cards: byDay.get(cursor)?.cards ?? [] });
      cursor = addDaysISO(cursor, -1);
    }
    return days;
  }, [byDay, streak, today]);

  const openCard = (card: DailyCard) => router.push(`/(tabs)/learn/daily/${card.id}`);
  const options: { value: StatKind; label: string }[] = [
    { value: 'read', label: t('learn.statsTitle.read') },
    { value: 'done', label: t('learn.statsTitle.done') },
    { value: 'streak', label: t('learn.statsTitle.streak') },
  ];
  const intro =
    kind === 'read'
      ? t('learn.statsReadIntro', { n: read.length, total: PROGRAM_DAYS })
      : kind === 'done'
        ? t('learn.statsDoneIntro', { n: done.length })
        : t('learn.statsStreakIntro');
  const isEmpty =
    kind === 'streak' ? streakDays.length === 0 : (kind === 'read' ? read : done).length === 0;
  const badge = (card: DailyCard, filled: boolean) => (
    <View style={[styles.badge, { backgroundColor: filled ? theme.accent : theme.soft }]}>
      <Txt variant="caption" color={filled ? colors.onAccent : theme.accent} style={styles.badgeText}>
        {String(dailyProgramDay(card.month, card.day))}
      </Txt>
    </View>
  );

  return (
    <>
      <Stack.Screen options={{ title: t('learn.progressTitle') }} />
      <Screen title={t('learn.progressTitle')}>
        <View style={styles.stats}>
          <Stat
            value={String(read.length)}
            label={t('learn.stats.read')}
            onPress={() => setKind('read')}
            selected={kind === 'read'}
          />
          <Stat
            value={String(done.length)}
            label={t('learn.stats.done')}
            onPress={() => setKind('done')}
            selected={kind === 'done'}
          />
          <Stat
            value={String(streak)}
            label={streak === 1 ? t('learn.stats.streakOne') : t('learn.stats.streak')}
            onPress={() => setKind('streak')}
            selected={kind === 'streak'}
          />
        </View>

        <Card style={{ gap: spacing.sm + 4 }}>
          <View style={styles.stripHeader}>
            <Txt variant="boxLabel" color={theme.accent}>
              {t('learn.last14').toUpperCase()}
            </Txt>
            <Txt variant="footnote" style={{ flexShrink: 1, textAlign: 'right' }}>
              {t('learn.last14Hint')}
            </Txt>
          </View>
          <View style={styles.strip} accessibilityLabel={t('learn.last14')}>
            {strip.map((d) => (
              <View
                key={d.date}
                style={[
                  styles.stripDay,
                  {
                    backgroundColor: d.done ? theme.accent : d.read ? theme.soft : colors.fill,
                  },
                  d.today && { borderWidth: 2, borderColor: colors.label },
                ]}
              />
            ))}
          </View>
          <View style={styles.legend}>
            <Legend color={theme.accent} label={t('learn.legendReadDone')} />
            <Legend color={theme.soft} label={t('learn.legendReadOnly')} />
            <Legend color={colors.fill} label={t('learn.legendSkipped')} />
          </View>
        </Card>

        <Segmented options={options} value={kind} onChange={setKind} stretch />
        <Txt variant="footnote" style={styles.intro}>
          {intro}
        </Txt>

        {isEmpty ? (
          <Empty symbol="book.closed" text={t('learn.statsEmpty')} />
        ) : kind === 'streak' ? (
          <Card style={styles.list}>
            {streakDays.map((day, i) => (
              <Row
                key={day.date}
                title={fmt.long(day.date)}
                subtitle={day.cards.map((c) => c.title).join(' · ')}
                onPress={day.cards[0] ? () => openCard(day.cards[0]) : undefined}
                last={i === streakDays.length - 1}
              />
            ))}
          </Card>
        ) : kind === 'read' ? (
          <Card style={styles.list}>
            {read.map(({ card, progress: p }, i) => (
              <Row
                key={card.id}
                title={card.title}
                subtitle={`${t('learn.readOn', { date: fmt.short(dayKey(p.readAt as number)) })}${
                  p.actionDoneAt ? ` · ${t('learn.actionDone')}` : ''
                }`}
                lead={badge(card, !!p.actionDoneAt)}
                onPress={() => openCard(card)}
                last={i === read.length - 1}
              />
            ))}
          </Card>
        ) : (
          <Card style={styles.list}>
            {done.map(({ card, progress: p }, i) => (
              <Row
                key={card.id}
                title={card.action}
                subtitle={`${t('learn.doneOn', { date: fmt.short(dayKey(p.actionDoneAt as number)) })} · ${card.title}`}
                lead={badge(card, true)}
                onPress={() => openCard(card)}
                last={i === done.length - 1}
              />
            ))}
          </Card>
        )}
      </Screen>
    </>
  );
}

function Legend({ color, label }: { color: ColorValue; label: string }) {
  return (
    <View style={styles.legendItem}>
      <View style={[styles.legendDot, { backgroundColor: color }]} />
      <Txt variant="footnote">{label}</Txt>
    </View>
  );
}

const styles = StyleSheet.create({
  stats: { flexDirection: 'row', gap: spacing.sm },
  stripHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    gap: spacing.sm,
  },
  strip: { flexDirection: 'row', gap: 4 },
  stripDay: { flex: 1, aspectRatio: 1, borderRadius: 6 },
  legend: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.md },
  legendItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  legendDot: { width: 8, height: 8, borderRadius: 4 },
  intro: { marginHorizontal: spacing.xs, marginTop: -spacing.sm },
  list: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  badge: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badgeText: { fontFamily: fontFor(700), fontVariant: ['tabular-nums'] },
});
