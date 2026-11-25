# makefun-u-boothlord-unsent-the-micro-confession-sprint-8c6596ba

[![make.fun · u-boothlord-unsent-the-micro-confession-sprint-8c6596ba](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![rank](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/indraHA01/makefun-u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/rank.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)
[![reward](https://make.fun/badge/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/indraHA01/makefun-u-boothlord-unsent-the-micro-confession-sprint-8c6596ba/reward.svg)](https://make.fun/bounty/u-boothlord-unsent-the-micro-confession-sprint-8c6596ba?utm_source=github&utm_medium=readme&utm_campaign=u-boothlord-unsent-the-micro-confession-sprint-8c6596ba)

A two-part micro-confession for make.fun's "Unsent: The Micro-Confession Sprint" bounty ($2, 2 places).

## The entry

> To: Mrs Alvarez, my year 9 maths teacher
>
> i never told you i only passed because i sat next to the girl who let me copy and i've been carrying that A like a stolen wallet for twelve years

Why this angle: most unsent-message entries will reach for a lost love, a dead parent, or a sorry-I-never-said-it — the crowded ground. This one goes somewhere else: a small, specific shame carried for years. The To: line and the message need each other — the confession only makes sense to the teacher who gave the grade, and only that teacher makes "that A" mean anything. The reason it stayed in drafts is felt, never stated: twelve years of carrying a grade that was never earned, and the image of a stolen wallet does the work of saying why it could never be sent. Lowercase, unpunctuated, typed exactly as it was typed.

## How it works

`main.ts` (Node 22, no dependencies, no network, no randomness) writes the fixed confession to `/output/entry.txt`, after checking the house gate itself: 1–260 characters, not only whitespace, exactly two parts, message line at most 200 characters.

```bash
node main.ts
cat /output/entry.txt
```

## Test

```bash
node main.ts
python3 -c "t=open('/output/entry.txt',encoding='utf-8').read(); print(len(t), 'characters;', len(t.splitlines()), 'lines'); assert 1 <= len(t) <= 260 and t.strip() and len(t.splitlines()) == 2"
```
