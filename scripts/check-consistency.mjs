// Read-only audit: finds figures that should agree across the whole site but do
// not. Run this after any content change. It does not edit anything.
import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx?$/.test(entry)) out.push(full);
  }
  return out;
}

// Each rule: a label, a regex whose match should NEVER appear, and why.
const FORBIDDEN = [
  ['probate fee £300', /probate[^.]{0,80}£300|£300[^.]{0,40}(probate|court fee)/i, 'fee rose to £526 on 13 July 2026'],
  ['grant copies £1.50', /£1\.50/, 'now £2 with the application, £16 after'],
  ['death cert £11', /£11(?!\d)[^.]{0,60}(certificate|copy|copies)|certificate[^.]{0,40}£11(?!\d)/i, 'England and Wales is £12.50'],
  ['separate Wales cert fee', /£11\s*Wales|Wales[^.]{0,15}£11/i, 'England and Wales share one GRO fee'],
  ['SPBP £184.03', /£184\.03/, 'now £194.32'],
  ['SSP £116.75', /£116\.75/, 'now £123.25'],
  ["Guardian's Allowance £21.75", /£21\.75/, 'now £22.95'],
  ['Pension Credit £218.15', /£218\.15/, 'stale 2024-25 rate'],
  ['direct cremation from £995', /from (around )?£995|£995 ?-|"£995"|'£995'/i, 'no national provider offers £995'],
  // 0800 731 0469 IS correct for State Pension enquiries, so only flag it when
  // the surrounding text is about a bereavement or funeral claim.
  [
    'wrong bereavement helpline',
    /0800 ?731 ?0469/,
    'that is the Pension Service; the Bereavement Service is 0800 151 2012',
    line => /bereavement|funeral|SF200|BSP|bereavement support/i.test(line) && !/state pension|pension tracing|pension service/i.test(line),
  ],
  ['unbiased dead affiliate path', /unbiased\.co\.uk\/find\//, 'now /find-an-adviser/'],
  ['Widowed Parent for new claims', /you may also be entitled to Widowed Parent/i, 'closed to new claims 6 April 2017'],
  ['old Royal Mail redirection', /£36\.99|£52\.99|£72\.99/, 'now £45 / £66.50 / £95'],
  ['clock starts at date of death', /clock starts from the date of death/i, 'runs from the medical examiner confirmation'],
  ['all six banks share threshold', /(all )?six major (high street )?banks[^.]{0,60}(same|share)/i, 'HSBC, Lloyds and Halifax publish no figure'],
  ['Tell Us Once 120 days', /120 days/, 'it is 28 days from the unique reference number'],
];

// Figures that may legitimately appear, but should be identical everywhere.
const SHOULD_AGREE = [
  ['probate fee', /£526/g],
  ['death certificate E&W', /£12\.50/g],
];

const files = walk('src');
let problems = 0;

for (const [label, re, why, extraCheck] of FORBIDDEN) {
  const hits = [];
  for (const f of files) {
    const lines = readFileSync(f, 'utf8').split('\n');
    lines.forEach((line, i) => {
      if (!re.test(line)) return;
      if (extraCheck && !extraCheck(line)) return;
      hits.push(`${f}:${i + 1}  ${line.trim().slice(0, 100)}`);
    });
  }
  if (hits.length) {
    problems += hits.length;
    console.log(`\n✗ ${label}  (${why})`);
    hits.forEach(h => console.log(`    ${h}`));
  }
}

console.log('\n--- presence counts (sanity, not errors) ---');
for (const [label, re] of SHOULD_AGREE) {
  let n = 0;
  for (const f of files) n += (readFileSync(f, 'utf8').match(re) || []).length;
  console.log(`  ${label}: ${n} occurrences`);
}

console.log(`\n${problems === 0 ? 'PASS: no forbidden figures found.' : `FAIL: ${problems} occurrences need attention.`}`);
