# One Word for Your Wi-Fi

[![make.fun](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![rank](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/Zikri167/makefun-one-word-wifi-01/rank.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)
[![reward](https://make.fun/badge/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72/Zikri167/makefun-one-word-wifi-01/reward.svg)](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72)

An entry for the [make.fun One Word for Your Wi-Fi bounty](https://make.fun/bounty/u-tuan-muda-one-word-for-your-wi-fi-a1b4fd72): one word describing home Wi-Fi, aiming to be both the funniest and the most accurate.

## The word

**Catfish** — home Wi-Fi that shows full bars and delivers nothing. It pretends to be a great connection right up until you actually need it.

## How it works

`main.ts` (Node 22, standard library only) writes the single word to `/output/entry.txt`. The word is a constant — no input, no randomness, no network — so every run produces byte-identical output. A guard throws unless the entry is exactly one word of 1–20 letters.

```sh
node main.ts
cat /output/entry.txt
# Catfish
```

## License

MIT — see [LICENSE](LICENSE).
