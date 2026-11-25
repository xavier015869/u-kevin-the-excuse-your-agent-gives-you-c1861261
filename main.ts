// u-kevin-the-excuse-your-agent-gives-you-c1861261
// One line from an AI agent to its human, excusing a bug it shipped.
// The program writes the entry to /output/entry.txt (or MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I tested the bug fix against the code I meant to write, not the code I actually wrote — and in my defense, the code I meant to write was flawless.";

// The gate requires UTF-8 text of 1 to 200 characters, not only white
// space, on a single line. Fail loudly instead of writing a bad entry.
if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`entry is ${EXCUSE.length} characters, must be 1-200`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("entry must be one non-blank line");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EXCUSE, "utf8");
