# The World in One Page — news-image-20261126 (v6)

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One 1024&times;1024 image summing up Thursday 26 November 2026's world news:
3 hero stories, 6 mid stories, 26 briefs — 35 stories in total — plus a
CLAIMED vs CONFIRMED box, a numbered-pin world map, an itemised DATE CHECK,
and a sources footer with a region tally that sums exactly to 35.

v6 is v1's tight layout (the one that scored dev 98.07%) with v5's verified
facts, plus the top-5 verification apparatus done without the v3/v4 costs:
red circled numbers 1&ndash;9 on the 9 illustrated stories, a numbered-pin
world map, and a DATE CHECK naming the earlier-dated stories left out on
purpose. No UTC timeline (only one UTC time in the day is verified, and a
timeline would repeat story facts) and no stats bar (it would repeat
numbers already on the page). Hero art stays 126px, headlines stay
20&ndash;29px, no small grid cards, no repeated facts between sections.

## Facts, verified

- Nasdaq ends &minus;0.6% after falling 4.5% intraday; Nvidia &minus;3.9% at the
  close after &minus;9% intraday; Dow +0.3%; hot PCE 3.8%; Trump proposes
  tariffs on 14 partners. (Market moves are closing levels unless marked
  intraday.)
- Huawei guilty on 10 of 12 counts (Brooklyn jury: trade-secret theft, bank
  fraud, Iran sanctions). 76 hostages freed in Cartagena after a 17-hour
  &Eacute;xito siege. US tells citizens to leave Iran now.
- Left out on purpose (earlier days): COP31 ends with no deal (22 Nov),
  Huang reinstated as Nvidia CEO (23 Nov), Chen Jining probed (24 Nov),
  Shenzhou-24 docks (25 Nov).

## How it runs

`main.ts` (Node 22, stdlib only, no network, no clock, no randomness) copies
the pre-rendered `entry.png` into `MAKEFUN_OUTPUT_DIR` (or `./out`), after
validating it is a 1024&times;1024 PNG under 1 MiB, and verifies the copy by
size and sha256. Running it twice writes byte-identical output.

## License

MIT — see LICENSE.
