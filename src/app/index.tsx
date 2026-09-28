import { Redirect } from 'expo-router';

import { useStore } from '@/store/store';

export default function Index() {
  const profile = useStore((s) => s.profile);
  return <Redirect href={profile ? '/(tabs)/home' : '/onboarding'} />;
}
