"use client";

import { useEffect, useRef, useState } from "react";
import Nav from "@/components/Nav";

const SLIDES = ["s1", "s2", "s3"];

export default function Hero({ jp, romaji, tag }: { jp: string; romaji: string; tag: string }) {
  const [active, setActive] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timerRef.current = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 7000);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  function goTo(i: number) {
    setActive(i);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => setActive((n) => (n + 1) % SLIDES.length), 7000);
  }

  return (
    <header className="hero" id="top">
      <h1 className="sr-only">SENZU BASE — 起点をつくる. Marketing &amp; CX chuẩn Nhật tại Việt Nam.</h1>

      <div className="slides" aria-hidden="true">
        {SLIDES.map((s, i) => (
          <div key={s} className={`slide ${s} ${active === i ? "on" : ""}`} />
        ))}
      </div>
      <div className="scrim" aria-hidden="true" />

      <Nav />

      <div className="hero-body">
        <span className="jp">{jp}</span>
        <span className="romaji">{romaji}</span>
        <div className="wordmark" aria-hidden="true">
          <span className="w1" style={{ animationDelay: ".45s" }}>SENZU</span>
          <span className="w2" style={{ animationDelay: ".6s" }}>BASE</span>
        </div>
        <p className="tag-vn">{tag}</p>
      </div>

      <div className="dots" role="tablist" aria-label="Chọn ảnh nền">
        {SLIDES.map((_, i) => (
          <button
            key={i}
            type="button"
            className={active === i ? "on" : ""}
            aria-label={`Ảnh ${i + 1}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>
    </header>
  );
}
