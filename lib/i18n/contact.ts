const contactVi = {
  hero: { jp: "連絡", title: "Liên hệ", sub: "Bắt đầu với buổi chẩn đoán vận hành miễn phí 30 phút" },
  form: {
    name: "Họ và tên", namePh: "Nguyễn Văn A",
    email: "Email", emailPh: "your@email.com",
    company: "Công ty", companyPh: "Tên công ty",
    service: "Dịch vụ quan tâm",
    serviceOptions: [
      { value: "", label: "Chọn dịch vụ" },
      { value: "consulting", label: "Tư vấn Marketing" },
      { value: "operations", label: "Vận hành Quảng cáo" },
      { value: "software", label: "Phần mềm doanh nghiệp" },
      { value: "ai", label: "Nghiên cứu & Phát triển AI" },
      { value: "training", label: "Đào tạo" },
      { value: "other", label: "Khác" },
    ],
    message: "Nội dung", messagePh: "Hãy chia sẻ chi tiết về dự án hoặc yêu cầu của bạn…",
    submit: "Gửi tin nhắn",
    submitLoading: "Đang gửi...",
    submitSuccess: "Đã gửi thành công!",
  },
  cards: [
    { icon: "phone", hi: true, title: "Tư vấn miễn phí 30 phút", desc: "Chẩn đoán hiện trạng vận hành và đề xuất phương án cải tiến." },
    { icon: "envelope", title: "Email", link: { href: "mailto:keiri_base@senzu.co.jp", label: "keiri_base@senzu.co.jp" } },
    { icon: "phone", title: "Điện thoại / Zalo", link: { href: "tel:+84977088915", label: "(+84) 977 088 915" } },
    { icon: "pin", title: "Trụ sở Tokyo", desc: "Tokyo, Nhật Bản" },
    { icon: "pin", title: "Văn phòng Việt Nam", desc: "Việt Nam" },
    { icon: "clock", title: "Giờ làm việc", desc: "Thứ Hai – Thứ Sáu, 9:00 – 18:00 (JST / ICT)" },
  ],
};

const contactJa: typeof contactVi = {
  hero: { jp: "連絡", title: "お問い合わせ", sub: "まずは無料の30分オペレーション診断から" },
  form: {
    name: "お名前", namePh: "山田太郎",
    email: "メール", emailPh: "your@email.com",
    company: "会社名", companyPh: "会社名",
    service: "ご関心のあるサービス",
    serviceOptions: [
      { value: "", label: "お選びください" },
      { value: "consulting", label: "マーケティングコンサルティング" },
      { value: "operations", label: "広告運用" },
      { value: "software", label: "ソフトウェア開発" },
      { value: "ai", label: "AI導入" },
      { value: "training", label: "研修・教育" },
      { value: "other", label: "その他" },
    ],
    message: "お問い合わせ内容", messagePh: "プロジェクトやご要望について詳しくお聞かせください…",
    submit: "送信する",
    submitLoading: "送信中...",
    submitSuccess: "送信完了！",
  },
  cards: [
    { icon: "phone", hi: true, title: "無料相談30分", desc: "現状のオペレーションを診断し、改善余地をご提案します。" },
    { icon: "envelope", title: "Email", link: { href: "mailto:keiri_base@senzu.co.jp", label: "keiri_base@senzu.co.jp" } },
    { icon: "phone", title: "電話 / Zalo", link: { href: "tel:+84977088915", label: "(+84) 977 088 915" } },
    { icon: "pin", title: "東京本社", desc: "東京都, 日本" },
    { icon: "pin", title: "ベトナム拠点", desc: "ベトナム" },
    { icon: "clock", title: "営業時間", desc: "月〜金 9:00 – 18:00（JST / ICT）" },
  ],
};

export type ContactContent = typeof contactVi;

export default function getContactContent(locale: "vi" | "ja"): ContactContent {
  return locale === "ja" ? contactJa : contactVi;
}
