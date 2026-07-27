"use client";

import { usePathname } from "next/navigation";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

export default function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith("/admin");

  return (
    <>
      {!isAdmin && <ScrollReveal />}
      {children}
      {!isAdmin && <Footer />}
    </>
  );
}
