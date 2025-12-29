export interface OmniPayload {
  prompt: string;
  context?: Record<string, unknown>;
}

export interface OmniResponse {
  id: string;
  receivedAt: string;
  status: "stubbed";
  echo: string;
}

export async function sendToOmni(payload: OmniPayload): Promise<OmniResponse> {
  return {
    id: `omni-${Date.now()}`,
    receivedAt: new Date().toISOString(),
    status: "stubbed",
    echo: payload.prompt
  };
}
