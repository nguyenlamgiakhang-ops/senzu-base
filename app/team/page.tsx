"use client";

import Image from "next/image";
import Link from "next/link";
import { Briefcase, Trophy, Heart } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

const ceos = [
  {
    imgSrc: "/ceo_images/nguyen_huu_thang.png",
    imgAlt: "Nguyen Huu Thang",
    key: "vn" as const,
    borderColor: "rgba(0, 184, 92, 0.35)",
    glowColor: "rgba(0, 184, 92, 0.12)",
    labelColor: "#00B85C",
    labelBg: "rgba(0, 184, 92, 0.15)",
    imgStyle: {},
  },
  {
    imgSrc: "/ceo_images/%E5%B9%B3%E5%8E%9F%20%E5%8C%A0.jpg",
    imgAlt: "Hirahara Takumi",
    key: "jp" as const,
    borderColor: "rgba(0, 184, 92, 0.35)",
    glowColor: "rgba(0, 184, 92, 0.12)",
    labelColor: "#00B85C",
    labelBg: "rgba(0, 184, 92, 0.15)",
    imgStyle: { objectPosition: "50% calc(0% - 150px)" },
  },
];

export default function TeamPage() {
  const { t } = useLanguage();
  const tm = t.team;

  return (
    <div className="page-enter">
      {/* ── Hero ── */}
      <section className="py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">
            {tm.badge}
          </p>
          <h1 className="text-[2.25rem] sm:text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {tm.h1} <span className="text-gradient">{tm.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            {tm.subtitle}
          </p>
        </div>
      </section>

      {/* ── CEO Cards ── */}
      <section className="py-10 md:py-16 px-4 md:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {ceos.map((ceo) => {
            const data = tm[ceo.key];
            return (
              <div
                key={ceo.key}
                className="glass-card rounded-3xl overflow-hidden flex flex-col"
                style={{ border: `1px solid ${ceo.borderColor}` }}
              >
                {/* Photo */}
                <div className="relative w-full h-80 md:h-96 overflow-hidden">
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `radial-gradient(ellipse at top, ${ceo.glowColor} 0%, transparent 60%)`,
                    }}
                  />
                  <Image
                    src={ceo.imgSrc}
                    alt={ceo.imgAlt}
                    fill
                    unoptimized
                    className="object-cover object-top"
                    style={ceo.imgStyle}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {/* Gradient overlay bottom */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 45%, rgba(2,6,23,0.97) 100%)",
                    }}
                  />
                  {/* Origin badge */}
                  <div className="absolute top-4 left-4">
                    <span
                      className="text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full text-white"
                      style={{
                        background: ceo.labelBg,
                        border: `1px solid ${ceo.borderColor}`,
                        backdropFilter: "blur(8px)",
                      }}
                    >
                      {data.origin}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="px-6 md:px-8 pb-8 -mt-6 flex flex-col gap-6">
                  {/* Name + title */}
                  <div>
                    <p
                      className="text-[10px] font-black tracking-[0.35em] uppercase mb-1"
                      style={{ color: ceo.labelColor }}
                    >
                      {data.title}
                    </p>
                    <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                      {data.name}
                    </h2>
                  </div>

                  {/* Bio */}
                  <ul className="space-y-2.5">
                    {data.bio.map((line, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span
                          className="mt-2 w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ background: ceo.labelColor }}
                        />
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {line}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {/* Career */}
                  <div
                    className="pt-4 border-t"
                    style={{ borderColor: ceo.borderColor }}
                  >
                    <p
                      className="text-[10px] font-black tracking-[0.3em] uppercase mb-3 flex items-center gap-2"
                      style={{ color: ceo.labelColor }}
                    >
                      <Briefcase size={12} weight="fill" />
                      {tm.careerLabel}
                    </p>
                    <div className="space-y-2">
                      {data.career.map((c, i) => (
                        <div key={i} className="flex items-start gap-3">
                          <span
                            className="text-[10px] font-bold shrink-0 mt-0.5 whitespace-nowrap"
                            style={{ color: ceo.labelColor, opacity: 0.8 }}
                          >
                            {c.period}
                          </span>
                          <span className="text-gray-400 text-xs leading-relaxed">
                            {c.role}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Achievement */}
                  <div
                    className="rounded-2xl px-4 py-3"
                    style={{
                      background: ceo.labelBg,
                      border: `1px solid ${ceo.borderColor}`,
                    }}
                  >
                    <p
                      className="text-[10px] font-black tracking-[0.3em] uppercase mb-1 flex items-center gap-2"
                      style={{ color: ceo.labelColor }}
                    >
                      <Trophy size={12} weight="fill" />
                      {tm.achievementLabel}
                    </p>
                    <p className="text-white text-sm font-medium">
                      {data.achievement}
                    </p>
                  </div>

                  {/* Hobbies */}
                  <div className="flex items-start gap-2">
                    <Heart
                      size={13}
                      weight="fill"
                      className="mt-0.5 shrink-0"
                      style={{ color: ceo.labelColor }}
                    />
                    <p className="text-gray-500 text-xs leading-relaxed">
                      <span
                        className="font-bold mr-1"
                        style={{ color: ceo.labelColor, opacity: 0.8 }}
                      >
                        {tm.hobbiesLabel}:
                      </span>
                      {data.hobbies}
                    </p>
                  </div>

                  {/* Quote */}
                  <div
                    className="mt-auto pt-4 border-t"
                    style={{ borderColor: ceo.borderColor }}
                  >
                    <p className="text-sm italic text-gray-300 leading-relaxed">
                      {data.quote}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="py-12 md:py-24 px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">
            {tm.visionBadge}
          </p>
          <h2 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-8">
            {tm.visionH2}{" "}
            <span className="text-gradient">{tm.visionH2Span}</span>
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mx-auto mb-12">
            {tm.visionDesc}
          </p>

          <div className="flex items-center justify-center gap-6 mb-12">
            <div
              className="h-px flex-1 max-w-32"
              style={{ background: "rgba(0,184,92,0.3)" }}
            />
            <span className="text-2xl">🤝</span>
            <div
              className="h-px flex-1 max-w-32"
              style={{ background: "rgba(99,179,237,0.3)" }}
            />
          </div>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full font-bold text-sm transition duration-300 text-white hover:bg-senzuGlow hover:text-black"
            style={{
              background: "rgba(0, 184, 92, 0.15)",
              border: "1px solid rgba(0, 184, 92, 0.35)",
              boxShadow: "0 0 30px rgba(0, 184, 92, 0.1)",
            }}
          >
            Start a Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
