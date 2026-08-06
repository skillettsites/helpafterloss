// Google requires `image` on Article structured data for rich results, and a
// `logo` on the publisher Organization. The site had neither on ~55 pages.
// This adds them to every Article/BlogPosting JSON-LD block that lacks them,
// reusing the existing dynamic OpenGraph image.
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const IMAGE = 'https://helpafterloss.co.uk/opengraph-image';

function walk(dir, out = []) {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) walk(full, out);
    else if (/\.tsx$/.test(entry)) out.push(full);
  }
  return out;
}

let imageAdded = 0;
let logoAdded = 0;
let filesChanged = 0;

for (const file of walk('src/app')) {
  const before = readFileSync(file, 'utf8');
  let src = before;

  // 1. Add `image` immediately after an Article/BlogPosting @type, but only
  //    when that JSON-LD object does not already declare one.
  src = src.replace(
    /(['"]?@type['"]?:\s*['"](?:Article|BlogPosting|NewsArticle)['"],?)(\s*\n)(\s*)/g,
    (match, typeDecl, newline, indent, offset, whole) => {
      // Look ahead within this object for an existing image key.
      const following = whole.slice(offset, offset + 1200);
      if (/\bimage\s*:/.test(following)) return match;
      imageAdded++;
      return `${typeDecl}${newline}${indent}image: '${IMAGE}',${newline}${indent}`;
    }
  );

  // 2. Give the publisher Organization a logo where it has none.
  src = src.replace(
    /(publisher:\s*\{\s*'@type':\s*'Organization',\s*name:\s*'Help After Loss')(\s*)(\})/g,
    (match, head, gap, close) => {
      logoAdded++;
      return `${head}, logo: { '@type': 'ImageObject', url: '${IMAGE}' }${gap}${close}`;
    }
  );

  if (src !== before) {
    writeFileSync(file, src);
    filesChanged++;
  }
}

console.log(`files changed: ${filesChanged}`);
console.log(`Article image added: ${imageAdded}`);
console.log(`publisher logo added: ${logoAdded}`);
