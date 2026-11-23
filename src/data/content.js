import { asset } from "../utils/asset";

export const navLinks = [
  "About",
  "Announcements",
  "Education",
  "Experience",
  "Blogs",
  "Projects",
  "Contact",
];

export const roles = [
  "Masters Student",
  "Strategic Thinker",
  "Systems Engineer",
  "Researcher",
];

export const announcements = [
  "Published: Why Supply Chain Resilience Matters More Than Ever in the Oil & Gas Industry",
  "Published: AI is the Reckless Intern, You Are Still the Tech Lead: Curing Engineer Anxiety",
  {
    text: "Published: Engineering Case Study: Designing a Zero-Cost, Serverless Portfolio & Edge-Inference AI Career Strategist",
    externalUrl: "https://drive.google.com/file/d/15Z0BeNiHWY96c-YKgZ4eOT4eKOY8Y2hN/view?usp=sharing",
  },
  "Researching Weibull-based approaches to aerospace reliability and lifecycle engineering",
  "Developing manufacturing systems and supply chain operations case studies",
];

export const education = [
  {
    degree: "M.Sc Strategic Management in Logistics",
    school: "BBW University",
    date: "2024 – 2027",
    location: "Berlin, Germany",
    logo: asset("/bbw.svg"),
  },
  {
    degree: "Bachelor’s in Mechanical Engineering",
    school: "Savitribai Phule Pune University",
    date: "2018 – 2022",
    location: "Pune, India",
    logo: asset("/sppu.png"),
  },
];

export const experience = [
  {
    role: "Lifecycle Engineering Werkstudent",
    company: "Rolls-Royce Deutschland",
    date: "07/2025 – Present",
    logo: asset("/rollsroyce.svg"),
  },
  {
    role: "Systems Engineer",
    company: "Infosys",
    date: "11/2022 – 10/2024",
    logo: asset("/infosys.svg"),
  },
  {
    role: "Supply Chain Intern",
    company: "Cummins Generator Technologies",
    date: "09/2021 – 10/2021",
    logo: asset("/cummins.svg"),
  },
];

export const projects = [
  {
    title: "Supply Chain Management",
    desc: "Sustainable supply chain systems, aerospace logistics, resilience frameworks, and operational strategy.",
    externalUrl: "https://chainofthought22.blogspot.com/2025/04/sustainable-supply-chain-management-in.html?m=1",
    linkText: "Open Project ↗",
  },
  {
    title: "Logistics & Analytics",
    desc: "Dashboards, operational intelligence, inventory systems, KPI tracking, and logistics optimization.",
    externalUrl: "https://chainofthought22.blogspot.com/2025/12/development-of-last-mile-delivery.html?m=1",
    linkText: "Open Project ↗",
  },
  {
    title: "Manufacturing Systems",
    desc: "Reliability engineering, lifecycle systems, manufacturing operations, and process optimization.",
    externalUrl: "https://chainofthought22.blogspot.com/2024/12/design-and-manufacturing-of.html?m=1",
    linkText: "Open Project ↗",
  },
  {
    title: "Digital Transformation",
    desc: "Automation systems, workflow optimization, digital operations, and intelligent transformation.",
    externalUrl: "https://chainofthought22.blogspot.com/2025/07/inventory-insights-data-driven.html?m=1",
    linkText: "Open Project ↗",
  },
  {
    title: "Engineering Case Study: Designing a Zero-Cost, Serverless Portfolio & Edge-Inference AI Career Strategist",
    cardDesc: "Edge-Inference AI Career Strategist (Serverless Portfolio Assistant): I engineered a zero-cost, 24/7 AI Career Strategist integrated directly into my GitHub Pages portfolio.",
    desc: "Edge-Inference AI Career Strategist (Serverless Portfolio Assistant): I engineered a zero-cost, 24/7 AI Career Strategist integrated directly into my GitHub Pages portfolio using Cloudflare Workers and Cloudflare Workers AI (@cf/meta/llama-4-scout-17b-16e-instruct), backed by an automated Google Gemini fallback chain. By consolidating 1.02 MB of redundant multi-CV documents into a canonical 3,965-byte (~650-token) knowledge base—a 99.6% payload reduction—and implementing server-side CORS security and diagnostic prompt engineering, the assistant delivers sub-2-second, metric-backed answers tailored to recruiter queries rather than dumping raw resume text.",
    externalUrl: "https://drive.google.com/file/d/15Z0BeNiHWY96c-YKgZ4eOT4eKOY8Y2hN/view?usp=sharing",
    linkText: "Read the full engineering paper ↗",
  },
];

