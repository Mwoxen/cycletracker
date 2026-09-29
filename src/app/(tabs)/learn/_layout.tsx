import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { largeTitleScreenOptions, readingScreenOptions } from '@/ui/navigation';

export default function LearnLayout() {
  const { t } = useTranslation();
  return (
    <Stack screenOptions={largeTitleScreenOptions}>
      <Stack.Screen name="index" options={{ title: t('learn.title'), headerShown: false }} />
      <Stack.Screen name="daily/[id]" options={readingScreenOptions} />
      <Stack.Screen name="weekly/[id]" options={readingScreenOptions} />
      <Stack.Screen name="wrap/[id]" options={readingScreenOptions} />
      <Stack.Screen name="phase/[phase]" options={readingScreenOptions} />
      <Stack.Screen name="month/[month]" options={{ title: '' }} />
      <Stack.Screen name="archive" options={{ title: '' }} />
      <Stack.Screen name="overview" options={{ title: '', headerLargeTitleEnabled: false }} />
    </Stack>
  );
}
