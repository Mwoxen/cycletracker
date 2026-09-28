import { useRouter } from 'expo-router';

import { useToday } from '@/hooks/use-today';
import { Legend, MonthGrid } from '@/ui/month-grid';
import { Screen } from '@/ui/primitives';

export default function CalendarScreen() {
  const router = useRouter();
  const today = useToday();
  return (
    <Screen>
      <MonthGrid today={today} onSelectDay={(date) => router.push(`/log/${date}`)} />
      <Legend />
    </Screen>
  );
}
