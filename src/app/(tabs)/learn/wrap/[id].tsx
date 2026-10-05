import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { findWrap } from '@/content';
import { useMonthAccess } from '@/entitlements';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { spacing } from '@/ui/colors';
import { PlusGate } from '@/ui/plus-gate';
import { Card, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Quiz } from '@/ui/quiz';
import {
  ReadingBody,
  ReadingBullets,
  ReadingHero,
  ReadingProgressBar,
  useReadingProgress,
} from '@/ui/reading';

export default function WrapScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = useContent();
  const wrap = findWrap(content, id);
  const markRead = useStore((s) => s.markRead);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const progress = useStore((s) => (wrap ? s.progress[wrap.id] : undefined));
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const reading = useReadingProgress();
  const unlocked = useMonthAccess(wrap?.month ?? 1);

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

  const meta = [
    isTracker ? undefined : t('learn.writtenForPartner'),
    t('learn.month', { n: wrap.month }),
    t('reading.questions', { n: wrap.quiz.length }),
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Stack.Screen options={{ title: t('learn.month', { n: wrap.month }) }} />
      <PlusGate month={wrap.month}>
        <View style={{ flex: 1 }}>
          <Screen onScroll={reading.onScroll} scrollEventThrottle={32}>
            <ReadingHero kicker={t('learn.thisMonth')} title={wrap.title} meta={meta} />
            <ReadingBody paragraphs={wrap.summary} lede />
            <SectionTitle style={{ marginLeft: spacing.lg }}>{t('learn.keepDoing')}</SectionTitle>
            <Card style={{ marginHorizontal: spacing.sm }}>
              <ReadingBullets items={wrap.keepDoing} />
            </Card>
            {isTracker ? (
              <>
                <SectionTitle>{t('learn.quiz')}</SectionTitle>
                <Quiz
                  questions={wrap.quiz}
                  bestScore={
                    progress?.quizScore !== undefined && progress.quizTotal
                      ? { score: progress.quizScore, total: progress.quizTotal }
                      : undefined
                  }
                  onFinish={(score, total) => recordQuiz(wrap.id, score, total)}
                />
              </>
            ) : null}
          </Screen>
          <ReadingProgressBar progress={reading.progress} />
        </View>
      </PlusGate>
    </>
  );
}
