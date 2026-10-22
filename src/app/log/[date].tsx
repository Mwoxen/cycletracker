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
import { dayStatus } from '@/engine/cycle';
import { compareISO, isValidISODate, todayISO } from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { selectActivePeriods, selectLogForDate, useStore } from '@/store/store';
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { Chip, Icon, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { usePhaseTheme } from '@/ui/theme';

const FLOWS: Flow[] = ['spotting', 'light', 'medium', 'heavy'];
/** Symptoms the body feels; the rest are states of mind. */
const BODY: Symptom[] = SYMPTOMS.filter(
  (s) => !['moodSwings', 'anxiety', 'irritability', 'sadness'].includes(s),
);
const MIND: Symptom[] = SYMPTOMS.filter((s) => !BODY.includes(s));

type PeriodChoice = 'none' | 'start' | 'end';

/** Section label 13/700 uppercase in text2 (docs/design/README.md §5), with an optional count. */
function Label({ children, trailing }: { children: string; trailing?: string }) {
  return (
    <View style={styles.labelRow}>
      <Txt variant="footnote" style={styles.label}>
        {children.toUpperCase()}
      </Txt>
      {trailing ? <Txt variant="footnote">{trailing}</Txt> : null}
    </View>
  );
}

/**
 * The log sheet: one question at the top, the period as a segment, energy as a segment, the mood
 * as five equal chips, symptoms split into body and mind, a note, and the saved state at the end.
 */
export default function LogSheet() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const theme = usePhaseTheme();
  const params = useLocalSearchParams<{ date: string }>();
  const date = isValidISODate(params.date ?? '') ? params.date : todayISO();

  const periods = useStore(selectActivePeriods);
  const settings = useStore((s) => s.settings);
  const log = useStore(selectLogForDate(date));
  const partnerName = useStore((s) =>
    s.profile?.role === 'tracker' ? s.profile.partnerName : undefined,
  );
  const shared = useStore((s) => !!s.cloudSync.lastSyncAt);
  const startPeriod = useStore((s) => s.startPeriod);
  const endPeriod = useStore((s) => s.endPeriod);
  const deletePeriod = useStore((s) => s.deletePeriod);
  const upsertLog = useStore((s) => s.upsertLog);
  const deleteLog = useStore((s) => s.deleteLog);

  const startingHere = useMemo(() => periods.find((p) => p.startDate === date), [periods, date]);
  /** The period this date falls inside (started before, not ended before). */
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
  const cycleDay = useMemo(
    () => dayStatus(periods, settings, date)?.cycleDay,
    [periods, settings, date],
  );

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

  const periodChoice: PeriodChoice = startingHere ? 'start' : endsHere ? 'end' : 'none';
  const periodOptions: { value: PeriodChoice; label: string }[] = [
    { value: 'none', label: t('log.periodNone') },
    { value: 'start', label: t('log.periodStart') },
    ...(ongoing ? [{ value: 'end' as const, label: t('log.periodEnd') }] : []),
  ];
  const choosePeriod = (next: PeriodChoice) => {
    if (next === 'start') {
      void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
      if (endsHere && ongoing) endPeriod(ongoing.id, undefined);
      startPeriod(date);
      return;
    }
    if (startingHere) removeStart();
    if (!ongoing) return;
    endPeriod(ongoing.id, next === 'end' ? date : undefined);
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
  const setEnergy = (e: Energy) => upsertLog(date, { energy: e });
  const bodyCount = symptoms.filter((s) => BODY.includes(s)).length;
  const mindCount = symptoms.length - bodyCount;

  const clearDay = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    if (log) deleteLog(date);
    if (endsHere && ongoing) endPeriod(ongoing.id, undefined);
    if (startingHere) removeStart();
  };

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={styles.content}
      keyboardDismissMode="on-drag">
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Txt variant="footnote">
            {cycleDay ? t('log.dateLine', { date: fmt.long(date), n: cycleDay }) : fmt.long(date)}
          </Txt>
          <Txt variant="cardTitle">
            {partnerName ? t('log.howTodayPartner', { name: partnerName }) : t('log.howToday')}
          </Txt>
        </View>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent} style={styles.done}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>

      <View style={styles.section}>
        <Label>{t('log.period')}</Label>
        {ongoing && !endsHere ? (
          <Txt variant="footnote">
            {t('log.periodOngoing', { date: fmt.short(ongoing.startDate) })}
          </Txt>
        ) : null}
        <Segmented options={periodOptions} value={periodChoice} onChange={choosePeriod} stretch />
      </View>

      {startingHere || ongoing ? (
        <View style={styles.section}>
          <Label>{t('log.flow')}</Label>
          <View style={styles.flowGrid}>
            {FLOWS.map((f) => (
              <Chip
                key={f}
                label={t(`log.flows.${f}`)}
                selected={log?.flow === f}
                onPress={() => setFlow(f)}
                color={phaseColor.menstrual}
                style={styles.flowChip}
              />
            ))}
          </View>
        </View>
      ) : null}

      <View style={styles.section}>
        <Label>{t('log.energy')}</Label>
        <Segmented
          options={ENERGIES.map((e) => ({ value: e, label: t(`log.energies.${e}`) }))}
          value={log?.energy ?? ('' as Energy)}
          onChange={setEnergy}
          stretch
          accent
        />
      </View>

      <View style={styles.section}>
        <Label>{t('log.mood')}</Label>
        <View style={styles.grid}>
          {MOODS.map((m) => (
            <Chip
              key={m}
              label={t(`log.moods.${m}`)}
              selected={log?.mood === m}
              onPress={() => setMood(m)}
              style={styles.gridChip}
            />
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Label trailing={bodyCount ? t('log.selectedCount', { n: bodyCount }) : undefined}>
          {t('log.body')}
        </Label>
        <View style={styles.chips}>
          {BODY.map((s) => (
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
        <Label trailing={mindCount ? t('log.selectedCount', { n: mindCount }) : undefined}>
          {t('log.mind')}
        </Label>
        <View style={styles.chips}>
          {MIND.map((s) => (
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

      {hasData ? (
        <View style={styles.footer}>
          <View style={styles.saved}>
            <Icon name="checkmark" size={13} color={phaseColor.follicular} />
            <Txt variant="footnote" color={phaseColor.follicular} style={styles.savedText}>
              {partnerName && shared
                ? t('log.savedAndShared', { name: partnerName })
                : t('log.saved')}
            </Txt>
          </View>
          <Pressable onPress={clearDay} accessibilityRole="button" hitSlop={8}>
            <Txt variant="footnote" color={phaseColor.menstrual} style={styles.savedText}>
              {t('log.clearDay')}
            </Txt>
          </Pressable>
        </View>
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
  headerText: { flex: 1, flexShrink: 1, marginRight: spacing.md, gap: 4 },
  done: { fontFamily: fontFor(700) },
  section: { gap: spacing.sm + 2 },
  labelRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  label: { fontFamily: fontFor(700), letterSpacing: 0.8 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  grid: { flexDirection: 'row', gap: 6 },
  gridChip: { flex: 1, alignItems: 'center', paddingHorizontal: 4 },
  // Four bleeding levels as two rows of two: 'Pletblødning' needs more room than a quarter.
  flowGrid: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  flowChip: { flexBasis: '47%', flexGrow: 1, alignItems: 'center', paddingHorizontal: 6 },
  input: {
    fontFamily: fontFor(400),
    fontSize: 16,
    lineHeight: 22,
    color: colors.label,
    minHeight: 72,
    textAlignVertical: 'top',
    borderWidth: 1,
    borderColor: colors.separator,
    borderRadius: radius.field,
    paddingHorizontal: 14,
    paddingVertical: 12,
    backgroundColor: colors.card,
  },
  footer: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  saved: { flexDirection: 'row', alignItems: 'center', gap: 6, flexShrink: 1 },
  savedText: { fontFamily: fontFor(600) },
});
