import type { Metadata } from "next";
import { Be_Vietnam_Pro } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/contexts/LanguageContext";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  preload: true,
});

const BASE_URL = "https://senzu-base.vn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Senzu Base — Japanese-Standard Marketing & CX Agency in Vietnam",
    template: "%s | Senzu Base",
  },
  description:
    "Senzu Base is a CyberAgent alumni-founded agency bridging Japanese standards and the Vietnamese market. Digital Marketing, Brand Creative, In-house Training, and Business Software.",
  keywords: [
    "Senzu Base",
    "digital marketing Vietnam",
    "CX agency Vietnam",
    "Japanese standard marketing",
    "marketing consultant Ho Chi Minh",
    "brand creative Vietnam",
    "デジタルマーケティング ベトナム",
    "マーケティングコンサルティング",
    "CyberAgent Vietnam",
    "agency Nhật Bản",
  ],
  authors: [{ name: "Senzu Base", url: BASE_URL }],
  creator: "Senzu Base",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["en_US", "ja_JP"],
    url: BASE_URL,
    siteName: "Senzu Base",
    title: "Senzu Base — Japanese-Standard Marketing & CX Agency",
    description:
      "Connecting dormant potential with new value through Japanese-standard marketing and CX.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Senzu Base — Japanese-Standard Marketing & CX Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Senzu Base — Japanese-Standard Marketing & CX Agency",
    description:
      "Connecting dormant potential with new value through Japanese-standard marketing and CX.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  alternates: {
    canonical: BASE_URL,
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Senzu Base",
  alternateName: "株式会社センズ",
  url: BASE_URL,
  logo: `${BASE_URL}/logo/SENZU BASE white.png`,
  foundingDate: "2024",
  description:
    "A CyberAgent alumni-founded agency bridging Japanese standards and the Vietnamese market.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VN",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Vietnamese", "Japanese", "English"],
  },
  founders: [
    {
      "@type": "Person",
      name: "Nguyen Huu Thang",
      jobTitle: "CEO",
      worksFor: { "@type": "Organization", name: "Senzu Base" },
    },
    {
      "@type": "Person",
      name: "Hirahara Takumi",
      alternateName: "平原 匠",
      jobTitle: "Representative Director & CEO",
      worksFor: { "@type": "Organization", name: "Senzu Inc." },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi" className={`scroll-smooth ${beVietnamPro.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
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
