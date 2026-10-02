import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { DAYS_PER_MONTH, MONTHS_IN_PROGRAM, findDaily, type DailyCard } from '@/content';
import type { ISODate, LessonProgress } from '@/domain/types';
import { addDaysISO, toISODate } from '@/engine/dates';
import { readingStreak } from '@/engine/insights';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { useToday } from '@/hooks/use-today';
import { colors, spacing } from '@/ui/colors';
import { Empty } from '@/ui/empty';
import { Card, Row, Screen, Txt } from '@/ui/primitives';

export type StatKind = 'read' | 'done' | 'streak';

const dayKey = (ts: number): ISODate => toISODate(new Date(ts));

/** What is behind one of the three numbers on the Learn tab: the cards, actions or days counted. */
export default function StatsScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const today = useToday();
  const { kind: param } = useLocalSearchParams<{ kind?: string }>();
  const kind: StatKind = param === 'done' || param === 'streak' ? param : 'read';
  const { content, progress } = useProgram();

  const items = useMemo(() => {
    const withCard = (p: LessonProgress) => {
      const card = findDaily(content, p.lessonId);
      return card ? { card, progress: p } : undefined;
    };
    const all = Object.values(progress)
      .map(withCard)
      .filter((x): x is { card: DailyCard; progress: LessonProgress } => !!x);
    if (kind === 'read') {
      return all
        .filter((x) => x.progress.readAt)
        .sort((a, b) => (b.progress.readAt ?? 0) - (a.progress.readAt ?? 0));
    }
    return all
      .filter((x) => x.progress.actionDoneAt)
      .sort((a, b) => (b.progress.actionDoneAt ?? 0) - (a.progress.actionDoneAt ?? 0));
  }, [content, progress, kind]);

  /** Streak days newest first, each with the cards read that day. */
  const streakDays = useMemo(() => {
    const byDay = new Map<ISODate, DailyCard[]>();
    for (const p of Object.values(progress)) {
      if (!p.readAt) continue;
      const card = findDaily(content, p.lessonId);
      if (!card) continue;
      const day = dayKey(p.readAt);
      byDay.set(day, [...(byDay.get(day) ?? []), card]);
    }
    const length = readingStreak(progress, today);
    let cursor = byDay.has(today) ? today : addDaysISO(today, -1);
    const days: { date: ISODate; cards: DailyCard[] }[] = [];
    for (let i = 0; i < length; i += 1) {
      days.push({ date: cursor, cards: byDay.get(cursor) ?? [] });
      cursor = addDaysISO(cursor, -1);
    }
    return days;
  }, [content, progress, today]);

  const total = MONTHS_IN_PROGRAM * DAYS_PER_MONTH;
  const title = t(`learn.statsTitle.${kind}`);
  const intro =
    kind === 'read'
      ? t('learn.statsReadIntro', { n: items.length, total })
      : kind === 'done'
        ? t('learn.statsDoneIntro', { n: items.length })
        : t('learn.statsStreakIntro');
  const openCard = (card: DailyCard) => router.push(`/(tabs)/learn/daily/${card.id}`);
  const isEmpty = kind === 'streak' ? streakDays.length === 0 : items.length === 0;

  return (
    <>
      <Stack.Screen options={{ title }} />
      <Screen title={title} subtitle={intro}>
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
            {items.map(({ card, progress: p }, i) => (
              <Row
                key={card.id}
                title={card.title}
                subtitle={t('learn.readOn', { date: fmt.short(dayKey(p.readAt as number)) })}
                onPress={() => openCard(card)}
                last={i === items.length - 1}
              />
            ))}
          </Card>
        ) : (
          <View style={styles.actions}>
            {items.map(({ card, progress: p }) => (
              <Card key={card.id} onPress={() => openCard(card)}>
                <Txt variant="footnote">
                  {t('learn.doneOn', { date: fmt.short(dayKey(p.actionDoneAt as number)) })}
                  {' · '}
                  {card.title}
                </Txt>
                <Txt color={colors.label}>{card.action}</Txt>
              </Card>
            ))}
          </View>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  list: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  actions: { gap: spacing.sm },
});
