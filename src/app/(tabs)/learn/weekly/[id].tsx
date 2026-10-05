import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { findWeekly } from '@/content';
import { useMonthAccess } from '@/entitlements';
import { useProgram } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors } from '@/ui/colors';
import { PlusGate } from '@/ui/plus-gate';
import { Card, Screen, Txt } from '@/ui/primitives';
import {
  NextWeeklyRow,
  pullQuoteFor,
  ReadingBody,
  ReadingHero,
  ReadingProgressBar,
  readingMinutes,
  useReadingProgress,
} from '@/ui/reading';
import { Sources } from '@/ui/sources';

export default function WeeklyReadScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { content, position } = useProgram();
  const read = findWeekly(content, id);
  const markRead = useStore((s) => s.markRead);
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const { progress, onScroll } = useReadingProgress();
  const unlocked = useMonthAccess(read?.month ?? 1);

  useEffect(() => {
    if (read && isTracker && unlocked) markRead(read.id);
  }, [read, isTracker, unlocked, markRead]);

  if (!read) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  const minutes = Math.max(2, readingMinutes(read.body));
  const kicker = [
    t('learn.thisWeek'),
    t('learn.month', { n: read.month }),
    t('learn.week', { n: read.week }),
  ].join(' · ');
  const meta = [
    isTracker ? undefined : t('learn.writtenForPartner'),
    t('reading.minutes', { n: minutes }),
    t('reading.conversationAtEnd'),
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Stack.Screen options={{ title: t('learn.week', { n: read.week }) }} />
      <PlusGate month={read.month}>
        <View style={{ flex: 1 }}>
          <Screen onScroll={onScroll} scrollEventThrottle={32}>
            <ReadingHero kicker={kicker} title={read.title} meta={meta} />
            <ReadingBody paragraphs={read.body} lede pullQuote={pullQuoteFor(read.body)} />
            <Card style={{ backgroundColor: colors.tint }}>
              <Txt
                variant="footnote"
                color={colors.white}
                style={{ fontWeight: '600', opacity: 0.85 }}>
                {t('learn.conversationQuestion').toUpperCase()}
              </Txt>
              <Txt variant="title" color={colors.white}>
                {read.conversationQuestion}
              </Txt>
            </Card>
            <NextWeeklyRow content={content} position={position} read={read} />
            {read.sources?.length ? <Sources sources={read.sources} /> : null}
          </Screen>
          <ReadingProgressBar progress={progress} />
        </View>
      </PlusGate>
    </>
  );
}
