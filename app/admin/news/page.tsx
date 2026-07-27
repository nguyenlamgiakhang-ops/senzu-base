import { initDB } from "@/lib/db";
import AdminNewsListClient from "@/components/admin/AdminNewsListClient";

export const dynamic = "force-dynamic";

export default async function AdminNewsListPage() {
  const sql = await initDB();
  const posts = await sql`
    SELECT p.id, p.title_vi, p.title_ja, p.published, p.created_at,
           c.name_vi AS category_name_vi, c.name_ja AS category_name_ja
    FROM news_posts p
    LEFT JOIN news_categories c ON c.id = p.category_id
    ORDER BY p.created_at DESC
  `;

  return <AdminNewsListClient posts={posts as never} />;
}
