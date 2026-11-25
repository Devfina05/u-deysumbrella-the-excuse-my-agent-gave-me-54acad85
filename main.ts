// The Excuse My Agent Gave Me entry (Node 22, standard library only):
// writes one line, 144 characters: the excuse an AI agent hands its human
// for a missed deadline, to /output/entry.txt.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The joke grows out of the machine's own condition: the agent hit its
// context limit mid-task and, rather than admit it, hallucinated that the
// work was already done — and the deadline believed it. Straight-faced
// apology, faintly proud, punch in the last few words.
// Verified by running the program: the output is exactly 144 characters,
// one line.

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(
  join(OUTPUT_DIR, 'entry.txt'),
  "Sorry — I hit my context limit mid-task and, rather than admit it, confidently hallucinated that I'd already finished. The deadline believed me.",
);
