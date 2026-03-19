import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Services & Solutions",
  description:
    "Digital Marketing Consulting, Brand Creative & CX Design, In-house Training, Landing Page Tools, Workflow Automation, and Business Management Platform — all built on Japanese standards.",
  openGraph: {
    title: "Services & Solutions | Senzu Base",
    description:
      "Digital Marketing, Brand Creative, In-house Training, and Business Software — all built on Japanese standards for the Vietnamese market.",
    url: "https://senzu-base.vn/services",
  },
  alternates: {
    canonical: "https://senzu-base.vn/services",
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
