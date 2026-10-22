import { DateTimePicker } from '@expo/ui/community/datetime-picker';
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
import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { Button, Card, Chip, Icon, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { Stepper } from '@/ui/stepper';
import { usePhaseTheme } from '@/ui/theme';

import type { SFSymbol } from 'sf-symbols-typescript';

const STEPS = 3;

/**
 * Setup in three steps: who you are (with language and a found backup), the name, and the
 * cycle. Everything stays editable afterwards.
 */
export default function Onboarding() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
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

  const restore = async () => {
    if (!backup) return;
    void Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
    // Same as finishing the setup: without this, a restored install never gets a notification.
    await requestNotificationPermission();
    applySnapshot(backup, { includeProfile: true, includeProgress: true });
  };
  const defaults = useStore((s) => s.settings);

  const [step, setStep] = useState(0);
  const [language, setLang] = useState<Language>(deviceLanguage());
  const [role, setRole] = useState<Role | undefined>();
  const [name, setName] = useState('');
  const [knowsLastPeriod, setKnowsLastPeriod] = useState(true);
  const [lastPeriod, setLastPeriod] = useState(() => addDaysISO(todayISO(), -10));
  const [cycleLength, setCycleLength] = useState(defaults.defaultCycleLength);
  const [periodLength, setPeriodLength] = useState(defaults.defaultPeriodLength);

  const today = todayISO();
  const canContinue = step === 0 ? !!role : step === 1 ? name.trim().length > 0 : true;

  const changeLanguage = (lang: Language) => {
    setLang(lang);
    setLanguage(lang);
  };
  const next = () => {
    if (!canContinue) return;
    void Haptics.selectionAsync();
    setStep((s) => Math.min(STEPS - 1, s + 1));
  };
  const back = () => setStep((s) => Math.max(0, s - 1));

  const finish = async () => {
    if (!role || name.trim().length === 0) return;
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

  const dots = (
    <View
      style={styles.dots}
      accessibilityLabel={t('onboarding.stepOf', { n: step + 1, total: STEPS })}>
      {Array.from({ length: STEPS }, (_, i) => (
        <View
          key={i}
          style={[styles.dot, { backgroundColor: i <= step ? theme.accent : colors.fill }]}
        />
      ))}
    </View>
  );

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <Screen
        contentContainerStyle={{
          paddingHorizontal: spacing.lg,
          paddingTop: spacing.md,
          paddingBottom: insets.bottom + spacing.lg,
          gap: spacing.lg,
          flexGrow: 1,
        }}>
        <View style={styles.top}>
          {step === 0 ? (
            dots
          ) : (
            <Pressable onPress={back} accessibilityRole="button" hitSlop={8} style={styles.back}>
              <Icon name="chevron.left" size={14} color={theme.accent} weight="semibold" />
              <Txt variant="callout" color={theme.accent} style={styles.backText}>
                {t('onboarding.back')}
              </Txt>
            </Pressable>
          )}
          {step === 0 ? (
            <Segmented
              options={LANGUAGES.map((l) => ({
                value: l,
                label: t(`settings.languageNames.${l}`),
              }))}
              value={language}
              onChange={changeLanguage}
            />
          ) : (
            dots
          )}
        </View>

        {step === 0 ? (
          <>
            {backup ? (
              <View style={[styles.soft, { backgroundColor: theme.soft }]}>
                <Icon name="icloud.and.arrow.down" size={22} color={theme.accent} />
                <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
                  <Txt variant="headline">{t('onboarding.restoreTitle')}</Txt>
                  <Txt variant="footnote">
                    {t('onboarding.restoreBody', {
                      when: fmt.short(toISODate(new Date(backup.exportedAt))),
                      name: backup.profile?.partnerName ?? '',
                      periods: backup.periods.filter((p) => !p.deleted).length,
                      logs: backup.logs.filter((l) => !l.deleted).length,
                    })}
                  </Txt>
                </View>
                <Chip
                  label={t('onboarding.restoreShort')}
                  selected
                  onPress={() => void restore()}
                />
              </View>
            ) : checkingBackup ? (
              <Txt variant="footnote" style={{ marginLeft: spacing.xs }}>
                {t('onboarding.restoreChecking')}
              </Txt>
            ) : null}

            <View style={styles.heroBlock}>
              <Txt variant="hero" accessibilityRole="header">
                {t('onboarding.chooseRole')}
              </Txt>
              <Txt color={colors.secondaryLabel}>{t('onboarding.welcomeBody')}</Txt>
            </View>

            <View style={{ gap: 12 }}>
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
            <View style={{ flex: 1 }} />
            <Txt variant="caption" style={styles.center}>
              {t('onboarding.disclaimer')}
            </Txt>
            <Button
              title={t('onboarding.continue')}
              variant="filled"
              onPress={next}
              disabled={!canContinue}
            />
          </>
        ) : step === 1 ? (
          <>
            <View style={styles.heroBlock}>
              <Txt variant="hero" accessibilityRole="header">
                {role === 'tracker' ? t('onboarding.partnerName') : t('onboarding.yourName')}
              </Txt>
              <Txt color={colors.secondaryLabel}>
                {role === 'tracker' ? t('onboarding.nameHelpTracker') : t('onboarding.nameHelpOwn')}
              </Txt>
            </View>
            <Card>
              <TextInput
                value={name}
                onChangeText={setName}
                placeholder={t('onboarding.namePlaceholder')}
                placeholderTextColor={colors.tertiaryLabel}
                autoCapitalize="words"
                autoCorrect={false}
                autoFocus
                returnKeyType="done"
                onSubmitEditing={next}
                style={styles.input}
              />
            </Card>
            <View style={{ flex: 1 }} />
            <Button
              title={t('onboarding.continue')}
              variant="filled"
              onPress={next}
              disabled={!canContinue}
            />
          </>
        ) : (
          <>
            <View style={styles.heroBlock}>
              <Txt variant="hero" accessibilityRole="header">
                {role === 'tracker'
                  ? t('onboarding.cycleTitle', { name: name.trim() })
                  : t('onboarding.cycleTitleOwn')}
              </Txt>
              <Txt color={colors.secondaryLabel}>
                {role === 'tracker' ? t('onboarding.cycleIntro') : t('onboarding.cycleIntroOwn')}
              </Txt>
            </View>

            <View style={styles.group}>
              <SectionTitle style={styles.label}>{t('onboarding.lastPeriodShort')}</SectionTitle>
              <Card style={{ gap: 12 }}>
                {knowsLastPeriod ? (
                  <>
                    <View style={styles.row}>
                      <Txt>{t('onboarding.date')}</Txt>
                      <Chip label={fmt.short(lastPeriod)} selected />
                    </View>
                    <DateTimePicker
                      value={fromISODate(lastPeriod)}
                      mode="date"
                      display="inline"
                      maximumDate={fromISODate(today)}
                      minimumDate={fromISODate(addDaysISO(today, -90))}
                      onValueChange={(_, date) => setLastPeriod(toISODate(date))}
                      locale={language === 'da' ? 'da_DK' : 'en_GB'}
                      accentColor={theme.accentHex}
                      style={{ alignSelf: 'stretch' }}
                    />
                  </>
                ) : null}
                <View style={[styles.row, knowsLastPeriod && styles.rowTop]}>
                  <Txt variant="footnote" style={{ flex: 1, flexShrink: 1 }}>
                    {t('onboarding.lastPeriodUnknown')}
                  </Txt>
                  <Switch value={!knowsLastPeriod} onValueChange={(v) => setKnowsLastPeriod(!v)} />
                </View>
              </Card>
            </View>

            <View style={styles.group}>
              <SectionTitle style={styles.label}>{t('onboarding.typicalLength')}</SectionTitle>
              <Card style={styles.list}>
                <View style={[styles.listRow, styles.listBorder]}>
                  <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
                    <Txt>{t('settings.cycleLength')}</Txt>
                    <Txt variant="footnote">{t('onboarding.cycleLengthHint')}</Txt>
                  </View>
                  <Stepper
                    value={cycleLength}
                    min={21}
                    max={45}
                    onChange={setCycleLength}
                    format={(v) => t('onboarding.daysUnit', { n: v })}
                  />
                </View>
                <View style={styles.listRow}>
                  <Txt style={{ flex: 1, flexShrink: 1 }}>{t('onboarding.periodDays')}</Txt>
                  <Stepper
                    value={periodLength}
                    min={2}
                    max={10}
                    onChange={setPeriodLength}
                    format={(v) => t('onboarding.daysUnit', { n: v })}
                  />
                </View>
              </Card>
              <Txt variant="footnote" style={{ marginHorizontal: spacing.xs }}>
                {t('onboarding.lengthHelp')}
              </Txt>
            </View>

            <View style={[styles.soft, { backgroundColor: theme.soft }]}>
              <Icon name="calendar" size={22} color={theme.accent} />
              <View style={{ flex: 1, flexShrink: 1, gap: 2 }}>
                <Txt variant="headline">{t('onboarding.programStartShort')}</Txt>
                <Txt variant="footnote">{t('onboarding.programStartBody')}</Txt>
              </View>
            </View>

            <View style={{ flex: 1 }} />
            <Button title={t('onboarding.finish')} variant="filled" onPress={() => void finish()} />
          </>
        )}
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
  symbol: SFSymbol;
  selected: boolean;
  onPress: () => void;
}) {
  const theme = usePhaseTheme();
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
        selected && { borderColor: theme.accent, borderWidth: 1.5 },
        pressed && { opacity: 0.8 },
      ]}>
      <View style={[styles.roleIcon, { backgroundColor: selected ? theme.soft : colors.fill }]}>
        <Icon name={symbol} size={22} color={selected ? theme.accent : colors.secondaryLabel} />
      </View>
      <View style={{ flex: 1, flexShrink: 1, gap: 4, marginHorizontal: spacing.md }}>
        <Txt style={styles.roleTitle}>{title}</Txt>
        <Txt variant="footnote">{description}</Txt>
      </View>
      <Icon
        name={selected ? 'checkmark.circle.fill' : 'circle'}
        size={22}
        color={selected ? theme.accent : colors.tertiaryLabel}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  top: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    minHeight: 34,
  },
  dots: { flexDirection: 'row', gap: 6 },
  dot: { width: 22, height: 4, borderRadius: 2 },
  back: { flexDirection: 'row', alignItems: 'center', gap: 4 },
  backText: { fontFamily: fontFor(600) },
  heroBlock: { gap: 10 },
  soft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    borderRadius: radius.card,
    paddingVertical: 14,
    paddingHorizontal: spacing.card,
  },
  input: { fontFamily: fontFor(400), fontSize: 18, color: colors.label, paddingVertical: 4 },
  group: { gap: spacing.label },
  label: { marginTop: 0 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', gap: 12 },
  rowTop: { paddingTop: 10, borderTopWidth: 1, borderTopColor: colors.separator },
  list: { padding: 0, paddingHorizontal: spacing.md },
  listRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 12,
    minHeight: 52,
  },
  listBorder: { borderBottomWidth: 1, borderBottomColor: colors.separator },
  roleCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.card,
    borderRadius: radius.card,
    padding: spacing.card,
    borderWidth: 1,
    borderColor: colors.separator,
  },
  roleIcon: {
    width: 44,
    height: 44,
    borderRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
  },
  roleTitle: { fontFamily: fontFor(500), fontSize: 18, lineHeight: 23 },
  center: { textAlign: 'center', marginBottom: -spacing.sm },
});
