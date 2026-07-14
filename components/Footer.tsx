"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();

  const quickLinks = [
    { href: "/", label: t.nav.home },
    { href: "/dna", label: t.nav.dna },
    { href: "/solutions", label: t.nav.solutions },
    { href: "/about", label: t.nav.about },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <footer className="ftr" id="contact">
      <div className="wrap">
        <div className="ftr-grid">
          <div className="ftr-brand">
            <div className="fname">
              <span className="dot" />
              SENZU&nbsp;BASE
            </div>
            <p>{t.footer.tagline}</p>
          </div>
          <div className="ftr-col">
            <h3>{t.footer.quickLinks}</h3>
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="ftr-col">
            <h3>{t.footer.connect}</h3>
            <a
              href="https://www.linkedin.com/company/senzu-base/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a href="https://youtrust.jp/companies/c44abf177811e2833dee6db0f589d5c4" target="_blank" rel="noopener noreferrer">
              Youtrust
            </a>
            <a href="mailto:keiri_base@senzu.co.jp">keiri_base@senzu.co.jp</a>
          </div>
        </div>
        <div className="ftr-bottom">
          <p>{t.footer.rights}</p>
          <div className="legal">
            <Link href="/privacy-policy">{t.footer.privacy}</Link>
            <Link href="/terms">{t.footer.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
