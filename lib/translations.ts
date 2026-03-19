export type Locale = "vi" | "en" | "ja";

export type Translations = {
  nav: {
    home: string;
    about: string;
    services: string;
    news: string;
    contact: string;
    team: string;
    startProject: string;
  };
  home: {
    badge: string;
    h1Line1: string;
    h1Line2: string;
    subtitle: string;
    exploreBtn: string;
    dnaBtn: string;
    scrollText: string;
    projectsLabel: string;
    coreStrength: string;
    jpStandard: string;
    originBadge: string;
    originH2Line1: string;
    originH2Line2: string;
    originDesc: string;
    stats: { founded: string; hq: string; standard: string };
    statCards: Array<{ value: string; label: string }>;
    capBadge: string;
    capH2: string;
    capH2Span: string;
    capAgencyLabel: string;
    capAgencySubtitle: string;
    capSoftwareLabel: string;
    capSoftwareSubtitle: string;
    capSolutionsBtn: string;
    capabilities: Array<{ title: string; desc: string }>;
    softwareCapabilities: Array<{ title: string; desc: string }>;
    valuesBadge: string;
    valuesH2: string;
    valuesH2Span: string;
    values: Array<{ title: string; desc: string }>;
    journalBadge: string;
    journalH2: string;
    viewAll: string;
    newsItems: Array<{ tag: string; title: string; date: string }>;
    ctaBadge: string;
    ctaH2: string;
    ctaH2Span: string;
    ctaDesc: string;
    ctaBtn: string;
  };
  about: {
    badge: string;
    h1: string;
    h1Span: string;
    mottoTranslation: string;
    originCard: {
      label: string;
      title: string;
      desc: string;
      founded: string;
      hq: string;
    };
    missionCard: {
      label: string;
      title: string;
      desc: string;
      bullets: string[];
    };
    companyCard: {
      label: string;
      title: string;
    };
    teamCount: string;
    ceoLabel: string;
    cultureBadge: string;
    cultureH2: string;
    cultureH2Span: string;
    fourS: Array<{ letter: string; word: string; desc: string }>;
  };
  services: {
    badge: string;
    h1: string;
    h1Span: string;
    subtitleMain: string;
    subtitleEmphasis: string;
    agencyLabel: string;
    agencyDesc: string;
    itLabel: string;
    itDesc: string;
    s1: { badge: string; title: string; desc: string };
    s2: { badge: string; title: string; desc: string };
    s3: { badge: string; title: string; desc: string };
    s4: { badge: string; title: string; desc: string };
    s5: { badge: string; title: string; desc: string };
    s6: { badge: string; title: string; desc: string };
    strengthBadge: string;
    strengthH2: string;
    strengthH2Span: string;
    strengths: Array<{ title: string; desc: string }>;
  };
  news: {
    badge: string;
    h1: string;
    h1Span: string;
    subtitle: string;
    card1: { tag: string; title: string; desc: string; date: string };
    card2: { tag: string; title: string; desc: string; applyText: string };
    card3: { tag: string; title: string; desc: string; comingSoon: string };
    joinH2: string;
    joinH2Span: string;
    joinDesc: string;
    joinBtn1: string;
    joinBtn2: string;
  };
  contact: {
    badge: string;
    h1: string;
    h1Span: string;
    subtitle: string;
    formTitle: string;
    labels: {
      name: string;
      email: string;
      company: string;
      budget: string;
      service: string;
      message: string;
    };
    placeholders: {
      name: string;
      email: string;
      company: string;
      message: string;
    };
    budgetOptions: string[];
    serviceOptions: string[];
    submitIdle: string;
    submitLoading: string;
    submitSuccess: string;
    infoTitle: string;
    hours: string;
    responseTime: string;
    hiringBadge: string;
    hiringTitle: string;
    hiringLocation: string;
    hiringApply: string;
    toastTitle: string;
    toastDesc: string;
  };
  team: {
    badge: string;
    h1: string;
    h1Span: string;
    subtitle: string;
    careerLabel: string;
    achievementLabel: string;
    hobbiesLabel: string;
    vn: {
      name: string;
      origin: string;
      company: string;
      role: string;
      bio: string[];
      career: Array<{ period: string; role: string }>;
      achievement: string;
      hobbies: string;
      quote: string;
    };
    jp: {
      name: string;
      origin: string;
      company: string;
      role: string;
      bio: string[];
      career: Array<{ period: string; role: string }>;
      achievement: string;
      hobbies: string;
      quote: string;
    };
    visionBadge: string;
    visionH2: string;
    visionH2Span: string;
    visionDesc: string;
  };
  footer: {
    tagline: string;
  };
};

