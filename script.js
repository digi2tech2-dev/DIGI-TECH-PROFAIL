const body = document.body;
const html = document.documentElement;
const loader = document.getElementById("page-loader");
const header = document.querySelector(".site-header");
const sidebar = document.getElementById("sidebar");
const sidebarBackdrop = document.getElementById("sidebar-backdrop");
const sidebarToggle = document.getElementById("sidebar-toggle");
const sidebarClose = document.getElementById("sidebar-close");
const themeToggle = document.getElementById("theme-toggle");
const themeLabel = document.getElementById("theme-label");
const themeIcon = document.getElementById("theme-icon");
const languageToggle = document.getElementById("language-toggle");
const languageLabel = document.getElementById("language-label");
const sidebarThemeToggles = Array.from(document.querySelectorAll("[data-sidebar-theme-toggle]"));
const sidebarLanguageToggles = Array.from(document.querySelectorAll("[data-sidebar-language-toggle]"));
const sidebarThemeLabels = Array.from(document.querySelectorAll("[data-sidebar-theme-label]"));
const sidebarLanguageLabels = Array.from(document.querySelectorAll("[data-sidebar-language-label]"));
const sidebarThemeIcons = sidebarThemeToggles.map((button) => button.querySelector(".sidebar-quick-icon"));
const allNavLinks = Array.from(document.querySelectorAll("[data-nav-link]"));
const pageNavLinks = Array.from(document.querySelectorAll("[data-page-link]"));
const metaThemeColor = document.querySelector('meta[name="theme-color"]');
const metaDescription = document.querySelector('meta[name="description"]');

