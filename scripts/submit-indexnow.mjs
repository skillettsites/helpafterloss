// One-off IndexNow submission after a genuine content change.
// Deliberately NOT the whole sitemap: re-pinging unchanged URLs is treated as
// batch abuse by Bing and can delay indexing. Pass the routes to submit as
// arguments, or pipe a newline-separated list on stdin.
import { readFileSync } from 'node:fs';

const HOST = 'helpafterloss.co.uk';
const KEY = '9f8bffeec3da46879377492cf2645cc9';

let routes = process.argv.slice(2);
if (routes.length === 1 && routes[0].startsWith('@')) {
  routes = readFileSync(routes[0].slice(1), 'utf8')
    .split('\n')
    .map(r => r.trim())
    .filter(Boolean);
}
if (!routes.length) {
  console.error('No routes given. Usage: node submit-indexnow.mjs @routes.txt');
  process.exit(1);
}

const urlList = [...new Set(routes.map(r => `https://${HOST}${r === '/' ? '' : r}`))];

// IndexNow accepts up to 10,000 per request, but keep batches modest.
const BATCH = 100;
let submitted = 0;

for (let i = 0; i < urlList.length; i += BATCH) {
  const batch = urlList.slice(i, i + BATCH);
  const res = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: HOST,
      key: KEY,
      keyLocation: `https://${HOST}/${KEY}.txt`,
      urlList: batch,
    }),
  });
  // 200 = accepted, 202 = accepted, key validation pending.
  console.log(`batch ${i / BATCH + 1}: ${batch.length} urls -> HTTP ${res.status}`);
  if (res.status === 200 || res.status === 202) submitted += batch.length;
  else console.error(`  body: ${(await res.text()).slice(0, 300)}`);
}

console.log(`\nSubmitted ${submitted} of ${urlList.length} URLs to IndexNow (Bing, Yandex, Seznam, Naver).`);
