import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import Constants from 'expo-constants';
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Switch, TextInput, View } from 'react-native';

import { LANGUAGES, type Language, type Role } from '@/domain/types';
import { fromISODate, toISODate } from '@/engine/dates';
import { readCloudBackup } from '@/backup/cloud';
import { exportSnapshotFile, pickSnapshotFile } from '@/backup/file';
import { useFormat } from '@/hooks/use-format';
import { relativeTime } from '@/hooks/use-relative-time';
import { useToday } from '@/hooks/use-today';
import { hasNotificationPermission, requestNotificationPermission } from '@/notifications';
import { previewMerge, selectSnapshotData, useStore } from '@/store';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Chip, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Stepper } from '@/ui/stepper';

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

  return (
    <Screen>
      <SectionTitle>{t('settings.profile')}</SectionTitle>
      <Card>
        <Txt variant="footnote">{t('settings.role')}</Txt>
        <View style={styles.chips}>
          <Chip
            label={t('roles.tracker')}
            selected={profile.role === 'tracker'}
            onPress={() => setRole('tracker')}
          />
          <Chip
            label={t('roles.user')}
            selected={profile.role === 'user'}
            onPress={() => setRole('user')}
          />
        </View>
        <Txt variant="footnote" style={{ marginTop: spacing.sm }}>
          {profile.role === 'tracker' ? t('onboarding.partnerName') : t('onboarding.yourName')}
        </Txt>
        <TextInput
          value={name}
          onChangeText={setName}
          onEndEditing={() => name.trim() && updateProfile({ partnerName: name.trim() })}
          placeholder={t('onboarding.namePlaceholder')}
          placeholderTextColor={colors.tertiaryLabel}
          style={styles.input}
          autoCapitalize="words"
          returnKeyType="done"
        />
        <Txt variant="footnote" style={{ marginTop: spacing.sm }}>
          {t('settings.language')}
        </Txt>
        <View style={styles.chips}>
          {LANGUAGES.map((l) => (
            <Chip
              key={l}
              label={t(`settings.languageNames.${l}`)}
              selected={profile.language === l}
              onPress={() => setLang(l)}
            />
          ))}
        </View>
        <Txt variant="footnote" style={{ marginTop: spacing.sm }}>
          {t('settings.programStart')}
        </Txt>
        <DateTimePicker
          value={fromISODate(profile.programStartDate)}
          mode="date"
          display="compact"
          onValueChange={(_, d) => updateProfile({ programStartDate: toISODate(d) })}
          locale={profile.language === 'da' ? 'da_DK' : 'en_GB'}
          style={{ alignSelf: 'flex-start' }}
        />
      </Card>

      <SectionTitle>{t('settings.cycle')}</SectionTitle>
      <Card>
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.cycleLength')}</Txt>
          <Stepper
            value={settings.defaultCycleLength}
            min={21}
            max={45}
            onChange={(v) => updateSettings({ defaultCycleLength: v })}
            format={(v) => t('settings.daysValue', { n: v })}
          />
        </View>
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.periodLength')}</Txt>
          <Stepper
            value={settings.defaultPeriodLength}
            min={2}
            max={10}
            onChange={(v) => updateSettings({ defaultPeriodLength: v })}
            format={(v) => t('settings.daysValue', { n: v })}
          />
        </View>
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.lutealLength')}</Txt>
          <Stepper
            value={settings.lutealLength}
            min={10}
            max={16}
            onChange={(v) => updateSettings({ lutealLength: v })}
            format={(v) => t('settings.daysValue', { n: v })}
          />
        </View>
        <Txt variant="footnote">{t('settings.cycleHelp')}</Txt>
      </Card>

      <SectionTitle>{t('settings.reminders')}</SectionTitle>
      <Card>
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.dailyCard')}</Txt>
          <Switch value={r.dailyCard} onValueChange={(v) => void toggleReminder('dailyCard', v)} />
        </View>
        {r.dailyCard ? (
          <View style={styles.row}>
            <Txt style={{ flex: 1 }}>{t('settings.dailyCardTime')}</Txt>
            <DateTimePicker
              value={reminderTime}
              mode="time"
              display="compact"
              onValueChange={(_, d) =>
                updateReminders({ dailyCardHour: d.getHours(), dailyCardMinute: d.getMinutes() })
              }
              locale={profile.language === 'da' ? 'da_DK' : 'en_GB'}
            />
          </View>
        ) : null}
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.periodSoon')}</Txt>
          <Switch
            value={r.periodSoon}
            onValueChange={(v) => void toggleReminder('periodSoon', v)}
          />
        </View>
        <View style={styles.row}>
          <Txt style={{ flex: 1 }}>{t('settings.pmsWindow')}</Txt>
          <Switch value={r.pmsWindow} onValueChange={(v) => void toggleReminder('pmsWindow', v)} />
        </View>
        {notifGranted === false ? (
          <Button
            title={t('settings.notificationsDenied')}
            variant="plain"
            onPress={() => void Linking.openSettings()}
          />
        ) : null}
      </Card>

      <SectionTitle>{t('settings.backup')}</SectionTitle>
      <Card>
        <View style={styles.row}>
          <View style={{ flex: 1 }}>
            <Txt>{t('settings.cloudBackup')}</Txt>
            <Txt variant="footnote">
              {!backupStatus.available
                ? t('settings.cloudBackupUnavailable')
                : backupStatus.lastError
                  ? t('settings.cloudBackupError', { error: backupStatus.lastError })
                  : backupStatus.lastBackupAt
                    ? t('settings.cloudBackupLast', {
                        when: relativeTime(backupStatus.lastBackupAt),
                      })
                    : t('settings.cloudBackupNever')}
            </Txt>
          </View>
          <Switch
            value={settings.cloudBackup}
            disabled={!backupStatus.available}
            onValueChange={(v) => updateSettings({ cloudBackup: v })}
          />
        </View>
        <Txt variant="footnote">{t('settings.cloudBackupHelp')}</Txt>
      </Card>
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
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

      <SectionTitle>{t('settings.about')}</SectionTitle>
      <Card>
        <Txt variant="headline">{t('settings.privacy')}</Txt>
        <Txt variant="footnote">{t('settings.privacyBody')}</Txt>
        <Txt variant="headline" style={{ marginTop: spacing.sm }}>
          {t('settings.disclaimer')}
        </Txt>
        <Txt variant="footnote">{t('settings.disclaimerBody')}</Txt>
        <Txt variant="footnote" style={{ marginTop: spacing.sm }}>
          {t('settings.version')} {Constants.expoConfig?.version ?? '0.0.0'} ·{' '}
          {t('settings.programStart')}: {fmt.short(profile.programStartDate)}
        </Txt>
      </Card>

      <SectionTitle>{t('settings.danger')}</SectionTitle>
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
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
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  row: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, minHeight: 36 },
  input: { fontSize: 17, color: colors.label, paddingVertical: 4 },
});
