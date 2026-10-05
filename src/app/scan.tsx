import { CameraView, useCameraPermissions } from 'expo-camera';
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

import { extractPayload } from '@/sync/payload';
import { colors, radius, spacing } from '@/ui/colors';
import { Button, Card, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

export default function ScanSheet() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const [pasted, setPasted] = useState('');
  const [error, setError] = useState<string | undefined>();
  const handled = useRef(false);

  const accept = (text: string) => {
    if (handled.current) return;
    const payload = extractPayload(text);
    if (!payload) {
      setError(t('sync.importInvalid'));
      return;
    }
    handled.current = true;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    router.replace({ pathname: '/import', params: { d: payload } });
  };

  const granted = permission?.granted ?? false;

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={styles.content}
      keyboardDismissMode="on-drag">
      <View style={styles.header}>
        <Txt variant="title">{t('sync.scanTitle')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {t('common.cancel')}
          </Txt>
        </Pressable>
      </View>

      {granted ? (
        <View style={styles.cameraBox}>
          <CameraView
            style={StyleSheet.absoluteFill}
            facing="back"
            barcodeScannerSettings={{ barcodeTypes: ['qr'] }}
            onBarcodeScanned={(result) => accept(result.data)}
          />
        </View>
      ) : (
        <Card>
          <Txt>
            {permission?.canAskAgain === false ? t('sync.cameraDenied') : t('sync.scanHint')}
          </Txt>
          {permission?.canAskAgain === false ? (
            <Button
              title={t('sync.openSettings')}
              variant="secondary"
              onPress={() => void Linking.openSettings()}
            />
          ) : (
            <Button
              title={t('sync.scanTitle')}
              symbol="camera"
              onPress={() => void requestPermission()}
            />
          )}
        </Card>
      )}
      {granted ? (
        <Txt variant="footnote" style={{ textAlign: 'center' }}>
          {t('sync.scanHint')}
        </Txt>
      ) : null}

      <Card>
        <Txt variant="footnote">{t('sync.pasteLink')}</Txt>
        <TextInput
          value={pasted}
          onChangeText={(v) => {
            setPasted(v);
            setError(undefined);
          }}
          placeholder={t('sync.pastePlaceholder')}
          placeholderTextColor={colors.tertiaryLabel}
          autoCapitalize="none"
          autoCorrect={false}
          style={styles.input}
          onSubmitEditing={() => accept(pasted)}
          returnKeyType="go"
        />
        {error ? (
          <Txt variant="footnote" color={colors.red}>
            {error}
          </Txt>
        ) : null}
        <Button
          title={t('sync.importButton')}
          variant="secondary"
          onPress={() => accept(pasted)}
          disabled={!pasted.trim()}
        />
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingTop: spacing.lg, paddingBottom: 60 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  cameraBox: {
    aspectRatio: 1,
    borderRadius: radius.card,
    overflow: 'hidden',
    backgroundColor: '#000',
  },
  input: { fontSize: 15, color: colors.label, paddingVertical: 6 },
});
