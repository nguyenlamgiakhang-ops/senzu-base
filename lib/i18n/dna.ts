const dnaVi = {
  hero: { jp: "人生の起点を創る", title: "DNA & Sứ mệnh", sub: "「人生の起点を創る」— Kiến tạo điểm xuất phát của cuộc đời" },
  origin: {
    eyebrowJp: "起源",
    eyebrow: "Nguồn gốc",
    h2Pre: "Nền tảng từ ",
    h2Em: "Nhật Bản.",
    lead: "SENZU BASE được xây dựng trên nền tảng tiêu chuẩn Nhật Bản. Chúng tôi mang tinh thần đổi mới và tiêu chuẩn cao nhất vào từng dự án.",
    linka: "Xem cách chúng tôi làm việc",
    stats: [
      { value: "May 2024", label: "Thành lập", icon: 0 },
      { value: "Tokyo", label: "Trụ sở", icon: 1 },
      { value: "JP Std.", label: "Tiêu chuẩn", icon: 2 },
      { value: "26", label: "Thành viên", icon: "people" },
      { value: "200+", label: "Dự án thành công", icon: 3 },
      { value: "100%", label: "Minh bạch", icon: 4 },
    ],
  },
  mission: {
    eyebrowJp: "使命",
    eyebrow: "Sứ mệnh",
    h2Em: "Tăng tốc",
    h2Post: " tiềm năng",
    lead: "Kết nối “tiềm năng ngủ quên” với “giá trị mới” — đó là sứ mệnh cốt lõi của SENZU BASE. Chúng tôi không chỉ là công ty dịch vụ, mà là đối tác tăng tốc tăng trưởng bền vững cho doanh nghiệp.",
    methods: [
      { icon: "people", title: "Tư duy lấy khách hàng làm trọng tâm", desc: "Mọi chiến lược đều bắt đầu từ việc thấu hiểu khách hàng. Hiểu sâu vấn đề, thiết kế giải pháp tối ưu." },
      { icon: "trend", title: "Quyết định dựa trên dữ liệu", desc: "Không dựa vào cảm tính mà dựa vào dữ liệu. Mọi quyết định đều cần bằng chứng rõ ràng." },
      { icon: "partner", title: "Quan hệ đối tác dài hạn", desc: "Không chạy theo lợi ích ngắn hạn, mà xây dựng mối quan hệ tin cậy lâu dài. Đồng hành cùng phát triển." },
    ],
    kpi: [
      { value: "200+", label: "Dự án thành công" },
      { value: "26", label: "Thành viên đội ngũ" },
      { value: "100%", label: "Minh bạch tuyệt đối" },
      { value: "2+", label: "Năm hoạt động" },
    ],
  },
  company: {
    eyebrowJp: "会社",
    eyebrow: "Thông tin doanh nghiệp",
    h2Pre: "CÔNG TY TNHH ",
    h2Em: "SENZU BASE",
    vn: {
      icon: "building",
      title: "Pháp nhân Việt Nam",
      loc: "TP Hồ Chí Minh",
      items: ["CÔNG TY TNHH SENZU BASE", "MST: 0319430261", "158 Đường Nguyễn Văn Thủ, Phường Tân Định, TP Hồ Chí Minh"],
      link: { href: "https://senzu-base.vn", label: "senzu-base.vn" },
    },
    bridgeLabel: "Nhật — Việt",
    jp: {
      icon: "pin",
      title: "Trụ sở Tokyo",
      loc: "Tokyo, Nhật Bản",
      items: ["Thành lập tháng 5/2024", "26 thành viên đội ngũ"],
      link: { href: "mailto:keiri_base@senzu.co.jp", label: "keiri_base@senzu.co.jp" },
    },
  },
  gallery: {
    eyebrowJp: "活動",
    eyebrow: "Hình ảnh hoạt động",
    alts: [
      "Đội ngũ SENZU BASE trao đổi công việc",
      "Buổi làm việc nhóm tại SENZU BASE",
      "Trao đổi cùng đội ngũ",
      "Không gian làm việc của SENZU BASE",
      "Đội ngũ SENZU BASE làm việc",
    ],
  },
  culture: {
    eyebrowJp: "文化",
    eyebrow: "Văn hóa doanh nghiệp",
    h2Pre: "Văn hóa ",
    h2Em: "4S",
    cards: [
      { n: "01", ac: "#587334", acbg: "rgba(88,115,52,.14)", icon: "check", title: "Select", desc: "Chọn lọc kỹ càng từ đối tác đến phương pháp. Chất lượng hơn số lượng." },
      { n: "02", ac: "#4c7a2f", acbg: "rgba(140,175,97,.2)", icon: "people", title: "Support", desc: "Đồng hành cùng khách hàng trong mọi giai đoạn tăng trưởng." },
      { n: "03", ac: "#2c5e38", acbg: "rgba(44,94,56,.14)", icon: "spark", title: "Spark", desc: "Khơi nguồn cảm hứng sáng tạo và tư duy đột phá trong mọi dự án." },
      { n: "04", ac: "#8a6f22", acbg: "rgba(185,154,62,.22)", icon: "sense", title: "Sense", desc: "Cảm nhận sâu sắc thị trường, người dùng và xu hướng tương lai." },
    ],
    punchPre: "Kết nối những tiềm năng chưa được khai phá với ",
    punchEm: "giá trị mới",
    punchPost: " thông qua sự minh bạch và công nghệ lấy con người làm trung tâm.",
  },
};

