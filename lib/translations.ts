export type Locale = "vi" | "ja";

export type Translations = {
  nav: {
    home: string;
    dna: string;
    solutions: string;
    about: string;
    news: string;
    contact: string;
    start: string;
  };
  footer: {
    tagline: string;
    quickLinks: string;
    connect: string;
    rights: string;
    privacy: string;
    terms: string;
  };
};

const translations: Record<Locale, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      dna: "DNA",
      solutions: "Giải pháp",
      about: "Giới thiệu",
      news: "Tin tức",
      contact: "Liên hệ",
      start: "Bắt đầu",
    },
    footer: {
      tagline:
        "Kết nối những tiềm năng chưa được khai phá với giá trị mới — thông qua sự minh bạch và công nghệ lấy con người làm trung tâm.",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "© 2026 CÔNG TY TNHH SENZU BASE. All rights reserved.",
      privacy: "Chính sách bảo mật",
      terms: "Điều khoản dịch vụ",
    },
  },
  ja: {
    nav: {
      home: "ホーム",
      dna: "DNA",
      solutions: "サービス",
      about: "会社紹介",
      news: "ニュース",
      contact: "お問い合わせ",
      start: "はじめる",
    },
    footer: {
      tagline:
        "透明性と、人を中心に据えたテクノロジーで、未開拓の可能性を新たな価値へつなぐ。",
      quickLinks: "Quick Links",
      connect: "Connect",
      rights: "© 2026 SENZU BASE 株式会社. All rights reserved.",
      privacy: "プライバシーポリシー",
      terms: "利用規約",
    },
  },
};

export default translations;
