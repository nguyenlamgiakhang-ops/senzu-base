import { initDB } from "@/lib/db";
import CategoryForm from "@/components/admin/CategoryForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditCategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const sql = await initDB();
  const rows = await sql`SELECT id, name_vi, name_ja FROM news_categories WHERE id = ${id}`;
  if (rows.length === 0) notFound();
  const c = rows[0] as { id: number; name_vi: string | null; name_ja: string | null };

  return (
    <>
      <AdminPageHeading titleKey="categoriesEdit" />
      <CategoryForm initial={{ id: c.id, name_vi: c.name_vi ?? "", name_ja: c.name_ja ?? "" }} />
    </>
  );
}
