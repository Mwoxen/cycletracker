import { useRouter } from 'expo-router';
import { useMemo, useState, type PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View, type ColorValue } from 'react-native';

import {
  MONTHS_IN_PROGRAM,
  PROGRAM_DAYS,
  allDaily,
  dailyOf,
  isMonthAvailable,
  isMonthWrapUnlocked,
  PHASE_ORDER,
} from '@/content';
import { dailyProgramDay, wrapProgramDay } from '@/content/program';
import { hasDayAccess, usePlan } from '@/entitlements';
import { catchUpItems, readingStreak } from '@/engine/insights';
import { useCycle } from '@/hooks/use-cycle';
import { useProgram } from '@/hooks/use-program';
import { useToday } from '@/hooks/use-today';
import { useStore } from '@/store/store';
import { TabSwipe } from '@/ui/tab-swipe';
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { Button, Card, Chip, Icon, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { readingMinutes } from '@/ui/reading';
import { usePhaseTheme } from '@/ui/theme';

import type { SFSymbol } from 'sf-symbols-typescript';

const LEAD_SIZE = 30;
/** Months listed before "… and N more". */
const MONTHS_SHOWN = 4;

/** Round 30pt badge used as the leading element of list rows. */
function Lead({ color, children }: PropsWithChildren<{ color: ColorValue }>) {
  return <View style={[styles.lead, { backgroundColor: color }]}>{children}</View>;
}

function LeadText({ color, label, text }: { color: ColorValue; label: string; text?: ColorValue }) {
  return (
    <Lead color={color}>
      <Txt variant="caption" color={text ?? colors.onAccent} style={styles.leadText}>
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

/** One of the three numbers in the year card: light 27 pt over a footnote, above a hair line. */
function YearStat({
  value,
  label,
  accent,
  onPress,
}: {
  value: string;
  label: string;
  accent?: boolean;
  onPress: () => void;
}) {
  const theme = usePhaseTheme();
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={`${value} ${label}`}
      style={({ pressed }) => [styles.yearStat, pressed && styles.pressed]}>
      <Txt style={styles.yearValue} color={accent ? theme.accent : colors.label}>
        {value}
      </Txt>
      <Txt variant="footnote" numberOfLines={1}>
        {label}
      </Txt>
    </Pressable>
  );
}

export default function LearnScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const { content, position, card, weekly, wrap, progress } = useProgram();
  const today = useToday();
  const plan = usePlan();
  const { snapshot } = useCycle();
  const currentPhase = snapshot.today?.phase;
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const [allMonths, setAllMonths] = useState(false);
  const streak = useMemo(() => readingStreak(progress, today), [progress, today]);
  const catchUp = useMemo(
    () => catchUpItems(content, position, progress),
    [content, position, progress],
  );

  const dailyIds = useMemo(() => new Set(allDaily(content).map((c) => c.id)), [content]);
  const readCount = Object.values(progress).filter(
    (p) => p.readAt && dailyIds.has(p.lessonId),
  ).length;
  const doneCount = Object.values(progress).filter((p) => p.actionDoneAt).length;
  const cardRead = !!card && !!progress[card.id]?.readAt;
  const weeklyRead = !!weekly && !!progress[weekly.id]?.readAt;
  const cardPhase = card?.phaseTags[0];

  const phaseSection = (
    <>
      <SectionTitle>{t('learn.phaseLibrary')}</SectionTitle>
      <View style={styles.phaseGrid}>
        {PHASE_ORDER.map((phase) => {
          const now = phase === currentPhase;
          return (
            <Card
              key={phase}
              onPress={() => router.push(`/(tabs)/learn/phase/${phase}`)}
              style={[styles.phaseCard, now && { borderColor: phaseColor[phase] }]}>
              <View style={[styles.phaseDot, { backgroundColor: phaseColor[phase] }]} />
              <Txt variant="headline">{content.phases[phase].name}</Txt>
              <Txt variant="footnote">
                {now
                  ? t('learn.phaseNow', { timing: content.phases[phase].timing })
                  : content.phases[phase].timing}
              </Txt>
            </Card>
          );
        })}
      </View>
    </>
  );

  const monthRow = (m: number, last: boolean) => {
    const month = content.months.find((x) => x.month === m);
    const available = isMonthAvailable(content, m);
    const unlocked = position.month >= m;
    const startDay = dailyProgramDay(m, 1);
    const access = hasDayAccess(startDay, plan);
    const read = month ? dailyOf(content, month).filter((c) => progress[c.id]?.readAt).length : 0;
    const total = month ? month.daily.length : 0;
    const done =
      isMonthWrapUnlocked(position, m) && !!month && !!progress[month.wrap.id]?.quizScore;
    const subtitle = !available
      ? t('learn.contentMissing')
      : !unlocked
        ? access
          ? t('learn.monthStarts', { n: startDay })
          : t('learn.monthStartsPlus', { n: startDay })
        : t('learn.monthRead', { read, total, day: wrapProgramDay(m) });
    return (
      <Row
        key={m}
        title={month ? month.theme : t('learn.month', { n: m })}
        titleColor={unlocked ? undefined : colors.secondaryLabel}
        subtitle={subtitle}
        lead={
          done ? (
            <LeadIcon color={theme.accent} symbol="checkmark" tint={colors.onAccent} />
          ) : (
            <LeadText
              color={unlocked ? theme.soft : colors.fill}
              text={unlocked ? theme.accent : colors.tertiaryLabel}
              label={String(m)}
            />
          )
        }
        trailing={
          unlocked ? undefined : (
            <Icon name="lock.fill" size={13} color={colors.tertiaryLabel} />
          )
        }
        chevron={unlocked}
        onPress={() => router.push(`/(tabs)/learn/month/${m}`)}
        last={last}
      />
    );
  };
  const monthNumbers = Array.from({ length: MONTHS_IN_PROGRAM }, (_, i) => i + 1);
  const shownMonths = allMonths ? monthNumbers : monthNumbers.slice(0, MONTHS_SHOWN);
  const hiddenMonths = MONTHS_IN_PROGRAM - shownMonths.length;

  if (!isTracker) {
    return (
      <TabSwipe tab="learn">
        <Screen title={t('learn.title')} subtitle={t('learn.subtitleUser')}>
          {phaseSection}
          <SectionTitle>{t('learn.partnerProgram')}</SectionTitle>
          <Card style={styles.list}>
            {card ? (
              <Row
                title={t('learn.partnerTodayCard', { title: card.title })}
                subtitle={t('home.todaysCardDay', { day: position.programDay })}
                lead={
                  <LeadText
                    color={cardPhase ? phaseColor[cardPhase] : theme.accent}
                    label={String(position.dayInMonth)}
                  />
                }
                onPress={() => router.push(`/(tabs)/learn/daily/${card.id}`)}
              />
            ) : null}
            {monthNumbers.map((m) => (
              <Row
                key={m}
                title={
                  content.months.find((x) => x.month === m)
                    ? t('learn.monthTheme', {
                        n: m,
                        theme: content.months.find((x) => x.month === m)?.theme,
                      })
                    : t('learn.month', { n: m })
                }
                subtitle={
                  isMonthAvailable(content, m)
                    ? content.months.find((x) => x.month === m)?.focus
                    : t('learn.contentMissing')
                }
                symbol={position.month >= m ? 'book.closed.fill' : 'lock.fill'}
                symbolColor={position.month >= m ? theme.accent : colors.tertiaryLabel}
                onPress={() => router.push(`/(tabs)/learn/month/${m}`)}
                last={m === MONTHS_IN_PROGRAM}
              />
            ))}
          </Card>
        </Screen>
      </TabSwipe>
    );
  }

  return (
    <TabSwipe tab="learn">
      <Screen
        title={t('learn.title')}
        subtitle={t('learn.subtitle', { day: position.programDay, month: position.month })}>
        <Card style={styles.yearCard}>
          <View style={styles.yearHead}>
            <Txt variant="boxLabel" color={theme.accent}>
              {t('learn.yearLabel').toUpperCase()}
            </Txt>
            <Txt variant="footnote">
              {t('learn.yearOf', { n: position.programDay, total: PROGRAM_DAYS })}
            </Txt>
          </View>
          <View style={styles.track}>
            <View
              style={[
                styles.fill,
                { backgroundColor: theme.accent },
                {
                  width: `${Math.max(1, Math.round((position.programDay / PROGRAM_DAYS) * 100))}%`,
                },
              ]}
            />
          </View>
          <View style={styles.yearStats}>
            <YearStat
              value={String(readCount)}
              label={t('learn.stats.read')}
              onPress={() => router.push('/(tabs)/learn/stats?kind=read')}
            />
            <YearStat
              value={String(doneCount)}
              label={t('learn.stats.done')}
              onPress={() => router.push('/(tabs)/learn/stats?kind=done')}
            />
            <YearStat
              value={String(streak)}
              label={streak === 1 ? t('learn.stats.streakOne') : t('learn.stats.streak')}
              accent
              onPress={() => router.push('/(tabs)/learn/stats?kind=streak')}
            />
          </View>
        </Card>

        <SectionTitle>{t('learn.today')}</SectionTitle>
        <Card style={styles.list}>
          {card ? (
            <Row
              title={card.title}
              subtitle={
                cardRead
                  ? t('learn.todaysCardRead')
                  : t('learn.todaysCardMinutes', {
                      min: readingMinutes([card.insight, card.action]),
                    })
              }
              lead={
                cardRead ? (
                  <LeadIcon color={theme.soft} symbol="checkmark" tint={theme.accent} />
                ) : (
                  <LeadText
                    color={cardPhase ? phaseColor[cardPhase] : theme.accent}
                    label={String(position.dayInMonth)}
                  />
                )
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
                weeklyRead
                  ? `${t('learn.thisWeek')} · ${t('learn.read').toLowerCase()}`
                  : t('learn.thisWeekMinutes', { min: readingMinutes(weekly.body) })
              }
              lead={
                weeklyRead ? (
                  <LeadIcon color={theme.soft} symbol="checkmark" tint={theme.accent} />
                ) : (
                  <LeadText color={theme.accent} label={t('learn.weekBadge', { n: weekly.week })} />
                )
              }
              onPress={() => router.push(`/(tabs)/learn/weekly/${weekly.id}`)}
            />
          ) : null}
          <Row
            title={wrap ? wrap.title : t('learn.thisMonth')}
            titleColor={wrap ? undefined : colors.secondaryLabel}
            subtitle={wrap ? t('learn.wrap') : t('learn.locked', { n: wrapProgramDay(position.month) })}
            lead={
              wrap ? (
                <LeadIcon color={theme.accent} symbol="star.fill" tint={colors.onAccent} />
              ) : (
                <LeadIcon color={colors.fill} symbol="lock.fill" tint={colors.tertiaryLabel} />
              )
            }
            onPress={wrap ? () => router.push(`/(tabs)/learn/wrap/${wrap.id}`) : undefined}
            last
          />
        </Card>

        {catchUp.length > 0 ? (
          <View style={[styles.catchUp, { backgroundColor: theme.soft }]}>
            <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
              <Txt variant="headline">{t('learn.catchUp')}</Txt>
              <Txt variant="footnote">{t('learn.catchUpCount', { n: catchUp.length })}</Txt>
            </View>
            <Chip
              label={t('learn.readNow')}
              selected
              onPress={() => {
                const next = catchUp[0];
                router.push(`/(tabs)/learn/${next.kind}/${next.id}`);
              }}
            />
          </View>
        ) : null}

        {phaseSection}

        <View style={styles.links}>
          <Button
            title={t('learn.archive')}
            variant="secondary"
            onPress={() => router.push('/(tabs)/learn/archive')}
            style={styles.link}
          />
          <Button
            title={t('learn.overview')}
            variant="secondary"
            onPress={() => router.push('/(tabs)/learn/overview')}
            style={styles.link}
          />
        </View>

        <SectionTitle>{t('learn.program')}</SectionTitle>
        <Card style={styles.list}>
          {shownMonths.map((m, i) => monthRow(m, hiddenMonths === 0 && i === shownMonths.length - 1))}
          {hiddenMonths > 0 ? (
            <Pressable
              onPress={() => setAllMonths(true)}
              accessibilityRole="button"
              style={({ pressed }) => [styles.more, pressed && styles.pressed]}>
              <Txt variant="footnote" color={theme.accent} style={styles.moreText}>
                {t('learn.moreMonths', { n: hiddenMonths })}
              </Txt>
            </Pressable>
          ) : null}
        </Card>
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  yearCard: { gap: spacing.sm + 6 },
  yearHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  track: { height: 6, borderRadius: 3, backgroundColor: colors.fill, overflow: 'hidden' },
  fill: { height: 6, borderRadius: 3 },
  yearStats: { flexDirection: 'row', gap: spacing.sm, paddingTop: spacing.xs },
  yearStat: {
    flex: 1,
    gap: 2,
    borderTopWidth: 1,
    borderTopColor: colors.separator,
    paddingTop: 10,
  },
  yearValue: { fontFamily: fontFor(300), fontSize: 27, lineHeight: 30 },
  list: { padding: 0, paddingHorizontal: spacing.md },
  lead: {
    width: LEAD_SIZE,
    height: LEAD_SIZE,
    borderRadius: LEAD_SIZE / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leadText: { fontFamily: fontFor(700), fontVariant: ['tabular-nums'] },
  catchUp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    borderRadius: radius.card,
    paddingVertical: 14,
    paddingHorizontal: spacing.card,
  },
  phaseGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: 10 },
  phaseCard: { flexBasis: '47%', flexGrow: 1, gap: 6, padding: spacing.md },
  phaseDot: { width: 10, height: 10, borderRadius: 5, marginBottom: 4 },
  links: { flexDirection: 'row', gap: 10 },
  link: { flex: 1, minHeight: 46, paddingHorizontal: 8 },
  more: { alignItems: 'center', paddingVertical: 14 },
  moreText: { fontFamily: fontFor(600) },
  pressed: { opacity: 0.6 },
});
