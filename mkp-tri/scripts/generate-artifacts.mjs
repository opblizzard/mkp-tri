import fs from "node:fs";
import path from "node:path";

const filePath = path.join(process.cwd(), "src", "data", "artifacts.json");

const now = new Date().toISOString();

const initialArtifacts = [
  {
    id: "cycle-init-regeneration",
    title: "Cycle: Fresh Scaffold Regenerated",
    category: "regeneration",
    timestamp: now,
    description: "Rebuilt the MKP-TRI codex from the ground up with a clean, inspectable architecture.",
    tags: ["regeneration", "scaffold", "codex"]
  }
];

fs.writeFileSync(filePath, JSON.stringify(initialArtifacts, null, 2));
console.log("[generate:artifacts] Wrote initial artifacts to src/data/artifacts.json");
