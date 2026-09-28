import { Stack } from 'expo-router';
import { useTranslation } from 'react-i18next';

export default function HomeLayout() {
  const { t } = useTranslation();
  return (
    <Stack
      screenOptions={{
        headerLargeTitleEnabled: true,
        headerTransparent: true,
        headerBlurEffect: 'systemChromeMaterial',
      }}>
      <Stack.Screen name="index" options={{ title: t('home.title') }} />
    </Stack>
  );
}
