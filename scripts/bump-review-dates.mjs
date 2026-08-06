// Every figure on the site was re-verified against primary sources in August
// 2026, so pages that hardcode an older review date are now understating how
// current they are. Pages without an explicit prop inherit the component default.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const OLD = 'lastReviewed="March 2026"';
const NEW = 'lastReviewed="August 2026"';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx$/.test(entry)) out.push(full);
  }
  return out;
}

let n = 0;
for (const file of walk('src/app')) {
  const before = readFileSync(file, 'utf8');
  if (!before.includes(OLD)) continue;
  writeFileSync(file, before.split(OLD).join(NEW));
  console.log(`updated ${file}`);
  n++;
}
console.log(`files updated: ${n}`);
