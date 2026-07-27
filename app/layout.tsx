import type { Metadata } from "next";
import { Be_Vietnam_Pro, Fraunces } from "next/font/google";
import "./globals.css";
import SiteChrome from "@/components/SiteChrome";
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

// Every distinct JA/kanji character used across lib/i18n/*.ts's decorative
// Japanese labels (.jp/.jp-mini/.hub-jp). Restricting Google Fonts to this
// exact `text=` set collapses Shippori Mincho from ~366 unicode-range
// @font-face rules down to a single one — regenerate if new JP copy is added.
const SHIPPORI_MINCHO_CHARS =
  "、。あいうえおかがきぎくぐけこごさしじすずせぜそぞただちっつてでとどなにねのはばひびぶへべほぼまみめもやゆょよらりるれろわをんアィイウェエオカキクグケゲコサザシジスズセゼソタダチッツテデトドナニノバパビピフブプベペホボポマミムメモャュユョラリルレロワンヶ・ー一万上下不世両中主了予争事二京人今介仕他代以件企会伴伸伺位低体何余作使例供依価係保信修値側備働優先入全公共内再出分切判利制削前剣創力功加効勉動務勤化千協単厳参反取可各合同名向告味命品員問善営囲圧在地均域基報場増売変外多大太始媒子存学守安完定実客家容対専導小少局届展属層山差市常平年広度延式引張強当後得心必応思性情意感慢成戦手承投担拓拠拡持指据掛採探接提揮援携支改教数整文料断新方施日早明映時更最月望期未本来東析果校株核根案検業構様標模機欠次歩気水求決法注活浅浮深渋減満源準潜点無熱物牲特犠状独獲率現理生用田由画界略発白的益盤目直相真眠知短研確示社私稿積究立競策算管範築精約納索累紹組経結絡統継続網緒緻績織置考者聞育能自興若華落行表補要見規視覚観解言計設診証話詳認語誠誰課談論識谷貫貴費資質走起超越足身転軸込迎近迫追送透通速造連週進遅運達適遵選郎部都配重量金針長門開間関際集電非面革順領頼題顧験高鮮";

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
      className={`${beVietnamPro.variable} ${fraunces.variable}`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href={`https://fonts.googleapis.com/css2?family=Shippori+Mincho:wght@500;600;700&text=${encodeURIComponent(SHIPPORI_MINCHO_CHARS)}&display=swap`}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  );
}
