import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import { findWrap } from '@/content';
import { wrapProgramDay } from '@/content/program';
import { useDayAccess } from '@/entitlements';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors, fontFor, radius, spacing } from '@/ui/colors';
import { PlusGate } from '@/ui/plus-gate';
import { Card, Icon, Screen, Txt } from '@/ui/primitives';
import { Quiz } from '@/ui/quiz';
import { ReadingHero, ReadingProgressBar, readingMinutes, useReadingProgress } from '@/ui/reading';
import { usePhaseTheme } from '@/ui/theme';

/** Summary paragraphs shown as numbered points before "read the whole wrap-up". */
const SHORT = 3;

/**
 * The monthly wrap: the summary "in short" as numbered points, the things worth keeping as
 * check rows, and the quiz card.
 */
export default function WrapScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = useContent();
  const wrap = findWrap(content, id);
  const markRead = useStore((s) => s.markRead);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const progress = useStore((s) => (wrap ? s.progress[wrap.id] : undefined));
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const reading = useReadingProgress();
  const unlocked = useDayAccess(wrap ? wrapProgramDay(wrap.month) : 1);
  const [full, setFull] = useState(false);

  useEffect(() => {
    if (wrap && isTracker && unlocked) markRead(wrap.id);
  }, [wrap, isTracker, unlocked, markRead]);

  if (!wrap) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  const best =
    progress?.quizScore !== undefined && progress.quizTotal
      ? { score: progress.quizScore, total: progress.quizTotal }
      : undefined;
  const meta = [
    isTracker ? undefined : t('learn.writtenForPartner'),
    t('learn.wrapMeta', { min: readingMinutes(wrap.summary), n: wrap.quiz.length }),
  ]
    .filter(Boolean)
    .join(' · ');
  const points = full ? wrap.summary : wrap.summary.slice(0, SHORT);

  return (
    <>
      <Stack.Screen options={{ title: t('learn.month', { n: wrap.month }) }} />
      <PlusGate programDay={wrapProgramDay(wrap.month)}>
        <View style={{ flex: 1 }}>
          <Screen onScroll={reading.onScroll} scrollEventThrottle={32}>
            {best ? (
              <View style={styles.pillRow}>
                <View style={[styles.pill, { backgroundColor: theme.soft }]}>
                  <Txt variant="tag" color={theme.accent}>
                    {t('learn.bestPill', best).toUpperCase()}
                  </Txt>
                </View>
              </View>
            ) : null}
            <ReadingHero
              kicker={t('learn.wrapKicker', { n: wrapProgramDay(wrap.month) })}
              title={wrap.title}
              meta={meta}
            />

            <View style={styles.section}>
              <Txt variant="label">{t('learn.inShort').toUpperCase()}</Txt>
              {points.map((p, i) => (
                <View key={i} style={styles.point}>
                  <View style={[styles.number, { backgroundColor: theme.soft }]}>
                    <Txt variant="caption" color={theme.accent} style={styles.numberText}>
                      {String(i + 1)}
                    </Txt>
                  </View>
                  <Txt variant="read" style={styles.pointText}>
                    {p}
                  </Txt>
                </View>
              ))}
              {wrap.summary.length > SHORT && !full ? (
                <Pressable
                  onPress={() => setFull(true)}
                  accessibilityRole="button"
                  style={({ pressed }) => [styles.more, pressed && styles.pressed]}>
                  <Txt variant="callout" color={theme.accent} style={styles.moreText}>
                    {t('learn.readFullWrap')}
                  </Txt>
                </Pressable>
              ) : null}
            </View>

            <View style={styles.section}>
              <Txt variant="label">{t('learn.keepDoingShort').toUpperCase()}</Txt>
              <Card style={styles.list}>
                {wrap.keepDoing.map((item, i) => (
                  <View
                    key={i}
                    style={[styles.keepRow, i < wrap.keepDoing.length - 1 && styles.keepBorder]}>
                    <Icon name="checkmark.circle.fill" size={22} color={theme.accent} />
                    <Txt style={styles.keepText}>{item}</Txt>
                  </View>
                ))}
              </Card>
            </View>

            {isTracker ? (
              <Quiz
                questions={wrap.quiz}
                bestScore={best}
                onFinish={(score, total) => recordQuiz(wrap.id, score, total)}
              />
            ) : null}
          </Screen>
          <ReadingProgressBar progress={reading.progress} />
        </View>
      </PlusGate>
    </>
  );
}

const styles = StyleSheet.create({
  pillRow: { flexDirection: 'row', justifyContent: 'flex-end', marginBottom: -spacing.sm },
  pill: { borderRadius: radius.chip, paddingVertical: 5, paddingHorizontal: 10 },
  section: { gap: spacing.sm + 4, paddingHorizontal: spacing.sm },
  point: { flexDirection: 'row', alignItems: 'flex-start' },
  number: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 1,
  },
  numberText: { fontFamily: fontFor(700) },
  pointText: { flex: 1, flexShrink: 1, marginLeft: 14, fontSize: 17, lineHeight: 26 },
  more: { alignSelf: 'flex-start', paddingVertical: 4 },
  moreText: { fontFamily: fontFor(600) },
  list: { padding: 0, paddingHorizontal: spacing.md, marginHorizontal: -spacing.sm },
  keepRow: { flexDirection: 'row', alignItems: 'center', paddingVertical: 12, minHeight: 46 },
  keepBorder: { borderBottomWidth: 1, borderBottomColor: colors.separator },
  keepText: { flex: 1, flexShrink: 1, marginLeft: 12 },
  pressed: { opacity: 0.6 },
});
