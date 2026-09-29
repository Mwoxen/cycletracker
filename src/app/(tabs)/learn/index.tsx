import { useRouter } from 'expo-router';
import { useMemo, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View, type ColorValue } from 'react-native';

import { MONTHS_IN_PROGRAM, isMonthAvailable, isMonthWrapUnlocked, PHASE_ORDER } from '@/content';
import { catchUpItems, readingStreak } from '@/engine/insights';
import { useProgram } from '@/hooks/use-program';
import { useToday } from '@/hooks/use-today';
import { colors, phaseColor, spacing } from '@/ui/colors';
import { Card, Icon, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Stat } from '@/ui/stat';

import type { SFSymbol } from 'sf-symbols-typescript';

const LEAD_SIZE = 30;

/** Round 30pt badge used as the leading element of list rows. */
function Lead({ color, children }: PropsWithChildren<{ color: ColorValue }>) {
  return <View style={[styles.lead, { backgroundColor: color }]}>{children}</View>;
}

function LeadText({ color, label, text }: { color: ColorValue; label: string; text?: ColorValue }) {
  return (
    <Lead color={color}>
      <Txt variant="caption" color={text ?? colors.white} style={styles.leadText}>
        {label}
      </Txt>
    </Lead>
  );
}

function LeadIcon({
  color,
  symbol,
  tint,
}: {
  color: ColorValue;
  symbol: SFSymbol;
  tint: ColorValue;
}) {
  return (
    <Lead color={color}>
      <Icon name={symbol} size={15} color={tint} weight="semibold" />
    </Lead>
  );
}

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

  const dailyIds = useMemo(
    () => new Set(content.months.flatMap((m) => m.daily.map((c) => c.id))),
    [content],
  );
  const readCount = Object.values(progress).filter(
    (p) => p.readAt && dailyIds.has(p.lessonId),
  ).length;
  const doneCount = Object.values(progress).filter((p) => p.actionDoneAt).length;
  const weeklyMinutes = weekly
    ? Math.max(2, Math.round(weekly.body.join(' ').split(/\s+/).length / 200))
    : undefined;
  const cardRead = !!card && !!progress[card.id]?.readAt;
  const cardPhase = card?.phaseTags[0];

  return (
    <Screen
      title={t('learn.title')}
      subtitle={t('learn.subtitle', { day: position.programDay, month: position.month })}>
      <View style={styles.stats}>
        <Stat value={String(readCount)} label={t('learn.stats.read')} />
        <Stat value={String(doneCount)} label={t('learn.stats.done')} />
        <Stat
          value={`🔥 ${streak}`}
          label={streak === 1 ? t('learn.stats.streakOne') : t('learn.stats.streak')}
        />
      </View>

      <SectionTitle>{t('learn.today')}</SectionTitle>
      <Card style={styles.list}>
        {card ? (
          <Row
            title={card.title}
            subtitle={cardRead ? t('learn.todaysCardRead') : t('learn.todaysCard')}
            lead={
              <LeadText
                color={cardPhase ? phaseColor[cardPhase] : colors.tint}
                label={String(position.dayInMonth)}
              />
            }
            onPress={() => router.push(`/(tabs)/learn/daily/${card.id}`)}
          />
        ) : (
          <Row title={t('learn.contentMissing')} chevron={false} />
        )}
        {weekly ? (
          <Row
            title={weekly.title}
            subtitle={
              weeklyMinutes
                ? t('learn.thisWeekMinutes', { min: weeklyMinutes })
                : t('learn.thisWeek')
            }
            lead={
              <LeadText color={colors.purple} label={t('learn.weekBadge', { n: weekly.week })} />
            }
            onPress={() => router.push(`/(tabs)/learn/weekly/${weekly.id}`)}
          />
        ) : null}
        <Row
          title={wrap ? wrap.title : t('learn.thisMonth')}
          subtitle={wrap ? t('learn.wrap') : t('learn.locked', { n: position.month * 30 })}
          lead={
            wrap ? (
              <LeadIcon color={colors.green} symbol="checkmark" tint={colors.white} />
            ) : (
              <LeadIcon color={colors.fill} symbol="lock.fill" tint={colors.tertiaryLabel} />
            )
          }
          onPress={wrap ? () => router.push(`/(tabs)/learn/wrap/${wrap.id}`) : undefined}
          last
        />
      </Card>

      <Card style={styles.list}>
        {catchUp.length > 0 ? (
          <Row
            title={t('learn.catchUp')}
            subtitle={t('learn.catchUpCount', { n: catchUp.length })}
            lead={<LeadIcon color={colors.orange} symbol="tray.full.fill" tint={colors.white} />}
            onPress={() => {
              const next = catchUp[0];
              router.push(`/(tabs)/learn/${next.kind}/${next.id}`);
            }}
          />
        ) : null}
        <Row
          title={t('learn.archive')}
          subtitle={t('learn.archiveHint')}
          lead={
            <LeadIcon color={colors.cardSecondary} symbol="magnifyingglass" tint={colors.tint} />
          }
          onPress={() => router.push('/(tabs)/learn/archive')}
        />
        <Row
          title={t('learn.overview')}
          subtitle={t('learn.overviewHint')}
          lead={
            <LeadIcon
              color={colors.cardSecondary}
              symbol="heart.text.square.fill"
              tint={colors.tint}
            />
          }
          onPress={() => router.push('/(tabs)/learn/overview')}
          last
        />
      </Card>

      <SectionTitle>{t('learn.phaseLibrary')}</SectionTitle>
      <Card style={styles.list}>
        {PHASE_ORDER.map((phase, i) => (
          <Row
            key={phase}
            title={content.phases[phase].name}
            subtitle={content.phases[phase].timing}
            lead={<Lead color={phaseColor[phase]} />}
            onPress={() => router.push(`/(tabs)/learn/phase/${phase}`)}
            last={i === PHASE_ORDER.length - 1}
          />
        ))}
      </Card>

      <SectionTitle>{t('learn.program')}</SectionTitle>
      <Card style={styles.list}>
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

const styles = StyleSheet.create({
  stats: { flexDirection: 'row', gap: spacing.sm },
  list: { padding: 0, paddingHorizontal: spacing.md },
  lead: {
    width: LEAD_SIZE,
    height: LEAD_SIZE,
    borderRadius: LEAD_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leadText: { fontWeight: '700', fontVariant: ['tabular-nums'] },
});
