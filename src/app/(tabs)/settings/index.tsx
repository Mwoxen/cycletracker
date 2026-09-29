import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import Constants from 'expo-constants';
import * as Updates from 'expo-updates';
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Switch, TextInput } from 'react-native';

import { LANGUAGES, type Language, type Role } from '@/domain/types';
import { fromISODate, toISODate } from '@/engine/dates';
import { readCloudBackup } from '@/backup/cloud';
import { exportSnapshotFile, pickSnapshotFile } from '@/backup/file';
import { useFormat } from '@/hooks/use-format';
import { relativeTime } from '@/hooks/use-relative-time';
import { useToday } from '@/hooks/use-today';
import { hasNotificationPermission, requestNotificationPermission } from '@/notifications';
import { previewMerge, selectSnapshotData, useStore } from '@/store';
import { TabSwipe } from '@/ui/tab-swipe';
import { colors, palette, spacing } from '@/ui/colors';
import { Button, Card, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { Stepper } from '@/ui/stepper';

/** "1.0.0 (7)" from the native build. */
function appVersionLabel(): string {
  const version = Constants.expoConfig?.version ?? '0.0.0';
  const build = Constants.expoConfig?.ios?.buildNumber ?? Constants.nativeBuildVersion;
  return build ? `${version} (${build})` : version;
}

/** Short commit of the running OTA update, so it is visible which JavaScript is live. */
function updateLabel(embedded: string): string {
  if (Updates.isEmbeddedLaunch || !Updates.updateId) return embedded;
  const manifest = Updates.manifest as {
    extra?: { expoClient?: { extra?: { commit?: unknown } } };
  };
  const commit = manifest?.extra?.expoClient?.extra?.commit;
  const stamp = Updates.createdAt ? ` · ${Updates.createdAt.toLocaleDateString()}` : '';
  const id = typeof commit === 'string' ? commit.slice(0, 7) : Updates.updateId.slice(0, 8);
  return `${id}${stamp}`;
}

export default function SettingsScreen() {
  const { t } = useTranslation();
  const fmt = useFormat();
  const router = useRouter();
  const today = useToday();
  const profile = useStore((s) => s.profile);
  const pairing = useStore((s) => s.pairing);
  const backupStatus = useStore((s) => s.backupStatus);
  const deviceId = useStore((s) => s.deviceId);
  const applySnapshot = useStore((s) => s.applySnapshot);
  const settings = useStore((s) => s.settings);
  const updateProfile = useStore((s) => s.updateProfile);
  const updateSettings = useStore((s) => s.updateSettings);
  const updateReminders = useStore((s) => s.updateReminders);
  const resetAll = useStore((s) => s.resetAll);
  const [notifGranted, setNotifGranted] = useState<boolean | undefined>();
  const [name, setName] = useState(profile?.partnerName ?? '');
  const [openPicker, setOpenPicker] = useState<'start' | 'time' | null>(null);

  useEffect(() => {
    void hasNotificationPermission().then(setNotifGranted);
  }, []);

  if (!profile) return null;
  const r = settings.reminders;

  const setRole = (role: Role) => {
    void Haptics.selectionAsync();
    updateProfile({ role });
  };
  const setLang = (language: Language) => {
    void Haptics.selectionAsync();
    updateProfile({ language });
  };
  const toggleReminder = async (key: 'dailyCard' | 'periodSoon' | 'pmsWindow', value: boolean) => {
    if (value) {
      const granted = await requestNotificationPermission();
      setNotifGranted(granted);
      if (!granted) return;
    }
    updateReminders({ [key]: value });
  };
  const reminderTime = new Date();
  reminderTime.setHours(r.dailyCardHour, r.dailyCardMinute, 0, 0);
  const locale = profile.language === 'da' ? 'da_DK' : 'en_GB';

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

  const confirmReset = () => {
    Alert.alert(t('settings.resetConfirmTitle'), t('settings.resetConfirmBody'), [
      { text: t('common.cancel'), style: 'cancel' },
      {
        text: t('settings.resetAll'),
        style: 'destructive',
        onPress: () => {
          void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Warning);
          resetAll();
        },
      },
    ]);
  };

  const roleOptions = [
    { value: 'tracker' as const, label: t('settings.roleShort.tracker') },
    { value: 'user' as const, label: t('settings.roleShort.user') },
  ];
  const languageOptions = LANGUAGES.map((l) => ({
    value: l,
    label: t(`settings.languageNames.${l}`),
  }));

  return (
    <TabSwipe tab="settings">
      <Screen title={t('settings.title')}>
        <SectionTitle>{t('settings.profile')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.role')}
            trailing={<Segmented options={roleOptions} value={profile.role} onChange={setRole} />}
          />
          <Row
            title={profile.role === 'tracker' ? t('settings.partnerName') : t('settings.yourName')}
            trailing={
              <TextInput
                value={name}
                onChangeText={setName}
                onEndEditing={() => name.trim() && updateProfile({ partnerName: name.trim() })}
                placeholder={t('onboarding.namePlaceholder')}
                placeholderTextColor={colors.tertiaryLabel}
                style={styles.input}
                autoCapitalize="words"
                returnKeyType="done"
                accessibilityLabel={
                  profile.role === 'tracker' ? t('settings.partnerName') : t('settings.yourName')
                }
              />
            }
          />
          <Row
            title={t('settings.language')}
            trailing={
              <Segmented options={languageOptions} value={profile.language} onChange={setLang} />
            }
          />
          <Row
            title={t('settings.programStart')}
            onPress={() => setOpenPicker(openPicker === 'start' ? null : 'start')}
            chevron={false}
            last
            trailing={
              <Txt color={openPicker === 'start' ? colors.tint : colors.secondaryLabel}>
                {fmt.long(profile.programStartDate)}
              </Txt>
            }
          />
          {openPicker === 'start' ? (
            <DateTimePicker
              value={fromISODate(profile.programStartDate)}
              mode="date"
              display="inline"
              accentColor={palette.light.tint}
              onValueChange={(_, d) => updateProfile({ programStartDate: toISODate(d) })}
              locale={locale}
              style={styles.picker}
            />
          ) : null}
        </Card>

        <SectionTitle>{t('settings.cycle')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.cycleLength')}
            trailing={
              <Stepper
                value={settings.defaultCycleLength}
                min={21}
                max={45}
                onChange={(v) => updateSettings({ defaultCycleLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
          <Row
            title={t('settings.periodLength')}
            trailing={
              <Stepper
                value={settings.defaultPeriodLength}
                min={2}
                max={10}
                onChange={(v) => updateSettings({ defaultPeriodLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
          <Row
            title={t('settings.lutealLength')}
            last
            trailing={
              <Stepper
                value={settings.lutealLength}
                min={10}
                max={16}
                onChange={(v) => updateSettings({ lutealLength: v })}
                format={(v) => t('settings.daysValue', { n: v })}
              />
            }
          />
        </Card>
        <Txt variant="footnote" style={styles.help}>
          {t('settings.cycleHelp')}
        </Txt>

        <SectionTitle>{t('settings.reminders')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.dailyCard')}
            trailing={
              <Switch
                value={r.dailyCard}
                onValueChange={(v) => void toggleReminder('dailyCard', v)}
              />
            }
          />
          {r.dailyCard ? (
            <>
              <Row
                title={t('settings.dailyCardTime')}
                onPress={() => setOpenPicker(openPicker === 'time' ? null : 'time')}
                chevron={false}
                trailing={
                  <Txt color={openPicker === 'time' ? colors.tint : colors.secondaryLabel}>
                    {fmt.time(reminderTime)}
                  </Txt>
                }
              />
              {openPicker === 'time' ? (
                <DateTimePicker
                  value={reminderTime}
                  mode="time"
                  display="spinner"
                  onValueChange={(_, d) =>
                    updateReminders({
                      dailyCardHour: d.getHours(),
                      dailyCardMinute: d.getMinutes(),
                    })
                  }
                  locale={locale}
                  style={styles.picker}
                />
              ) : null}
            </>
          ) : null}
          <Row
            title={t('settings.periodSoon')}
            trailing={
              <Switch
                value={r.periodSoon}
                onValueChange={(v) => void toggleReminder('periodSoon', v)}
              />
            }
          />
          <Row
            title={t('settings.pmsWindow')}
            last={notifGranted !== false}
            trailing={
              <Switch
                value={r.pmsWindow}
                onValueChange={(v) => void toggleReminder('pmsWindow', v)}
              />
            }
          />
          {notifGranted === false ? (
            <Button
              title={t('settings.notificationsDenied')}
              variant="plain"
              onPress={() => void Linking.openSettings()}
            />
          ) : null}
        </Card>

        <SectionTitle>{t('settings.backup')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.cloudBackup')}
            subtitle={
              !backupStatus.available
                ? t('settings.cloudBackupUnavailable')
                : backupStatus.lastError
                  ? t('settings.cloudBackupError', { error: backupStatus.lastError })
                  : backupStatus.lastBackupAt
                    ? t('settings.cloudBackupLast', {
                        when: relativeTime(backupStatus.lastBackupAt),
                      })
                    : t('settings.cloudBackupNever')
            }
            trailing={
              <Switch
                value={settings.cloudBackup}
                disabled={!backupStatus.available}
                onValueChange={(v) => updateSettings({ cloudBackup: v })}
              />
            }
          />
          <Row
            title={t('settings.cloudRestore')}
            symbol="icloud.and.arrow.down"
            onPress={() => void restoreFromCloud()}
            chevron={false}
          />
          <Row
            title={t('settings.export')}
            subtitle={t('settings.exportHelp')}
            symbol="square.and.arrow.up"
            onPress={() => void exportFile()}
            chevron={false}
          />
          <Row
            title={t('settings.import')}
            symbol="square.and.arrow.down"
            onPress={() => void importFile()}
            chevron={false}
          />
          <Row
            title={t('settings.share')}
            subtitle={
              pairing.lastSharedAt
                ? t('home.lastShared', { when: relativeTime(pairing.lastSharedAt) })
                : t('home.neverShared')
            }
            symbol="qrcode"
            onPress={() => router.push('/share')}
          />
          <Row
            title={t('settings.scan')}
            subtitle={
              pairing.partnerDeviceId
                ? t('sync.pairedWith', { name: pairing.partnerName ?? '?' })
                : t('sync.notPaired')
            }
            symbol="qrcode.viewfinder"
            onPress={() => router.push('/scan')}
            last
          />
        </Card>
        <Txt variant="footnote" style={styles.help}>
          {t('settings.cloudBackupHelp')}
        </Txt>

        <SectionTitle>{t('settings.about')}</SectionTitle>
        <Card>
          <Txt variant="headline">{t('settings.privacy')}</Txt>
          <Txt variant="footnote">{t('settings.privacyBody')}</Txt>
          <Txt variant="headline" style={{ marginTop: spacing.sm }}>
            {t('settings.disclaimer')}
          </Txt>
          <Txt variant="footnote">{t('settings.disclaimerBody')}</Txt>
        </Card>
        <Card style={styles.rowsCard}>
          <Row title={t('settings.version')} value={appVersionLabel()} />
          <Row
            title={t('settings.update')}
            value={updateLabel(t('settings.updateEmbedded'))}
            last
          />
        </Card>

        <SectionTitle>{t('settings.danger')}</SectionTitle>
        <Card style={styles.rowsCard}>
          <Row
            title={t('settings.resetAll')}
            symbol="trash"
            symbolColor={colors.red}
            destructive
            onPress={confirmReset}
            chevron={false}
            last
          />
        </Card>
      </Screen>
    </TabSwipe>
  );
}

const styles = StyleSheet.create({
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  input: {
    flex: 1,
    fontSize: 17,
    color: colors.secondaryLabel,
    textAlign: 'right',
    paddingVertical: 4,
  },
  picker: { alignSelf: 'stretch', marginBottom: spacing.sm },
  help: { marginHorizontal: spacing.md, marginTop: -spacing.sm },
});
