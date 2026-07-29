import { cache } from "react";
import type { Metadata } from "next";
import { initDB } from "@/lib/db";
import { notFound } from "next/navigation";
import NewsDetailClient from "./NewsDetailClient";

export const dynamic = "force-dynamic";

const BASE_URL = "https://senzu-base.vn";

type Post = {
  slug: string;
  category_vi: string | null;
  category_ja: string | null;
  title_vi: string | null;
  title_ja: string | null;
  excerpt_vi: string | null;
  excerpt_ja: string | null;
  body_vi: string | null;
  body_ja: string | null;
  image_url: string | null;
  image_alt: string | null;
  published_at: string | null;
};

// cache() dedupes this across generateMetadata + the page component within
// the same request, so the DB is only hit once per page view.
const getPost = cache(async (slug: string): Promise<Post | null> => {
  const sql = await initDB();
  const rows = await sql`
    SELECT p.slug, c.name_vi AS category_vi, c.name_ja AS category_ja,
           p.title_vi, p.title_ja, p.excerpt_vi, p.excerpt_ja, p.body_vi, p.body_ja,
           p.image_url, p.image_alt, p.published_at
    FROM news_posts p
    LEFT JOIN news_categories c ON c.id = p.category_id
    WHERE p.slug = ${slug} AND p.status = 'published'
    LIMIT 1
  `;
  return (rows[0] as Post) ?? null;
});

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) return {};

  const title = post.title_vi || post.title_ja || "";
  const description = post.excerpt_vi || post.excerpt_ja || undefined;
  const url = `${BASE_URL}/news/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title,
      description,
      url,
      publishedTime: post.published_at ?? undefined,
      images: post.image_url ? [{ url: post.image_url, alt: post.image_alt || title }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: post.image_url ? [post.image_url] : undefined,
    },
  };
}

export default async function NewsDetailPage({ params }: Props) {
  const { slug } = await params;
  const post = await getPost(slug);
  if (!post) notFound();

  const title = post.title_vi || post.title_ja || "";
  const description = post.excerpt_vi || post.excerpt_ja || undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: title,
    description,
    image: post.image_url ? [post.image_url] : undefined,
    datePublished: post.published_at ?? undefined,
    dateModified: post.published_at ?? undefined,
    author: { "@type": "Organization", name: "Senzu Base" },
    publisher: {
      "@type": "Organization",
      name: "Senzu Base",
      logo: { "@type": "ImageObject", url: `${BASE_URL}/logo/SENZU BASE white.png` },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/news/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <NewsDetailClient post={post as never} />
    </>
  );
}
