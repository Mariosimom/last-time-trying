import { NextRequest, NextResponse } from "next/server";

/**
 * Minimal handler that logs to Vercel Functions.
 * Replace with real email/CRM push (HubSpot, Airtable, Notion, etc).
 */
export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, phone, email, message } = body || {};
  if (!name || !phone) {
    return NextResponse.json({ ok: false, error: "Missing name/phone" }, { status: 400 });
  }

  console.log("LEAD | Selvara 3", { name, phone, email, message, ts: new Date().toISOString() });

  // Example: forward to a webhook
  // await fetch(process.env.LEADS_WEBHOOK_URL!, { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify({source:"selvara3", ...body}) });

  return NextResponse.json({ ok: true });
}
