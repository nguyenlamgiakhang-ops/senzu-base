import { NextRequest, NextResponse } from "next/server";
import { sql, initDB } from "@/lib/db";

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, budget, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    await initDB();

    await sql`
      INSERT INTO contact_submissions (name, email, company, budget, service, message)
      VALUES (${name}, ${email}, ${company ?? null}, ${budget ?? null}, ${service}, ${message})
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
