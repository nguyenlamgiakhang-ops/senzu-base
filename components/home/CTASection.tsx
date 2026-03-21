"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function CTASection() {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="below-fold py-16 md:py-32 px-4 md:px-6">
      <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl md:rounded-[48px] p-8 md:p-16 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-senzuGlow to-transparent" />
        <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{h.ctaBadge}</p>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
          {h.ctaH2}<br />
          <span className="text-gradient">{h.ctaH2Span}</span>
        </h2>
        <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">{h.ctaDesc}</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-senzu hover:bg-green-500 text-white font-bold transition duration-300 shadow-[0_0_40px_rgba(0,132,61,0.4)] group text-lg"
        >
          {h.ctaBtn}
          <span className="group-hover:translate-x-1 transition">→</span>
        </Link>
      </div>
    </section>
  );
}
