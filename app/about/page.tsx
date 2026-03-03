"use client";

import { Buildings, Handshake, Users, Globe, Envelope, MapPin } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutPage() {
  const { t } = useLanguage();
  const a = t.about;

  return (
    <div className="page-enter">
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{a.badge}</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {a.h1} <span className="text-gradient">{a.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">「人生の起点を創る」</p>
          <p className="text-gray-500 text-lg mt-2">{a.mottoTranslation}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl p-10 space-y-6">
            <Buildings weight="duotone" size={36} className="text-senzuGlow" />
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-2">{a.originCard.label}</p>
              <h2 className="text-2xl font-bold mb-4">{a.originCard.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{a.originCard.desc}</p>
            </div>
            <div className="pt-4 border-t border-white/5">
              <div className="flex justify-between text-sm">
                <span className="text-gray-500">{a.originCard.founded}</span>
                <span className="font-semibold">May 2024</span>
              </div>
              <div className="flex justify-between text-sm mt-2">
                <span className="text-gray-500">{a.originCard.hq}</span>
                <span className="font-semibold">Tokyo, Japan</span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 space-y-6 border-senzuGlow/20">
            <Handshake weight="duotone" size={36} className="text-senzuGlow" />
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-2">{a.missionCard.label}</p>
              <h2 className="text-2xl font-bold mb-4">{a.missionCard.title}</h2>
              <p className="text-gray-400 text-sm leading-relaxed">{a.missionCard.desc}</p>
            </div>
            <div className="pt-4 border-t border-white/5 space-y-2">
              {a.missionCard.bullets.map((item) => (
                <div key={item} className="flex items-center gap-2 text-sm text-gray-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-senzuGlow"></span>
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-3xl p-10 space-y-6">
            <Users weight="duotone" size={36} className="text-senzuGlow" />
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-2">{a.companyCard.label}</p>
              <h2 className="text-2xl font-bold mb-4">{a.companyCard.title}</h2>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-sm">
                <MapPin weight="duotone" size={18} className="text-senzuGlow mt-0.5 shrink-0" />
                <span className="text-gray-400">PMO Shibuya II, 3-1-1-211 Shibuya, Tokyo</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Globe weight="duotone" size={18} className="text-senzuGlow shrink-0" />
                <span className="text-gray-400">senzu.co.jp</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Envelope weight="duotone" size={18} className="text-senzuGlow shrink-0" />
                <span className="text-gray-400">info@senzu.co.jp</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Users weight="duotone" size={18} className="text-senzuGlow shrink-0" />
                <span className="text-gray-400">{a.teamCount}</span>
              </div>
            </div>
            <div className="pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500">{a.ceoLabel}</p>
              <p className="font-semibold">Takumi Hirahara</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{a.cultureBadge}</p>
            <h2 className="text-4xl font-bold">{a.cultureH2} <span className="text-gradient">{a.cultureH2Span}</span></h2>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {a.fourS.map((s, i) => (
              <div key={s.word} className="glass-card rounded-3xl p-8 text-center">
                <div className="text-5xl font-black text-senzuGlow mb-2">
                  {s.letter}
                  <span className="text-xs font-normal text-gray-500 block mt-1">0{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold mb-3">{s.word}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
