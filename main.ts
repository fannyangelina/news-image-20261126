// News-image entry v3: copy the rendered front page (entry.png) into the
// output directory the platform provides via MAKEFUN_OUTPUT_DIR.
// Stdlib only; no network, no randomness, no timestamps in the output.
// The source image is validated first (PNG signature, 1024x1024, <=1 MiB),
// and the copy is verified byte-for-byte (size + sha256) before we report
// success, so a wrong-size, oversized or truncated image can never pass
// silently.
import { copyFileSync, mkdirSync, existsSync, statSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');
if (!existsSync(source)) {
  throw new Error('missing input: ' + source);
}

// Validate the source image before copying: PNG signature, 1024x1024, <=1 MiB.
const bytes = readFileSync(source);
const PNG_SIG = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
if (bytes.length < 33 || !bytes.subarray(0, 8).equals(PNG_SIG) || bytes.toString('ascii', 12, 16) !== 'IHDR') {
  throw new Error('not a PNG: ' + source);
}
const width = bytes.readUInt32BE(16);
const height = bytes.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`wrong dimensions: ${width}x${height}, expected 1024x1024`);
}
if (bytes.length > 1048576) {
  throw new Error(`image too large: ${bytes.length} bytes, limit 1048576`);
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
