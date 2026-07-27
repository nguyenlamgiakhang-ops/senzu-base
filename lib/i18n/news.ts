const newsVi = {
  hero: { jp: "最新情報", title: "Nhật ký & Tuyển dụng", sub: "Tin tức, kiến thức chuyên sâu và cơ hội nghề nghiệp mới nhất từ SENZU BASE." },
  eyebrowJp: "最新情報",
  eyebrow: "Tin tức & Tuyển dụng",
  h2: "Nhật ký & Tuyển dụng",
  cards: [] as Array<{
    img: string;
    alt: string;
    pill: string;
    pillCls: string;
    title: string;
    desc: string;
    date?: string;
    tags?: string[];
  }>,
  empty: "Chưa có bài viết nào.",
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
  cards: [],
  empty: "まだ記事がありません。",
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
