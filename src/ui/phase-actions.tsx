import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { ISODate, Phase } from '@/domain/types';
import { useStore } from '@/store/store';
import { colors, phaseColor, spacing } from '@/ui/colors';
import { Card, Icon, Txt } from '@/ui/primitives';

/** How many of the phase's "what you can do" items Home shows; the rest live on the phase page. */
const SHOWN = 3;

/**
 * "What you can do" for today's phase on Home, built like the daily card: phase kicker, title,
 * the first three items as tickable rows, and a link to the full list on the phase page. Ticks
 * are kept per cycle, so they start fresh with each new cycle.
 */
export function PhaseActionsCard({
  phase,
  cycleDay,
  cycleStart,
  items,
  onOpen,
}: {
  phase: Phase;
  cycleDay: number;
  cycleStart: ISODate;
  items: string[];
  onOpen: () => void;
}) {
  const { t } = useTranslation();
  const done = useStore((s) => s.phaseActionsDone[cycleStart]?.[phase]);
  const toggle = useStore((s) => s.togglePhaseAction);
  const shown = items.slice(0, SHOWN);
  const kicker = `${t(`phases.${phase}`)} · ${t('home.cycleDayShort', { n: cycleDay })}`;

  return (
    <Card onPress={onOpen}>
      <View style={styles.head}>
        <Txt variant="caption" color={phaseColor[phase]} style={styles.kicker}>
          {kicker.toUpperCase()}
        </Txt>
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      </View>
      <Txt variant="title">{t('home.whatYouCanDo')}</Txt>
      <View style={styles.rows}>
        {shown.map((text, i) => {
          const checked = !!done?.includes(i);
          return (
            <Pressable
              key={i}
              onPress={() => {
                void Haptics.selectionAsync();
                toggle(cycleStart, phase, i);
              }}
              accessibilityRole="checkbox"
              accessibilityState={{ checked }}
              accessibilityLabel={text}
              style={({ pressed }) => [styles.row, pressed && styles.pressed]}>
              <Icon
                name={checked ? 'checkmark.circle.fill' : 'circle'}
                size={22}
                color={checked ? colors.green : colors.tertiaryLabel}
              />
              <Txt style={styles.rowText} color={checked ? colors.secondaryLabel : colors.label}>
                {text}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {items.length > shown.length ? (
        <Txt variant="footnote" color={colors.tint}>
          {t('home.allInPhase', { n: items.length })} ›
        </Txt>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  kicker: { fontWeight: '700', letterSpacing: 0.6 },
  rows: { gap: spacing.xs },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 6,
    minHeight: 36,
  },
  rowText: { flex: 1, flexShrink: 1, lineHeight: 22, marginLeft: spacing.sm },
  pressed: { opacity: 0.6 },
});
