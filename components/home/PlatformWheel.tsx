"use client";

import { useEffect, useRef, useState } from "react";

type Platform = { n: string; t: string; r: string; d: string; c: string; m: string };

export default function PlatformWheel({ platforms }: { platforms: Platform[] }) {
  const N = platforms.length;
  const ringRef = useRef<HTMLDivElement>(null);
  const [radius, setRadius] = useState(0);
  const [step, setStep] = useState(0);
  const [displayIndex, setDisplayIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const active = ((step % N) + N) % N;

  useEffect(() => {
    function measure() {
      if (ringRef.current) setRadius(ringRef.current.clientWidth * 0.355);
    }
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  useEffect(() => {
    setFading(true);
    const t = setTimeout(() => {
      setDisplayIndex(active);
      setFading(false);
    }, 180);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    function start() {
      stop();
      timerRef.current = setInterval(() => setStep((s) => s + 1), 3600);
    }
    function stop() {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    }
    start();
    return stop;
  }, []);

  function restart() {
    if (timerRef.current) clearInterval(timerRef.current);
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) return;
    timerRef.current = setInterval(() => setStep((s) => s + 1), 3600);
  }

  function jumpTo(i: number) {
    const dd0 = ((i - active) % N + N) % N;
    const dd = dd0 > N / 2 ? dd0 - N : dd0;
    setStep((s) => s + dd);
    restart();
  }

  function next() {
    setStep((s) => s + 1);
    restart();
  }
  function prev() {
    setStep((s) => s - 1);
    restart();
  }

  const p = platforms[displayIndex];

  return (
    <div
      className="m-stage reveal"
      onMouseEnter={() => timerRef.current && clearInterval(timerRef.current)}
      onMouseLeave={restart}
    >
      <div className="hexwheel" role="group" aria-label="Bánh xe nền tảng quảng cáo">
        <div className="hex-ring" ref={ringRef} style={{ ["--rot" as string]: `${-step * 60}deg` }}>
          {platforms.map((pl, i) => {
            const ang = i * 60;
            const base = `translate(-50%,-50%) rotate(${ang}deg) translateX(${radius}px) rotate(${-ang}deg)`;
            const on = i === active;
            return (
              <button
                key={pl.n}
                type="button"
                className={`hex ${on ? "on" : ""}`}
                aria-label={pl.n}
                style={{ ["--c" as string]: pl.c, transform: on ? `${base} scale(1.16)` : base }}
                onClick={() => jumpTo(i)}
              >
                <span className="hex-inner">
                  <span className="mono">{pl.m}</span>
                  <span className="pn">{pl.n}</span>
                </span>
              </button>
            );
          })}
        </div>
        <div className="hub">
          <span className="hub-jp">媒体</span>
          <span className="hub-l">Platforms</span>
        </div>
        <button className="m-nav prev" aria-label="Nền tảng trước" onClick={prev}>‹</button>
        <button className="m-nav next" aria-label="Nền tảng sau" onClick={next}>›</button>
      </div>
      <div className="m-info" style={{ ["--c" as string]: p.c }}>
        <div className={`m-fade ${fading ? "out" : ""}`}>
          <span className="m-tag" style={{ ["--c" as string]: p.c }}>{p.t}</span>
          <span className="m-region">· {p.r}</span>
          <h3 className="m-name">{p.n}</h3>
          <p className="m-desc">{p.d}</p>
        </div>
        <div className="m-dots" role="tablist" aria-label="Chọn nền tảng">
          {platforms.map((pl, i) => (
            <button
              key={pl.n}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={i === active ? "on" : ""}
              aria-label={pl.n}
              onClick={() => jumpTo(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
