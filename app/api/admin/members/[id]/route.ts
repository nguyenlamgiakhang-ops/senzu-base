import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/auth";
import { initDB } from "@/lib/db";

export const dynamic = "force-dynamic";

async function countOwners(sql: Awaited<ReturnType<typeof initDB>>) {
  const rows = await sql`SELECT COUNT(*)::int AS c FROM admin_users WHERE role = 'owner'`;
  return rows[0].c as number;
}

export async function PUT(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  try {
    const { id } = await params;
    const { role } = await req.json();
    const cleanRole = role === "owner" ? "owner" : "member";

    const sql = await initDB();
    const current = await sql`SELECT role FROM admin_users WHERE id = ${id}`;
    if (current.length === 0) {
      return NextResponse.json({ ok: false, error: "Not found" }, { status: 404 });
    }
    if (current[0].role === "owner" && cleanRole === "member" && (await countOwners(sql)) <= 1) {
      return NextResponse.json(
        { ok: false, error: "Cannot demote the last remaining owner" },
        { status: 400 }
      );
    }

    await sql`UPDATE admin_users SET role = ${cleanRole} WHERE id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin member update error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (session?.user?.role !== "owner") {
    return NextResponse.json({ ok: false, error: "Forbidden" }, { status: 403 });
  }
  try {
    const { id } = await params;
    const sql = await initDB();
    const current = await sql`SELECT role FROM admin_users WHERE id = ${id}`;
    if (current.length === 0) {
      return NextResponse.json({ ok: true });
    }
    if (current[0].role === "owner" && (await countOwners(sql)) <= 1) {
      return NextResponse.json(
        { ok: false, error: "Cannot remove the last remaining owner" },
        { status: 400 }
      );
    }
    await sql`DELETE FROM admin_users WHERE id = ${id}`;
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Admin member delete error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
