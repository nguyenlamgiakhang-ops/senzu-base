"use client";
import { Eye, Leaf, Target } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export function ValuesSection() {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="below-fold py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.valuesBadge}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            {h.valuesH2} <span className="text-gradient">{h.valuesH2Span}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-2 glass-card rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-10 group relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/60 to-transparent rounded-l-3xl" />
            <Eye weight="duotone" size={80} className="text-senzuGlow shrink-0 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
            <div>
              <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-2">01</p>
              <h3 className="text-2xl font-bold mb-3">{h.values[0].title}</h3>
              <p className="text-gray-400 leading-relaxed">{h.values[0].desc}</p>
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="glass-card rounded-3xl p-8 flex gap-5 items-start group relative overflow-hidden flex-1">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/40 to-transparent rounded-l-3xl" />
              <Leaf weight="duotone" size={40} className="text-senzuGlow shrink-0 mt-1 opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
              <div>
                <p className="text-senzuGlow text-xs font-black tracking-[0.3em] uppercase mb-1">02</p>
                <h3 className="text-lg font-bold mb-2">{h.values[1].title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{h.values[1].desc}</p>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 flex gap-5 items-start group relative overflow-hidden flex-1">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-senzuGlow/40 to-transparent rounded-l-3xl" />
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
  );
}