const translations = {
  en: {
    "meta.title": "DIGI TECH | Premium Digital Product Studio",
    "meta.description": "DIGI TECH creates premium SaaS-grade websites, applications, and secure digital systems with modern product polish.",
    "meta.title.home": "DIGI TECH | Software Solutions Company in Egypt",
    "meta.description.home": "DIGI TECH is a registered Egyptian software company building websites, applications, and dependable digital systems.",
    "meta.title.services": "DIGI TECH | Services",
    "meta.description.services": "Explore DIGI TECH services across web development, e-commerce, performance optimization, and UI/UX design.",
    "meta.title.team": "DIGI TECH | Meet Our Team",
    "meta.description.team": "Meet the DIGI TECH team across frontend, backend, and cyber security.",
    "meta.title.portfolio": "DIGI TECH | Our Work",
    "meta.description.portfolio": "Browse DIGI TECH work across digital stores, apps, and modern web products.",
    "loader.text": "Loading DIGI TECH",
    "brand.subtitle": "Software Company",
    "nav.home": "Home",
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.contact": "Contact",
    "nav.startProject": "Start Project",
    "nav.team": "Team",
    "nav.portfolio": "Our Work",
    "sidebar.openAria": "Open menu",
    "sidebar.closeAria": "Close menu",
    "sidebar.panelEyebrow": "Need a faster launch?",
    "sidebar.panelTitle": "Let's shape your next digital product with premium execution.",
    "sidebar.panelText": "DIGI TECH combines frontend quality, backend reliability, and cyber security thinking in one delivery flow.",
    "sidebar.panelButton": "Chat on WhatsApp",
    "sidebar.panelButtonFacebook": "Chat on Facebook",
    "hero.eyebrow": "Technology Partner for Business",
    "hero.title": "Reliable Software Solutions Built for Growth",
    "hero.text": "We design and develop professional websites, applications, and digital systems for ambitious businesses.",
    "hero.companyRegistered": "Registered company with a commercial registry",
    "hero.companyLocation": "Head office: Arab Republic of Egypt",
    "hero.primaryButton": "Start Your Project",
    "hero.secondaryButton": "View Our Work",
    "hero.teamButton": "Team",
    "hero.metricOneValue": "Frontend Precision",
    "hero.metricOneText": "Motion-rich interfaces built to feel premium on every screen.",
    "hero.metricTwoValue": "Backend Reliability",
    "hero.metricTwoText": "Scalable architecture, clean APIs, and dependable delivery flow.",
    "hero.metricThreeValue": "Security Mindset",
    "hero.metricThreeText": "Systems shaped with cyber security awareness from day one.",
    "hero.visualStatus": "Live Product Flow",
    "hero.visualBadge": "Launch-ready design system",
    "hero.visualCardOneLabel": "Product velocity",
    "hero.visualCardTwoLabel": "User experience",
    "hero.visualCardTwoValue": "Fluid",
    "hero.visualCardThreeLabel": "Security layer",
    "hero.noteOneLabel": "UI Systems",
    "hero.noteOneText": "Structured, scalable interfaces",
    "hero.noteTwoLabel": "Secure Delivery",
    "hero.noteTwoText": "Protection built into the workflow",
    "services.eyebrow": "Services",
    "services.title": "Services",
    "services.text": "Premium web builds with modern UX and performance-first engineering.",
    "services.cardOneTag": "Web Development",
    "services.cardOneTitle": "Web Development",
    "services.cardOneText": "Fast, responsive websites built with clean structure and premium UI polish.",
    "services.cardOnePointOne": "Modern UI",
    "services.cardOnePointTwo": "Performance-first",
    "services.cardOnePointThree": "Secure by design",
    "services.cardTwoTitle": "E-commerce Stores",
    "services.cardTwoText": "Conversion-focused stores with clear flows, trust-building UI, and smooth checkout.",
    "services.cardThreeTitle": "Performance Optimization",
    "services.cardThreeText": "Speed, Core Web Vitals, and clean delivery to keep users engaged and ranking strong.",
    "services.cardFourTitle": "UI/UX Design",
    "services.cardFourText": "Clean layouts, strong hierarchy, and a premium feel that increases conversion.",
    "services.pageEyebrow": "Service lineup",
    "services.pageTitle": "What we build to help brands launch with confidence.",
    "services.pageText": "Explore the services DIGI TECH offers across websites, stores, product UX, and performance-focused delivery.",
    "services.pagePrimaryButton": "Start on WhatsApp",
    "services.pageSecondaryButton": "Back to Home",
      "why.eyebrow": "Why Choose Us",
      "why.title": "Why Choose Us",
      "why.text": "A clean delivery flow focused on speed, quality, and long-term support.",
      "why.oneTitle": "Fast delivery",
      "why.oneText": "Launch-ready builds with clear milestones.",
      "why.twoTitle": "Professional design",
      "why.twoText": "Premium UI/UX that improves trust and conversion.",
      "why.threeTitle": "Ongoing support",
      "why.threeText": "We stay with you for updates, fixes, and growth.",
      "why.fourTitle": "Competitive pricing",
      "why.fourText": "High-end outcomes with smart, fair costs.",

    "team.eyebrow": "Our Team",
    "team.title": "Our Team",
    "team.subtitle": "A skilled team working with one spirit to build the best technical solutions.",
    "team.systemFrontendTitle": "Frontend Team",
    "team.systemFrontendText": "Interfaces with premium motion, clarity, and responsive precision.",
    "team.systemBackendTitle": "Backend Team",
    "team.systemBackendText": "Reliable APIs and structured systems that keep products stable as they grow.",
    "team.systemSecurityTitle": "Cyber Security",
    "team.systemSecurityText": "A protection-first mindset that strengthens delivery and long-term trust.",
    "team.filterAll": "All",
    "team.filterFrontend": "Frontend",
    "team.filterBackend": "Backend",
    "team.filterSecurity": "Security",
    "team.cardFrontendCategory": "Frontend Team",
    "team.cardSecurityCategory": "Cyber Security",
    "team.cardBackendCategory": "Backend Team",
    "team.ahmedRole": "Frontend Developer",
    "team.ahmedText": "Builds polished user interfaces with responsive behavior, strong interaction quality, and modern visual rhythm.",
    "team.kareemRole": "Cyber Security Specialist",
    "team.kareemText": "Strengthens products with a proactive security approach focused on protection, trust, and resilient operations.",
    "team.bahaaRole": "Backend Developer",
    "team.bahaaText": "Creates dependable backend systems, clean service layers, and scalable logic for long-term product growth.",
    "team.pageEyebrow": "Meet the team",
    "team.pageTitle": "The people shaping DIGI TECH products.",
    "team.pageText": "A focused crew across frontend, backend, and cyber security working together to ship reliable digital experiences.",
    "team.pagePrimaryButton": "Start on WhatsApp",
    "team.pageSecondaryButton": "Back to Home",
    "portfolio.eyebrow": "Our Work",
    "portfolio.title": "Our Work",
    "portfolio.subtitle": "Selected digital products delivered with a premium, conversion-focused experience.",
    "portfolio.pageEyebrow": "Work showcase",
    "portfolio.pageTitle": "Selected launches built with product polish and real business focus.",
    "portfolio.pageText": "A look at some of the digital products we shipped with clean execution, modern experience, and launch-ready detail.",
    "portfolio.pagePrimaryButton": "Start on WhatsApp",
    "portfolio.pageSecondaryButton": "Back to Home",
    "portfolio.overlayOne": "E-commerce experience",
    "portfolio.overlayTwo": "Web applications and services",
    "portfolio.overlayThree": "Digital services marketplace",
    "portfolio.overlayFour": "Digital products and services store",
    "portfolio.liveLabel": "Live",
    "portfolio.projectOneText": "E-commerce platform for digital services.",
    "portfolio.projectTwoText": "Modern web store for applications and services.",
    "portfolio.projectThreeText": "Digital marketplace for games, applications, services, and creative design.",
    "portfolio.projectFourText": "Modern digital store for products, applications, and online services.",
    "portfolio.visitButton": "Visit Website",
    "contact.eyebrow": "Contact",
    "contact.title": "Let's build a digital product that looks premium and performs with confidence.",
    "contact.text": "Reach DIGI TECH directly on WhatsApp or send your project details through the form. We'll help shape the right next step.",
    "contact.pillThree": "Web, backend, and security",
    "contact.messageLabel": "Message",
    "contact.messagePlaceholder": "Tell us about your project",
    "contact.submitButton": "Send via WhatsApp",
    "contact.formNote": "Submitting the form opens WhatsApp with your message drafted automatically.",
    "contact.whatsappAria": "Chat with DIGI TECH on WhatsApp",
    "footer.copy": "DIGI TECH creates premium digital experiences with product polish, technical care, and secure execution.",
    "controls.languageAria": "Switch to Arabic",
    "controls.themeLight": "Light",
    "controls.themeDark": "Dark",
    "controls.themeAriaLight": "Switch to light mode",
    "controls.themeAriaDark": "Switch to dark mode",
    "form.required": "Please write your message before sending.",
    "form.success": "WhatsApp opened with your drafted message.",
    "form.whatsappIntro": "Hello DIGI TECH,",
    "form.whatsappMessage": "Message"
  },
  ar: {
    "meta.title": "DIGI TECH | استوديو منتجات رقمية احترافي",
    "meta.description": "تقدّم DIGI TECH مواقع وتطبيقات وأنظمة رقمية احترافية بطابع SaaS حديث وجودة تنفيذ عالية.",
    "meta.title.home": "DIGI TECH | شركة حلول برمجية في مصر",
    "meta.description.home": "DIGI TECH شركة حلول برمجية مصرية مسجلة، تطور المواقع والتطبيقات والأنظمة الرقمية للشركات.",
    "meta.title.services": "DIGI TECH | الخدمات",
    "meta.description.services": "استعرض خدمات DIGI TECH في تطوير المواقع والمتاجر وتحسين الأداء وتصميم واجهات الاستخدام.",
    "meta.title.team": "DIGI TECH | فريق العمل",
    "meta.description.team": "تعرّف على فريق DIGI TECH في الواجهة والبنية الخلفية والأمن السيبراني.",
    "meta.title.portfolio": "DIGI TECH | أعمالنا",
    "meta.description.portfolio": "استعرض أعمال DIGI TECH في المتاجر الرقمية وتطبيقات الويب والمنتجات الحديثة.",
    "loader.text": "جاري تحميل DIGI TECH",
    "brand.subtitle": "شركة برمجيات",
    "nav.home": "الرئيسية",
    "nav.services": "الخدمات",
    "nav.work": "أعمالنا",
    "nav.contact": "التواصل",
    "nav.startProject": "ابدأ مشروعك",
    "nav.team": "الفريق",
    "nav.portfolio": "أعمالنا",
    "sidebar.openAria": "فتح القائمة",
    "sidebar.closeAria": "إغلاق القائمة",
    "sidebar.panelEyebrow": "تحتاج إطلاقًا أسرع؟",
    "sidebar.panelTitle": "لنصنع منتجك الرقمي القادم.",
    "sidebar.panelText": "واجهة قوية + خلفية موثوقة + فكر أمني.",
    "sidebar.panelButton": "تواصل عبر واتساب",
    "sidebar.panelButtonFacebook": "تواصل فيسبوك",
    "hero.eyebrow": "شريكك التقني في نمو الأعمال",
    "hero.title": "حلول برمجية موثوقة تدعم نمو شركتك",
    "hero.text": "نصمم ونطوّر مواقع وتطبيقات وأنظمة رقمية احترافية للشركات والمؤسسات.",
    "hero.companyRegistered": "شركة مسجلة ولها سجل تجاري",
    "hero.companyLocation": "المقر الرئيسي: جمهورية مصر العربية",
    "hero.primaryButton": "ابدأ مشروعك",
    "hero.secondaryButton": "شاهد أعمالنا",
    "hero.teamButton": "فريق العمل",
    "hero.metricOneValue": "دقة الواجهة",
    "hero.metricOneText": "واجهات غنية بالحركة ومصممة لتظهر بشكل احترافي على كل شاشة.",
    "hero.metricTwoValue": "اعتمادية الخلفية",
    "hero.metricTwoText": "بنية قابلة للتوسع وواجهات برمجية واضحة ومسار تنفيذ موثوق.",
    "hero.metricThreeValue": "فكر أمني",
    "hero.metricThreeText": "أنظمة يتم تشكيلها بوعي أمني من أول خطوة.",
    "hero.visualStatus": "تدفق منتج مباشر",
    "hero.visualBadge": "نظام تصميم جاهز للإطلاق",
    "hero.visualCardOneLabel": "سرعة الإنجاز",
    "hero.visualCardTwoLabel": "تجربة المستخدم",
    "hero.visualCardTwoValue": "سلسة",
    "hero.visualCardThreeLabel": "طبقة الحماية",
    "hero.noteOneLabel": "أنظمة الواجهة",
    "hero.noteOneText": "واجهات منظمة وقابلة للتوسع",
    "hero.noteTwoLabel": "تسليم آمن",
    "hero.noteTwoText": "الحماية جزء من سير العمل",
    "services.eyebrow": "الخدمات",
    "services.title": "الخدمات",
    "services.text": "تنفيذ احترافي بمظهر حديث وأداء عالي.",
    "services.cardOneTag": "تطوير مواقع",
    "services.cardOneTitle": "تطوير مواقع",
    "services.cardOneText": "مواقع سريعة ومتجاوبة ببنية نظيفة وتجربة احترافية.",
    "services.cardOnePointOne": "واجهة حديثة",
    "services.cardOnePointTwo": "أداء عالي",
    "services.cardOnePointThree": "أمان من البداية",
    "services.cardTwoTitle": "متاجر إلكترونية",
    "services.cardTwoText": "متاجر تركّز على التحويل مع تجربة شراء سلسة وثقة أعلى.",
    "services.cardThreeTitle": "تحسين الأداء",
    "services.cardThreeText": "سرعة وتجربة أفضل + نتائج أقوى في محركات البحث.",
    "services.cardFourTitle": "تصميم UI/UX",
    "services.cardFourText": "تصميم نظيف وترتيب واضح يرفع التحويل ويزيد الثقة.",
    "services.pageEyebrow": "خدماتنا",
    "services.pageTitle": "الخدمات التي نبني بها حضورًا رقميًا قويًا وواثقًا.",
    "services.pageText": "استعرض خدمات DIGI TECH في المواقع والمتاجر وتجربة المنتج وتحسين الأداء بجودة تنفيذ احترافية.",
    "services.pagePrimaryButton": "ابدأ عبر واتساب",
    "services.pageSecondaryButton": "العودة للرئيسية",

    "why.eyebrow": "لماذا نحن",
    "why.title": "لماذا تختارنا",
    "why.text": "نظام تنفيذ واضح يركز على السرعة والجودة والدعم.",
    "why.oneTitle": "سرعة في التنفيذ",
    "why.oneText": "تسليم بمراحل واضحة ونتيجة جاهزة للإطلاق.",
    "why.twoTitle": "تصميم احترافي",
    "why.twoText": "UI/UX قوي يرفع الثقة والتحويل.",
    "why.threeTitle": "دعم مستمر",
    "why.threeText": "متابعة وتحديثات وإصلاحات عند الحاجة.",
    "why.fourTitle": "سعر منافس",
    "why.fourText": "قيمة عالية مقابل تكلفة عادلة.",

    "team.eyebrow": "فريق العمل",
    "team.title": "فريق العمل",
    "team.subtitle": "فريق محترف يعمل بروح واحدة لبناء أفضل الحلول التقنية",
    "team.systemFrontendTitle": "فريق الواجهة",
    "team.systemFrontendText": "واجهات بحركة احترافية ووضوح بصري واستجابة دقيقة لكل المقاسات.",
    "team.systemBackendTitle": "فريق البنية الخلفية",
    "team.systemBackendText": "واجهات برمجية موثوقة وأنظمة منظمة تحافظ على استقرار المنتج مع النمو.",
    "team.systemSecurityTitle": "الأمن السيبراني",
    "team.systemSecurityText": "عقلية حماية ترفع جودة التسليم وتعزز الثقة على المدى الطويل.",
    "team.filterAll": "الكل",
    "team.filterFrontend": "الواجهة",
    "team.filterBackend": "الخلفية",
    "team.filterSecurity": "الأمن",
    "team.cardFrontendCategory": "فريق الواجهة",
    "team.cardSecurityCategory": "الأمن السيبراني",
    "team.cardBackendCategory": "فريق الخلفية",
    "team.ahmedRole": "مطور واجهات أمامية",
    "team.ahmedText": "يبني واجهات مصقولة بسلوك متجاوب وجودة تفاعل عالية وإيقاع بصري حديث.",
    "team.kareemRole": "أخصائي أمن سيبراني",
    "team.kareemText": "يعزز المنتجات بمنهج أمني استباقي يركز على الحماية والثقة واستمرارية التشغيل.",
    "team.bahaaRole": "مطور خلفية",
    "team.bahaaText": "ينشئ أنظمة خلفية موثوقة وطبقات خدمات نظيفة ومنطقًا قابلًا للتوسع لنمو المنتج.",
    "team.pageEyebrow": "تعرّف على الفريق",
    "team.pageTitle": "الأشخاص الذين يصنعون منتجات DIGI TECH.",
    "team.pageText": "واجهة، خلفية، وأمن — فريق واحد.",
    "team.pagePrimaryButton": "ابدأ عبر واتساب",
    "team.pageSecondaryButton": "العودة للرئيسية",
    "portfolio.eyebrow": "أعمالنا",
    "portfolio.title": "أعمالنا",
    "portfolio.subtitle": "منتجات رقمية مختارة نُفذت بتجربة احترافية تركّز على الجودة والتحويل.",
    "portfolio.pageEyebrow": "عرض الأعمال",
    "portfolio.pageTitle": "نماذج من المشاريع التي أطلقناها بجودة منتج واهتمام حقيقي بالتفاصيل.",
    "portfolio.pageText": "نماذج من أعمالنا.",
    "portfolio.pagePrimaryButton": "ابدأ عبر واتساب",
    "portfolio.pageSecondaryButton": "العودة للرئيسية",
    "portfolio.overlayOne": "تجربة تجارة إلكترونية",
    "portfolio.overlayTwo": "تطبيقات وخدمات ويب",
    "portfolio.overlayThree": "متجر متكامل للخدمات الرقمية",
    "portfolio.overlayFour": "متجر للمنتجات والخدمات الرقمية",
    "portfolio.liveLabel": "مباشر",
    "portfolio.projectOneText": "منصة تجارة إلكترونية للخدمات الرقمية.",
    "portfolio.projectTwoText": "متجر ويب حديث للتطبيقات والخدمات.",
    "portfolio.projectThreeText": "متجر رقمي للألعاب والتطبيقات والخدمات والتصميمات الإبداعية.",
    "portfolio.projectFourText": "متجر رقمي حديث للمنتجات والتطبيقات والخدمات الإلكترونية.",
    "portfolio.visitButton": "زيارة الموقع",
    "contact.eyebrow": "التواصل",
    "contact.title": "لنصنع منتجًا رقميًا يبدو احترافيًا ويعمل بثقة.",
    "contact.text": "تواصل عبر واتساب أو ارسل تفاصيل مشروعك.",
    "contact.pillThree": "ويب وخلفية وأمن",
    "contact.messageLabel": "الرسالة",
    "contact.messagePlaceholder": "حدثنا عن مشروعك",
    "contact.submitButton": "إرسال عبر واتساب",
    "contact.formNote": "عند الإرسال سيتم فتح واتساب مع تجهيز الرسالة تلقائيًا.",
    "contact.whatsappAria": "التواصل مع DIGI TECH عبر واتساب",
    "footer.copy": "تقدّم DIGI TECH تجارب رقمية احترافية بجودة منتج عالية وعناية تقنية وتنفيذ آمن.",
    "controls.languageAria": "التبديل إلى الإنجليزية",
    "controls.themeLight": "فاتح",
    "controls.themeDark": "داكن",
    "controls.themeAriaLight": "التبديل إلى الوضع الفاتح",
    "controls.themeAriaDark": "التبديل إلى الوضع الداكن",
    "form.required": "يرجى كتابة رسالتك قبل الإرسال.",
    "form.success": "تم فتح واتساب مع تجهيز رسالتك.",
    "form.whatsappIntro": "مرحبًا DIGI TECH،",
    "form.whatsappMessage": "الرسالة"
  }
};

