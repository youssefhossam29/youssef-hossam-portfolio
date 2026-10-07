export interface SkillCategory {
  title: string;
  badge: string;
  description: string;
  skills: string[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Backend Engineering",
    badge: "Core Expertise",
    description:
      "Architecting resilient server-side applications, relational schemas, and micro-services built for enterprise scale.",
    skills: [
      "PHP 8+",
      "Laravel Framework",
      "RESTful API Architecture",
      "MySQL / PostgreSQL",
      "Redis Caching",
      "WebSockets / Realtime",
      "Authentication (Sanctum/JWT)",
      "Clean Architecture & OOP",
    ],
  },
  {
    title: "WordPress & E-Commerce",
    badge: "Specialized Track",
    description:
      "Developing bespoke themes, high-converting WooCommerce storefronts, and enterprise plugins from scratch.",
    skills: [
      "Custom Theme Development",
      "WooCommerce Architecture",
      "ACF Pro & Custom Post Types",
      "Payment Gateway Integration",
      "Amelia Booking Engine",
      "Multilingual (Polylang/WPML)",
      "Page Speed 90+ Optimization",
      "Security Hardening",
    ],
  },
  {
    title: "Engineering Mindset",
    badge: "Work Ethic",
    description:
      "Applying structured product thinking, clean code principles, and proactive communication in every sprint.",
    skills: [
      "Analytical Problem Solving",
      "Git & GitHub Workflow",
      "Database Query Optimization",
      "Agile / Scrum Collaboration",
      "Fast Technical Adaptability",
      "Comprehensive Documentation",
    ],
  },
];

export interface TimelineItem {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string[];
  technologies: string[];
}

export const experienceData: TimelineItem[] = [
  {
    id: "exp-1",
    role: "Backend Laravel Developer",
    company: "Gen-Tech Software Solutions",
    location: "Alexandria, Egypt / Remote",
    period: "08/2025 – Present",
    type: "Full-Time",
    description: [
      "Engineered robust RESTful APIs and microservice modules powering multi-tenant enterprise platforms.",
      "Optimized database schema queries and leveraged Redis caching, cutting average API response times by 42%.",
      "Integrated secure third-party payment gateways and webhook listeners with fault-tolerant queuing.",
    ],
    technologies: ["Laravel", "PHP", "MySQL", "Redis", "REST APIs", "Docker"],
  },
  {
    id: "exp-2",
    role: "WordPress Developer",
    company: "Gen-Tech Software Solutions",
    location: "Alexandria, Egypt",
    period: "11/2024 – 08/2025",
    type: "Full-Time",
    description: [
      "Delivered 12+ live commercial web portals and WooCommerce shops across Egypt, UAE, and Saudi Arabia.",
      "Developed bespoke themes using modern CSS, Tailwind, and custom ACF Pro field groups without heavy bloated page builders.",
      "Consistently achieved Google PageSpeed scores of 90+ through caching, asset minification, and database cleanup.",
    ],
    technologies: ["WordPress", "WooCommerce", "PHP", "ACF Pro", "JavaScript", "SEO"],
  },
  {
    id: "exp-3",
    role: "Full Stack WordPress Developer Trainee",
    company: "Information Technology Institute (ITI)",
    location: "Alexandria, Egypt",
    period: "05/2024 – 08/2024",
    type: "Intensive Scholarship",
    description: [
      "Selected for the prestigious intensive scholarship (CMS & Web Development Track).",
      "Mastered clean full-stack web development principles, responsive UI, database modeling, and custom PHP extensions.",
      "Collaborated in agile team sprints to build end-to-end web applications with strict code review standards.",
    ],
    technologies: ["PHP", "WordPress", "MySQL", "JavaScript", "HTML5/CSS3", "Git"],
  },
];

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  period: string;
  grade: string;
  highlights: string[];
}

export const educationData: EducationItem[] = [
  {
    id: "edu-1",
    degree: "Bachelor of Science in Computer Science & Statistics",
    institution: "Alexandria University — Faculty of Science",
    period: "2019 – 2023",
    grade: "GPA: 3.6 / 4.0 (Excellent with Honors)",
    highlights: [
      "Rigorous foundations in Data Structures, Algorithms, Database Management, and Object-Oriented Design.",
      "Excellence in statistical modeling, computational logic, and software engineering methodologies.",
    ],
  },
  {
    id: "edu-2",
    degree: "Intensive Code Camp (CMS & Web Engineering Track)",
    institution: "Information Technology Institute (ITI) — MCIT Egypt",
    period: "2024",
    grade: "Distinction Graduate",
    highlights: [
      "Intensive 4-month government scholarship focused on modern web engineering standards.",
      "Real-world enterprise project simulations, team leadership, and soft skill excellence.",
    ],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const faqData: FAQItem[] = [
  {
    question: "What technical services and engineering capabilities do you offer?",
    answer:
      "I specialize in two primary domains: (1) Scalable Backend Engineering with Laravel & PHP — building robust REST APIs, microservices, database architectures, and secure payment integrations. (2) Enterprise WordPress & WooCommerce Solutions — developing custom themes, high-speed stores, complex ACF logic, and performance optimization targeting 90+ Core Web Vitals.",
  },
  {
    question: "How do you guarantee the performance, speed, and security of applications?",
    answer:
      "Performance and security are built into the architecture from day one. I follow OWASP security best practices, implement strict JWT/Sanctum authentication, sanitize all inputs, and use parameterized queries. For speed, I optimize database indexes, implement Redis caching, offload long-running tasks to queues, and employ modern asset compression.",
  },
  {
    question: "Are you open to full-time employment, remote roles, or relocation?",
    answer:
      "Yes, absolutely. I am actively available for full-time Software Engineer (Backend / Full Stack) positions — both for high-performing remote engineering teams globally, and on-site / relocation opportunities in the GCC (Saudi Arabia, UAE, Qatar) and internationally.",
  },
  {
    question: "What is your project development and delivery workflow?",
    answer:
      "My workflow follows structured agile milestones: (1) Requirements analysis and architectural design. (2) Database schema and API specification. (3) Iterative sprint development with clean Git version control. (4) Staging server preview for live client review. (5) Production deployment and comprehensive code/documentation handover with ongoing post-launch support.",
  },
];

export const techMarqueeLogos = [
  { name: "Laravel", category: "Backend", icon: "laravel.svg" },
  { name: "PHP", category: "Language", icon: "php.svg" },
  { name: "MySQL", category: "Database", icon: "mysql.svg" },
  { name: "WordPress", category: "CMS", icon: "wordpress.svg" },
  { name: "WooCommerce", category: "E-Commerce", icon: "woocommerce.svg" },
  { name: "Redis", category: "Cache", icon: "redis.svg" },
  { name: "Docker", category: "DevOps", icon: "docker.svg" },
  { name: "Git", category: "Version Control", icon: "git.svg" },
  { name: "REST APIs", category: "Architecture", icon: "api.svg" },
  { name: "JavaScript", category: "Frontend", icon: "javascript.svg" },
  { name: "Tailwind CSS", category: "Styling", icon: "tailwind.svg" },
  { name: "Next.js", category: "Framework", icon: "nextjs.svg" },
];
