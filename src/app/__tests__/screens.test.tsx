/**
 * Smoke tests that render every screen through Expo Router with the real route files in
 * src/app. They exist to catch runtime errors before a build: render loops, undefined imports,
 * hook misuse, bad props and i18n crashes. Native-only modules are mocked in src/test/jest.setup.
 */
import { render } from '@testing-library/react-native';
import { fireEvent, screen, waitFor } from 'expo-router/testing-library';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { getContent, dailyId, weeklyId, wrapId } from '@/content';
import { PHASES, type Role } from '@/domain/types';
import { addDaysISO, todayISO } from '@/engine/dates';
import { setLanguage } from '@/i18n';
import da from '@/i18n/da';
import { createSyncSnapshot, selectActivePeriods, selectSnapshotData, useStore } from '@/store';
import { encodePayload } from '@/sync/payload';
import { renderApp, withinTab } from '@/test/render-app';
import { AppErrorBoundary } from '@/ui/error-boundary';
import { pullQuoteFor } from '@/ui/reading';

/** Fixed clock so the program position and the cycle phase are the same on every run. */
const TODAY = '2026-05-10';

function freezeToday(iso: string = TODAY) {
  jest.useFakeTimers();
  jest.setSystemTime(new Date(`${iso}T12:00:00`));
}

function onboard(
  role: Role,
  programStartDate = todayISO(),
  lastPeriodStart = addDaysISO(todayISO(), -10),
) {
  useStore.getState().completeOnboarding({
    role,
    language: 'da',
    partnerName: 'Anna',
    programStartDate,
    lastPeriodStart,
    cycleLength: 28,
    periodLength: 5,
  });
}

const content = getContent('da');
const month1 = content.months[0];
const weeks = content.cycleWeeks;
const weekN = (n: number) => da.weeks.weekN.replace('{{n}}', String(n));
const upper = (s: string) => s.toUpperCase();
const homeTab = () => withinTab(da.home.title);
const learnTab = () => withinTab(da.learn.title);
const calendarTab = () => withinTab(da.calendar.title);
const settingsTab = () => withinTab(da.settings.title);
/** Waits for the tabs to mount after a navigation that replaces the root stack. */
const homeTabWhenReady = () => waitFor(() => homeTab(), { timeout: 3000 });

beforeEach(() => {
  freezeToday();
  setLanguage('da');
  useStore.getState().resetAll();
  useStore.getState().setHydrated(true);
});

afterEach(() => {
  jest.useRealTimers();
});

describe('fresh install', () => {
  it('shows onboarding when there is no profile', async () => {
    const app = await renderApp('/');
    expect(await screen.findByText(da.onboarding.welcomeTitle)).toBeTruthy();
    expect(screen.getByText(upper(da.onboarding.chooseRole))).toBeTruthy();
    expect(app.getPathname()).toBe('/onboarding');
  });

  it('completes onboarding from the screen and lands on home', async () => {
    await renderApp('/onboarding');
    await fireEvent.press(await screen.findByText(da.roles.tracker));
    await fireEvent.changeText(screen.getByPlaceholderText(da.onboarding.namePlaceholder), 'Anna');
    await fireEvent.press(screen.getByText(da.onboarding.finish));
    expect(await homeTabWhenReady()).toBeTruthy();
    expect(homeTab().getByText(da.home.todaysCardDay.replace('{{day}}', '1'))).toBeTruthy();
    expect(useStore.getState().profile?.partnerName).toBe('Anna');
    expect(useStore.getState().profile?.role).toBe('tracker');
  });
});

