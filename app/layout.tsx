import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fraunces, Shippori_Mincho } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";
import { LanguageProvider } from "@/contexts/LanguageContext";

const beVietnamPro = Be_Vietnam_Pro({
  subsets: ["latin", "vietnamese"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-be-vietnam-pro",
  preload: true,
});

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-fraunces",
});

const shipporiMincho = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  variable: "--font-shippori-mincho",
});

const BASE_URL = "https://senzu-base.vn";

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Senzu Base — Japanese-Standard Marketing & CX Agency in Vietnam",
    template: "%s | Senzu Base",
  },
  description:
    "Senzu Base is a Japanese-standard agency bridging Japanese excellence and the Vietnamese market. Digital Marketing, Brand Creative, In-house Training, and Business Software.",
  keywords: [
    "Senzu Base",
    "digital marketing Vietnam",
    "CX agency Vietnam",
    "Japanese standard marketing",
    "marketing consultant Ho Chi Minh",
    "brand creative Vietnam",
    "デジタルマーケティング ベトナム",
    "マーケティングコンサルティング",

    "agency Nhật Bản",
  ],
  authors: [{ name: "Senzu Base", url: BASE_URL }],
  creator: "Senzu Base",
  openGraph: {
    type: "website",
    locale: "vi_VN",
    alternateLocale: ["ja_JP"],
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
    "A Japanese-standard agency bridging Japanese excellence and the Vietnamese market.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "VN",
  },
  sameAs: [],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["Vietnamese", "Japanese"],
  },
  founders: [
    {
      "@type": "Person",
      name: "Nguyen Huu Thang",
      jobTitle: "CEO",
      worksFor: { "@type": "Organization", name: "Senzu Base" },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="vi"
      className={`${beVietnamPro.variable} ${fraunces.variable} ${shipporiMincho.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <ScrollReveal />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
