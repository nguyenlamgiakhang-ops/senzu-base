import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { initDB } from "@/lib/db";

const NOTIFY_EMAIL = process.env.CONTACT_NOTIFY_EMAIL || "nguyen_lam_gia_khang@senzu.co.jp";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || "SENZU BASE <onboarding@resend.dev>";

async function sendNotificationEmail(data: {
  name: string;
  email: string;
  company?: string;
  budget?: string;
  service: string;
  message: string;
}) {
  if (!process.env.RESEND_API_KEY) {
    console.warn("RESEND_API_KEY not set — skipping contact notification email");
    return;
  }
  const resend = new Resend(process.env.RESEND_API_KEY);
  await resend.emails.send({
    from: FROM_EMAIL,
    to: NOTIFY_EMAIL,
    replyTo: data.email,
    subject: `[Liên hệ mới] ${data.name} — ${data.service}`,
    text: [
      `Họ và tên: ${data.name}`,
      `Email: ${data.email}`,
      `Công ty: ${data.company || "(không có)"}`,
      `Ngân sách: ${data.budget || "(không có)"}`,
      `Dịch vụ quan tâm: ${data.service}`,
      "",
      "Nội dung:",
      data.message,
    ].join("\n"),
  });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, company, budget, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const sql = await initDB();

    await sql`
      INSERT INTO contact_submissions (name, email, company, budget, service, message)
      VALUES (${name}, ${email}, ${company ?? null}, ${budget ?? null}, ${service}, ${message})
    `;

    try {
      await sendNotificationEmail({ name, email, company, budget, service, message });
    } catch (emailErr) {
      // Don't fail the request if only the notification email fails — the submission is already saved.
      console.error("Contact notification email error:", emailErr);
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
