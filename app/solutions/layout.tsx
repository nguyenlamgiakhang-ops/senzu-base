import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Giải pháp",
  description:
    "Digital Marketing Consulting, Brand Creative & CX Design, In-house Training, Landing Page Tools, Workflow Automation, and Business Management Platform — all built on Japanese standards.",
  openGraph: {
    title: "Giải pháp | Senzu Base",
    description:
      "Digital Marketing, Brand Creative, In-house Training, and Business Software — all built on Japanese standards for the Vietnamese market.",
    url: "https://senzu-base.vn/solutions",
  },
  alternates: {
    canonical: "https://senzu-base.vn/solutions",
  },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
