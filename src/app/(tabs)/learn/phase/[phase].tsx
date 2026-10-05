import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { View } from 'react-native';

import { PHASES, type Phase } from '@/domain/types';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { phaseColor, spacing } from '@/ui/colors';
import { Screen } from '@/ui/primitives';
import {
  ReadingBullets,
  ReadingHero,
  ReadingProgressBar,
  ReadingSection,
  useReadingProgress,
} from '@/ui/reading';

/** One reading page per phase, in the daily card's style: hero, then sections on the background. */
export default function PhaseScreen() {
  const { t } = useTranslation();
  const { phase } = useLocalSearchParams<{ phase: string }>();
  const content = useContent();
  const isTracker = useStore((s) => s.profile?.role === 'tracker');
  const { progress, onScroll } = useReadingProgress();
  const key = (PHASES as string[]).includes(phase) ? (phase as Phase) : 'menstrual';
  const info = content.phases[key];
  const her = content.phasesForHer[key];
  const accent = phaseColor[key];

  const sections: { title: string; items: string[]; accent?: typeof accent }[] = isTracker
    ? [
        { title: t('learn.whatYouCanDo'), items: info.whatYouCanDo, accent },
        { title: t('learn.whatHappens'), items: info.whatHappens },
        { title: t('learn.howSheMayFeel'), items: info.howSheMayFeel },
        { title: t('learn.avoid'), items: info.avoid },
      ]
    : [
        { title: t('learn.selfCare'), items: info.selfCare, accent },
        { title: t('learn.whatHappensInBody'), items: her.whatHappens },
        { title: t('learn.howYouMayFeel'), items: her.howYouMayFeel },
        { title: t('learn.partnerCanDo'), items: her.partnerCanDo },
      ];

  return (
    <>
      <Stack.Screen options={{ title: info.name }} />
      <View style={{ flex: 1 }}>
        <Screen
          onScroll={onScroll}
          scrollEventThrottle={32}
          contentContainerStyle={{ gap: spacing.lg }}>
          <ReadingHero
            kicker={t('learn.phaseLibrary')}
            title={info.name}
            meta={info.timing}
            phase={key}
          />
          {sections.map((section) => (
            <ReadingSection key={section.title} title={section.title} accent={section.accent}>
              <ReadingBullets items={section.items} />
            </ReadingSection>
          ))}
        </Screen>
        <ReadingProgressBar progress={progress} />
      </View>
    </>
  );
}
