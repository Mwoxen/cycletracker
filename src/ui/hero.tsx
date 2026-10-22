import { useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import { pickHeadline } from '@/content';
import type { CycleSnapshot } from '@/engine/cycle';
import { compareISO, daysBetween } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, phaseColor, phaseSoft, radius, spacing } from '@/ui/colors';
import { CycleRing } from '@/ui/cycle-ring';
import { Txt } from '@/ui/primitives';

interface Fact {
  text: string;
  /** Logged by her, as opposed to a prediction. */
  logged: boolean;
}

/**
 * The top of Home: the ring, the message for today, the phase line and the facts with an
 * "estimate" or "logged" tag so predictions are never mistaken for data.
 */
export function Hero({
  snapshot,
  name,
  isTracker,
}: {
  snapshot: CycleSnapshot;
  name: string;
  isTracker: boolean;
}) {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const settings = useStore((s) => s.settings);
  const logs = useStore(selectActiveLogs);
  const today = snapshot.today;
  const prediction = snapshot.prediction;

  const loggedDays = useMemo(() => {
    if (!today) return [];
    return logs
      .map((l) => daysBetween(today.cycleStart, l.date) + 1)
      .filter((d) => d >= 1 && d <= today.cycleDay);
  }, [logs, today]);

  if (!today || !prediction) return null;
  const phase = today.phase;
  const phaseName = t(`phases.${phase}`);
  // The partner gets a different line every day (a list per phase); she keeps the one line.
  const pool = t(`home.needs.${phase}`, { name, returnObjects: true }) as unknown as string[];
  const headline = isTracker
    ? pickHeadline(Array.isArray(pool) ? pool : [], today.cycleDay, today.cycleStart)
    : t(`home.needsSelf.${phase}`);

  const facts: Fact[] = [];
  if (today.isLoggedPeriod) {
    facts.push({
      text: t('home.periodStarted', { date: fmt.short(today.cycleStart) }),
      logged: true,
    });
  }
  if (prediction.isLate) {
    facts.push({
      text:
        prediction.daysLate === 1
          ? t('home.periodLateOne')
          : t('home.periodLate', { n: prediction.daysLate }),
      logged: false,
    });
  } else if (prediction.daysUntilNextPeriod === 0) {
    facts.push({ text: t('home.nextPeriodToday'), logged: false });
  } else if (prediction.daysUntilNextPeriod === 1) {
    facts.push({ text: t('home.nextPeriodTomorrow'), logged: false });
  } else {
    facts.push({
      text: t('home.nextPeriodIn', { n: prediction.daysUntilNextPeriod }),
      logged: false,
    });
  }
  if (compareISO(prediction.fertileWindow.start, today.date) > 0) {
    facts.push({
      text: t('home.fertileFrom', { date: fmt.short(prediction.fertileWindow.start) }),
      logged: false,
    });
  } else if (compareISO(prediction.ovulationDate, today.date) >= 0) {
    facts.push({
      text: t('home.ovulationAround', { date: fmt.short(prediction.ovulationDate) }),
      logged: false,
    });
  }
  if (today.isPms) facts.push({ text: t('home.pmsWindow'), logged: false });

  const toCycleDay = (date: string) => daysBetween(today.cycleStart, date) + 1;
  const fertile = {
    from: toCycleDay(prediction.fertileWindow.start),
    to: toCycleDay(prediction.fertileWindow.end),
  };
  const ovulationDay = toCycleDay(prediction.ovulationDate);
  const inThisCycle = (d: number) => d >= 1 && d <= today.cycleLength;

  return (
    <View style={styles.hero}>
      <Pressable
        onPress={() => router.push(`/(tabs)/home/phase/${phase}`)}
        accessibilityRole="button"
        accessibilityLabel={`${phaseName}, ${t('home.cycleDay', { n: today.cycleDay })}`}
        style={styles.ringWrap}>
        <CycleRing
          today={today}
          periodLength={snapshot.stats.averagePeriodLength}
          lutealLength={settings.lutealLength}
          fertile={inThisCycle(fertile.from) ? fertile : undefined}
          ovulationDay={inThisCycle(ovulationDay) ? ovulationDay : undefined}
          loggedDays={loggedDays}
          label={t('home.cycleDay', { n: today.cycleDay })}
          phaseName={phaseName}
          reportAnchor
        />
      </Pressable>
      <Txt variant="hero" style={styles.headline}>
        {headline}
      </Txt>
      <Txt variant="callout" color={colors.secondaryLabel} style={styles.phaseLine}>
        {t(`phases.short.${phase}`)}
      </Txt>
      <View style={styles.facts}>
        <View style={styles.factCard}>
          {facts.slice(0, 3).map((f, i) => (
            <View key={f.text} style={[styles.fact, i > 0 && styles.factBorder]}>
              <Txt style={styles.factText}>{f.text}</Txt>
              <View
                style={[
                  styles.pill,
                  { backgroundColor: f.logged ? phaseSoft.follicular : colors.fill },
                ]}>
                <Txt
                  variant="tag"
                  color={f.logged ? phaseColor.follicular : colors.secondaryLabel}
                  numberOfLines={1}>
                  {(f.logged ? t('home.tagLogged') : `≈ ${t('home.tagEstimate')}`).toUpperCase()}
                </Txt>
              </View>
            </View>
          ))}
        </View>
        <Txt variant="caption" style={styles.note}>
          {t('home.estimateNote')}
        </Txt>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', paddingHorizontal: spacing.sm, paddingTop: spacing.xs },
  ringWrap: { marginBottom: 6 },
  headline: { textAlign: 'center', marginTop: 6, paddingHorizontal: spacing.sm },
  phaseLine: { textAlign: 'center', maxWidth: 300, marginTop: spacing.sm },
  facts: { alignSelf: 'stretch', marginTop: spacing.lg, marginHorizontal: -spacing.sm },
  factCard: {
    backgroundColor: colors.card,
    borderWidth: 1,
    borderColor: colors.separator,
    borderRadius: radius.card,
    paddingHorizontal: spacing.card,
  },
  fact: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 12,
    minHeight: 44,
  },
  factBorder: { borderTopWidth: 1, borderTopColor: colors.separator },
  factText: { flex: 1, flexShrink: 1, marginRight: spacing.md },
  pill: { borderRadius: radius.chip, paddingVertical: 3, paddingHorizontal: 8 },
  note: { marginTop: spacing.sm + 2, paddingHorizontal: spacing.xs },
});
