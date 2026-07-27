"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";

type HeadingKey = "newsNew" | "newsEdit" | "categoriesNew" | "categoriesEdit";

export default function AdminPageHeading({ titleKey }: { titleKey: HeadingKey }) {
  const { locale } = useLanguage();
  const t = getAdminContent(locale);

  const titles: Record<HeadingKey, string> = {
    newsNew: t.news.newTitle,
    newsEdit: t.news.editTitle,
    categoriesNew: t.categories.newTitle,
    categoriesEdit: t.categories.editTitle,
  };

  return (
    <div className="admin-title-row">
      <h1>{titles[titleKey]}</h1>
    </div>
  );
}
