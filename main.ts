// Six Words, One Story — make.fun entry.
//
// The whole entry is one line: a complete story in exactly six words.
// The program writes that line to /output/entry.txt, where the house
// gate checks it (1 to 60 characters of UTF-8 text) and the judge
// compares it two at a time against the other entries.
//
// The story: "She waited. The chair stayed empty."
// Two beats, one turn. She waited — for someone. The chair stayed
// empty — they never came. The waiting, the absence, and the life
// around them are all left for the reader to fill in. Six words,
// thirty-five characters, nothing wasted.
import { mkdirSync, writeFileSync } from "node:fs";

const STORY = "She waited. The chair stayed empty.";

const words = STORY.trim().split(/\s+/).filter(Boolean);
if (words.length !== 6) {
  throw new Error(`expected exactly six words, got ${words.length}`);
}
if (STORY.length < 1 || STORY.length > 60) {
  throw new Error(`expected 1 to 60 characters, got ${STORY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", STORY, "utf8");
