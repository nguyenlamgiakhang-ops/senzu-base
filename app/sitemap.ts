import { MetadataRoute } from "next";
import { initDB } from "@/lib/db";

const BASE_URL = "https://senzu-base.vn";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/dna`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/solutions`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/news`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.6,
    },
  ];

  let newsRoutes: MetadataRoute.Sitemap = [];
  try {
    const sql = await initDB();
    const rows = await sql`
      SELECT slug, published_at, updated_at
      FROM news_posts
      WHERE status = 'published'
      ORDER BY published_at DESC
    `;
    newsRoutes = (rows as { slug: string; published_at: string | null; updated_at: string | null }[]).map(
      (r) => ({
        url: `${BASE_URL}/news/${r.slug}`,
        lastModified: new Date(r.updated_at || r.published_at || Date.now()),
        changeFrequency: "monthly",
        priority: 0.6,
      })
    );
  } catch {
    // DB không sẵn sàng (vd. lúc build) — vẫn trả về sitemap với các trang tĩnh
  }

  return [...staticRoutes, ...newsRoutes];
}
