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

// initDB() chạy ~10 câu CREATE/ALTER mỗi lần gọi — vốn được thiết kế để idempotent
// (an toàn chạy lại nhiều lần), nhưng KHÔNG cần chạy lại mỗi request. Cache theo
// vòng đời process (mỗi cold start của serverless function tự có scope module mới,
// nên vẫn chạy đúng 1 lần sau mỗi lần "nguội") để đỡ tốn round-trip lên Neon.
let _migrated = false;

export async function initDB() {
  const sql = getSQL();
  if (_migrated) return sql;

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
  // Unique index thay cho kiểu kiểm tra "COUNT rồi INSERT" cũ — cách cũ bị race
  // condition khi nhiều request nguội (cold start) cùng gọi initDB() một lúc,
  // dẫn tới chèn trùng chuyên mục mặc định nhiều lần.
  await sql`CREATE UNIQUE INDEX IF NOT EXISTS news_categories_name_vi_idx ON news_categories (name_vi)`;
  await sql`
    INSERT INTO news_categories (name_vi, name_ja) VALUES
      ('Blog chuyên sâu', '特集ブログ'),
      ('Tin tức', 'ニュース')
    ON CONFLICT (name_vi) DO NOTHING
  `;

  await sql`ALTER TABLE news_posts ADD COLUMN IF NOT EXISTS category_id INTEGER REFERENCES news_categories(id) ON DELETE SET NULL`;

  await sql`
    CREATE TABLE IF NOT EXISTS admin_users (
      id          SERIAL PRIMARY KEY,
      email       VARCHAR(255) UNIQUE NOT NULL,
      role        VARCHAR(20) NOT NULL DEFAULT 'member',
      created_at  TIMESTAMPTZ DEFAULT NOW()
    )
  `;
  await sql`
    INSERT INTO admin_users (email, role) VALUES
      ('sunshine@senzu.co.jp', 'owner'),
      ('nguyen_lam_gia_khang@senzu.co.jp', 'owner'),
      ('senzu_dev@senzu.co.jp', 'owner')
    ON CONFLICT (email) DO NOTHING
  `;

  // status thay cho published boolean — cho phép luồng duyệt bài (draft → pending → published).
  // Cột published cũ vẫn còn trong bảng (không xoá để tránh rủi ro migrate) nhưng không nơi nào đọc nữa.
  await sql`ALTER TABLE news_posts ADD COLUMN IF NOT EXISTS status VARCHAR(20) NOT NULL DEFAULT 'draft'`;
  await sql`UPDATE news_posts SET status = 'published' WHERE published = TRUE AND status = 'draft'`;

  _migrated = true;
  return sql;
}

export async function query(strings: TemplateStringsArray, ...values: unknown[]) {
  const sql = getSQL();
  return sql(strings, ...values);
}
