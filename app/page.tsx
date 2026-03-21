"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { Diamond } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

// Below-fold sections: lazy-loaded, không parse JS cho đến sau khi hero render xong
const OriginSection   = dynamic(() => import("@/components/home/OriginSection").then(m => m.OriginSection),   { ssr: false, loading: () => <div className="py-16 md:py-32" style={{ minHeight: 360 }} /> });
const SolutionsSection = dynamic(() => import("@/components/home/SolutionsSection").then(m => m.SolutionsSection), { ssr: false, loading: () => <div className="py-12 md:py-24" style={{ minHeight: 320 }} /> });
const ValuesSection   = dynamic(() => import("@/components/home/ValuesSection").then(m => m.ValuesSection),   { ssr: false, loading: () => <div className="py-12 md:py-24" style={{ minHeight: 320 }} /> });
const JournalSection  = dynamic(() => import("@/components/home/JournalSection").then(m => m.JournalSection),  { ssr: false, loading: () => <div className="py-12 md:py-24" style={{ minHeight: 400 }} /> });
const CTASection      = dynamic(() => import("@/components/home/CTASection").then(m => m.CTASection),      { ssr: false, loading: () => <div className="py-16 md:py-32" style={{ minHeight: 280 }} /> });

const partners = [
  { name: "CyberAgent", logo: "/partners/cyberagent.svg" },
  { name: "Google",     logo: "/partners/google.svg"     },
  { name: "Meta",       logo: "/partners/meta.svg"       },
  { name: "TikTok",     logo: "/partners/tiktok.svg"     },
  { name: "Yahoo!",     logo: "/partners/yahoo.svg"      },
  { name: "LINE",       logo: "/partners/line.svg"       },
];

export default function HomePage() {
  const { t } = useLanguage();
  const h = t.home;

  return (
    <div className="page-enter">
      {/* HERO — above fold, inline */}
      <section className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-10">
        <div className="max-w-6xl w-full grid md:grid-cols-12 gap-12 items-center relative z-10">
          <div className="md:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-panel border-senzu/30">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              <span className="text-xs font-bold text-green-300 tracking-[0.2em] uppercase">{h.badge}</span>
            </div>
            <h1 className="text-[2.25rem] sm:text-5xl md:text-8xl font-bold leading-tight tracking-tight">
              {h.h1Line1} <br />
              <span className="text-gradient">{h.h1Line2}</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed border-l-2 border-senzuGlow/50 pl-6">
              {h.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Link href="/services" className="px-8 py-4 rounded-full bg-senzu hover:bg-green-500 text-white font-bold transition duration-300 shadow-[0_0_40px_rgba(0,132,61,0.4)] flex items-center gap-2 group">
                {h.exploreBtn}
                <span className="group-hover:translate-x-1 transition">→</span>
              </Link>
              <Link href="/about" className="px-8 py-4 rounded-full glass-panel hover:bg-white/10 transition font-medium">
                {h.dnaBtn}
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative h-[600px] hidden md:flex items-center justify-center">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00843D] blur-[140px] rounded-full opacity-30 pointer-events-none"></div>
            <div className="relative w-[300px] h-[420px] rounded-[40px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.6)] border border-white/10 z-10">
              <Image src="/news/ラウンジ①.jpg" alt="SENZU Office" fill priority className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
            <div className="absolute bottom-20 left-0 z-20 flex items-center gap-3 px-5 py-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-white/10 shadow-xl animate-float">
              <Diamond weight="duotone" className="text-senzuGlow shrink-0" size={28} />
              <div>
                <span className="text-2xl font-extrabold text-white block leading-none tracking-tight">200+</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.35em]">{h.projectsLabel}</span>
              </div>
            </div>
            <div className="absolute top-14 right-0 z-20 px-5 py-4 rounded-2xl bg-black/50 backdrop-blur-xl border border-senzu/30 shadow-xl animate-float" style={{ animationDelay: "-3s" }}>
              <span className="text-[9px] text-senzuGlow uppercase tracking-[0.35em] font-black block mb-1">{h.coreStrength}</span>
              <span className="text-lg font-bold text-white leading-tight block whitespace-nowrap">Japan × Viet Nam</span>
              <p className="text-xs text-gray-400 mt-2">{h.jpStandard}</p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-[10px] uppercase tracking-widest">{h.scrollText}</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* MARQUEE — above fold, inline */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-8 overflow-hidden relative flex w-full">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
        {[0, 1].map((d) => (
          <div key={d} aria-hidden={d === 1} className="flex whitespace-nowrap animate-marquee items-center gap-16 pr-16 shrink-0 min-w-max">
            {[...partners, ...partners].map((partner, i) => (
              <span key={i} className="flex items-center gap-16">
                <img src={partner.logo} alt={partner.name} height={28} width={80} className="partner-logo h-7 w-auto" />
                <span className="text-senzuGlow/30 text-sm select-none">✦</span>
              </span>
            ))}
          </div>
        ))}
      </section>

      {/* Below-fold sections — lazy-loaded */}
      <OriginSection />
      <SolutionsSection />
      <ValuesSection />
      <JournalSection />
      <CTASection />
    </div>
  );
}
