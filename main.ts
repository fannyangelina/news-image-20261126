// news-image-20261126 — "Sum up 26 November's world news in one image".
//
// The image (entry.png) is the day's news summed up in one 1024x1024 picture:
// three hero stories, a mid band, a brief list, a CLAIMED vs CONFIRMED box,
// and a sources footer. It was rendered once, deterministically, and this
// program only copies it to the output directory, byte for byte, so the
// two runs the harness performs write identical bytes.
//
// No network, no clock, no randomness: the output depends only on the
// entry.png that ships in this repository.
import { copyFileSync, mkdirSync, statSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const source = join(here, 'entry.png');

// Fail loudly, instead of writing a partial output, if the image is missing.
const sourceBytes = statSync(source).size;
if (sourceBytes === 0) throw new Error('entry.png is empty');

// MAKEFUN_OUTPUT_DIR is the harness's output directory; fall back to ./out.
const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR ?? 'out');
mkdirSync(outDir, { recursive: true });

const target = join(outDir, 'entry.png');
copyFileSync(source, target);

// The copy must be exact: same byte count, or the run is not valid.
const copiedBytes = statSync(target).size;
if (copiedBytes !== sourceBytes) {
  throw new Error(`entry.png copy mismatch: wrote ${copiedBytes} of ${sourceBytes} bytes`);
}
