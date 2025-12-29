export interface Env {
  OMNI_ENDPOINT: string;
  CODEX_BUCKET: string;
}

import type { ExecutionContext } from "@cloudflare/workers-types";

export default {
  async fetch(
    request: Request,
    env: Env,
    ctx: ExecutionContext
  ): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname.startsWith("/omni/edge")) {
      return handleOmni(request, env);
    }

    if (url.pathname.startsWith("/codex/edge")) {
      return handleCodex(request, env);
    }

    // For all other routes, let Cloudflare Pages serve the static site
    return fetch(request);
  },
};

async function handleOmni(request: Request, env: Env): Promise<Response> {
  if (request.method !== "POST") {
    return new Response("Use POST for Omni calls.", { status: 405 });
  }

  const body = await request.json().catch(() => ({}));
  return new Response(
    JSON.stringify({
      status: "stubbed",
      received: body,
      endpoint: env.OMNI_ENDPOINT,
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    }
  );
}

async function handleCodex(_request: Request, env: Env): Promise<Response> {
  return new Response(
    JSON.stringify({
      status: "stubbed",
      bucket: env.CODEX_BUCKET,
      message: "Codex worker is ready to bind to storage.",
    }),
    {
      status: 200,
      headers: { "content-type": "application/json" },
    }
  );
}
