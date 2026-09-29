import type { ErrorBoundaryProps } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { Button, Icon, Txt } from '@/ui/primitives';

/**
 * Shown when a screen throws. Offers retry, and wiping local data as a last resort so a
 * corrupt store can never lock the user out for good.
 */
export function AppErrorBoundary({ error, retry }: ErrorBoundaryProps) {
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
      <View style={{ alignSelf: 'stretch', gap: spacing.sm, marginTop: spacing.md }}>
        <Button title={t('error.retry')} onPress={() => void retry()} />
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
});
