"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import type { Locale } from "@/lib/translations";
import { SignOut } from "@phosphor-icons/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "ja", label: "日本語" },
];

export default function AdminTopbar({
  userEmail,
  onSignOut,
}: {
  userEmail?: string | null;
  onSignOut: () => Promise<void>;
}) {
  const { locale, setLocale } = useLanguage();
  const t = getAdminContent(locale);

  return (
    <header className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-card px-8 py-3.5">
      <div className="inline-flex gap-0.5 rounded-full bg-muted p-1" role="group" aria-label="Locale">
        {LOCALES.map(({ code, label }) => (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={cn(
              "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
              locale === code
                ? "bg-background text-primary shadow-sm"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="flex items-center gap-4">
        {userEmail && <span className="text-sm text-muted-foreground">{userEmail}</span>}
        <form action={onSignOut}>
          <Button type="submit" variant="outline" size="sm">
            <SignOut size={15} />
            {t.topbar.signOut}
          </Button>
        </form>
      </div>
    </header>
  );
}
