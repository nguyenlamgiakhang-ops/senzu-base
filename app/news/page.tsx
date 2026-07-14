"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import getNewsContent from "@/lib/i18n/news";
import PageHero from "@/components/PageHero";

export default function NewsPage() {
  const { locale } = useLanguage();
  const n = getNewsContent(locale);
  const nav = translations[locale].nav;

  return (
    <>
      <PageHero jp={n.hero.jp} title={n.hero.title} subtitle={n.hero.sub} crumbLabel={nav.news} homeLabel={nav.home} />

      <main className="page">
        <section className="section" id="news">
          <div className="wrap">
            <div className="news-head reveal">
              <div>
                <span className="eyebrow"><span className="jp-mini">{n.eyebrowJp}</span> {n.eyebrow}</span>
                <h2 className="h2" style={{ marginTop: ".35em" }}>{n.h2}</h2>
              </div>
            </div>

            <div className="news-grid-img">
              {n.cards.map((card, i) => (
                <a className="ncard-img reveal" href="#" key={i}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img className="ni" src={card.img} alt={card.alt} loading="lazy" />
                  <div className="nb">
                    <span className={`pill2 ${card.pillCls}`}>{card.pill}</span>
                    <h3>{card.title}</h3>
                    <p className="nd">{card.desc}</p>
                    {"tags" in card && card.tags && (
                      <div className="tags">
                        {card.tags.map((t) => <span key={t}>{t}</span>)}
                      </div>
                    )}
                    {"date" in card && card.date && <span className="date">{card.date}</span>}
                  </div>
                </a>
              ))}
            </div>

            <div className="careers-cta reveal">
              <div>
                <h3>
                  {n.careers.title.split("\n").map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </h3>
                <p>{n.careers.desc}</p>
              </div>
              <div className="careers-btns">
                <a className="btn-cream" href="https://www.linkedin.com/company/senzu-base/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                  {n.careers.btn1} <span className="a">→</span>
                </a>
                <a className="btn-outline" href="/contact">
                  {n.careers.btn2} <span className="a">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
