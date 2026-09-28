import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import Constants from 'expo-constants';
import * as Haptics from 'expo-haptics';
import * as Linking from 'expo-linking';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, StyleSheet, Switch, TextInput, View } from 'react-native';

import { LANGUAGES, type Language, type Role } from '@/domain/types';
import { fromISODate, toISODate } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { hasNotificationPermission, requestNotificationPermission } from '@/notifications';
import { useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Chip, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Stepper } from '@/ui/stepper';

export default function SettingsScreen() {
  const { t } = useTranslation();
  const fmt = useFormat();
  const profile = useStore((s) => s.profile);
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
    if (value && !(await requestNotificationPermission())) {
      setNotifGranted(false);
      return;
    }
    setNotifGranted(true);
    updateReminders({ [key]: value });
  };
  const reminderTime = new Date();
  reminderTime.setHours(r.dailyCardHour, r.dailyCardMinute, 0, 0);

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
      <Card style={{ padding: 0, paddingHorizontal: 16 }}>
        <Row
          title={t('settings.cloudBackup')}
          subtitle={t('common.comingSoon')}
          symbol="icloud"
          chevron={false}
        />
        <Row
          title={t('settings.export')}
          subtitle={t('common.comingSoon')}
          symbol="square.and.arrow.up"
          chevron={false}
        />
        <Row
          title={t('settings.import')}
          subtitle={t('common.comingSoon')}
          symbol="square.and.arrow.down"
          chevron={false}
        />
        <Row
          title={t('settings.share')}
          subtitle={t('common.comingSoon')}
          symbol="qrcode"
          chevron={false}
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
