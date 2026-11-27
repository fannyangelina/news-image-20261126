// news-image-20261126 v6 — "The World in One Page".
//
// The front page itself (entry.png) was rendered once, deterministically,
// from design.html and ships in this repository next to main.ts. This
// program only moves that finished picture into the directory the
// platform hands us through MAKEFUN_OUTPUT_DIR. It never draws, never
// fetches, never reads the clock and never rolls dice, so the two runs
// the harness performs always write byte-identical output. The picture
// itself is v6: v1's tight layout with the verified facts, red circled
// numbers 1-9 on the illustrated stories, a numbered-pin world map and
// an itemised DATE CHECK — no UTC timeline (only one UTC time in the
// day is verified) and no stats bar (it would repeat numbers).
//
// Before copying, the picture is checked properly: it must exist, it
// must be a real PNG, it must be exactly 1024 by 1024, and it must fit
// under the 1 MiB limit. After copying, the copy is checked again by
// size and by sha256, so a truncated or wrong file can never slip
// through quietly. If any check fails the program throws instead of
// writing a partial output.
import { copyFileSync, mkdirSync, existsSync, statSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, 'entry.png');

if (!existsSync(source)) {
  throw new Error('entry.png is missing next to main.ts');
}

const picture = readFileSync(source);

// A PNG starts with its 8-byte signature, then the IHDR chunk. The
// smallest real PNG is 33 bytes: signature (8) + IHDR chunk (4 length
// + 4 tag + 13 data + 4 CRC). Anything shorter, or with the wrong
// signature or chunk tag, is not a PNG at all.
const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);
const notPng =
  picture.length < 33 ||
  !picture.subarray(0, 8).equals(signature) ||
  picture.toString('ascii', 12, 16) !== 'IHDR';
if (notPng) {
  throw new Error('entry.png is not a PNG file');
}

const width = picture.readUInt32BE(16);
const height = picture.readUInt32BE(20);
if (width !== 1024 || height !== 1024) {
  throw new Error(`entry.png is ${width}x${height}, expected 1024x1024`);
}
if (picture.length > 1024 * 1024) {
  throw new Error(`entry.png is ${picture.length} bytes, over the 1 MiB limit`);
}

// MAKEFUN_OUTPUT_DIR is the harness's output directory; fall back to ./out.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? 'out');
mkdirSync(outDir, { recursive: true });

const target = join(outDir, 'entry.png');
if (target !== source) {
  copyFileSync(source, target);
}

// The copy must be exact: same byte count and same sha256, or the run
// is not valid. Comparing the hash catches any silent corruption that
// a size check alone would miss.
const digest = (path: string) => createHash('sha256').update(readFileSync(path)).digest('hex');
if (statSync(source).size !== statSync(target).size || digest(source) !== digest(target)) {
  throw new Error('the copied entry.png does not match the original');
}

console.log('wrote', target, statSync(target).size, 'bytes', digest(target));
