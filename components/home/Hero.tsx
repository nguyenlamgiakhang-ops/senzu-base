"use client";

import { useEffect, useState } from "react";
import Nav from "@/components/Nav";

export default function Hero({ jp, romaji, tag }: { jp: string; romaji: string; tag: string }) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % 3), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <header className="hero" id="top">
      <h1 className="sr-only">SENZU BASE — 起点をつくる. Marketing &amp; CX chuẩn Nhật tại Việt Nam.</h1>

      <div className="slides" aria-hidden="true">
        <div className="slide s1" />
        <div className="slide s2" />
        <div className="slide s3" />
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
        {[0, 1, 2].map((i) => (
          <button
            key={i}
            type="button"
            className={active === i ? "on" : ""}
            aria-label={`Ảnh ${i + 1}`}
            onClick={() => setActive(i)}
          />
        ))}
      </div>
    </header>
  );
}
