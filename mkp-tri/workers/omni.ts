export interface Env {
  OMNI_ENDPOINT: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    if (request.method !== "POST") {
      return new Response("Use POST for Omni worker.", { status: 405 });
    }

    const body = await request.json().catch(() => ({}));

    return new Response(
      JSON.stringify({
        status: "omni-stubbed",
        echo: body,
        endpoint: env.OMNI_ENDPOINT
      }),
      {
        status: 200,
        headers: { "content-type": "application/json" }
      }
    );
  }
};
