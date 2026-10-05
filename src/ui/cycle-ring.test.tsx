import { render } from '@testing-library/react-native';

import type { DayStatus } from '@/engine/cycle';
import { CycleRing } from '@/ui/cycle-ring';

const day = (cycleDay: number, cycleLength = 28): DayStatus => ({
  date: '2026-10-05',
  cycleDay,
  phase: 'follicular',
  isLoggedPeriod: false,
  isPredictedPeriod: false,
  isFertile: false,
  isOvulation: false,
  isPms: false,
  cycleStart: '2026-09-24',
  cycleLength,
});

describe('CycleRing', () => {
  it('draws one segment per cycle day, the future at low opacity', async () => {
    const screen = await render(<CycleRing today={day(12)} periodLength={5} lutealLength={14} />);
    const segments = screen.getAllByTestId(/^ring-segment-/);
    expect(segments).toHaveLength(28);
    expect(screen.getByTestId('ring-segment-12').props.opacity).toBe(1);
    expect(screen.getByTestId('ring-segment-13').props.opacity).toBeLessThan(0.5);
  });

  it('grows past the expected length when the cycle runs late', async () => {
    const screen = await render(<CycleRing today={day(31)} periodLength={5} lutealLength={14} />);
    expect(screen.getAllByTestId(/^ring-segment-/)).toHaveLength(31);
  });

  it('marks the fertile window, ovulation, logged days and today', async () => {
    const screen = await render(
      <CycleRing
        today={day(12)}
        periodLength={5}
        lutealLength={14}
        fertile={{ from: 9, to: 15 }}
        ovulationDay={14}
        loggedDays={[1, 2, 40]}
        label="Cyklusdag 12"
        phaseName="Follikelfasen"
      />,
    );
    expect(screen.getByTestId('ring-fertile')).toBeTruthy();
    expect(screen.getByTestId('ring-ovulation')).toBeTruthy();
    expect(screen.getAllByTestId(/^ring-logged-/)).toHaveLength(2);
    expect(screen.getByTestId('ring-today')).toBeTruthy();
    expect(screen.getByText('CYKLUSDAG 12')).toBeTruthy();
    expect(screen.getByText('Follikelfasen')).toBeTruthy();
  });

  it('draws no fertile markers without them', async () => {
    const screen = await render(<CycleRing today={day(3)} periodLength={5} lutealLength={14} />);
    expect(screen.queryByTestId('ring-fertile')).toBeNull();
    expect(screen.queryByTestId('ring-ovulation')).toBeNull();
  });
});
