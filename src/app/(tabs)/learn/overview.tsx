import { Stack, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import { PHASE_ORDER } from '@/content';
import { ENERGIES, MOODS, type Energy, type Mood } from '@/domain/types';
import { phaseInsights, programSummary } from '@/engine/insights';
import { useCycle } from '@/hooks/use-cycle';
import { useProgram } from '@/hooks/use-program';
import { selectActiveLogs, useStore } from '@/store/store';
import { colors, fontFor, phaseColor, phaseSoft, phaseSymbol, radius, spacing } from '@/ui/colors';
import { PlusGate } from '@/ui/plus-gate';
import { Card, Chip, Icon, Screen, Txt } from '@/ui/primitives';
import { Stat } from '@/ui/stat';

import type { SFSymbol } from 'sf-symbols-typescript';

/**
 * "How I help her best": three numbers, then one card per phase with what she logs most, what
 * works best (the tip for her top symptom) and how many actions the partner has done there.
 */
export default function OverviewScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { content, progress } = useProgram();
  const { periods, settings, snapshot } = useCycle();
  const logs = useStore(selectActiveLogs);
  const name = useStore((s) => s.profile?.partnerName ?? '');

  const insights = useMemo(
    () => phaseInsights(content, logs, periods, settings, progress),
    [content, logs, periods, settings, progress],
  );
  const summary = useMemo(() => programSummary(content, progress), [content, progress]);

  const top = <K extends string>(counts: Partial<Record<K, number>>, order: K[]): K | undefined =>
    order.filter((k) => counts[k]).sort((a, b) => (counts[b] ?? 0) - (counts[a] ?? 0))[0];

  return (
    <>
      <Stack.Screen options={{ title: '' }} />
      <PlusGate feature="personalOverview">
        <Screen contentContainerStyle={{ gap: 14 }}>
          <View style={styles.header}>
            <Txt variant="screenTitle" accessibilityRole="header">
              {t('learn.overviewTitle', { name })}
            </Txt>
            <Txt color={colors.secondaryLabel}>{t('learn.overviewLead')}</Txt>
          </View>

          <View style={styles.stats}>
            <Stat value={String(logs.length)} label={t('learn.statDaysLogged')} />
            <Stat value={String(summary.actionsDone)} label={t('learn.statActions')} />
            <Stat value={String(snapshot.stats.periodCount)} label={t('learn.statCycles')} />
          </View>

          {PHASE_ORDER.map((phase) => {
            const info = content.phases[phase];
            const r = insights[phase];
            const mood = top<Mood>(r.moods, MOODS);
            const energy = top<Energy>(r.energies, ENERGIES);
            const openPhase = () => router.push(`/(tabs)/learn/phase/${phase}`);
            const head = (
              <View style={styles.head}>
                <View style={[styles.icon, { backgroundColor: phaseColor[phase] }]}>
                  <Icon name={phaseSymbol[phase] as SFSymbol} size={16} color={colors.onAccent} />
                </View>
                <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
                  <Txt variant="cardTitle">{info.name}</Txt>
                  <Txt variant="footnote">
                    {r.days === 0
                      ? t('learn.notEnoughData')
                      : [
                          t('learn.phaseDaysLogged', { n: r.days }),
                          mood
                            ? t('learn.moodShort', { mood: t(`log.moods.${mood}`).toLowerCase() })
                            : undefined,
                          energy
                            ? t('learn.energyShort', {
                                energy: t(`log.energies.${energy}`).toLowerCase(),
                              })
                            : undefined,
                        ]
                          .filter(Boolean)
                          .join(' · ')}
                  </Txt>
                </View>
                {r.days === 0 ? (
                  <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
                ) : null}
              </View>
            );
            if (r.days === 0) {
              return (
                <Card key={phase} onPress={openPhase}>
                  {head}
                </Card>
              );
            }
            const tip = r.topSymptoms[0]
              ? content.symptomTips[r.topSymptoms[0].symptom].doThis
              : info.whatYouCanDo[0];
            return (
              <Card key={phase} style={{ gap: 14 }}>
                {head}
                {r.topSymptoms.length ? (
                  <View style={styles.chips}>
                    {r.topSymptoms.slice(0, 4).map((s) => (
                      <Chip
                        key={s.symptom}
                        label={`${t(`log.symptomNames.${s.symptom}`)} · ${s.count}`}
                      />
                    ))}
                  </View>
                ) : null}
                <View style={[styles.soft, { backgroundColor: phaseSoft[phase] }]}>
                  <Txt variant="boxLabel" color={phaseColor[phase]}>
                    {t('learn.worksBest').toUpperCase()}
                  </Txt>
                  <Txt>{tip}</Txt>
                </View>
                <View style={styles.foot}>
                  <Txt variant="footnote" style={{ flexShrink: 1 }}>
                    {t('learn.actionsInPhase', { n: r.actionsDone.length })}
                  </Txt>
                  <Pressable
                    onPress={openPhase}
                    accessibilityRole="button"
                    hitSlop={8}
                    style={({ pressed }) => pressed && styles.pressed}>
                    <Txt variant="footnote" color={phaseColor[phase]} style={styles.link}>
                      {t('learn.seePhase')}
                    </Txt>
                  </Pressable>
                </View>
              </Card>
            );
          })}
          <Txt variant="footnote" style={styles.hint}>
            {t('learn.phasesNoDataHint')}
          </Txt>
        </Screen>
      </PlusGate>
    </>
  );
}

const styles = StyleSheet.create({
  header: { gap: spacing.sm, paddingTop: spacing.xs, marginBottom: spacing.xs },
  stats: { flexDirection: 'row', gap: 10 },
  head: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  soft: { borderRadius: radius.field, paddingVertical: 14, paddingHorizontal: 16, gap: 4 },
  foot: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  link: { fontFamily: fontFor(600) },
  hint: { marginHorizontal: spacing.xs },
  pressed: { opacity: 0.6 },
});