describe('home', () => {
  it('renders the phase card and daily card for a tracker', async () => {
    onboard('tracker');
    await renderApp('/home');
    const home = homeTab();
    // The phase card headline says what the partner needs today, e.g. "Anna har overskud i dag".
    expect(await home.findByText(/^Anna (har|er) /)).toBeTruthy();
    expect(home.getByText(da.home.todaysCardDay.replace('{{day}}', '1'))).toBeTruthy();
    expect(home.getByText(/^Næste menstruation om \d+ dage$/)).toBeTruthy();
    expect(home.getByText(month1.daily[0].title)).toBeTruthy();
    expect(home.getByText(da.home.neverSynced)).toBeTruthy();
  });

  it('renders for the user role', async () => {
    onboard('user');
    await renderApp('/home');
    const home = homeTab();
    expect(await home.findByText(/^Du (har overskud|har brug for|er på toppen)/)).toBeTruthy();
    // Her own cards: how she may feel and what she can do for herself in the current phase.
    expect(home.getByText(da.home.howYouMayFeel)).toBeTruthy();
    expect(home.getByText(da.home.selfCare)).toBeTruthy();
    expect(home.getByText(content.phases.follicular.selfCare[0])).toBeTruthy();
    // The partner's program is a compact read-only pointer, not the action card.
    expect(home.getByText(da.home.partnerLearnsToday)).toBeTruthy();
    expect(home.getByText(month1.daily[0].title)).toBeTruthy();
    expect(home.getByText(da.home.todaysCardDay.replace('{{day}}', '1'))).toBeTruthy();
    expect(home.queryByText(da.home.markActionDone)).toBeNull();
    expect(home.queryByText(da.home.weeklyRead)).toBeNull();
    expect(home.queryByText(da.home.whatYouCanDo)).toBeNull();
    expect(home.getByText(da.home.neverShared)).toBeTruthy();
  });

  it('shows a logged symptom without the partner tip for the user role', async () => {
    onboard('user');
    useStore.getState().upsertLog(todayISO(), { symptoms: ['cramps'] });
    await renderApp('/home');
    const home = homeTab();
    expect(await home.findByText(content.symptomTips.cramps.what)).toBeTruthy();
    expect(home.queryByText(content.symptomTips.cramps.doThis)).toBeNull();
  });

  it('renders without cycle data', async () => {
    useStore.getState().completeOnboarding({
      role: 'tracker',
      language: 'da',
      partnerName: 'Anna',
      programStartDate: todayISO(),
    });
    await renderApp('/home');
    expect(await homeTab().findByText(da.home.noDataTitle)).toBeTruthy();
  });

  it('marks the daily action as done', async () => {
    onboard('tracker');
    await renderApp('/home');
    const home = homeTab();
    await fireEvent.press(await home.findByText(da.home.markActionDone));
    expect(useStore.getState().progress[dailyId(1, 1)]?.actionDoneAt).toBeDefined();
    expect(await home.findByText(da.home.actionDone)).toBeTruthy();
  });

  it('shows a logged symptom with the tip for the partner', async () => {
    onboard('tracker');
    useStore.getState().upsertLog(todayISO(), { symptoms: ['cramps'] });
    await renderApp('/home');
    expect(await homeTab().findByText(content.symptomTips.cramps.doThis)).toBeTruthy();
  });

  it('shows pairing rows once a partner is synced', async () => {
    onboard('tracker');
    useStore.getState().setPairing({
      partnerDeviceId: 'partner',
      partnerName: 'Bo',
      lastSyncAt: Date.now() - 60_000,
    });
    await renderApp('/home');
    const home = homeTab();
    expect(await home.findByText(/^Sidst synkroniseret /)).toBeTruthy();
    expect(home.queryByText(da.home.neverSynced)).toBeNull();
    expect(settingsTab().getByText(da.sync.pairedWith.replace('{{name}}', 'Bo'))).toBeTruthy();
  });
});

