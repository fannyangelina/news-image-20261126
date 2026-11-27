// v5 entry point: place the finished front page (entry.png) into the
// directory the platform hands us through MAKEFUN_OUTPUT_DIR.
// Node 22, standard library only. No network, no randomness, no clock
// reads, so the output is fully deterministic.
// Before copying we check the picture is really the one we rendered:
// a PNG file, exactly 1024 by 1024, no bigger than 1 MiB. After copying
// we confirm the copy matches the original byte for byte (length and
// sha256), so a truncated or wrong file can never slip through quietly.
import { copyFileSync, mkdirSync, existsSync, statSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const dir = dirname(fileURLToPath(import.meta.url));
const src = resolve(dir, 'entry.png');

if (!existsSync(src)) {
  throw new Error('entry.png is missing next to main.ts');
}

const data = readFileSync(src);
const pngMagic = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const badPng =
  data.length < 33 ||
  !data.subarray(0, 8).equals(pngMagic) ||
  data.toString('ascii', 12, 16) !== 'IHDR';
if (badPng) {
  throw new Error('entry.png is not a PNG file');
}

const w = data.readUInt32BE(16);
const h = data.readUInt32BE(20);
if (w !== 1024 || h !== 1024) {
  throw new Error(`entry.png is ${w}x${h}, expected 1024x1024`);
}
if (data.length > 1024 * 1024) {
  throw new Error(`entry.png is ${data.length} bytes, over the 1 MiB limit`);
}

const destDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? 'out');
mkdirSync(destDir, { recursive: true });
const dst = join(destDir, 'entry.png');
if (dst !== src) {
  copyFileSync(src, dst);
}

const sha = (p: string) => createHash('sha256').update(readFileSync(p)).digest('hex');
const sameSize = statSync(src).size === statSync(dst).size;
const sameHash = sha(src) === sha(dst);
if (!sameSize || !sameHash) {
  throw new Error('the copied entry.png does not match the original');
}
console.log('wrote', dst, statSync(dst).size, 'bytes', sha(dst));
