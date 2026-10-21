import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, View } from 'react-native';

import { useDayAccess, useHasAccess, type Feature } from '@/entitlements';
import { purchasesAvailable, restore } from '@/purchases';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Icon, Screen, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

/** The locked card: what this is, why it is Plus, and the two ways in. */
export function PlusLocked({ body }: { body: string }) {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const [busy, setBusy] = useState(false);

  const restorePurchases = async () => {
    setBusy(true);
    try {
      const ok = await restore();
      Alert.alert(t('plus.name'), ok ? t('plus.restored') : t('plus.nothingToRestore'));
    } catch {
      Alert.alert(t('plus.name'), t('plus.purchaseFailed'));
    } finally {
      setBusy(false);
    }
  };

  return (
    <Card style={styles.card}>
      <View style={[styles.badge, { backgroundColor: theme.accent }]}>
        <Icon name="lock.fill" size={22} color={colors.onAccent} />
      </View>
      <Txt variant="cardTitle" style={styles.center}>
        {t('plus.lockedTitle')}
      </Txt>
      <Txt color={colors.secondaryLabel} style={styles.center}>
        {body}
      </Txt>
      <Button title={t('plus.seePlus')} symbol="sparkles" onPress={() => router.push('/paywall')} />
      {purchasesAvailable ? (
        <Button
          title={t('plus.restore')}
          variant="plain"
          onPress={() => void restorePurchases()}
          disabled={busy}
        />
      ) : null}
    </Card>
  );
}

/** Wraps a whole screen: shows it when the plan allows, else the locked card in its place. */
export function PlusGate({
  programDay,
  feature,
  children,
}: {
  /** Programme day the screen belongs to; locked past the free days. */
  programDay?: number;
  /** A feature gate, when the screen is not tied to a month. */
  feature?: Feature;
  children: React.ReactNode;
}) {
  const { t } = useTranslation();
  const dayOk = useDayAccess(programDay ?? 1);
  const featureOk = useHasAccess(feature ?? 'cloudBackup');
  if (dayOk && featureOk) return <>{children}</>;
  const body =
    !dayOk && programDay ? t('plus.lockedDay', { n: programDay }) : t('plus.lockedOverview');
  return (
    <Screen>
      <PlusLocked body={body} />
    </Screen>
  );
}

const styles = StyleSheet.create({
  card: { alignItems: 'center', gap: spacing.sm, paddingVertical: spacing.lg },
  badge: {
    width: 48,
    height: 48,
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: spacing.xs,
  },
  center: { textAlign: 'center' },
});