export const blogs = [
  {
    id: "supply-chain-resilience-oil-gas",
    title: "Why Supply Chain Resilience Matters More Than Ever in the Oil & Gas Industry",
    category: "Supply Chain Strategy",
    externalUrl:
      "https://chainofthought22.blogspot.com/2026/05/3-why-supply-chain-resilience-matters.html?m=1",
    excerpt:
      "Exploring the critical importance of supply chain resilience and its impact on operational stability in oil and gas operations.",
    fullContent:
      `Supply chain resilience is no longer optional in the oil & gas industry—it's essential for survival.\n\nThis article examines why robust, flexible supply chains are crucial for maintaining operations in volatile markets.\n\nRead the original post here: https://chainofthought22.blogspot.com/2026/05/3-why-supply-chain-resilience-matters.html`,
  },
  {
    id: "ai-reckless-intern-tech-lead",
    title: "AI is the Reckless Intern, You Are Still the Tech Lead: Curing Engineer Anxiety",
    category: "Engineering Leadership",
    externalUrl:
      "https://chainofthought22.blogspot.com/2026/05/ai-is-reckless-intern-you-are-still.html?m=1",
    excerpt:
      "A practical perspective on using AI without surrendering engineering judgment, responsibility, or calm under pressure.",
    fullContent:
      `This article explores how engineers can use AI as a fast helper without handing over ownership, verification, or accountability.\n\nRead the original post here: https://chainofthought22.blogspot.com/2026/05/ai-is-reckless-intern-you-are-still.html`,
  },
  {
    id: "weibull-aerospace",
    title: "From Reactive to Predictive: Weibull-Based Aerospace Reliability Systems",
    category: "Aerospace Reliability Systems",
    externalUrl:
      "https://chainofthought22.blogspot.com/2026/05/from-reactive-to-predictive-weibull.html?m=1",
    excerpt:
      "Exploring predictive maintenance systems and Weibull-based reliability models in aerospace operations and lifecycle engineering.",
    fullContent:
      `Please paste the full blog content here.\n\nYou can include multiple paragraphs. This field will be rendered as the full blog when visiting /blog/weibull-aerospace`,
  },
];

export const formspreeEndpoint = "https://formspree.io/f/mgoqogrk"; // Formspree form ID provided by user

