import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

export const metadata: Metadata = {
  title: "Senzu Base - Glass Pro System",
  description:
    "Senzu Base kết nối những tiềm năng chưa được khai phá với giá trị mới thông qua sự minh bạch và công nghệ lấy con người làm trung tâm.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className="scroll-smooth">
      <body>
        {/* Aurora Background */}
        <div className="aurora-bg">
          <div className="orb orb-1"></div>
          <div className="orb orb-2"></div>
          <div className="orb orb-3"></div>
        </div>

        <LanguageProvider>
          <Nav />
          <main className="pt-20 min-h-screen">{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
