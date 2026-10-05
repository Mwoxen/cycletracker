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
    <View>
      <View style={styles.labelRow}>
        <Txt variant="label">{t('home.todaysCardDay', { day: programDay }).toUpperCase()}</Txt>
        <Icon name="lock.fill" size={12} color={colors.tertiaryLabel} />
      </View>
      <Card>
        <Txt variant="cardTitle">{card.title}</Txt>
        <Txt variant="callout" color={colors.secondaryLabel}>
          {t('plus.teaser', { day: programDay })}
        </Txt>
        <Button
          title={t('plus.seePlus')}
          symbol="sparkles"
          onPress={() => router.push('/paywall')}
          style={{ marginTop: spacing.xs }}
        />
      </Card>
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
});
