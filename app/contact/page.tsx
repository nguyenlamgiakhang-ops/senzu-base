"use client";

import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import translations from "@/lib/translations";
import getContactContent from "@/lib/i18n/contact";
import PageHero from "@/components/PageHero";
import { MiscIcon } from "@/components/home/Icons";

type FormState = "idle" | "loading" | "success";

export default function ContactPage() {
  const { locale } = useLanguage();
  const c = getContactContent(locale);
  const nav = translations[locale].nav;
  const [formState, setFormState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch { /* show success for UX */ }
    setFormState("success");
    setTimeout(() => { setFormState("idle"); form.reset(); }, 3500);
  }

  return (
    <>
      <PageHero jp={c.hero.jp} title={c.hero.title} subtitle={c.hero.sub} crumbLabel={nav.contact} homeLabel={nav.home} />

      <main className="page">
        <section className="section" id="ct-content">
          <div className="wrap">
            <div className="ct-grid">
              <form className="ct-form reveal" onSubmit={handleSubmit}>
                <div className="fr">
                  <label>{c.form.name}</label>
                  <input name="name" type="text" required placeholder={c.form.namePh} />
                </div>
                <div className="fr">
                  <label>{c.form.email}</label>
                  <input name="email" type="email" required placeholder={c.form.emailPh} />
                </div>
                <div className="fr">
                  <label>{c.form.company}</label>
                  <input name="company" type="text" placeholder={c.form.companyPh} />
                </div>
                <div className="fr">
                  <label>{c.form.service}</label>
                  <select name="service" required defaultValue="">
                    {c.form.serviceOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>
                <div className="fr">
                  <label>{c.form.message}</label>
                  <textarea name="message" required placeholder={c.form.messagePh} />
                </div>
                <button type="submit" className="ct-btn" disabled={formState !== "idle"}>
                  {formState === "loading" ? c.form.submitLoading : formState === "success" ? c.form.submitSuccess : c.form.submit}
                  {formState === "idle" && <span className="a">→</span>}
                </button>
              </form>

              <div className="ct-cards reveal">
                {c.cards.map((card, i) => (
                  <div className={`ci ${"hi" in card && card.hi ? "hi" : ""}`} key={i}>
                    <span className="ci-ic"><MiscIcon name={card.icon} /></span>
                    <h4>{card.title}</h4>
                    {"link" in card && card.link ? (
                      <a href={card.link.href}>{card.link.label}</a>
                    ) : (
                      <p>{"desc" in card ? card.desc : ""}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
