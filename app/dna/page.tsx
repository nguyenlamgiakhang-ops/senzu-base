"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import getDnaContent from "@/lib/i18n/dna";
import PageHero from "@/components/PageHero";
import { StatIcon, ProblemIcon, MiscIcon } from "@/components/home/Icons";

const galleryImgs = ["anh-8.JPG", "anh-4.JPG", "anh-5.JPG", "anh-6.JPG", "anh-7.JPG"];
const galleryAreas = ["g-p", "g-a", "g-b", "g-c", "g-d"];

function StatOrProblemIcon({ icon }: { icon: number | string }) {
  return typeof icon === "number" ? <StatIcon index={icon} /> : <ProblemIcon name={icon} />;
}

export default function DnaPage() {
  const { locale } = useLanguage();
  const d = getDnaContent(locale);
  const nav = translations[locale].nav;

  return (
    <>
      <PageHero jp={d.hero.jp} title={d.hero.title} subtitle={d.hero.sub} crumbLabel={nav.dna} homeLabel={nav.home} />

      <main className="page">
        {/* Origin */}
        <section className="section dna" id="dna">
          <span className="bgk" style={{ top: "1%", right: "-1.5%" }}>起点</span>
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow"><span className="jp-mini">{d.origin.eyebrowJp}</span> {d.origin.eyebrow}</span>
              <h2 className="h2">{d.origin.h2Pre}<em>{d.origin.h2Em}</em></h2>
              <p className="lead">{d.origin.lead}</p>
              <div style={{ marginTop: "2em" }}>
                <a className="linka" href="/solutions">{d.origin.linka} <span className="a">→</span></a>
              </div>
            </div>
            <div className="stats reveal">
              {d.origin.stats.map((s) => (
                <div className="stat" key={s.label}>
                  <span className="stat-ic"><StatOrProblemIcon icon={s.icon} /></span>
                  <div><b>{s.value}</b><span className="stat-l">{s.label}</span></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission (dark) */}
        <section className="section dark-sec">
          <span className="bgk-q">使命</span>
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{d.mission.eyebrowJp}</span> {d.mission.eyebrow}</span>
              <h2 className="h2"><em>{d.mission.h2Em}</em>{d.mission.h2Post}</h2>
              <p className="lead">{d.mission.lead}</p>
            </div>
            <div className="qwrap reveal">
              <div className="qmethods">
                {d.mission.methods.map((m) => (
                  <div className="qm" key={m.title}>
                    <span className="qic"><MiscIcon name={m.icon} /></span>
                    <div><h4>{m.title}</h4><p>{m.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="kpi">
                {d.mission.kpi.map((k) => (
                  <div className="kpic" key={k.label}><b>{k.value}</b><span>{k.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Company info */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{d.company.eyebrowJp}</span> {d.company.eyebrow}</span>
              <h2 className="h2">{d.company.h2Pre}<em>{d.company.h2Em}</em></h2>
            </div>
            <div className="bases reveal">
              <div className="base bvn">
                <span className="bw">社</span>
                <div className="bhead">
                  <span className="bicon"><MiscIcon name={d.company.vn.icon} /></span>
                  <h3>{d.company.vn.title} <span className="loc">{d.company.vn.loc}</span></h3>
                </div>
                <ul>
                  {d.company.vn.items.map((it) => <li key={it}>{it}</li>)}
                  <li><a href={d.company.vn.link.href} style={{ color: "var(--olive)" }}>{d.company.vn.link.label}</a></li>
                </ul>
              </div>
              <div className="base-bridge">
                <span className="bc">⟷</span>
                <span>{d.company.bridgeLabel}</span>
              </div>
              <div className="base bjp">
                <span className="bw">拠</span>
                <div className="bhead">
                  <span className="bicon"><MiscIcon name={d.company.jp.icon} /></span>
                  <h3>{d.company.jp.title} <span className="loc">{d.company.jp.loc}</span></h3>
                </div>
                <ul>
                  {d.company.jp.items.map((it) => <li key={it}>{it}</li>)}
                  <li><a href={d.company.jp.link.href} style={{ color: "var(--olive)" }}>{d.company.jp.link.label}</a></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="section gallery-sec">
          <div className="wrap">
            <div className="gallery-head reveal">
              <span className="eyebrow"><span className="jp-mini">{d.gallery.eyebrowJp}</span> {d.gallery.eyebrow}</span>
            </div>
            <div className="gallery reveal">
              {galleryImgs.map((img, i) => (
                <figure className={`g-item ${galleryAreas[i]}`} key={img}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={`/images/lp/${img}`} loading="lazy" alt={d.gallery.alts[i]} />
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Culture 4S */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{d.culture.eyebrowJp}</span> {d.culture.eyebrow}</span>
              <h2 className="h2">{d.culture.h2Pre}<em>{d.culture.h2Em}</em></h2>
            </div>
            <div className="pgrid reveal">
              {d.culture.cards.map((c) => (
                <div className="pcard" data-n={c.n} key={c.n} style={{ ["--ac" as string]: c.ac, ["--acbg" as string]: c.acbg }}>
                  <span className="pic"><MiscIcon name={c.icon} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="punch-wrap reveal">
              <div className="punch-arrow">↓</div>
              <p className="punch">{d.culture.punchPre}<em>{d.culture.punchEm}</em>{d.culture.punchPost}</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
