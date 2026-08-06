// One-off: find dead registrar deep-links in cities.ts / counties.ts and repoint
// them at the GOV.UK register office finder, which is authoritative and lets the
// user search by postcode. Council homepages stay untouched.
import { readFileSync, writeFileSync } from 'node:fs';

const FALLBACK = 'https://www.gov.uk/register-offices';
const FILES = ['src/lib/cities.ts', 'src/lib/counties.ts'];
const URL_RE = /https?:\/\/[^'"`\s)]+/g;

// A registrar link is either the city-level `registrarUrl`, or a `url` inside a
// registrarOffices entry. `councilUrl` (the council homepage) is left alone:
// the audit found all 120 of those healthy.
function isRegistrarLine(line) {
  if (line.includes('councilUrl:')) return false;
  return line.includes('registrarUrl:') || /\burl:\s*'https?:/.test(line);
}

async function check(url) {
  for (let attempt = 0; attempt < 2; attempt++) {
    try {
      const ctl = new AbortController();
      const t = setTimeout(() => ctl.abort(), 20000);
      const res = await fetch(url, {
        redirect: 'follow',
        signal: ctl.signal,
        headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
      });
      clearTimeout(t);
      return res.status;
    } catch {
      if (attempt === 1) return 0;
    }
  }
  return 0;
}

// Collect every URL that appears on a registrarUrl line, or on a `url:` line
// inside a registrarOffices block. Council homepages are deliberately excluded.
const targets = new Set();
for (const file of FILES) {
  for (const line of readFileSync(file, 'utf8').split('\n')) {
    if (!isRegistrarLine(line)) continue;
    for (const u of line.match(URL_RE) || []) targets.add(u);
  }
}

console.log(`Checking ${targets.size} unique registrar URLs...`);
const list = [...targets];
const dead = new Set();
const CONCURRENCY = 12;
for (let i = 0; i < list.length; i += CONCURRENCY) {
  const batch = list.slice(i, i + CONCURRENCY);
  const codes = await Promise.all(batch.map(check));
  batch.forEach((u, j) => {
    const code = codes[j];
    // 403 is bot protection on a live page, not a dead link. Treat only
    // 404/410/5xx/DNS failure as genuinely broken.
    const broken = code === 0 || code === 404 || code === 410 || code >= 500;
    if (broken) dead.add(u);
    console.log(`${String(code).padStart(3)}  ${broken ? 'DEAD' : 'ok  '}  ${u}`);
  });
}

console.log(`\n${dead.size} dead of ${targets.size}. Rewriting...`);
let totalReplaced = 0;
for (const file of FILES) {
  let src = readFileSync(file, 'utf8');
  let n = 0;
  src = src.split('\n').map(line => {
    if (!isRegistrarLine(line)) return line;
    let out = line;
    for (const u of line.match(URL_RE) || []) {
      if (dead.has(u)) { out = out.split(u).join(FALLBACK); n++; }
    }
    return out;
  }).join('\n');
  writeFileSync(file, src);
  console.log(`${file}: ${n} replaced`);
  totalReplaced += n;
}
console.log(`Total occurrences replaced: ${totalReplaced}`);
