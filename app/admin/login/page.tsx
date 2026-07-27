"use client";

import { googleSignIn } from "./actions";
import { useLanguage } from "@/contexts/LanguageContext";
import getAdminContent from "@/lib/i18n/admin";
import type { Locale } from "@/lib/translations";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const LOCALES: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "ja", label: "日本語" },
];

export default function AdminLoginPage() {
  const { locale, setLocale } = useLanguage();
  const t = getAdminContent(locale);

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-background text-foreground">
      <Card className="w-full max-w-sm text-center">
        <CardContent className="pt-6">
          <div className="mb-6 inline-flex gap-0.5 rounded-full bg-muted p-1" role="group">
            {LOCALES.map(({ code, label }) => (
              <button
                key={code}
                type="button"
                onClick={() => setLocale(code)}
                className={cn(
                  "rounded-full px-3 py-1 text-xs font-semibold transition-colors",
                  locale === code
                    ? "bg-background text-primary shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </button>
            ))}
          </div>

          <p className="mb-1 text-xs tracking-widest text-muted-foreground">{t.login.eyebrow}</p>
          <h1 className="mb-8 text-xl font-semibold">{t.login.title}</h1>

          <form action={googleSignIn}>
            <Button type="submit" className="w-full">
              {t.login.button}
            </Button>
          </form>

          <p className="mt-6 text-xs text-muted-foreground">{t.login.restricted}</p>
        </CardContent>
      </Card>
    </main>
  );
}
