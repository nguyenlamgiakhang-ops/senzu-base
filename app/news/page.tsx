"use client";

import Link from "next/link";
import Image from "next/image";
import { Newspaper, Fire, Lightbulb, ArrowRight, UsersThree } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

export default function NewsPage() {
  const { t } = useLanguage();
  const n = t.news;

  return (
    <div className="page-enter">
      <section className="py-32 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{n.badge}</p>
          <h1 className="text-6xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {n.h1} <span className="text-gradient">{n.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">{n.subtitle}</p>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="glass-card rounded-3xl overflow-hidden group flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80" alt="Website Relaunch" fill className="news-card-img object-cover opacity-50 group-hover:opacity-70" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.9) 100%)" }}></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-senzuGlow/20 border border-senzuGlow/30 text-xs font-bold text-senzuGlow">
                  <Newspaper weight="duotone" size={12} />{n.card1.tag}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-senzuGlow transition">{n.card1.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{n.card1.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <span className="text-xs text-gray-500">{n.card1.date}</span>
                <span className="text-senzuGlow text-sm font-bold flex items-center gap-1">Read more <ArrowRight size={14} /></span>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden group flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80" alt="We're Hiring" fill className="news-card-img object-cover opacity-50 group-hover:opacity-70" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.9) 100%)" }}></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 border border-orange-500/30 text-xs font-bold text-orange-400">
                  <Fire weight="duotone" size={12} />{n.card2.tag}
                </span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2 group-hover:text-orange-400 transition">{n.card2.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-4">{n.card2.desc}</p>
              <div className="flex items-center justify-between mt-auto">
                <div className="flex gap-2">
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400">Remote</span>
                  <span className="px-2 py-1 rounded-md bg-white/5 text-xs text-gray-400">Freelance</span>
                </div>
                <Link href="https://youtrust.jp/companies/c44abf177811e2833dee6db0f589d5c4" target="_blank" rel="noopener noreferrer" className="text-orange-400 text-sm font-bold flex items-center gap-1">
                  {n.card2.applyText} <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </div>

          <div className="glass-card rounded-3xl overflow-hidden group opacity-70 flex flex-col">
            <div className="relative h-48 overflow-hidden shrink-0">
              <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80" alt="Insight Blog" fill className="news-card-img object-cover opacity-30 group-hover:opacity-50" />
              <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13, 17, 23, 0) 0%, rgba(13, 17, 23, 0.9) 100%)" }}></div>
              <div className="absolute top-4 left-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-xs font-bold text-blue-400">
                  <Lightbulb weight="duotone" size={12} />{n.card3.tag}
                </span>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="px-4 py-2 rounded-full bg-white/10 text-xs font-bold tracking-widest uppercase">{n.card3.comingSoon}</span>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <h3 className="text-xl font-bold mb-2">{n.card3.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed mb-4">{n.card3.desc}</p>
              <div className="mt-auto">
                <span className="text-xs text-gray-600">{n.card3.comingSoon}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto glass-card rounded-3xl p-12 text-center">
          <UsersThree weight="duotone" size={48} className="text-senzuGlow mx-auto mb-6" />
          <h2 className="text-3xl font-bold mb-4">{n.joinH2} <span className="text-gradient">{n.joinH2Span}</span></h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">{n.joinDesc}</p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Link href="https://youtrust.jp/companies/c44abf177811e2833dee6db0f589d5c4" target="_blank" rel="noopener noreferrer" className="px-8 py-3 rounded-full bg-senzu hover:bg-green-500 text-white font-bold transition">
              {n.joinBtn1}
            </Link>
            <Link href="/contact" className="px-8 py-3 rounded-full glass-panel hover:bg-white/10 transition font-medium">
              {n.joinBtn2}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
