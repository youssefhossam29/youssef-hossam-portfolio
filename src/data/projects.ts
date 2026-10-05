export interface Project {
  id: string;
  title: string;
  category: "Ecommerce" | "Portofilio" | "Landing";
  country: string;
  industry: string;
  image: string;
  description: string;
  tools: string[];
  liveUrl?: string;
  isFeatured?: boolean;
}

export const projectsData: Project[] = [
  {
    id: "allura-eg",
    title: "Allura EG",
    category: "Ecommerce",
    country: "Egypt",
    industry: "Fashion & Retail",
    image: "/projects/allura-eg.png",
    description:
      "High-conversion apparel e-commerce storefront engineered with automated inventory syncing, multi-step checkout, and sub-second load times.",
    tools: ["WordPress", "WooCommerce", "PHP", "MySQL", "Tailwind"],
    liveUrl: "https://allura-eg.com",
    isFeatured: true,
  },
  {
    id: "ash-natural",
    title: "Ash Natural",
    category: "Ecommerce",
    country: "Egypt / KSA",
    industry: "Cosmetics & Skincare",
    image: "/projects/ash-natural.png",
    description:
      "Luxury organic skincare store featuring dynamic routine bundle builders, localized currency switching, and instant WhatsApp ordering.",
    tools: ["WordPress", "WooCommerce", "ACF Pro", "Payment Gateways"],
    liveUrl: "https://ash-natural.com",
    isFeatured: true,
  },
  {
    id: "misk-qa",
    title: "Misk Qatar",
    category: "Ecommerce",
    country: "Qatar",
    industry: "Luxury Perfumes",
    image: "/projects/misk-qa.png",
    description:
      "High-end fragrance commerce portal delivering tailored product showcases, bespoke scent categorization, and enterprise payment integration.",
    tools: ["WordPress", "WooCommerce", "Multi-Currency", "Speed 95+"],
    liveUrl: "https://misk-qa.com",
    isFeatured: true,
  },
  {
    id: "dataskool",
    title: "DataSkool Academy",
    category: "Portofilio",
    country: "Egypt / Remote",
    industry: "EdTech & Data",
    image: "/projects/dataskool.png",
    description:
      "Comprehensive data science training academy portal featuring interactive course tracks, instructor booking, and student enrollment systems.",
    tools: ["Laravel", "PHP", "MySQL", "RESTful APIs", "Alpine.js"],
    liveUrl: "https://dataskool.com",
    isFeatured: true,
  },
  {
    id: "gen-tech",
    title: "Gen-Tech Solutions",
    category: "Portofilio",
    country: "Egypt / UAE",
    industry: "Software Engineering",
    image: "/projects/gen-tech.png",
    description:
      "Corporate technology agency platform showcasing full-cycle web engineering, enterprise SaaS architectures, and automated client onboarding.",
    tools: ["Laravel", "PHP", "REST APIs", "Modern Glassmorphism"],
    liveUrl: "https://gen-tech.io",
    isFeatured: true,
  },
  {
    id: "hawaaeg",
    title: "Hawaa EG",
    category: "Ecommerce",
    country: "Egypt",
    industry: "Beauty & Wellness",
    image: "/projects/hawaaeg.png",
    description:
      "Direct-to-consumer wellness marketplace engineered for frictionless mobile navigation, instant cart popups, and high sales velocity.",
    tools: ["WordPress", "WooCommerce", "Cart Optimization", "SEO"],
    liveUrl: "https://hawaaeg.com",
    isFeatured: false,
  },
  {
    id: "geniusonlineeducation",
    title: "Genius Online Education",
    category: "Landing",
    country: "KSA / Egypt",
    industry: "Online Tutoring",
    image: "/projects/geniusonlineeducation.png",
    description:
      "High-converting student enrollment landing experience featuring interactive advisor consultations, course previews, and real-time chat.",
    tools: ["WordPress", "Elementor Pro", "Lead Funnel", "Speed Optimization"],
    liveUrl: "https://geniusonlineeducation.com",
    isFeatured: false,
  },
  {
    id: "engmalyahya",
    title: "Eng. M. Alyahya",
    category: "Portofilio",
    country: "Saudi Arabia",
    industry: "Architecture & Consulting",
    image: "/projects/engmalyahya.png",
    description:
      "Prestigious architectural and civil engineering portfolio highlighting major GCC infrastructure blueprints and executive project cases.",
    tools: ["WordPress", "Custom Styling", "Interactive Grid", "Bilingual"],
    liveUrl: "https://engmalyahya.com",
    isFeatured: false,
  },
  {
    id: "brightevents",
    title: "Bright Events Dubai",
    category: "Landing",
    country: "UAE",
    industry: "Event Production",
    image: "/projects/brightevents.png",
    description:
      "Vibrant corporate gala and live conference landing page featuring event schedule timelines, VIP seat inquiries, and dynamic media galleries.",
    tools: ["WordPress", "Custom CSS", "Interactive Schedule", "Lead Form"],
    liveUrl: "https://brightevents.ae",
    isFeatured: false,
  },
  {
    id: "physiohope",
    title: "PhysioHope Clinic",
    category: "Portofilio",
    country: "Egypt",
    industry: "Healthcare & Therapy",
    image: "/projects/physiohope.png",
    description:
      "Modern physical rehabilitation center platform with automated doctor appointment booking, patient intake forms, and health advisories.",
    tools: ["WordPress", "Booking Engine", "Patient Portal", "ACF Pro"],
    liveUrl: "https://physiohope.com",
    isFeatured: false,
  },
  {
    id: "pro-safesquad",
    title: "Pro SafeSquad",
    category: "Portofilio",
    country: "USA / Remote",
    industry: "Cybersecurity & Cloud",
    image: "/projects/pro-safesquad.png",
    description:
      "Enterprise cybersecurity services platform detailing penetration testing audit frameworks, compliance checklists, and incident response SLAs.",
    tools: ["Laravel", "REST APIs", "Security Shield", "Tailwind CSS"],
    liveUrl: "https://pro-safesquad.com",
    isFeatured: true,
  },
  {
    id: "qalam",
    title: "Qalam Publishing Platform",
    category: "Portofilio",
    country: "Egypt / KSA",
    industry: "Media & Editorial",
    image: "/projects/qalam.png",
    description:
      "High-volume digital publishing system built with custom caching layers, author management tools, and seamless categorization for large reader bases.",
    tools: ["Laravel", "Blade", "MySQL", "Full-Text Search", "Redis"],
    liveUrl: "https://qalam.media",
    isFeatured: false,
  },
  {
    id: "rbtly",
    title: "Rbtly SaaS Automation",
    category: "Landing",
    country: "Egypt",
    industry: "SaaS & Workflow",
    image: "/projects/rbtly.png",
    description:
      "Modern conversion-focused SaaS landing page for an API integration and workflow automation tool, with interactive tier pricing tables.",
    tools: ["Laravel", "Vue.js", "Tailwind CSS", "Interactive Pricing"],
    liveUrl: "https://rbtly.io",
    isFeatured: false,
  },
  {
    id: "sibgha",
    title: "Sibgha Creative Studio",
    category: "Landing",
    country: "Saudi Arabia",
    industry: "Creative Branding",
    image: "/projects/sibgha.png",
    description:
      "Boutique brand identity agency showcase delivering dynamic typography, motion reels, client case breakdowns, and consultation scheduling.",
    tools: ["WordPress", "CSS Motion", "Video Integration", "Custom Grid"],
    liveUrl: "https://sibgha.com",
    isFeatured: false,
  },
  {
    id: "inspirationfromsilence",
    title: "Inspiration From Silence",
    category: "Portofilio",
    country: "International",
    industry: "Art & Sound",
    image: "/projects/inspirationfromsilence.png",
    description:
      "Atmospheric digital soundscape and art portfolio featuring custom audio playback streams, minimalist gallery cards, and international reach.",
    tools: ["WordPress", "Custom Audio Player", "Minimalist UX", "Responsive"],
    liveUrl: "https://inspirationfromsilence.com",
    isFeatured: false,
  },
  {
    id: "mawrid",
    title: "Mawrid B2B Procurement",
    category: "Portofilio",
    country: "Saudi Arabia",
    industry: "B2B Logistics",
    image: "/projects/mawrid.png",
    description:
      "B2B vendor directory and wholesale supply matching portal connecting Gulf manufacturers with regional logistics and distribution buyers.",
    tools: ["Laravel", "API Gateway", "B2B Portal", "MySQL"],
    liveUrl: "https://mawrid-supply.com",
    isFeatured: false,
  },
  {
    id: "o2h",
    title: "O2H Management Advisory",
    category: "Landing",
    country: "UK / Egypt",
    industry: "Executive Consulting",
    image: "/projects/o2h.png",
    description:
      "Executive management consultancy portal presenting diagnostic operational frameworks, organizational restructuring audits, and advisory retainers.",
    tools: ["WordPress", "Corporate Layout", "Case Studies", "Lead Funnel"],
    liveUrl: "https://o2h-consulting.com",
    isFeatured: false,
  },
];

export const projectCategories = ["All", "Ecommerce", "Portofilio", "Landing"] as const;
export type ProjectCategory = (typeof projectCategories)[number];