describe('tabs', () => {
  it('renders learn', async () => {
    onboard('tracker');
    await renderApp('/learn');
    const learn = learnTab();
    expect(await learn.findByText(da.learn.catchUp)).toBeTruthy();
    expect(learn.getByText(month1.daily[0].title)).toBeTruthy();
    expect(learn.getByText(upper(da.learn.phaseLibrary))).toBeTruthy();
    expect(
      learn.getByText(da.learn.subtitle.replace('{{day}}', '1').replace('{{month}}', '1')),
    ).toBeTruthy();
    expect(learn.getByText(da.learn.stats.read)).toBeTruthy();
    expect(learn.getByText(da.learn.todaysCard)).toBeTruthy();
    // Today's card and this week's read are unread, so the catch-up list is never empty on day 1.
    expect(learn.getByText('2 ulæste')).toBeTruthy();
  });

  it('renders learn for the user role without the partner stats and lists', async () => {
    onboard('user');
    await renderApp('/learn');
    const learn = learnTab();
    expect(await learn.findByText(upper(da.learn.partnerProgram))).toBeTruthy();
    expect(learn.getByText(da.learn.subtitleUser)).toBeTruthy();
    expect(learn.getByText(upper(da.learn.phaseLibrary))).toBeTruthy();
    expect(
      learn.getByText(da.learn.partnerTodayCard.replace('{{title}}', month1.daily[0].title)),
    ).toBeTruthy();
    expect(
      learn.getByText(da.learn.monthTheme.replace('{{n}}', '1').replace('{{theme}}', month1.theme)),
    ).toBeTruthy();
    expect(learn.queryByText(da.learn.stats.read)).toBeNull();
    expect(learn.queryByText(da.learn.stats.done)).toBeNull();
    expect(learn.queryByText(upper(da.learn.today))).toBeNull();
    expect(learn.queryByText(da.learn.catchUp)).toBeNull();
    expect(learn.queryByText(da.learn.archive)).toBeNull();
    expect(learn.queryByText(da.learn.overview)).toBeNull();
  });

  it('renders calendar with stacked months and shows earlier ones on demand', async () => {
    onboard('tracker');
    await renderApp('/calendar');
    const calendar = calendarTab();
    expect(await calendar.findByText(da.calendar.period)).toBeTruthy();
    expect(calendar.getByText(da.calendar.predictedPeriod)).toBeTruthy();
    // Cycle day 11 (last period started 10 days ago) and the predicted next start.
    expect(calendar.getByText(/^Cyklusdag 11 · næste menstruation /)).toBeTruthy();
    // The current month plus the next two are stacked; no earlier month yet.
    expect(calendar.getByText('maj 2026')).toBeTruthy();
    expect(calendar.getByText('juni 2026')).toBeTruthy();
    expect(calendar.getByText('juli 2026')).toBeTruthy();
    expect(calendar.queryByText('april 2026')).toBeNull();
    await fireEvent.press(calendar.getByText(da.calendar.showEarlier));
    expect(await calendar.findByText('februar 2026')).toBeTruthy();
    expect(calendar.getByText('april 2026')).toBeTruthy();
  });

  it("renders settings with the cycle weeks and stores the couple's own focus", async () => {
    onboard('tracker');
    await renderApp('/settings');
    const settings = settingsTab();
    expect(await settings.findByText(upper(da.weeks.section))).toBeTruthy();
    expect(settings.getByText(weekN(3))).toBeTruthy();
    expect(settings.getByText(weeks[2].title)).toBeTruthy();
    const inputs = settings.getAllByPlaceholderText(da.weeks.ownFocusPlaceholder);
    expect(inputs).toHaveLength(4);
    await fireEvent.changeText(inputs[1], 'Mere tid sammen');
    await fireEvent(inputs[1], 'endEditing');
    expect(useStore.getState().weekFocus['2']).toMatchObject({ week: 2, text: 'Mere tid sammen' });
    expect(settings.getByText(da.settings.cycleWeekReminder)).toBeTruthy();
    const cycleWeekSwitch = settings.getAllByRole('switch')[3];
    await fireEvent(cycleWeekSwitch, 'valueChange', false);
    expect(useStore.getState().settings.reminders.cycleWeek).toBe(false);
  });

  it('renders settings and switches language', async () => {
    onboard('tracker');
    await renderApp('/settings');
    const settings = settingsTab();
    expect(await settings.findByText(upper(da.settings.profile))).toBeTruthy();
    await fireEvent.press(settings.getByText(da.settings.languageNames.en));
    expect(useStore.getState().profile?.language).toBe('en');
    // The root layout follows the profile language, so the UI re-renders in English.
    expect(await settings.findByText('PROFILE')).toBeTruthy();
  });

  it('lets the user pick a light, dark or system appearance', async () => {
    onboard('tracker');
    await renderApp('/settings');
    const settings = settingsTab();
    await fireEvent.press(await settings.findByText(da.settings.appearanceNames.dark));
    expect(useStore.getState().settings.appearance).toBe('dark');
    await fireEvent.press(settings.getByText(da.settings.appearanceNames.system));
    expect(useStore.getState().settings.appearance).toBe('system');
  });
});

