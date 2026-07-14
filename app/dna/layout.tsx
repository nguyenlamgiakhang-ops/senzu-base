import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "DNA & Sứ mệnh",
  description:
    "Nguồn gốc, sứ mệnh, thông tin doanh nghiệp và văn hóa 4S của SENZU BASE — agency Marketing & CX theo tiêu chuẩn Nhật Bản.",
  openGraph: {
    title: "DNA & Sứ mệnh | Senzu Base",
    description: "Nguồn gốc, sứ mệnh và văn hóa 4S của SENZU BASE.",
    url: "https://senzu-base.vn/dna",
  },
  alternates: {
    canonical: "https://senzu-base.vn/dna",
  },
};

export default function DnaLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
