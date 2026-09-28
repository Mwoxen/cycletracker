import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { DailyCard } from '@/content';
import { useStore } from '@/store/store';
import { colors, radius, spacing } from '@/ui/colors';
import { Card, Symbol, Txt } from '@/ui/primitives';

/** Compact view of a daily card for the Home screen, with the action toggle. */
export function DailyCardPreview({ card, isTracker }: { card: DailyCard; isTracker: boolean }) {
  const { t } = useTranslation();
  const progress = useStore((s) => s.progress[card.id]);
  return (
    <Card>
      <View style={styles.headerRow}>
        <Txt variant="footnote">
          {isTracker ? t('home.todaysCard') : t('home.partnerLearnsToday')}
        </Txt>
        {progress?.readAt ? (
          <Symbol name="checkmark.circle.fill" size={16} color={colors.green} />
        ) : null}
      </View>
      <Link href={`/(tabs)/learn/daily/${card.id}`} asChild>
        <Pressable style={({ pressed }) => pressed && { opacity: 0.7 }}>
          <Txt variant="title">{card.title}</Txt>
          <Txt numberOfLines={3} style={{ marginTop: spacing.xs }} color={colors.secondaryLabel}>
            {card.insight}
          </Txt>
          <Txt variant="callout" color={colors.tint} style={{ marginTop: spacing.sm }}>
            {t('home.readCard')} ›
          </Txt>
        </Pressable>
      </Link>
      <ActionBox card={card} />
    </Card>
  );
}

export function ActionBox({ card }: { card: DailyCard }) {
  const { t } = useTranslation();
  const done = useStore((s) => !!s.progress[card.id]?.actionDoneAt);
  const toggle = useStore((s) => s.toggleActionDone);
  return (
    <View style={styles.actionBox}>
      <Txt variant="footnote" color={colors.tint} style={{ fontWeight: '600' }}>
        {t('home.action').toUpperCase()}
      </Txt>
      <Txt>{card.action}</Txt>
      <Pressable
        accessibilityRole="checkbox"
        accessibilityState={{ checked: done }}
        onPress={() => {
          void Haptics.impactAsync(
            done ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium,
          );
          toggle(card.id);
        }}
        style={({ pressed }) => [styles.actionButton, pressed && { opacity: 0.7 }]}>
        <Symbol
          name={done ? 'checkmark.circle.fill' : 'circle'}
          size={22}
          color={done ? colors.green : colors.tint}
        />
        <Txt variant="headline" color={done ? colors.green : colors.tint}>
          {done ? t('home.actionDone') : t('home.markActionDone')}
        </Txt>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  actionBox: {
    backgroundColor: colors.cardSecondary,
    borderRadius: radius.card,
    padding: spacing.md,
    gap: spacing.sm,
    marginTop: spacing.xs,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingTop: spacing.xs,
    minHeight: 36,
  },
});
