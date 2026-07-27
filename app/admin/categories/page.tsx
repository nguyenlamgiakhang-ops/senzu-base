import { initDB } from "@/lib/db";
import AdminCategoriesListClient from "@/components/admin/AdminCategoriesListClient";

export const dynamic = "force-dynamic";

export default async function AdminCategoriesPage() {
  const sql = await initDB();
  const categories = await sql`
    SELECT id, name_vi, name_ja
    FROM news_categories
    ORDER BY id ASC
  `;

  return <AdminCategoriesListClient categories={categories as never} />;
}
