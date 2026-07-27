import { neon, NeonQueryFunction } from "@neondatabase/serverless";

// Lazy init — chỉ tạo khi được gọi lần đầu (runtime), không chạy lúc build
let _sql: NeonQueryFunction<false, false> | null = null;

function getSQL(): NeonQueryFunction<false, false> {
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
  await sql`
    CREATE TABLE IF NOT EXISTS news_posts (
      id            SERIAL PRIMARY KEY,
      slug          VARCHAR(255) UNIQUE NOT NULL,
      category      VARCHAR(100) NOT NULL DEFAULT 'Thông cáo báo chí',
      title_vi      VARCHAR(500),
      title_ja      VARCHAR(500),
      excerpt_vi    TEXT,
      excerpt_ja    TEXT,
      body_vi       TEXT,
      body_ja       TEXT,
      image_url     TEXT,
      image_alt     VARCHAR(255),
      published     BOOLEAN NOT NULL DEFAULT FALSE,
      published_at  TIMESTAMPTZ,
      created_at    TIMESTAMPTZ DEFAULT NOW(),
      updated_at    TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  // Bài viết cũ được tạo khi title_vi/title_ja còn ràng buộc NOT NULL — nới lỏng để cho phép chỉ đăng 1 ngôn ngữ.
  await sql`ALTER TABLE news_posts ALTER COLUMN title_vi DROP NOT NULL`;
  await sql`ALTER TABLE news_posts ALTER COLUMN title_ja DROP NOT NULL`;

  await sql`
    CREATE TABLE IF NOT EXISTS news_categories (
      id          SERIAL PRIMARY KEY,
      name_vi     VARCHAR(255),
      name_ja     VARCHAR(255),
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  const categoryCount = await sql`SELECT COUNT(*)::int AS c FROM news_categories`;
  if (categoryCount[0].c === 0) {
    await sql`
      INSERT INTO news_categories (name_vi, name_ja) VALUES
        ('Thông cáo báo chí', 'プレスリリース'),
        ('Blog chuyên sâu', '特集ブログ'),
        ('Tin tức', 'ニュース')
    `;
  }

  await sql`ALTER TABLE news_posts ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES news_categories(id) ON DELETE SET NULL`;

  return sql;
}

export async function query(strings: TemplateStringsArray, ...values: unknown[]) {
  const sql = getSQL();
  return sql(strings, ...values);
}
