import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, Share, StyleSheet, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { relativeTime } from '@/hooks/use-relative-time';
import { createSyncSnapshot, selectSnapshotData, useStore } from '@/store';
import { buildImportLink, encodePayload, fitsInQr } from '@/sync/payload';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Chip, Txt } from '@/ui/primitives';

export default function ShareSheet() {
  const { t } = useTranslation();
  const router = useRouter();
  const data = useStore(selectSnapshotData);
  const deviceId = useStore((s) => s.deviceId);
  const pairing = useStore((s) => s.pairing);
  const setPairing = useStore((s) => s.setPairing);
  const [mode, setMode] = useState<'delta' | 'full'>(pairing.lastSharedAt ? 'delta' : 'full');

  const payload = useMemo(() => {
    const since = mode === 'delta' ? (pairing.lastSharedAt ?? 0) : 0;
    return encodePayload(createSyncSnapshot(data, deviceId, since));
  }, [data, deviceId, mode, pairing.lastSharedAt]);
  const link = buildImportLink(payload);
  const qrOk = fitsInQr(payload);

  const markShared = () => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setPairing({ lastSharedAt: Date.now() });
  };

  const sendLink = async () => {
    try {
      const result = await Share.share({ url: link, title: t('sync.shareTitle') });
      if (result.action === Share.sharedAction) markShared();
    } catch {
      // The share sheet was dismissed or unavailable; nothing to do.
    }
  };

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Txt variant="title">{t('sync.shareTitle')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={colors.tint}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>
      <Txt color={colors.secondaryLabel}>{t('sync.shareBody')}</Txt>

      <View style={styles.chips}>
        <Chip
          label={t('sync.shareChanges')}
          selected={mode === 'delta'}
          onPress={() => setMode('delta')}
        />
        <Chip
          label={t('sync.shareAll')}
          selected={mode === 'full'}
          onPress={() => setMode('full')}
        />
      </View>

      <Card style={{ alignItems: 'center', gap: spacing.md }}>
        {qrOk ? (
          <View style={styles.qr}>
            <QRCode value={link} size={240} backgroundColor="#ffffff" color="#000000" ecl="M" />
          </View>
        ) : (
          <Txt color={colors.secondaryLabel} style={{ textAlign: 'center' }}>
            {t('sync.tooBig')}
          </Txt>
        )}
        <Txt variant="footnote" style={{ textAlign: 'center' }}>
          {mode === 'delta' ? t('sync.deltaHint') : t('sync.fullHint')}
        </Txt>
        <Txt variant="footnote" style={{ textAlign: 'center' }}>
          {pairing.lastSharedAt
            ? t('home.lastShared', { when: relativeTime(pairing.lastSharedAt) })
            : t('home.neverShared')}
        </Txt>
      </Card>

      <Button
        title={t('sync.sendLink')}
        symbol="square.and.arrow.up"
        onPress={() => void sendLink()}
      />
      {qrOk ? (
        <Button
          title={t('sync.importDone')}
          variant="secondary"
          symbol="checkmark"
          onPress={markShared}
        />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingTop: spacing.lg, paddingBottom: 60 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  chips: { flexDirection: 'row', gap: spacing.sm },
  qr: { padding: spacing.md, backgroundColor: '#ffffff', borderRadius: 12 },
});
