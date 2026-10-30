import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import * as Haptics from 'expo-haptics';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, StyleSheet, TextInput, View, type ColorValue } from 'react-native';

import {
  ENERGIES,
  MOODS,
  SYMPTOMS,
  type DayLog,
  type Energy,
  type Flow,
  type Mood,
  type Symptom,
} from '@/domain/types';
import { dayStatus } from '@/engine/cycle';
import {
  addDaysISO,
  compareISO,
  fromISODate,
  isValidISODate,
  toISODate,
  todayISO,
} from '@/engine/dates';
import { useFormat } from '@/hooks/use-format';
import { selectActiveLogs, selectActivePeriods, selectLogForDate, useStore } from '@/store/store';
import { colors, fontFor, phaseColor, radius, spacing } from '@/ui/colors';
import { Card, Chip, Icon, Txt } from '@/ui/primitives';
import { Segmented } from '@/ui/segmented';
import { usePhaseTheme } from '@/ui/theme';

const FLOWS: Flow[] = ['spotting', 'light', 'medium', 'heavy'];
const MIND_SYMPTOMS: Symptom[] = ['moodSwings', 'anxiety', 'irritability', 'sadness'];
const BODY: Symptom[] = SYMPTOMS.filter((s) => !MIND_SYMPTOMS.includes(s));
const MIND: Symptom[] = SYMPTOMS.filter((s) => MIND_SYMPTOMS.includes(s));
/** How many of her most-logged symptoms sit at the top. */
const MOST_OFTEN = 4;
/** How long the undo bar stays after clearing. */
const UNDO_MS = 5000;

type PeriodChoice = 'none' | 'start' | 'end';

/** Section label 11/600 uppercase with an optional trailing element. */
function Label({ children, trailing }: { children: string; trailing?: React.ReactNode }) {
  return (
    <View style={styles.labelRow}>
      <Txt variant="label">{children.toUpperCase()}</Txt>
      {trailing}
    </View>
  );
}

/** Drops for the four bleeding levels: one to four, in the current chip colour. */
function Drops({ n, color }: { n: number; color?: ColorValue }) {
  return (
    <View style={styles.drops}>
      {Array.from({ length: n }, (_, i) => (
        <Icon key={i} name="drop.fill" size={9} color={color ?? colors.tertiaryLabel} />
      ))}
    </View>
  );
}

/**
 * The log sheet: the question first, a date pill and a "who logged" pill, then four cards
 * (period, how she feels, symptoms, note). Clearing is immediate with an undo bar.
 */
