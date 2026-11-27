# The World in One Page — news-image-20261126 (v5)

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One 1024&times;1024 image summing up Thursday 26 November 2026's world news:
3 hero stories, 6 mid stories, 26 briefs — 35 stories in total — plus a
CLAIMED vs CONFIRMED box and a sources footer with a region tally that
sums exactly to 35. v5 is v4 with the proof band (map + UTC timeline) and
the DATE CHECK removed and the space given back to the stories: taller
hero art, larger mid icons, airier briefs (29px pitch), ink back under
13% — the closest layout to v1, our best scorer (dev 98.07%, 12-0-0),
while keeping v2/v3's corrected facts and stronger mid stories.

## Facts, verified

- Nasdaq ends &minus;0.6% after falling 4.5% intraday; Nvidia &minus;3.9% at the
  close after &minus;9% intraday; Dow +0.3%; hot PCE 3.8%; Trump proposes
  tariffs on 14 partners. (Market moves are closing levels unless marked
  intraday.)
- Huawei guilty on 10 of 12 counts (Brooklyn jury: trade-secret theft, bank
  fraud, Iran sanctions). 76 hostages freed in Cartagena after a 17-hour
  &Eacute;xito siege. US tells citizens to leave Iran now.
- Left out on purpose (earlier days): COP31 ends with no deal (22 Nov),
  Huang reinstated as Nvidia CEO (23 Nov), Shenzhou-24 docks (25 Nov),
  Shanghai party chief Chen probed (24 Nov).

## How it runs

`main.ts` (Node 22, stdlib only, no network, no clock, no randomness) copies
the pre-rendered `entry.png` into `MAKEFUN_OUTPUT_DIR` (or `./out`), after
validating it is a 1024&times;1024 PNG under 1 MiB, and verifies the copy by
size and sha256. Running it twice writes byte-identical output.

## License

MIT — see LICENSE.
