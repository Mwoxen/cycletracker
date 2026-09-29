import type { ErrorBoundaryProps } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Alert, ScrollView, Share, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { Button, Icon, Txt } from '@/ui/primitives';

/**
 * Shown when a screen throws. Offers retry, and wiping local data as a last resort so a
 * corrupt store can never lock the user out for good.
 */
export function AppErrorBoundary({
  error,
  retry,
  details,
}: ErrorBoundaryProps & { details?: string }) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const resetAll = useStore((s) => s.resetAll);

  const wipe = () => {
    Alert.alert(t('settings.resetConfirmTitle'), t('settings.resetConfirmBody'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('settings.resetAll'),
        style: 'destructive',
        onPress: () => {
          resetAll();
          void retry();
        },
      },
    ]);
  };

  const report = `${error.name}: ${error.message}\n\n${details ?? error.stack ?? ''}`;
  const share = () => {
    void Share.share({ message: report }).catch(() => undefined);
  };

  return (
    <View
      style={[
        styles.container,
        { paddingTop: insets.top + spacing.xl, paddingBottom: insets.bottom + spacing.lg },
      ]}>
      <Icon name="exclamationmark.triangle.fill" size={40} color={colors.orange} />
      <Txt variant="title" style={{ textAlign: 'center' }}>
        {t('error.title')}
      </Txt>
      <Txt color={colors.secondaryLabel} style={{ textAlign: 'center' }}>
        {t('error.body')}
      </Txt>
      <Txt
        variant="caption"
        color={colors.tertiaryLabel}
        style={{ textAlign: 'center' }}
        numberOfLines={4}>
        {error.message}
      </Txt>
      {details ? (
        <ScrollView style={styles.details} contentContainerStyle={{ padding: spacing.sm }}>
          <Txt variant="caption" color={colors.tertiaryLabel} style={styles.mono}>
            {details}
          </Txt>
        </ScrollView>
      ) : null}
      <View style={{ alignSelf: 'stretch', gap: spacing.sm, marginTop: spacing.md }}>
        <Button title={t('error.retry')} onPress={() => void retry()} />
        <Button title={t('error.share')} variant="plain" onPress={share} />
        <Button title={t('settings.resetAll')} variant="plain" onPress={wipe} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: spacing.lg,
    gap: spacing.md,
  },
  details: {
    alignSelf: 'stretch',
    maxHeight: 220,
    borderRadius: 8,
    backgroundColor: colors.cardSecondary,
  },
  mono: { fontFamily: 'Menlo', fontSize: 10, lineHeight: 13 },
});