describe('cycle weeks', () => {
  /** Cycle day 4: week 1 of the cycle that started three days ago. */
  const startThreeDaysAgo = () => addDaysISO(TODAY, -3);

  it('shows the current week on the calendar and ticks an action for the partner', async () => {
    onboard('tracker', todayISO(), startThreeDaysAgo());
    await renderApp('/calendar');
    const calendar = calendarTab();
    // ISO week 19 of 2026, cycle week 1, days 1-7.
    expect(await calendar.findByText('Uge 19 · Cyklusuge 1 · dag 1–7')).toBeTruthy();
    expect(calendar.getByText(weeks[0].title)).toBeTruthy();
    expect(calendar.getByText(weeks[0].why)).toBeTruthy();
    expect(calendar.getAllByRole('checkbox')).toHaveLength(3);
    expect(calendar.queryByText(weeks[0].partnerFocus)).toBeNull();
    await fireEvent.press(calendar.getByText(weeks[0].actions[1]));
    expect(useStore.getState().weekActionsDone[startThreeDaysAgo()]).toEqual({ '1': [1] });
    await fireEvent.press(calendar.getByText(weeks[0].actions[1]));
    expect(useStore.getState().weekActionsDone[startThreeDaysAgo()]).toEqual({ '1': [] });
    // The legend is still there, under the week focus.
    expect(calendar.getByText(da.calendar.predictedPeriod)).toBeTruthy();
  });

  it("shows the couple's own focus on the card", async () => {
    onboard('tracker', todayISO(), startThreeDaysAgo());
    useStore.getState().setWeekFocus(1, 'Ro om aftenen');
    await renderApp('/calendar');
    expect(
      await calendarTab().findByText(da.weeks.ownFocus.replace('{{text}}', 'Ro om aftenen')),
    ).toBeTruthy();
  });

  it('switches the card to another week from the strip', async () => {
    onboard('tracker', todayISO(), startThreeDaysAgo());
    await renderApp('/calendar');
    const calendar = calendarTab();
    await calendar.findByText(weeks[0].title);
    await fireEvent.press(calendar.getByLabelText(weekN(2)));
    expect(await calendar.findByText(weeks[1].title)).toBeTruthy();
    expect(calendar.getByText('Uge 20 · Cyklusuge 2 · dag 8–14')).toBeTruthy();
    // Week 2 starts on cycle day 8, four days from day 4: no checkboxes, only the timing.
    expect(calendar.getByText(da.weeks.comingIn.replace('{{n}}', '4'))).toBeTruthy();
    expect(calendar.queryAllByRole('checkbox')).toHaveLength(0);
    expect(calendar.getByText(weeks[1].actions[0])).toBeTruthy();
    await fireEvent.press(calendar.getByLabelText(weekN(1)));
    expect(await calendar.findAllByRole('checkbox')).toHaveLength(3);
  });

  it('shows a past week with its day range', async () => {
    onboard('tracker'); // cycle day 11: week 2
    await renderApp('/calendar');
    const calendar = calendarTab();
    await calendar.findByText(weeks[1].title);
    await fireEvent.press(calendar.getByLabelText(weekN(1)));
    expect(
      await calendar.findByText(da.weeks.wasDays.replace('{{from}}', '1').replace('{{to}}', '7')),
    ).toBeTruthy();
  });

  it('shows what the partner focuses on for the user role, without checkboxes', async () => {
    onboard('user', todayISO(), startThreeDaysAgo());
    await renderApp('/calendar');
    const calendar = calendarTab();
    expect(await calendar.findByText(weeks[0].partnerFocus)).toBeTruthy();
    expect(calendar.getByText(weeks[0].title)).toBeTruthy();
    expect(calendar.queryAllByRole('checkbox')).toHaveLength(0);
    expect(calendar.queryByText(weeks[0].actions[0])).toBeNull();
  });

  it('hides the week focus without cycle data', async () => {
    useStore.getState().completeOnboarding({
      role: 'tracker',
      language: 'da',
      partnerName: 'Anna',
      programStartDate: todayISO(),
    });
    await renderApp('/calendar');
    const calendar = calendarTab();
    expect(await calendar.findByText(da.calendar.predictedPeriod)).toBeTruthy();
    expect(calendar.queryByText(weeks[0].title)).toBeNull();
  });

  it.each(['tracker', 'user'] as const)('links home to the calendar for the %s', async (role) => {
    onboard(role); // cycle day 11: week 2
    const app = await renderApp('/home');
    const home = homeTab();
    const row = da.weeks.homeRow.replace('{{n}}', '2').replace('{{title}}', weeks[1].title);
    await fireEvent.press(await home.findByText(row));
    expect(app.getPathname()).toBe('/calendar');
  });
});

