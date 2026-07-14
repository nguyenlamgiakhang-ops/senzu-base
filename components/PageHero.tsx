import Link from "next/link";
import Nav from "@/components/Nav";
import type { ReactNode } from "react";

export default function PageHero({
  jp,
  title,
  subtitle,
  crumbLabel,
  homeLabel,
}: {
  jp: string;
  title: ReactNode;
  subtitle?: string;
  crumbLabel: string;
  homeLabel: string;
}) {
  return (
    <header className="pg-hero">
      <div className="scrim" aria-hidden="true" />
      <Nav />
      <div className="pg-body">
        <span className="jp">{jp}</span>
        <h1 className="pg-title">{title}</h1>
        {subtitle && <p className="pg-sub">{subtitle}</p>}
      </div>
      <div className="pg-crumb">
        <div className="wrap">
          <Link href="/">{homeLabel}</Link>
          <span className="sep">/</span>
          <span className="cur">{crumbLabel}</span>
        </div>
      </div>
    </header>
  );
}
