const newsVi = {
  hero: { jp: "最新情報", title: "Nhật ký & Tuyển dụng", sub: "Tin tức, kiến thức chuyên sâu và cơ hội nghề nghiệp mới nhất từ SENZU BASE." },
  eyebrowJp: "最新情報",
  eyebrow: "Tin tức & Tuyển dụng",
  h2: "Nhật ký & Tuyển dụng",
  cards: [
    {
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E5%A4%96%E8%A6%B3%E2%91%A0.jpg&w=3840&q=75",
      alt: "Văn phòng SENZU BASE",
      pill: "Thông cáo báo chí", pillCls: "",
      title: "Website mới ra mắt — Bước ngoặt mới của SENZU BASE",
      desc: "Chúng tôi tự hào ra mắt website mới với giao diện hiện đại, phản ánh rõ hơn định hướng và giá trị cốt lõi của SENZU BASE.",
      date: "Tháng 8, 2024",
    },
    {
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E2%91%A0.jpg&w=3840&q=75",
      alt: "Không gian làm việc SENZU BASE",
      pill: "Đang tuyển dụng", pillCls: "hire",
      title: "Digital Planner / Tư vấn Marketing",
      desc: "Làm việc từ xa / Freelance / Shibuya. Tham gia đội ngũ SENZU BASE và cùng chúng tôi kiến tạo tương lai của marketing.",
      tags: ["Remote", "Freelance"],
    },
    {
      img: "/images/lp/creative.png",
      alt: "Creative team SENZU BASE",
      pill: "Đang tuyển dụng", pillCls: "hire",
      title: "Creative Designer / Visual Director",
      desc: "Phụ trách visual thương hiệu, creative quảng cáo và thiết kế CX. Vị trí mang chất lượng sáng tạo Nhật Bản đến thị trường Việt Nam.",
      tags: ["Remote", "Full-time", "Creative"],
    },
    {
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E3%82%A8%E3%83%B3%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E2%91%A0.jpg&w=3840&q=75",
      alt: "Entrance SENZU BASE",
      pill: "Blog chuyên sâu · Sắp ra mắt", pillCls: "soon",
      title: "Tối ưu trải nghiệm khách hàng trong kỷ nguyên AI",
      desc: "Góc nhìn của SENZU BASE về cách AI đang thay đổi cách thương hiệu kết nối với khách hàng.",
      date: "Sắp ra mắt",
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
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E5%A4%96%E8%A6%B3%E2%91%A0.jpg&w=3840&q=75",
      alt: "SENZU BASE オフィス",
      pill: "プレスリリース", pillCls: "",
      title: "新ウェブサイト公開 — SENZU BASE の新たな一歩",
      desc: "定位置と核心的価値をより鮮明に反映する、モダンなインターフェイスの新サイトを公開しました。",
      date: "2024年8月",
    },
    {
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E3%83%A9%E3%82%A6%E3%83%B3%E3%82%B8%E2%91%A0.jpg&w=3840&q=75",
      alt: "SENZU BASE ワークスペース",
      pill: "採用中", pillCls: "hire",
      title: "デジタルプランナー / マーケティングコンサルタント",
      desc: "リモート / フリーランス / 渋谷勤務。SENZU BASE に参加し、マーケティングの未来を一緒に創りましょう。",
      tags: ["Remote", "Freelance"],
    },
    {
      img: "/images/lp/creative.png",
      alt: "SENZU BASE クリエイティブチーム",
      pill: "採用中", pillCls: "hire",
      title: "クリエイティブデザイナー / ビジュアルディレクター",
      desc: "ブランドビジュアル、広告クリエイティブ、CXデザインを担当。日本品質のクリエイティブをベトナム市場に届けるポジションです。",
      tags: ["Remote", "Full-time", "Creative"],
    },
    {
      img: "https://www.senzu-base.vn/_next/image?url=%2Fnews%2F%E3%82%A8%E3%83%B3%E3%83%88%E3%83%A9%E3%83%B3%E3%82%B9%E2%91%A0.jpg&w=3840&q=75",
      alt: "SENZU BASE エントランス",
      pill: "特集ブログ・近日公開", pillCls: "soon",
      title: "AI時代のCX最適化",
      desc: "AIがブランドと顧客のつながり方をどう変えているか — SENZU BASE の視点から。",
      date: "近日公開",
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
