import { neon } from "@neondatabase/serverless";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not set in environment variables.");
}

export const sql = neon(process.env.DATABASE_URL);

/** Tạo bảng nếu chưa tồn tại — gọi 1 lần khi server khởi động */
export async function initDB() {
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(255) NOT NULL,
      email       VARCHAR(255) NOT NULL,
      company     VARCHAR(255),
      budget      VARCHAR(100),
      service     VARCHAR(100),
      message     TEXT,
      created_at  TIMESTAMPTZ  DEFAULT NOW()
    )
  `;
}
