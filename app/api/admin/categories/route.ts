import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sql = await initDB();
    const rows = await sql`
      SELECT id, name_vi, name_ja, created_at
      FROM news_categories
      ORDER BY id ASC
    `;
    return NextResponse.json({ ok: true, categories: rows });
  } catch (err) {
    console.error("Admin categories list error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const { name_vi, name_ja } = await req.json();

    if (!name_vi?.trim() && !name_ja?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing name" }, { status: 400 });
    }

    const sql = await initDB();
    const rows = await sql`
      INSERT INTO news_categories (name_vi, name_ja)
      VALUES (${name_vi || null}, ${name_ja || null})
      RETURNING id, name_vi, name_ja
    `;

    return NextResponse.json({ ok: true, category: rows[0] });
  } catch (err) {
    console.error("Admin category create error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
