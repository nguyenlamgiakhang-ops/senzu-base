"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { List, X } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);

  // Đóng menu khi chuyển trang
  useEffect(() => { setIsOpen(false); }, [pathname]);

  // Khoá scroll body khi menu mở
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navItems = [
    { href: "/",        label: t.nav.home },
    { href: "/about",   label: t.nav.about },
    { href: "/services",label: t.nav.services },
    { href: "/news",    label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav className="fixed top-0 w-full z-50 glass-panel !rounded-none !border-x-0 !border-t-0 bg-black/10">
        <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="cursor-pointer flex items-center gap-2 group">
            <Image
              src="https://senzu.co.jp/wp-content/themes/senzu/assets/img/logo-hr.png"
              alt="Senzu Inc."
              width={120}
              height={32}
              className="h-8 w-auto brightness-200 contrast-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition"
            />
          </Link>

          {/* Desktop Nav Links */}
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

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <Link
              href="/contact"
              className="px-6 py-2 rounded-full border border-senzuGlow/30 text-senzuGlow hover:bg-senzuGlow hover:text-black transition duration-300 font-bold text-sm shadow-[0_0_15px_rgba(74,222,128,0.1)]"
            >
              {t.nav.startProject}
            </Link>
          </div>

          {/* Hamburger — mobile only */}
          <button
            className="md:hidden relative z-[60] p-2 text-white hover:text-senzuGlow transition-colors duration-200"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X size={26} weight="bold" /> : <List size={26} weight="bold" />}
          </button>
        </div>
      </nav>

      {/* Mobile Full-screen Overlay */}
      {isOpen && (
        <div
          className="mobile-nav-overlay fixed inset-0 z-40 md:hidden flex flex-col items-center justify-center px-8"
          style={{
            background: "rgba(2, 6, 23, 0.97)",
            backdropFilter: "blur(24px)",
            WebkitBackdropFilter: "blur(24px)",
          }}
        >
          {/* Decorative glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-senzu/10 blur-[120px] rounded-full pointer-events-none" />

          {/* Nav items */}
          <div className="relative flex flex-col items-center gap-8 w-full mb-10">
            {navItems.map((item, i) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`mobile-nav-item text-3xl font-bold tracking-widest uppercase transition-colors duration-200 ${
                  pathname === item.href ? "text-senzuGlow" : "text-white/75 hover:text-white"
                }`}
                style={{ animationDelay: `${i * 0.07}s` }}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Bottom CTA */}
          <div
            className="mobile-nav-item relative flex flex-col items-center gap-4 w-full max-w-xs"
            style={{ animationDelay: `${navItems.length * 0.07}s` }}
          >
            <LanguageSwitcher />
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-3 rounded-full bg-senzu hover:bg-green-500 text-white font-bold transition duration-300 shadow-[0_0_30px_rgba(0,132,61,0.4)]"
            >
              {t.nav.startProject}
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
