export interface Env {
  CODEX_BUCKET: string;
}

export default {
  async fetch(_request: Request, env: Env): Promise<Response> {
    return new Response(
      JSON.stringify({
        status: "codex-stubbed",
        bucket: env.CODEX_BUCKET
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" }
      }
    );
  }
};
