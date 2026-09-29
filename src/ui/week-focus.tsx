import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import { CYCLE_WEEKS, type CycleWeek } from '@/domain/types';
import { CYCLE_WEEK_PHASE, cycleWeekRange } from '@/engine/cycle';
import { daysBetween, isoWeekOf } from '@/engine/dates';
import { useCycleWeek, type CycleWeekState } from '@/hooks/use-cycle';
import { useStore } from '@/store/store';
import { colors, fonts, phaseColor, radius, spacing } from '@/ui/colors';
import { Bullets, Card, Icon, Txt } from '@/ui/primitives';

/**
 * The partner's focus for one cycle week: what to do and why. The current week gets tickable
 * actions for the tracker; the user role sees what her partner focuses on instead.
 */
export function WeekFocusCard({
  state,
  week,
  isTracker,
}: {
  state: CycleWeekState;
  week: CycleWeek;
  isTracker: boolean;
}) {
  const { t } = useTranslation();
  const toggleWeekAction = useStore((s) => s.toggleWeekAction);
  const weekContent = state.weeks.find((w) => w.week === week);
  if (!weekContent) return null;
  const isCurrent = week === state.week;
  const range = isCurrent ? state.range : cycleWeekRange(week, state.cycleLength);
  const isoWeek = isCurrent ? state.isoWeek : isoWeekOf(state.startDates[week]);
  const ownFocus = state.ownFocusByWeek[String(week)];
  const done = state.doneByWeek[String(week)] ?? [];

  let timing: string | undefined;
  if (!isCurrent) {
    const daysAhead = daysBetween(state.today, state.startDates[week]);
    if (daysAhead === 1) timing = t('weeks.comingTomorrow');
    else if (daysAhead > 1) timing = t('weeks.comingIn', { n: daysAhead });
    else timing = t('weeks.wasDays', range);
  }

  const toggle = (index: number) => {
    void Haptics.selectionAsync();
    toggleWeekAction(state.cycleStart, week, index);
  };

  return (
    <Card>
      <Txt variant="caption" color={phaseColor[CYCLE_WEEK_PHASE[week]]} style={styles.kicker}>
        {t('weeks.kicker', { iso: isoWeek, n: week, from: range.from, to: range.to })}
      </Txt>
      <Txt variant="title" style={styles.title}>
        {weekContent.title}
      </Txt>
      <Txt variant="footnote">{weekContent.why}</Txt>
      {ownFocus ? <Txt color={colors.tint}>{t('weeks.ownFocus', { text: ownFocus })}</Txt> : null}
      {isTracker ? (
        isCurrent ? (
          <View style={styles.actions}>
            {weekContent.actions.map((action, i) => {
              const checked = done.includes(i);
              return (
                <Pressable
                  key={i}
                  onPress={() => toggle(i)}
                  accessibilityRole="checkbox"
                  accessibilityState={{ checked }}
                  accessibilityLabel={action}
                  accessibilityHint={checked ? t('weeks.actionDone') : t('weeks.actionNotDone')}
                  style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
                  <Icon
                    name={checked ? 'checkmark.circle.fill' : 'circle'}
                    size={22}
                    color={checked ? colors.green : colors.tertiaryLabel}
                  />
                  <Txt
                    style={styles.actionText}
                    color={checked ? colors.secondaryLabel : colors.label}>
                    {action}
                  </Txt>
                </Pressable>
              );
            })}
          </View>
        ) : (
          <Bullets items={weekContent.actions} />
        )
      ) : (
        <Txt>{weekContent.partnerFocus}</Txt>
      )}
      {timing ? <Txt variant="footnote">{timing}</Txt> : null}
    </Card>
  );
}

/** Four pills, one per cycle week; the current week is highlighted in its dominant phase colour. */
export function WeekStrip({
  current,
  selected,
  onSelect,
}: {
  current: CycleWeek;
  selected: CycleWeek;
  onSelect: (week: CycleWeek) => void;
}) {
  const { t } = useTranslation();
  const select = (week: CycleWeek) => {
    if (week === selected) return;
    void Haptics.selectionAsync();
    onSelect(week);
  };
  return (
    <View style={styles.strip} accessibilityRole="tablist" accessibilityLabel={t('weeks.pickWeek')}>
      {CYCLE_WEEKS.map((week) => {
        const isSelected = week === selected;
        const isCurrent = week === current;
        const tone = phaseColor[CYCLE_WEEK_PHASE[week]];
        return (
          <Pressable
            key={week}
            onPress={() => select(week)}
            accessibilityRole="button"
            accessibilityLabel={t('weeks.weekN', { n: week })}
            accessibilityState={{ selected: isSelected }}
            style={({ pressed }) => [
              styles.pill,
              isSelected && styles.pillSelected,
              isCurrent && { borderColor: tone },
              isSelected && isCurrent && { backgroundColor: tone },
              pressed && !isSelected && styles.pressed,
            ]}>
            <Txt
              variant="footnote"
              color={
                isSelected && isCurrent
                  ? colors.white
                  : isSelected
                    ? colors.label
                    : isCurrent
                      ? tone
                      : colors.secondaryLabel
              }
              style={styles.pillText}>
              {String(week)}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

/** Card plus strip; the strip switches which week the card describes. */
export function WeekFocus({ isTracker }: { isTracker: boolean }) {
  const state = useCycleWeek();
  const [picked, setPicked] = useState<CycleWeek | undefined>();
  if (!state) return null;
  const selected = picked ?? state.week;
  return (
    <View style={styles.block}>
      <WeekFocusCard state={state} week={selected} isTracker={isTracker} />
      <WeekStrip current={state.week} selected={selected} onSelect={setPicked} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { gap: spacing.sm },
  kicker: { fontWeight: '700', letterSpacing: 0.6, textTransform: 'uppercase' },
  title: { fontFamily: fonts?.rounded },
  actions: { gap: spacing.xs, marginTop: spacing.xs },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingVertical: 6,
    minHeight: 36,
  },
  actionText: { flex: 1 },
  pressed: { opacity: 0.6 },
  strip: { flexDirection: 'row', gap: spacing.sm },
  pill: {
    flex: 1,
    minHeight: 36,
    borderRadius: radius.chip,
    backgroundColor: colors.fill,
    borderWidth: 1.5,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pillSelected: { backgroundColor: colors.card },
  pillText: { fontWeight: '600' },
});