export default function LogSheet() {
  const { t } = useTranslation();
  const router = useRouter();
  const fmt = useFormat();
  const theme = usePhaseTheme();
  const params = useLocalSearchParams<{ date: string }>();
  const [date, setDate] = useState(() =>
    isValidISODate(params.date ?? '') ? params.date : todayISO(),
  );
  const [pickingDay, setPickingDay] = useState(false);
  const today = todayISO();

  const periods = useStore(selectActivePeriods);
  const allLogs = useStore(selectActiveLogs);
  const settings = useStore((s) => s.settings);
  const log = useStore(selectLogForDate(date));
  const role = useStore((s) => s.profile?.role);
  const otherName = useStore((s) => s.profile?.partnerName ?? '');
  const isTracker = role === 'tracker';
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
  const inPeriod = !!startingHere || (!!ongoing && !endsHere) || endsHere;
  const hasData = !!log || !!startingHere || endsHere;
  const status = useMemo(() => dayStatus(periods, settings, date), [periods, settings, date]);
  const cycleDay = status?.cycleDay;
  const latest = [log, startingHere, endsHere ? ongoing : undefined]
    .filter((r): r is NonNullable<typeof r> => !!r)
    .sort((a, b) => b.updatedAt - a.updatedAt)[0];
  const writtenBy = latest ? (latest.by ?? 'user') : undefined;
  const writerName = writtenBy === role ? t('common.you') : otherName;

  /** Her most-logged symptoms over all days, for the row at the top. */
  const mostOften = useMemo(() => {
    const counts = new Map<Symptom, number>();
    for (const l of allLogs) for (const s of l.symptoms) counts.set(s, (counts.get(s) ?? 0) + 1);
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1])
      .slice(0, MOST_OFTEN)
      .map(([s]) => s);
  }, [allLogs]);
  const bodyRest = BODY.filter((s) => !mostOften.includes(s));
  const mindRest = MIND.filter((s) => !mostOften.includes(s));

  // Undo: what was on the day before it was cleared, restored on tap.
  const [undo, setUndo] = useState<{ text: string; restore: () => void } | undefined>();
  const undoTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const offerUndo = (text: string, restore: () => void) => {
    if (undoTimer.current) clearTimeout(undoTimer.current);
    setUndo({ text, restore });
    undoTimer.current = setTimeout(() => setUndo(undefined), UNDO_MS);
  };
  useEffect(() => () => undoTimer.current && clearTimeout(undoTimer.current), []);

  const removeStart = () => {
    if (!startingHere) return;
    const flow = log?.flow;
    deletePeriod(startingHere.id);
    offerUndo(t('log.periodRemoved'), () => {
      startPeriod(date);
      if (flow) upsertLog(date, { flow });
    });
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

  const clearDay = () => {
    void Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
    const before: Partial<DayLog> | undefined = log
      ? {
          flow: log.flow,
          symptoms: log.symptoms,
          mood: log.mood,
          energy: log.energy,
          note: log.note,
        }
      : undefined;
    const hadStart = !!startingHere;
    const hadEnd = endsHere ? ongoing : undefined;
    if (log) deleteLog(date);
    if (hadEnd) endPeriod(hadEnd.id, undefined);
    if (startingHere) deletePeriod(startingHere.id);
    offerUndo(t('log.cleared'), () => {
      if (hadStart) startPeriod(date);
      if (hadEnd) endPeriod(hadEnd.id, date);
      if (before) upsertLog(date, before);
    });
  };

  const changeDay = (next: string) => {
    if (next === date) return;
    void Haptics.selectionAsync();
    setDate(next);
    setPickingDay(false);
  };

  const chips = (list: Symptom[]) =>
    list.map((s) => (
      <Chip
        key={s}
        label={t(`log.symptomNames.${s}`)}
        selected={symptoms.includes(s)}
        onPress={() => toggleSymptom(s)}
      />
    ));
  const savedTime = latest ? fmt.time(new Date(latest.updatedAt)) : '';

  return (
    <ScrollView
      style={styles.sheet}
      contentContainerStyle={styles.content}
      stickyHeaderIndices={[0]}
      keyboardDismissMode="on-drag">
      <View style={styles.header}>
        <View style={styles.titleRow}>
          <Txt variant="cardTitle" style={styles.title} accessibilityRole="header">
            {isTracker
              ? date === today
                ? t('log.howTodayPartner', { name: otherName })
                : t('log.howOnDayPartner', { name: otherName })
              : date === today
                ? t('log.howToday')
                : t('log.howOnDay')}
          </Txt>
          <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
            <Txt variant="headline" color={theme.accent} style={styles.done}>
              {t('common.done')}
            </Txt>
          </Pressable>
        </View>
        <View style={styles.pills}>
          <Chip
            label={
              cycleDay ? t('log.dayPill', { date: fmt.long(date), n: cycleDay }) : fmt.long(date)
            }
            onPress={() => setPickingDay((v) => !v)}
            lead={<Icon name="calendar" size={13} color={theme.accent} />}
            style={styles.pill}
          />
          {writtenBy ? (
            <Chip
              label={t('log.loggedPill', { name: writerName, time: savedTime })}
              color={theme.soft}
              selected
              textColor={theme.accent}
              lead={
                <View style={[styles.initial, { backgroundColor: theme.accent }]}>
                  <Txt variant="caption" color={colors.onAccent} style={styles.initialText}>
                    {(writerName[0] ?? '').toUpperCase()}
                  </Txt>
                </View>
              }
              style={[styles.pill, styles.pillSoft]}
            />
          ) : null}
        </View>
      </View>

      {pickingDay ? (
        <Card style={styles.picker}>
          <DateTimePicker
            value={fromISODate(date)}
            mode="date"
            display="inline"
            maximumDate={fromISODate(today)}
            minimumDate={fromISODate(addDaysISO(today, -365))}
            onValueChange={(_, d) => changeDay(toISODate(d))}
            accentColor={theme.accentHex}
            style={{ alignSelf: 'stretch' }}
          />
        </Card>
      ) : null}

      {isTracker && !hasData ? (
        <View style={[styles.banner, { backgroundColor: theme.soft }]}>
          <Icon name="person" size={18} color={theme.accent} />
          <Txt variant="footnote" color={colors.label} style={{ flex: 1, flexShrink: 1 }}>
            {t('log.onBehalf', { name: otherName })}
          </Txt>
        </View>
      ) : null}

      <Card style={styles.card}>
        <Label
          trailing={
            ongoing && !endsHere ? (
              <Txt variant="footnote">
                {t('log.startedOn', {
                  date: fmt.short(ongoing.startDate),
                  n: cycleDay ?? '',
                })}
              </Txt>
            ) : undefined
          }>
          {t('log.period')}
        </Label>
        <Segmented options={periodOptions} value={periodChoice} onChange={choosePeriod} stretch />
        <View style={[styles.flow, !inPeriod && styles.dimmed]}>
          <Txt variant="footnote">{inPeriod ? t('log.flow') : t('log.flowWhenPeriod')}</Txt>
          <View style={styles.flowGrid}>
            {FLOWS.map((f, i) => {
              const on = log?.flow === f;
              return (
                <Chip
                  key={f}
                  label={t(`log.flowShort.${f}`)}
                  selected={on}
                  onPress={inPeriod ? () => setFlow(f) : undefined}
                  color={phaseColor.menstrual}
                  lead={<Drops n={i + 1} color={on ? colors.onAccent : undefined} />}
                  style={styles.flowChip}
                />
              );
            })}
          </View>
        </View>
      </Card>

      <Card style={styles.card}>
        <Label>{isTracker ? t('log.howSheFeels') : t('log.howYouFeel')}</Label>
        <View style={styles.scale}>
          <View style={styles.scaleHead}>
            <Txt>{t('log.mood')}</Txt>
            {log?.mood ? (
              <Txt variant="footnote" color={theme.accent} style={styles.semibold}>
                {t(`log.moods.${log.mood}`)}
              </Txt>
            ) : null}
          </View>
          <View style={styles.dotsRow} accessibilityRole="radiogroup">
            {[...MOODS].reverse().map((m) => {
              const on = log?.mood === m;
              return (
                <Pressable
                  key={m}
                  onPress={() => setMood(m)}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: on }}
                  accessibilityLabel={t(`log.moods.${m}`)}
                  style={({ pressed }) => [
                    styles.dotButton,
                    on && { backgroundColor: theme.accent, borderColor: theme.accent },
                    pressed && styles.pressed,
                  ]}>
                  <View
                    style={[
                      styles.dot,
                      { backgroundColor: on ? colors.onAccent : colors.tertiaryLabel },
                      on && styles.dotOn,
                    ]}
                  />
                </Pressable>
              );
            })}
          </View>
          <View style={styles.scaleEnds}>
            <Txt variant="caption">{t('log.moods.bad')}</Txt>
            <Txt variant="caption">{t('log.moods.great')}</Txt>
          </View>
        </View>
        <View style={styles.scale}>
          <View style={styles.scaleHead}>
            <Txt>{t('log.energy')}</Txt>
            {log?.energy ? (
              <Txt variant="footnote" color={theme.accent} style={styles.semibold}>
                {t(`log.energies.${log.energy}`)}
              </Txt>
            ) : null}
          </View>
          <Segmented
            options={[...ENERGIES]
              .reverse()
              .map((e) => ({ value: e, label: t(`log.energies.${e}`) }))}
            value={log?.energy ?? ('' as Energy)}
            onChange={setEnergy}
            stretch
            accent
          />
        </View>
      </Card>

      <Card style={styles.card}>
        <Label
          trailing={
            symptoms.length ? (
              <View style={[styles.countPill, { backgroundColor: theme.soft }]}>
                <Txt variant="tag" color={theme.accent}>
                  {t('log.selectedCount', { n: symptoms.length }).toUpperCase()}
                </Txt>
              </View>
            ) : undefined
          }>
          {t('log.symptoms')}
        </Label>
        {mostOften.length ? (
          <View style={styles.group}>
            <Txt variant="footnote">{isTracker ? t('log.mostOften') : t('log.mostOftenOwn')}</Txt>
            <View style={styles.chips}>{chips(mostOften)}</View>
          </View>
        ) : null}
        <View style={[styles.group, mostOften.length > 0 && styles.groupBorder]}>
          <Txt variant="footnote">{t('log.body')}</Txt>
          <View style={styles.chips}>{chips(bodyRest)}</View>
        </View>
        <View style={[styles.group, styles.groupBorder]}>
          <Txt variant="footnote">{t('log.mind')}</Txt>
          <View style={styles.chips}>{chips(mindRest)}</View>
        </View>
      </Card>

      <Card style={styles.card}>
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
      </Card>

      {undo ? (
        <View style={styles.undo}>
          <Txt variant="callout" color={colors.card}>
            {undo.text}
          </Txt>
          <Pressable
            onPress={() => {
              undo.restore();
              setUndo(undefined);
            }}
            accessibilityRole="button"
            hitSlop={8}>
            <Txt variant="callout" color={theme.soft} style={styles.semibold}>
              {t('log.undo')}
            </Txt>
          </Pressable>
        </View>
      ) : hasData ? (
        <View style={styles.footer}>
          <View style={styles.saved}>
            <Icon name="checkmark" size={13} color={phaseColor.follicular} />
            <Txt variant="footnote" color={phaseColor.follicular} style={styles.semibold}>
              {isTracker || shared
                ? shared
                  ? t('log.savedAtShared', { time: savedTime, name: otherName })
                  : t('log.savedAt', { time: savedTime })
                : t('log.savedAt', { time: savedTime })}
            </Txt>
          </View>
          <Pressable onPress={clearDay} accessibilityRole="button" hitSlop={8}>
            <Txt variant="footnote" color={phaseColor.menstrual} style={styles.semibold}>
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
  content: { paddingHorizontal: spacing.lg - spacing.xs, paddingBottom: 60, gap: spacing.md + 4 },
  header: {
    backgroundColor: colors.card,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
    gap: spacing.md - 2,
    marginHorizontal: -(spacing.lg - spacing.xs),
    paddingHorizontal: spacing.lg - spacing.xs,
  },
  titleRow: { flexDirection: 'row', alignItems: 'flex-start', gap: spacing.md },
  title: { flex: 1, flexShrink: 1, fontSize: 26, lineHeight: 31, letterSpacing: -0.4 },
  done: { fontFamily: fontFor(700), paddingTop: 4 },
  pills: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  pill: { minHeight: 34, paddingVertical: 6 },
  pillSoft: { borderWidth: 1 },
  initial: {
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  initialText: { fontFamily: fontFor(700), fontSize: 9, lineHeight: 11 },
  picker: { paddingVertical: spacing.sm },
  banner: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    borderRadius: radius.field,
    paddingVertical: 12,
    paddingHorizontal: 14,
  },
  card: { gap: 14, paddingVertical: spacing.md },
  labelRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: spacing.sm,
  },
  flow: { gap: spacing.sm },
  dimmed: { opacity: 0.45 },
  flowGrid: { flexDirection: 'row', gap: 6 },
  flowChip: { flex: 1, flexDirection: 'column', gap: 3, paddingHorizontal: 4, paddingVertical: 8 },
  drops: { flexDirection: 'row', gap: 1, minHeight: 10 },
  scale: { gap: spacing.sm },
  scaleHead: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline' },
  semibold: { fontFamily: fontFor(600) },
  dotsRow: { flexDirection: 'row', gap: 6 },
  dotButton: {
    flex: 1,
    height: 40,
    borderRadius: radius.chip,
    borderWidth: 1,
    borderColor: colors.separator,
    alignItems: 'center',
    justifyContent: 'center',
  },
  dot: { width: 10, height: 10, borderRadius: 5 },
  dotOn: { width: 12, height: 12, borderRadius: 6 },
  scaleEnds: { flexDirection: 'row', justifyContent: 'space-between' },
  countPill: { borderRadius: radius.chip, paddingVertical: 4, paddingHorizontal: 9 },
  group: { gap: spacing.sm },
  groupBorder: { borderTopWidth: 1, borderTopColor: colors.separator, paddingTop: 12 },
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  input: {
    fontFamily: fontFor(400),
    fontSize: 16,
    lineHeight: 22,
    color: colors.label,
    minHeight: 56,
    textAlignVertical: 'top',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: spacing.xs,
  },
  saved: { flexDirection: 'row', alignItems: 'center', gap: 6, flexShrink: 1 },
  undo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.label,
    borderRadius: radius.field,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  pressed: { opacity: 0.7 },
});
