"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import type { Locale } from "@/lib/translations";

const locales: { code: Locale; label: string }[] = [
  { code: "vi", label: "VI" },
  { code: "ja", label: "日本語" },
];

export default function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLanguage();

  return (
    <div className={`lang ${className ?? ""}`} role="group" aria-label="Ngôn ngữ / 言語">
      {locales.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          className={`lang-btn ${locale === code ? "on" : ""}`}
          onClick={() => setLocale(code)}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
