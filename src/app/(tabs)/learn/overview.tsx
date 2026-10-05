import { Stack, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { PHASE_ORDER } from '@/content';
import { ENERGIES, MOODS, type Energy, type Mood } from '@/domain/types';
import { phaseInsights, programSummary } from '@/engine/insights';
import { useCycle } from '@/hooks/use-cycle';
import { useProgram } from '@/hooks/use-program';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, phaseColor, phaseSymbol, spacing } from '@/ui/colors';
import { PlusGate } from '@/ui/plus-gate';
import { Bullets, Card, Row, Screen, SectionTitle, Icon, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

export default function OverviewScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { content, progress } = useProgram();
  const { periods, settings } = useCycle();
  const logs = useStore(selectActiveLogs);

  const insights = useMemo(
    () => phaseInsights(content, logs, periods, settings, progress),
    [content, logs, periods, settings, progress],
  );
  const summary = useMemo(() => programSummary(content, progress), [content, progress]);

  const top = <K extends string>(counts: Partial<Record<K, number>>, order: K[]): K | undefined =>
    order.filter((k) => counts[k]).sort((a, b) => (counts[b] ?? 0) - (counts[a] ?? 0))[0];

  return (
    <>
      <Stack.Screen options={{ title: t('learn.overview') }} />
      <PlusGate feature="personalOverview">
      <Screen>
        <Txt color={colors.secondaryLabel}>{t('learn.overviewIntro')}</Txt>

        <SectionTitle>{t('learn.yearSummary')}</SectionTitle>
        <Card>
          <Txt>{t('learn.yearCards', { read: summary.cardsRead, total: summary.cardsTotal })}</Txt>
          <Txt>{t('learn.yearActions', { n: summary.actionsDone })}</Txt>
          <Txt>
            {t('learn.yearQuizzes', { n: summary.quizzesPassed, total: summary.monthsAvailable })}
          </Txt>
        </Card>

        {PHASE_ORDER.map((phase) => {
          const info = content.phases[phase];
          const r = insights[phase];
          const mood = top<Mood>(r.moods, MOODS);
          const energy = top<Energy>(r.energies, ENERGIES);
          return (
            <View key={phase} style={{ gap: spacing.sm }}>
              <View style={styles.header}>
                <View style={[styles.icon, { backgroundColor: phaseColor[phase] }]}>
                  <Icon name={phaseSymbol[phase] as SFSymbol} size={18} color={colors.white} />
                </View>
                <Txt variant="title" style={{ flex: 1, flexShrink: 1 }}>
                  {info.name}
                </Txt>
              </View>
              <Card>
                {r.days === 0 ? (
                  <Txt color={colors.secondaryLabel}>{t('learn.overviewNoData')}</Txt>
                ) : (
                  <>
                    <Txt variant="footnote">{t('learn.overviewDays', { n: r.days })}</Txt>
                    {r.topSymptoms.length ? (
                      <>
                        <Txt variant="headline">{t('learn.overviewSymptoms')}</Txt>
                        {r.topSymptoms.map((s) => (
                          <View key={s.symptom} style={{ gap: 2 }}>
                            <Txt>
                              {t(`log.symptomNames.${s.symptom}`)} · {s.count}
                            </Txt>
                            <Txt variant="footnote">{content.symptomTips[s.symptom].doThis}</Txt>
                          </View>
                        ))}
                      </>
                    ) : null}
                    {mood || energy ? (
                      <Txt variant="footnote">
                        {mood ? `${t('learn.overviewMood')}: ${t(`log.moods.${mood}`)}` : ''}
                        {mood && energy ? ' · ' : ''}
                        {energy
                          ? `${t('learn.overviewEnergy')}: ${t(`log.energies.${energy}`)}`
                          : ''}
                      </Txt>
                    ) : null}
                  </>
                )}
              </Card>
              <Card>
                <Txt variant="headline">{t('learn.overviewActions')}</Txt>
                {r.actionsDone.length ? (
                  <Bullets items={r.actionsDone.slice(0, 6).map((c) => c.action)} />
                ) : (
                  <Txt color={colors.secondaryLabel}>{t('learn.overviewNoActions')}</Txt>
                )}
              </Card>
              <Card style={{ padding: 0, paddingHorizontal: 16 }}>
                <Row
                  title={t('learn.overviewTip')}
                  subtitle={info.whatYouCanDo[0]}
                  symbol="lightbulb"
                  onPress={() => router.push(`/(tabs)/learn/phase/${phase}`)}
                  last
                />
              </Card>
            </View>
          );
        })}
      </Screen>
      </PlusGate>
    </>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', marginTop: spacing.sm },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: spacing.sm,
  },
});
