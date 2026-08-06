// GOV.UK replaced "16 weeks" with "usually within 12 weeks" in Dec 2024, and
// HMCTS Family Court Statistics (Jan-Mar 2026) measure a 5-week mean and ~2
// weeks for clean digital applications. Bring the stragglers into line with
// /probate and the how-long article, which were corrected already.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REPS = [
  ['12-16 weeks', 'usually within 12 weeks'],
  ['12 to 16 weeks', 'usually within 12 weeks'],
  ['8 to 16 weeks from application', 'usually within 12 weeks of applying'],
  ['6 to 18 months', '6 to 12 months'],
  ['current processing times are usually within 12 weeks', 'the Probate Registry usually issues the grant within 12 weeks'],
];

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}

let total = 0;
for (const file of walk('src')) {
  const before = readFileSync(file, 'utf8');
  let after = before;
  let n = 0;
  for (const [find, repl] of REPS) {
    if (!after.includes(find)) continue;
    n += after.split(find).length - 1;
    after = after.split(find).join(repl);
  }
  if (n) {
    writeFileSync(file, after);
    console.log(`${n}x  ${file}`);
    total += n;
  }
}
console.log(`\nTotal probate-timing replacements: ${total}`);
