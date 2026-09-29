// Transforms every component file the way Metro does for a release build (React Compiler on)
// and fails if the compiler's `Symbol.for("react.memo_cache_sentinel")` would resolve to anything
// but the global `Symbol`. A local binding named `Symbol` (a component, an import) turns that
// into `undefined is not a function` on the first render and crashes the app at launch.
// Jest does not run the compiler, so this is the only place the mistake is caught.
import { transformSync } from '@babel/core';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { globSync } from 'node:fs';

const require = createRequire(import.meta.url);
const files = globSync('src/**/*.tsx');
const problems = [];

for (const file of files) {
  const { code } = transformSync(readFileSync(file, 'utf8'), {
    filename: file,
    babelrc: false,
    configFile: false,
    presets: [[require.resolve('babel-preset-expo'), {}]],
    caller: {
      name: 'metro',
      platform: 'ios',
      isDev: false,
      supportsReactCompiler: true,
      supportsStaticESM: false,
    },
  });
  const sentinels = code.match(/[\w$.]*Symbol\.for\("react\.memo_cache_sentinel"\)/g) ?? [];
  const shadowed = sentinels.filter((s) => s !== 'Symbol.for("react.memo_cache_sentinel")');
  const declaresSymbol = /\b(function|const|let|var|class)\s+Symbol\b|\bSymbol\s*=\s*/.test(code);
  if (shadowed.length > 0 || (sentinels.length > 0 && declaresSymbol)) {
    problems.push(`${file}: ${shadowed[0] ?? 'local Symbol binding'} (${sentinels.length} uses)`);
  }
}

if (problems.length > 0) {
  console.error(
    'React Compiler output references a shadowed `Symbol`:\n  ' + problems.join('\n  '),
  );
  process.exit(1);
}
console.log(`React Compiler output OK (${files.length} files)`);
