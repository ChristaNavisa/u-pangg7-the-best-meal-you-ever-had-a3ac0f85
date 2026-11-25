import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "A street vendor in Jakarta pressed a satay skewer into my hand, still hissing from the charcoal, and the peanut sauce dripped down my wrist before I even tasted it.";

// One sentence, one memory: the best meal I ever had, told as a single
// concrete moment — a named dish, a place, a texture, a smell — and the
// ending image is the sauce on my wrist, before the first taste.
// The sentence is the whole entry: no title, no explanation, no list.
// Output dir comes from MAKEFUN_OUTPUT_DIR so local runs never touch /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
