import type { ErrorBoundaryProps } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, Share, StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useStore } from '@/store/store';
import { colors, phaseColor, phaseSoft, radius, spacing } from '@/ui/colors';
import { Button, Card, Icon, Txt } from '@/ui/primitives';

/**
 * Shown when a screen throws: one solid "try again", the report as a secondary button, the
 * technical details folded away, and wiping local data as a small last resort at the bottom so
 * a corrupt store can never lock the user out for good.
 */
export function AppErrorBoundary({
  error,
  retry,
  details,
}: ErrorBoundaryProps & { details?: string }) {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const resetAll = useStore((s) => s.resetAll);
  const [open, setOpen] = useState(false);

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
    <ScrollView
      style={styles.screen}
      contentContainerStyle={[
        styles.container,
        { paddingTop: insets.top + 64, paddingBottom: insets.bottom + spacing.lg },
      ]}>
      <View style={styles.badge}>
        <Icon name="exclamationmark.triangle" size={34} color={phaseColor.ovulation} />
      </View>
      <View style={styles.text}>
        <Txt variant="hero" style={styles.center} accessibilityRole="header">
          {t('error.title')}
        </Txt>
        <Txt color={colors.secondaryLabel} style={[styles.center, { maxWidth: 300 }]}>
          {t('error.body')}
        </Txt>
      </View>
      <View style={styles.buttons}>
        <Button title={t('error.retry')} variant="filled" onPress={() => void retry()} />
        <Button title={t('error.share')} variant="secondary" onPress={share} />
      </View>
      <Card style={styles.details}>
        <Pressable
          onPress={() => setOpen((o) => !o)}
          accessibilityRole="button"
          accessibilityState={{ expanded: open }}
          style={styles.detailsHead}>
          <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
            <Txt>{t('error.details')}</Txt>
            <Txt
              variant="footnote"
              color={colors.tertiaryLabel}
              numberOfLines={open ? undefined : 1}>
              {error.message}
            </Txt>
          </View>
          <Icon
            name={open ? 'chevron.down' : 'chevron.right'}
            size={14}
            color={colors.tertiaryLabel}
          />
        </Pressable>
        {open ? (
          <ScrollView style={styles.stack} contentContainerStyle={{ padding: spacing.sm }}>
            <Txt variant="caption" color={colors.tertiaryLabel} style={styles.mono}>
              {details ?? error.stack ?? error.message}
            </Txt>
          </ScrollView>
        ) : null}
      </Card>
      <View style={{ flex: 1 }} />
      <Pressable onPress={wipe} accessibilityRole="button" hitSlop={8} style={styles.wipe}>
        <Txt variant="footnote" color={phaseColor.menstrual}>
          {t('settings.resetAll')}
        </Txt>
      </Pressable>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: colors.background },
  container: {
    flexGrow: 1,
    alignItems: 'center',
    paddingHorizontal: spacing.lg,
    gap: spacing.lg,
  },
  badge: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: phaseSoft.ovulation,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: { gap: 12, alignItems: 'center' },
  center: { textAlign: 'center' },
  buttons: { alignSelf: 'stretch', gap: 10, marginTop: spacing.sm },
  details: { alignSelf: 'stretch', padding: 0, paddingHorizontal: spacing.md },
  detailsHead: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    minHeight: 44,
  },
  stack: {
    maxHeight: 220,
    borderRadius: radius.cell,
    backgroundColor: colors.cardSecondary,
    marginBottom: spacing.md,
  },
  mono: { fontFamily: 'Menlo', fontSize: 10, lineHeight: 13 },
  wipe: { paddingVertical: 8, marginTop: spacing.md },
});
