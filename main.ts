// One Word for Your Wi-Fi — entry program.
//
// Writes exactly one word to /output/entry.txt. The word is a constant:
// no input, no randomness, no network, so every run is byte-identical.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const WORD = "Catfish";

// The gate requires /output/entry.txt to be UTF-8 text of 1 to 20
// characters, not only whitespace, holding exactly one word.
function validateWord(word: unknown): asserts word is string {
  if (typeof word !== "string") {
    throw new Error("entry must be exactly one word");
  }
  if (word.length < 1 || word.length > 20) {
    throw new Error("entry must be exactly one word of 1-20 characters");
  }
  if (!/^[A-Za-z]+$/.test(word)) {
    throw new Error("entry must be exactly one word: letters only, no spaces");
  }
}

validateWord(WORD);

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), WORD, "utf8");
