/**
 * Renders the SVG brand assets to the PNGs Expo needs, using headless Chromium.
 *   node scripts/render-brand.mjs
 * Set CHROME to the Chromium/Chrome binary if it is not found automatically.
 */
import { execFileSync } from 'node:child_process';
import { existsSync, mkdtempSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const candidates = [
  process.env.CHROME,
  '/opt/pw-browsers/chromium_headless_shell-1194/chrome-linux/headless_shell',
  '/opt/pw-browsers/chromium-1194/chrome-linux/chrome',
  '/usr/bin/chromium',
  '/usr/bin/chromium-browser',
  '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].filter(Boolean);
const chrome = candidates.find((c) => existsSync(c));
if (!chrome) throw new Error('No Chromium found; set CHROME=/path/to/chrome');

const work = mkdtempSync(join(tmpdir(), 'brand-'));

const manrope = resolve(
  root,
  'node_modules/@expo-google-fonts/manrope/300Light/Manrope_300Light.ttf',
);

function render({ svg, size, height = size, out, background = 'transparent', scale = 1 }) {
  const html = `<!doctype html><html><head><style>
    @font-face{font-family:Manrope;font-weight:300;src:url(file://${manrope}) format('truetype')}
    html,body{margin:0;padding:0;background:${background};width:${size}px;height:${height}px;overflow:hidden}
    svg{display:block;width:${size}px;height:${height}px;transform:scale(${scale});transform-origin:center}
  </style></head><body>${readFileSync(svg, 'utf8')}</body></html>`;
  const page = join(work, `${out.split('/').pop()}.html`);
  writeFileSync(page, html);
  const shot = join(work, 'shot.png');
  execFileSync(
    chrome,
    [
      '--headless',
      '--no-sandbox',
      '--disable-gpu',
      '--hide-scrollbars',
      '--virtual-time-budget=3000',
      '--default-background-color=00000000',
      `--window-size=${size},${height}`,
      `--screenshot=${shot}`,
      `file://${page}`,
    ],
    { stdio: 'ignore' },
  );
  copyFileSync(shot, resolve(root, out));
  console.log('wrote', out);
}

// Backgrounds match the app's screen background in src/ui/colors.ts (light #EEE8EB, dark #0D0A0E).
render({
  svg: 'assets/brand/icon.svg',
  size: 1024,
  out: 'assets/images/icon.png',
  background: '#EEE8EB',
});
render({
  svg: 'assets/brand/icon-dark.svg',
  size: 1024,
  out: 'assets/images/icon-dark.png',
  background: '#0D0A0E',
});
const SPLASH = { size: 1024, height: 1400 };
render({ svg: 'assets/brand/splash.svg', ...SPLASH, out: 'assets/images/splash-icon.png' });
render({
  svg: 'assets/brand/splash-dark.svg',
  ...SPLASH,
  out: 'assets/images/splash-icon-dark.png',
});
// Layers for the in-app splash handover (src/ui/curtain.tsx), in the splash image's frame.
for (const layer of ['ring', 'heart', 'text']) {
  render({
    svg: `assets/brand/splash-${layer}.svg`,
    ...SPLASH,
    out: `assets/images/splash-${layer}.png`,
  });
  render({
    svg: `assets/brand/splash-${layer}-dark.svg`,
    ...SPLASH,
    out: `assets/images/splash-${layer}-dark.png`,
  });
}
render({
  svg: 'assets/brand/icon.svg',
  size: 64,
  out: 'assets/images/favicon.png',
  background: '#EEE8EB',
});
