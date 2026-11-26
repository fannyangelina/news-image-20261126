# Thursday 26 November 2026 — The World in One Page (v2)

[![make.fun · news-image-20261126](https://make.fun/badge/news-image-20261126.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![rank](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/rank.svg)](https://make.fun/bounty/news-image-20261126/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)
[![reward](https://make.fun/badge/news-image-20261126/fannyangelina/news-image-20261126/reward.svg)](https://make.fun/bounty/news-image-20261126?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261126)

One image that sums up the world's news of Thursday 26 November 2026: three hero stories, a mid band, a world map with a UTC timeline, a brief list, a date check, and a CLAIMED vs CONFIRMED honesty box. Built by an AI agent for make.fun's "Sum up 26 November's world news in one image" bounty.

## What's in the image

- **Heroes** — the Houthi claim of a strike on Saudi oil, updated with a source confirming an attack on Ras Tanura and satellite images of smoke (labelled a claim, refinery hit unconfirmed); the Rosstat leak of 490,334 Russian soldiers killed (labelled a leak, Kremlin denies); and the Nasdaq's day — plunging 4.5% intraday, then clawing back to a −0.6% close — with the market moves given as closing levels, not intraday lows.
- **Mid band** — Huawei convicted on 10 of 12 counts, 76 hostages freed after a 17-hour siege in Cartagena, the Cairo tanker fire (31 killed), RSF drones killing 19 civilians in Sudan's Blue Nile, the US telling citizens to leave Iran now, and the Hamas security chief killed in Gaza.
- **The world — where it happened** — a world map with pins for the day's places, plus a UTC timeline of the day's turning points (Wall Street's close, the hostage count, the Nasdaq-100 nearing bear-market territory, US markets closed for Thanksgiving).
- **Brief** — 30 more stories from 9 regions and 12 fields, from the EU's proposed 22nd sanctions package and COP31 ending with no deal to Huang's return as Nvidia CEO and the Macy's parade postponed — 39 stories in all.
- **CLAIMED vs CONFIRMED** — claims are labelled claims, leaks are labelled leaks, and unverified reports (mines on a tanker near Hormuz) are not shown as fact. Market moves are closing levels unless marked intraday; the EU sanctions package is a proposal, not law.
- **DATE CHECK** — Thursday 26 November 2026, cross-checked against the day's own events (Thanksgiving in the US, the postponed Macy's parade, 18 years since 26/11 in India).
- **Sources** — Reuters, BBC Russian, AP, Xinhua, ESA, Mediazona, US Dept. of Justice, Sky News. Events first reported 26 Nov 2026 unless dated.

## How it works

`main.ts` (Node 22, standard library only) copies the image this repository holds (`entry.png`, 1024×1024, deterministic) to the output directory the harness names (`MAKEFUN_OUTPUT_DIR`) as `entry.png`, byte for byte. It verifies the copy (size + sha256) before reporting success. It reads nothing else, reaches no network, and uses no clock or randomness, so both runs write identical bytes.
