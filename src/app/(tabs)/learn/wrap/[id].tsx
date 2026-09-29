import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { findWrap } from '@/content';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { Bullets, Card, Paragraphs, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { Quiz } from '@/ui/quiz';

export default function WrapScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = useContent();
  const wrap = findWrap(content, id);
  const markRead = useStore((s) => s.markRead);
  const recordQuiz = useStore((s) => s.recordQuiz);
  const progress = useStore((s) => (wrap ? s.progress[wrap.id] : undefined));
  const isTracker = useStore((s) => s.profile?.role === 'tracker');

  useEffect(() => {
    if (wrap && isTracker) markRead(wrap.id);
  }, [wrap, isTracker, markRead]);

  if (!wrap) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  return (
    <>
      <Stack.Screen options={{ title: t('learn.month', { n: wrap.month }) }} />
      <Screen>
        {isTracker ? null : <Txt variant="footnote">{t('learn.writtenForPartner')}</Txt>}
        <Txt variant="largeTitle" style={{ fontSize: 28, lineHeight: 34 }}>
          {wrap.title}
        </Txt>
        <Card>
          <Paragraphs items={wrap.summary} />
        </Card>
        <SectionTitle>{t('learn.keepDoing')}</SectionTitle>
        <Card>
          <Bullets items={wrap.keepDoing} />
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
    </>
  );
}
