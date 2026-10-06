import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { readingScreenOptions, useStackScreenOptions } from '@/ui/navigation';

/** A deep link (a tapped notification) into a card keeps Home underneath, so Back returns to it. */
export const unstable_settings = { initialRouteName: 'index' };

export default function HomeLayout() {
  const { t } = useTranslation();
  const screenOptions = useStackScreenOptions();
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" options={{ title: t('home.title'), headerShown: false }} />
      <Stack.Screen name="daily/[id]" options={readingScreenOptions} />
      <Stack.Screen name="weekly/[id]" options={readingScreenOptions} />
      <Stack.Screen name="phase/[phase]" options={readingScreenOptions} />
    </Stack>
  );
}
