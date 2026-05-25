import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNA & Mission",
  description:
    "Senzu Base is built on Japanese innovation standards and CX-first thinking, delivering excellence to every project in Vietnam and Southeast Asia.",
  openGraph: {
    title: "DNA & Mission | Senzu Base",
    description:
      "Senzu Base is built on Japanese innovation standards and CX-first thinking, delivering excellence to every project.",
    url: "https://senzu-base.vn/about",
  },
  alternates: {
    canonical: "https://senzu-base.vn/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
