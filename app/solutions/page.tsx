"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import getHomeContent from "@/lib/i18n/home";
import getSolutionsContent from "@/lib/i18n/solutions";
import PageHero from "@/components/PageHero";
import PlatformWheel from "@/components/home/PlatformWheel";
import { MiscIcon, DuoIcon, CyberIcon, FlowStar, ProblemIcon, QualityIcon } from "@/components/home/Icons";

export default function SolutionsPage() {
  const { locale } = useLanguage();
  const s = getSolutionsContent(locale);
  const h = getHomeContent(locale);
  const nav = translations[locale].nav;

  return (
    <>
      <PageHero jp={s.hero.jp} title={s.hero.title} subtitle={s.hero.sub} crumbLabel={nav.solutions} homeLabel={nav.home} />

      <main className="page">
        <section className="section" id="solutions">
          <div className="wrap">
            {/* Agency */}
            <div className="sol-head reveal">
              <div>
                <span className="eyebrow"><span className="jp-mini">{s.agency.eyebrowJp}</span> {s.agency.eyebrow}</span>
                <h2 className="h2" style={{ marginTop: ".35em" }}>{s.agency.h2Pre}<em>{s.agency.h2Em}</em></h2>
              </div>
              <a className="linka" href="/contact">{s.agency.linka} <span className="a">→</span></a>
            </div>
            <div className="sol-grid">
              {s.agency.cards.map((card) => (
                <article className={`card-sol ${card.cls} reveal`} key={card.n}>
                  <div className="sol-left">
                    <span className="sol-badge">{card.n}</span><br />
                    <span className="tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                  </div>
                  <ul className="sol-list">
                    {card.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </article>
              ))}
            </div>

            {/* Software */}
            <div className="sol-head reveal" style={{ marginTop: "clamp(64px,9vw,108px)" }}>
              <div>
                <span className="eyebrow"><span className="jp-mini">{s.software.eyebrowJp}</span> {s.software.eyebrow}</span>
                <h2 className="h2" style={{ marginTop: ".35em" }}>{s.software.h2Pre}<em>{s.software.h2Em}</em>{s.software.h2Post}</h2>
              </div>
            </div>
            <div className="sol-grid">
              {s.software.cards.map((card) => (
                <article className={`card-sol ${card.cls} reveal`} key={card.n}>
                  <div className="sol-left">
                    <span className="sol-badge">{card.n}</span><br />
                    <span className="tag">{card.tag}</span>
                    <h3>{card.title}</h3>
                  </div>
                  <ul className="sol-list">
                    {card.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Core strengths (dark) */}
        <section className="section dark-sec">
          <span className="bgk-q">強み</span>
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{s.strength.eyebrowJp}</span> {s.strength.eyebrow}</span>
              <h2 className="h2">{s.strength.h2Pre}<em>{s.strength.h2Em}</em></h2>
            </div>
            <div className="qwrap reveal">
              <div className="qmethods">
                {s.strength.methods.map((m) => (
                  <div className="qm" key={m.title}>
                    <span className="qic"><MiscIcon name={m.icon} /></span>
                    <div><h4>{m.title}</h4><p>{m.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="kpi">
                {s.strength.kpi.map((k) => (
                  <div className="kpic" key={k.label}><b>{k.value}</b><span>{k.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Platforms */}
        <section className="section media" id="media">
          <div className="wrap">
            <div className="m-head reveal">
              <span className="eyebrow"><span className="jp-mini">{h.media.eyebrowJp}</span> {h.media.eyebrow}</span>
              <h2 className="h2">{h.media.h2Pre}<em>{h.media.h2Em}</em></h2>
              <p className="lead">{h.media.lead}</p>
            </div>
            <PlatformWheel platforms={h.media.platforms} />
          </div>
        </section>

        {/* Problem */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.problem.eyebrowJp}</span> {h.problem.eyebrow}</span>
              <h2 className="h2">{h.problem.h2Pre}<em>{h.problem.h2Em}</em>{h.problem.h2Post}</h2>
              <p className="lead">{h.problem.lead}</p>
            </div>
            <div className="pgrid reveal">
              {h.problem.cards.map((c) => (
                <div className="pcard" data-n={c.n} key={c.n} style={{ ["--ac" as string]: c.ac, ["--acbg" as string]: c.acbg }}>
                  <span className="pic"><ProblemIcon name={c.icon} /></span>
                  <h3>{c.title}</h3>
                  <p>{c.desc}</p>
                </div>
              ))}
            </div>
            <div className="punch-wrap reveal">
              <div className="punch-arrow">↓</div>
              <p className="punch">{h.problem.punchPre}<em>{h.problem.punchEm}</em>{h.problem.punchPost}</p>
            </div>
          </div>
        </section>

        {/* Collaboration model */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.collab.eyebrowJp}</span> {h.collab.eyebrow}</span>
              <h2 className="h2">{h.collab.h2Pre}<em>{h.collab.h2Em}</em>{h.collab.h2Post}</h2>
              <p className="lead">{h.collab.lead}</p>
            </div>
            <div className="panel panel-glow reveal">
              <div className="flow">
                <div className="flow-card">
                  <span className="fc-tag">{h.collab.left.tag}</span>
                  <h3>{h.collab.left.title}</h3>
                  <ul>{h.collab.left.items.map((it) => <li className="chk" key={it}>{it}</li>)}</ul>
                </div>
                <div className="flow-mid">
                  <span className="flow-mlabel">{h.collab.midTop}</span>
                  <div className="flow-circ">⇄</div>
                  <span className="flow-mlabel">{h.collab.midBottom}</span>
                </div>
                <div className="flow-card mid">
                  <FlowStar />
                  <span className="fc-tag">{h.collab.right.tag}</span>
                  <h3>{h.collab.right.title}</h3>
                  <ul>{h.collab.right.items.map((it) => <li className="chk" key={it}>{it}</li>)}</ul>
                </div>
              </div>
              <div className="note-strip chk">{h.collab.notePre}<b>{h.collab.noteB}</b>{h.collab.notePost}</div>
            </div>
          </div>
        </section>

        {/* 2-base structure */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.bases.eyebrowJp}</span> {h.bases.eyebrow}</span>
              <h2 className="h2">{h.bases.h2Pre}<em>{h.bases.h2Em}</em></h2>
              <p className="lead">{h.bases.lead}</p>
            </div>
            <div className="duo reveal">
              <div className="duo-col duo-jp">
                <div className="duo-flag">{h.bases.jp.flag}</div>
                <h3>{h.bases.jp.title}</h3>
                <div className="duo-sub">{h.bases.jp.sub}</div>
                <ul>{h.bases.jp.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
              <div className="duo-mid">
                <div className="duo-icon"><DuoIcon /></div>
                <span>{h.bases.midLabel[0]}<br />{h.bases.midLabel[1]}</span>
              </div>
              <div className="duo-col duo-vn">
                <div className="duo-flag">{h.bases.vn.flag}</div>
                <h3>{h.bases.vn.title}</h3>
                <div className="duo-sub">{h.bases.vn.sub}</div>
                <ul>{h.bases.vn.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            </div>
            <div className="note-strip chk reveal">{h.bases.notePre}<b>{h.bases.noteB}</b>{h.bases.notePost}</div>
          </div>
        </section>

        {/* Quality (dark) */}
        <section className="section dark-sec">
          <span className="bgk-q" aria-hidden="true">品質</span>
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.quality.eyebrowJp}</span> {h.quality.eyebrow}</span>
              <h2 className="h2">{h.quality.h2Pre}<em>{h.quality.h2Em}</em>{h.quality.h2Post}</h2>
              <p className="lead">{h.quality.lead}</p>
            </div>
            <div className="qwrap reveal">
              <div className="qmethods">
                {h.quality.methods.map((m) => (
                  <div className="qm" key={m.title}>
                    <span className="qic"><QualityIcon name={m.icon} /></span>
                    <div><h4>{m.title}</h4><p>{m.desc}</p></div>
                  </div>
                ))}
              </div>
              <div className="kpi">
                {h.quality.kpi.map((k) => (
                  <div className="kpic" key={k.label}><b>{k.value}</b><span>{k.label}</span></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cost effect */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.cost.eyebrowJp}</span> {h.cost.eyebrow}</span>
              <h2 className="h2">{h.cost.h2Pre}<em>{h.cost.h2Em}</em>{h.cost.h2Post}</h2>
              <p className="lead">{h.cost.lead}</p>
            </div>
            <div className="panel panel-cream reveal">
              <div className="cost">
                <div className="bars">
                  <div className="bar now"><span className="col">100%</span><span className="bl">{h.cost.nowLabel}</span></div>
                  <div className="bar aft"><span className="col">{h.cost.afterValue}</span><span className="bl">{h.cost.afterLabel}</span></div>
                </div>
                <div className="cost-side">
                  <div className="save"><b>{h.cost.saveValue}</b><span>{h.cost.saveLabel}</span></div>
                  <div className="arrow-d">↓</div>
                  <div className="reinv">{h.cost.reinvest}</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Track record */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.track.eyebrowJp}</span> {h.track.eyebrow}</span>
              <h2 className="h2">{h.track.h2Pre}<em>{h.track.h2Em}</em>{h.track.h2Post}</h2>
              <p className="lead">{h.track.lead}</p>
            </div>
            <div className="trk-stats reveal">
              {h.track.stats.map((st) => (
                <div className="trk" key={st.label}><b>{st.value}</b><span>{st.label}</span></div>
              ))}
            </div>
            <div className="clients reveal">
              {h.track.clients.map((c) => <span key={c}>{c}</span>)}
              <span className="more">{h.track.clientsMore}</span>
            </div>
            <div className="cyber reveal">
              <span className="cb"><CyberIcon /></span>
              <span>{h.track.cyberPre}<b>{h.track.cyberB}</b>{h.track.cyberPost}</span>
            </div>
          </div>
        </section>

        {/* Onboarding steps */}
        <section className="section">
          <div className="wrap">
            <div className="reveal" style={{ maxWidth: 760 }}>
              <span className="eyebrow"><span className="jp-mini">{h.steps.eyebrowJp}</span> {h.steps.eyebrow}</span>
              <h2 className="h2">{h.steps.h2Pre}<em>{h.steps.h2Em}</em>{h.steps.h2Post}</h2>
              <p className="lead">{h.steps.lead}</p>
            </div>
            <div className="steps reveal">
              {h.steps.items.map((st, i) => (
                <div className="step" key={st.title}>
                  <span className="sn">{i + 1}</span>
                  <div className="stepc">
                    <span className="st">{st.st}</span>
                    <h4>{st.title}</h4>
                    <p>{st.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
