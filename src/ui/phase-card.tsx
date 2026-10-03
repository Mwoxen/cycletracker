import { useRouter } from 'expo-router';
import type { PropsWithChildren } from 'react';
import { useTranslation } from 'react-i18next';
import { DynamicColorIOS, Platform, StyleSheet, useColorScheme, View } from 'react-native';

import type { CycleSnapshot } from '@/engine/cycle';
import { compareISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { useStore } from '@/store/store';
import { colors, phaseColor, phaseGradient, phaseSymbol, radius, spacing } from '@/ui/colors';
import { CycleRing } from '@/ui/cycle-ring';
import { Card, Icon, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

const RING_SIZE = 88;

/** Translucent white pill that sits on the phase gradient in both light and dark mode. */
const pillBackground =
  Platform.OS === 'ios'
    ? DynamicColorIOS({ light: 'rgba(255,255,255,0.6)', dark: 'rgba(255,255,255,0.12)' })
    : 'rgba(255,255,255,0.6)';

function Pill({ children }: PropsWithChildren) {
  return (
    <View style={styles.pill}>
      <Txt variant="footnote" color={colors.label} style={styles.pillText}>
        {children}
      </Txt>
    </View>
  );
}

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
  const fmt = useFormat();
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

  // The fertile window is upcoming: say when it starts. Once it has opened, point at ovulation
  // until it has passed; after that the badge line below already says what applies today.
  let fertileLine: string | undefined;
  if (compareISO(prediction.fertileWindow.start, today.date) > 0) {
    fertileLine = t('home.fertileFrom', { date: fmt.short(prediction.fertileWindow.start) });
  } else if (compareISO(prediction.ovulationDate, today.date) > 0) {
    fertileLine = t('home.ovulationAround', { date: fmt.short(prediction.ovulationDate) });
  }

  const headline = isTracker ? t(`home.needs.${phase}`, { name }) : t(`home.needsSelf.${phase}`);

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
            size={RING_SIZE}
          />
          <View style={[styles.icon, { backgroundColor: phaseColor[phase] }]}>
            <Icon name={phaseSymbol[phase] as SFSymbol} size={18} color={colors.white} />
          </View>
        </View>
        <View style={styles.text}>
          <Txt variant="caption" color={phaseColor[phase]} style={styles.kicker}>
            {`${phaseName} · ${t('home.cycleDayShort', { n: today.cycleDay })}`.toUpperCase()}
          </Txt>
          <Txt variant="title">{headline}</Txt>
          <Txt variant="footnote">{t(`phases.short.${phase}`)}</Txt>
        </View>
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      </View>
      <View style={styles.pills}>
        <Pill>{nextLine}</Pill>
        {fertileLine ? <Pill>{fertileLine}</Pill> : null}
        {today.isOvulation ? <Pill>{t('home.ovulationToday')}</Pill> : null}
        {today.isFertile && !today.isOvulation ? <Pill>{t('home.fertileWindow')}</Pill> : null}
        {today.isPms ? <Pill>{t('home.pmsWindow')}</Pill> : null}
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center' },
  ringWrap: {
    width: RING_SIZE,
    height: RING_SIZE,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    position: 'absolute',
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { flex: 1, flexShrink: 1, gap: 2, marginHorizontal: spacing.md },
  kicker: { fontWeight: '700', letterSpacing: 0.6 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.xs, marginTop: spacing.xs },
  pill: {
    backgroundColor: pillBackground,
    borderRadius: radius.chip,
    paddingVertical: 6,
    paddingHorizontal: 12,
  },
  pillText: { fontWeight: '500' },
});
