import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { initDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  try {
    const sql = await initDB();
    const rows = await sql`SELECT id, email, role, created_at FROM admin_users ORDER BY created_at ASC`;
    return NextResponse.json({ ok: true, members: rows });
  } catch (err) {
    console.error("Admin members list error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  try {
    const { email, role } = await req.json();
    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!cleanEmail) {
      return NextResponse.json({ ok: false, error: "Missing email" }, { status: 400 });
    }
    const cleanRole = role === "owner" ? "owner" : "member";

    const sql = await initDB();
    const rows = await sql`
      INSERT INTO admin_users (email, role)
      VALUES (${cleanEmail}, ${cleanRole})
      ON CONFLICT (email) DO UPDATE SET role = EXCLUDED.role
      RETURNING id, email, role
    `;
    return NextResponse.json({ ok: true, member: rows[0] });
  } catch (err) {
    console.error("Admin member create error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
