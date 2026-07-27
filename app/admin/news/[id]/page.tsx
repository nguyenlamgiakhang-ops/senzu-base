import { initDB } from "@/lib/db";
import NewsForm, { type NewsStatus } from "@/components/admin/NewsForm";
import AdminPageHeading from "@/components/admin/AdminPageHeading";
import { auth } from "@/auth";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function EditNewsPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  const { id } = await params;
  const sql = await initDB();
  const rows = await sql`SELECT * FROM news_posts WHERE id = ${id}`;
  if (rows.length === 0) notFound();
  const p = rows[0] as {
    id: number;
    category_id: number | null;
    title_vi: string | null;
    title_ja: string | null;
    excerpt_vi: string | null;
    excerpt_ja: string | null;
    body_vi: string | null;
    body_ja: string | null;
    image_url: string | null;
    image_alt: string | null;
    status: NewsStatus;
  };

  return (
    <>
      <AdminPageHeading titleKey="newsEdit" />
      <NewsForm
        role={session?.user?.role ?? "member"}
        initial={{
          id: p.id,
          category_id: p.category_id,
          title_vi: p.title_vi ?? "",
          title_ja: p.title_ja ?? "",
          excerpt_vi: p.excerpt_vi ?? "",
          excerpt_ja: p.excerpt_ja ?? "",
          body_vi: p.body_vi ?? "",
          body_ja: p.body_ja ?? "",
          image_url: p.image_url ?? "",
          image_alt: p.image_alt ?? "",
          status: p.status,
        }}
      />
    </>
  );
}
