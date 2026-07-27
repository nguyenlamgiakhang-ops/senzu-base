import { NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export async function GET() {
  try {
    const sql = await initDB();
    const rows = await sql`
      SELECT p.id, p.slug, c.name_vi AS category_vi, c.name_ja AS category_ja,
             p.title_vi, p.title_ja, p.excerpt_vi, p.excerpt_ja,
             p.image_url, p.image_alt, p.published_at
      FROM news_posts p
      LEFT JOIN news_categories c ON c.id = p.category_id
      WHERE p.published = TRUE
      ORDER BY p.published_at DESC NULLS LAST, p.created_at DESC
    `;
    return NextResponse.json({ ok: true, posts: rows });
  } catch (err) {
    console.error("Public news list error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