export const translations = {
  en: {
    navLinks,
    heroIntro: "Hi everyone, my name is",
    heroRole: "I'm a Student in Supply Chain",
    heroRoleLine: "and Logistics Analysis",
    viewProjects: "View Projects",
    readBlogs: "Read Blogs",
    about: "About",
    aboutTitle: "A Quick",
    aboutTitleLine: "Background",
    basedInLabel: "I'm based in",
    workedAtLabel: "I worked at",
    rolesLabel: "My roles were",
    announcements: "Announcements",
    education: "Education",
    experience: "Experience",
    blogs: "Blogs",
    projects: "Projects",
    category: "Category",
    openBlog: "Open Blog Detail",
    openProject: "Open Project",
    footerDescription: "Engineering systems, exploring operational intelligence, and documenting ideas across manufacturing, logistics, and digital transformation.",
    subscribeUpdates: "Subscribe for Updates",
    explore: "Explore",
    work: "Work",
    connect: "Connect",
    supplyChainManagement: "Supply Chain Management",
    designedBy: "Designed & Engineered by Sanket Agalave",
    subscribe: "Subscribe",
    subscribeDescription: "Get notified about new projects, articles, announcements, and updates.",
    firstName: "First Name",
    lastName: "Last Name",
    emailAddress: "Email Address",
    joinJourney: "Join the Journey",
    sending: "Sending...",
    subscribeSuccess: "Thanks - we'll notify you shortly.",
    subscribeFailure: "Submission failed - please try again later.",
    networkError: "Network error - please try again later.",
    readOriginal: "Read Original Post",
    readEngineeringPaper: "Read the full engineering paper",
    backToPortfolio: "Back to Portfolio",
    blogNotFound: "Blog not found",
    goBack: "Go back",
    announcementsData: announcements,
    educationData: education,
    experienceData: experience,
    projectsData: projects,
    blogsData: blogs,
  },
  de: {
    navLinks: ["Über mich", "Neuigkeiten", "Ausbildung", "Erfahrung", "Blogs", "Projekte", "Kontakt"],
    heroIntro: "Hallo zusammen, mein Name ist",
    heroRole: "Ich bin Student im Bereich Supply Chain",
    heroRoleLine: "und Logistikanalyse",
    viewProjects: "Projekte ansehen",
    readBlogs: "Blogs lesen",
    about: "Über mich",
    aboutTitle: "Kurzer",
    aboutTitleLine: "Lebenslauf",
    basedInLabel: "Ich lebe in",
    workedAtLabel: "Ich habe gearbeitet bei",
    rolesLabel: "Meine Positionen",
    announcements: "Neuigkeiten",
    education: "Ausbildung",
    experience: "Erfahrung",
    blogs: "Blogs",
    projects: "Projekte",
    category: "Kategorie",
    openBlog: "Blog-Details öffnen",
    openProject: "Projekt öffnen",
    footerDescription: "Ich entwickle technische Systeme, erforsche operative Intelligenz und dokumentiere Ideen in Fertigung, Logistik und digitaler Transformation.",
    subscribeUpdates: "Updates abonnieren",
    explore: "Entdecken",
    work: "Arbeit",
    connect: "Kontakt",
    supplyChainManagement: "Supply Chain Management",
    designedBy: "Entworfen und entwickelt von Sanket Agalave",
    subscribe: "Abonnieren",
    subscribeDescription: "Erhalten Sie Neuigkeiten zu neuen Projekten, Artikeln, Ankündigungen und Updates.",
    firstName: "Vorname",
    lastName: "Nachname",
    emailAddress: "E-Mail-Adresse",
    joinJourney: "Teil der Reise werden",
    sending: "Wird gesendet...",
    subscribeSuccess: "Vielen Dank - wir informieren Sie in Kürze.",
    subscribeFailure: "Übermittlung fehlgeschlagen - bitte versuchen Sie es später erneut.",
    networkError: "Netzwerkfehler - bitte versuchen Sie es später erneut.",
    readOriginal: "Originalbeitrag lesen",
    readEngineeringPaper: "Vollständige Engineering-Arbeit lesen",
    backToPortfolio: "Zurück zum Portfolio",
    blogNotFound: "Blog nicht gefunden",
    goBack: "Zurück",
    announcementsData: [
      "Veröffentlichung: Warum Lieferkettenresilienz in der Öl- und Gasindustrie wichtiger denn je ist",
      "Veröffentlichung: KI ist der unerfahrene Praktikant - Sie bleiben verantwortlich",
      {
        text: "Veröffentlicht: Engineering-Fallstudie: Entwicklung eines kostenlosen, serverlosen Portfolios und eines KI-Career-Strategen mit Edge-Inferenz",
        externalUrl: "https://drive.google.com/file/d/15Z0BeNiHWY96c-YKgZ4eOT4eKOY8Y2hN/view?usp=sharing",
      },
      "Erforschung Weibull-basierter Ansätze für Zuverlässigkeit und Lifecycle Engineering in der Luftfahrt",
      "Entwicklung von Fallstudien zu Fertigungssystemen und Supply Chain Operations",
    ],
    educationData: [
      { ...education[0], degree: "M.Sc. Strategic Management in Logistics", location: "Berlin, Deutschland" },
      { ...education[1], degree: "Bachelor in Maschinenbau", location: "Pune, Indien" },
    ],
    experienceData: [
      { ...experience[0], role: "Werkstudent Lifecycle Engineering" },
      { ...experience[1], role: "Systemingenieur" },
      { ...experience[2], role: "Praktikant Supply Chain" },
    ],
    projectsData: [
      { ...projects[0], title: "Supply Chain Management", desc: "Nachhaltige Lieferkettensysteme, Luftfahrtlogistik, Resilienzstrategien und operative Strategie.", linkText: "Projekt öffnen" },
      { ...projects[1], title: "Logistik und Analytik", desc: "Dashboards, operative Intelligenz, Bestandsysteme, KPI-Tracking und Logistikoptimierung.", linkText: "Projekt öffnen" },
      { ...projects[2], title: "Fertigungssysteme", desc: "Reliability Engineering, Lifecycle-Systeme, Fertigungsabläufe und Prozessoptimierung.", linkText: "Projekt öffnen" },
      { ...projects[3], title: "Digitale Transformation", desc: "Automatisierungssysteme, Workflow-Optimierung, digitale Abläufe und intelligente Transformation.", linkText: "Projekt öffnen" },
      {
        ...projects[4],
        title: "Engineering-Fallstudie: Entwicklung eines kostenlosen, serverlosen Portfolios und eines KI-Career-Strategen mit Edge-Inferenz",
        cardDesc: "Edge-Inferenz-KI-Career-Stratege (Serverloser Portfolio-Assistent): Ich habe einen kostenlosen, rund um die Uhr verfügbaren KI-Career-Strategen direkt in mein GitHub-Pages-Portfolio integriert.",
        desc: "Edge-Inferenz-KI-Career-Stratege (Serverloser Portfolio-Assistent): Ich habe einen kostenlosen, rund um die Uhr verfügbaren KI-Career-Strategen direkt in mein GitHub-Pages-Portfolio integriert. Dabei kommen Cloudflare Workers und Cloudflare Workers AI (@cf/meta/llama-4-scout-17b-16e-instruct) zum Einsatz, ergänzt durch eine automatisierte Google-Gemini-Fallback-Kette. Durch die Konsolidierung von 1,02 MB redundanten Lebenslaufdokumenten in eine kanonische Wissensbasis von 3.965 Byte (~650 Tokens) wurde die Nutzlast um 99,6 % reduziert. Serverseitige CORS-Sicherheit und diagnostisches Prompt Engineering ermöglichen Antworten in unter zwei Sekunden.",
        linkText: "Vollständige Engineering-Arbeit lesen",
      },
    ],
    blogsData: [
      { ...blogs[0], title: "Warum Lieferkettenresilienz in der Öl- und Gasindustrie wichtiger denn je ist", category: "Supply Chain Strategie", excerpt: "Eine Untersuchung der entscheidenden Bedeutung von Lieferkettenresilienz und ihrer Auswirkungen auf die operative Stabilität in Öl- und Gasunternehmen.", fullContent: "Lieferkettenresilienz ist in der Öl- und Gasindustrie nicht länger optional - sie ist entscheidend für das Überleben.\n\nDieser Artikel untersucht, warum robuste und flexible Lieferketten wichtig sind, um den Betrieb auf volatilen Märkten aufrechtzuerhalten." },
      { ...blogs[1], title: "KI ist der unerfahrene Praktikant - Sie sind weiterhin verantwortlich", category: "Engineering Leadership", excerpt: "Ein praktischer Ansatz für den Einsatz von KI, ohne technisches Urteilsvermögen, Verantwortung oder Ruhe zu verlieren.", fullContent: "Dieser Artikel zeigt, wie Ingenieurinnen und Ingenieure KI als schnellen Helfer nutzen können, ohne Verantwortung, Verifikation oder Rechenschaft abzugeben." },
      { ...blogs[2], title: "Von reaktiv zu prädiktiv: Weibull-basierte Zuverlässigkeitssysteme in der Luftfahrt", category: "Zuverlässigkeitssysteme in der Luftfahrt", excerpt: "Eine Betrachtung prädiktiver Wartungssysteme und Weibull-basierter Zuverlässigkeitsmodelle in der Luftfahrt und im Lifecycle Engineering.", fullContent: "Dieser Artikel bietet einen Überblick über prädiktive Wartung und Weibull-basierte Zuverlässigkeitsmodelle in Luftfahrtbetrieben und im Lifecycle Engineering." },
    ],
  },
};
