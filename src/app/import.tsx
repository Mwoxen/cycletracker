import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, StyleSheet, Switch, View } from 'react-native';

import { toISODate } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { previewMerge, selectSnapshotData, useStore, type Snapshot } from '@/store';
import { syncWithPartner } from '@/sync/cloud/run';
import { nativeTransport } from '@/sync/cloud/transport';
import { decodePayload, validCloudShare } from '@/sync/payload';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

export default function ImportSheet() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const fmt = useFormat();
  const { d, s: sharedParam } = useLocalSearchParams<{ d?: string; s?: string }>();
  const data = useStore(selectSnapshotData);
  const deviceId = useStore((s) => s.deviceId);
  const applySnapshot = useStore((s) => s.applySnapshot);
  const setPairing = useStore((s) => s.setPairing);
  const isTracker = useStore((state) => state.profile?.role === 'tracker');
  const [asBackup, setAsBackup] = useState(false);
  const [cloud, setCloud] = useState<'joined' | 'failed' | undefined>();
  const [done, setDone] = useState<{ periods: number; logs: number } | undefined>();

  const parsed = useMemo<{ snapshot?: Snapshot; error?: string }>(() => {
    if (!d) return { error: t('sync.importInvalid') };
    try {
      return { snapshot: decodePayload(d) };
    } catch {
      return { error: t('sync.importInvalid') };
    }
  }, [d, t]);

  const preview = useMemo(
    () => (parsed.snapshot ? previewMerge(data, parsed.snapshot) : undefined),
    [data, parsed.snapshot],
  );
  const snapshot = parsed.snapshot;
  const fromSelf = snapshot?.deviceId === deviceId;
  const senderName = snapshot?.senderName;
  const nothingNew =
    !!preview &&
    preview.newPeriods + preview.updatedPeriods + preview.newLogs + preview.updatedLogs === 0;

  // A code from the partner's phone may carry an iCloud share. Scanning it connects the automatic
  // sharing by itself, with nothing more to confirm.
  const cloudShare = validCloudShare(sharedParam);
  const joinStarted = useRef(false);
  const canJoin = !!cloudShare && isTracker && !!parsed.snapshot && !!nativeTransport();
  useEffect(() => {
    if (!canJoin || !cloudShare || joinStarted.current) return;
    const transport = nativeTransport();
    if (!transport) return;
    joinStarted.current = true;
    void (async () => {
      try {
        const { role } = await transport.state();
        if (role !== 'participant') await transport.joinShare(cloudShare);
        await syncWithPartner(transport);
        setCloud('joined');
      } catch {
        setCloud('failed');
      }
    })();
  }, [canJoin, cloudShare]);

  const doImport = () => {
    if (!snapshot) return;
    const result = applySnapshot(snapshot, { includeProfile: asBackup, includeProgress: asBackup });
    if (!fromSelf) {
      setPairing({
        partnerDeviceId: snapshot.deviceId,
        partnerName: senderName,
        lastSyncAt: Date.now(),
      });
    }
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    setDone(result);
  };

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Txt variant="title">{t('sync.importTitle')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {done ? t('common.done') : t('common.cancel')}
          </Txt>
        </Pressable>
      </View>

      {canJoin ? (
        <Card>
          <Txt color={cloud === 'failed' ? colors.red : colors.secondaryLabel}>
            {cloud === 'joined'
              ? t('sync.autoJoined')
              : cloud === 'failed'
                ? t('sync.autoJoinFailed')
                : t('sync.autoJoining')}
          </Txt>
        </Card>
      ) : null}

      {parsed.error || !snapshot || !preview ? (
        <Card>
          <Txt color={colors.red}>{parsed.error ?? t('sync.importInvalid')}</Txt>
        </Card>
      ) : done ? (
        <Card>
          <Txt variant="headline" color={colors.green}>
            {t('sync.importDone')}
          </Txt>
          <Txt>{t('settings.cloudRestoreDone', { periods: done.periods, logs: done.logs })}</Txt>
          <Button title={t('common.done')} onPress={() => router.back()} />
        </Card>
      ) : (
        <>
          <Card>
            <Txt variant="headline">
              {senderName
                ? t('sync.importFrom', { name: senderName })
                : t('sync.importUnknownSender')}
            </Txt>
            <Txt variant="footnote">{fmt.long(toISODate(new Date(snapshot.exportedAt)))}</Txt>
            {nothingNew ? (
              <Txt color={colors.secondaryLabel}>{t('sync.importNothing')}</Txt>
            ) : (
              <>
                <Txt>{t('sync.importSummary', { ...preview })}</Txt>
                {preview.periodRange ? (
                  <Txt variant="footnote">
                    {t('sync.importRange', {
                      from: fmt.short(preview.periodRange.from),
                      to: fmt.short(preview.periodRange.to),
                    })}
                  </Txt>
                ) : null}
              </>
            )}
          </Card>
          {snapshot.profile ? (
            <Card>
              <View style={styles.switchRow}>
                <Txt style={styles.switchLabel}>{t('sync.importAsBackup')}</Txt>
                <Switch value={asBackup} onValueChange={setAsBackup} />
              </View>
              <Txt variant="footnote">{t('sync.importAsBackupHelp')}</Txt>
            </Card>
          ) : null}
          <Button
            title={t('sync.importButton')}
            symbol="square.and.arrow.down"
            onPress={doImport}
            disabled={nothingNew && !asBackup}
          />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingTop: spacing.lg, paddingBottom: 60 },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  switchRow: { flexDirection: 'row', alignItems: 'center', minHeight: 36 },
  switchLabel: { flex: 1, flexShrink: 1, marginRight: spacing.sm },
});
