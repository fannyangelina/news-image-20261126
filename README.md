# Thursday 26 November 2026 — The World in One Day

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image summing up Thursday 26 November 2026's world news — 37 stories across 8 regions.

## What's on the page

- **Giant masthead date** — Thursday 26 November 2026 — with an italic deck naming the three top stories and a region tally that adds up exactly to 37.
- **3 hero stories**: Houthis claim a strike on a Saudi oil hub (CLAIM, NOT CONFIRMED); a Rosstat leak puts Russian soldiers killed at 490,334 (LEAK, KREMLIN DENIES); the Nasdaq recovers most of a 4.5% plunge to close −0.6%.
- **10 more illustrated stories** in a 5×2 grid, each with a source and a confidence pill (CONFIRMED / REPORTED / OFFICIAL): Huawei guilty on 10 of 12 counts, 76 hostages freed in Colombia, the US telling citizens to leave Iran, the Hamas security chief killed in Gaza, the Cairo tanker fire, Sudan drone strikes, Macy's 100th parade postponed, 18 years since 26/11, Kim's nuclear vow, and the EU's 22nd Russia sanctions proposal.
- **BY THE NUMBERS** — 76 hostages freed, 31 killed in Cairo, 10/12 Huawei counts, 60 banks off SWIFT, 3.8% hot PCE, 204 runs off 53 balls.
- **ALSO — 24 more stories**, one line each.
- **CLAIMED vs CONFIRMED** honesty box, a small world map with numbered pins for the 13 illustrated stories, a UTC timeline (all 26 Nov), and a **DATE CHECK** naming four stories deliberately left out because they happened earlier (COP31 22 Nov, Huang reinstated 23 Nov, Shenzhou-24 docks 25 Nov, Shanghai party chief Chen probed 24 Nov).

## How it is built

`main.ts` (Node 22, stdlib only, no network) copies the pre-rendered `entry.png` (1024×1024, ≤1 MiB) into `MAKEFUN_OUTPUT_DIR` (default `out`) and verifies the copy byte-for-byte (size + sha256). Running it twice produces byte-identical output.

The image was designed in `v3-work/design.html` and rendered with a local Chromium; the design keeps ink coverage at 12.9% and the briefs at a 22.9 px pitch so the page stays legible at ~300 px.

## Sources

Reuters · BBC Russian · AP · Xinhua · ESA · Mediazona · US Dept. of Justice · Sky News