describe('learn sub-screens', () => {
  it('renders a daily card and marks it read', async () => {
    onboard('tracker');
    const id = dailyId(1, 1);
    await renderApp(`/learn/daily/${id}`);
    const learn = learnTab();
    expect(await learn.findByText(month1.daily[0].insight)).toBeTruthy();
    // Hero kicker: today's card with its phase tags; the card id caption is gone.
    expect(
      learn.getByText(new RegExp(`^${upper(da.home.todaysCardDay.replace('{{day}}', '1'))}`)),
    ).toBeTruthy();
    expect(learn.queryByText(id)).toBeNull();
    expect(learn.getByText(upper(da.home.action))).toBeTruthy();
    // Day 2 is still locked on day 1, so there is no "tomorrow" row yet.
    expect(learn.queryByText(upper(da.reading.tomorrow))).toBeNull();
    expect(learn.queryByText(month1.daily[1].title)).toBeNull();
    expect(useStore.getState().progress[id]?.readAt).toBeDefined();
  });

  it('links to the next card once it is unlocked', async () => {
    onboard('tracker', addDaysISO(TODAY, -200));
    // Day 201 is month 7, day 21: day 20 is an earlier card whose successor is unlocked.
    const month7 = content.months[6];
    const app = await renderApp(`/learn/daily/${dailyId(7, 20)}`);
    const learn = learnTab();
    expect(await learn.findByText(upper(da.reading.tomorrow))).toBeTruthy();
    const next = month7.daily.find((c) => c.day === 21)!;
    await fireEvent.press(learn.getByText(next.title));
    expect(app.getPathname()).toBe(`/learn/daily/${next.id}`);
    expect(await learn.findByText(next.insight)).toBeTruthy();
  });

  it('opens the daily card inside the home tab so Back returns to Home', async () => {
    onboard('tracker');
    const id = content.months[0].daily[0].id;
    await renderApp(`/home/daily/${id}`);
    // The title appears both on the Home preview and on the pushed card screen.
    expect((await screen.findAllByText(content.months[0].daily[0].title)).length).toBeGreaterThan(
      1,
    );
  });

  it('renders a weekly read', async () => {
    onboard('tracker');
    await renderApp(`/learn/weekly/${weeklyId(1, 1)}`);
    const learn = learnTab();
    const read = month1.weekly[0];
    expect(await learn.findByText(read.body[0])).toBeTruthy();
    // The conversation card and, for a long read, one pull quote lifted from the body.
    expect(learn.getByText(upper(da.learn.conversationQuestion))).toBeTruthy();
    expect(learn.getByText(read.conversationQuestion)).toBeTruthy();
    const quote = pullQuoteFor(read.body);
    expect(quote).toBeDefined();
    expect(learn.getByText(quote!)).toBeTruthy();
    expect(learn.getByTestId('pull-quote')).toBeTruthy();
    // Week 2 is locked on day 1.
    expect(learn.queryByText(upper(da.reading.nextWeek))).toBeNull();
  });

  it('renders a monthly wrap and plays the quiz', async () => {
    onboard('tracker');
    await renderApp(`/learn/wrap/${wrapId(1)}`);
    const learn = learnTab();
    expect(await learn.findByText(month1.wrap.summary[0])).toBeTruthy();
    await fireEvent.press(learn.getByText(da.learn.startQuiz));
    const [first] = month1.wrap.quiz;
    expect(await learn.findByText(first.question)).toBeTruthy();
    await fireEvent.press(learn.getByText(first.options[first.correctIndex]));
    expect(await learn.findByText(da.learn.correct)).toBeTruthy();
  });

  it.each(PHASES)('renders the %s phase', async (phase) => {
    onboard('tracker');
    await renderApp(`/learn/phase/${phase}`);
    const learn = learnTab();
    expect(await learn.findByText(content.phases[phase].avoid[0])).toBeTruthy();
    expect(learn.getByText(upper(da.learn.avoid))).toBeTruthy();
  });

  it('renders the phase page for the user role with self-care and without avoid', async () => {
    onboard('user');
    await renderApp('/learn/phase/luteal');
    const learn = learnTab();
    expect(await learn.findByText(upper(da.learn.selfCare))).toBeTruthy();
    expect(learn.getByText(content.phases.luteal.selfCare[0])).toBeTruthy();
    expect(learn.getByText(upper(da.learn.partnerCanDo))).toBeTruthy();
    expect(learn.getByText(upper(da.learn.howYouMayFeel))).toBeTruthy();
    expect(learn.queryByText(upper(da.learn.avoid))).toBeNull();
    expect(learn.queryByText(content.phases.luteal.avoid[0])).toBeNull();
  });

  it('renders a daily card read-only for the user role', async () => {
    onboard('user');
    const id = dailyId(1, 1);
    await renderApp(`/learn/daily/${id}`);
    const learn = learnTab();
    expect(await learn.findByText(month1.daily[0].insight)).toBeTruthy();
    expect(learn.getByText(new RegExp(`^${da.learn.writtenForPartner} · `))).toBeTruthy();
    expect(learn.queryByText(da.home.markActionDone)).toBeNull();
    expect(learn.queryByText(upper(da.home.action))).toBeNull();
    expect(useStore.getState().progress[id]?.readAt).toBeUndefined();
  });

  it('renders a monthly wrap without the quiz for the user role', async () => {
    onboard('user');
    await renderApp(`/learn/wrap/${wrapId(1)}`);
    const learn = learnTab();
    expect(await learn.findByText(month1.wrap.summary[0])).toBeTruthy();
    expect(learn.getByText(new RegExp(`^${da.learn.writtenForPartner} · `))).toBeTruthy();
    expect(learn.queryByText(da.learn.startQuiz)).toBeNull();
  });

  it('renders a program month', async () => {
    onboard('tracker');
    await renderApp('/learn/month/1');
    const learn = learnTab();
    expect(await learn.findByText(month1.theme)).toBeTruthy();
    expect(learn.getByText(upper(da.learn.daily))).toBeTruthy();
    expect(learn.getAllByText(month1.daily[month1.daily.length - 1].title)).toHaveLength(1);
  });

  it('renders the archive', async () => {
    onboard('tracker');
    await renderApp('/learn/archive');
    const learn = learnTab();
    const phaseRows = await learn.findAllByText(new RegExp(`^${da.learn.kindPhase} · `));
    expect(phaseRows).toHaveLength(PHASES.length);
  });

  it('renders the overview', async () => {
    onboard('tracker');
    useStore.getState().upsertLog(todayISO(), { symptoms: ['cramps'], mood: 'low' });
    await renderApp('/learn/overview');
    const learn = learnTab();
    expect(await learn.findByText(upper(da.learn.yearSummary))).toBeTruthy();
    expect(learn.getByText(content.symptomTips.cramps.doThis)).toBeTruthy();
  });
});

