import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput, View } from 'react-native';

import { LANGUAGES, type Language, type Role } from '@/domain/types';
import { programPosition } from '@/content/program';
import { fromISODate, toISODate, todayISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { useStore } from '@/store';
import { colors, spacing } from '@/ui/colors';
import { usePhaseTheme } from '@/ui/theme';
import { Card, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { Avatar, HelpText } from '@/ui/settings-bits';

/** Role, names, language and programme start: the things one sets once. */
export default function ProfileScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const fmt = useFormat();
  const profile = useStore((s) => s.profile);
  const updateProfile = useStore((s) => s.updateProfile);
  const [name, setName] = useState(profile?.partnerName ?? '');
  const [ownName, setOwnName] = useState(profile?.ownName ?? '');
  const [pickingStart, setPickingStart] = useState(false);

  if (!profile) return null;
  const isTracker = profile.role === 'tracker';
  const position = programPosition(profile.programStartDate, todayISO());
  const locale = profile.language === 'da' ? 'da_DK' : 'en_GB';

  const setRole = (role: Role) => {
    void Haptics.selectionAsync();
    updateProfile({ role });
  };
  const setLang = (language: Language) => {
    void Haptics.selectionAsync();
    updateProfile({ language });
  };
  const roleOptions = [
    { value: 'tracker' as const, label: t('settings.roleShort.tracker') },
    { value: 'user' as const, label: t('settings.roleShort.user') },
  ];
  const languageOptions = LANGUAGES.map((l) => ({
    value: l,
    label: t(`settings.languageNames.${l}`),
  }));
  const programLine = position.notStarted
    ? t('settings.programNotStarted', { date: fmt.short(profile.programStartDate) })
    : position.completed
      ? t('settings.programDone')
      : t('settings.programDayLine', {
          day: position.programDay,
          date: fmt.short(profile.programStartDate),
        });

  return (
    <Screen title={t('settings.profile')}>
      <View style={styles.hero}>
        <Avatar name={isTracker ? profile.ownName : profile.partnerName} size={84} />
        <Txt variant="footnote">{programLine}</Txt>
      </View>

      <SectionTitle>{t('settings.role')}</SectionTitle>
      <Card style={styles.segmentCard}>
        <Segmented options={roleOptions} value={profile.role} onChange={setRole} stretch />
      </Card>
      <HelpText>{t('settings.roleHelp')}</HelpText>

      <SectionTitle>{t('settings.names')}</SectionTitle>
      <Card style={styles.rowsCard}>
        {isTracker ? (
          <Row
            title={t('settings.yourName')}
            trailing={
              <TextInput
                value={ownName}
                onChangeText={setOwnName}
                onEndEditing={() => updateProfile({ ownName: ownName.trim() || undefined })}
                placeholder={t('settings.yourNamePlaceholder')}
                placeholderTextColor={colors.tertiaryLabel}
                style={styles.input}
                autoCapitalize="words"
                returnKeyType="done"
                accessibilityLabel={t('settings.yourName')}
              />
            }
          />
        ) : null}
        <Row
          title={isTracker ? t('settings.partnerName') : t('settings.yourName')}
          last
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
              accessibilityLabel={isTracker ? t('settings.partnerName') : t('settings.yourName')}
            />
          }
        />
      </Card>
      {isTracker ? (
        <HelpText>{t('settings.nameHelp', { name: profile.partnerName })}</HelpText>
      ) : null}

      <SectionTitle>{t('settings.language')}</SectionTitle>
      <Card style={styles.segmentCard}>
        <Segmented options={languageOptions} value={profile.language} onChange={setLang} stretch />
      </Card>

      <SectionTitle>{t('settings.program')}</SectionTitle>
      <Card style={styles.rowsCard}>
        <Row
          title={t('settings.programStart')}
          subtitle={t('settings.programStartHint')}
          onPress={() => setPickingStart(!pickingStart)}
          chevron={false}
          last
          trailing={
            <Txt color={pickingStart ? theme.accent : colors.secondaryLabel}>
              {fmt.short(profile.programStartDate)}
            </Txt>
          }
        />
        {pickingStart ? (
          <DateTimePicker
            value={fromISODate(profile.programStartDate)}
            mode="date"
            display="inline"
            accentColor={theme.accentHex}
            onValueChange={(_, d) => updateProfile({ programStartDate: toISODate(d) })}
            locale={locale}
            style={styles.picker}
          />
        ) : null}
      </Card>
      <HelpText>{t('settings.programStartHelp')}</HelpText>
    </Screen>
  );
}

const styles = StyleSheet.create({
  hero: { alignItems: 'center', gap: spacing.sm + 2, paddingVertical: spacing.sm },
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  segmentCard: { padding: 12 },
  input: {
    flex: 1,
    fontSize: 17,
    color: colors.secondaryLabel,
    textAlign: 'right',
    paddingVertical: 4,
  },
  picker: { alignSelf: 'stretch', marginBottom: spacing.sm },
});