const themeIcons = {
  light: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 4.5V2m0 20v-2.5m5.3-12.8 1.8-1.8M4.9 19.1l1.8-1.8M19.5 12H22M2 12h2.5m12.8 5.3 1.8 1.8M4.9 4.9l1.8 1.8M12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Z" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1.8"></path>
    </svg>
  `,
  dark: `
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 15.5A8.5 8.5 0 1 1 11 4a7 7 0 1 0 9 11.5Z" fill="none" stroke="currentColor" stroke-linejoin="round" stroke-width="1.8"></path>
    </svg>
  `
};

const storage = {
  get(key) {
    try {
      return window.localStorage.getItem(key);
    } catch (error) {
      return null;
    }
  },
  set(key, value) {
    try {
      window.localStorage.setItem(key, value);
    } catch (error) {
      return null;
    }
    return null;
  }
};

let currentTheme = storage.get("digitech-theme-v2") || body.dataset.theme || "light";
let currentLanguage = storage.get("digitech-language") || body.dataset.language || "ar";

if (loader) {
  body.classList.add("loader-active");
}

const translate = (key) => translations[currentLanguage][key] || translations.en[key] || key;

const setFeedback = (message, type = "") => {
  const feedback = document.getElementById("form-feedback");
  if (!feedback) {
    return;
  }

  feedback.textContent = message;
  feedback.classList.remove("is-success", "is-error");

  if (type) {
    feedback.classList.add(type);
  }
};

const setThemeMetaColor = () => {
  if (!metaThemeColor) {
    return;
  }

  metaThemeColor.setAttribute(
    "content",
    currentTheme === "dark" ? "#11100d" : "#fbf4e3"
  );
};

const applyThemeControl = () => {
  const nextAction = currentTheme === "dark" ? "light" : "dark";
  const actionLabel = translate(
    nextAction === "light" ? "controls.themeLight" : "controls.themeDark"
  );
  themeLabel.textContent = translate(
    nextAction === "light" ? "controls.themeLight" : "controls.themeDark"
  );
  themeToggle.setAttribute(
    "aria-label",
    translate(
      nextAction === "light" ? "controls.themeAriaLight" : "controls.themeAriaDark"
    )
  );
  themeIcon.innerHTML = themeIcons[nextAction];
  sidebarThemeLabels.forEach((label) => {
    label.textContent = actionLabel;
  });
  sidebarThemeIcons.forEach((icon) => {
    if (icon) {
      icon.textContent = nextAction === "light" ? "☀" : "☾";
    }
  });
  sidebarThemeToggles.forEach((button) => {
    button.dataset.currentTheme = currentTheme;
    button.setAttribute("aria-pressed", currentTheme === "dark" ? "true" : "false");
    button.setAttribute(
      "aria-label",
      translate(nextAction === "light" ? "controls.themeAriaLight" : "controls.themeAriaDark")
    );
  });
};

const applyTheme = (theme, persist = true) => {
  currentTheme = theme;
  body.dataset.theme = theme;
  setThemeMetaColor();
  applyThemeControl();

  if (persist) {
    storage.set("digitech-theme-v2", theme);
  }
};

const applyLanguage = (language, persist = true) => {
  currentLanguage = language;
  body.dataset.language = language;
  body.classList.toggle("is-rtl", language === "ar");
  html.lang = language;
  html.dir = language === "ar" ? "rtl" : "ltr";
  const activeTitleKey = body.dataset.titleKey || "meta.title";
  const activeDescriptionKey = body.dataset.descriptionKey || "meta.description";
  document.title = translate(activeTitleKey);

  if (metaDescription) {
    metaDescription.setAttribute("content", translate(activeDescriptionKey));
  }

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translate(key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    element.setAttribute("placeholder", translate(key));
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute("aria-label", translate(key));
  });

  languageLabel.textContent = language === "en" ? "AR" : "EN";
  languageToggle.setAttribute("aria-label", translate("controls.languageAria"));
  sidebarLanguageLabels.forEach((label) => {
    label.textContent = language === "en" ? "AR" : "EN";
  });
  sidebarLanguageToggles.forEach((button) => {
    button.dataset.currentLanguage = language;
    button.setAttribute("aria-pressed", language === "ar" ? "true" : "false");
    button.setAttribute("aria-label", translate("controls.languageAria"));
  });
  setFeedback("");
  applyThemeControl();

  if (persist) {
    storage.set("digitech-language", language);
  }
};

const setActivePageLinks = (page = body.dataset.page || "home") => {
  pageNavLinks.forEach((link) => {
    link.classList.toggle("is-active", link.dataset.pageLink === page);
  });
};

const syncPersistentNavigation = () => {
  const isHomePage = (body.dataset.page || "home") === "home";
  const homeHref = isHomePage ? "#home" : "index.html#home";
  const contactHref = isHomePage ? "#contact" : "index.html#contact";

  document.querySelectorAll(".brand[data-nav-link]").forEach((link) => {
    link.setAttribute("href", homeHref);
  });

  allNavLinks.forEach((link) => {
    if (link.dataset.pageLink === "home") {
      link.setAttribute("href", homeHref);
    } else if (link.dataset.i18n === "nav.contact") {
      link.setAttribute("href", contactHref);
    }
  });
};

const openSidebar = () => {
  sidebar.classList.add("is-open");
  sidebarBackdrop.classList.add("is-visible");
  sidebar.setAttribute("aria-hidden", "false");
  sidebarToggle.setAttribute("aria-expanded", "true");
  body.classList.add("is-sidebar-open");
};

const closeSidebar = () => {
  sidebar.classList.remove("is-open");
  sidebarBackdrop.classList.remove("is-visible");
  sidebar.setAttribute("aria-hidden", "true");
  sidebarToggle.setAttribute("aria-expanded", "false");
  body.classList.remove("is-sidebar-open");
};

const handleHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const setActiveLinks = () => {
  const activeSectionLinks = allNavLinks.filter((link) => {
    const href = link.getAttribute("href") || "";
    return href.startsWith("#");
  });
  const activeSectionIds = [...new Set(activeSectionLinks.map((link) => link.getAttribute("href")).filter(Boolean))];
  const activeSections = activeSectionIds
    .map((id) => document.querySelector(id))
    .filter(Boolean);

  if (!activeSections.length) {
    return;
  }

  const scrollPosition = window.scrollY + 150;

  activeSections.forEach((section) => {
    const top = section.offsetTop;
    const bottom = top + section.offsetHeight;
    const targetId = `#${section.id}`;
    const isActive = scrollPosition >= top && scrollPosition < bottom;

    activeSectionLinks
      .filter((link) => link.getAttribute("href") === targetId)
      .forEach((link) => {
        link.classList.toggle("is-active", isActive);
      });
  });
};