describe('sheets', () => {
  it('renders the log sheet and toggles a period', async () => {
    onboard('tracker');
    const today = todayISO();
    await renderApp(`/log/${today}`);
    expect(await screen.findByText(da.log.periodStartsToday)).toBeTruthy();
    const before = selectActivePeriods(useStore.getState()).length;
    const [startSwitch] = screen.getAllByRole('switch');
    await fireEvent(startSwitch, 'valueChange', true);
    const periods = selectActivePeriods(useStore.getState());
    expect(periods).toHaveLength(before + 1);
    expect(periods.some((p) => p.startDate === today)).toBe(true);
    await fireEvent.press(screen.getByText(da.log.symptomNames.cramps));
    expect(Object.values(useStore.getState().logs)[0]?.symptoms).toEqual(['cramps']);
  });

  it('renders the share sheet', async () => {
    onboard('user');
    await renderApp('/share');
    expect(await screen.findByText(da.sync.shareTitle)).toBeTruthy();
    expect(screen.getByText(da.sync.sendLink)).toBeTruthy();
  });

  it('renders the import sheet without a payload', async () => {
    onboard('tracker');
    await renderApp('/import');
    expect(await screen.findByText(da.sync.importInvalid)).toBeTruthy();
  });

  it('renders the import sheet with a partner payload and imports it', async () => {
    onboard('tracker');
    const partner = {
      ...selectSnapshotData(useStore.getState()),
      periods: { p1: { id: 'p1', startDate: addDaysISO(todayISO(), -3), updatedAt: 5 } },
      logs: {},
    };
    const payload = encodePayload(createSyncSnapshot(partner, 'partner-device'));
    await renderApp(`/import?d=${payload}`);
    expect(await screen.findByText(da.sync.importUnknownSender)).toBeTruthy();
    await fireEvent.press(screen.getByText(da.sync.importButton));
    expect(await screen.findByText(da.sync.importDone)).toBeTruthy();
    expect(useStore.getState().periods.p1).toBeDefined();
    expect(useStore.getState().pairing.partnerDeviceId).toBe('partner-device');
  });

  it('renders the scan sheet', async () => {
    onboard('tracker');
    await renderApp('/scan');
    expect(await screen.findAllByText(da.sync.scanTitle)).toHaveLength(2); // title and button
    expect(screen.getByText(da.sync.pasteLink)).toBeTruthy();
  });
});

