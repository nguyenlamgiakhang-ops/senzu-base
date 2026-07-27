"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import PageHero from "@/components/PageHero";

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

export default function NewsDetailClient({ post }: { post: Post }) {
  const { locale } = useLanguage();
  const nav = translations[locale].nav;

  const title = (locale === "ja" ? post.title_ja : post.title_vi) || post.title_vi || post.title_ja || "";
  const body = (locale === "ja" ? post.body_ja : post.body_vi) || post.body_vi || post.body_ja;
  const date = post.published_at
    ? new Date(post.published_at).toLocaleDateString(locale === "ja" ? "ja-JP" : "vi-VN")
    : "";
  const category =
    (locale === "ja" ? post.category_ja : post.category_vi) || post.category_vi || post.category_ja || "";

  return (
    <>
      <PageHero jp={category} title={title} subtitle={date} crumbLabel={nav.news} homeLabel={nav.home} />

      <main className="page">
        <section className="section">
          <div className="wrap news-article">
            {post.image_url && (
              <div className="news-article-cover-wrap">
                <Image
                  src={post.image_url}
                  alt={post.image_alt || title}
                  fill
                  sizes="(max-width: 800px) 100vw, 760px"
                  className="news-article-cover"
                  priority
                />
              </div>
            )}
            <div className="news-article-body" dangerouslySetInnerHTML={{ __html: body || "" }} />
            <div className="news-article-back">
              <a href="/news" className="btn-outline">
                ← {nav.news}
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
