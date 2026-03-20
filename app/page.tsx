"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Diamond,
  Eye,
  Leaf,
  Target,
  Newspaper,
  Fire,
  Lightbulb,
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

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
      {/* HERO */}
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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-[#00843D] blur-[140px] rounded-full opacity-40"></div>
            <div className="absolute top-12 right-0 w-[280px] h-[380px] rounded-[40px] bg-black/40 backdrop-blur-2xl border border-white/10 p-8 flex flex-col justify-between shadow-2xl animate-float z-10 rotate-3 hover:rotate-0 hover:z-30 transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <Diamond weight="duotone" className="text-senzuGlow" size={32} />
              </div>
              {/* Project image grid */}
              <div className="grid grid-cols-2 gap-2 my-2">
                {["/news/外観①.jpg", "/news/外観②.jpg", "/news/ラウンジ①.jpg", "/news/エントランス①.jpg"].map((src, i) => (
                  <div key={i} className="relative h-[72px] rounded-2xl overflow-hidden">
                    <Image src={src} alt="" fill className="object-cover opacity-60" />
                  </div>
                ))}
              </div>
              <div className="space-y-1">
                <span className="text-5xl font-extrabold text-white block tracking-tighter">200+</span>
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.4em] block">{h.projectsLabel}</span>
              </div>
            </div>
            <div className="absolute bottom-16 left-[-10px] w-[300px] rounded-[32px] bg-[#05110a]/10 border border-senzu/40 p-10 shadow-[0_40px_80px_rgba(0,0,0,0.7)] z-20 animate-float -rotate-3 hover:rotate-0 hover:z-30 transition-all duration-300 cursor-pointer" style={{ animationDelay: "-3s" }}>
              <div className="relative">
                <span className="text-[10px] text-senzuGlow uppercase tracking-[0.3em] font-black mb-6 block">{h.coreStrength}</span>
                <h3 className="text-4xl font-bold text-white leading-[1.1] tracking-tight">CyberAgent<br />DNA</h3>
                <p className="text-sm text-gray-400 mt-6 font-medium">{h.jpStandard}</p>
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-senzu/20 blur-2xl rounded-full"></div>
              </div>
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

      {/* MARQUEE */}
      <section className="border-y border-white/5 bg-black/20 backdrop-blur-sm py-8 overflow-hidden relative flex w-full">
        <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none"></div>
        {[0, 1].map((d) => (
          <div key={d} aria-hidden={d === 1} className="flex whitespace-nowrap animate-marquee items-center gap-16 pr-16 shrink-0 min-w-max">
            {[...partners, ...partners].map((partner, i) => (
              <span key={i} className="flex items-center gap-16">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  height={28}
                  width={80}
                  className="partner-logo h-7 w-auto"
                />
                <span className="text-senzuGlow/30 text-sm select-none">✦</span>
              </span>
            ))}
          </div>
        ))}
      </section>

      {/* ORIGIN */}
      <section className="below-fold py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-20 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.originBadge}</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight tracking-tight">
                {h.originH2Line1}<br />
                <span className="text-gradient">CyberAgent</span><br />
                {h.originH2Line2}
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">{h.originDesc}</p>
            <div className="flex flex-wrap gap-6 pt-4">
              {[
                { value: "May 2024", label: h.stats.founded },
                { value: "Tokyo", label: h.stats.hq },
                { value: "JP Std.", label: h.stats.standard },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-senzuGlow">{stat.value}</div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {h.statCards.map((card) => (
              <div key={card.label} className="glass-card rounded-3xl p-8 text-center">
                <div className="text-4xl font-extrabold text-white mb-2">{card.value}</div>
                <div className="text-xs text-gray-400 uppercase tracking-widest">{card.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLUTIONS OVERVIEW */}
      <section className="below-fold py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.capBadge}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{h.capH2} <span className="text-gradient">{h.capH2Span}</span></h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-10">
            {/* Agency card */}
            <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6">
              <div>
                <p className="text-senzuGlow text-xs font-black tracking-[0.35em] uppercase mb-2">{h.capAgencyLabel}</p>
                <h3 className="text-2xl font-bold text-white">{h.capAgencySubtitle}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {h.capabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-senzuGlow shrink-0" />
                    <span className="text-gray-300 text-sm">{cap.title}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Software card */}
            <div className="glass-card rounded-3xl p-8 md:p-10 flex flex-col gap-6">
              <div>
                <p className="text-senzuGlow text-xs font-black tracking-[0.35em] uppercase mb-2">{h.capSoftwareLabel}</p>
                <h3 className="text-2xl font-bold text-white">{h.capSoftwareSubtitle}</h3>
              </div>
              <div className="flex flex-col gap-3">
                {h.softwareCapabilities.map((cap, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-senzuGlow shrink-0" />
                    <span className="text-gray-300 text-sm">{cap.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition duration-300 text-white group hover:bg-senzuGlow hover:text-black"
              style={{
                background: "rgba(0,184,92,0.12)",
                border: "1px solid rgba(0,184,92,0.3)",
              }}
            >
              {h.capSolutionsBtn}
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* VALUES — asymmetric layout */}
      <section className="below-fold py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.valuesBadge}</p>
            <h2 className="text-3xl md:text-5xl font-bold">{h.valuesH2} <span className="text-gradient">{h.valuesH2Span}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured value — spans 2 cols, horizontal layout */}
            <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group relative overflow-hidden">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/60 to-transparent rounded-l-3xl"></div>
              <Eye weight="duotone" size={80} className="text-senzuGlow shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-2">01</p>
                <h3 className="text-2xl font-bold mb-3">{h.values[0].title}</h3>
                <p className="text-gray-400 leading-relaxed">{h.values[0].desc}</p>
              </div>
            </div>

            {/* Two compact values stacked */}
            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-3xl p-8 flex gap-5 items-start group relative overflow-hidden flex-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/40 to-transparent rounded-l-3xl"></div>
                <Leaf weight="duotone" size={40} className="text-senzuGlow shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-1">02</p>
                  <h3 className="text-lg font-bold mb-2">{h.values[1].title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{h.values[1].desc}</p>
                </div>
              </div>

              <div className="glass-card rounded-3xl p-8 flex gap-5 items-start group relative overflow-hidden flex-1">
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/40 to-transparent rounded-l-3xl"></div>
                <Target weight="duotone" size={40} className="text-senzuGlow shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                <div>
                  <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-1">03</p>
                  <h3 className="text-lg font-bold mb-2">{h.values[2].title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{h.values[2].desc}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNAL PREVIEW */}
      <section className="below-fold py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-3 mb-8 md:mb-12">
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.journalBadge}</p>
              <h2 className="text-4xl font-bold">{h.journalH2}</h2>
            </div>
            <Link href="/news" className="text-sm text-gray-400 hover:text-white transition flex items-center gap-2">
              {h.viewAll} <span>→</span>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {h.newsItems.map((news, i) => {
              const images = [
                "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80",
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
                "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
              ];
              const imgOpacity = [
                "opacity-50 group-hover:opacity-70",
                "opacity-50 group-hover:opacity-70",
                "opacity-30 group-hover:opacity-50",
              ];
              const badgeClass = [
                "bg-senzuGlow/20 border border-senzuGlow/30 text-senzuGlow",
                "bg-orange-500/20 border border-orange-500/30 text-orange-400",
                "bg-blue-500/20 border border-blue-500/30 text-blue-400",
              ];
              const hoverTitle = [
                "group-hover:text-senzuGlow",
                "group-hover:text-orange-400",
                "group-hover:text-blue-400",
              ];
              const icons = [
                <Newspaper key="n" weight="duotone" size={12} />,
                <Fire key="f" weight="duotone" size={12} />,
                <Lightbulb key="l" weight="duotone" size={12} />,
              ];
              return (
                <Link href="/news" key={i} className="glass-card rounded-3xl overflow-hidden group block">
                  <div className="relative h-44 overflow-hidden shrink-0">
                    <Image
                      src={images[i]}
                      alt={news.title}
                      fill
                      loading="lazy"
                      className={`news-card-img object-cover ${imgOpacity[i]}`}
                    />
                    <div
                      className="absolute inset-0"
                      style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0) 0%, rgba(13,17,23,0.85) 100%)" }}
                    />
                    <div className="absolute top-3 left-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass[i]}`}>
                        {icons[i]}{news.tag}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-1 transition ${hoverTitle[i]}`}>{news.title}</h3>
                    <p className="text-xs text-gray-500">{news.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="below-fold py-16 md:py-32 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-3xl md:rounded-[48px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-senzuGlow to-transparent"></div>
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{h.ctaBadge}</p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-6 leading-tight">
            {h.ctaH2}<br />
            <span className="text-gradient">{h.ctaH2Span}</span>
          </h2>
          <p className="text-gray-400 text-lg mb-10 max-w-lg mx-auto">{h.ctaDesc}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-5 rounded-full bg-senzu hover:bg-green-500 text-white font-bold transition duration-300 shadow-[0_0_40px_rgba(0,132,61,0.4)] group text-lg">
            {h.ctaBtn}
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
