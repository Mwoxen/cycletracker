import { Stack, useLocalSearchParams, useRouter } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { getMonth, isDailyUnlocked, isMonthWrapUnlocked, isWeeklyUnlocked } from '@/content';
import { useProgram } from '@/hooks/use-program';
import { colors } from '@/ui/colors';
import { Card, Row, Screen, SectionTitle, Txt } from '@/ui/primitives';
import { usePhaseTheme } from '@/ui/theme';

export default function MonthScreen() {
  const { t } = useTranslation();
  const theme = usePhaseTheme();
  const router = useRouter();
  const { month: monthParam } = useLocalSearchParams<{ month: string }>();
  const m = Number(monthParam) || 1;
  const { content, position, progress } = useProgram();
  const month = getMonth(content, m);

  if (!month) {
    return (
      <>
        <Stack.Screen options={{ title: t('learn.month', { n: m }) }} />
        <Screen>
          <Card>
            <Txt>{t('learn.contentMissing')}</Txt>
          </Card>
        </Screen>
      </>
    );
  }

  const wrapUnlocked = isMonthWrapUnlocked(position, m);

  return (
    <>
      <Stack.Screen options={{ title: t('learn.month', { n: m }) }} />
      <Screen>
        <Txt variant="title">{month.theme}</Txt>
        <Txt color={colors.secondaryLabel}>{month.focus}</Txt>

        <SectionTitle>{t('learn.weekly')}</SectionTitle>
        <Card style={{ padding: 0, paddingHorizontal: 16 }}>
          {month.weekly.map((w, i) => {
            const unlocked = isWeeklyUnlocked(position, m, w.week);
            const read = !!progress[w.id]?.readAt;
            return (
              <Row
                key={w.id}
                title={w.title}
                subtitle={
                  unlocked
                    ? t('learn.week', { n: w.week })
                    : t('learn.locked', { n: (m - 1) * 30 + (w.week - 1) * 7 + 1 })
                }
                symbol={read ? 'checkmark.circle.fill' : unlocked ? 'doc.text' : 'lock.fill'}
                symbolColor={read ? colors.green : unlocked ? theme.accent : colors.tertiaryLabel}
                onPress={unlocked ? () => router.push(`/(tabs)/learn/weekly/${w.id}`) : undefined}
                last={i === month.weekly.length - 1}
              />
            );
          })}
        </Card>

        <SectionTitle>{t('learn.wrap')}</SectionTitle>
        <Card style={{ padding: 0, paddingHorizontal: 16 }}>
          <Row
            title={month.wrap.title}
            subtitle={
              wrapUnlocked
                ? progress[month.wrap.id]?.quizTotal
                  ? t('learn.bestScore', {
                      score: progress[month.wrap.id]?.quizScore,
                      total: progress[month.wrap.id]?.quizTotal,
                    })
                  : t('learn.quiz')
                : t('learn.locked', { n: m * 30 })
            }
            symbol={wrapUnlocked ? 'star.fill' : 'lock.fill'}
            symbolColor={wrapUnlocked ? colors.orange : colors.tertiaryLabel}
            onPress={
              wrapUnlocked ? () => router.push(`/(tabs)/learn/wrap/${month.wrap.id}`) : undefined
            }
            last
          />
        </Card>

        <SectionTitle>{t('learn.daily')}</SectionTitle>
        <Card style={{ padding: 0, paddingHorizontal: 16 }}>
          {month.daily.map((c, i) => {
            const unlocked = isDailyUnlocked(position, m, c.day);
            const read = !!progress[c.id]?.readAt;
            const done = !!progress[c.id]?.actionDoneAt;
            return (
              <Row
                key={c.id}
                title={c.title}
                subtitle={
                  unlocked
                    ? t('common.dayN', { n: c.day })
                    : t('learn.locked', { n: (m - 1) * 30 + c.day })
                }
                symbol={
                  done
                    ? 'checkmark.circle.fill'
                    : read
                      ? 'circle.inset.filled'
                      : unlocked
                        ? 'circle'
                        : 'lock.fill'
                }
                symbolColor={done ? colors.green : read ? theme.accent : colors.tertiaryLabel}
                onPress={unlocked ? () => router.push(`/(tabs)/learn/daily/${c.id}`) : undefined}
                last={i === month.daily.length - 1}
              />
            );
          })}
        </Card>
      </Screen>
    </>
  );
}