const initReveal = (container = document) => {
  const revealItems = container.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("in-view"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.16,
      rootMargin: "0px 0px -70px 0px"
    }
  );

  revealItems.forEach((item) => observer.observe(item));
};

const applyTeamFilter = (filter, container = document) => {
  const filterButtons = Array.from(container.querySelectorAll(".filter-button"));
  const teamCards = Array.from(container.querySelectorAll(".team-card"));

  filterButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.filter === filter);
  });

  teamCards.forEach((card) => {
    const shouldShow = filter === "all" || card.dataset.category === filter;
    card.classList.toggle("is-hidden", !shouldShow);
  });
};

const initHeroSlider = (container = document) => {
  const slider = container.querySelector("[data-hero-slider]");
  if (!slider) {
    return;
  }

  const slides = Array.from(slider.querySelectorAll("img"));
  if (slides.length <= 1) {
    return;
  }

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  slides.forEach((img, idx) => img.classList.toggle("is-active", idx === 0));
  if (prefersReducedMotion) {
    return;
  }

  let index = 0;
  const intervalId = window.setInterval(() => {
    if (!slider.isConnected) {
      window.clearInterval(intervalId);
      return;
    }
    slides[index]?.classList.remove("is-active");
    index = (index + 1) % slides.length;
    slides[index]?.classList.add("is-active");
  }, 2600);
};

