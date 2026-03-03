import { neon } from "@neondatabase/serverless";

// Lazy init — chỉ tạo khi được gọi lần đầu (runtime), không chạy lúc build
let _sql: ReturnType<typeof neon> | null = null;

function getSQL() {
  if (!_sql) {
    if (!process.env.DATABASE_URL) {
      throw new Error("DATABASE_URL is not set in environment variables.");
    }
    _sql = neon(process.env.DATABASE_URL);
  }
  return _sql;
}

export async function initDB() {
  const sql = getSQL();
  await sql`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(255) NOT NULL,
      email       VARCHAR(255) NOT NULL,
      company     VARCHAR(255),
      budget      VARCHAR(255),
      service     VARCHAR(255),
      message     TEXT,
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  return sql;
}

export async function query(strings: TemplateStringsArray, ...values: unknown[]) {
  const sql = getSQL();
  return sql(strings, ...values);
}
