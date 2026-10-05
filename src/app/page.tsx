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
  Zap,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/common/Icons";

export default function HomePage() {
  const featuredProjects = projectsData.filter((p) => p.isFeatured).slice(0, 3);

  return (
    <div className="relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] bg-radial-glow pointer-events-none -z-10" />

      {/* ================= 1. HERO SECTION (Matching home1-.png.png) ================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{siteConfig.brand.status.text}</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15]">
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-300">
                {siteConfig.brand.name}
              </span>{" "}
              a{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)] font-extrabold glow-text">
                Backend Engineer (Laravel and PHP)
              </span>
            </h1>

            {/* Bio Paragraph */}
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I&apos;m passionate about programming and aim to utilize my expertise in web development with Laravel and WordPress to deliver high-performance, scalable, and efficient solutions.
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-xl shadow-[var(--color-primary)]/30 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Keep In Touch</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href={siteConfig.brand.cvPath}
                download="Youssef-Hossam-Software-Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-[var(--color-accent)] transition-all hover:scale-105 active:scale-95"
              >
                <Download className="w-4 h-4 text-[var(--color-primary-light)]" />
                <span>View CV</span>
              </a>
            </div>

            {/* Mini Social Strip */}
            <div className="flex items-center justify-center lg:justify-start gap-3 pt-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[var(--color-text-dim)]">
                Find Me:
              </span>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-colors"
                aria-label="GitHub"
              >
                <GithubIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-colors"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-emerald-500 transition-colors text-emerald-400"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.social.email}
                className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Right Image Column (Geometric Split Art - home-persolan-image.png) */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Background Decorative Rings */}
            <div className="absolute w-[360px] h-[360px] sm:w-[440px] sm:h-[440px] rounded-full border border-white/10 animate-spin-slow pointer-events-none" />
            <div className="absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] rounded-full border border-[var(--color-primary)]/20 pointer-events-none" />

            {/* Hero Image Container */}
            <div className="relative w-[300px] sm:w-[380px] lg:w-[420px] aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 shadow-2xl">
              <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0F172A]">
                <Image
                  src={siteConfig.logos.heroArt}
                  alt={siteConfig.brand.name}
                  fill
                  priority
                  sizes="(max-width: 768px) 300px, 420px"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Badge 1: Laravel Backend */}
              <div className="absolute -left-4 top-12 px-4 py-2 rounded-xl bg-[#111827]/90 border border-white/15 backdrop-blur-md shadow-xl flex items-center gap-2.5 text-xs font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF2D20]" />
                <span>Laravel Expert</span>
              </div>

              {/* Floating Badge 2: WordPress / WooCommerce */}
              <div className="absolute -right-4 bottom-16 px-4 py-2 rounded-xl bg-[#111827]/90 border border-white/15 backdrop-blur-md shadow-xl flex items-center gap-2.5 text-xs font-bold text-white">
                <span className="w-2.5 h-2.5 rounded-full bg-[#21759B]" />
                <span>WordPress & WooCommerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. CORE EXPERTISE TRACKS ================= */}
      <section className="py-20 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
            Specialized Engineering
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
            Two Complementary Pillars of Excellence
          </h2>
          <p className="text-[var(--color-text-muted)] text-base">
            From high-throughput backend architecture to rapid commercial e-commerce storefronts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Pillar 1: Laravel & APIs */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] flex items-center justify-center mb-6 border border-[var(--color-primary)]/30 group-hover:scale-110 transition-transform">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Backend Architecture & RESTful APIs
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              Engineering fault-tolerant server-side solutions with Laravel and PHP. Focusing on database optimization, Redis cache hierarchies, microservices, and airtight authentication.
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--color-text)]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>RESTful APIs with automated test coverage</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Relational MySQL schema design & query indexing</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Redis caching, queue jobs, and real-time WebSockets</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>OWASP security hardening & JWT / Sanctum auth</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: WordPress & WooCommerce */}
          <div className="glass-card p-8 relative overflow-hidden group">
            <div className="w-12 h-12 rounded-2xl bg-[var(--color-accent)]/20 text-[var(--color-accent)] flex items-center justify-center mb-6 border border-[var(--color-accent)]/30 group-hover:scale-110 transition-transform">
              <Layout className="w-6 h-6" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-3">
              Custom WordPress & WooCommerce Stores
            </h3>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed mb-6">
              Building bespoke, blazing-fast WordPress solutions without bloated visual builder dependencies. Engineered for top conversion rates, seamless payment gateways, and 90+ PageSpeed.
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--color-text)]">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Custom theme & plugin development with clean PHP</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>High-converting WooCommerce checkouts & payment APIs</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Bespoke ACF Pro custom fields & dynamic architectures</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Core Web Vitals optimization achieving 90+ speed scores</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ================= 3. FEATURED PROJECTS PREVIEW ================= */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
              Selected Works
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Featured Case Studies & Platforms
            </h2>
            <p className="text-[var(--color-text-muted)] text-base max-w-xl">
              Live enterprise systems and high-converting stores delivering measurable business value.
            </p>
          </div>

          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all self-start md:self-auto"
          >
            <span>View All Projects ({projectsData.length})</span>
            <ArrowRight className="w-4 h-4 text-[var(--color-primary-light)]" />
          </Link>
        </div>

        {/* 3 Featured Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      {/* ================= 4. DUAL INFINITE TECH MARQUEE ================= */}
      <TechMarquee />

      {/* ================= 5. CALL TO ACTION BANNER ================= */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden glass-card text-center border border-white/15">
          {/* Background Ambient Glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 via-transparent to-[var(--color-accent)]/20 pointer-events-none" />

          <div className="relative max-w-2xl mx-auto space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Ready to Engineer Your Next Digital Breakthrough?
            </h2>
            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Whether you need an enterprise backend architect for your team, or a high-converting web store for your brand — let&apos;s build it with precision.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full text-base font-bold bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] text-white shadow-xl shadow-[var(--color-primary)]/40 hover:scale-105 active:scale-95 transition-all"
              >
                <span>Let&apos;s Talk Together</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href={siteConfig.brand.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-7 py-4 rounded-full text-base font-bold bg-white/5 hover:bg-white/10 text-white border border-white/15 hover:border-emerald-400 transition-all hover:scale-105 text-emerald-400"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Instant WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
