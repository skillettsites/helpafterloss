// The headline Royal Mail redirection prices (£45/£66.50/£95) are confirmed by
// two independent sources, but the concession rate could not be verified:
// royalmail.com returns 403 to automated checks and secondary sources disagree
// (£22.50 vs £24.50). Rather than print a figure we cannot stand behind, point
// people at the concession scheme without quoting a price.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REPS = [
  [
    'Concession rates start at £22.50 if you receive Universal Credit or Pension Credit.',
    'A discounted concession rate is available if you receive Universal Credit or Pension Credit, so it is worth asking when you apply.',
  ],
  [
    'If you receive Universal Credit or Pension Credit, concession rates start at £22.50.',
    'If you receive Universal Credit or Pension Credit, ask about the discounted concession rate when you apply.',
  ],
  [
    'and there are concession rates from £22.50 if you receive Universal Credit or Pension Credit',
    'and there is a discounted concession rate if you receive Universal Credit or Pension Credit, so do ask',
  ],
  [
    'from £45 for 3 months, or £22.50 on the concession rate.',
    'from £45 for 3 months, with a discounted concession rate if you receive Universal Credit or Pension Credit.',
  ],
  [
    'from £45 for 3 months (or £22.50 if you receive Universal Credit or Pension Credit).',
    'from £45 for 3 months, with a discounted concession rate if you receive Universal Credit or Pension Credit.',
  ],
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
  if (n) { writeFileSync(file, after); console.log(`${n}x  ${file}`); total += n; }
}
console.log(`\nTotal: ${total}`);
