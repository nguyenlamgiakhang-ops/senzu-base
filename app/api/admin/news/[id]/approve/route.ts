import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { initDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  try {
    const { id } = await params;
    const sql = await initDB();
    const rows = await sql`
      UPDATE news_posts
      SET status = 'published', published_at = COALESCE(published_at, NOW()), updated_at = NOW()
      WHERE id = ${id}
      RETURNING id
    `;
    if (rows.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin news approve error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
