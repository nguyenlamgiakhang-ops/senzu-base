"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import getAboutContent from "@/lib/i18n/about";
import PageHero from "@/components/PageHero";

export default function AboutPage() {
  const { locale } = useLanguage();
  const a = getAboutContent(locale);
  const nav = translations[locale].nav;

  return (
    <>
      <PageHero jp={a.hero.jp} title={a.hero.title} subtitle={a.hero.sub} crumbLabel={nav.about} homeLabel={nav.home} />

      <main className="page">
        <section className="section about" id="about-content">
          <span className="bgk" style={{ top: "2%", left: "-1.5%" }}>創業</span>
          <div className="wrap">
            <div className="ldr-head reveal">
              <span className="eyebrow"><span className="jp-mini">{a.ceoSection.eyebrowJp}</span> {a.ceoSection.eyebrow}</span>
              <h2 className="h2">{a.ceoSection.h2Pre}<em>{a.ceoSection.h2Em}</em></h2>
            </div>

            <div className="ceo-msg reveal">
              <div className="ceo-wm-wrap"><span className="ceo-watermark">BASE</span></div>
              <div className="ceo-left">
                <h3 className="ceo-title">
                  {a.ceoSection.title.split("\n").map((line, i, arr) => (
                    <span key={i}>{line}{i < arr.length - 1 && <br />}</span>
                  ))}
                </h3>
                <div className="ceo-body">
                  {a.ceoSection.paragraphs.map((p, i) => <p key={i}>{p}</p>)}
                </div>
                <p className="ceo-sign">{a.ceoSection.sign} <span style={{ opacity: 0.6, fontWeight: 400 }}>{a.ceoSection.signJp}</span></p>
              </div>
              <div className="ceo-right">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/images/lp/HUhu_.png" alt="Nguyễn Hữu Thắng — CEO SENZU BASE" loading="lazy" />
              </div>
            </div>

            <div className="cta-block reveal" style={{ marginTop: "clamp(36px,5vw,56px)", borderRadius: 24, padding: "clamp(32px,4vw,56px)", textAlign: "center" }}>
              <p style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: "clamp(1.3rem,2.8vw,2rem)", color: "var(--cream)", lineHeight: 1.35, fontStyle: "italic", position: "relative" }}>
                {a.quote.text}
              </p>
              <p style={{ marginTop: 16, fontSize: ".92rem", color: "var(--sage)", fontWeight: 700, position: "relative" }}>{a.quote.by}</p>
            </div>

            <div className="about-intro" style={{ marginTop: "clamp(52px,7vw,88px)" }}>
              <div className="about-text reveal">
                <span className="eyebrow"><span className="jp-mini">{a.vision.eyebrowJp}</span> {a.vision.eyebrow}</span>
                <h2 className="h2">{a.vision.h2Line1}<br /><em>{a.vision.h2Em}</em></h2>
                <p className="lead">{a.vision.lead}</p>
                <a className="linka" href="/contact">{a.vision.linka} <span className="a">→</span></a>
              </div>
              <div className="about-cards reveal">
                <div className="mc">
                  <h3>{a.vision.mission.title}</h3>
                  <p>{a.vision.mission.desc}</p>
                </div>
                <div className="vc">
                  <h3>{a.vision.visionCard.title}</h3>
                  <p>{a.vision.visionCard.desc}</p>
                </div>
              </div>
            </div>

            <div className="ml reveal" style={{ marginTop: "clamp(52px,6vw,80px)" }}>
              {a.milestones.map((m, i) => (
                <div className="ml-r" key={i}>
                  <span className="ml-y">{m.y}</span>
                  <span className="ml-t">{m.t}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
