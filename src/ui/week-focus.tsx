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
import { Card, Icon, Txt } from '@/ui/primitives';

function weekRange(state: CycleWeekState, week: CycleWeek) {
  return week === state.week ? state.range : cycleWeekRange(week, state.cycleLength);
}

/** One action as a checkbox row; without `onPress` it is a read-only line with the same shape. */
function ActionLine({
  text,
  checked,
  onPress,
}: {
  text: string;
  checked: boolean;
  onPress?: () => void;
}) {
  const { t } = useTranslation();
  const inner = (
    <>
      <Icon
        name={checked ? 'checkmark.circle.fill' : 'circle'}
        size={22}
        color={checked ? colors.green : colors.tertiaryLabel}
      />
      <Txt style={styles.actionText} color={checked ? colors.secondaryLabel : colors.label}>
        {text}
      </Txt>
    </>
  );
  if (!onPress) return <View style={styles.action}>{inner}</View>;
  return (
    <Pressable
      onPress={onPress}
      accessibilityRole="checkbox"
      accessibilityState={{ checked }}
      accessibilityLabel={text}
      accessibilityHint={checked ? t('weeks.actionDone') : t('weeks.actionNotDone')}
      style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
      {inner}
    </Pressable>
  );
}

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
  const range = weekRange(state, week);
  const ownFocus = state.ownFocusByWeek[String(week)];
  const done = state.doneByWeek[String(week)] ?? [];

  let kicker: string;
  if (isCurrent) {
    kicker = t('weeks.kickerCurrent', { n: week });
  } else {
    const daysAhead = daysBetween(state.today, state.startDates[week]);
    if (daysAhead === 1) kicker = t('weeks.kickerTomorrow', { n: week });
    else if (daysAhead > 1) kicker = t('weeks.kickerAhead', { n: week, days: daysAhead });
    else kicker = t('weeks.kickerPast', { n: week, from: range.from, to: range.to });
  }

  const toggle = (index: number) => {
    void Haptics.selectionAsync();
    toggleWeekAction(state.cycleStart, week, index);
  };

  return (
    <Card>
      <Txt variant="footnote" color={phaseColor[CYCLE_WEEK_PHASE[week]]} style={styles.kicker}>
        {kicker}
      </Txt>
      <Txt variant="title" style={styles.title}>
        {weekContent.title}
      </Txt>
      <Txt color={colors.secondaryLabel}>{weekContent.why}</Txt>
      {ownFocus ? <Txt color={colors.tint}>{t('weeks.ownFocus', { text: ownFocus })}</Txt> : null}
      {isTracker ? (
        <View style={styles.actions}>
          {weekContent.actions.map((action, i) => (
            <ActionLine
              key={i}
              text={action}
              checked={done.includes(i)}
              onPress={isCurrent ? () => toggle(i) : undefined}
            />
          ))}
        </View>
      ) : (
        <Txt>{weekContent.partnerFocus}</Txt>
      )}
    </Card>
  );
}

/**
 * One chip per cycle week, labelled with its calendar week and cycle days; the current week is
 * filled in its dominant phase colour.
 */
export function WeekStrip({
  state,
  selected,
  onSelect,
}: {
  state: CycleWeekState;
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
        const isCurrent = week === state.week;
        const tone = phaseColor[CYCLE_WEEK_PHASE[week]];
        const range = weekRange(state, week);
        const iso = isCurrent ? state.isoWeek : isoWeekOf(state.startDates[week]);
        const primary =
          isSelected && isCurrent
            ? colors.white
            : isSelected
              ? colors.label
              : isCurrent
                ? tone
                : colors.secondaryLabel;
        const secondary = isSelected && isCurrent ? colors.white : colors.tertiaryLabel;
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
            <Txt variant="footnote" color={primary} style={styles.pillText}>
              {t('weeks.isoWeek', { iso })}
            </Txt>
            <Txt variant="caption" color={secondary}>
              {t('weeks.chipDays', { from: range.from, to: range.to })}
            </Txt>
          </Pressable>
        );
      })}
    </View>
  );
}

/** Strip over card; the strip switches which week the card describes. */
export function WeekFocus({ isTracker }: { isTracker: boolean }) {
  const state = useCycleWeek();
  const [picked, setPicked] = useState<CycleWeek | undefined>();
  if (!state) return null;
  const selected = picked ?? state.week;
  return (
    <View style={styles.block}>
      <WeekStrip state={state} selected={selected} onSelect={setPicked} />
      <WeekFocusCard state={state} week={selected} isTracker={isTracker} />
    </View>
  );
}

const styles = StyleSheet.create({
  block: { gap: spacing.sm },
  kicker: { fontWeight: '600' },
  title: { fontFamily: fonts?.rounded },
  actions: { gap: spacing.xs, marginTop: spacing.xs },
  action: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    paddingVertical: 6,
    minHeight: 36,
  },
  actionText: { flex: 1, lineHeight: 22 },
  pressed: { opacity: 0.6 },
  strip: { flexDirection: 'row', gap: spacing.sm },
  pill: {
    flex: 1,
    minHeight: 48,
    paddingVertical: 6,
    borderRadius: radius.chip,
    backgroundColor: colors.fill,
    borderWidth: 1.5,
    borderColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 1,
  },
  pillSelected: { backgroundColor: colors.card },
  pillText: { fontWeight: '600' },
});
