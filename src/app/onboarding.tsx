import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import { SegmentedControl } from '@expo/ui/community/segmented-control';
import * as Haptics from 'expo-haptics';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Switch,
  TextInput,
  View,
} from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import type { Language, Role } from '@/domain/types';
import { readCloudBackup } from '@/backup/cloud';
import { addDaysISO, fromISODate, toISODate, todayISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import type { Snapshot } from '@/store/snapshot';
import { LANGUAGES, deviceLanguage, setLanguage } from '@/i18n';
import { requestNotificationPermission } from '@/notifications';
import { useStore } from '@/store/store';
import { colors, radius, spacing } from '@/ui/colors';
import { Button, Card, Screen, SectionTitle, Icon, Txt } from '@/ui/primitives';
import { Stepper } from '@/ui/stepper';

export default function Onboarding() {
  const { t } = useTranslation();
  const insets = useSafeAreaInsets();
  const completeOnboarding = useStore((s) => s.completeOnboarding);
  const applySnapshot = useStore((s) => s.applySnapshot);
  const fmt = useFormat();
  const [backup, setBackup] = useState<Snapshot | undefined>();
  const [checkingBackup, setCheckingBackup] = useState(true);

  useEffect(() => {
    let active = true;
    readCloudBackup()
      .then((s) => {
        if (active && s?.profile) setBackup(s);
      })
      .catch(() => undefined)
      .finally(() => {
        if (active) setCheckingBackup(false);
      });
    return () => {
      active = false;
    };
  }, []);

  const restore = () => {
    if (!backup) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    applySnapshot(backup, { includeProfile: true, includeProgress: true });
  };
  const defaults = useStore((s) => s.settings);

  const [language, setLang] = useState<Language>(deviceLanguage());
  const [role, setRole] = useState<Role | undefined>();
  const [name, setName] = useState('');
  const [knowsLastPeriod, setKnowsLastPeriod] = useState(true);
  const [lastPeriod, setLastPeriod] = useState(() => addDaysISO(todayISO(), -10));
  const [cycleLength, setCycleLength] = useState(defaults.defaultCycleLength);
  const [periodLength, setPeriodLength] = useState(defaults.defaultPeriodLength);

  const today = todayISO();
  const canFinish = !!role && name.trim().length > 0;

  const changeLanguage = (lang: Language) => {
    setLang(lang);
    setLanguage(lang);
  };

  const finish = async () => {
    if (!canFinish || !role) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    await requestNotificationPermission();
    completeOnboarding({
      role,
      language,
      partnerName: name,
      programStartDate: today,
      lastPeriodStart: knowsLastPeriod ? lastPeriod : undefined,
      cycleLength,
      periodLength,
    });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Screen
        contentContainerStyle={{
          paddingTop: insets.top + spacing.lg,
          paddingBottom: insets.bottom + spacing.xl,
        }}>
        <View style={{ gap: spacing.sm }}>
          <Txt variant="largeTitle">{t('onboarding.welcomeTitle')}</Txt>
          <Txt color={colors.secondaryLabel}>{t('onboarding.welcomeBody')}</Txt>
        </View>

        {backup ? (
          <Card style={{ borderWidth: 2, borderColor: colors.tint }}>
            <Txt variant="headline">{t('onboarding.restoreTitle')}</Txt>
            <Txt variant="footnote">
              {t('onboarding.restoreBody', {
                when: fmt.short(new Date(backup.exportedAt).toISOString().slice(0, 10)),
                name: backup.profile?.partnerName ?? '',
                periods: backup.periods.filter((p) => !p.deleted).length,
                logs: backup.logs.filter((l) => !l.deleted).length,
              })}
            </Txt>
            <Button
              title={t('onboarding.restoreButton')}
              symbol="icloud.and.arrow.down"
              onPress={restore}
            />
          </Card>
        ) : checkingBackup ? (
          <Txt variant="footnote" style={{ marginLeft: spacing.xs }}>
            {t('onboarding.restoreChecking')}
          </Txt>
        ) : null}

        <SectionTitle>{t('onboarding.language')}</SectionTitle>
        <SegmentedControl
          values={LANGUAGES.map((l) => t(`settings.languageNames.${l}`))}
          selectedIndex={LANGUAGES.indexOf(language)}
          onChange={(e) => changeLanguage(LANGUAGES[e.nativeEvent.selectedSegmentIndex])}
          style={{ height: 36 }}
        />

        <SectionTitle>{t('onboarding.chooseRole')}</SectionTitle>
        <View style={{ gap: spacing.sm }}>
          <RoleCard
            title={t('roles.tracker')}
            description={t('roles.trackerDescription')}
            symbol="person.2.fill"
            selected={role === 'tracker'}
            onPress={() => setRole('tracker')}
          />
          <RoleCard
            title={t('roles.user')}
            description={t('roles.userDescription')}
            symbol="person.fill"
            selected={role === 'user'}
            onPress={() => setRole('user')}
          />
        </View>

        {role ? (
          <>
            <SectionTitle>
              {role === 'tracker' ? t('onboarding.partnerName') : t('onboarding.yourName')}
            </SectionTitle>
            <Card>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder={t('onboarding.namePlaceholder')}
                placeholderTextColor={colors.tertiaryLabel}
                autoCapitalize="words"
                autoCorrect={false}
                returnKeyType="done"
                style={styles.input}
              />
            </Card>

            <SectionTitle>{t('onboarding.lastPeriod')}</SectionTitle>
            <Card>
              <View style={styles.switchRow}>
                <Txt style={{ flex: 1 }}>{t('onboarding.lastPeriodUnknown')}</Txt>
                <Switch value={!knowsLastPeriod} onValueChange={(v) => setKnowsLastPeriod(!v)} />
              </View>
              {knowsLastPeriod ? (
                <DateTimePicker
                  value={fromISODate(lastPeriod)}
                  mode="date"
                  display="inline"
                  maximumDate={fromISODate(today)}
                  minimumDate={fromISODate(addDaysISO(today, -90))}
                  onValueChange={(_, date) => setLastPeriod(toISODate(date))}
                  locale={language === 'da' ? 'da_DK' : 'en_GB'}
                  style={{ alignSelf: 'stretch' }}
                />
              ) : null}
              <Txt variant="footnote">{t('onboarding.lastPeriodHelp')}</Txt>
            </Card>

            <SectionTitle>{t('onboarding.cycleLength')}</SectionTitle>
            <Card>
              <View style={styles.switchRow}>
                <Txt style={{ flex: 1 }}>{t('settings.cycleLength')}</Txt>
                <Stepper
                  value={cycleLength}
                  min={21}
                  max={45}
                  onChange={setCycleLength}
                  format={(v) => t('onboarding.daysUnit', { n: v })}
                />
              </View>
              <View style={styles.switchRow}>
                <Txt style={{ flex: 1 }}>{t('settings.periodLength')}</Txt>
                <Stepper
                  value={periodLength}
                  min={2}
                  max={10}
                  onChange={setPeriodLength}
                  format={(v) => t('onboarding.daysUnit', { n: v })}
                />
              </View>
              <Txt variant="footnote">{t('onboarding.cycleLengthHelp')}</Txt>
            </Card>

            <Card>
              <Txt variant="headline">{t('onboarding.programStart')}</Txt>
              <Txt variant="footnote">{t('onboarding.programStartHelp')}</Txt>
            </Card>

            <Txt variant="footnote" style={{ marginHorizontal: spacing.sm }}>
              {t('onboarding.disclaimer')}
            </Txt>
            <Button
              title={t('onboarding.finish')}
              onPress={() => void finish()}
              disabled={!canFinish}
            />
          </>
        ) : null}
      </Screen>
    </KeyboardAvoidingView>
  );
}

function RoleCard({
  title,
  description,
  symbol,
  selected,
  onPress,
}: {
  title: string;
  description: string;
  symbol: 'person.2.fill' | 'person.fill';
  selected: boolean;
  onPress: () => void;
}) {
  return (
    <Pressable
      onPress={() => {
        void Haptics.selectionAsync();
        onPress();
      }}
      accessibilityRole="radio"
      accessibilityState={{ selected }}
      style={({ pressed }) => [
        styles.roleCard,
        selected && styles.roleCardSelected,
        pressed && { opacity: 0.8 },
      ]}>
      <Icon name={symbol} size={28} color={selected ? colors.tint : colors.secondaryLabel} />
      <View style={{ flex: 1, gap: 2 }}>
        <Txt variant="headline">{title}</Txt>
        <Txt variant="footnote">{description}</Txt>
      </View>
      {selected ? <Icon name="checkmark.circle.fill" size={22} color={colors.tint} /> : null}
    </Pressable>
  );
}

const styles = StyleSheet.create({
  input: { fontSize: 17, color: colors.label, paddingVertical: 4 },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, minHeight: 36 },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.md,
    borderWidth: 2,
    borderColor: 'transparent',
  },
  roleCardSelected: { borderColor: colors.tint },
});
