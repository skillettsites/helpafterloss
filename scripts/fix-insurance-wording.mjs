// A motor policy does not simply end on death, and named drivers are often kept
// covered under ABI guidance, so "does not carry over" overstates it. But cover
// is not guaranteed either, and some insurers do end the policy at the date of
// death. The only safe and accurate line is: check with the insurer first.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const REPS = [
  [
    'A motor policy does not carry over to other drivers when the policyholder passes away, so please',
    'Do not assume the car is still insured once the policyholder has passed away. Cover is sometimes kept running for a short period, but not always, so please',
  ],
  [
    'A motor insurance policy does not carry over to other drivers when the policyholder dies, so the vehicle must not be driven until new cover is',
    'Do not assume the car is still insured. Some insurers keep cover running for a while, others end it at the date of death, so check with them before the vehicle is driven or arrange cover that is',
  ],
  [
    'A motor policy does not carry over to other drivers on death, so arran',
    'Check with the motor insurer before anyone drives the car, since cover is not guaranteed to continue, and arran',
  ],
  [
    'as a motor policy',
    'as cover for the car',
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
