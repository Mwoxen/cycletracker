import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { MONTHS_IN_PROGRAM, isMonthAvailable, isMonthWrapUnlocked, PHASE_ORDER } from '@/content';
import { catchUpItems, readingStreak } from '@/engine/insights';
import { useProgram } from '@/hooks/use-program';
import { useToday } from '@/hooks/use-today';
import { colors, phaseColor, phaseSymbol } from '@/ui/colors';
import { Card, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

export default function LearnScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { content, position, card, weekly, wrap, progress } = useProgram();
  const today = useToday();
  const streak = useMemo(() => readingStreak(progress, today), [progress, today]);
  const catchUp = useMemo(
    () => catchUpItems(content, position, progress),
    [content, position, progress],
  );

  const readCount = Object.values(progress).filter((p) => p.readAt).length;
  const doneCount = Object.values(progress).filter((p) => p.actionDoneAt).length;
  const totalCards = content.months.reduce((n, m) => n + m.daily.length, 0);

  return (
    <Screen>
      <Txt variant="footnote" style={{ marginLeft: 4 }}>
        {t('common.dayN', { n: position.programDay })} ·{' '}
        {t('learn.progress', { read: readCount, total: totalCards })} ·{' '}
        {t('learn.actionsDone', { n: doneCount })} ·{' '}
        {streak > 0 ? t('learn.streak', { n: streak }) : t('learn.streakNone')}
      </Txt>

      <SectionTitle>{t('learn.today')}</SectionTitle>
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
        {card ? (
          <Row
            title={card.title}
            subtitle={t('common.dayN', { n: position.dayInMonth })}
            symbol={progress[card.id]?.readAt ? 'checkmark.circle.fill' : 'circle'}
            symbolColor={progress[card.id]?.readAt ? colors.green : colors.tertiaryLabel}
            onPress={() => router.push(`/(tabs)/learn/daily/${card.id}`)}
          />
        ) : (
          <Row title={t('learn.contentMissing')} chevron={false} />
        )}
        {weekly ? (
          <Row
            title={weekly.title}
            subtitle={t('learn.thisWeek')}
            symbol={progress[weekly.id]?.readAt ? 'checkmark.circle.fill' : 'doc.text'}
            symbolColor={progress[weekly.id]?.readAt ? colors.green : colors.tint}
            onPress={() => router.push(`/(tabs)/learn/weekly/${weekly.id}`)}
          />
        ) : null}
        <Row
          title={wrap ? wrap.title : t('learn.thisMonth')}
          subtitle={wrap ? t('learn.wrap') : t('learn.locked', { n: position.month * 30 })}
          symbol={wrap ? 'star.fill' : 'lock.fill'}
          symbolColor={wrap ? colors.orange : colors.tertiaryLabel}
          onPress={wrap ? () => router.push(`/(tabs)/learn/wrap/${wrap.id}`) : undefined}
          last
        />
      </Card>

      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
        <Row
          title={t('learn.catchUp')}
          subtitle={
            catchUp.length ? t('learn.catchUpCount', { n: catchUp.length }) : t('learn.catchUpNone')
          }
          symbol={catchUp.length ? 'tray.full.fill' : 'checkmark.circle.fill'}
          symbolColor={catchUp.length ? colors.orange : colors.green}
          onPress={
            catchUp.length
              ? () => {
                  const next = catchUp[0];
                  router.push(`/(tabs)/learn/${next.kind}/${next.id}`);
                }
              : undefined
          }
          chevron={catchUp.length > 0}
        />
        <Row
          title={t('learn.archive')}
          subtitle={t('learn.archiveHint')}
          symbol="magnifyingglass"
          onPress={() => router.push('/(tabs)/learn/archive')}
        />
        <Row
          title={t('learn.overview')}
          subtitle={t('learn.overviewHint')}
          symbol="heart.text.square.fill"
          symbolColor={colors.pink}
          onPress={() => router.push('/(tabs)/learn/overview')}
          last
        />
      </Card>

      <SectionTitle>{t('learn.phaseLibrary')}</SectionTitle>
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
        {PHASE_ORDER.map((phase, i) => (
          <Row
            key={phase}
            title={content.phases[phase].name}
            subtitle={content.phases[phase].timing}
            symbol={phaseSymbol[phase] as SFSymbol}
            symbolColor={phaseColor[phase]}
            onPress={() => router.push(`/(tabs)/learn/phase/${phase}`)}
            last={i === PHASE_ORDER.length - 1}
          />
        ))}
      </Card>

      <SectionTitle>{t('learn.program')}</SectionTitle>
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
        {Array.from({ length: MONTHS_IN_PROGRAM }, (_, i) => i + 1).map((m) => {
          const month = content.months.find((x) => x.month === m);
          const available = isMonthAvailable(content, m);
          const unlocked = position.month >= m;
          const done =
            isMonthWrapUnlocked(position, m) && !!month && !!progress[month.wrap.id]?.quizScore;
          return (
            <View key={m}>
              <Row
                title={
                  month
                    ? t('learn.monthTheme', { n: m, theme: month.theme })
                    : t('learn.month', { n: m })
                }
                subtitle={!available ? t('learn.contentMissing') : month?.focus}
                symbol={done ? 'checkmark.seal.fill' : unlocked ? 'book.closed.fill' : 'lock.fill'}
                symbolColor={done ? colors.green : unlocked ? colors.tint : colors.tertiaryLabel}
                onPress={() => router.push(`/(tabs)/learn/month/${m}`)}
                last={m === MONTHS_IN_PROGRAM}
              />
            </View>
          );
        })}
      </Card>
    </Screen>
  );
}
