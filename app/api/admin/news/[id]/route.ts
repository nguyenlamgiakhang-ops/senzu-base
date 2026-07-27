import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";
import { slugify } from "@/lib/slugify";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const sql = await initDB();
    const rows = await sql`SELECT * FROM news_posts WHERE id = ${id}`;
    if (rows.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, post: rows[0] });
  } catch (err) {
    console.error("Admin news get error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
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
      published,
      slug: incomingSlug,
    } = body;

    if (!title_vi?.trim() && !title_ja?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing title" }, { status: 400 });
    }

    const sql = await initDB();

    const current = await sql`SELECT slug, published, published_at FROM news_posts WHERE id = ${id}`;
    if (current.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }

    let slug = incomingSlug ? slugify(incomingSlug) : current[0].slug;
    if (!slug) slug = current[0].slug;
    if (slug !== current[0].slug) {
      const clash = await sql`SELECT id FROM news_posts WHERE slug = ${slug} AND id != ${id}`;
      if (clash.length > 0) slug = `${slug}-${Date.now()}`;
    }

    const willPublish = !!published;
    const publishedAt = willPublish
      ? current[0].published_at ?? new Date().toISOString()
      : null;

    await sql`
      UPDATE news_posts SET
        slug = ${slug},
        category_id = ${category_id || null},
        title_vi = ${title_vi || null},
        title_ja = ${title_ja || null},
        excerpt_vi = ${excerpt_vi ?? null},
        excerpt_ja = ${excerpt_ja ?? null},
        body_vi = ${body_vi ?? null},
        body_ja = ${body_ja ?? null},
        image_url = ${image_url ?? null},
        image_alt = ${image_alt ?? null},
        published = ${willPublish},
        published_at = ${publishedAt},
        updated_at = NOW()
      WHERE id = ${id}
    `;

    return NextResponse.json({ ok: true, slug });
  } catch (err) {
    console.error("Admin news update error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const sql = await initDB();
    await sql`DELETE FROM news_posts WHERE id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin news delete error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
