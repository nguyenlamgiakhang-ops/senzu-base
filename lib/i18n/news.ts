const newsVi = {
  hero: { jp: "最新情報", title: "Nhật ký & Tuyển dụng", sub: "Tin tức, kiến thức chuyên sâu và cơ hội nghề nghiệp mới nhất từ SENZU BASE." },
  eyebrowJp: "最新情報",
  eyebrow: "Tin tức & Tuyển dụng",
  h2: "Nhật ký & Tuyển dụng",
  cards: [
    {
      img: "/news/ラウンジ①.jpg",
      alt: "Không gian làm việc SENZU BASE",
      pill: "Đang tuyển dụng", pillCls: "hire",
      title: "Digital Planner / Tư vấn Marketing",
      desc: "Làm việc từ xa / Freelance / Shibuya. Tham gia đội ngũ SENZU BASE và cùng chúng tôi kiến tạo tương lai của marketing.",
      tags: ["Remote", "Freelance"],
    },
    {
      img: "/images/lp/creative.jpg",
      alt: "Creative team SENZU BASE",
      pill: "Đang tuyển dụng", pillCls: "hire",
      title: "Creative Designer / Visual Director",
      desc: "Phụ trách visual thương hiệu, creative quảng cáo và thiết kế CX. Vị trí mang chất lượng sáng tạo Nhật Bản đến thị trường Việt Nam.",
      tags: ["Remote", "Full-time", "Creative"],
    },
  ],
  careers: {
    title: "Gia nhập đội ngũ\nSENZU BASE",
    desc: "Chúng tôi đang tìm kiếm những người đam mê marketing và muốn tạo ra tác động thực sự.",
    btn1: "Xem vị trí trên LinkedIn",
    btn2: "Liên hệ trực tiếp",
  },
};

const newsJa: typeof newsVi = {
  hero: { jp: "最新情報", title: "ジャーナル & 採用", sub: "SENZU BASE からの最新ニュース、専門知識、キャリア情報。" },
  eyebrowJp: "最新情報",
  eyebrow: "ニュース & 採用",
  h2: "ジャーナル & 採用",
  cards: [
    {
      img: "/news/ラウンジ①.jpg",
      alt: "SENZU BASE ワークスペース",
      pill: "採用中", pillCls: "hire",
      title: "デジタルプランナー / マーケティングコンサルタント",
      desc: "リモート / フリーランス / 渋谷勤務。SENZU BASE に参加し、マーケティングの未来を一緒に創りましょう。",
      tags: ["Remote", "Freelance"],
    },
    {
      img: "/images/lp/creative.jpg",
      alt: "SENZU BASE クリエイティブチーム",
      pill: "採用中", pillCls: "hire",
      title: "クリエイティブデザイナー / ビジュアルディレクター",
      desc: "ブランドビジュアル、広告クリエイティブ、CXデザインを担当。日本品質のクリエイティブをベトナム市場に届けるポジションです。",
      tags: ["Remote", "Full-time", "Creative"],
    },
  ],
  careers: {
    title: "SENZU BASE の\nチームに参加しませんか",
    desc: "マーケティングに情熱を持ち、本当のインパクトを生み出したい方を探しています。",
    btn1: "LinkedIn で求人を見る",
    btn2: "直接お問い合わせ",
  },
};

export type NewsContent = typeof newsVi;

export default function getNewsContent(locale: "vi" | "ja"): NewsContent {
  return locale === "ja" ? newsJa : newsVi;
}
