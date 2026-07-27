import { NextRequest, NextResponse } from "next/server";
import { put } from "@vercel/blob";

const MAX_SIZE = 10 * 1024 * 1024; // 10MB
const ALLOWED_TYPES = ["image/jpeg", "image/png", "image/webp", "image/gif"];

export async function POST(req: NextRequest) {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      return NextResponse.json(
        { ok: false, error: "BLOB_READ_WRITE_TOKEN chưa được cấu hình" },
        { status: 500 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file");

    if (!(file instanceof File)) {
      return NextResponse.json({ ok: false, error: "Thiếu file" }, { status: 400 });
    }
    if (!ALLOWED_TYPES.includes(file.type)) {
      return NextResponse.json({ ok: false, error: "Định dạng ảnh không hỗ trợ" }, { status: 400 });
    }
    if (file.size > MAX_SIZE) {
      return NextResponse.json({ ok: false, error: "Ảnh vượt quá 10MB" }, { status: 400 });
    }

    const ext = file.name.split(".").pop() || "jpg";
    const filename = `news/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;

    const blob = await put(filename, file, {
      access: "public",
      token: process.env.BLOB_READ_WRITE_TOKEN,
    });

    return NextResponse.json({ ok: true, url: blob.url });
  } catch (err) {
    console.error("Upload error:", err);
    return NextResponse.json({ ok: false, error: "Server error" }, { status: 500 });
  }
}
