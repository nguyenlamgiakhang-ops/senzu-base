"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import { Newspaper, Tag } from "@phosphor-icons/react";
import { cn } from "@/lib/utils";

export default function AdminSidebar() {
  const pathname = usePathname();
  const { locale } = useLanguage();
  const t = getAdminContent(locale);

  const items = [
    { href: "/admin/news", label: t.sidebar.news, icon: Newspaper },
    { href: "/admin/categories", label: t.sidebar.categories, icon: Tag },
  ];

  return (
    <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col gap-6 border-r border-border bg-card px-4 py-6 md:flex">
      <div className="px-3 text-sm font-extrabold tracking-tight text-foreground">{t.brand}</div>
      <nav className="flex flex-col gap-1">
        {items.map(({ href, label, icon: Icon }) => {
          const active = pathname?.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2.5 rounded-md px-3 py-2.5 text-sm font-semibold transition-colors",
                active
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
              )}
            >
              <Icon size={18} weight={active ? "fill" : "regular"} />
              {label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
