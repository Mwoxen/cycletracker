import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { ISODate, Phase } from '@/domain/types';
import { useStore } from '@/store/store';
import { colors, fontFor, spacing } from '@/ui/colors';
import { Card, Icon, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

/** How many of the phase's "what you can do" items Home shows; the rest live on the phase page. */
const SHOWN = 3;

/**
 * "What you can do" for today's phase on Home: three numbered rows (docs/design/README.md
 * §1.7) that can be ticked; the badge turns into a check in the accent. Ticks are kept per
 * cycle, so they start fresh with each new cycle.
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
  const theme = usePhaseTheme();
  const done = useStore((s) => s.phaseActionsDone[cycleStart]?.[phase]);
  const toggle = useStore((s) => s.togglePhaseAction);
  const shown = items.slice(0, SHOWN);
  const kicker = `${t(`phases.${phase}`)} · ${t('home.cycleDayShort', { n: cycleDay })}`;

  return (
    <Card onPress={onOpen}>
      <View style={styles.head}>
        <Txt variant="cardTitle">{t('home.whatYouCanDo')}</Txt>
        <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
      </View>
      <Txt variant="footnote">{kicker}</Txt>
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
              <View
                style={[styles.badge, { backgroundColor: checked ? theme.accent : theme.soft }]}>
                {checked ? (
                  <Icon name="checkmark" size={12} color={colors.onAccent} weight="bold" />
                ) : (
                  <Txt style={styles.badgeText} color={theme.accent}>
                    {i + 1}
                  </Txt>
                )}
              </View>
              <Txt style={styles.rowText} color={checked ? colors.secondaryLabel : colors.label}>
                {text}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {items.length > shown.length ? (
        <Txt variant="callout" color={theme.accent} style={styles.more}>
          {t('home.allInPhase', { n: items.length })} ›
        </Txt>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  head: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  rows: { marginTop: spacing.xs },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingVertical: 8,
    minHeight: 40,
  },
  badge: {
    width: 24,
    height: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 0,
  },
  badgeText: { fontFamily: fontFor(700), fontSize: 12, lineHeight: 16 },
  rowText: { flex: 1, flexShrink: 1, lineHeight: 23, marginLeft: spacing.sm + spacing.xs },
  pressed: { opacity: 0.6 },
  more: { fontFamily: fontFor(600) },
});
