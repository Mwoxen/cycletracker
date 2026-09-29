import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';

import { findWeekly } from '@/content';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors } from '@/ui/colors';
import { Card, Paragraphs, Screen, Txt } from '@/ui/primitives';
import { Sources } from '@/ui/sources';

export default function WeeklyReadScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = useContent();
  const read = findWeekly(content, id);
  const markRead = useStore((s) => s.markRead);
  const isTracker = useStore((s) => s.profile?.role === 'tracker');

  useEffect(() => {
    if (read && isTracker) markRead(read.id);
  }, [read, isTracker, markRead]);

  if (!read) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  const minutes = Math.max(2, Math.round(read.body.join(' ').split(/\s+/).length / 200));

  return (
    <>
      <Stack.Screen options={{ title: t('learn.week', { n: read.week }) }} />
      <Screen>
        {isTracker ? null : <Txt variant="footnote">{t('learn.writtenForPartner')}</Txt>}
        <Txt variant="largeTitle" style={{ fontSize: 28, lineHeight: 34 }}>
          {read.title}
        </Txt>
        <Txt variant="footnote">{t('learn.minutes', { n: minutes })}</Txt>
        <Card>
          <Paragraphs items={read.body} />
        </Card>
        <Card style={{ backgroundColor: colors.tint }}>
          <Txt variant="footnote" color={colors.white} style={{ fontWeight: '600', opacity: 0.85 }}>
            {t('learn.conversationQuestion').toUpperCase()}
          </Txt>
          <Txt variant="title" color={colors.white}>
            {read.conversationQuestion}
          </Txt>
        </Card>
        {read.sources?.length ? <Sources sources={read.sources} /> : null}
      </Screen>
    </>
  );
}
