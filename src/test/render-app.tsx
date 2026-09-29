/**
 * Renders the real app routes from src/app through Expo Router.
 *
 * `@testing-library/react-native` 14 made `render` asynchronous, while `renderRouter` in this
 * expo-router version still expects a synchronous result and attaches its route helpers to the
 * returned Promise. This helper awaits the render and re-attaches the helpers to the result.
 */
import { renderRouter, screen, within, type RenderResult } from 'expo-router/testing-library';
import type { ComponentType } from 'react';

export const APP_DIR = 'src/app';

type RouterHelpers = {
  getPathname(): string;
  getSegments(): string[];
  getSearchParams(): Record<string, string | string[]>;
  getPathnameWithParams(): string;
};

export type AppRender = RenderResult & RouterHelpers;

/** Extra or replaced route files, keyed like `renderRouter`'s in-memory form (`boom`, `a/b`). */
export type RouteOverrides = Record<string, ComponentType<object>>;

export async function renderApp(
  initialUrl: string,
  overrides?: RouteOverrides,
): Promise<AppRender> {
  const context = overrides ? { appDir: APP_DIR, overrides } : APP_DIR;
  const pending = renderRouter(context, { initialUrl }) as unknown as Promise<RenderResult> &
    RouterHelpers;
  const result = await pending;
  return Object.assign(result, {
    getPathname: () => pending.getPathname(),
    getSegments: () => pending.getSegments(),
    getSearchParams: () => pending.getSearchParams(),
    getPathnameWithParams: () => pending.getPathnameWithParams(),
  });
}

/**
 * Queries scoped to one native tab. `NativeTabs` keeps every tab mounted (as it does on device),
 * so unscoped text queries find the same card title on both Home and Learn.
 */
export function withinTab(title: string) {
  const [host] = screen.container.queryAll(
    (node) => node.type === 'RNSTabsScreenIOS' && node.props.title === title,
  );
  if (!host) throw new Error(`No native tab titled "${title}" is rendered`);
  return within(host);
}
