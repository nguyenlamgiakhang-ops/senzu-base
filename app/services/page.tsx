"use client";

import { Target, PaintBrush, Plant, ChartBar, SealCheck } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="page-enter">
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{s.badge}</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {s.h1} <span className="text-gradient">{s.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            {s.subtitleMain}<em className="text-white not-italic">{s.subtitleEmphasis}</em>
          </p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-senzuGlow/10 border border-senzuGlow/20 mb-6">
                <Target weight="duotone" size={18} className="text-senzuGlow" />
                <span className="text-xs font-bold text-senzuGlow tracking-widest uppercase">{s.s1.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s1.title}</h2>
              <p className="text-gray-400 leading-relaxed">{s.s1.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Google Ads","Yahoo! Ads","SNS Ads (Meta/TikTok)","GA4 Analytics","GTM Setup","LP Optimization"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="text-senzuGlow shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                <PaintBrush weight="duotone" size={18} className="text-purple-400" />
                <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{s.s2.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s2.title}</h2>
              <p className="text-gray-400 leading-relaxed">{s.s2.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 md:order-1">
              {["Brand Identity","Touchpoint Design (O2O)","Emotional Connection","Visual Direction","Content Strategy","CX Mapping"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="text-purple-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <Plant weight="duotone" size={18} className="text-blue-400" />
                <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{s.s3.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s3.title}</h2>
              <p className="text-gray-400 leading-relaxed">{s.s3.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Marketer Development","Process Transfer","DX & Automation","KPI Framework","Team Building","Ops Consulting"].map((f) => (
                <div key={f} className="flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="text-blue-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{s.strengthBadge}</p>
            <h2 className="text-4xl font-bold">{s.strengthH2} <span className="text-gradient">{s.strengthH2Span}</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.strengths.map((strength, i) => {
              const icons = [
                <Target key="t" weight="duotone" size={28} className="text-senzuGlow" />,
                <ChartBar key="c" weight="duotone" size={28} className="text-senzuGlow" />,
                <SealCheck key="s" weight="duotone" size={28} className="text-senzuGlow" />,
              ];
              return (
                <div key={i} className="glass-card rounded-3xl p-8">
                  <div className="mb-4">{icons[i]}</div>
                  <h3 className="text-xl font-bold mb-3">{strength.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{strength.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
