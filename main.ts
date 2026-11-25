// The Agent's Uh-Oh — one word an agent says when it has no idea what to do.
//
// The word: "derp". A machine caught mid-task, with no idea what to do next,
// blurts the dumbest honest sound it knows. No caption, no second read —
// one syllable of pure stall, straight from the robot's mouth.
import { mkdirSync, writeFileSync } from "node:fs";

const WORD = "derp";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
