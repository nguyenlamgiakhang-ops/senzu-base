"use client";
import Link from "next/link";
import Image from "next/image";
import { Newspaper, Fire, Lightbulb } from "@phosphor-icons/react/dist/ssr";
import { useLanguage } from "@/contexts/LanguageContext";

const images = ["/news/外観①.jpg", "/news/ラウンジ②.jpg", "/news/エントランス①.jpg"];
const imgOpacity = ["opacity-50 group-hover:opacity-70", "opacity-50 group-hover:opacity-70", "opacity-30 group-hover:opacity-50"];
const badgeClass = [
  "bg-senzuGlow/20 border border-senzuGlow/30 text-senzuGlow",
  "bg-orange-500/20 border border-orange-500/30 text-orange-400",
  "bg-blue-500/20 border border-blue-500/30 text-blue-400",
];
const hoverTitle = ["group-hover:text-senzuGlow", "group-hover:text-orange-400", "group-hover:text-blue-400"];
const icons = [
  <Newspaper key="n" weight="duotone" size={12} />,
  <Fire key="f" weight="duotone" size={12} />,
  <Lightbulb key="l" weight="duotone" size={12} />,
];

export function JournalSection() {
  const { t } = useLanguage();
  const h = t.home;
  return (
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
          {h.newsItems.map((news, i) => (
            <Link href="/news" key={i} className="glass-card rounded-3xl overflow-hidden group block">
              <div className="relative h-44 overflow-hidden shrink-0">
                <Image
                  src={images[i]}
                  alt={news.title}
                  fill
                  loading="lazy"
                  className={`news-card-img object-cover ${imgOpacity[i]}`}
                />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(13,17,23,0) 0%, rgba(13,17,23,0.85) 100%)" }} />
                <div className="absolute top-3 left-3">
                  <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold ${badgeClass[i]}`}>
                    {icons[i]}{news.tag}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className={`text-lg font-bold mb-1 transition ${hoverTitle[i]}`}>{news.title}</h3>
                <p className="text-xs text-gray-400">{news.date}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
