import { Stack, useRouter } from 'expo-router';
import { useMemo, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { findDaily } from '@/content';
import type { Phase } from '@/domain/types';
import { toISODate } from '@/engine/dates';
import { searchIndex, searchItems, type SearchItem } from '@/engine/insights';
import { useFormat } from '@/hooks/use-format';
import { useProgram } from '@/hooks/use-program';
import { colors, fontFor, phaseColor, phaseSymbol, spacing } from '@/ui/colors';
import { Empty } from '@/ui/empty';
import { Card, Chip, Icon, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

import type { SFSymbol } from 'sf-symbols-typescript';

type Filter = 'all' | 'daily' | 'weekly' | 'phase' | 'unread';
const FILTERS: {
  value: Filter;
  label: 'filterAll' | 'filterCards' | 'filterReads' | 'filterPhases' | 'filterUnread';
}[] = [
  { value: 'all', label: 'filterAll' },
  { value: 'daily', label: 'filterCards' },
  { value: 'weekly', label: 'filterReads' },
  { value: 'phase', label: 'filterPhases' },
  { value: 'unread', label: 'filterUnread' },
];
const MAX_RESULTS = 80;

/** Same badge as the phase page header, so the list and the page match. */
function PhaseLead({ phase }: { phase: Phase }) {
  return (
    <View style={[styles.lead, { backgroundColor: phaseColor[phase] }]}>
      <Icon
        name={phaseSymbol[phase] as SFSymbol}
        size={15}
        color={colors.onAccent}
        weight="semibold"
      />
    </View>
  );
}

/**
 * Everything unlocked, searchable from the native search bar, with filter chips. When the field
 * is empty: suggested searches and the last card read.
 */
export default function ArchiveScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const fmt = useFormat();
  const { content, position, progress } = useProgram();
  const [query, setQuery] = useState('');
  const [filter, setFilter] = useState<Filter>('all');

  const index = useMemo(
    () => searchIndex(content, position, progress),
    [content, position, progress],
  );
  const results = useMemo(() => {
    const found = searchItems(index, query);
    if (filter === 'all') return found;
    if (filter === 'unread') return found.filter((i) => !i.read && i.kind !== 'phase');
    return found.filter((i) => i.kind === filter);
  }, [index, query, filter]);

  const lastRead = useMemo(() => {
    const latest = Object.values(progress)
      .filter((p) => p.readAt)
      .sort((a, b) => (b.readAt ?? 0) - (a.readAt ?? 0))[0];
    const card = latest ? findDaily(content, latest.lessonId) : undefined;
    return card && latest?.readAt ? { card, date: toISODate(new Date(latest.readAt)) } : undefined;
  }, [content, progress]);

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

  const subtitleFor = (item: SearchItem) => {
    const kind = t(
      `learn.kind${item.kind[0].toUpperCase()}${item.kind.slice(1)}` as 'learn.kindDaily',
    );
    if (item.kind === 'phase') return `${kind} · ${item.subtitle}`;
    const month = t('learn.month', { n: item.month }).toLowerCase();
    const readAt = progress[item.id]?.readAt;
    const state = item.read
      ? readAt && item.kind === 'daily'
        ? t('learn.readOnShort', { date: fmt.short(toISODate(new Date(readAt))) })
        : t('learn.readState')
      : t('learn.unreadState');
    return `${kind} · ${month} · ${state}`;
  };

  const leadFor = (item: SearchItem) => {
    if (item.kind === 'phase') return <PhaseLead phase={item.id as Phase} />;
    const label =
      item.kind === 'daily'
        ? String(item.day)
        : item.kind === 'weekly'
          ? t('learn.weekBadge', { n: item.week })
          : undefined;
    return (
      <View style={[styles.lead, { backgroundColor: item.read ? theme.soft : theme.accent }]}>
        {label ? (
          <Txt
            variant="caption"
            color={item.read ? theme.accent : colors.onAccent}
            style={styles.leadText}>
            {label}
          </Txt>
        ) : (
          <Icon name="star.fill" size={13} color={item.read ? theme.accent : colors.onAccent} />
        )}
      </View>
    );
  };

  const shown = results.slice(0, MAX_RESULTS);
  return (
    <>
      <Stack.Screen
        options={{
          title: t('learn.archive'),
          headerLargeTitleEnabled: false,
          headerSearchBarOptions: {
            placeholder: t('learn.searchPlaceholder'),
            hideWhenScrolling: false,
            autoCapitalize: 'none',
            onChangeText: (e) => setQuery(e.nativeEvent.text),
          },
        }}
      />
      <Screen>
        <View style={styles.chips}>
          {FILTERS.map((f) => (
            <Chip
              key={f.value}
              label={t(`learn.${f.label}`)}
              selected={filter === f.value}
              onPress={() => setFilter(f.value)}
            />
          ))}
        </View>

        {query.trim() === '' ? (
          <Card style={{ gap: spacing.sm + 4 }}>
            <Txt variant="footnote">{t('learn.trySearching')}</Txt>
            <View style={styles.chips}>
              {(t('learn.suggestions', { returnObjects: true }) as string[]).map((s) => (
                <Chip key={s} label={s} onPress={() => setQuery(s)} />
              ))}
            </View>
            {lastRead ? (
              <View style={styles.lastRead}>
                <Txt variant="footnote">
                  {t('learn.lastRead')}:{' '}
                  <Txt variant="footnote" color={colors.label}>
                    {lastRead.card.title}
                  </Txt>{' '}
                  · {fmt.short(lastRead.date)}
                </Txt>
              </View>
            ) : null}
          </Card>
        ) : null}

        {results.length === 0 ? (
          <Empty symbol="magnifyingglass" text={t('learn.searchEmpty')} />
        ) : (
          <>
            <SectionTitle>
              {results.length === 1
                ? t('learn.resultOne')
                : t('learn.results', { n: results.length })}
            </SectionTitle>
            <Card style={styles.list}>
              {shown.map((item, i) => (
                <Row
                  key={`${item.kind}-${item.id}`}
                  title={item.title}
                  subtitle={subtitleFor(item)}
                  lead={leadFor(item)}
                  onPress={() => open(item)}
                  last={i === shown.length - 1}
                />
              ))}
            </Card>
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  chips: { flexDirection: 'row', flexWrap: 'wrap', gap: spacing.sm },
  list: { padding: 0, paddingHorizontal: spacing.md },
  lead: {
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leadText: { fontFamily: fontFor(700), fontVariant: ['tabular-nums'] },
  lastRead: { paddingTop: spacing.sm, borderTopWidth: 1, borderTopColor: colors.separator },
});
