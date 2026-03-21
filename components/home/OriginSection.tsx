"use client";
import { useLanguage } from "@/contexts/LanguageContext";

export function OriginSection() {
  const { t } = useLanguage();
  const h = t.home;
  return (
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
              { value: "Tokyo",    label: h.stats.hq },
              { value: "JP Std.",  label: h.stats.standard },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-senzuGlow">{stat.value}</div>
                <div className="text-xs text-gray-400 mt-1">{stat.label}</div>
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
  );
}
