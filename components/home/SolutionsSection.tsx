"use client";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

export function SolutionsSection() {
  const { t } = useLanguage();
  const h = t.home;
  return (
    <section className="below-fold py-12 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-4">{h.capBadge}</p>
          <h2 className="text-3xl md:text-5xl font-bold">
            {h.capH2} <span className="text-gradient">{h.capH2Span}</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-10">
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
            style={{ background: "rgba(0,184,92,0.12)", border: "1px solid rgba(0,184,92,0.3)" }}
          >
            {h.capSolutionsBtn}
            <span className="group-hover:translate-x-1 transition">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
