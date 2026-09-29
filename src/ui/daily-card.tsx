import * as Haptics from 'expo-haptics';
import { Link } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { DailyCard } from '@/content';
import { useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { Card, Icon, Txt } from '@/ui/primitives';

/**
 * Today's card on the Home screen: the label, the title (opens the card) and the action as a
 * single tickable row. No preview text and no nested boxes.
 */
export function DailyCardPreview({ card }: { card: DailyCard }) {
  const { t } = useTranslation();
  const read = useStore((s) => !!s.progress[card.id]?.readAt);
  return (
    <Card>
      <Link href={`/(tabs)/home/daily/${card.id}`} asChild>
        <Pressable accessibilityRole="link" style={({ pressed }) => pressed && styles.pressed}>
          <View style={styles.headerRow}>
            <Txt variant="footnote">{t('home.todaysCard')}</Txt>
            {read ? <Icon name="checkmark.circle.fill" size={16} color={colors.green} /> : null}
          </View>
          <View style={styles.titleRow}>
            <Txt variant="title" style={{ flex: 1 }}>
              {card.title}
            </Txt>
            <Icon name="chevron.right" size={14} color={colors.tertiaryLabel} />
          </View>
        </Pressable>
      </Link>
      <ActionRow card={card} />
    </Card>
  );
}

/** The card's action as a checkbox row: circle, then a green tick once it is done. */
export function ActionRow({ card }: { card: DailyCard }) {
  const { t } = useTranslation();
  const done = useStore((s) => !!s.progress[card.id]?.actionDoneAt);
  const toggle = useStore((s) => s.toggleActionDone);
  return (
    <Pressable
      accessibilityRole="checkbox"
      accessibilityState={{ checked: done }}
      accessibilityLabel={card.action}
      accessibilityHint={done ? t('home.actionDone') : t('home.markActionDone')}
      onPress={() => {
        void Haptics.impactAsync(
          done ? Haptics.ImpactFeedbackStyle.Light : Haptics.ImpactFeedbackStyle.Medium,
        );
        toggle(card.id);
      }}
      style={({ pressed }) => [styles.action, pressed && styles.pressed]}>
      <Icon
        name={done ? 'checkmark.circle.fill' : 'circle'}
        size={22}
        color={done ? colors.green : colors.tertiaryLabel}
      />
      <Txt style={styles.actionText} color={done ? colors.secondaryLabel : colors.label}>
        {card.action}
      </Txt>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, marginTop: 2 },
  action: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: spacing.sm,
    paddingVertical: 6,
    minHeight: 36,
  },
  actionText: { flex: 1, lineHeight: 22 },
  pressed: { opacity: 0.6 },
});
