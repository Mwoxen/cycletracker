import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, StyleSheet, Switch, TextInput, View } from 'react-native';

import {
  ENERGIES,
  MOODS,
  SYMPTOMS,
  type Energy,
  type Flow,
  type Mood,
  type Symptom,
} from '@/domain/types';
import { compareISO, isValidISODate, todayISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { selectActivePeriods, selectLogForDate, useStore } from '@/store/store';
import { colors, spacing } from '@/ui/colors';
import { Button, Card, Chip, SectionTitle, Txt } from '@/ui/primitives';

const FLOWS: Flow[] = ['spotting', 'light', 'medium', 'heavy'];

export default function LogSheet() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const params = useLocalSearchParams<{ date: string }>();
  const date = isValidISODate(params.date ?? '') ? params.date : todayISO();

  const periods = useStore(selectActivePeriods);
  const log = useStore(selectLogForDate(date));
  const startPeriod = useStore((s) => s.startPeriod);
  const endPeriod = useStore((s) => s.endPeriod);
  const deletePeriod = useStore((s) => s.deletePeriod);
  const upsertLog = useStore((s) => s.upsertLog);
  const deleteLog = useStore((s) => s.deleteLog);

  const startingHere = useMemo(() => periods.find((p) => p.startDate === date), [periods, date]);
  /** The period this date falls inside (started on or before, not ended before). */
  const ongoing = useMemo(
    () =>
      periods
        .filter(
          (p) =>
            compareISO(p.startDate, date) < 0 && (!p.endDate || compareISO(p.endDate, date) >= 0),
        )
        .sort((a, b) => compareISO(b.startDate, a.startDate))[0],
    [periods, date],
  );
  const endsHere = !!ongoing && ongoing.endDate === date;

  const togglePeriodStart = (on: boolean) => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (on) {
      startPeriod(date);
    } else if (startingHere) {
      Alert.alert(
        t('log.removePeriodStart'),
        t('log.confirmRemovePeriod', { date: fmt.short(date) }),
        [
          { text: t('common.cancel'), style: 'cancel' },
          {
            text: t('common.delete'),
            style: 'destructive',
            onPress: () => deletePeriod(startingHere.id),
          },
        ],
      );
    }
  };

  const togglePeriodEnd = (on: boolean) => {
    if (!ongoing) return;
    void Haptics.selectionAsync();
    endPeriod(ongoing.id, on ? date : undefined);
  };

  const symptoms = log?.symptoms ?? [];
  const toggleSymptom = (s: Symptom) => {
    void Haptics.selectionAsync();
    const next = symptoms.includes(s) ? symptoms.filter((x) => x !== s) : [...symptoms, s];
    upsertLog(date, { symptoms: next });
  };
  const setFlow = (f: Flow) => {
    void Haptics.selectionAsync();
    upsertLog(date, { flow: log?.flow === f ? undefined : f });
  };
  const setMood = (m: Mood) => {
    void Haptics.selectionAsync();
    upsertLog(date, { mood: log?.mood === m ? undefined : m });
  };
  const setEnergy = (e: Energy) => {
    void Haptics.selectionAsync();
    upsertLog(date, { energy: log?.energy === e ? undefined : e });
  };

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={styles.content}
      keyboardDismissMode="on-drag">
      <View style={styles.header}>
        <Txt variant="title">{t('log.forDate', { date: fmt.long(date) })}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={colors.tint}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>

      <SectionTitle>{t('log.period')}</SectionTitle>
      <Card>
        <View style={styles.switchRow}>
          <Txt style={{ flex: 1 }}>{t('log.periodStartsToday')}</Txt>
          <Switch value={!!startingHere} onValueChange={togglePeriodStart} />
        </View>
        {ongoing ? (
          <>
            <Txt variant="footnote">
              {t('log.periodOngoing', { date: fmt.short(ongoing.startDate) })}
            </Txt>
            <View style={styles.switchRow}>
              <Txt style={{ flex: 1 }}>{t('log.periodEndsToday')}</Txt>
              <Switch value={endsHere} onValueChange={togglePeriodEnd} />
            </View>
          </>
        ) : null}
        {startingHere || ongoing ? (
          <>
            <Txt variant="footnote" style={{ marginTop: spacing.xs }}>
              {t('log.flow')}
            </Txt>
            <View style={styles.chips}>
              {FLOWS.map((f) => (
                <Chip
                  key={f}
                  label={t(`log.flows.${f}`)}
                  selected={log?.flow === f}
                  onPress={() => setFlow(f)}
                  color={colors.red}
                />
              ))}
            </View>
          </>
        ) : null}
      </Card>

      <SectionTitle>{t('log.symptoms')}</SectionTitle>
      <Card>
        <View style={styles.chips}>
          {SYMPTOMS.map((s) => (
            <Chip
              key={s}
              label={t(`log.symptomNames.${s}`)}
              selected={symptoms.includes(s)}
              onPress={() => toggleSymptom(s)}
            />
          ))}
        </View>
      </Card>

      <SectionTitle>{t('log.mood')}</SectionTitle>
      <Card>
        <View style={styles.chips}>
          {MOODS.map((m) => (
            <Chip
              key={m}
              label={t(`log.moods.${m}`)}
              selected={log?.mood === m}
              onPress={() => setMood(m)}
              color={colors.purple}
            />
          ))}
        </View>
      </Card>

      <SectionTitle>{t('log.energy')}</SectionTitle>
      <Card>
        <View style={styles.chips}>
          {ENERGIES.map((e) => (
            <Chip
              key={e}
              label={t(`log.energies.${e}`)}
              selected={log?.energy === e}
              onPress={() => setEnergy(e)}
              color={colors.green}
            />
          ))}
        </View>
      </Card>

      <SectionTitle>{t('log.note')}</SectionTitle>
      <Card>
        <TextInput
          value={log?.note ?? ''}
          onChangeText={(note) => upsertLog(date, { note })}
          placeholder={t('log.notePlaceholder')}
          placeholderTextColor={colors.tertiaryLabel}
          multiline
          style={styles.input}
        />
      </Card>

      {log ? (
        <Button title={t('log.clear')} variant="plain" onPress={() => deleteLog(date)} />
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.md, gap: spacing.md, paddingTop: spacing.lg, paddingBottom: 60 },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: spacing.md,
  },
  switchRow: { flexDirection: 'row', alignItems: 'center', gap: spacing.sm, minHeight: 36 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  input: { fontSize: 17, color: colors.label, minHeight: 80, textAlignVertical: 'top' },
});
