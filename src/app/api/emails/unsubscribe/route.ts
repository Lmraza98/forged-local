const UNSUBSCRIBE_PATH = "/api/emails/unsubscribe";
const MAX_REQUEST_BODY_BYTES = 4096;

function unsubscribeOrigin(): URL | null {
  const value = process.env.LEADHUTCH_UNSUBSCRIBE_ORIGIN?.trim();
  if (!value) return null;

  try {
    const url = new URL(value);
    if (url.protocol !== "https:" || url.username || url.password) return null;
    url.pathname = "/";
    url.search = "";
    url.hash = "";
    return url;
  } catch {
    return null;
  }
}

function publicHeaders(upstream?: Headers): Headers {
  const headers = new Headers({
    "Cache-Control": "no-store",
    "Content-Security-Policy":
      "default-src 'none'; style-src 'unsafe-inline'; form-action 'self'; base-uri 'none'; frame-ancestors 'none'",
    "Referrer-Policy": "no-referrer",
    "X-Content-Type-Options": "nosniff",
    "X-Frame-Options": "DENY",
  });
  const contentType = upstream?.get("content-type");
  if (contentType) headers.set("Content-Type", contentType);
  return headers;
}

async function proxyUnsubscribe(request: Request): Promise<Response> {
  const origin = unsubscribeOrigin();
  if (!origin) {
    return new Response("Unsubscribe service is temporarily unavailable.", {
      status: 503,
      headers: publicHeaders(),
    });
  }

  const incomingUrl = new URL(request.url);
  const target = new URL(UNSUBSCRIBE_PATH, origin);
  target.search = incomingUrl.search;

  const contentLength = Number(request.headers.get("content-length") || 0);
  if (
    !Number.isFinite(contentLength) ||
    contentLength < 0 ||
    contentLength > MAX_REQUEST_BODY_BYTES
  ) {
    return new Response("Request body too large.", {
      status: 413,
      headers: publicHeaders(),
    });
  }

  try {
    const response = await fetch(target, {
      method: request.method,
      headers: {
        "ngrok-skip-browser-warning": "1",
      },
      body: request.method === "POST" ? await request.arrayBuffer() : undefined,
      cache: "no-store",
      redirect: "manual",
    });
    return new Response(await response.arrayBuffer(), {
      status: response.status,
      headers: publicHeaders(response.headers),
    });
  } catch {
    return new Response("Unsubscribe service is temporarily unavailable.", {
      status: 502,
      headers: publicHeaders(),
    });
  }
}

export async function GET(request: Request) {
  return proxyUnsubscribe(request);
}

export async function POST(request: Request) {
  return proxyUnsubscribe(request);
}
