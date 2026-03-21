"use client";

import Link from "next/link";
import Image from "next/image";
import { Envelope, LinkedinLogo, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/",         label: t.nav.home },
    { href: "/about",    label: t.nav.about },
    { href: "/services", label: t.nav.services },
    { href: "/news",     label: t.nav.news },
    { href: "/contact",  label: t.nav.contact },
  ];

  const connectLinks = [
    {
      href: "https://www.linkedin.com/company/senzu-inc",
      label: "LinkedIn",
      icon: <LinkedinLogo weight="duotone" size={15} />,
      external: true,
    },
    {
      href: "https://youtrust.jp/companies/c44abf177811e2833dee6db0f589d5c4",
      label: "Youtrust",
      icon: <ArrowUpRight weight="bold" size={13} />,
      external: true,
    },
    {
      href: "mailto:keiri_base@senzu.co.jp",
      label: "keiri_base@senzu.co.jp",
      icon: <Envelope weight="duotone" size={15} />,
      external: false,
    },
  ];

  return (
    <footer
      className="relative z-10"
      style={{
        background: "#06080C",
        borderTop: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 pt-14 md:pt-16 pb-8">

        {/* ── Main Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 mb-12 md:mb-16">

          {/* Col 1 — Brand */}
          <div className="space-y-5">
            <Link href="/" className="inline-block group">
              <Image
                src="/logo/SENZU BASE white.png"
                alt="Senzu Base"
                width={260}
                height={30}
                sizes="260px"
                className="h-18 w-auto brightness-200 contrast-125 group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] transition duration-300"
              />
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              {t.footer.tagline}
            </p>
            {/* Green accent line */}
            <div className="w-8 h-px bg-gradient-to-r from-senzuGlow to-transparent" />
          </div>

          {/* Col 2 — Quick Links */}
          <div className="space-y-5">
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-senzuGlow">
              Quick Links
            </p>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="footer-link text-sm">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Connect */}
          <div className="space-y-5">
            <p className="text-[10px] font-black tracking-[0.35em] uppercase text-senzuGlow">
              Connect
            </p>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="footer-link text-sm flex items-center gap-2"
                  >
                    <span className="opacity-60">{link.icon}</span>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-6"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.05)" }}
        >
          <p className="text-xs text-gray-400">
            © 2026 CÔNG TY TNHH SENZU BASE. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="footer-link text-xs">
              Privacy Policy
            </Link>
            <Link href="/terms" className="footer-link text-xs">
              Terms of Service
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
