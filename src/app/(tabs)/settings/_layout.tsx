import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { largeTitleScreenOptions } from '@/ui/navigation';

export default function SettingsLayout() {
  const { t } = useTranslation();
  return (
    <Stack screenOptions={largeTitleScreenOptions}>
      <Stack.Screen name="index" options={{ title: t('settings.title'), headerShown: false }} />
    </Stack>
  );
}
