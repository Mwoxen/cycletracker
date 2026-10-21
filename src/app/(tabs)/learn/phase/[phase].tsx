import * as Haptics from 'expo-haptics';
import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import { PHASE_ORDER } from '@/content';
import { PHASES, type Phase } from '@/domain/types';
import { phaseForCycleDay } from '@/engine/cycle';
import { useCycle } from '@/hooks/use-cycle';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors, fontFor, phaseColor, phaseSoft, phaseTint, radius, spacing } from '@/ui/colors';
import { Button, Card, Icon, Screen, Txt } from '@/ui/primitives';
import { ReadingBullets, ReadingProgressBar, useReadingProgress } from '@/ui/reading';

/**
 * One page per phase: a hero in the phase's soft colour with a strip of the cycle, the things
 * to do as tickable rows, the rest as collapsible sections, and the neighbouring phases.
 */
export default function PhaseScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { phase } = useLocalSearchParams<{ phase: string }>();
  const content = useContent();
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const { settings, snapshot } = useCycle();
  const { progress, onScroll } = useReadingProgress();
  const key = (PHASES as string[]).includes(phase) ? (phase as Phase) : 'menstrual';
  const info = content.phases[key];
  const her = content.phasesForHer[key];
  const accent = phaseColor[key];
  const index = PHASE_ORDER.indexOf(key);
  const now = snapshot.today?.phase === key;
  const cycleStart = snapshot.today?.cycleStart;
  const done = useStore((s) => (cycleStart ? s.phaseActionsDone[cycleStart]?.[key] : undefined));
  const toggle = useStore((s) => s.togglePhaseAction);
  const [open, setOpen] = useState<Set<string>>(() => new Set(['0']));

  /** Days per phase in a typical cycle, for the strip and the day range. */
  const spans = useMemo(() => {
    const cycleLength = snapshot.stats.averageCycleLength;
    const periodLength = snapshot.stats.averagePeriodLength;
    const counts: Record<Phase, number> = { menstrual: 0, follicular: 0, ovulation: 0, luteal: 0 };
    for (let d = 1; d <= cycleLength; d += 1) {
      counts[phaseForCycleDay(d, cycleLength, periodLength, settings.lutealLength)] += 1;
    }
    const out: { phase: Phase; from: number; to: number; days: number }[] = [];
    for (const p of PHASE_ORDER) {
      const from = out.length ? out[out.length - 1].to + 1 : 1;
      out.push({ phase: p, from, to: from + counts[p] - 1, days: counts[p] });
    }
    return out;
  }, [snapshot.stats, settings.lutealLength]);
  const span = spans[index];

  const checklist = isTracker ? info.whatYouCanDo : info.selfCare;
  const sections: { title: string; items: string[] }[] = isTracker
    ? [
        { title: t('learn.whatHappens'), items: info.whatHappens },
        { title: t('learn.howSheMayFeel'), items: info.howSheMayFeel },
        { title: t('learn.avoid'), items: info.avoid },
      ]
    : [
        { title: t('learn.whatHappensInBody'), items: her.whatHappens },
        { title: t('learn.howYouMayFeel'), items: her.howYouMayFeel },
        { title: t('learn.partnerCanDo'), items: her.partnerCanDo },
      ];
  const toggleSection = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  const neighbours = [PHASE_ORDER[(index + 3) % 4], PHASE_ORDER[(index + 1) % 4]];

  return (
    <>
      <Stack.Screen options={{ title: info.name }} />
      <View style={{ flex: 1 }}>
        <Screen onScroll={onScroll} scrollEventThrottle={32} contentContainerStyle={{ gap: 14 }}>
          <View style={[styles.hero, { backgroundColor: phaseSoft[key] }]}>
            <Txt variant="boxLabel" color={accent}>
              {(now
                ? t('learn.phaseOfNow', { n: index + 1, total: PHASE_ORDER.length })
                : t('learn.phaseOf', { n: index + 1, total: PHASE_ORDER.length })
              ).toUpperCase()}
            </Txt>
            <Txt variant="hero" color={accent} accessibilityRole="header">
              {info.name}
            </Txt>
            <Txt variant="callout">{info.timing}</Txt>
            <View
              style={styles.strip}
              accessibilityLabel={t('learn.dayRange', { from: span.from, to: span.to })}>
              {spans.map((s) => (
                <View
                  key={s.phase}
                  style={[
                    styles.segment,
                    { flex: Math.max(1, s.days) },
                    s.phase === key
                      ? { height: 10, backgroundColor: phaseColor[s.phase] }
                      : { backgroundColor: phaseTint[s.phase] },
                  ]}
                />
              ))}
            </View>
            <View style={styles.stripLabels}>
              <Txt variant="footnote">{t('learn.dayOne')}</Txt>
              <Txt variant="footnote" color={accent} style={styles.semibold}>
                {t('learn.dayRange', { from: span.from, to: span.to })}
              </Txt>
            </View>
          </View>

          <Card style={styles.list}>
            <Txt variant="boxLabel" color={accent} style={styles.listLabel}>
              {(isTracker ? t('learn.whatYouCanDo') : t('learn.selfCare')).toUpperCase()}
            </Txt>
            {checklist.map((text, i) => {
              const checked = !!done?.includes(i);
              const tickable = isTracker && !!cycleStart;
              return (
                <Pressable
                  key={i}
                  disabled={!tickable}
                  onPress={() => {
                    if (!cycleStart) return;
                    void Haptics.selectionAsync();
                    toggle(cycleStart, key, i);
                  }}
                  accessibilityRole={tickable ? 'checkbox' : 'text'}
                  accessibilityState={tickable ? { checked } : undefined}
                  accessibilityLabel={text}
                  style={({ pressed }) => [
                    styles.row,
                    i < checklist.length - 1 && styles.rowBorder,
                    pressed && styles.pressed,
                  ]}>
                  <Icon
                    name={checked ? 'checkmark.circle.fill' : 'circle'}
                    size={22}
                    color={accent}
                  />
                  <Txt
                    style={styles.rowText}
                    color={checked ? colors.secondaryLabel : colors.label}>
                    {text}
                  </Txt>
                </Pressable>
              );
            })}
          </Card>
          {isTracker ? (
            <Txt variant="footnote" style={styles.hint}>
              {cycleStart ? t('learn.tickHint') : t('learn.tickHintNoCycle')}
            </Txt>
          ) : null}

          <Card style={[styles.list, { marginTop: spacing.sm }]}>
            {sections.map((section, i) => {
              const id = String(i);
              const expanded = open.has(id);
              return (
                <View key={id} style={i < sections.length - 1 ? styles.rowBorder : null}>
                  <Pressable
                    onPress={() => toggleSection(id)}
                    accessibilityRole="button"
                    accessibilityState={{ expanded }}
                    style={({ pressed }) => [styles.sectionHead, pressed && styles.pressed]}>
                    <Txt variant="headline" style={{ flex: 1 }}>
                      {section.title}
                    </Txt>
                    <Icon
                      name={expanded ? 'chevron.down' : 'chevron.right'}
                      size={14}
                      color={colors.tertiaryLabel}
                    />
                  </Pressable>
                  {expanded ? (
                    <View style={styles.sectionBody}>
                      <ReadingBullets items={section.items} compact />
                    </View>
                  ) : null}
                </View>
              );
            })}
          </Card>

          <View style={styles.neighbours}>
            {neighbours.map((p) => (
              <Button
                key={p}
                title={content.phases[p].name}
                variant="secondary"
                onPress={() => router.replace(`/(tabs)/learn/phase/${p}`)}
                style={styles.neighbour}
                lead={<View style={[styles.dot, { backgroundColor: phaseColor[p] }]} />}
              />
            ))}
          </View>
        </Screen>
        <ReadingProgressBar progress={progress} />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  hero: {
    borderRadius: radius.card,
    paddingVertical: 22,
    paddingHorizontal: spacing.card,
    gap: spacing.sm,
  },
  strip: { flexDirection: 'row', alignItems: 'flex-end', gap: 3, marginTop: spacing.sm },
  segment: { height: 6, borderRadius: radius.chip },
  stripLabels: { flexDirection: 'row', justifyContent: 'space-between' },
  semibold: { fontFamily: fontFor(600) },
  list: { padding: 0, paddingHorizontal: spacing.md },
  listLabel: { paddingTop: 14, paddingBottom: 2 },
  row: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, minHeight: 46 },
  rowBorder: { borderBottomWidth: 1, borderBottomColor: colors.separator },
  rowText: { flex: 1, flexShrink: 1, marginLeft: 12 },
  hint: { marginHorizontal: spacing.xs, marginTop: -6 },
  sectionHead: { flexDirection: 'row', alignItems: 'center', gap: 12, paddingVertical: 14 },
  sectionBody: { paddingBottom: 14 },
  neighbours: { flexDirection: 'row', gap: 10, marginTop: spacing.sm },
  neighbour: { flex: 1, minHeight: 46, paddingHorizontal: 8 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  pressed: { opacity: 0.6 },
});
