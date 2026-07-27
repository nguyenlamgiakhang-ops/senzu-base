import { initDB } from "@/lib/db";
import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";

export const dynamic = "force-dynamic";

export default async function NewsDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sql = await initDB();
  const rows = await sql`
    SELECT p.slug, c.name_vi AS category_vi, c.name_ja AS category_ja,
           p.title_vi, p.title_ja, p.excerpt_vi, p.excerpt_ja, p.body_vi, p.body_ja,
           p.image_url, p.image_alt, p.published_at
    FROM news_posts p
    LEFT JOIN news_categories c ON c.id = p.category_id
    WHERE p.slug = ${slug} AND p.published = TRUE
    LIMIT 1
  `;
  if (rows.length === 0) notFound();

  return <NewsDetailClient post={rows[0] as never} />;
}
