import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  try {
    const { slug } = await params;
    const sql = await initDB();
    const rows = await sql`
      SELECT p.id, p.slug, c.name_vi AS category_vi, c.name_ja AS category_ja,
             p.title_vi, p.title_ja, p.excerpt_vi, p.excerpt_ja,
             p.body_vi, p.body_ja, p.image_url, p.image_alt, p.published_at
      FROM news_posts p
      LEFT JOIN news_categories c ON c.id = p.category_id
      WHERE p.slug = ${slug} AND p.published = TRUE
      LIMIT 1
    `;
    if (rows.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, post: rows[0] });
  } catch (err) {
    console.error("Public news detail error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
