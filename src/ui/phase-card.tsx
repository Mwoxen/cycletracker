import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import type { CycleSnapshot } from '@/engine/cycle';
import { colors, phaseColor, phaseSymbol, spacing } from '@/ui/colors';
import { Badge, Card, Symbol, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

export function PhaseCard({
  snapshot,
  name,
  isTracker,
}: {
  snapshot: CycleSnapshot;
  name: string;
  isTracker: boolean;
}) {
  const { t } = useTranslation();
  const today = snapshot.today;
  const prediction = snapshot.prediction;
  if (!today || !prediction) return null;
  const phase = today.phase;
  const phaseName = t(`phases.${phase}`);

  let nextLine: string;
  if (prediction.isLate) {
    nextLine =
      prediction.daysLate === 1
        ? t('home.periodLateOne')
        : t('home.periodLate', { n: prediction.daysLate });
  } else if (prediction.daysUntilNextPeriod === 0) {
    nextLine = t('home.nextPeriodToday');
  } else if (prediction.daysUntilNextPeriod === 1) {
    nextLine = t('home.nextPeriodTomorrow');
  } else {
    nextLine = t('home.nextPeriodIn', { n: prediction.daysUntilNextPeriod });
  }

  const stats = snapshot.stats;
  const regularity =
    stats.regularity === 'unknown'
      ? t('home.regularity.unknown')
      : stats.regularity === 'regular'
        ? t('home.regularity.regular', { n: stats.averageCycleLength })
        : t('home.regularity.irregular', { n: stats.averageCycleLength, v: stats.variability });

  return (
    <Link href={`/(tabs)/learn/phase/${phase}`} asChild>
      <Card>
        <View style={styles.header}>
          <View style={[styles.icon, { backgroundColor: phaseColor[phase] }]}>
            <Symbol name={phaseSymbol[phase] as SFSymbol} size={22} color={colors.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Txt variant="title">
              {isTracker
                ? t('home.sheIsIn', { name, phase: phaseName.toLowerCase() })
                : t('home.youAreIn', { phase: phaseName.toLowerCase() })}
            </Txt>
            <Txt variant="footnote">
              {t('common.cycleDay', { n: today.cycleDay })} · {t(`phases.short.${phase}`)}
            </Txt>
          </View>
          <Symbol name="chevron.right" size={14} color={colors.tertiaryLabel} />
        </View>
        <View style={styles.badges}>
          {today.isPms ? <Badge label={t('home.pmsWindow')} color={colors.purple} /> : null}
          {today.isOvulation ? (
            <Badge label={t('home.ovulationToday')} color={colors.orange} />
          ) : null}
          {today.isFertile && !today.isOvulation ? (
            <Badge label={t('home.fertileWindow')} color={colors.teal} />
          ) : null}
        </View>
        <Txt variant="callout">{nextLine}</Txt>
        <Txt variant="footnote">{regularity}</Txt>
      </Card>
    </Link>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  icon: { width: 44, height: 44, borderRadius: 22, alignItems: 'center', justifyContent: 'center' },
  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs },
});