const translations: Record<Locale, Translations> = {
  vi: {
    nav: {
      home: "Trang chủ",
      about: "DNA",
      services: "Giải pháp",
      news: "Tin tức",
      contact: "Liên hệ",
      team: "Lãnh đạo",
      startProject: "Bắt đầu",
    },
    home: {
      badge: "Tương lai của trải nghiệm khách hàng",
      h1Line1: "Kiến tạo",
      h1Line2: "Bước ngoặt.",
      subtitle:
        "Senzu Base khai phá các tiềm năng ẩn để kiến tạo giá trị mới, dựa trên nền tảng công nghệ minh bạch và lấy con người làm trung tâm.",
      exploreBtn: "Khám phá giải pháp",
      dnaBtn: "DNA của chúng tôi",
      scrollText: "Cuộn",
      projectsLabel: "Dự án thành công",
      coreStrength: "/// Điểm mạnh cốt lõi",
      jpStandard: "Tiêu chuẩn Nhật Bản",
      originBadge: "/// Câu chuyện khởi đầu",
      originH2Line1: "Khởi nguồn từ",
      originH2Line2: "Nhật Bản.",
      originDesc:
        "Senzu Base được thành lập bởi cựu nhân viên CyberAgent — tập đoàn công nghệ & truyền thông hàng đầu Nhật Bản. Chúng tôi mang tiêu chuẩn Nhật Bản vào thị trường Việt Nam.",
      stats: { founded: "Thành lập", hq: "Trụ sở", standard: "Tiêu chuẩn" },
      statCards: [
        { value: "200+", label: "Dự án thành công" },
        { value: "100%", label: "Minh bạch" },
        { value: "2+", label: "Năm hoạt động" },
        { value: "JP", label: "Tiêu chuẩn Nhật" },
      ],
      capBadge: "/// Giải pháp của chúng tôi",
      capH2: "Hai mảng",
      capH2Span: "dịch vụ",
      capAgencyLabel: "Agency",
      capAgencySubtitle: "Tư vấn & Sáng tạo",
      capSoftwareLabel: "Phần mềm",
      capSoftwareSubtitle: "Phần mềm doanh nghiệp",
      capSolutionsBtn: "Xem tất cả giải pháp",
      capabilities: [
        {
          title: "Tư vấn Digital Marketing",
          desc: "Chiến lược quảng cáo đa kênh dựa trên dữ liệu, tiếp cận đúng người đúng thời điểm.",
        },
        {
          title: "Xây dựng thương hiệu & Thiết kế CX",
          desc: "Xây dựng thương hiệu gắn kết cảm xúc và trải nghiệm khách hàng đột phá.",
        },
        {
          title: "Đào tạo nội bộ & Tăng trưởng",
          desc: "Chuyển giao năng lực marketing để đội ngũ của bạn tự chủ tăng trưởng.",
        },
      ],
      softwareCapabilities: [
        {
          title: "Phần mềm landing page",
          desc: "Tạo landing page chuyên nghiệp nhanh chóng, không cần lập trình, tối ưu chuyển đổi.",
        },
        {
          title: "Phần mềm tự động hóa",
          desc: "Tự động hoá quy trình vận hành, chăm sóc khách hàng và marketing.",
        },
        {
          title: "Phần mềm quản lý",
          desc: "Quản lý toàn diện dữ liệu, đội nhóm và hiệu suất kinh doanh trên một nền tảng.",
        },
      ],
      valuesBadge: "/// Giá trị cốt lõi",
      valuesH2: "Điều chúng tôi",
      valuesH2Span: "theo đuổi",
      values: [
        {
          title: "Trung thực",
          desc: "Sự thật là nền tảng của mọi mối quan hệ. Chúng tôi luôn minh bạch.",
        },
        {
          title: "Bền vững",
          desc: "Tăng trưởng bền vững, không đánh đổi giá trị dài hạn vì lợi ích ngắn hạn.",
        },
        {
          title: "Minh bạch",
          desc: "Mọi quyết định đều có cơ sở rõ ràng. Không có điểm tối trong marketing.",
        },
      ],
      journalBadge: "/// Cập nhật mới nhất",
      journalH2: "Tin tức & Cập nhật",
      viewAll: "Xem tất cả",
      newsItems: [
        { tag: "Thông cáo báo chí", title: "Website mới ra mắt", date: "Tháng 8, 2024" },
        {
          tag: "Đang tuyển dụng",
          title: "Digital Planner / Tư vấn Marketing",
          date: "Đang mở",
        },
        {
          tag: "Blog chuyên sâu",
          title: "Tối ưu trải nghiệm khách hàng trong kỷ nguyên AI",
          date: "Sắp ra mắt",
        },
      ],
      ctaBadge: "/// Bắt đầu ngay",
      ctaH2: "Sẵn sàng tạo ra một",
      ctaH2Span: "bước ngoặt?",
      ctaDesc: "Hãy cùng Senzu Base biến tiềm năng của bạn thành giá trị thực.",
      ctaBtn: "Bắt đầu dự án",
    },
    about: {
      badge: "/// Danh tính của chúng tôi",
      h1: "DNA &",
      h1Span: "Sứ mệnh",
      mottoTranslation: "Kiến tạo điểm xuất phát của cuộc đời",
      originCard: {
        label: "Nguồn gốc",
        title: "Xuất thân từ CyberAgent Nhật Bản",
        desc: "Senzu Base được thành lập bởi cựu nhân viên CyberAgent — tập đoàn công nghệ và truyền thông hàng đầu Nhật Bản. Chúng tôi mang tinh thần đổi mới và tiêu chuẩn cao nhất vào từng dự án.",
        founded: "Thành lập",
        hq: "Trụ sở",
      },
      missionCard: {
        label: "Sứ mệnh",
        title: "Tăng tốc tiềm năng",
        desc: 'Kết nối "tiềm năng ngủ quên" với "giá trị mới" — đó là sứ mệnh cốt lõi của Senzu Base. Chúng tôi không chỉ là công ty dịch vụ, mà là đối tác tăng tốc tăng trưởng bền vững cho doanh nghiệp.',
        bullets: [
          "Tư duy lấy khách hàng làm trọng tâm",
          "Quyết định dựa trên dữ liệu",
          "Quan hệ đối tác dài hạn",
        ],
      },
      companyCard: {
        label: "Công ty",
        title: "CÔNG TY TNHH SENZU BASE",
      },
      teamCount: "26 thành viên",
      ceoLabel: "Giám đốc điều hành",
      cultureBadge: "/// Văn hóa doanh nghiệp",
      cultureH2: "Văn hóa",
      cultureH2Span: "4S",
      fourS: [
        {
          letter: "S",
          word: "Select",
          desc: "Chọn lọc kỹ càng từ đối tác đến phương pháp. Chất lượng hơn số lượng.",
        },
        {
          letter: "S",
          word: "Support",
          desc: "Đồng hành cùng khách hàng trong mọi giai đoạn tăng trưởng.",
        },
        {
          letter: "S",
          word: "Spark",
          desc: "Khơi nguồn cảm hứng sáng tạo và tư duy đột phá trong mọi dự án.",
        },
        {
          letter: "S",
          word: "Sense",
          desc: "Cảm nhận sâu sắc thị trường, người dùng và xu hướng tương lai.",
        },
      ],
    },
    services: {
      badge: "/// Dịch vụ của chúng tôi",
      h1: "Dịch vụ &",
      h1Span: "Giải pháp",
      subtitleMain: "Mọi giải pháp của chúng tôi đều bắt đầu từ một câu hỏi:",
      subtitleEmphasis: " Khách hàng của bạn thực sự cần gì?",
      agencyLabel: "Agency",
      agencyDesc: "Dịch vụ tư vấn & sáng tạo theo tiêu chuẩn Nhật Bản",
      itLabel: "Phần mềm",
      itDesc: "Phần mềm được xây dựng riêng cho doanh nghiệp",
      s1: {
        badge: "01 — Digital Marketing",
        title: "Tư vấn Digital Marketing",
        desc: "Chiến lược quảng cáo đa kênh dựa trên dữ liệu và tư duy lấy khách hàng làm trọng tâm. Chúng tôi giúp bạn tiếp cận đúng người, đúng thời điểm với ngân sách tối ưu nhất.",
      },
      s2: {
        badge: "02 — Xây dựng thương hiệu",
        title: "Xây dựng thương hiệu & Thiết kế CX",
        desc: "Xây dựng nhận diện thương hiệu gắn kết cảm xúc với khách hàng. Từ nhận diện thương hiệu đến từng điểm chạm trải nghiệm.",
      },
      s3: {
        badge: "03 — Đào tạo nội bộ",
        title: "Đào tạo nội bộ & Tăng trưởng",
        desc: "Chuyển giao năng lực marketing để đội ngũ của bạn tự chủ tăng trưởng. Từ đào tạo nhân viên marketing đến triển khai chuyển đổi số & tự động hóa.",
      },
      s4: {
        badge: "04 — Landing Page",
        title: "Phần mềm landing page",
        desc: "Tạo landing page chuyên nghiệp nhanh chóng, không cần lập trình. Tối ưu chuyển đổi với giao diện đẹp, tốc độ cao và tích hợp sẵn công cụ phân tích.",
      },
      s5: {
        badge: "05 — Tự động hóa",
        title: "Phần mềm tự động hóa",
        desc: "Tự động hoá quy trình vận hành, chăm sóc khách hàng và marketing. Tiết kiệm thời gian, giảm sai sót và nâng cao trải nghiệm người dùng.",
      },
      s6: {
        badge: "06 — Quản lý",
        title: "Phần mềm quản lý",
        desc: "Quản lý toàn diện dữ liệu, đội nhóm và hiệu suất kinh doanh trên một nền tảng duy nhất. Bảng điều khiển trực quan, báo cáo thời gian thực.",
      },
      strengthBadge: "/// Tại sao chọn Senzu Base",
      strengthH2: "Điểm mạnh",
      strengthH2Span: "cốt lõi",
      strengths: [
        {
          title: "Thiết kế lấy khách hàng làm trọng tâm",
          desc: "Mọi quyết định đều xuất phát từ trải nghiệm và thấu hiểu khách hàng thực.",
        },
        {
          title: "Marketing bền vững",
          desc: "Xây dựng tăng trưởng dài hạn, không phụ thuộc vào ngân sách quảng cáo.",
        },
        {
          title: "Chuyên gia theo ngành",
          desc: "Đội ngũ chuyên sâu theo từng ngành, không dàn trải thiếu chiều sâu.",
        },
      ],
    },
    news: {
      badge: "/// Tin tức & Tuyển dụng",
      h1: "Nhật ký &",
      h1Span: "Tuyển dụng",
      subtitle: "Tin tức, kiến thức chuyên sâu và cơ hội nghề nghiệp mới nhất từ Senzu Base.",
      card1: {
        tag: "Thông cáo báo chí",
        title: "Website mới ra mắt — Bước ngoặt mới của Senzu Base",
        desc: "Chúng tôi tự hào ra mắt website mới với giao diện hiện đại, phản ánh rõ hơn định hướng và giá trị cốt lõi của Senzu Base.",
        date: "Tháng 8, 2024",
      },
      card2: {
        tag: "Đang tuyển dụng",
        title: "Digital Planner / Tư vấn Marketing",
        desc: "Làm việc từ xa / Freelance / Shibuya. Tham gia đội ngũ Senzu Base và cùng chúng tôi kiến tạo tương lai của marketing.",
        applyText: "Ứng tuyển",
      },
      card3: {
        tag: "Blog chuyên sâu",
        title: "Tối ưu trải nghiệm khách hàng trong kỷ nguyên AI",
        desc: "Góc nhìn của Senzu Base về cách AI đang thay đổi cách thương hiệu kết nối với khách hàng.",
        comingSoon: "Sắp ra mắt",
      },
      joinH2: "Gia nhập đội ngũ",
      joinH2Span: "Senzu Base",
      joinDesc:
        "Chúng tôi đang tìm kiếm những người đam mê marketing và muốn tạo ra tác động thực sự.",
      joinBtn1: "Xem vị trí trên Youtrust",
      joinBtn2: "Liên hệ trực tiếp",
    },
    contact: {
      badge: "/// Hãy nói chuyện",
      h1: "Liên hệ &",
      h1Span: "Hợp tác",
      subtitle:
        "Chia sẻ dự án của bạn với chúng tôi. Senzu Base sẽ phản hồi trong vòng 24 giờ làm việc.",
      formTitle: "Gửi yêu cầu",
      labels: {
        name: "Họ và tên *",
        email: "Email *",
        company: "Công ty / Thương hiệu",
        budget: "Ngân sách dự kiến",
        service: "Dịch vụ quan tâm *",
        message: "Nội dung *",
      },
      placeholders: {
        name: "Nguyễn Văn A",
        email: "you@company.com",
        company: "Tên công ty / Thương hiệu của bạn",
        message: "Mô tả ngắn về dự án, mục tiêu và thách thức của bạn...",
      },
      budgetOptions: [
        "Chọn ngân sách",
        "Dưới 5 triệu VND",
        "5 – 20 triệu VND",
        "20 – 50 triệu VND",
        "Trên 50 triệu VND",
        "Thoả thuận",
      ],
      serviceOptions: [
        "Chọn dịch vụ",
        "Tư vấn Digital Marketing",
        "Xây dựng thương hiệu (Branding)",
        "Đào tạo nội bộ & Tăng trưởng",
        "Tư vấn chiến lược tổng thể",
        "Khác / Muốn trao đổi thêm",
      ],
      submitIdle: "Gửi yêu cầu",
      submitLoading: "Đang gửi...",
      submitSuccess: "Đã gửi thành công!",
      infoTitle: "Thông tin liên hệ",
      hours: "Thứ 2 – Thứ 6, 09:00–18:00 JST",
      responseTime: "Phản hồi trong 24 giờ làm việc",
      hiringBadge: "Đang tuyển dụng",
      hiringTitle: "Digital Planner",
      hiringLocation: "Làm việc từ xa / Freelance / Shibuya",
      hiringApply: "Ứng tuyển trên Youtrust →",
      toastTitle: "Gửi thành công!",
      toastDesc: "Chúng tôi sẽ phản hồi trong 24 giờ",
    },
    team: {
      badge: "/// Người Sáng Lập",
      h1: "Gặp gỡ",
      h1Span: "Nhà sáng lập",
      subtitle: "Senzu Base được dẫn dắt bởi hai nhà sáng lập với tầm nhìn chung — kết nối tinh hoa Nhật Bản và Việt Nam để tạo ra đột phá thực sự.",
      careerLabel: "Kinh nghiệm",
      achievementLabel: "Thành tích nổi bật",
      hobbiesLabel: "Sở thích",
      vn: {
        name: "Nguyễn Hữu Thắng",
        origin: "🇻🇳 Việt Nam",
        company: "Senzu Base",
        role: "Giám đốc điều hành",
        bio: [
          "Dẫn dắt Senzu Base — công ty con tại Việt Nam — kết nối tiêu chuẩn Nhật Bản với thị trường Việt Nam.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — Digital Marketing" },
          { period: "2024 ~ nay", role: "Senzu Base — CEO" },
        ],
        achievement: "Senzu Base đạt 50+ khách hàng chỉ sau 1,5 năm hoạt động",
        hobbies: "Du lịch · Đọc sách · Marketing Strategy",
        quote: "\"Tiềm năng lớn nhất thường nằm ở nơi chưa ai nhìn thấy.\"",
      },
      jp: {
        name: "平原 匠",
        origin: "🇯🇵 Nhật Bản",
        company: "Senzu Inc.",
        role: "Tổng Giám Đốc (CEO)",
        bio: [
          "CyberAgent xuất thân — tư vấn digital marketing cho các ngành sách điện tử, viễn thông, bất động sản, xe hơi, nhân sự, du lịch, OTT, hôn nhân và chuyển nhà.",
          "Lấy triết lý \"trải nghiệm khách hàng là tối thượng\" làm cốt lõi, tập trung cải thiện toàn bộ hành trình người dùng chứ không chỉ kết quả số liệu.",
          "Song song phát triển sản phẩm nội bộ (dự kiến ra mắt năm tài chính 2026) bên cạnh dịch vụ tư vấn.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent — Sales & Marketing Consultant" },
          { period: "2024 ~ nay", role: "株式会社センズ — 代表取締役 (CEO)" },
        ],
        achievement: "Chỉ 1,5 năm sau khi thành lập — vượt mốc 50 khách hàng",
        hobbies: "Du lịch · Đọc sách · Karaoke · Ramen · Dẫn bạn bè khám phá Kochi",
        quote: "「人生の起点を創る」— Kiến tạo điểm xuất phát của cuộc đời.",
      },
      visionBadge: "/// Tầm Nhìn Chung",
      visionH2: "Hai nền văn hóa,",
      visionH2Span: "một sứ mệnh.",
      visionDesc: "Sự kết hợp giữa sự cần mẫn và tiêu chuẩn cao của Nhật Bản với sự năng động và hiểu biết thị trường Việt Nam tạo ra lợi thế cạnh tranh độc đáo — không ai khác có được.",
    },
    footer: {
      tagline:
        "Kết nối những tiềm năng chưa được khai phá với giá trị mới thông qua sự minh bạch và công nghệ lấy con người làm trung tâm.",
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "DNA",
      services: "Solutions",
      news: "Journal",
      contact: "Contact",
      team: "Leaders",
      startProject: "Start Project",
    },
    home: {
      badge: "Future of CX",
      h1Line1: "Building",
      h1Line2: "Breakthroughs.",
      subtitle:
        "Senzu Base connects dormant potential with new value through transparency and human-centered technology.",
      exploreBtn: "Explore Solutions",
      dnaBtn: "Our DNA",
      scrollText: "Scroll",
      projectsLabel: "Successful Projects",
      coreStrength: "/// Core Strength",
      jpStandard: "Japanese Standard",
      originBadge: "/// Origin Story",
      originH2Line1: "Born from",
      originH2Line2: "Japan.",
      originDesc:
        "Senzu Base was founded by former CyberAgent employees — Japan's leading technology and media conglomerate. We bring Japanese standards to the Southeast Asian market.",
      stats: { founded: "Founded", hq: "HQ", standard: "Standard" },
      statCards: [
        { value: "200+", label: "Successful Projects" },
        { value: "100%", label: "Transparency" },
        { value: "2+", label: "Years Active" },
        { value: "JP", label: "JP Standard" },
      ],
      capBadge: "/// Our Solutions",
      capH2: "Two areas",
      capH2Span: "of service",
      capAgencyLabel: "Agency",
      capAgencySubtitle: "Consulting & Creative",
      capSoftwareLabel: "Software",
      capSoftwareSubtitle: "Business Software",
      capSolutionsBtn: "View all solutions",
      capabilities: [
        {
          title: "Digital Marketing Consulting",
          desc: "Data-driven campaigns across Google, Yahoo!, Meta, TikTok to reach the right people at the right time.",
        },
        {
          title: "Brand Creative & CX Design",
          desc: "Building brands that forge emotional connections and breakthrough customer experiences.",
        },
        {
          title: "In-house Training & Growth",
          desc: "Transferring marketing capabilities so your team can grow autonomously.",
        },
      ],
      softwareCapabilities: [
        {
          title: "Landing Page Software",
          desc: "Create professional landing pages fast, no coding required, optimized for conversions.",
        },
        {
          title: "Workflow Automation Tools",
          desc: "Automate operations, customer care, and marketing workflows.",
        },
        {
          title: "Business Management Platform",
          desc: "Manage data, teams, and business performance on a single platform.",
        },
      ],
      valuesBadge: "/// Core Values",
      valuesH2: "What We",
      valuesH2Span: "Stand For",
      values: [
        {
          title: "Honesty",
          desc: "Truth is the foundation of every relationship. We are always transparent.",
        },
        {
          title: "Sustainability",
          desc: "Sustainable growth, without sacrificing long-term value for short-term gain.",
        },
        {
          title: "Transparency",
          desc: "Every decision has a clear basis. No black box in marketing.",
        },
      ],
      journalBadge: "/// Latest Updates",
      journalH2: "Journal & News",
      viewAll: "View all",
      newsItems: [
        { tag: "Press Release", title: "New Website Launch", date: "Aug 2024" },
        {
          tag: "We're Hiring",
          title: "Digital Planner / Marketing Consultant",
          date: "Open",
        },
        {
          tag: "Insight Blog",
          title: "Optimizing CX in the AI Era",
          date: "Coming Soon",
        },
      ],
      ctaBadge: "/// Let's Begin",
      ctaH2: "Ready to create a",
      ctaH2Span: "breakthrough?",
      ctaDesc: "Let Senzu Base transform your untapped potential into real value.",
      ctaBtn: "Start Your Project",
    },
    about: {
      badge: "/// Our Identity",
      h1: "DNA &",
      h1Span: "Mission",
      mottoTranslation: "Where Your Journey Begins",
      originCard: {
        label: "Origin",
        title: "CyberAgent Japan Alumni",
        desc: "Senzu Base was founded by former CyberAgent employees — Japan's leading technology and media conglomerate. We bring the DNA of innovation and the highest standards to every project.",
        founded: "Founded",
        hq: "Headquarters",
      },
      missionCard: {
        label: "Mission",
        title: "Potential Accelerator",
        desc: "Connecting 'dormant potential' with 'new value' — that is Senzu Base's core mission. We are not just an agency, but a sustainable growth acceleration partner for businesses.",
        bullets: [
          "CX-first thinking",
          "Data-driven decisions",
          "Long-term partnership",
        ],
      },
      companyCard: {
        label: "Company",
        title: "SENZU BASE CO., LTD.",
      },
      teamCount: "26 members",
      ceoLabel: "CEO",
      cultureBadge: "/// Culture Code",
      cultureH2: "The",
      cultureH2Span: "4S Culture",
      fourS: [
        {
          letter: "S",
          word: "Select",
          desc: "Carefully selecting from partners to methods. Quality over quantity.",
        },
        {
          letter: "S",
          word: "Support",
          desc: "Accompanying clients at every stage of growth.",
        },
        {
          letter: "S",
          word: "Spark",
          desc: "Igniting creative inspiration and breakthrough thinking in every project.",
        },
        {
          letter: "S",
          word: "Sense",
          desc: "Deeply sensing the market, users, and future trends.",
        },
      ],
    },
    services: {
      badge: "/// What We Offer",
      h1: "Services &",
      h1Span: "Solutions",
      subtitleMain: "Every solution we offer starts with one question:",
      subtitleEmphasis: " What does your customer truly need?",
      agencyLabel: "Agency",
      agencyDesc: "Consulting & creative services built on Japanese standards",
      itLabel: "Software",
      itDesc: "Software built specifically for your business",
      s1: {
        badge: "01 — Digital Marketing",
        title: "Digital Marketing Consulting",
        desc: "Multi-channel advertising strategy based on data and CX-thinking. We help you reach the right people, at the right time, with the optimal budget.",
      },
      s2: {
        badge: "02 — Brand Creative",
        title: "Brand Creative & CX Design",
        desc: "Building brand identity that creates emotional connections with customers. From Brand Identity to every experience touchpoint.",
      },
      s3: {
        badge: "03 — In-house Training",
        title: "In-house Training & Growth",
        desc: "Transferring marketing capabilities so your team can grow autonomously. From marketer training to DX & Automation implementation.",
      },
      s4: {
        badge: "04 — Landing Page",
        title: "Landing Page Software",
        desc: "Create professional landing pages fast, no coding required. Optimized for conversions with beautiful design, high speed, and built-in analytics tools.",
      },
      s5: {
        badge: "05 — Automation",
        title: "Workflow Automation Tools",
        desc: "Automate operations, customer care, and marketing workflows. Save time, reduce errors, and elevate the user experience.",
      },
      s6: {
        badge: "06 — Management",
        title: "Business Management Platform",
        desc: "Manage data, teams, and business performance on a single platform. Intuitive dashboard with real-time reporting.",
      },
      strengthBadge: "/// Why Senzu Base",
      strengthH2: "Core",
      strengthH2Span: "Strengths",
      strengths: [
        {
          title: "CX-based Design",
          desc: "Every decision stems from real customer experience and insight.",
        },
        {
          title: "Sustainable Marketing",
          desc: "Building long-term growth that doesn't depend on advertising budgets.",
        },
        {
          title: "Industry Experts",
          desc: "Specialized team by industry, with depth rather than breadth.",
        },
      ],
    },
    news: {
      badge: "/// Updates & Careers",
      h1: "Journal &",
      h1Span: "Careers",
      subtitle: "Latest news, insights and career opportunities from Senzu Base.",
      card1: {
        tag: "Press Release",
        title: "New Website Launch — A New Milestone for Senzu Base",
        desc: "We are proud to launch our new website with a modern interface, better reflecting Senzu Base's direction and core values.",
        date: "Aug 2024",
      },
      card2: {
        tag: "We're Hiring",
        title: "Digital Planner / Marketing Consultant",
        desc: "Remote / Freelance / Shibuya. Join the Senzu Base team and help us shape the future of CX marketing.",
        applyText: "Apply",
      },
      card3: {
        tag: "Insight Blog",
        title: "Optimizing CX in the AI Era",
        desc: "Senzu Base's perspective on how AI is changing the way brands connect with customers.",
        comingSoon: "Coming Soon",
      },
      joinH2: "Join the",
      joinH2Span: "Senzu Base Team",
      joinDesc:
        "We are looking for people passionate about marketing, CX and wanting to make a real impact.",
      joinBtn1: "View Positions on Youtrust",
      joinBtn2: "Contact Directly",
    },
    contact: {
      badge: "/// Let's Talk",
      h1: "Get In Touch &",
      h1Span: "Collaborate",
      subtitle:
        "Share your project with us. Senzu Base will respond within 24 business hours.",
      formTitle: "Send Request",
      labels: {
        name: "Full Name *",
        email: "Email *",
        company: "Company / Brand",
        budget: "Estimated Budget",
        service: "Service of Interest *",
        message: "Message *",
      },
      placeholders: {
        name: "John Smith",
        email: "you@company.com",
        company: "Your company name",
        message: "Brief description of your project, goals and challenges...",
      },
      budgetOptions: [
        "Select budget",
        "Under $200 USD",
        "$200 – $800 USD",
        "$800 – $2,000 USD",
        "Over $2,000 USD",
        "To be discussed",
      ],
      serviceOptions: [
        "Select service",
        "Digital Marketing Consulting",
        "Brand Creative",
        "In-house Training & Growth",
        "Overall Strategy Consulting",
        "Other / Want to discuss more",
      ],
      submitIdle: "Send Request",
      submitLoading: "Sending...",
      submitSuccess: "Sent successfully!",
      infoTitle: "Contact Information",
      hours: "Mon–Fri, 09:00–18:00 JST",
      responseTime: "Response within 24 business hours",
      hiringBadge: "We're Hiring",
      hiringTitle: "Digital Planner",
      hiringLocation: "Remote / Freelance / Shibuya",
      hiringApply: "Apply on Youtrust →",
      toastTitle: "Sent successfully!",
      toastDesc: "We'll respond within 24h",
    },
    team: {
      badge: "/// Our Founders",
      h1: "Meet Our",
      h1Span: "Founders",
      subtitle: "Senzu Base is led by two founders sharing a single vision — bridging Japanese excellence and Vietnamese energy to create real breakthroughs.",
      careerLabel: "Career",
      achievementLabel: "Key Achievement",
      hobbiesLabel: "Hobbies",
      vn: {
        name: "Nguyen Huu Thang",
        origin: "🇻🇳 Vietnam",
        company: "Senzu Base",
        role: "CEO",
        bio: [
          "Former CyberAgent Japan employee with experience in digital marketing and CX in the Japanese market.",
          "Leads Senzu Base — the Vietnamese subsidiary — bridging Japanese standards with the Vietnamese market.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — Digital Marketing" },
          { period: "2024 ~ Present", role: "Senzu Base — CEO" },
        ],
        achievement: "Senzu Base surpassed 50 clients in just 1.5 years",
        hobbies: "Travel · Reading · Marketing Strategy",
        quote: "\"The greatest potential often lies where no one has looked yet.\"",
      },
      jp: {
        name: "Hirahara Takumi",
        origin: "🇯🇵 Japan",
        company: "Senzu Inc. (株式会社センズ)",
        role: "Representative Director & CEO",
        bio: [
          "CyberAgent alumnus — digital marketing consultant across e-books, telecom, real estate, automotive, HR, travel, OTT, wedding, and moving industries.",
          "Driven by a 'customer experience supremacy' philosophy — committed to improving the full user journey, not just metrics.",
          "Simultaneously developing an in-house product (expected release FY2026) alongside consulting services.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent — Sales & Marketing Consultant" },
          { period: "2024 ~ Present", role: "Senzu Inc. — Representative Director & CEO" },
        ],
        achievement: "Just 1.5 years after founding — surpassed 50 client companies",
        hobbies: "Travel · Reading · Karaoke · Ramen · Exploring Kochi with friends",
        quote: "「人生の起点を創る」— Creating starting points of life.",
      },
      visionBadge: "/// Shared Vision",
      visionH2: "Two cultures,",
      visionH2Span: "one mission.",
      visionDesc: "The combination of Japan's diligence and high standards with Vietnam's dynamism and market understanding creates a unique competitive advantage — one that no other agency can replicate.",
    },
    footer: {
      tagline:
        "Connecting dormant potential with new value through transparency and human-centered technology.",
    },
  },

  ja: {
    nav: {
      home: "ホーム",
      about: "DNA",
      services: "ソリューション",
      news: "ジャーナル",
      contact: "お問い合わせ",
      team: "リーダー",
      startProject: "始める",
    },
    home: {
      badge: "CXの未来",
      h1Line1: "切り拓く",
      h1Line2: "突破口を。",
      subtitle:
        "Senzu Baseは透明性と人間中心テクノロジーを通じて、眠っている可能性を新たな価値に結びつけます。",
      exploreBtn: "ソリューションを見る",
      dnaBtn: "DNAとは",
      scrollText: "スクロール",
      projectsLabel: "成功プロジェクト",
      coreStrength: "/// コアストレングス",
      jpStandard: "日本基準",
      originBadge: "/// 誕生の背景",
      originH2Line1: "誕生は",
      originH2Line2: "日本から。",
      originDesc:
        "Senzu BaseはCyberAgent（日本トップのテクノロジー・メディア企業）の元社員によって設立されました。日本基準の品質を東南アジア市場にもたらします。",
      stats: { founded: "設立", hq: "本社", standard: "基準" },
      statCards: [
        { value: "200+", label: "成功プロジェクト" },
        { value: "100%", label: "透明性" },
        { value: "2+", label: "事業年数" },
        { value: "JP", label: "日本基準" },
      ],
      capBadge: "/// ソリューション",
      capH2: "2つの",
      capH2Span: "サービス領域",
      capAgencyLabel: "Agency",
      capAgencySubtitle: "コンサルティング＆クリエイティブ",
      capSoftwareLabel: "ソフトウェア",
      capSoftwareSubtitle: "ビジネスソフトウェア",
      capSolutionsBtn: "すべてのソリューションを見る",
      capabilities: [
        {
          title: "デジタルマーケティングコンサルティング",
          desc: "データ駆動型のマルチチャネル戦略で、正しい人に正しいタイミングでリーチ。",
        },
        {
          title: "ブランドクリエイティブ＆CXデザイン",
          desc: "感情的なつながりと革新的な顧客体験を生み出すブランド構築。",
        },
        {
          title: "内製化支援＆グロース",
          desc: "チームが自律的に成長できるようマーケティング能力を移転します。",
        },
      ],
      softwareCapabilities: [
        {
          title: "LP制作ツール",
          desc: "コーディング不要でプロ品質のランディングページを素早く作成。",
        },
        {
          title: "業務自動化ソフトウェア",
          desc: "業務フロー・顧客対応・マーケティングを自動化して時間を節約。",
        },
        {
          title: "管理ソフト",
          desc: "データ・チーム・業績を一つのプラットフォームで一元管理。",
        },
      ],
      valuesBadge: "/// コアバリュー",
      valuesH2: "私たちが",
      valuesH2Span: "大切にすること",
      values: [
        {
          title: "誠実さ",
          desc: "真実はすべての関係の基盤です。私たちは常に透明です。",
        },
        {
          title: "持続可能性",
          desc: "短期的な利益のために長期的な価値を犠牲にしない持続的な成長。",
        },
        {
          title: "透明性",
          desc: "すべての決定には明確な根拠があります。マーケティングにブラックボックスなし。",
        },
      ],
      journalBadge: "/// 最新情報",
      journalH2: "ジャーナル＆ニュース",
      viewAll: "すべて見る",
      newsItems: [
        {
          tag: "プレスリリース",
          title: "新ウェブサイト公開",
          date: "2024年8月",
        },
        {
          tag: "採用情報",
          title: "デジタルプランナー / マーケティングコンサルタント",
          date: "募集中",
        },
        {
          tag: "インサイトブログ",
          title: "AI時代のCX最適化",
          date: "近日公開",
        },
      ],
      ctaBadge: "/// さあ始めましょう",
      ctaH2: "突破口を",
      ctaH2Span: "創りませんか？",
      ctaDesc: "Senzu Baseと一緒に、あなたの潜在能力を現実の価値に変えましょう。",
      ctaBtn: "プロジェクトを始める",
    },
    about: {
      badge: "/// アイデンティティ",
      h1: "DNAと",
      h1Span: "ミッション",
      mottoTranslation: "人生の起点を創る",
      originCard: {
        label: "起源",
        title: "CyberAgent Japan 出身",
        desc: "Senzu BaseはCyberAgent（日本トップのテクノロジー・メディア企業）の元社員によって設立されました。イノベーションのDNAと最高基準をすべてのプロジェクトに持ち込みます。",
        founded: "設立",
        hq: "本社",
      },
      missionCard: {
        label: "ミッション",
        title: "ポテンシャルのアクセラレーター",
        desc: "「眠れる可能性」と「新たな価値」をつなぐ — それがSenzu Baseのコアミッションです。単なるエージェンシーではなく、持続的成長のアクセラレーターパートナーです。",
        bullets: [
          "CXファーストの思考",
          "データドリブンな意思決定",
          "長期的なパートナーシップ",
        ],
      },
      companyCard: {
        label: "会社情報",
        title: "SENZU BASE Co., Ltd.",
      },
      teamCount: "26名のメンバー",
      ceoLabel: "CEO",
      cultureBadge: "/// カルチャーコード",
      cultureH2: "私たちの",
      cultureH2Span: "4Sカルチャー",
      fourS: [
        {
          letter: "S",
          word: "Select",
          desc: "パートナーから手法まで厳選。量より質を重視します。",
        },
        {
          letter: "S",
          word: "Support",
          desc: "成長のあらゆる段階でクライアントに寄り添います。",
        },
        {
          letter: "S",
          word: "Spark",
          desc: "すべてのプロジェクトに創造的なインスピレーションと革新的思考を点火します。",
        },
        {
          letter: "S",
          word: "Sense",
          desc: "市場、ユーザー、将来のトレンドを深く感知します。",
        },
      ],
    },
    services: {
      badge: "/// サービス内容",
      h1: "サービス＆",
      h1Span: "ソリューション",
      subtitleMain: "私たちのすべてのソリューションは一つの質問から始まります：",
      subtitleEmphasis: " あなたの顧客が本当に必要としているものは何ですか？",
      agencyLabel: "Agency",
      agencyDesc: "日本基準のコンサルティング＆クリエイティブサービス",
      itLabel: "ソフトウェア",
      itDesc: "企業のために設計されたソフトウェア",
      s1: {
        badge: "01 — デジタルマーケティング",
        title: "デジタルマーケティングコンサルティング",
        desc: "データとCXシンキングに基づいたマルチチャネル広告戦略。最適な予算で、正しい人に、正しいタイミングでリーチします。",
      },
      s2: {
        badge: "02 — ブランドクリエイティブ",
        title: "ブランドクリエイティブ＆CXデザイン",
        desc: "顧客との感情的なつながりを生み出すブランドアイデンティティの構築。ブランドアイデンティティから各体験タッチポイントまで。",
      },
      s3: {
        badge: "03 — 内製化支援",
        title: "内製化支援＆グロース",
        desc: "チームが自律的に成長できるようマーケティング能力を移転します。マーケターのトレーニングからDX＆オートメーションの実装まで。",
      },
      s4: {
        badge: "04 — ランディングページ",
        title: "LP制作ツール",
        desc: "コーディング不要でプロ品質のランディングページを素早く作成。美しいデザイン、高速表示、分析ツール内蔵でコンバージョンを最大化。",
      },
      s5: {
        badge: "05 — オートメーション",
        title: "業務自動化ソフトウェア",
        desc: "業務フロー・顧客対応・マーケティングを自動化。時間を節約し、ミスを削減し、ユーザー体験を向上させます。",
      },
      s6: {
        badge: "06 — マネジメント",
        title: "管理ソフト",
        desc: "データ・チーム・業績を一つのプラットフォームで一元管理。直感的なダッシュボードとリアルタイムレポートを提供。",
      },
      strengthBadge: "/// Senzu Baseを選ぶ理由",
      strengthH2: "コア",
      strengthH2Span: "ストレングス",
      strengths: [
        {
          title: "CXベースのデザイン",
          desc: "すべての決定は実際の顧客体験とインサイトから生まれます。",
        },
        {
          title: "サステナブルマーケティング",
          desc: "広告予算に依存しない長期的な成長を構築します。",
        },
        {
          title: "業界エキスパート",
          desc: "業界ごとに特化したチーム、幅より深さを重視します。",
        },
      ],
    },
    news: {
      badge: "/// 情報＆採用",
      h1: "ジャーナル＆",
      h1Span: "キャリア",
      subtitle: "Senzu Baseからの最新ニュース、インサイト、キャリア機会。",
      card1: {
        tag: "プレスリリース",
        title: "新ウェブサイト公開 — Senzu Baseの新たなマイルストーン",
        desc: "Senzu Baseの方向性とコアバリューをより明確に反映したモダンなインターフェースを持つ新ウェブサイトを公開しました。",
        date: "2024年8月",
      },
      card2: {
        tag: "採用情報",
        title: "デジタルプランナー / マーケティングコンサルタント",
        desc: "リモート / フリーランス / 渋谷。Senzu BaseチームのメンバーとなりCXマーケティングの未来を創りましょう。",
        applyText: "応募",
      },
      card3: {
        tag: "インサイトブログ",
        title: "AI時代のCX最適化",
        desc: "AIがブランドと顧客のつながり方をどう変えているかについてのSenzu Baseの視点。",
        comingSoon: "近日公開",
      },
      joinH2: "Senzu Baseチームに",
      joinH2Span: "参加しませんか",
      joinDesc:
        "マーケティング、CXに情熱を持ち、真のインパクトを生み出したい人を探しています。",
      joinBtn1: "Youtrustで求人を見る",
      joinBtn2: "直接連絡",
    },
    contact: {
      badge: "/// お問い合わせ",
      h1: "お問い合わせ＆",
      h1Span: "コラボレーション",
      subtitle:
        "プロジェクトをお聞かせください。Senzu Baseは24営業時間以内に返信します。",
      formTitle: "お問い合わせを送る",
      labels: {
        name: "氏名 *",
        email: "メール *",
        company: "会社 / ブランド",
        budget: "予算",
        service: "ご興味のサービス *",
        message: "内容 *",
      },
      placeholders: {
        name: "山田太郎",
        email: "you@company.com",
        company: "会社名",
        message: "プロジェクト、目標、課題の簡単な説明...",
      },
      budgetOptions: [
        "予算を選択",
        "20万円未満",
        "20万〜80万円",
        "80万〜200万円",
        "200万円以上",
        "要相談",
      ],
      serviceOptions: [
        "サービスを選択",
        "デジタルマーケティングコンサルティング",
        "ブランドクリエイティブ",
        "内製化支援＆グロース",
        "総合戦略コンサルティング",
        "その他 / もっと相談したい",
      ],
      submitIdle: "送信する",
      submitLoading: "送信中...",
      submitSuccess: "送信完了！",
      infoTitle: "連絡先情報",
      hours: "月〜金、09:00〜18:00 JST",
      responseTime: "24営業時間以内に返信",
      hiringBadge: "採用情報",
      hiringTitle: "デジタルプランナー",
      hiringLocation: "リモート / フリーランス / 渋谷",
      hiringApply: "Youtrustで応募 →",
      toastTitle: "送信完了！",
      toastDesc: "24時間以内に返信します",
    },
    team: {
      badge: "/// ファウンダー紹介",
      h1: "私たちの",
      h1Span: "ファウンダーたち",
      subtitle: "Senzu Baseは、共通のビジョンを持つ2人のファウンダーが率いています — 日本とベトナムの卓越性を融合し、真の突破口を創り出す。",
      careerLabel: "経歴",
      achievementLabel: "実績",
      hobbiesLabel: "趣味",
      vn: {
        name: "グエン・フー・タン",
        origin: "🇻🇳 ベトナム",
        company: "Senzu Base",
        role: "CEO",
        bio: [
          "CyberAgent Japan元社員として、日本市場でのデジタルマーケティングとCXの経験を積む。",
          "ベトナム法人Senzu Baseを率い、日本基準をベトナム市場と結びつける架け橋となる。",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — デジタルマーケティング" },
          { period: "2024 ~ 現在", role: "Senzu Base — CEO" },
        ],
        achievement: "Senzu Base 創業1年半で50社を突破",
        hobbies: "旅行 · 読書 · マーケティング戦略",
        quote: "「最大の可能性は、誰もまだ気づいていない場所に眠っている。」",
      },
      jp: {
        name: "平原 匠",
        origin: "🇯🇵 日本",
        company: "株式会社センズ",
        role: "代表取締役 CEO",
        bio: [
          "サイバーエージェント出身。電子書籍・通信・不動産・車・人材・旅行・VoD・結婚・引越しなど幅広い業界のデジタルマーケティングを担当。",
          "「顧客体験至上主義」を掲げ、数字の成果だけでなく、ユーザーインサイトに徹底的に向き合い、顧客体験そのものの改善にこだわる。",
          "コンサルティング支援と並行して、自社プロダクトも開発中（2026年度リリース予定）。",
        ],
        career: [
          { period: "2020 ~ 2024", role: "サイバーエージェント — 営業・マーケティングコンサル" },
          { period: "2024 ~ 現在", role: "株式会社センズ — 代表取締役" },
        ],
        achievement: "創業1年半で取引社数50社を突破",
        hobbies: "旅行 · 読書 · カラオケ · ラーメン · 地元高知県に友人を案内すること",
        quote: "「人生の起点を創る — すべての始まりを、ともに。」",
      },
      visionBadge: "/// 共通のビジョン",
      visionH2: "二つの文化、",
      visionH2Span: "一つのミッション。",
      visionDesc: "日本の勤勉さと高い基準と、ベトナムのダイナミズムと市場理解の組み合わせが、他のどのエージェンシーにも真似できないユニークな競争優位性を生み出します。",
    },
    footer: {
      tagline:
        "透明性と人間中心テクノロジーを通じて、眠っている可能性を新たな価値に結びつけます。",
    },
  },
};

export default translations;
