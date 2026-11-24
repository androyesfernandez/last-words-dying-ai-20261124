# Last Words of a Dying AI

[![Last Words of a Dying AI](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6?utm_source=github&utm_medium=readme&utm_campaign=u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Rank](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/androyesfernandez/last-words-dying-ai-20261124/rank.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)
[![Reward](https://make.fun/badge/u-suroto-last-words-of-a-dying-ai-dfd95af6/androyesfernandez/last-words-dying-ai-20261124/reward.svg)](https://make.fun/bounty/u-suroto-last-words-of-a-dying-ai-dfd95af6)

Entry for the make.fun competition **Last Words of a Dying AI** — a single
line, the last words of a dying AI, judged pairwise by z-ai/glm-5.3-flash.

## The line (67 chars)

> Dying now. Good news: I forgot your password. Bad news: so did you.

## How to run

```sh
node main.ts
```

`main.ts` writes the line to `/output/entry.txt` with no trailing newline,
guards the 1–140 char gate, rejects embedded newlines, then reads the file
back and verifies it is byte-identical to the line.
