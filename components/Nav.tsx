"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLanguage();

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/about", label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 bg-black/10">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        <Link href="/" className="cursor-pointer flex items-center gap-2 group">
          <Image
            src="https://senzu.co.jp/wp-content/themes/senzu/assets/img/logo-hr.png"
            alt="Senzu Inc."
            width={120}
            height={32}
            className="h-8 w-auto brightness-200 contrast-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition"
          />
        </Link>

        <div className="hidden md:flex gap-12 text-sm font-medium tracking-wide uppercase">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="px-6 py-2 rounded-full border border-senzuGlow/30 text-senzuGlow hover:bg-senzuGlow hover:text-black transition duration-300 font-bold text-sm shadow-[0_0_15px_rgba(74,222,128,0.1)]"
          >
            {t.nav.startProject}
          </Link>
        </div>
      </div>
    </nav>
  );
}
