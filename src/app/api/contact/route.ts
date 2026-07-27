import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(2).max(100),
  businessName: z.string().trim().min(2).max(150),
  email: z.string().email(),
  phone: z.string().trim().min(7).max(30),
  website: z.union([z.literal(""), z.string().url()]).optional(),
  helpType: z.enum(["New website", "Website redesign", "Local SEO help", "Website maintenance", "Not sure yet"]),
  contactMethod: z.enum(["Email", "Phone", "Text message"]),
  message: z.string().trim().min(20).max(3000),
  companyUrl: z.string().max(0).optional(),
});

export async function POST(request: Request) {
  const parsed = schema.safeParse(await request.json().catch(() => null));
  if (!parsed.success) return NextResponse.json({ error: "Please check the highlighted information and try again." }, { status: 400 });
  if (parsed.data.companyUrl) return NextResponse.json({ success: true });

  const portalId = process.env.HUBSPOT_PORTAL_ID;
  const formGuid = process.env.HUBSPOT_FORM_GUID;
  const accessTokens = [
    process.env.HUBSPOT_SERVICE_KEY,
    process.env.HUBSPOT_PERSONAL_ACCESS_KEY,
    process.env.HUBSPOT_API_KEY,
  ].filter((token, index, tokens): token is string => Boolean(token) && tokens.indexOf(token) === index);
  if (!accessTokens.length && (!portalId || !formGuid)) {
    return NextResponse.json(
      { error: "Online submissions are not active yet. Please email hello@forgedlocal.com instead." },
      { status: 503 },
    );
  }

  const [firstName, ...lastNameParts] = parsed.data.name.split(/\s+/);
  const projectContext = [
    `Help needed: ${parsed.data.helpType}`,
    `Preferred contact: ${parsed.data.contactMethod}`,
    parsed.data.website ? `Current website: ${parsed.data.website}` : null,
    "",
    parsed.data.message,
  ].filter((line): line is string => line !== null);

  const fields = [
    { name: "firstname", value: firstName },
    { name: "lastname", value: lastNameParts.join(" ") },
    { name: "company", value: parsed.data.businessName },
    { name: "email", value: parsed.data.email },
    { name: "phone", value: parsed.data.phone },
    { name: "message", value: projectContext.join("\n") },
  ].filter((field) => field.value);

  if (accessTokens.length) {
    const properties = Object.fromEntries(fields.map((field) => [field.name, field.value]));
    let providerResponse = "";
    for (const token of accessTokens) {
      const crmResponse = await fetch("https://api.hubapi.com/crm/v3/objects/contacts/batch/upsert", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          inputs: [{ id: parsed.data.email, idProperty: "email", properties }],
        }),
      });
      if (crmResponse.ok) return NextResponse.json({ success: true });
      providerResponse = await crmResponse.text();
      if (crmResponse.status !== 401 && crmResponse.status !== 403) break;
    }

    return NextResponse.json(
      {
        error: "We could not send your request. Please email hello@forgedlocal.com.",
        ...(process.env.NODE_ENV === "development" ? { providerResponse } : {}),
      },
      { status: 502 },
    );
  }

  const response = await fetch(`https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ fields }),
  });
  if (!response.ok) {
    const providerResponse = await response.text();
    return NextResponse.json(
      {
        error: "We could not send your request. Please email hello@forgedlocal.com.",
        ...(process.env.NODE_ENV === "development" ? { providerResponse } : {}),
      },
      { status: 502 },
    );
  }
  return NextResponse.json({ success: true });
}
