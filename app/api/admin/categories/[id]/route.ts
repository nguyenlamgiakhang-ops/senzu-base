import { NextRequest, NextResponse } from "next/server";
import { initDB } from "@/lib/db";

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const sql = await initDB();
    const rows = await sql`SELECT * FROM news_categories WHERE id = ${id}`;
    if (rows.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    return NextResponse.json({ ok: true, category: rows[0] });
  } catch (err) {
    console.error("Admin category get error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const { name_vi, name_ja } = await req.json();

    if (!name_vi?.trim() && !name_ja?.trim()) {
      return NextResponse.json({ ok: false, error: "Missing name" }, { status: 400 });
    }

    const sql = await initDB();
    await sql`
      UPDATE news_categories SET name_vi = ${name_vi || null}, name_ja = ${name_ja || null}
      WHERE id = ${id}
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin category update error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  try {
    const { id } = await params;
    const sql = await initDB();
    // FK is ON DELETE SET NULL — bài viết đang dùng chuyên mục này sẽ về "chưa phân loại", không bị chặn xoá.
    await sql`DELETE FROM news_categories WHERE id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin category delete error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
