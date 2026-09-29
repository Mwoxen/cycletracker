import { Stack, useLocalSearchParams } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';

import { PHASES, type Phase } from '@/domain/types';
import { useContent } from '@/hooks/use-program';
import { useStore } from '@/store/store';
import { colors, phaseColor, phaseSymbol, spacing } from '@/ui/colors';
import { Bullets, Card, Screen, SectionTitle, Icon, Txt } from '@/ui/primitives';

import type { SFSymbol } from 'sf-symbols-typescript';

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
        <View style={styles.header}>
          <View style={[styles.icon, { backgroundColor: phaseColor[key] }]}>
            <Icon name={phaseSymbol[key] as SFSymbol} size={26} color={colors.white} />
          </View>
          <View style={{ flex: 1 }}>
            <Txt variant="title">{info.name}</Txt>
            <Txt variant="footnote">
              {t('learn.timing')}: {info.timing}
            </Txt>
          </View>
        </View>

        {isTracker ? (
          <>
            <SectionTitle>{t('learn.whatYouCanDo')}</SectionTitle>
            <Card>
              <Bullets items={info.whatYouCanDo} />
            </Card>
          </>
        ) : null}

        <SectionTitle>{t('learn.whatHappens')}</SectionTitle>
        <Card>
          <Bullets items={info.whatHappens} />
        </Card>

        <SectionTitle>{t('learn.howSheMayFeel')}</SectionTitle>
        <Card>
          <Bullets items={info.howSheMayFeel} />
        </Card>

        {!isTracker ? (
          <>
            <SectionTitle>{t('learn.whatYouCanDo')}</SectionTitle>
            <Card>
              <Bullets items={info.whatYouCanDo} />
            </Card>
          </>
        ) : null}

        <SectionTitle>{t('learn.avoid')}</SectionTitle>
        <Card>
          <Bullets items={info.avoid} />
        </Card>
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', gap: spacing.md },
  icon: { width: 52, height: 52, borderRadius: 26, alignItems: 'center', justifyContent: 'center' },
});
