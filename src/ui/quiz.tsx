import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { QuizQuestion } from '@/content';
import { colors, fontFor, phaseColor, phaseSoft, radius, spacing } from '@/ui/colors';
import { Button, Card, Icon, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

const LETTERS = ['A', 'B', 'C', 'D', 'E', 'F'];

/**
 * The quiz card at the end of a monthly wrap: a row of dots for the questions (green right,
 * red wrong, accent current), the question, lettered options, an explanation box, one button.
 */
export function Quiz({
  questions,
  bestScore,
  onFinish,
}: {
  questions: QuizQuestion[];
  bestScore?: { score: number; total: number };
  onFinish: (score: number, total: number) => void;
}) {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | undefined>();
  const [results, setResults] = useState<boolean[]>([]);
  const [finished, setFinished] = useState(false);
  const score = results.filter(Boolean).length;

  const restart = () => {
    setStarted(true);
    setIndex(0);
    setChosen(undefined);
    setResults([]);
    setFinished(false);
  };

  const dots = (
    <View
      style={styles.dots}
      accessibilityLabel={t('learn.questionN', { n: index + 1, total: questions.length })}>
      {questions.map((_, i) => (
        <View
          key={i}
          style={[
            styles.dot,
            {
              backgroundColor:
                results[i] === true
                  ? phaseColor.follicular
                  : results[i] === false
                    ? phaseColor.menstrual
                    : started && !finished && i === index
                      ? theme.accent
                      : colors.fill,
            },
          ]}
        />
      ))}
    </View>
  );
  const head = (
    <View style={styles.head}>
      <Txt variant="boxLabel" color={theme.accent}>
        {t('learn.quiz').toUpperCase()}
      </Txt>
      {dots}
    </View>
  );

  if (!started) {
    return (
      <Card style={styles.card}>
        {head}
        <Txt variant="question">
          {bestScore
            ? t('learn.bestScore', bestScore)
            : t('reading.questions', { n: questions.length })}
        </Txt>
        <Button
          variant="filled"
          title={bestScore ? t('learn.retryQuiz') : t('learn.startQuiz')}
          onPress={restart}
        />
      </Card>
    );
  }

  if (finished) {
    return (
      <Card style={styles.card}>
        {head}
        <Txt variant="question">{t('learn.result', { score, total: questions.length })}</Txt>
        <Button variant="filled" title={t('learn.retryQuiz')} onPress={restart} />
      </Card>
    );
  }

  const q = questions[index];
  const answered = chosen !== undefined;
  const isLast = index === questions.length - 1;
  const wasCorrect = chosen === q.correctIndex;

  const choose = (i: number) => {
    if (answered) return;
    setChosen(i);
    const correct = i === q.correctIndex;
    void Haptics.notificationAsync(
      correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning,
    );
    setResults((r) => [...r, correct]);
  };

  const next = () => {
    if (isLast) {
      setFinished(true);
      onFinish(score, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setChosen(undefined);
  };

  return (
    <Card style={styles.card}>
      {head}
      <Txt variant="question">{q.question}</Txt>
      <View style={{ gap: spacing.sm }}>
        {q.options.map((option, i) => {
          const isCorrect = i === q.correctIndex;
          const isChosen = i === chosen;
          const tone =
            answered && isCorrect ? 'follicular' : answered && isChosen ? 'menstrual' : undefined;
          return (
            <Pressable
              key={i}
              onPress={() => choose(i)}
              disabled={answered}
              accessibilityRole="button"
              accessibilityState={{ selected: isChosen }}
              style={({ pressed }) => [
                styles.option,
                tone && { borderColor: phaseColor[tone], backgroundColor: phaseSoft[tone] },
                pressed && styles.pressed,
              ]}>
              <View
                style={[styles.letter, { backgroundColor: tone ? phaseColor[tone] : colors.fill }]}>
                <Txt
                  variant="caption"
                  color={tone ? colors.onAccent : colors.secondaryLabel}
                  style={styles.letterText}>
                  {LETTERS[i] ?? String(i + 1)}
                </Txt>
              </View>
              <Txt variant="callout" style={styles.optionText}>
                {option}
              </Txt>
            </Pressable>
          );
        })}
      </View>
      {answered ? (
        <>
          <View
            style={[
              styles.explain,
              { backgroundColor: wasCorrect ? phaseSoft.follicular : phaseSoft.menstrual },
            ]}>
            <View style={styles.explainHead}>
              <Icon
                name={wasCorrect ? 'checkmark.circle.fill' : 'xmark.circle.fill'}
                size={15}
                color={wasCorrect ? phaseColor.follicular : phaseColor.menstrual}
              />
              <Txt
                variant="headline"
                color={wasCorrect ? phaseColor.follicular : phaseColor.menstrual}>
                {wasCorrect ? t('learn.correct') : t('learn.incorrect')}
              </Txt>
            </View>
            <Txt variant="footnote" color={colors.label}>
              {q.explanation}
            </Txt>
          </View>
          <Button
            variant="filled"
            title={isLast ? t('learn.seeResult') : t('learn.nextQuestion')}
            onPress={next}
          />
        </>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  card: { gap: spacing.md, paddingVertical: 20 },
  head: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dots: { flexDirection: 'row', gap: 5 },
  dot: { width: 8, height: 8, borderRadius: 4 },
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: radius.field,
    borderWidth: 1,
    borderColor: colors.separator,
    minHeight: 52,
  },
  letter: {
    width: 28,
    height: 28,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  letterText: { fontFamily: fontFor(700) },
  optionText: { flex: 1, flexShrink: 1, fontFamily: fontFor(500) },
  explain: { borderRadius: radius.field, paddingVertical: 14, paddingHorizontal: 16, gap: 4 },
  explainHead: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  pressed: { opacity: 0.7 },
});
