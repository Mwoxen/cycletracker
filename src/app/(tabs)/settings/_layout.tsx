import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

import { useStackScreenOptions } from '@/ui/navigation';

/** The sub-screens draw their own title, so the native header only carries the back button. */
const subScreen = { title: '', headerLargeTitleEnabled: false, headerBackButtonDisplayMode: 'minimal' as const };

export default function SettingsLayout() {
  const { t } = useTranslation();
  const screenOptions = useStackScreenOptions();
  return (
    <Stack screenOptions={screenOptions}>
      <Stack.Screen name="index" options={{ title: t('settings.title'), headerShown: false }} />
      <Stack.Screen name="profile" options={subScreen} />
      <Stack.Screen name="data" options={subScreen} />
    </Stack>
  );
}
