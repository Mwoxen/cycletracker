import { DateTimePicker } from '@expo/ui/community/datetime-picker';
import * as Haptics from 'expo-haptics';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, ScrollView, StyleSheet, View } from 'react-native';

import { useFormat } from '@/hooks/use-format';
import { useStore } from '@/store';
import { colors, radius, spacing } from '@/ui/colors';
import { Card, Row, SectionTitle, Txt } from '@/ui/primitives';
import { HelpText } from '@/ui/settings-bits';
import { usePhaseTheme } from '@/ui/theme';

type Slot = 'daily' | 'cycle' | 'program';

const QUICK: [number, number][] = [
  [7, 0],
  [8, 0],
  [8, 30],
  [9, 0],
  [12, 0],
  [19, 0],
  [20, 0],
];

const timeAt = (hour: number, minute: number) => {
  const d = new Date();
  d.setHours(hour, minute, 0, 0);
  return d;
};

/**
 * One sheet for every reminder time: the daily card, the two cycle reminders and the programme
 * items. Tap a time to pick from the quick row; "Other" opens the time wheel.
 */
export default function ReminderTimesSheet() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const fmt = useFormat();
  const router = useRouter();
  const profile = useStore((s) => s.profile);
  const r = useStore((s) => s.settings.reminders);
  const updateReminders = useStore((s) => s.updateReminders);
  const [open, setOpen] = useState<Slot | undefined>();
  const [wheel, setWheel] = useState(false);

  const isTracker = profile?.role === 'tracker';
  const slots: { key: Slot; hour: number; minute: number; title: string; hint: string }[] = [
    {
      key: 'daily',
      hour: r.dailyCardHour,
      minute: r.dailyCardMinute,
      title: isTracker ? t('settings.dailyCard') : t('settings.dailyReminder'),
      hint: isTracker ? t('settings.timesDailyHint') : t('settings.timesDailyHintUser'),
    },
    {
      key: 'cycle',
      hour: r.cycleHour,
      minute: r.cycleMinute,
      title: t('settings.timesCycleRow'),
      hint: t('settings.timesCycleHint'),
    },
    ...(isTracker
      ? [
          {
            key: 'program' as const,
            hour: r.programHour,
            minute: r.programMinute,
            title: t('settings.timesProgramRow'),
            hint: t('settings.timesProgramHint'),
          },
        ]
      : []),
  ];
  const groupTitle: Record<Slot, string> = {
    daily: t('settings.timesDaily'),
    cycle: t('settings.timesCycle'),
    program: t('settings.timesProgram'),
  };

  const set = (slot: Slot, hour: number, minute: number) => {
    void Haptics.selectionAsync();
    if (slot === 'daily') updateReminders({ dailyCardHour: hour, dailyCardMinute: minute });
    else if (slot === 'cycle') updateReminders({ cycleHour: hour, cycleMinute: minute });
    else updateReminders({ programHour: hour, programMinute: minute });
  };
  const toggle = (slot: Slot) => {
    setWheel(false);
    setOpen(open === slot ? undefined : slot);
  };

  return (
    <ScrollView style={styles.sheet} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Txt variant="title">{t('settings.times')}</Txt>
        <Pressable onPress={() => router.back()} hitSlop={12} accessibilityRole="button">
          <Txt variant="headline" color={theme.accent}>
            {t('common.done')}
          </Txt>
        </Pressable>
      </View>

      {slots.map((slot) => {
        const active = open === slot.key;
        return (
          <View key={slot.key} style={styles.group}>
            <SectionTitle>{groupTitle[slot.key]}</SectionTitle>
            <Card style={styles.rowsCard}>
              <Row
                title={slot.title}
                subtitle={slot.hint}
                onPress={() => toggle(slot.key)}
                chevron={false}
                last
                trailing={
                  <View
                    style={[
                      styles.time,
                      { backgroundColor: active ? theme.soft : colors.fill },
                    ]}>
                    <Txt variant="headline" color={active ? theme.accent : colors.label}>
                      {fmt.time(timeAt(slot.hour, slot.minute))}
                    </Txt>
                  </View>
                }
              />
              {active ? (
                <View style={styles.quick}>
                  {QUICK.map(([h, m]) => {
                    const selected = h === slot.hour && m === slot.minute;
                    return (
                      <Pressable
                        key={`${h}:${m}`}
                        accessibilityRole="button"
                        onPress={() => set(slot.key, h, m)}
                        style={[
                          styles.chip,
                          selected
                            ? { borderColor: theme.accent, borderWidth: 1.5 }
                            : { borderColor: colors.separator },
                        ]}>
                        <Txt
                          variant="headline"
                          color={selected ? theme.accent : colors.secondaryLabel}
                          style={styles.chipText}>
                          {fmt.time(timeAt(h, m))}
                        </Txt>
                      </Pressable>
                    );
                  })}
                  <Pressable
                    accessibilityRole="button"
                    onPress={() => setWheel(!wheel)}
                    style={[
                      styles.chip,
                      wheel
                        ? { borderColor: theme.accent, borderWidth: 1.5 }
                        : { borderColor: colors.separator },
                    ]}>
                    <Txt
                      variant="headline"
                      color={wheel ? theme.accent : colors.secondaryLabel}
                      style={styles.chipText}>
                      {t('settings.timesOther')}
                    </Txt>
                  </Pressable>
                </View>
              ) : null}
              {active && wheel ? (
                <DateTimePicker
                  value={timeAt(slot.hour, slot.minute)}
                  mode="time"
                  display="spinner"
                  onValueChange={(_, d) => set(slot.key, d.getHours(), d.getMinutes())}
                  locale={profile?.language === 'da' ? 'da_DK' : 'en_GB'}
                  style={styles.picker}
                />
              ) : null}
            </Card>
          </View>
        );
      })}

      <HelpText>{t('settings.timesHelp')}</HelpText>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  sheet: { flex: 1, backgroundColor: colors.background },
  content: { padding: spacing.lg, gap: spacing.md, paddingBottom: spacing.xl },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  rowsCard: { padding: 0, paddingHorizontal: spacing.md, gap: 0 },
  // The section label's negative bottom margin assumes the screen's 16 pt gap between items.
  group: { gap: spacing.md },
  time: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  quick: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.sm,
    paddingTop: 2,
    paddingBottom: spacing.md,
  },
  chip: {
    borderWidth: 1,
    borderRadius: radius.chip,
    height: 40,
    paddingHorizontal: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  chipText: { fontSize: 14 },
  picker: { alignSelf: 'stretch', marginBottom: spacing.sm },
});
