"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Envelope, Clock, Timer, PaperPlaneTilt, CircleNotch, CheckCircle, UsersThree } from "@phosphor-icons/react";
import { useLanguage } from "@/contexts/LanguageContext";

type FormState = "idle" | "loading" | "success";

export default function ContactPage() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [showToast, setShowToast] = useState(false);
  const { t } = useLanguage();
  const c = t.contact;

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormState("loading");
    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      budget: (form.elements.namedItem("budget") as HTMLSelectElement).value,
      service: (form.elements.namedItem("service") as HTMLSelectElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };
    try {
      await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
    } catch { /* show success for UX */ }
    setFormState("success");
    setShowToast(true);
    setTimeout(() => { setFormState("idle"); form.reset(); }, 3500);
    setTimeout(() => setShowToast(false), 4500);
  }

  return (
    <div className="page-enter">
      <section className="py-20 md:py-32 px-4 md:px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p className="text-senzuGlow text-xs font-black tracking-[0.4em] uppercase mb-6">{c.badge}</p>
          <h1 className="text-[2.25rem] sm:text-5xl md:text-8xl font-bold leading-tight tracking-tight mb-6">
            {c.h1} <span className="text-gradient">{c.h1Span}</span>
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">{c.subtitle}</p>
        </div>
      </section>

      <section className="py-10 md:py-16 px-4 md:px-6 pb-16 md:pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="md:col-span-2 glass-card rounded-3xl p-6 md:p-10">
            <h2 className="text-2xl font-bold mb-8">{c.formTitle}</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.name}</label>
                  <input name="name" type="text" required placeholder={c.placeholders.name} className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.email}</label>
                  <input name="email" type="email" required placeholder={c.placeholders.email} className="form-input w-full px-4 py-3 rounded-xl text-sm" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.company}</label>
                <input name="company" type="text" placeholder={c.placeholders.company} className="form-input w-full px-4 py-3 rounded-xl text-sm" />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.budget}</label>
                  <select name="budget" className="form-input form-select w-full px-4 py-3 rounded-xl text-sm">
                    {c.budgetOptions.map((opt, i) => <option key={i} value={i === 0 ? "" : `budget-${i}`}>{opt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.service}</label>
                  <select name="service" required className="form-input form-select w-full px-4 py-3 rounded-xl text-sm">
                    {c.serviceOptions.map((opt, i) => <option key={i} value={i === 0 ? "" : `service-${i}`}>{opt}</option>)}
                  </select>
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">{c.labels.message}</label>
                <textarea name="message" required rows={5} placeholder={c.placeholders.message} className="form-input w-full px-4 py-3 rounded-xl text-sm resize-none" />
              </div>
              <button type="submit" disabled={formState !== "idle"} className="group w-full py-4 rounded-xl bg-senzu hover:bg-green-500 text-white font-bold transition-all duration-300 shadow-[0_0_30px_rgba(0,132,61,0.3)] hover:shadow-[0_0_20px_rgba(0,184,92,0.4)] flex items-center justify-center gap-2 disabled:opacity-70">
                {formState === "loading" && <><CircleNotch size={18} className="animate-spin" />{c.submitLoading}</>}
                {formState === "success" && <><CheckCircle size={18} />{c.submitSuccess}</>}
                {formState === "idle" && <><PaperPlaneTilt weight="duotone" size={18} className="transition-transform duration-300 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />{c.submitIdle}</>}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="glass-card rounded-3xl p-8 space-y-6">
              <h3 className="text-lg font-bold">{c.infoTitle}</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5" style={{ background: "rgba(0,184,92,0.12)", border: "1px solid rgba(0,184,92,0.2)" }}>
                    <MapPin weight="duotone" size={15} style={{ color: "#00B85C" }} />
                  </div>
                  <span className="text-gray-400 mt-1">PMO Shibuya II, 3-1-1-211 Shibuya, Tokyo</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,92,0.12)", border: "1px solid rgba(0,184,92,0.2)" }}>
                    <Envelope weight="duotone" size={15} style={{ color: "#00B85C" }} />
                  </div>
                  <a href="mailto:info@senzu.co.jp" className="text-gray-400 hover:text-white transition">info@senzu.co.jp</a>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,92,0.12)", border: "1px solid rgba(0,184,92,0.2)" }}>
                    <Clock weight="duotone" size={15} style={{ color: "#00B85C" }} />
                  </div>
                  <span className="text-gray-400">{c.hours}</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ background: "rgba(0,184,92,0.12)", border: "1px solid rgba(0,184,92,0.2)" }}>
                    <Timer weight="duotone" size={15} style={{ color: "#00B85C" }} />
                  </div>
                  <span className="text-gray-400">{c.responseTime}</span>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-3xl p-8 border-orange-500/20">
              <div className="flex items-center gap-2 mb-3">
                <UsersThree weight="duotone" size={20} className="text-orange-400" />
                <span className="text-xs font-bold text-orange-400 uppercase tracking-widest">{c.hiringBadge}</span>
              </div>
              <h3 className="font-bold mb-2">{c.hiringTitle}</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4">{c.hiringLocation}</p>
              <Link href="https://youtrust.jp/companies/c44abf177811e2833dee6db0f589d5c4" target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-orange-400 hover:text-orange-300 transition flex items-center gap-1">
                {c.hiringApply}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {showToast && (
        <div className="fixed bottom-8 right-8 z-[200] glass-panel rounded-2xl px-6 py-4 shadow-2xl flex items-center gap-4 animate-[slideIn_0.4s_ease-out]">
          <div className="w-10 h-10 rounded-full bg-senzuGlow/20 flex items-center justify-center shrink-0">
            <CheckCircle weight="duotone" size={22} className="text-senzuGlow" />
          </div>
          <div>
            <p className="font-bold text-sm">{c.toastTitle}</p>
            <p className="text-xs text-gray-400">{c.toastDesc}</p>
          </div>
        </div>
      )}
    </div>
  );
}
