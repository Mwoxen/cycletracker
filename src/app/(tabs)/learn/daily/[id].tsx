import { Stack, useLocalSearchParams } from 'expo-router';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { findDaily } from '@/content';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors, phaseColor, spacing } from '@/ui/colors';
import { ActionBox } from '@/ui/daily-card';
import { Badge, Card, Screen, Txt } from '@/ui/primitives';
import { Sources } from '@/ui/sources';

export default function DailyCardScreen() {
  const { t } = useTranslation();
  const { id } = useLocalSearchParams<{ id: string }>();
  const content = useContent();
  const card = findDaily(content, id);
  const markRead = useStore((s) => s.markRead);

  useEffect(() => {
    if (card) markRead(card.id);
  }, [card, markRead]);

  if (!card) {
    return (
      <Screen>
        <Txt>{t('learn.contentMissing')}</Txt>
      </Screen>
    );
  }

  return (
    <>
      <Stack.Screen
        options={{
          title: t('learn.month', { n: card.month }) + ' · ' + t('common.dayN', { n: card.day }),
        }}
      />
      <Screen>
        <View style={{ gap: spacing.sm }}>
          <Txt variant="largeTitle" style={{ fontSize: 28, lineHeight: 34 }}>
            {card.title}
          </Txt>
          {card.phaseTags.length ? (
            <View style={{ flexDirection: 'row', gap: spacing.xs, flexWrap: 'wrap' }}>
              {card.phaseTags.map((p) => (
                <Badge key={p} label={t(`phases.${p}`)} color={phaseColor[p]} />
              ))}
            </View>
          ) : null}
        </View>
        <Card>
          <Txt style={{ lineHeight: 26 }}>{card.insight}</Txt>
        </Card>
        <ActionBox card={card} />
        {card.sources?.length ? <Sources sources={card.sources} /> : null}
        <Txt variant="caption" color={colors.tertiaryLabel} style={{ textAlign: 'center' }}>
          {card.id}
        </Txt>
      </Screen>
    </>
  );
}
