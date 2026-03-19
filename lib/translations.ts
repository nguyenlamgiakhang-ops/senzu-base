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
    capabilities: Array<{ title: string; desc: string }>;
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
    s1: { badge: string; title: string; desc: string };
    s2: { badge: string; title: string; desc: string };
    s3: { badge: string; title: string; desc: string };
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
      title: string;
      bio: string[];
      career: Array<{ period: string; role: string }>;
      achievement: string;
      hobbies: string;
      quote: string;
    };
    jp: {
      name: string;
      origin: string;
      title: string;
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
      h1Line1: "Kiến tạo",
      h1Line2: "Bước ngoặt.",
      subtitle:
        "Senzu Base khai phá các tiềm năng ẩn để kiến tạo giá trị mới, dựa trên nền tảng công nghệ minh bạch và lấy con người làm trung tâm.",
      exploreBtn: "Explore Solutions",
      dnaBtn: "Our DNA",
      scrollText: "Scroll",
      projectsLabel: "Dự án thành công",
      coreStrength: "/// Core Strength",
      jpStandard: "Tiêu chuẩn Nhật Bản",
      originBadge: "/// Origin Story",
      originH2Line1: "Born from",
      originH2Line2: "Japan.",
      originDesc:
        "Senzu Base được thành lập bởi cựu nhân viên CyberAgent — tập đoàn công nghệ & truyền thông hàng đầu Nhật Bản. Chúng tôi mang tiêu chuẩn Nhật Bản vào thị trường Đông Nam Á.",
      stats: { founded: "Thành lập", hq: "Trụ sở", standard: "Tiêu chuẩn" },
      statCards: [
        { value: "200+", label: "Dự án thành công" },
        { value: "100%", label: "Minh bạch" },
        { value: "2+", label: "Năm hoạt động" },
        { value: "JP", label: "Tiêu chuẩn Nhật" },
      ],
      capBadge: "/// What We Do",
      capH2: "Our",
      capH2Span: "Capabilities",
      capabilities: [
        {
          title: "Digital Marketing Strategy",
          desc: "Data-driven campaigns across Google, Yahoo!, Meta, TikTok với tư duy CX-first.",
        },
        {
          title: "Brand Creative & CX Design",
          desc: "Xây dựng thương hiệu gắn kết cảm xúc và trải nghiệm khách hàng đột phá.",
        },
        {
          title: "In-house Training & Growth",
          desc: "Chuyển giao năng lực marketing nội bộ để doanh nghiệp tự chủ tăng trưởng.",
        },
      ],
      valuesBadge: "/// Core Values",
      valuesH2: "What We",
      valuesH2Span: "Stand For",
      values: [
        {
          title: "Honesty",
          desc: "Sự thật là nền tảng của mọi mối quan hệ. Chúng tôi luôn minh bạch.",
        },
        {
          title: "Sustainability",
          desc: "Tăng trưởng bền vững, không đánh đổi giá trị dài hạn vì lợi ích ngắn hạn.",
        },
        {
          title: "Transparency",
          desc: "Mọi quyết định đều có cơ sở rõ ràng. Không black box trong marketing.",
        },
      ],
      journalBadge: "/// Latest Updates",
      journalH2: "Journal & News",
      viewAll: "View all",
      newsItems: [
        { tag: "Press Release", title: "Website mới ra mắt", date: "Aug 2024" },
        {
          tag: "We're Hiring",
          title: "Digital Planner / Marketing Consultant",
          date: "Open",
        },
        {
          tag: "Insight Blog",
          title: "Tối ưu CX trong kỷ nguyên AI",
          date: "Coming Soon",
        },
      ],
      ctaBadge: "/// Let's Begin",
      ctaH2: "Ready to create a",
      ctaH2Span: "breakthrough?",
      ctaDesc: "Hãy cùng Senzu Base biến tiềm năng của bạn thành giá trị thực.",
      ctaBtn: "Start Your Project",
    },
    about: {
      badge: "/// Our Identity",
      h1: "DNA &",
      h1Span: "Mission",
      mottoTranslation: "Kiến tạo điểm xuất phát của cuộc đời",
      originCard: {
        label: "Origin",
        title: "CyberAgent Japan Alumni",
        desc: "Senzu Base được thành lập bởi cựu nhân viên CyberAgent — tập đoàn công nghệ và truyền thông hàng đầu Nhật Bản. Chúng tôi mang DNA của sự đổi mới và tiêu chuẩn cao nhất vào từng dự án.",
        founded: "Thành lập",
        hq: "Trụ sở",
      },
      missionCard: {
        label: "Mission",
        title: "Accelerator of Potential",
        desc: 'Kết nối "tiềm năng ngủ quên" với "giá trị mới" — đó là sứ mệnh cốt lõi của Senzu Base. Chúng tôi không chỉ là agency, mà là đối tác tăng tốc tăng trưởng bền vững cho doanh nghiệp.',
        bullets: [
          "CX-first thinking",
          "Data-driven decisions",
          "Long-term partnership",
        ],
      },
      companyCard: {
        label: "Company",
        title: "CÔNG TY TNHH SENZU BASE",
      },
      teamCount: "26 thành viên",
      ceoLabel: "CEO",
      cultureBadge: "/// Culture Code",
      cultureH2: "The",
      cultureH2Span: "4S Culture",
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
      badge: "/// What We Offer",
      h1: "Services &",
      h1Span: "Solutions",
      subtitleMain: "Mọi giải pháp của chúng tôi đều bắt đầu từ một câu hỏi:",
      subtitleEmphasis: " Khách hàng của bạn thực sự cần gì?",
      s1: {
        badge: "01 — Digital Marketing",
        title: "Digital Marketing Consulting",
        desc: "Chiến lược quảng cáo đa kênh dựa trên data và CX-thinking. Chúng tôi giúp bạn tiếp cận đúng người, đúng thời điểm với ngân sách tối ưu nhất.",
      },
      s2: {
        badge: "02 — Brand Creative",
        title: "Brand Creative & CX Design",
        desc: "Xây dựng nhận diện thương hiệu gắn kết cảm xúc với khách hàng. Từ Brand Identity đến từng điểm chạm trải nghiệm.",
      },
      s3: {
        badge: "03 — In-house Training",
        title: "In-house Training & Growth",
        desc: "Chuyển giao năng lực marketing để đội ngũ của bạn tự chủ tăng trưởng. Từ đào tạo marketer đến triển khai DX & Automation.",
      },
      strengthBadge: "/// Why Senzu Base",
      strengthH2: "Core",
      strengthH2Span: "Strengths",
      strengths: [
        {
          title: "CX-based Design",
          desc: "Mọi quyết định đều xuất phát từ trải nghiệm và insight khách hàng thực.",
        },
        {
          title: "Sustainable Marketing",
          desc: "Xây dựng tăng trưởng dài hạn, không phụ thuộc vào ngân sách quảng cáo.",
        },
        {
          title: "Industry Experts",
          desc: "Đội ngũ chuyên sâu theo từng ngành, không dàn trải thiếu chiều sâu.",
        },
      ],
    },
    news: {
      badge: "/// Updates & Careers",
      h1: "Journal &",
      h1Span: "Careers",
      subtitle: "Tin tức, insight và cơ hội nghề nghiệp mới nhất từ Senzu Base.",
      card1: {
        tag: "Press Release",
        title: "Website mới ra mắt — Bước ngoặt mới của Senzu Base",
        desc: "Chúng tôi tự hào ra mắt website mới với giao diện hiện đại, phản ánh rõ hơn định hướng và giá trị cốt lõi của Senzu Base.",
        date: "Aug 2024",
      },
      card2: {
        tag: "We're Hiring",
        title: "Digital Planner / Marketing Consultant",
        desc: "Remote / Freelance / Shibuya. Tham gia đội ngũ Senzu Base và cùng chúng tôi kiến tạo tương lai của CX marketing.",
        applyText: "Apply",
      },
      card3: {
        tag: "Insight Blog",
        title: "Tối ưu CX trong kỷ nguyên AI",
        desc: "Góc nhìn của Senzu Base về cách AI đang thay đổi cách thương hiệu kết nối với khách hàng.",
        comingSoon: "Sắp ra mắt",
      },
      joinH2: "Gia nhập đội ngũ",
      joinH2Span: "Senzu Base",
      joinDesc:
        "Chúng tôi đang tìm kiếm những người đam mê marketing, CX và muốn tạo ra tác động thực sự.",
      joinBtn1: "Xem vị trí trên Youtrust",
      joinBtn2: "Liên hệ trực tiếp",
    },
    contact: {
      badge: "/// Let's Talk",
      h1: "Get In Touch &",
      h1Span: "Collaborate",
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
        company: "Tên công ty của bạn",
        message: "Mô tả ngắn về dự án, mục tiêu và thách thức của bạn...",
      },
      budgetOptions: [
        "Chọn ngân sách",
        "Dưới 5 triệu VND",
        "5 – 20 triệu VND",
        "20 – 50 triệu VND",
        "Trên 50 triệu VND",
        "Thương lượng trực tiếp",
      ],
      serviceOptions: [
        "Chọn dịch vụ",
        "Tư vấn Digital Marketing",
        "Brand Creative",
        "In-house Training & Growth",
        "Tư vấn chiến lược tổng thể",
        "Khác / Muốn trao đổi thêm",
      ],
      submitIdle: "Gửi yêu cầu",
      submitLoading: "Đang gửi...",
      submitSuccess: "Đã gửi thành công!",
      infoTitle: "Thông tin liên hệ",
      hours: "Mon–Fri, 09:00–18:00 JST",
      responseTime: "Phản hồi trong 24h làm việc",
      hiringBadge: "We're Hiring",
      hiringTitle: "Digital Planner",
      hiringLocation: "Remote / Freelance / Shibuya",
      hiringApply: "Ứng tuyển trên Youtrust →",
      toastTitle: "Gửi thành công!",
      toastDesc: "We'll respond within 24h",
    },
    team: {
      badge: "/// Người Sáng Lập",
      h1: "Gặp gỡ",
      h1Span: "Founders",
      subtitle: "Senzu Base được dẫn dắt bởi hai người sáng lập với tầm nhìn chung — kết nối tinh hoa Nhật Bản và năng lượng Đông Nam Á để tạo ra đột phá thực sự.",
      careerLabel: "Kinh nghiệm",
      achievementLabel: "Thành tích nổi bật",
      hobbiesLabel: "Sở thích",
      vn: {
        name: "Nguyễn Hữu Thắng",
        origin: "🇻🇳 Việt Nam",
        title: "Co-founder & CEO / Senzu Base",
        bio: [
          "Cựu nhân viên CyberAgent Nhật Bản, tích lũy kinh nghiệm trong lĩnh vực digital marketing và CX tại thị trường Nhật.",
          "Kiến tạo chiến lược tăng trưởng bền vững cho doanh nghiệp, kết nối tiêu chuẩn Nhật Bản với thị trường Đông Nam Á.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — Digital Marketing" },
          { period: "2024 ~ nay", role: "Senzu Base — Co-founder & CEO" },
        ],
        achievement: "Đồng kiến tạo Senzu Base — đạt 50+ khách hàng chỉ sau 1,5 năm",
        hobbies: "Du lịch · Đọc sách · Marketing Strategy",
        quote: "\"Tiềm năng lớn nhất thường nằm ở nơi chưa ai nhìn thấy.\"",
      },
      jp: {
        name: "平原 匠",
        origin: "🇯🇵 Nhật Bản",
        title: "代表取締役 / 株式会社センズ",
        bio: [
          "CyberAgent xuất thân — tư vấn digital marketing cho các ngành sách điện tử, viễn thông, bất động sản, xe hơi, nhân sự, du lịch, OTT, hôn nhân và chuyển nhà.",
          "Lấy triết lý \"trải nghiệm khách hàng là tối thượng\" làm cốt lõi, tập trung cải thiện toàn bộ hành trình người dùng chứ không chỉ kết quả số liệu.",
          "Đang song song phát triển sản phẩm nội bộ (dự kiến ra mắt năm tài chính 2026) bên cạnh dịch vụ tư vấn.",
        ],
        career: [
          { period: "2020/04 ~ 2024/05", role: "CyberAgent — Sales & Marketing Consultant" },
          { period: "2024/05 ~ nay", role: "株式会社センズ — 代表取締役 (CEO)" },
        ],
        achievement: "Chỉ 1,5 năm sau khi thành lập — vượt mốc 50 khách hàng",
        hobbies: "Du lịch · Đọc sách · Karaoke · Ramen · Dẫn bạn bè khám phá Kochi",
        quote: "「人生の起点を創る」— Kiến tạo điểm xuất phát của cuộc đời.",
      },
      visionBadge: "/// Tầm Nhìn Chung",
      visionH2: "Hai nền văn hóa,",
      visionH2Span: "một sứ mệnh.",
      visionDesc: "Sự kết hợp giữa sự cần mẫn và tiêu chuẩn cao của Nhật Bản với sự năng động và hiểu biết thị trường Đông Nam Á tạo ra lợi thế cạnh tranh độc đáo — không ai khác có được.",
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
      capBadge: "/// What We Do",
      capH2: "Our",
      capH2Span: "Capabilities",
      capabilities: [
        {
          title: "Digital Marketing Strategy",
          desc: "Data-driven campaigns across Google, Yahoo!, Meta, TikTok with a CX-first mindset.",
        },
        {
          title: "Brand Creative & CX Design",
          desc: "Building brands that forge emotional connections and breakthrough customer experiences.",
        },
        {
          title: "In-house Training & Growth",
          desc: "Transferring in-house marketing capabilities so your team can grow autonomously.",
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
      mottoTranslation: "Creating the Starting Point of Life",
      originCard: {
        label: "Origin",
        title: "CyberAgent Japan Alumni",
        desc: "Senzu Base was founded by former CyberAgent employees — Japan's leading technology and media conglomerate. We bring the DNA of innovation and the highest standards to every project.",
        founded: "Founded",
        hq: "Headquarters",
      },
      missionCard: {
        label: "Mission",
        title: "Accelerator of Potential",
        desc: "Connecting 'dormant potential' with 'new value' — that is Senzu Base's core mission. We are not just an agency, but a sustainable growth acceleration partner for businesses.",
        bullets: [
          "CX-first thinking",
          "Data-driven decisions",
          "Long-term partnership",
        ],
      },
      companyCard: {
        label: "Company",
        title: "CÔNG TY TNHH SENZU BASE",
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
        "Negotiate directly",
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
      subtitle: "Senzu Base is led by two founders sharing a single vision — bridging Japanese excellence and Southeast Asian energy to create real breakthroughs.",
      careerLabel: "Career",
      achievementLabel: "Key Achievement",
      hobbiesLabel: "Hobbies",
      vn: {
        name: "Nguyen Huu Thang",
        origin: "🇻🇳 Vietnam",
        title: "Co-founder & CEO / Senzu Base",
        bio: [
          "Former CyberAgent Japan employee with experience in digital marketing and CX in the Japanese market.",
          "Architect of sustainable growth strategies, connecting Japanese standards with the Southeast Asian market.",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — Digital Marketing" },
          { period: "2024 ~ Present", role: "Senzu Base — Co-founder & CEO" },
        ],
        achievement: "Co-built Senzu Base — surpassing 50 clients in just 1.5 years",
        hobbies: "Travel · Reading · Marketing Strategy",
        quote: "\"The greatest potential often lies where no one has looked yet.\"",
      },
      jp: {
        name: "Hirahara Takumi",
        origin: "🇯🇵 Japan",
        title: "Representative Director / Senzu Inc.",
        bio: [
          "CyberAgent alumni — digital marketing consultant across e-books, telecom, real estate, automotive, HR, travel, OTT, wedding, and moving industries.",
          "Driven by a 'customer experience supremacy' philosophy — committed to improving the full user journey, not just metrics.",
          "Simultaneously developing an in-house product (expected release FY2026) alongside consulting services.",
        ],
        career: [
          { period: "Apr 2020 ~ May 2024", role: "CyberAgent — Sales & Marketing Consultant" },
          { period: "May 2024 ~ Present", role: "Senzu Inc. — Representative Director (CEO)" },
        ],
        achievement: "Just 1.5 years after founding — surpassed 50 client companies",
        hobbies: "Travel · Reading · Karaoke · Ramen · Exploring Kochi with friends",
        quote: "「人生の起点を創る」— Creating starting points of life.",
      },
      visionBadge: "/// Shared Vision",
      visionH2: "Two cultures,",
      visionH2Span: "one mission.",
      visionDesc: "The combination of Japan's diligence and high standards with Southeast Asia's dynamism and market understanding creates a unique competitive advantage — one that no other agency can replicate.",
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
        "Senzu Baseは透明性と人間中心テクノロジーを通じて、眠れる可能性を新たな価値に結びつけます。",
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
        { value: "2+", label: "活動年数" },
        { value: "JP", label: "日本基準" },
      ],
      capBadge: "/// 事業内容",
      capH2: "私たちの",
      capH2Span: "ケイパビリティ",
      capabilities: [
        {
          title: "デジタルマーケティング戦略",
          desc: "Google、Yahoo!、Meta、TikTokにわたるCXファーストのデータ駆動型キャンペーン。",
        },
        {
          title: "ブランドクリエイティブ＆CXデザイン",
          desc: "感情的なつながりと革新的なCXを生み出すブランド構築。",
        },
        {
          title: "インハウストレーニング＆成長",
          desc: "チームが自律的に成長できるよう、インハウスマーケティング能力を移転します。",
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
        title: "CÔNG TY TNHH SENZU BASE",
      },
      teamCount: "26名のメンバー",
      ceoLabel: "CEO",
      cultureBadge: "/// カルチャーコード",
      cultureH2: "ザ・",
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
      subtitleMain:
        "私たちのすべてのソリューションは一つの質問から始まります：",
      subtitleEmphasis: " あなたの顧客が本当に必要としているものは何ですか？",
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
        badge: "03 — インハウストレーニング",
        title: "インハウストレーニング＆成長",
        desc: "チームが自律的に成長できるようマーケティング能力を移転します。マーケターのトレーニングからDX＆オートメーションの実装まで。",
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
        "直接交渉",
      ],
      serviceOptions: [
        "サービスを選択",
        "デジタルマーケティングコンサルティング",
        "ブランドクリエイティブ",
        "インハウストレーニング＆成長",
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
      h1: "出会う",
      h1Span: "ファウンダーたち",
      subtitle: "Senzu Baseは、共通のビジョンを持つ2人のファウンダーが率いています — 日本の卓越性と東南アジアのエネルギーを融合し、真の突破口を創り出す。",
      careerLabel: "経歴",
      achievementLabel: "実績",
      hobbiesLabel: "趣味",
      vn: {
        name: "グエン・フー・タン",
        origin: "🇻🇳 ベトナム",
        title: "Co-founder & CEO / Senzu Base",
        bio: [
          "CyberAgent Japan元社員として、日本市場でのデジタルマーケティングとCXの経験を積む。",
          "持続的な成長戦略を設計し、日本基準を東南アジア市場と結びつける架け橋となる。",
        ],
        career: [
          { period: "2020 ~ 2024", role: "CyberAgent Japan — デジタルマーケティング" },
          { period: "2024 ~ 現在", role: "Senzu Base — Co-founder & CEO" },
        ],
        achievement: "Senzu Baseを共同創業 — 創業1年半で50社を突破",
        hobbies: "旅行 · 読書 · マーケティング戦略",
        quote: "「最大の可能性は、誰もまだ気づいていない場所に眠っている。」",
      },
      jp: {
        name: "平原 匠",
        origin: "🇯🇵 日本",
        title: "代表取締役 / 株式会社センズ",
        bio: [
          "サイバーエージェント出身。電子書籍・通信・不動産・車・人材・旅行・VoD・結婚・引越しなど幅広い業界のデジタルマーケティングを担当。",
          "「顧客体験至上主義」を掲げ、数字の成果だけでなく、ユーザーインサイトに徹底的に向き合い、顧客体験そのものの改善にこだわる。",
          "コンサルティング支援と並行して、自社プロダクトも開発中（2026年度リリース予定）。",
        ],
        career: [
          { period: "2020/04 ~ 2024/05", role: "サイバーエージェント — 営業・マーケティングコンサル" },
          { period: "2024/05 ~ 現在", role: "株式会社センズ — 代表取締役" },
        ],
        achievement: "創業1年半で取引社数50社を突破",
        hobbies: "旅行 · 読書 · カラオケ · ラーメン · 地元高知県に友人を案内すること",
        quote: "「人生の起点を創る — すべての始まりを、ともに。」",
      },
      visionBadge: "/// 共通のビジョン",
      visionH2: "二つの文化、",
      visionH2Span: "一つのミッション。",
      visionDesc: "日本の勤勉さと高い基準と、東南アジアのダイナミズムと市場理解の組み合わせが、他のどのエージェンシーにも真似できないユニークな競争優位性を生み出します。",
    },
    footer: {
      tagline:
        "透明性と人間中心テクノロジーを通じて、眠れる可能性を新たな価値に結びつけます。",
    },
  },
};

export default translations;
