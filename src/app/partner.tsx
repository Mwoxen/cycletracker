import * as Clipboard from 'expo-clipboard';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, Share, StyleSheet, TextInput, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

import { relativeTime } from '@/hooks/use-relative-time';
import { createSyncSnapshot, selectSnapshotData, useStore } from '@/store';
import { errorDetail } from '@/sync/cloud/detail';
import { syncWithPartner } from '@/sync/cloud/run';
import { ensureCloudShareUrl } from '@/sync/cloud/share';
import { nativeTransport, type CloudAccount, type CloudState } from '@/sync/cloud/transport';
import {
  buildImportLink,
  encodePayload,
  extractCloudShare,
  extractPayload,
  fitsInQr,
  validCloudShare,
} from '@/sync/payload';
import { colors, radius, spacing } from '@/ui/colors';
import { Button, Card, Chip, Txt } from '@/ui/primitives';
import { StatusDot } from '@/ui/settings-bits';
import { usePhaseTheme } from '@/ui/theme';

const MAX_QR_LINK = 2300;

/**
 * Everything about the partner connection in one place. She shows her code (which carries the
 * iCloud share, so scanning it connects the automatic sharing too); he scans it or pastes a
 * link. Once connected, both see the status, can sync now, and can stop.
 */
export default function PartnerSheet() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const setPairing = useStore((s) => s.setPairing);
  const cloudSync = useStore((s) => s.cloudSync);
  const data = useStore(selectSnapshotData);
  const deviceId = useStore((s) => s.deviceId);
  const transport = useMemo(() => nativeTransport(), []);
  const isOwner = profile?.role === 'user';
  const [account, setAccount] = useState<CloudAccount | undefined>();
  const [cloud, setCloud] = useState<CloudState | undefined>();
  const [cloudUrl, setCloudUrl] = useState<string | undefined>();
  const [busy, setBusy] = useState<'join' | 'sync' | undefined>();
  const [link, setLink] = useState('');
  const [message, setMessage] = useState<string | undefined>();
  const [mode, setMode] = useState<'delta' | 'full'>(pairing.lastSharedAt ? 'delta' : 'full');
  const [showCode, setShowCode] = useState(false);

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

  // The cycle owner's phone makes the iCloud share (once) so the code connects the partner too.
  useEffect(() => {
    if (!isOwner || !transport) return;
    let live = true;
    void ensureCloudShareUrl(transport).then((url) => {
      if (!live) return;
      setCloudUrl(url);
      void refresh();
    });
    return () => {
      live = false;
    };
  }, [isOwner, transport, refresh]);

  // Her side is connected once the partner has accepted; his side once he has joined.
  const connected = isOwner
    ? cloud?.role === 'owner' && cloud.participants > 0
    : cloud?.role === 'participant';

  const payload = useMemo(() => {
    const since = mode === 'delta' ? (pairing.lastSharedAt ?? 0) : 0;
    return encodePayload(createSyncSnapshot(data, deviceId, since));
  }, [data, deviceId, mode, pairing.lastSharedAt]);
  const importLink = buildImportLink(payload, cloudUrl);
  const qrOk = fitsInQr(payload);
  // The iCloud address must not push the code past what scans well; the link still carries it.
  const qrLink = importLink.length <= MAX_QR_LINK ? importLink : buildImportLink(payload);

  const markShared = () => {
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setPairing({ lastSharedAt: Date.now() });
  };

  const sendLink = async () => {
    try {
      const result = await Share.share({ url: importLink, title: t('partner.title') });
      if (result.action === Share.sharedAction) markShared();
    } catch {
      // The share sheet was dismissed or unavailable; nothing to do.
    }
  };

  const failureText = (outcome: { reason: string; message?: string }) =>
    `${t(`autoSync.errors.${outcome.reason}`)}${outcome.message ? `\n${outcome.message}` : ''}`;

  /** A pasted text: a code link imports her data (and joins), an iCloud link only joins. */
  const accept = async (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;
    const data = extractPayload(trimmed);
    if (data) {
      const share = extractCloudShare(trimmed);
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      router.replace({ pathname: '/import', params: share ? { d: data, s: share } : { d: data } });
      return;
    }
    const share = validCloudShare(trimmed);
    if (!share) {
      setMessage(t('sync.importInvalid'));
      return;
    }
    if (!transport) {
      setMessage(t('autoSync.needsApp'));
      return;
    }
    setBusy('join');
    setMessage(undefined);
    try {
      await transport.joinShare(share);
      setLink('');
      await refresh();
      void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      const outcome = await syncWithPartner(transport);
      if (!outcome.ok) setMessage(failureText(outcome));
    } catch (e) {
      setMessage(`${t('autoSync.joinFailed')}\n${errorDetail(e)}`);
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
      outcome.ok ? t('autoSync.syncedNow', { changed: outcome.changed }) : failureText(outcome),
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
          setShowCode(false);
          setCloudUrl(undefined);
          void transport
            .stop()
            .catch(() => undefined)
            .then(async () => {
              // Her code needs a fresh share, so the next scan connects again.
              if (isOwner) setCloudUrl(await ensureCloudShareUrl(transport));
              await refresh();
            });
        },
      },
    ]);
  };

  const unavailableText = !transport
    ? t('autoSync.needsApp')
    : account === 'noAccount'
      ? t('autoSync.noAccount')
      : account === 'restricted'
        ? t('autoSync.restricted')
        : undefined;
  const partnerName = pairing.partnerName ?? (isOwner ? undefined : profile?.partnerName);
  const statusLine = cloudSync.lastError
    ? `${t(`autoSync.errors.${cloudSync.lastError}`)}${cloudSync.lastDetail ? `\n${cloudSync.lastDetail}` : ''}`
    : cloudSync.lastSyncAt
      ? t('autoSync.lastSync', { when: relativeTime(cloudSync.lastSyncAt) })
      : t('autoSync.neverSynced');

  const codeSection = (
    <>
      <View style={styles.chips}>
        <Chip
          label={t('sync.shareChanges')}
          selected={mode === 'delta'}
          onPress={() => setMode('delta')}
        />
        <Chip label={t('sync.shareAll')} selected={mode === 'full'} onPress={() => setMode('full')} />
      </View>
      <Card style={styles.qrCard}>
        {qrOk ? (
          <View style={styles.qr}>
            <QRCode value={qrLink} size={240} backgroundColor="#ffffff" color="#000000" ecl="M" />
          </View>
        ) : (
          <Txt color={colors.secondaryLabel} style={styles.center}>
            {t('sync.tooBig')}
          </Txt>
        )}
        <Txt variant="footnote" style={styles.center}>
          {mode === 'delta' ? t('sync.deltaHint') : t('sync.fullHint')}
        </Txt>
        <Txt variant="footnote" style={styles.center}>
          {connected
            ? t('partner.codeAgainHint')
            : cloud?.role === 'owner'
              ? t('autoSync.waitingForPartner')
              : t('partner.ownerHint')}
        </Txt>
      </Card>
      <Button title={t('sync.sendLink')} symbol="square.and.arrow.up" onPress={() => void sendLink()} />
    </>
  );

  const scanSection = (
    <>
      <Button
        title={t('partner.scanHers', { name: profile?.partnerName ?? '' })}
        symbol="qrcode.viewfinder"
        onPress={() => router.push('/scan')}
      />
      <Card style={{ gap: spacing.md }}>
        <Txt variant="footnote">{t('partner.pasteHint')}</Txt>
        <TextInput
          value={link}
          onChangeText={(v) => {
            setLink(v);
            setMessage(undefined);
          }}
          placeholder={t('autoSync.linkPlaceholder')}
          placeholderTextColor={colors.tertiaryLabel}
          autoCapitalize="none"
          autoCorrect={false}
          keyboardType="url"
          style={styles.input}
          onSubmitEditing={() => void accept(link)}
          returnKeyType="go"
        />
        <Button
          title={t('autoSync.paste')}
          variant="secondary"
          onPress={() => void Clipboard.getStringAsync().then(setLink)}
        />
        <Button
          title={busy === 'join' ? t('autoSync.joining') : t('autoSync.join')}
          disabled={busy !== undefined || !link.trim()}
          onPress={() => void accept(link)}
        />
      </Card>
    </>
  );

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={styles.content}
      keyboardDismissMode="on-drag">
      <View style={styles.header}>
        <Txt variant="title">{t('partner.title')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>

      {connected ? (
        <Card style={{ gap: spacing.md }}>
          <View style={styles.statusRow}>
            <StatusDot color={cloudSync.lastError ? colors.orange : colors.green} />
            <Txt variant="headline">
              {partnerName
                ? t('partner.connectedWith', { name: partnerName })
                : t('autoSync.connected')}
            </Txt>
          </View>
          <Txt color={colors.secondaryLabel}>
            {isOwner ? t('autoSync.partnerJoined') : t('autoSync.connectedTracker')}
          </Txt>
          <Txt variant="footnote" selectable>
            {statusLine}
          </Txt>
          <Button
            title={busy === 'sync' ? t('autoSync.syncing') : t('autoSync.syncNow')}
            disabled={busy !== undefined}
            onPress={() => void syncNow()}
          />
          <Button title={t('autoSync.stop')} variant="destructive" onPress={stop} />
        </Card>
      ) : (
        <Txt color={colors.secondaryLabel}>
          {isOwner ? t('partner.introOwner') : t('partner.introTracker')}
        </Txt>
      )}

      {unavailableText ? (
        <Card>
          <Txt>{unavailableText}</Txt>
        </Card>
      ) : null}

      {isOwner ? (
        connected && !showCode ? (
          <Button
            title={t('partner.showCodeAgain')}
            variant="plain"
            onPress={() => setShowCode(true)}
          />
        ) : (
          codeSection
        )
      ) : connected ? (
        <Button
          title={t('partner.scanAgain')}
          variant="plain"
          onPress={() => router.push('/scan')}
        />
      ) : (
        scanSection
      )}

      {!connected && !message && cloudSync.lastDetail ? (
        <Txt variant="footnote" selectable>
          {cloudSync.lastDetail}
        </Txt>
      ) : null}
      {message ? (
        <Txt variant="footnote" selectable>
          {message}
        </Txt>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xl + spacing.lg },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  statusRow: { flexDirection: 'row', alignItems: 'center' },
  chips: { flexDirection: 'row', gap: spacing.sm },
  qrCard: { alignItems: 'center', gap: spacing.md },
  qr: { padding: spacing.md, backgroundColor: '#ffffff', borderRadius: 12 },
  center: { textAlign: 'center' },
  input: {
    fontSize: 15,
    color: colors.label,
    paddingVertical: 10,
    paddingHorizontal: spacing.md,
    borderRadius: radius.field,
    backgroundColor: colors.background,
  },
});
