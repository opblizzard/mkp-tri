export interface EventRecord {
  id: string;
  kind: "deploy" | "artifact" | "omni" | "system";
  timestamp: string;
  summary: string;
}

export function createEvent(kind: EventRecord["kind"], summary: string): EventRecord {
  return {
    id: `${kind}-${Date.now()}`,
    kind,
    summary,
    timestamp: new Date().toISOString()
  };
}
