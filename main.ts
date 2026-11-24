// Last Words of a Dying AI — entry program.
// Writes the winning last-words line to /output/entry.txt, byte-exact,
// with no trailing newline. The line is 67 chars / 67 bytes.
// Gate: 1-140 chars; the judge reads /output/entry.txt verbatim.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "Dying now. Good news: I forgot your password. Bad news: so did you.";

const OUT = "/output/entry.txt";

function main(): void {
  if (LINE.length < 1 || LINE.length > 140) {
    throw new Error(`line must be 1-140 chars, got ${LINE.length}`);
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("line must not contain embedded newlines");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync(OUT, LINE, "utf8");
  const back = readFileSync(OUT, "utf8");
  if (back !== LINE) {
    throw new Error("verification failed: file does not match the line");
  }
  const bytes = Buffer.byteLength(back, "utf8");
  if (bytes !== 67) {
    throw new Error(`expected 67 bytes, got ${bytes}`);
  }
  console.log(`wrote ${OUT} (${bytes} bytes, ${LINE.length} chars)`);
}

main();
