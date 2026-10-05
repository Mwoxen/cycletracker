import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { DailyCard } from '@/content';
import { useStore } from '@/store/store';
import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { Confetti } from '@/ui/confetti';
import { Pressed } from '@/ui/pressed';
import { Card, Icon, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

/**
 * Today's card on Home (docs/design/README.md §1.4): title, excerpt and the way into the reading
 * on top; a divider; then the one action for today with its "done" button.
 */
export function DailyCardPreview({
  card,
  isTracker,
  programDay,
}: {
  card: DailyCard;
  isTracker: boolean;
  /** 1-based day in the year program, shown in the kicker when known. */
  programDay?: number;
}) {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const progress = useStore((s) => s.progress[card.id]);
  const kicker = !isTracker
    ? t('home.partnerLearnsToday')
    : programDay
      ? t('home.todaysCardDay', { day: programDay })
      : t('home.todaysCard');
  return (
    <View>
      <View style={styles.labelRow}>
        <Txt variant="label">{kicker.toUpperCase()}</Txt>
        {progress?.readAt ? <Icon name="checkmark" size={12} color={theme.accent} /> : null}
      </View>
      <Card>
        <Link href={`/(tabs)/home/daily/${card.id}`} asChild>
          <Pressable accessibilityRole="button" style={styles.top}>
            <Txt variant="cardTitle">{card.title}</Txt>
            <Txt variant="callout" numberOfLines={3} color={colors.secondaryLabel}>
              {card.insight}
            </Txt>
            <Txt variant="callout" color={theme.accent} style={styles.readLink}>
              {t('home.readCard')} →
            </Txt>
          </Pressable>
        </Link>
        <View style={styles.divider} />
        <ActionBox card={card} />
      </Card>
    </View>
  );
}

/** The action with its button: outlined "Mark as done" ↔ "✓ Done" filled in `soft`. */
export function ActionBox({ card, size = 48 }: { card: DailyCard; size?: number }) {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const done = useStore((s) => !!s.progress[card.id]?.actionDoneAt);
  const toggle = useStore((s) => s.toggleActionDone);
  const [burst, setBurst] = useState(0);
  const label = done ? `✓ ${t('home.actionDone')}` : t('home.markActionDone');
  return (
    <View style={styles.actionBox}>
      <Txt variant="boxLabel" color={theme.accent}>
        {t('home.action').toUpperCase()}
      </Txt>
      <Txt style={styles.actionText}>{card.action}</Txt>
      <View>
        <Pressed
          accessibilityRole="button"
          accessibilityLabel={label}
          accessibilityState={{ selected: done }}
          scale={0.97}
          onPress={() => {
            if (!done) {
              void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
              setBurst((b) => b + 1);
            } else {
              void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
            }
            toggle(card.id);
          }}
          style={[
            styles.actionButton,
            { minHeight: size },
            done
              ? { backgroundColor: theme.soft, borderColor: theme.soft }
              : { backgroundColor: 'transparent', borderColor: theme.accent },
          ]}>
          <Txt variant="headline" color={theme.accent}>
            {label}
          </Txt>
        </Pressed>
        <Confetti burst={burst} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  labelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    marginLeft: spacing.xs,
    marginBottom: spacing.label,
  },
  top: { gap: 6 },
  readLink: { fontFamily: fontFor(700), marginTop: 2 },
  divider: { height: 1, backgroundColor: colors.separator, marginVertical: 6 },
  actionBox: { gap: spacing.sm },
  actionText: { lineHeight: 23 },
  actionButton: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.xs,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    borderRadius: radius.chip,
    borderWidth: 1.5,
  },
});
