import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet Our Founders",
  description:
    "Senzu Base is led by two founders: Nguyen Huu Thang (CEO, Vietnam) and Hirahara Takumi (Representative Director & CEO, Japan) — both former CyberAgent professionals.",
  openGraph: {
    title: "Meet Our Founders | Senzu Base",
    description:
      "Two founders, one vision — bridging Japanese excellence and Vietnamese dynamism to create real breakthroughs.",
    url: "https://senzu-base.vn/leaders",
  },
  alternates: {
    canonical: "https://senzu-base.vn/leaders",
  },
};

export default function LeadersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
