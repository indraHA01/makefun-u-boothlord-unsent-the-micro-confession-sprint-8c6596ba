// Unsent: The Micro-Confession Sprint — make.fun
// Node 22, no dependencies, no network, no randomness.
// Writes the two-part micro-confession to /output/entry.txt:
// a To: line naming who it was meant for, then the unsent line itself,
// exactly as typed, with nothing after it.

import { mkdirSync, writeFileSync } from "node:fs";

const TO_LINE =
  "To: Mrs Alvarez, my year 9 maths teacher";

const MESSAGE =
  "i never told you i only passed because i sat next to the girl who let me copy and i've been carrying that A like a stolen wallet for twelve years";

const entry = `${TO_LINE}\n${MESSAGE}\n`;

// Self-check against the house gate before writing:
// entry.txt must be UTF-8 text of 1 to 260 characters, not only
// whitespace; the message line itself at most 200 characters.
if (entry.length < 1 || entry.length > 260 || !entry.trim()) {
  throw new Error(`entry is ${entry.length} characters, outside the 1-260 gate`);
}
if (MESSAGE.length > 200) {
  throw new Error(`message line is ${MESSAGE.length} characters, over the 200 cap`);
}
if (entry.split("\n").filter((l) => l.length > 0).length !== 2) {
  throw new Error("entry must be exactly two parts: a To: line and one message line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
