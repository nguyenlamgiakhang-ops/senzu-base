"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import LanguageSwitcher from "@/components/LanguageSwitcher";

export default function Nav() {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function measure() {
      if (navRef.current) {
        document.documentElement.style.setProperty("--nav-h", `${navRef.current.offsetHeight}px`);
      }
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/dna", label: t.nav.dna },
    { href: "/solutions", label: t.nav.solutions },
    { href: "/about", label: t.nav.about },
    { href: "/news", label: t.nav.news },
    { href: "/contact", label: t.nav.contact },
  ];

  return (
    <>
      <nav ref={navRef} className={`nav ${scrolled ? "scrolled" : ""}`} aria-label="Điều hướng chính">
        <Link className="brand" href="/" aria-label="SENZU BASE trang chủ">
          <span className="chip">
            <Image src="/images/lp/base_white_PNG.png" alt="SENZU BASE" width={146} height={52} priority style={{ height: 52, width: "auto" }} />
          </span>
        </Link>

        <div className="menu">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`link ${pathname === item.href ? "active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="nav-right">
          <LanguageSwitcher />
          <Link className="start" href="/contact">
            {t.nav.start} <span className="a">→</span>
          </Link>
          <button
            className="burger"
            aria-label={isOpen ? "Đóng menu" : "Mở menu"}
            onClick={() => setIsOpen((v) => !v)}
          >
            {isOpen ? "×" : "≡"}
          </button>
        </div>
      </nav>
      <div className="nav-spacer" aria-hidden="true" />

      <div className={`drawer ${isOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
            {item.label}
          </Link>
        ))}
        <div style={{ padding: "13px 0" }}>
          <LanguageSwitcher />
        </div>
        <Link className="start" href="/contact" onClick={() => setIsOpen(false)}>
          {t.nav.start} <span className="a">→</span>
        </Link>
      </div>
    </>
  );
}
