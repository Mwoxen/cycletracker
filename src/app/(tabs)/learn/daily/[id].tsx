import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { DAYS_PER_MONTH, findDaily, getMonth } from '@/content';
import { useMonthAccess } from '@/entitlements';
import { useProgram } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { ActionBox } from '@/ui/daily-card';
import { PlusGate } from '@/ui/plus-gate';
import { Screen, Txt } from '@/ui/primitives';
import {
  NextDailyRow,
  ReadingBody,
  ReadingHero,
  ReadingProgressBar,
  readingMinutes,
  useReadingProgress,
} from '@/ui/reading';
import { Sources } from '@/ui/sources';

export default function DailyCardScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const { content, position } = useProgram();
  const card = findDaily(content, id);
  const markRead = useStore((s) => s.markRead);
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const { progress, onScroll } = useReadingProgress();
  const unlocked = useMonthAccess(card?.month ?? 1);

  useEffect(() => {
    if (card && isTracker && unlocked) markRead(card.id);
  }, [card, isTracker, unlocked, markRead]);

  if (!card) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  const programDay = (card.month - 1) * DAYS_PER_MONTH + card.day;
  const kicker = [
    programDay === position.programDay
      ? t('home.todaysCardDay', { day: programDay })
      : t('reading.cardDay', { day: programDay }),
    ...card.phaseTags.map((p) => t(`phases.${p}`)),
  ].join(' · ');
  const minutes = readingMinutes([card.insight]);
  const meta = [
    isTracker ? undefined : t('learn.writtenForPartner'),
    minutes === 1 ? t('reading.minute') : t('reading.minutes', { n: minutes }),
    getMonth(content, card.month)?.theme,
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <>
      <Stack.Screen
        options={{
          title: t('learn.month', { n: card.month }) + ' · ' + t('common.dayN', { n: card.day }),
        }}
      />
      <PlusGate month={card.month}>
        <View style={{ flex: 1 }}>
          <Screen onScroll={onScroll} scrollEventThrottle={32}>
            <ReadingHero kicker={kicker} title={card.title} meta={meta} phase={card.phaseTags[0]} />
            <ReadingBody paragraphs={card.insight.split(/\n\s*\n/)} lede />
            {isTracker ? <ActionBox card={card} /> : null}
            <NextDailyRow content={content} position={position} card={card} />
            {card.sources?.length ? <Sources sources={card.sources} /> : null}
          </Screen>
          <ReadingProgressBar progress={progress} />
        </View>
      </PlusGate>
    </>
  );
}