describe('later in the program', () => {
  it('renders month 2 content 40 days after the start', async () => {
    onboard('tracker', addDaysISO(TODAY, -40));
    await renderApp('/home');
    // Day 41 is month 2, day 11.
    const card = content.months[1].daily.find((c) => c.day === 11)!;
    expect(await homeTab().findByText(card.title)).toBeTruthy();
  });

  it('renders month 7 and the catch-up list 200 days after the start', async () => {
    onboard('tracker', addDaysISO(TODAY, -200));
    await renderApp('/learn');
    const learn = learnTab();
    // Day 201 is month 7, day 21: everything before it is unread.
    expect(await learn.findByText(/^\d+ ulæste$/)).toBeTruthy();
    expect(learn.getByText(content.months[6].daily.find((c) => c.day === 21)!.title)).toBeTruthy();
    // The oldest unread item is the month 1 week 1 read.
    await fireEvent.press(learn.getByText(da.learn.catchUp));
    expect(await learn.findByText(month1.weekly[0].body[0])).toBeTruthy();
  });

  it('renders the month screen for month 7', async () => {
    onboard('tracker', addDaysISO(TODAY, -200));
    await renderApp('/learn/month/7');
    expect(await learnTab().findByText(content.months[6].theme)).toBeTruthy();
  });

  it('says the program is completed after day 360', async () => {
    onboard('tracker', addDaysISO(TODAY, -400));
    await renderApp('/home');
    expect(await homeTab().findByText(/gennemført hele årsprogrammet/)).toBeTruthy();
    const last = content.months[11].daily.find((c) => c.day === 30)!;
    expect(homeTab().queryByText(last.title)).toBeNull();
  });

  it('renders home before the program has started', async () => {
    onboard('tracker', addDaysISO(TODAY, 5));
    await renderApp('/home');
    expect(await homeTab().findByText(/^Programmet starter/)).toBeTruthy();
  });
});

describe('error boundary', () => {
  const metrics = {
    frame: { x: 0, y: 0, width: 390, height: 844 },
    insets: { top: 47, right: 0, bottom: 34, left: 0 },
  };

  it('shows the retry button', async () => {
    const retry = jest.fn(async () => undefined);
    await render(
      <SafeAreaProvider initialMetrics={metrics}>
        <AppErrorBoundary error={new Error('boom')} retry={retry} />
      </SafeAreaProvider>,
    );
    expect(screen.getByText(da.error.title)).toBeTruthy();
    expect(screen.getByText('boom')).toBeTruthy();
    await fireEvent.press(screen.getByText(da.error.retry));
    expect(retry).toHaveBeenCalled();
  });

  it('catches a screen that throws and offers retry', async () => {
    onboard('tracker');
    // React reports the caught error through console.error; that is the point of this test.
    (console.error as jest.Mock).mockImplementation(() => undefined);
    function Boom(): null {
      throw new Error('boom from screen');
    }
    await renderApp('/boom', { boom: Boom });
    expect(await screen.findByText(da.error.title)).toBeTruthy();
    expect(screen.getByText('boom from screen')).toBeTruthy();
    expect(screen.getByText(da.error.retry)).toBeTruthy();
  });
});
