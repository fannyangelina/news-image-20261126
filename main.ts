// News-image entry v3: copy the rendered front page (entry.png) into the
// output directory the platform provides via MAKEFUN_OUTPUT_DIR.
// Stdlib only; no network, no randomness, no timestamps in the output.
// The copy is verified byte-for-byte (size + sha256) before we report success,
// so a truncated or failed copy can never pass silently.
import { copyFileSync, mkdirSync, existsSync, statSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
if (!existsSync(source)) {
  throw new Error('missing input: ' + source);
}
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? 'out';
const out = resolve(outDir);
mkdirSync(out, { recursive: true });
const target = join(out, 'entry.png');
if (target !== source) {
  copyFileSync(source, target);
}

// Verify the copy: same size and same sha256 as the source.
const digest = (p: string) => createHash('sha256').update(readFileSync(p)).digest('hex');
if (statSync(source).size !== statSync(target).size || digest(source) !== digest(target)) {
  throw new Error('copy verification failed: ' + target);
}
console.log('wrote', target, statSync(target).size, 'bytes', digest(target));
