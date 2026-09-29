import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, useColorScheme, View } from 'react-native';

import type { CycleSnapshot } from '@/engine/cycle';
import { useStore } from '@/store/store';
import { colors, phaseColor, phaseGradient, phaseSymbol, spacing } from '@/ui/colors';
import { CycleRing } from '@/ui/cycle-ring';
import { Badge, Card, Icon, Txt } from '@/ui/primitives';

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
  const router = useRouter();
  const scheme = useColorScheme();
  const settings = useStore((s) => s.settings);
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
    <Card
      onPress={() => router.push(`/(tabs)/home/phase/${phase}`)}
      style={{
        experimental_backgroundImage:
          scheme === 'dark' ? phaseGradient[phase].dark : phaseGradient[phase].light,
      }}>
      <View style={styles.header}>
        <View style={styles.ringWrap}>
          <CycleRing
            today={today}
            periodLength={snapshot.stats.averagePeriodLength}
            lutealLength={settings.lutealLength}
            size={84}
          />
          <View style={[styles.icon, { backgroundColor: phaseColor[phase] }]}>
            <Icon name={phaseSymbol[phase] as SFSymbol} size={18} color={colors.white} />
          </View>
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
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
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
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  ringWrap: { width: 84, height: 84, alignItems: 'center', justifyContent: 'center' },
  icon: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  badges: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs },
});
