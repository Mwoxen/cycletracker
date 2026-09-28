import * as Haptics from 'expo-haptics';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Pressable, StyleSheet, View } from 'react-native';

import type { QuizQuestion } from '@/content';
import { colors, radius, spacing } from '@/ui/colors';
import { Button, Card, Symbol, Txt } from '@/ui/primitives';

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
  const [started, setStarted] = useState(false);
  const [index, setIndex] = useState(0);
  const [chosen, setChosen] = useState<number | undefined>();
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);

  const restart = () => {
    setStarted(true);
    setIndex(0);
    setChosen(undefined);
    setScore(0);
    setFinished(false);
  };

  if (!started) {
    return (
      <Card>
        <Txt variant="headline">{t('learn.quiz')}</Txt>
        {bestScore ? <Txt variant="footnote">{t('learn.bestScore', bestScore)}</Txt> : null}
        <Button title={bestScore ? t('learn.retryQuiz') : t('learn.startQuiz')} onPress={restart} />
      </Card>
    );
  }

  if (finished) {
    return (
      <Card>
        <Txt variant="title">{t('learn.result', { score, total: questions.length })}</Txt>
        <Button title={t('learn.retryQuiz')} variant="secondary" onPress={restart} />
      </Card>
    );
  }

  const q = questions[index];
  const answered = chosen !== undefined;
  const isLast = index === questions.length - 1;

  const choose = (i: number) => {
    if (answered) return;
    setChosen(i);
    const correct = i === q.correctIndex;
    void Haptics.notificationAsync(
      correct ? Haptics.NotificationFeedbackType.Success : Haptics.NotificationFeedbackType.Warning,
    );
    if (correct) setScore((s) => s + 1);
  };

  const next = () => {
    if (isLast) {
      const finalScore = score;
      setFinished(true);
      onFinish(finalScore, questions.length);
      return;
    }
    setIndex((i) => i + 1);
    setChosen(undefined);
  };

  return (
    <Card>
      <Txt variant="footnote">
        {t('learn.questionN', { n: index + 1, total: questions.length })}
      </Txt>
      <Txt variant="headline">{q.question}</Txt>
      <View style={{ gap: spacing.sm }}>
        {q.options.map((option, i) => {
          const isCorrect = i === q.correctIndex;
          const isChosen = i === chosen;
          const bg =
            answered && isCorrect ? colors.green : answered && isChosen ? colors.red : colors.fill;
          const fg = answered && (isCorrect || isChosen) ? colors.white : colors.label;
          return (
            <Pressable
              key={i}
              onPress={() => choose(i)}
              disabled={answered}
              accessibilityRole="button"
              style={({ pressed }) => [
                styles.option,
                { backgroundColor: bg },
                pressed && { opacity: 0.7 },
              ]}>
              <Txt color={fg} style={{ flex: 1 }}>
                {option}
              </Txt>
              {answered && isCorrect ? (
                <Symbol name="checkmark" size={16} color={colors.white} weight="bold" />
              ) : null}
              {answered && isChosen && !isCorrect ? (
                <Symbol name="xmark" size={16} color={colors.white} weight="bold" />
              ) : null}
            </Pressable>
          );
        })}
      </View>
      {answered ? (
        <View style={{ gap: spacing.sm }}>
          <Txt variant="headline" color={chosen === q.correctIndex ? colors.green : colors.red}>
            {chosen === q.correctIndex ? t('learn.correct') : t('learn.incorrect')}
          </Txt>
          <Txt color={colors.secondaryLabel}>{q.explanation}</Txt>
          <Button title={isLast ? t('learn.seeResult') : t('learn.nextQuestion')} onPress={next} />
        </View>
      ) : null}
    </Card>
  );
}

const styles = StyleSheet.create({
  option: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.card,
    minHeight: 48,
  },
});
