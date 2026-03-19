import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact & Collaborate",
  description:
    "Start your project with Senzu Base. Share your goals and we will respond within 24 business hours. Japanese-standard service, Vietnam-based execution.",
  openGraph: {
    title: "Contact & Collaborate | Senzu Base",
    description:
      "Start your project with Senzu Base. Share your goals and we will respond within 24 business hours.",
    url: "https://senzu-base.vn/contact",
  },
  alternates: {
    canonical: "https://senzu-base.vn/contact",
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
