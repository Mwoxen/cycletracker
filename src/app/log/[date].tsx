import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { Alert, Pressable, ScrollView, StyleSheet, TextInput, View } from 'react-native';

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
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { Pressed } from '@/ui/pressed';
import { Chip, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

const FLOWS: Flow[] = ['spotting', 'light', 'medium', 'heavy'];

/** Section label 13/700 uppercase in text2 (docs/design/README.md §5). */
function Label({ children }: { children: string }) {
  return (
    <Txt variant="footnote" style={styles.label}>
      {children.toUpperCase()}
    </Txt>
  );
}

/** Full-width toggle button with radius 14: outlined, or filled in the accent when on. */
function ToggleButton({ title, on, onPress }: { title: string; on: boolean; onPress: () => void }) {
  const theme = usePhaseTheme();
  return (
    <Pressed
      onPress={onPress}
      scale={0.97}
      accessibilityRole="button"
      accessibilityState={{ selected: on }}
      style={[
        styles.toggle,
        on
          ? { backgroundColor: theme.accent, borderColor: theme.accent }
          : { backgroundColor: 'transparent', borderColor: colors.separator },
      ]}>
      <Txt variant="callout" color={on ? colors.onAccent : colors.label} style={styles.toggleText}>
        {title}
      </Txt>
    </Pressed>
  );
}

export default function LogSheet() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const theme = usePhaseTheme();
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
  const hasData = !!log || !!startingHere || endsHere;

  const removeStart = () => {
    if (!startingHere) return;
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
  };

  const togglePeriodStart = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    if (startingHere) removeStart();
    else startPeriod(date);
  };

  const togglePeriodEnd = () => {
    if (!ongoing) return;
    void Haptics.selectionAsync();
    endPeriod(ongoing.id, endsHere ? undefined : date);
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
        <View style={styles.headerText}>
          <Txt variant="cardTitle">{t('log.forDate', { date: fmt.long(date) })}</Txt>
          {hasData ? (
            <Txt variant="footnote" color={phaseColor.follicular} style={styles.saved}>
              ✓ {t('log.saved')}
            </Txt>
          ) : null}
        </View>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent} style={styles.done}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Label>{t('log.period')}</Label>
        {ongoing ? (
          <Txt variant="callout" color={colors.secondaryLabel}>
            {t('log.periodOngoing', { date: fmt.short(ongoing.startDate) })}
          </Txt>
        ) : null}
        <ToggleButton
          title={t('log.periodStartsToday')}
          on={!!startingHere}
          onPress={togglePeriodStart}
        />
        {ongoing ? (
          <ToggleButton title={t('log.periodEndsToday')} on={endsHere} onPress={togglePeriodEnd} />
        ) : null}
        {startingHere ? (
          <Pressable onPress={removeStart} accessibilityRole="button" style={styles.textButton}>
            <Txt variant="callout" color={phaseColor.menstrual} style={styles.textButtonLabel}>
              {t('log.removePeriodStart')}
            </Txt>
          </Pressable>
        ) : null}
      </View>

      {startingHere || ongoing ? (
        <View style={styles.section}>
          <Label>{t('log.flow')}</Label>
          <View style={styles.grid}>
            {FLOWS.map((f) => (
              <Chip
                key={f}
                label={t(`log.flows.${f}`)}
                selected={log?.flow === f}
                onPress={() => setFlow(f)}
                color={phaseColor.menstrual}
                style={styles.gridChip}
              />
            ))}
          </View>
        </View>
      ) : null}

      <View style={styles.section}>
        <Label>{t('log.symptoms')}</Label>
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
      </View>

      <View style={styles.section}>
        <Label>{t('log.mood')}</Label>
        <View style={styles.chips}>
          {MOODS.map((m) => (
            <Chip
              key={m}
              label={t(`log.moods.${m}`)}
              selected={log?.mood === m}
              onPress={() => setMood(m)}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Label>{t('log.energy')}</Label>
        <View style={styles.grid}>
          {ENERGIES.map((e) => (
            <Chip
              key={e}
              label={t(`log.energies.${e}`)}
              selected={log?.energy === e}
              onPress={() => setEnergy(e)}
              style={styles.gridChip}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Label>{t('log.note')}</Label>
        <TextInput
          value={log?.note ?? ''}
          onChangeText={(note) => upsertLog(date, { note })}
          placeholder={t('log.notePlaceholder')}
          placeholderTextColor={colors.tertiaryLabel}
          multiline
          numberOfLines={3}
          style={styles.input}
        />
      </View>

      {log ? (
        <Pressable
          onPress={() => deleteLog(date)}
          accessibilityRole="button"
          style={styles.textButton}>
          <Txt variant="callout" color={phaseColor.menstrual} style={styles.textButtonLabel}>
            {t('log.clear')}
          </Txt>
        </Pressable>
      ) : null}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.card },
  content: {
    paddingHorizontal: spacing.lg - spacing.xs,
    paddingTop: spacing.lg,
    paddingBottom: 60,
    gap: spacing.lg,
  },
  header: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
  headerText: { flex: 1, flexShrink: 1, marginRight: spacing.md, gap: 2 },
  saved: { fontFamily: fontFor(600) },
  done: { fontFamily: fontFor(700) },
  section: { gap: spacing.sm + 2 },
  label: { fontFamily: fontFor(700), letterSpacing: 0.8 },
  toggle: {
    borderWidth: 1,
    borderRadius: radius.field,
    minHeight: 48,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: spacing.md,
  },
  toggleText: { fontFamily: fontFor(600), textAlign: 'center' },
  textButton: { alignSelf: 'center', paddingVertical: 8 },
  textButtonLabel: { fontFamily: fontFor(600) },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  grid: { flexDirection: 'row', gap: spacing.sm },
  gridChip: { flex: 1, alignItems: 'center', paddingHorizontal: 6 },
  input: {
    fontFamily: fontFor(400),
    fontSize: 16,
    lineHeight: 22,
    color: colors.label,
    minHeight: 84,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.separator,
    borderRadius: radius.field,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: colors.card,
  },
});
