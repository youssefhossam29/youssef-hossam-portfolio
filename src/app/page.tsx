import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import { projectsData } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import TechMarquee from "@/components/common/TechMarquee";
import {
  ArrowRight,
  Download,
  Mail,
  MessageCircle,
  Server,
  Layout,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/common/Icons";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-[560px] bg-radial-glow pointer-events-none -z-10" />

      {/* ================= 1. HERO SECTION ================= */}
      <section className="pt-8 pb-16 sm:pt-12 sm:pb-20 lg:pt-14 lg:pb-24">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            {/* Left Content (Clear Hierarchy & High Readability) */}
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-7 items-center lg:items-start text-center lg:text-left">
              {/* Status Pill (Comfortable internal padding) */}
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 backdrop-blur-sm shadow-sm">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>{siteConfig.brand.status.text}</span>
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-white">Youssef Hossam</span>
                <span className="text-slate-400 font-normal"> — </span>
                <br className="hidden sm:inline" />
                a{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)] font-extrabold">
                  Backend Engineer (Laravel & PHP)
                </span>
              </h1>

              {/* Bio / Description (High contrast, easy to read) */}
              <p className="text-base sm:text-lg text-slate-300 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Engineering robust server-side architectures, fault-tolerant RESTful APIs, and custom high-converting WordPress & WooCommerce systems delivering measurable commercial growth.
              </p>

              {/* CTA Buttons: Keep In Touch (Primary) & View CV (Secondary) */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-1">
                <Link
                  href="/contact"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
                >
                  <span>Keep In Touch</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={siteConfig.brand.cvPath}
                  download="Youssef-Hossam-Software-Engineer.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-outline"
                >
                  <Download className="w-4 h-4 text-[var(--color-primary-light)]" />
                  <span>View CV</span>
                </a>
              </div>

              {/* Social Strip (Comfortable padding, WCAG touch target, centered icons) */}
              <div className="flex items-center justify-center lg:justify-start gap-4 pt-2">
                <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 mr-1">
                  Find Me:
                </span>
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 hover:border-emerald-500 transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="WhatsApp Chat"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                </a>
                <a
                  href={siteConfig.social.email}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5 shadow-sm"
                  aria-label="Send Direct Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Right: Profile Card (Reusing exact About page image asset, unclipped badges) */}
            <div className="lg:col-span-5 relative flex items-center justify-center">
              <div className="absolute w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-white/8 pointer-events-none" />
              <div className="absolute w-[260px] h-[260px] sm:w-[320px] sm:h-[320px] rounded-full border border-[var(--color-primary)]/20 pointer-events-none" />

              <div className="relative w-[280px] sm:w-[350px] lg:w-[380px] aspect-square rounded-3xl glass-card p-4 shadow-2xl border border-white/20">
                {/* Inner Image Container (Only image has overflow-hidden) */}
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0E1A] border border-white/10 shadow-inner flex items-center justify-center">
                  <Image
                    src={siteConfig.logos.badgePrimary}
                    alt={siteConfig.brand.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, (max-width: 1024px) 350px, 380px"
                    className="object-contain p-3 sm:p-4 hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Floating Badge 1: Laravel Expert (Generous internal padding) */}
                <div className="absolute -left-3 sm:-left-7 top-8 sm:top-12 z-20 px-6 py-3.5 rounded-2xl bg-[#131D31]/95 border border-white/25 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.75)] flex items-center gap-3 text-xs sm:text-sm font-bold text-white whitespace-nowrap transition-transform hover:-translate-y-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D20] shadow-[0_0_12px_#FF2D20] shrink-0" />
                  <span className="tracking-wide">Laravel Expert</span>
                </div>

                {/* Floating Badge 2: WordPress & WooCommerce (Generous internal padding) */}
                <div className="absolute -right-3 sm:-right-7 bottom-8 sm:bottom-12 z-20 px-6 py-3.5 rounded-2xl bg-[#131D31]/95 border border-white/25 backdrop-blur-xl shadow-[0_12px_36px_rgba(0,0,0,0.75)] flex items-center gap-3 text-xs sm:text-sm font-bold text-white whitespace-nowrap transition-transform hover:-translate-y-1">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00749C] shadow-[0_0_12px_#00A4D6] shrink-0" />
                  <span className="tracking-wide">WordPress & WooCommerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CORE EXPERTISE TRACKS ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header !mb-12">
            <span className="inline-block self-center px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/25">
              Specialized Engineering
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Two Complementary Pillars of Excellence
            </h2>
            <p className="text-slate-300 text-base max-w-2xl mx-auto">
              Bridging high-throughput backend architecture with commercial, high-converting e-commerce platforms.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {/* Pillar 1: Backend Architecture */}
            <div className="glass-card p-8 sm:p-9 md:p-10 relative overflow-hidden group space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] flex items-center justify-center border border-[var(--color-primary)]/30 group-hover:scale-105 transition-transform p-3.5">
                  <Server className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Backend Architecture & RESTful APIs
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Engineering fault-tolerant server-side systems with Laravel and PHP. Focusing on relational database optimization, Redis cache hierarchies, and airtight security authentication.
                </p>
              </div>
              <ul className="space-y-4 pt-6 border-t border-white/8 text-sm text-slate-200">
                {[
                  "High-throughput RESTful APIs with automated test coverage",
                  "Relational MySQL schema architecture & query optimization",
                  "Redis caching hierarchies, queue jobs & real-time WebSockets",
                  "OWASP security hardening & JWT / Sanctum authentication",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 leading-relaxed">
                    <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 border border-emerald-500/20 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pillar 2: Custom WordPress & WooCommerce */}
            <div className="glass-card p-8 sm:p-9 md:p-10 relative overflow-hidden group space-y-6 flex flex-col justify-between h-full">
              <div className="space-y-4">
                <div className="w-14 h-14 rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center border border-[var(--color-accent)]/30 group-hover:scale-105 transition-transform p-3.5">
                  <Layout className="w-7 h-7" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  Custom WordPress & WooCommerce Stores
                </h3>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  Crafting bespoke, blazing-fast WordPress solutions without bloated builder plugins. Engineered for maximum checkout conversion, seamless payment APIs, and 90+ PageSpeed.
                </p>
              </div>
              <ul className="space-y-4 pt-6 border-t border-white/8 text-sm text-slate-200">
                {[
                  "Custom theme & plugin development with clean, scalable PHP",
                  "High-conversion WooCommerce checkouts & payment gateway APIs",
                  "Dynamic content architectures with ACF Pro & REST endpoints",
                  "Core Web Vitals optimization achieving 90+ speed scores",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3.5 leading-relaxed">
                    <span className="p-1.5 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 border border-emerald-500/20 mt-0.5">
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED PROJECTS ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="space-y-3">
              <span className="inline-block px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25">
                Selected Works
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
                Featured Case Studies & Platforms
              </h2>
              <p className="text-slate-300 text-sm sm:text-base max-w-xl leading-relaxed">
                Real production systems and high-converting commercial stores engineered for verified business outcomes.
              </p>
            </div>
            <Link
              href="/projects"
              className="btn-base btn-outline self-start md:self-auto shrink-0"
            >
              <span>View All Projects ({projectsData.length})</span>
              <ArrowRight className="w-4 h-4 text-[var(--color-primary-light)]" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-9">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* ================= 4. TECH MARQUEE & STACK ================= */}
      <TechMarquee />

      {/* ================= 5. CALL TO ACTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="relative rounded-3xl p-8 sm:p-12 md:p-16 overflow-hidden glass-card text-center border border-white/15">
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/15 via-transparent to-[var(--color-accent)]/15 pointer-events-none" />

            <div className="relative max-w-2xl mx-auto flex flex-col items-center text-center gap-6">
              <span className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Available for Immediate Engagement</span>
              </span>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Build Something Scalable & High-Impact?
              </h2>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                Whether you need a dedicated Backend Engineer for enterprise Laravel systems, high-converting WooCommerce storefronts, or API architecture audits — let&apos;s build it with precision.
              </p>

              {/* Exact 20px gap (gap-5) between buttons */}
              <div className="flex flex-wrap items-center justify-center gap-5 pt-3">
                <Link
                  href="/contact"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
                >
                  <span>Let&apos;s Talk Together</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href={siteConfig.brand.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-whatsapp"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Instant WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
