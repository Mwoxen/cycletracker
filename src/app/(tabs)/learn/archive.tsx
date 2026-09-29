import { Stack, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { searchIndex, searchItems, type SearchItem } from '@/engine/insights';
import { useProgram } from '@/hooks/use-program';
import { colors } from '@/ui/colors';
import { Card, Row, Screen, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

const kindSymbol: Record<SearchItem['kind'], SFSymbol> = {
  daily: 'rectangle.portrait.on.rectangle.portrait',
  weekly: 'doc.text',
  wrap: 'star.fill',
  phase: 'circle.hexagongrid.fill',
};

export default function ArchiveScreen() {
  const { t } = useTranslation();
  const router = useRouter();
  const { content, position, progress } = useProgram();
  const [query, setQuery] = useState('');

  const index = useMemo(
    () => searchIndex(content, position, progress),
    [content, position, progress],
  );
  const results = useMemo(() => searchItems(index, query), [index, query]);

  const open = (item: SearchItem) => {
    switch (item.kind) {
      case 'daily':
        return router.push(`/(tabs)/learn/daily/${item.id}`);
      case 'weekly':
        return router.push(`/(tabs)/learn/weekly/${item.id}`);
      case 'wrap':
        return router.push(`/(tabs)/learn/wrap/${item.id}`);
      case 'phase':
        return router.push(`/(tabs)/learn/phase/${item.id}`);
    }
  };

  return (
    <>
      <Stack.Screen
        options={{
          title: t('learn.archive'),
          headerSearchBarOptions: {
            placeholder: t('learn.searchPlaceholder'),
            hideWhenScrolling: false,
            autoCapitalize: 'none',
            onChangeText: (e) => setQuery(e.nativeEvent.text),
          },
        }}
      />
      <Screen>
        {results.length === 0 ? (
          <Card>
            <Txt color={colors.secondaryLabel}>{t('learn.searchEmpty')}</Txt>
          </Card>
        ) : (
          <Card style={{ padding: 0, paddingHorizontal: 16 }}>
            {results.slice(0, 80).map((item, i) => (
              <Row
                key={`${item.kind}-${item.id}`}
                title={item.title}
                subtitle={`${t(`learn.kind${item.kind[0].toUpperCase()}${item.kind.slice(1)}` as 'learn.kindDaily')} · ${item.subtitle}`}
                symbol={
                  item.read && item.kind !== 'phase'
                    ? 'checkmark.circle.fill'
                    : kindSymbol[item.kind]
                }
                symbolColor={item.read && item.kind !== 'phase' ? colors.green : colors.tint}
                onPress={() => open(item)}
                last={i === Math.min(results.length, 80) - 1}
              />
            ))}
          </Card>
        )}
      </Screen>
    </>
  );
}
