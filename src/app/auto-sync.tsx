import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, Share, StyleSheet, TextInput, View } from 'react-native';

import { relativeTime } from '@/hooks/use-relative-time';
import { useStore } from '@/store/store';
import { syncWithPartner } from '@/sync/cloud/run';
import { nativeTransport, type CloudAccount, type CloudState } from '@/sync/cloud/transport';
import { colors, radius, spacing } from '@/ui/colors';
import { Button, Card, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

/**
 * Sets up and shows the automatic sync with the partner. The cycle owner starts the sharing and
 * sends the link; the partner pastes it. After that the phones keep each other up to date.
 */
export default function AutoSyncSheet() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const isOwner = useStore((s) => s.profile?.role === 'user');
  const cloudSync = useStore((s) => s.cloudSync);
  const transport = useMemo(() => nativeTransport(), []);
  const [account, setAccount] = useState<CloudAccount | undefined>();
  const [cloud, setCloud] = useState<CloudState | undefined>();
  const [busy, setBusy] = useState<'start' | 'join' | 'sync' | undefined>();
  const [link, setLink] = useState('');
  const [message, setMessage] = useState<string | undefined>();

  const load = useCallback(async () => {
    if (!transport) return undefined;
    try {
      return { account: await transport.accountStatus(), cloud: await transport.state() };
    } catch {
      return { account: undefined, cloud: { participants: 0 } as CloudState };
    }
  }, [transport]);

  const refresh = useCallback(async () => {
    const loaded = await load();
    if (!loaded) return;
    setAccount(loaded.account);
    setCloud(loaded.cloud);
  }, [load]);

  useEffect(() => {
    let live = true;
    void load().then((loaded) => {
      if (!live || !loaded) return;
      setAccount(loaded.account);
      setCloud(loaded.cloud);
    });
    return () => {
      live = false;
    };
  }, [load]);

  const sendLink = async (url: string) => {
    try {
      await Share.share({ url, message: url, title: t('autoSync.title') });
    } catch {
      // The share sheet was dismissed; the sharing itself is already set up.
    }
  };

  const start = async () => {
    if (!transport) return;
    setBusy('start');
    setMessage(undefined);
    let url: string | undefined;
    try {
      url = await transport.createShare();
      await refresh();
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      void syncWithPartner(transport);
    } catch {
      setMessage(t('autoSync.startFailed'));
    } finally {
      setBusy(undefined);
    }
    if (url) await sendLink(url);
  };

  const join = async () => {
    if (!transport || !link.trim()) return;
    setBusy('join');
    setMessage(undefined);
    try {
      await transport.joinShare(link.trim());
      setLink('');
      await refresh();
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const outcome = await syncWithPartner(transport);
      if (!outcome.ok) setMessage(t(`autoSync.errors.${outcome.reason}`));
    } catch {
      setMessage(t('autoSync.joinFailed'));
    } finally {
      setBusy(undefined);
    }
  };

  const syncNow = async () => {
    if (!transport) return;
    setBusy('sync');
    setMessage(undefined);
    const outcome = await syncWithPartner(transport);
    setMessage(
      outcome.ok
        ? t('autoSync.syncedNow', { changed: outcome.changed })
        : t(`autoSync.errors.${outcome.reason}`),
    );
    await refresh();
    setBusy(undefined);
  };

  const stop = () => {
    if (!transport) return;
    Alert.alert(t('autoSync.stopTitle'), t('autoSync.stopBody'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('autoSync.stop'),
        style: 'destructive',
        onPress: () => {
          void transport
            .stop()
            .catch(() => undefined)
            .then(refresh);
        },
      },
    ]);
  };

  const connected = !!cloud?.role;
  const unavailableText = !transport
    ? t('autoSync.needsApp')
    : account === 'noAccount'
      ? t('autoSync.noAccount')
      : account === 'restricted'
        ? t('autoSync.restricted')
        : undefined;

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Txt variant="title">{t('autoSync.title')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>
      <Txt color={colors.secondaryLabel}>{t('autoSync.intro')}</Txt>

      {unavailableText ? (
        <Card>
          <Txt>{unavailableText}</Txt>
        </Card>
      ) : connected ? (
        <Card style={{ gap: spacing.md }}>
          <Txt variant="headline">{t('autoSync.connected')}</Txt>
          <Txt color={colors.secondaryLabel}>
            {cloud?.role === 'owner'
              ? cloud.participants > 0
                ? t('autoSync.partnerJoined')
                : t('autoSync.waitingForPartner')
              : t('autoSync.connectedTracker')}
          </Txt>
          <Txt variant="footnote" color={colors.secondaryLabel}>
            {cloudSync.lastError
              ? t(`autoSync.errors.${cloudSync.lastError}`)
              : cloudSync.lastSyncAt
                ? t('autoSync.lastSync', { when: relativeTime(cloudSync.lastSyncAt) })
                : t('autoSync.neverSynced')}
          </Txt>
          <Button
            title={busy === 'sync' ? t('autoSync.syncing') : t('autoSync.syncNow')}
            disabled={busy !== undefined}
            onPress={() => void syncNow()}
          />
          {cloud?.role === 'owner' && cloud.participants === 0 ? (
            <Button
              title={t('autoSync.sendLink')}
              variant="secondary"
              onPress={() => void start()}
            />
          ) : null}
          <Button title={t('autoSync.stop')} variant="destructive" onPress={stop} />
        </Card>
      ) : isOwner ? (
        <Card style={{ gap: spacing.md }}>
          <Txt variant="headline">{t('autoSync.ownerStepsTitle')}</Txt>
          <Txt color={colors.secondaryLabel}>{t('autoSync.ownerSteps')}</Txt>
          <Button
            title={busy === 'start' ? t('autoSync.starting') : t('autoSync.start')}
            disabled={busy !== undefined}
            onPress={() => void start()}
          />
        </Card>
      ) : (
        <Card style={{ gap: spacing.md }}>
          <Txt color={colors.secondaryLabel}>{t('autoSync.trackerSteps')}</Txt>
          <Txt variant="footnote">{t('autoSync.linkLabel')}</Txt>
          <TextInput
            value={link}
            onChangeText={setLink}
            placeholder={t('autoSync.linkPlaceholder')}
            placeholderTextColor={colors.tertiaryLabel}
            autoCapitalize="none"
            autoCorrect={false}
            keyboardType="url"
            style={styles.input}
          />
          <Button
            title={t('autoSync.paste')}
            variant="secondary"
            onPress={() => void Clipboard.getStringAsync().then(setLink)}
          />
          <Button
            title={busy === 'join' ? t('autoSync.joining') : t('autoSync.join')}
            disabled={busy !== undefined || !link.trim()}
            onPress={() => void join()}
          />
        </Card>
      )}

      {message ? (
        <Txt variant="footnote" color={colors.secondaryLabel}>
          {message}
        </Txt>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.lg, paddingBottom: spacing.xl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  input: {
    fontSize: 15,
    color: colors.label,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    borderRadius: radius.field,
    backgroundColor: colors.background,
  },
});