const dnaJa: typeof dnaVi = {
  hero: { jp: "人生の起点を創る", title: "DNA & ミッション", sub: "「人生の起点を創る」— Kiến tạo điểm xuất phát của cuộc đời" },
  origin: {
    eyebrowJp: "起源",
    eyebrow: "起源",
    h2Pre: "",
    h2Em: "日本",
    lead: "SENZU BASE は日本品質を基盤に、革新と最高水準を一つ一つのプロジェクトに込めています。",
    linka: "私たちの働き方を見る",
    stats: [
      { value: "2024年5月", label: "設立", icon: 0 },
      { value: "東京", label: "本社", icon: 1 },
      { value: "日本基準", label: "基準", icon: 2 },
      { value: "26", label: "チームメンバー", icon: "people" },
      { value: "200+", label: "成功事例", icon: 3 },
      { value: "100%", label: "透明性", icon: 4 },
    ],
  },
  mission: {
    eyebrowJp: "使命",
    eyebrow: "ミッション",
    h2Em: "潜在力",
    h2Post: "を加速させる",
    lead: "「眠れる潜在力」と「新しい価値」をつなぐ — それが SENZU BASE のコアミッションです。私たちは単なるサービス会社ではなく、企業の持続可能な成長を加速させるパートナーです。",
    methods: [
      { icon: "people", title: "顧客中心の思考", desc: "すべての施策は顧客理解から始まります。顧客の課題を深く理解し、最適な解決策を設計します。" },
      { icon: "trend", title: "データドリブンな意思決定", desc: "感覚ではなくデータで判断。すべての意思決定に明確なエビデンスを求めます。" },
      { icon: "partner", title: "長期的なパートナーシップ", desc: "短期利益ではなく、長期的な信頼関係の構築を重視。共に成長するパートナーとして伴走します。" },
    ],
    kpi: [
      { value: "200+", label: "成功事例" },
      { value: "26", label: "チームメンバー" },
      { value: "100%", label: "透明性" },
      { value: "2+", label: "運営年数" },
    ],
  },
  company: {
    eyebrowJp: "会社",
    eyebrow: "会社情報",
    h2Pre: "",
    h2Em: "SENZU BASE",
    vn: {
      icon: "building",
      title: "ベトナム法人",
      loc: "ホーチミン市",
      items: ["CÔNG TY TNHH SENZU BASE", "MST: 0319430261", "158 Nguyễn Văn Thủ, Tân Định, ホーチミン市"],
      link: { href: "https://senzu-base.vn", label: "senzu-base.vn" },
    },
    bridgeLabel: "日越連携",
    jp: {
      icon: "pin",
      title: "東京本社",
      loc: "東京都, 日本",
      items: ["2024年5月設立", "26名のチームメンバー"],
      link: { href: "mailto:keiri_base@senzu.co.jp", label: "keiri_base@senzu.co.jp" },
    },
  },
  gallery: {
    eyebrowJp: "活動",
    eyebrow: "活動の様子",
    alts: [
      "SENZU BASEのチームが業務について話し合う",
      "SENZU BASEでのチームワーク",
      "チームとのディスカッション",
      "SENZU BASEのワークスペース",
      "SENZU BASEチームの働く様子",
    ],
  },
  culture: {
    eyebrowJp: "文化",
    eyebrow: "企業文化",
    h2Pre: "文化 ",
    h2Em: "4S",
    cards: [
      { n: "01", ac: "#587334", acbg: "rgba(88,115,52,.14)", icon: "check", title: "Select", desc: "パートナーから方法論まで厳選。量より質を追求します。" },
      { n: "02", ac: "#4c7a2f", acbg: "rgba(140,175,97,.2)", icon: "people", title: "Support", desc: "成長のあらゆるフェーズでクライアントに伴走します。" },
      { n: "03", ac: "#2c5e38", acbg: "rgba(44,94,56,.14)", icon: "spark", title: "Spark", desc: "創造的なインスピレーションと革新的思考をすべてのプロジェクトに。" },
      { n: "04", ac: "#8a6f22", acbg: "rgba(185,154,62,.22)", icon: "sense", title: "Sense", desc: "市場、ユーザー、未来のトレンドを深く感じ取ります。" },
    ],
    punchPre: "透明性と人を中心に据えたテクノロジーで、未開拓の可能性を",
    punchEm: "新たな価値",
    punchPost: "へつなぐ。",
  },
};

export type DnaContent = typeof dnaVi;

export default function getDnaContent(locale: "vi" | "ja"): DnaContent {
  return locale === "ja" ? dnaJa : dnaVi;
}
