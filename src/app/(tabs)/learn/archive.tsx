import { Stack, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { searchIndex, searchItems, type SearchItem } from '@/engine/insights';
import { useProgram } from '@/hooks/use-program';
import type { Phase } from '@/domain/types';
import { colors, phaseColor, phaseSymbol } from '@/ui/colors';
import { Empty } from '@/ui/empty';
import { Card, Icon, Row, Screen } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

import type { SFSymbol } from 'sf-symbols-typescript';

const kindSymbol: Record<SearchItem['kind'], SFSymbol> = {
  daily: 'rectangle.portrait.on.rectangle.portrait',
  weekly: 'doc.text',
  wrap: 'star.fill',
  phase: 'circle.hexagongrid.fill',
};

/** Same badge as the phase page header, so the list and the page match. */
function PhaseLead({ phase }: { phase: Phase }) {
  return (
    <View style={[styles.phaseLead, { backgroundColor: phaseColor[phase] }]}>
      <Icon
        name={phaseSymbol[phase] as SFSymbol}
        size={15}
        color={colors.onAccent}
        weight="semibold"
      />
    </View>
  );
}

export default function ArchiveScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
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
          <Empty symbol="magnifyingglass" text={t('learn.searchEmpty')} />
        ) : (
          <Card style={{ padding: 0, paddingHorizontal: 16 }}>
            {results.slice(0, 80).map((item, i) => (
              <Row
                key={`${item.kind}-${item.id}`}
                title={item.title}
                subtitle={`${t(`learn.kind${item.kind[0].toUpperCase()}${item.kind.slice(1)}` as 'learn.kindDaily')} · ${item.subtitle}`}
                lead={
                  item.kind === 'phase' ? (
                    <PhaseLead phase={item.id as Phase} />
                  ) : item.read ? (
                    <Icon name="checkmark.circle.fill" color={colors.green} />
                  ) : (
                    <Icon name={kindSymbol[item.kind]} color={theme.accent} />
                  )
                }
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

const styles = StyleSheet.create({
  phaseLead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
