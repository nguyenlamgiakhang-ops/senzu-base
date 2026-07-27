import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { initDB } from "@/lib/db";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const sql = await initDB();
    const rows = await sql`
      SELECT p.id, p.slug, p.category_id, c.name_vi AS category_name_vi, c.name_ja AS category_name_ja,
             p.title_vi, p.title_ja, p.excerpt_vi, p.excerpt_ja,
             p.image_url, p.image_alt, p.status, p.published_at, p.created_at, p.updated_at
      FROM news_posts p
      LEFT JOIN news_categories c ON c.id = p.category_id
      ORDER BY p.created_at DESC
    `;
    return NextResponse.json({ ok: true, posts: rows });
  } catch (err) {
    console.error("Admin news list error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.role) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }
  try {
    const body = await req.json();
    const {
      category_id,
      title_vi,
      title_ja,
      excerpt_vi,
      excerpt_ja,
      body_vi,
      body_ja,
      image_url,
      image_alt,
      status,
    } = body;

    if (!title_vi?.trim() && !title_ja?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing title" }, { status: 400 });
    }

    const requestedStatus = status === "published" || status === "pending" ? status : "draft";
    // Member không bao giờ được tự set published trực tiếp, kể cả khi cố gửi thẳng qua API —
    // luôn ép về "pending" (chờ Owner duyệt) bất kể client gửi gì.
    const finalStatus =
      requestedStatus === "published" && session.user.role !== "owner" ? "pending" : requestedStatus;

    const sql = await initDB();

    let slug = slugify(title_vi || title_ja);
    if (!slug) slug = `bai-viet-${Date.now()}`;
    const existing = await sql`SELECT id FROM news_posts WHERE slug = ${slug}`;
    if (existing.length > 0) {
      slug = `${slug}-${Date.now()}`;
    }

    const publishedAt = finalStatus === "published" ? new Date().toISOString() : null;

    const rows = await sql`
      INSERT INTO news_posts
        (slug, category_id, title_vi, title_ja, excerpt_vi, excerpt_ja, body_vi, body_ja, image_url, image_alt, status, published_at, updated_at)
      VALUES
        (${slug}, ${category_id || null}, ${title_vi || null}, ${title_ja || null}, ${excerpt_vi ?? null}, ${excerpt_ja ?? null},
         ${body_vi ?? null}, ${body_ja ?? null}, ${image_url ?? null}, ${image_alt ?? null}, ${finalStatus}, ${publishedAt}, NOW())
      RETURNING id, slug
    `;

    return NextResponse.json({ ok: true, post: rows[0] });
  } catch (err) {
    console.error("Admin news create error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