const initProjectSliders = (container = document) => {
  const sliders = Array.from(container.querySelectorAll("[data-project-slider]"));
  if (!sliders.length) {
    return;
  }

  const prefersReducedMotion = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;

  sliders.forEach((slider) => {
    const slides = Array.from(slider.querySelectorAll("img"));
    const dots = Array.from(slider.querySelectorAll("[data-project-slider-dot]"));
    if (!slides.length) {
      return;
    }

    const applyActiveSlide = (index) => {
      slides.forEach((img, idx) => img.classList.toggle("is-active", idx === index));
      dots.forEach((dot, idx) => dot.classList.toggle("is-active", idx === index));
    };

    applyActiveSlide(0);

    if (prefersReducedMotion || slides.length <= 1) {
      return;
    }

    let index = 0;
    const intervalId = window.setInterval(() => {
      if (!slider.isConnected) {
        window.clearInterval(intervalId);
        return;
      }
      index = (index + 1) % slides.length;
      applyActiveSlide(index);
    }, 3200);
  });
};

const prefersReducedMotion = () => window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
const initParticlesBackground = () => {
  if (prefersReducedMotion()) {
    return;
  }

  const canvas = document.getElementById("particles-canvas");
  if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
    return;
  }

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    return;
  }

  body.classList.add("has-canvas-particles");

  const palette = [
    { rgb: "255, 224, 138", a: 0.18 },
    { rgb: "244, 183, 47", a: 0.14 },
    { rgb: "217, 150, 24", a: 0.12 }
  ];

  const state = {
    w: 0,
    h: 0,
    dpr: 1,
    particles: [],
    running: true
  };

  const resize = () => {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    const rect = canvas.getBoundingClientRect();
    state.w = Math.max(1, Math.floor(rect.width));
    state.h = Math.max(1, Math.floor(rect.height));
    state.dpr = dpr;
    canvas.width = Math.floor(state.w * dpr);
    canvas.height = Math.floor(state.h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    const area = state.w * state.h;
    const count = Math.max(26, Math.min(72, Math.round(area / 22000)));
    if (state.particles.length !== count) {
      state.particles = Array.from({ length: count }, () => {
        const color = palette[Math.floor(Math.random() * palette.length)];
        return {
          x: Math.random() * state.w,
          y: Math.random() * state.h,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          r: 1 + Math.random() * 1.6,
          color
        };
      });
    }
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });

  const maxLinkDist = 110;

  const step = () => {
    if (!state.running) {
      window.requestAnimationFrame(step);
      return;
    }

    ctx.clearRect(0, 0, state.w, state.h);
    ctx.globalCompositeOperation = "lighter";

    for (const p of state.particles) {
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < -20) p.x = state.w + 20;
      if (p.x > state.w + 20) p.x = -20;
      if (p.y < -20) p.y = state.h + 20;
      if (p.y > state.h + 20) p.y = -20;

      ctx.beginPath();
      ctx.fillStyle = `rgba(${p.color.rgb}, ${p.color.a})`;
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < state.particles.length; i += 1) {
      const a = state.particles[i];
      for (let j = i + 1; j < state.particles.length; j += 1) {
        const b = state.particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist > maxLinkDist) continue;
        const alpha = (1 - dist / maxLinkDist) * 0.08;
        ctx.strokeStyle = `rgba(244, 183, 47, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }

    window.requestAnimationFrame(step);
  };

  document.addEventListener("visibilitychange", () => {
    state.running = document.visibilityState === "visible";
  });

  window.requestAnimationFrame(step);
};

const initializePage = (container = document) => {
  syncPersistentNavigation();
  applyLanguage(currentLanguage, false);
  applyTheme(currentTheme, false);
  setActivePageLinks();
  applyTeamFilter("all", container);
  initReveal(container);
  initHeroSlider(container);
  initProjectSliders(container);
  handleHeaderState();
  setActiveLinks();
};

const updatePageState = (nextHtml) => {
  const nextDocument = new DOMParser().parseFromString(nextHtml, "text/html");
  const nextBody = nextDocument.body;

  ["page", "style", "titleKey", "descriptionKey"].forEach((key) => {
    if (nextBody.dataset[key]) {
      body.dataset[key] = nextBody.dataset[key];
    }
  });
};

const runPageAnimation = (element, keyframes, options) => {
  if (prefersReducedMotion() || typeof element?.animate !== "function") {
    return Promise.resolve();
  }

  const animation = element.animate(keyframes, options);
  return animation.finished.catch(() => undefined);
};

const scrollToPageTarget = (url) => {
  const hash = new URL(url, window.location.href).hash;
  window.requestAnimationFrame(() => {
    if (hash) {
      document.querySelector(hash)?.scrollIntoView({ block: "start" });
    } else {
      window.scrollTo(0, 0);
    }
  });
};

initializePage();

if ("requestIdleCallback" in window) {
  window.requestIdleCallback(() => {
    initParticlesBackground();
  });
} else {
  window.setTimeout(() => {
    initParticlesBackground();
  }, 150);
}

themeToggle.addEventListener("click", () => {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
});

languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "en" ? "ar" : "en";
  applyLanguage(nextLanguage);
});

sidebarThemeToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    applyTheme(nextTheme);
  });
});

sidebarLanguageToggles.forEach((button) => {
  button.addEventListener("click", () => {
    const nextLanguage = currentLanguage === "en" ? "ar" : "en";
    applyLanguage(nextLanguage);
  });
});

sidebarToggle.addEventListener("click", () => {
  if (sidebar.classList.contains("is-open")) {
    closeSidebar();
  } else {
    openSidebar();
  }
});

sidebarClose.addEventListener("click", closeSidebar);
sidebarBackdrop.addEventListener("click", closeSidebar);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeSidebar();
  }
});

allNavLinks.forEach((link) => {
  link.addEventListener("click", () => {
    closeSidebar();
  });
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 920) {
    closeSidebar();
  }
});

window.addEventListener("scroll", () => {
  handleHeaderState();
  setActiveLinks();
});

document.addEventListener("click", (event) => {
  const button = event.target.closest?.(".filter-button");
  if (!button) {
    return;
  }

  const container = button.closest('[data-barba="container"]') || document;
  applyTeamFilter(button.dataset.filter, container);
});

document.addEventListener("submit", (event) => {
  const contactForm = event.target.closest?.("#contact-form");
  if (!contactForm) {
    return;
  }

  event.preventDefault();
  const formData = new FormData(contactForm);
  const message = String(formData.get("message") || "").trim();

  if (!message) {
    setFeedback(translate("form.required"), "is-error");
    return;
  }

  const whatsappText = encodeURIComponent(
    [
      translate("form.whatsappIntro"),
      "",
      `${translate("form.whatsappMessage")}: ${message}`
    ].join("\n")
  );

  window.open(`https://wa.me/201019603238?text=${whatsappText}`, "_blank", "noopener");
  contactForm.reset();
  setFeedback(translate("form.success"), "is-success");
});

