const solutionsVi = {
  hero: { jp: "事業", title: "Dịch vụ & Giải pháp", sub: "Mọi giải pháp đều bắt đầu từ một câu hỏi: Khách hàng của bạn thực sự cần gì?" },
  agency: {
    eyebrowJp: "事業",
    eyebrow: "Agency",
    h2Pre: "Dịch vụ tư vấn & sáng tạo ",
    h2Em: "theo tiêu chuẩn Nhật Bản",
    linka: "Liên hệ tư vấn",
    cards: [
      { n: "01", cls: "a", tag: "Digital Marketing", title: "Tư vấn Digital Marketing",
        items: ["Google Ads", "Yahoo! Ads", "SNS Ads (Meta/TikTok)", "GA4 Analytics", "GTM Setup", "LP Optimization"] },
      { n: "02", cls: "b", tag: "Thương hiệu", title: "Xây dựng thương hiệu & Thiết kế CX",
        items: ["Brand Identity", "Touchpoint Design (O2O)", "Emotional Connection", "Visual Direction", "Content Strategy", "CX Mapping"] },
      { n: "03", cls: "c", tag: "Đào tạo", title: "Đào tạo nội bộ & Tăng trưởng",
        items: ["Marketer Development", "Process Transfer", "DX & Automation", "KPI Framework", "Team Building", "Ops Consulting"] },
    ],
  },
  software: {
    eyebrowJp: "開発",
    eyebrow: "Phần mềm",
    h2Pre: "Phần mềm ",
    h2Em: "xây dựng riêng",
    h2Post: " cho doanh nghiệp",
    cards: [
      { n: "04", cls: "a", tag: "Landing Page", title: "Phần mềm landing page",
        items: ["Drag & Drop Builder", "Responsive Design", "SEO Optimized", "Custom Domain", "A/B Testing", "Analytics Built-in"] },
      { n: "05", cls: "b", tag: "Automation", title: "Phần mềm tự động hóa",
        items: ["Workflow Automation", "Email & SMS Auto", "CRM Integration", "Chatbot", "Scheduling", "Auto Notifications"] },
      { n: "06", cls: "c", tag: "Management", title: "Phần mềm quản lý",
        items: ["Dashboard", "Real-time Reports", "Team Management", "KPI Tracking", "Client Portal", "Data Export"] },
    ],
  },
  strength: {
    eyebrowJp: "強み",
    eyebrow: "Tại sao chọn SENZU BASE",
    h2Pre: "Điểm mạnh ",
    h2Em: "cốt lõi",
    methods: [
      { icon: "people", title: "Thiết kế lấy khách hàng làm trọng tâm", desc: "Mọi quyết định đều xuất phát từ trải nghiệm và thấu hiểu khách hàng thực." },
      { icon: "trend", title: "Marketing bền vững", desc: "Xây dựng tăng trưởng dài hạn, không phụ thuộc vào ngân sách quảng cáo." },
      { icon: "spark", title: "Chuyên gia theo ngành", desc: "Đội ngũ chuyên sâu theo từng ngành, không dàn trải thiếu chiều sâu." },
    ],
    kpi: [
      { value: "6", label: "Dịch vụ chuyên biệt" },
      { value: "100+", label: "Dự án thành công" },
      { value: "40+", label: "Doanh nghiệp đối tác" },
      { value: "100%", label: "Cam kết minh bạch" },
    ],
  },
};

const solutionsJa: typeof solutionsVi = {
  hero: { jp: "事業", title: "サービス & ソリューション", sub: "すべてのソリューションは一つの問いから始まる：お客様が本当に必要としているものは何か？" },
  agency: {
    eyebrowJp: "事業",
    eyebrow: "エージェンシー",
    h2Pre: "",
    h2Em: "日本基準のコンサルティング & クリエイティブ",
    linka: "お問い合わせ",
    cards: [
      { n: "01", cls: "a", tag: "デジタルマーケティング", title: "デジタルマーケティング支援",
        items: ["Google Ads", "Yahoo! Ads", "SNS広告 (Meta/TikTok)", "GA4 Analytics", "GTM Setup", "LP Optimization"] },
      { n: "02", cls: "b", tag: "ブランド構築", title: "ブランド構築 & CX設計",
        items: ["Brand Identity", "Touchpoint Design (O2O)", "Emotional Connection", "Visual Direction", "Content Strategy", "CX Mapping"] },
      { n: "03", cls: "c", tag: "社内育成", title: "社内育成 & グロース",
        items: ["Marketer Development", "Process Transfer", "DX & 自動化", "KPI Framework", "Team Building", "Ops Consulting"] },
    ],
  },
  software: {
    eyebrowJp: "開発",
    eyebrow: "ソフトウェア",
    h2Pre: "企業向けに",
    h2Em: "専用構築",
    h2Post: "されたソフトウェア",
    cards: [
      { n: "04", cls: "a", tag: "ランディングページ", title: "ランディングページ制作",
        items: ["Drag & Drop Builder", "Responsive Design", "SEO Optimized", "Custom Domain", "A/B Testing", "Analytics Built-in"] },
      { n: "05", cls: "b", tag: "自動化", title: "業務自動化ソフトウェア",
        items: ["Workflow Automation", "Email & SMS Auto", "CRM Integration", "Chatbot", "Scheduling", "Auto Notifications"] },
      { n: "06", cls: "c", tag: "管理システム", title: "管理システム",
        items: ["Dashboard", "Real-time Reports", "Team Management", "KPI Tracking", "Client Portal", "Data Export"] },
    ],
  },
  strength: {
    eyebrowJp: "強み",
    eyebrow: "SENZU BASE を選ぶ理由",
    h2Pre: "",
    h2Em: "コア・ストレングス",
    methods: [
      { icon: "people", title: "顧客中心の設計", desc: "すべての判断は、実際の顧客体験と深い理解から出発します。" },
      { icon: "trend", title: "持続可能なマーケティング", desc: "広告予算に依存せず、長期的な成長基盤を構築します。" },
      { icon: "spark", title: "業界特化の専門家", desc: "各業界に精通した専門チームが深い知見で支援します。広く浅くではなく、深く確実に。" },
    ],
    kpi: [
      { value: "6", label: "サービスライン" },
      { value: "100+", label: "成功事例" },
      { value: "40+", label: "取引企業数" },
      { value: "100%", label: "透明性" },
    ],
  },
};

export type SolutionsContent = typeof solutionsVi;

export default function getSolutionsContent(locale: "vi" | "ja"): SolutionsContent {
  return locale === "ja" ? solutionsJa : solutionsVi;
}
