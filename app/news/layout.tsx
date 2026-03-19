import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal & Careers",
  description:
    "Latest news, marketing insights, and career opportunities at Senzu Base. Join a Japanese-standard agency shaping the future of CX in Vietnam.",
  openGraph: {
    title: "Journal & Careers | Senzu Base",
    description:
      "Latest news, marketing insights, and career opportunities at Senzu Base.",
    url: "https://senzu-base.vn/news",
  },
  alternates: {
    canonical: "https://senzu-base.vn/news",
  },
};

export default function NewsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
