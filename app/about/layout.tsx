import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNA & Mission",
  description:
    "Senzu Base was founded by former CyberAgent Japan employees. We bring Japanese innovation standards and CX-first thinking to every project in Vietnam and Southeast Asia.",
  openGraph: {
    title: "DNA & Mission | Senzu Base",
    description:
      "Senzu Base was founded by former CyberAgent Japan employees. We bring Japanese innovation standards and CX-first thinking to every project.",
    url: "https://senzu-base.vn/about",
  },
  alternates: {
    canonical: "https://senzu-base.vn/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