if (window.barba && document.querySelector('[data-barba="wrapper"]')) {
  window.barba.init({
    preventRunning: true,
    timeout: 8000,
    transitions: [
      {
        name: "digi-app-transition",
        before() {
          body.classList.add("is-page-transitioning");
          closeSidebar();
        },
        leave(data) {
          return runPageAnimation(
            data.current.container,
            [
              { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0)" },
              { opacity: 0, transform: "translateY(-18px) scale(0.992)", filter: "blur(5px)" }
            ],
            { duration: 260, easing: "cubic-bezier(.4,0,.2,1)", fill: "forwards" }
          );
        },
        beforeEnter(data) {
          updatePageState(data.next.html);
          window.scrollTo(0, 0);
        },
        enter(data) {
          initializePage(data.next.container);
          return runPageAnimation(
            data.next.container,
            [
              { opacity: 0, transform: "translateY(22px) scale(0.992)", filter: "blur(5px)" },
              { opacity: 1, transform: "translateY(0) scale(1)", filter: "blur(0)" }
            ],
            { duration: 420, easing: "cubic-bezier(.16,1,.3,1)", fill: "both" }
          );
        },
        after(data) {
          body.classList.remove("is-page-transitioning");
          scrollToPageTarget(data.next.url.href);
        }
      }
    ]
  });
}

window.addEventListener("load", () => {
  handleHeaderState();
  setActiveLinks();

  if (loader) {
    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      body.classList.remove("loader-active");
    }, 300);
  }
});
