"use client";

import Link from "next/link";
import {
  Diamond,
  Target,
  Sparkle,
  RocketLaunch,
  Eye,
  Leaf,
  Newspaper,
  Fire,
  Lightbulb,
} from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

const marqueeItems = [
  "CYBERAGENT","★","GOOGLE","★","META","★","TIKTOK","★","YAHOO!","★","LINE","★",
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
            <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight">
              {h.h1Line1} <br />
              <span className="text-gradient">{h.h1Line2}</span>
            </h1>
            <p className="text-xl text-gray-300 font-light max-w-lg leading-relaxed border-l-2 border-senzuGlow/50 pl-6">
              {h.subtitle}
            </p>
            <div className="flex gap-6 pt-6">
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
            <div className="absolute top-12 right-0 w-[280px] h-[380px] rounded-[40px] bg-black/40 backdrop-blur-2xl border border-white/10 p-10 flex flex-col justify-between shadow-2xl animate-float z-10 rotate-3 hover:rotate-0 hover:z-30 transition-all duration-300 cursor-pointer">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-white/20 to-transparent"></div>
                <Diamond weight="duotone" className="text-4xl text-senzuGlow" size={40} />
              </div>
              <div className="space-y-1">
                <span className="text-6xl font-extrabold text-white block tracking-tighter">200+</span>
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
          <div key={d} aria-hidden={d === 1} className="flex whitespace-nowrap animate-marquee items-center gap-20 pr-20 shrink-0 min-w-max">
            {[...marqueeItems, ...marqueeItems].map((item, i) => (
              <span key={i} className={item === "★" ? "text-senzuGlow/40 text-lg" : "text-2xl font-bold text-white/30 hover:text-white/80 transition cursor-default"}>{item}</span>
            ))}
          </div>
        ))}
      </section>

      {/* ORIGIN */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          <div className="space-y-8">
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.originBadge}</p>
              <h2 className="text-5xl md:text-6xl font-bold leading-tight tracking-tight">
                {h.originH2Line1}<br />
                <span className="text-gradient">CyberAgent</span><br />
                {h.originH2Line2}
              </h2>
            </div>
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">{h.originDesc}</p>
            <div className="flex gap-8 pt-4">
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

      {/* CAPABILITIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.capBadge}</p>
            <h2 className="text-5xl font-bold">{h.capH2} <span className="text-gradient">{h.capH2Span}</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {h.capabilities.map((cap, i) => {
              const icons = [
                <Target key="t" weight="duotone" size={32} className="text-senzuGlow" />,
                <Sparkle key="s" weight="duotone" size={32} className="text-senzuGlow" />,
                <RocketLaunch key="r" weight="duotone" size={32} className="text-senzuGlow" />,
              ];
              return (
                <div key={i} className="glass-card rounded-3xl p-10 group">
                  <div className="mb-6">{icons[i]}</div>
                  <h3 className="text-xl font-bold mb-3">{cap.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{cap.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES — asymmetric layout */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.valuesBadge}</p>
            <h2 className="text-5xl font-bold">{h.valuesH2} <span className="text-gradient">{h.valuesH2Span}</span></h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Featured value — spans 2 cols, horizontal layout */}
            <div className="md:col-span-2 glass-card rounded-3xl p-10 flex items-center gap-10 group relative overflow-hidden">
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
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-end mb-12">
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
              const icons = [
                <Newspaper key="n" weight="duotone" size={20} className="text-senzuGlow" />,
                <Fire key="f" weight="duotone" size={20} className="text-orange-400" />,
                <Lightbulb key="l" weight="duotone" size={20} className="text-blue-400" />,
              ];
              const colors = ["from-green-500/10", "from-orange-500/10", "from-blue-500/10"];
              return (
                <Link href="/news" key={i} className="glass-card rounded-3xl overflow-hidden group block">
                  <div className={`h-40 bg-gradient-to-br ${colors[i]} to-transparent flex items-center justify-center`}>
                    <div className="text-5xl opacity-30">{icons[i]}</div>
                  </div>
                  <div className="p-6">
                    <span className="text-xs text-senzuGlow font-bold tracking-widest uppercase">{news.tag}</span>
                    <h3 className="text-lg font-bold mt-2 mb-1 group-hover:text-senzuGlow transition">{news.title}</h3>
                    <p className="text-xs text-gray-500">{news.date}</p>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center glass-card rounded-[48px] p-16 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-1 bg-gradient-to-r from-transparent via-senzuGlow to-transparent"></div>
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{h.ctaBadge}</p>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
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
