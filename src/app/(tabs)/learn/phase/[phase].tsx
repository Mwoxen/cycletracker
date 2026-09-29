import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { PHASES, type Phase } from '@/domain/types';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { phaseColor, spacing } from '@/ui/colors';
import { Screen } from '@/ui/primitives';
import { ReadingBullets, ReadingHero, ReadingSection } from '@/ui/reading';

/** One reading page per phase: the things to do first, as a numbered list, then the background. */
export default function PhaseScreen() {
  const { t } = useTranslation();
  const { phase } = useLocalSearchParams<{ phase: string }>();
  const content = useContent();
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const key = (PHASES as string[]).includes(phase) ? (phase as Phase) : 'menstrual';
  const info = content.phases[key];
  const accent = phaseColor[key];

  return (
    <>
      <Stack.Screen options={{ title: info.name }} />
      <Screen contentContainerStyle={{ gap: spacing.lg }}>
        <ReadingHero kicker={t('learn.phaseLibrary')} title={info.name} meta={info.timing} phase={key} />
        {isTracker ? (
          <>
            <ReadingSection title={t('learn.whatYouCanDo')} accent={accent}>
              <ReadingBullets items={info.whatYouCanDo} numbered />
            </ReadingSection>
            <ReadingSection title={t('learn.whatHappens')}>
              <ReadingBullets items={info.whatHappens} />
            </ReadingSection>
            <ReadingSection title={t('learn.howSheMayFeel')}>
              <ReadingBullets items={info.howSheMayFeel} />
            </ReadingSection>
            <ReadingSection title={t('learn.avoid')}>
              <ReadingBullets items={info.avoid} />
            </ReadingSection>
          </>
        ) : (
          <>
            <ReadingSection title={t('learn.selfCare')} accent={accent}>
              <ReadingBullets items={info.selfCare} numbered />
            </ReadingSection>
            <ReadingSection title={t('learn.whatHappensInBody')}>
              <ReadingBullets items={info.whatHappens} />
            </ReadingSection>
            <ReadingSection title={t('learn.howYouMayFeel')}>
              <ReadingBullets items={info.howSheMayFeel} />
            </ReadingSection>
            <ReadingSection title={t('learn.partnerCanDo')}>
              <ReadingBullets items={info.whatYouCanDo} />
            </ReadingSection>
          </>
        )}
      </Screen>
    </>
  );
}
