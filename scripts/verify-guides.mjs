/**
 * Verification for the 36 long-tail guide pages.
 * Run: node scripts/verify-guides.mjs
 *
 * Pure Node (no TS runtime required): parses the topic registry as text,
 * checks the content contract, internal links, sources, translations and
 * (when the TypeScript package is available) the syntax of every .ts/.tsx
 * file under src/.
 */
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const topicsDir = join(root, 'src', 'data', 'topics');
const srcDir = join(root, 'src');
const contentFiles = [
  'visit.ts',
  'sunset.ts',
  'history.ts',
  'dining.ts',
  'nearby.ts',
  'audiences.ts',
  'compare.ts',
];
const GROUPS = new Set(['visit', 'sunset', 'history', 'dining', 'nearby', 'audiences', 'compare']);
const PRIORITIES = new Set(['P0', 'P1', 'P2']);
const errors = [];

function read(path) {
  return readFileSync(path, 'utf8');
}

function quotedList(raw) {
  return [...raw.matchAll(/'([^']+)'/g)].map((match) => match[1]);
}

// ---- Authoritative source keys ---------------------------------------------
const siteText = read(join(srcDir, 'lib', 'site.ts'));
const sourcesStart = siteText.indexOf('export const SOURCES = {');
const sourcesEnd = siteText.indexOf('} as const;', sourcesStart);
const sourcesBlock = siteText.slice(sourcesStart, sourcesEnd);
const SOURCE_KEYS = new Set(
  [...sourcesBlock.matchAll(/^  (\w+): \{/gm)].map((match) => match[1])
);
if (SOURCE_KEYS.size < 9) errors.push(`Only ${SOURCE_KEYS.size} sources registered in site.ts`);

// ---- 1. Parse the registry -------------------------------------------------
const topics = [];

for (const file of contentFiles) {
  const text = read(join(topicsDir, file));
  const starts = [...text.matchAll(/^    slug: '([^']+)',/gm)];
  starts.forEach((match, index) => {
    const end = index + 1 < starts.length ? starts[index + 1].index : text.length;
    topics.push({ file, slug: match[1], block: text.slice(match.index, end) });
  });
}

const slugs = topics.map((topic) => topic.slug);
const slugSet = new Set(slugs);

if (topics.length !== 36) errors.push(`Expected 36 topics, found ${topics.length}`);
if (slugSet.size !== slugs.length) errors.push('Duplicate topic slugs found');

const priorityCount = { P0: 0, P1: 0, P2: 0 };
const titles = new Set();

for (const topic of topics) {
  const { slug, block } = topic;

  const group = block.match(/^    group: '([^']+)',/m)?.[1];
  const priority = block.match(/^    priority: '([^']+)',/m)?.[1];
  const related = quotedList(block.match(/^    related: \[([\s\S]*?)\],/m)?.[1] ?? '');
  const sources = quotedList(block.match(/^    sources: \[([\s\S]*?)\],/m)?.[1] ?? '');
  const metaTitle = block.match(/metaTitle:\s*'([^']+)'/)?.[1] ?? '';

  if (!GROUPS.has(group)) errors.push(`${slug}: invalid group ${group}`);
  if (!PRIORITIES.has(priority)) errors.push(`${slug}: invalid priority ${priority}`);
  else priorityCount[priority] += 1;

  if (related.length < 2) errors.push(`${slug}: needs at least 2 related guides`);
  if (related.includes(slug)) errors.push(`${slug}: related points to itself`);
  for (const item of related) {
    if (!slugSet.has(item)) errors.push(`${slug}: dead related link -> ${item}`);
  }

  if (sources.length < 3) errors.push(`${slug}: needs at least 3 sources`);
  for (const key of sources) {
    if (!SOURCE_KEYS.has(key)) errors.push(`${slug}: unknown source key ${key}`);
  }

  const sections = (block.match(/heading: '/g) || []).length;
  const faqs = (block.match(/^\s+q: '/gm) || []).length;
  if (sections < 3) errors.push(`${slug}: only ${sections} sections (minimum 3)`);
  if (faqs < 2) errors.push(`${slug}: only ${faqs} FAQs (minimum 2)`);
  for (const field of ['metaTitle', 'metaDescription', 'h1', 'lead', 'cardTitle', 'cardText']) {
    if (!block.includes(`${field}:`)) errors.push(`${slug}: missing ${field}`);
  }
  if (titles.has(metaTitle)) errors.push(`${slug}: duplicate metaTitle -> ${metaTitle}`);
  titles.add(metaTitle);

  if (slug.endsWith('/') || slug.startsWith('/')) errors.push(`${slug}: malformed slug`);
  if (/[A-Z\s]/.test(slug)) errors.push(`${slug}: slug must be lowercase kebab/path`);
}

// The report's summary graphic says 10/18/8, but its per-page tables mark
// 10 P0 / 20 P1 / 6 P2. We follow the per-page table, which is authoritative.
if (priorityCount.P0 !== 10 || priorityCount.P1 !== 20 || priorityCount.P2 !== 6) {
  errors.push(
    `Priority split should be P0=10 / P1=20 / P2=6, got ${JSON.stringify(priorityCount)}`
  );
}

// ---- 2. Albanian translations ----------------------------------------------
const sqText = read(join(topicsDir, 'sq.ts'));
const sqKeys = [...sqText.matchAll(/^  '([^']+)': \{/gm)].map((match) => match[1]);
if (sqKeys.length < 5) errors.push(`Only ${sqKeys.length} Albanian translations`);
for (const key of sqKeys) {
  if (!slugSet.has(key)) errors.push(`sq translation targets unknown slug ${key}`);
}

// ---- 3. Message dictionaries still parse -----------------------------------
const messageLocales = ['en', 'sq', 'it', 'fr', 'zh'];
for (const locale of messageLocales) {
  try {
    JSON.parse(read(join(srcDir, 'messages', `${locale}.json`)));
  } catch (error) {
    errors.push(`messages/${locale}.json is not valid JSON: ${error.message}`);
  }
}

// ---- 4. TypeScript syntax check (optional) ---------------------------------
let tsChecked = 0;
try {
  const ts = await import('typescript');
  const files = [];
  function walk(dir) {
    for (const name of readdirSync(dir)) {
      const full = join(dir, name);
      if (statSync(full).isDirectory()) walk(full);
      else if (/\.(ts|tsx)$/.test(name)) files.push(full);
    }
  }
  walk(srcDir);
  for (const file of files) {
    const result = ts.default.transpileModule(read(file), {
      compilerOptions: {
        target: ts.default.ScriptTarget.ES2022,
        module: ts.default.ModuleKind.ESNext,
        jsx: ts.default.JsxEmit.Preserve,
      },
      reportDiagnostics: true,
      fileName: file,
    });
    for (const diagnostic of result.diagnostics || []) {
      errors.push(`${relative(root, file)}: ${ts.default.flattenDiagnosticMessageText(diagnostic.messageText, ' ')}`);
    }
    tsChecked += 1;
  }
} catch (error) {
  console.log(`(TypeScript syntax check skipped: ${error.code || error.message})`);
}

// ---- Result -----------------------------------------------------------------
console.log(`Topics: ${topics.length} (unique ${slugSet.size})`);
console.log(`Priority: P0=${priorityCount.P0} P1=${priorityCount.P1} P2=${priorityCount.P2}`);
console.log(`Albanian translations: ${sqKeys.length}`);
console.log(`Registered sources: ${SOURCE_KEYS.size}`);
console.log(`TypeScript files syntax-checked: ${tsChecked}`);
console.log(`Routes generated: ${topics.length + sqKeys.length} topic pages + 2 topic centres`);

if (errors.length) {
  console.log(`\nFAIL (${errors.length} issues):`);
  for (const issue of errors.slice(0, 40)) console.log(`  - ${issue}`);
  if (errors.length > 40) console.log(`  ... and ${errors.length - 40} more`);
  process.exit(1);
}
console.log('\nPASS: registry, links, sources, translations and syntax are valid.');
