"use client";

import { Target, PaintBrush, Plant, ChartBar, SealCheck, Browser, Lightning, Kanban, Star } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export default function ServicesPage() {
  const { t } = useLanguage();
  const s = t.services;

  return (
    <div className="page-enter">
      <section className="py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{s.badge}</p>
          <h1 className="text-[2.25rem] sm:text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {s.h1} <span className="text-gradient">{s.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
            {s.subtitleMain}<em className="text-white not-italic">{s.subtitleEmphasis}</em>
          </p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">

          {/* ── Agency Section ── */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10">
              <span className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase">{s.agencyLabel}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-gray-400 text-xs">{s.agencyDesc}</span>
            </div>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="space-y-6 mb-16">

          {/* S1 — Digital Marketing */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-senzuGlow/10 border border-senzuGlow/20 mb-6">
                  <Target weight="duotone" size={18} className="text-senzuGlow" />
                  <span className="text-xs font-bold text-senzuGlow tracking-widest uppercase">{s.s1.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s1.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s1.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>01</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Google Ads","Yahoo! Ads","SNS Ads (Meta/TikTok)","GA4 Analytics","GTM Setup","LP Optimization"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-senzuGlow shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* S2 — Brand Creative */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6">
                  <PaintBrush weight="duotone" size={18} className="text-purple-400" />
                  <span className="text-xs font-bold text-purple-400 tracking-widest uppercase">{s.s2.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s2.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s2.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>02</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:order-1">
              {["Brand Identity","Touchpoint Design (O2O)","Emotional Connection","Visual Direction","Content Strategy","CX Mapping"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-purple-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* S3 — In-house Training */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                  <Plant weight="duotone" size={18} className="text-blue-400" />
                  <span className="text-xs font-bold text-blue-400 tracking-widest uppercase">{s.s3.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s3.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s3.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>03</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Marketer Development","Process Transfer","DX & Automation","KPI Framework","Team Building","Ops Consulting"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-blue-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          </div>{/* end agency space-y-6 */}

          {/* ── IT / Software Section ── */}
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
            <div className="flex items-center gap-3 px-5 py-2 rounded-full glass-card border border-white/10">
              <span className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase">{s.itLabel}</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span className="text-gray-400 text-xs">{s.itDesc}</span>
            </div>
            <div className="h-px flex-1" style={{ background: "rgba(255,255,255,0.06)" }} />
          </div>

          <div className="space-y-6">

          {/* S4 — Landing Page Software */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-senzuGlow/10 border border-senzuGlow/20 mb-6">
                  <Browser weight="duotone" size={18} className="text-senzuGlow" />
                  <span className="text-xs font-bold text-senzuGlow tracking-widest uppercase">{s.s4.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s4.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s4.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>04</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:order-1">
              {["Drag & Drop Builder","Responsive Design","SEO Optimized","Custom Domain","A/B Testing","Analytics Built-in"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-senzuGlow shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* S5 — Auto Software */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20 mb-6">
                  <Lightning weight="duotone" size={18} className="text-amber-400" />
                  <span className="text-xs font-bold text-amber-400 tracking-widest uppercase">{s.s5.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s5.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s5.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>05</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {["Workflow Automation","Email & SMS Auto","CRM Integration","Chatbot","Scheduling","Auto Notifications"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-amber-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          {/* S6 — Management Software */}
          <div className="service-card glass-card rounded-3xl p-10 md:p-14 grid md:grid-cols-2 gap-10 items-center">
            <div className="md:order-2 relative overflow-hidden">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-6">
                  <Kanban weight="duotone" size={18} className="text-teal-400" />
                  <span className="text-xs font-bold text-teal-400 tracking-widest uppercase">{s.s6.badge}</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{s.s6.title}</h2>
                <p className="text-gray-400 leading-relaxed">{s.s6.desc}</p>
              </div>
              <span className="watermark-number absolute right-0 bottom-0 font-black leading-none select-none pointer-events-none text-white" style={{ fontSize: "200px", opacity: 0.03 }}>06</span>
            </div>
            <div className="grid grid-cols-2 gap-3 md:order-1">
              {["Dashboard","Real-time Reports","Team Management","KPI Tracking","Client Portal","Data Export"].map((f) => (
                <div key={f} className="service-tag flex items-center gap-2 text-sm text-gray-300 bg-white/5 rounded-xl p-3">
                  <SealCheck weight="duotone" size={16} className="service-tag-icon text-teal-400 shrink-0" />{f}
                </div>
              ))}
            </div>
          </div>

          </div>{/* end software space-y-6 */}
        </div>
      </section>

      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-10 md:mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{s.strengthBadge}</p>
            <h2 className="text-3xl md:text-4xl font-bold">{s.strengthH2} <span className="text-gradient">{s.strengthH2Span}</span></h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {s.strengths.map((strength, i) => {
              const icons = [
                <Target key="t" weight="duotone" size={28} className="text-senzuGlow" />,
                <ChartBar key="c" weight="duotone" size={28} className="text-senzuGlow" />,
                <Star key="s" weight="duotone" size={28} className="text-senzuGlow" />,
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
