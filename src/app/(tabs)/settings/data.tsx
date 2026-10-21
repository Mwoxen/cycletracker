import * as Haptics from 'expo-haptics';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet } from 'react-native';

import { readCloudBackup } from '@/backup/cloud';
import { exportSnapshotFile, pickSnapshotFile } from '@/backup/file';
import { useToday } from '@/hooks/use-today';
import { previewMerge, selectSnapshotData, useStore } from '@/store';
import { spacing } from '@/ui/colors';
import { Card, Row, Screen } from '@/ui/primitives';
import { HelpText, IconTile } from '@/ui/settings-bits';

/** Export to a file, import a file, or restore the last iCloud backup. */
export default function DataScreen() {
  const { t } = useTranslation();
  const today = useToday();
  const deviceId = useStore((s) => s.deviceId);
  const applySnapshot = useStore((s) => s.applySnapshot);

  const exportFile = async () => {
    try {
      await exportSnapshotFile(selectSnapshotData(useStore.getState()), deviceId, today);
    } catch (e) {
      Alert.alert(t('settings.export'), e instanceof Error ? e.message : String(e));
    }
  };

  const importFile = async () => {
    try {
      const snapshot = await pickSnapshotFile();
      if (!snapshot) return;
      const preview = previewMerge(selectSnapshotData(useStore.getState()), snapshot);
      const own = snapshot.deviceId === deviceId || !!snapshot.profile;
      Alert.alert(t('settings.import'), t('sync.importSummary', { ...preview }), [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('sync.importButton'),
          onPress: () => {
            const r = applySnapshot(snapshot, { includeProfile: own, includeProgress: own });
            void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            Alert.alert(t('sync.importDone'), t('settings.cloudRestoreDone', r));
          },
        },
      ]);
    } catch {
      Alert.alert(t('settings.import'), t('settings.importFailed'));
    }
  };

  const restoreFromCloud = async () => {
    try {
      const snapshot = await readCloudBackup();
      if (!snapshot) {
        Alert.alert(t('settings.cloudRestore'), t('settings.cloudRestoreNone'));
        return;
      }
      const preview = previewMerge(selectSnapshotData(useStore.getState()), snapshot);
      Alert.alert(t('settings.cloudRestore'), t('sync.importSummary', { ...preview }), [
        { text: t('common.cancel'), style: 'cancel' },
        {
          text: t('sync.importButton'),
          onPress: () => {
            const r = applySnapshot(snapshot, { includeProfile: true, includeProgress: true });
            void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
            Alert.alert(t('sync.importDone'), t('settings.cloudRestoreDone', r));
          },
        },
      ]);
    } catch {
      Alert.alert(t('settings.cloudRestore'), t('settings.importFailed'));
    }
  };

  return (
    <Screen title={t('settings.data')}>
      <Card style={styles.rowsCard}>
        <Row
          title={t('settings.export')}
          subtitle={t('settings.exportHelp')}
          lead={<IconTile symbol="square.and.arrow.up" accent />}
          onPress={() => void exportFile()}
          chevron={false}
        />
        <Row
          title={t('settings.import')}
          lead={<IconTile symbol="square.and.arrow.down" />}
          onPress={() => void importFile()}
          chevron={false}
        />
        <Row
          title={t('settings.cloudRestore')}
          lead={<IconTile symbol="icloud.and.arrow.down" />}
          onPress={() => void restoreFromCloud()}
          chevron={false}
          last
        />
      </Card>
      <HelpText>{t('settings.dataHelp')}</HelpText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
});
