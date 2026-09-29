import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet } from 'react-native';

import { PHASES, type Phase } from '@/domain/types';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { spacing } from '@/ui/colors';
import { Card, Screen, SectionTitle } from '@/ui/primitives';
import { ReadingBullets, ReadingHero } from '@/ui/reading';

function Section({ title, items }: { title: string; items: string[] }) {
  return (
    <>
      <SectionTitle style={styles.sectionTitle}>{title}</SectionTitle>
      <Card style={styles.card}>
        <ReadingBullets items={items} />
      </Card>
    </>
  );
}

export default function PhaseScreen() {
  const { t } = useTranslation();
  const { phase } = useLocalSearchParams<{ phase: string }>();
  const content = useContent();
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const key = (PHASES as string[]).includes(phase) ? (phase as Phase) : 'menstrual';
  const info = content.phases[key];

  return (
    <>
      <Stack.Screen options={{ title: info.name }} />
      <Screen>
        <ReadingHero
          kicker={t('learn.phaseLibrary')}
          title={info.name}
          meta={`${t('learn.timing')}: ${info.timing}`}
          phase={key}
        />
        {isTracker ? (
          <>
            <Section title={t('learn.whatYouCanDo')} items={info.whatYouCanDo} />
            <Section title={t('learn.whatHappens')} items={info.whatHappens} />
            <Section title={t('learn.howSheMayFeel')} items={info.howSheMayFeel} />
            <Section title={t('learn.avoid')} items={info.avoid} />
          </>
        ) : (
          <>
            <Section title={t('learn.whatHappensInBody')} items={info.whatHappens} />
            <Section title={t('learn.howYouMayFeel')} items={info.howSheMayFeel} />
            <Section title={t('learn.selfCare')} items={info.selfCare} />
            <Section title={t('learn.partnerCanDo')} items={info.whatYouCanDo} />
          </>
        )}
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  sectionTitle: { marginLeft: spacing.lg },
  card: { marginHorizontal: spacing.sm },
});
