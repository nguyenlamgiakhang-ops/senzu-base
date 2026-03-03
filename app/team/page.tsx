"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const labels: Record<string, { badge: string; h1: string; h1Span: string; subtitle: string; caption: string }> = {
  vi: {
    badge: "/// Our People",
    h1: "Đội ngũ",
    h1Span: "Senzu",
    subtitle: "Những con người tạo nên sự khác biệt — mỗi thành viên là một mắt xích trong hành trình kiến tạo giá trị.",
    caption: "Thư mục nội bộ Senzu Inc.",
  },
  en: {
    badge: "/// Our People",
    h1: "The",
    h1Span: "Senzu Team",
    subtitle: "The people who make the difference — each member a vital link in our journey to create real value.",
    caption: "Senzu Inc. Internal Directory",
  },
  ja: {
    badge: "/// Our People",
    h1: "Senzuの",
    h1Span: "チーム",
    subtitle: "価値を創り出す旅における、一人ひとりがかけがえない存在です。",
    caption: "Senzu Inc. 社内ディレクトリ",
  },
};

export default function TeamPage() {
  const { locale } = useLanguage();
  const l = labels[locale] ?? labels.vi;

  return (
    <div className="page-enter">
      {/* Hero */}
      <section className="py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{l.badge}</p>
          <h1 className="text-[2.25rem] sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            {l.h1} <span className="text-gradient">{l.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">{l.subtitle}</p>
        </div>
      </section>

      {/* Canva Embed */}
      <section className="px-4 md:px-6 pb-24 md:pb-32">
        <div className="max-w-3xl mx-auto">
          <div
            className="glass-card overflow-hidden"
            style={{ borderRadius: "1.5rem", height: "calc(100vh - 160px)", minHeight: "500px" }}
          >
            <iframe
              loading="lazy"
              src="https://www.canva.com/design/DAHC4Y-Rcvk/V1qVCAA7NcUztcVn6aFUgg/view?embed"
              allowFullScreen
              allow="fullscreen"
              style={{
                width: "100%",
                height: "100%",
                border: "none",
                display: "block",
              }}
            />
          </div>

          {/* Caption */}
          <p className="text-center text-xs text-gray-600 mt-4 tracking-widest uppercase">
            {l.caption}
          </p>
        </div>
      </section>
    </div>
  );
}
