// Last Words of a Dying AI — make.fun micro entry
// The entry line: an AI's last words, a good-news/bad-news flip
// about a forgotten password. The line is written verbatim, with
// no trailing newline, so the output is exactly 67 bytes.
import { mkdirSync, writeFileSync, readFileSync } from "node:fs";

const LINE = "Dying now. Good news: I forgot your password. Bad news: so did you.";

if (LINE.length < 1 || LINE.length > 140) {
  throw new Error("LINE must be 1-140 characters");
}
if (LINE.trim().length === 0) {
  throw new Error("LINE must not be only whitespace");
}
if (LINE.includes("\n")) {
  throw new Error("LINE must not contain a newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const readBack = readFileSync("/output/entry.txt", "utf8");
if (readBack !== LINE) {
  throw new Error("entry.txt does not match LINE byte-for-byte");
}
