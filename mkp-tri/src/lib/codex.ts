import artifacts from "@data/artifacts.json";

export interface CodexEntry {
  id: string;
  title: string;
  category: string;
  timestamp: string;
  description: string;
  tags?: string[];
}

export function getCodexEntries(): CodexEntry[] {
  return artifacts as CodexEntry[];
}

export function getCodexEntryById(id: string): CodexEntry | undefined {
  return getCodexEntries().find((entry) => entry.id === id);
}
