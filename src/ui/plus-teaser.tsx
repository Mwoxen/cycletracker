import { useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import type { DailyCard } from '@/content';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Icon, Txt } from '@/ui/primitives';

/** Today's card on Home when its month is part of Plus: the title, and the way in. */
export function PlusTeaserCard({ card, programDay }: { card: DailyCard; programDay: number }) {
  const { t } = useTranslation();
  const router = useRouter();
  return (
    <Card>
      <View style={styles.headerRow}>
        <Txt variant="footnote">{t('home.todaysCardDay', { day: programDay })}</Txt>
        <Icon name="lock.fill" size={14} color={colors.tertiaryLabel} />
      </View>
      <Txt variant="title">{card.title}</Txt>
      <Txt color={colors.secondaryLabel}>{t('plus.teaser', { day: programDay })}</Txt>
      <Button title={t('plus.seePlus')} symbol="sparkles" onPress={() => router.push('/paywall')} />
    </Card>
  );
}

const styles = StyleSheet.create({
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  spacer: { height: spacing.xs },
});
