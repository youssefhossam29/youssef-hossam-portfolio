"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  skillsData,
  experienceData,
  educationData,
  faqData,
} from "@/data/about";
import TechMarquee from "@/components/common/TechMarquee";
import {
  Download,
  GraduationCap,
  ChevronDown,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="relative">

      {/* ================= 1. BIO & INTRODUCTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">

            {/* Portrait Column */}
            <div className="lg:col-span-5 flex flex-col items-center gap-6">
              <div className="relative w-[280px] sm:w-[320px] aspect-square rounded-3xl overflow-hidden glass-card p-4 shadow-2xl">
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-[#0A0E17]">
                  <Image
                    src={siteConfig.logos.badgePrimary}
                    alt={siteConfig.brand.name}
                    fill
                    priority
                    sizes="(max-width: 768px) 280px, 320px"
                    className="object-contain p-2 hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  🟢 Available Full-Time & Contracts
                </span>
                <span className="px-4 py-2 rounded-full text-xs font-semibold bg-white/5 text-[var(--color-text-muted)] border border-white/10">
                  📍 Alexandria, Egypt
                </span>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 space-y-7">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Engineering Profile</span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I&apos;m{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary-light)] to-[var(--color-accent)]">
                  Youssef Hossam
                </span>
                <br />
                Backend & WordPress Specialist
              </h1>

              <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
                I am a Software Engineer based in Alexandria, Egypt. I graduated from the Faculty of Science, Alexandria University with a degree in Computer Science and Statistics, achieving a GPA of <strong className="text-white">3.6 / 4.0 (Excellent with Honors)</strong>.
              </p>

              <p className="text-sm sm:text-base text-[var(--color-text-muted)] leading-relaxed">
                Over the course of my career at Gen-Tech and my training at the Information Technology Institute (ITI), I have designed and delivered scalable backend RESTful architectures, optimized database performance, and crafted over 12 high-converting commercial e-commerce platforms. My engineering philosophy combines clean code, reliable testability, and measurable business growth.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={siteConfig.brand.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume (PDF)</span>
                </a>

                <Link
                  href="/contact"
                  className="btn-base btn-outline"
                >
                  <span>Get In Touch</span>
                  <ArrowRight className="w-4 h-4 text-[var(--color-primary-light)]" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= 2. SKILLS ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span className="inline-block self-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technical & Professional Skillset
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              A comprehensive matrix of tools, architectural standards, and operational competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillsData.map((category) => (
              <div
                key={category.title}
                className="glass-card p-6 flex flex-col justify-between group hover:border-[var(--color-accent)] transition-all"
              >
                <div>
                  <span className="inline-block px-3 py-1 rounded-md text-[11px] font-bold uppercase tracking-wider bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] mb-4">
                    {category.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-xs text-[var(--color-text-dim)] leading-relaxed mb-5">
                    {category.description}
                  </p>
                </div>

                <div className="space-y-2 pt-4 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2 text-xs text-[var(--color-text)]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 3. EXPERIENCE TIMELINE ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span className="inline-block self-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
              Work Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Professional Engineering Timeline
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              Hands-on production track record in software agencies and intensive technical institutes.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-6 sm:left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent" />

            <div className="space-y-12">
              {experienceData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-start ${isEven ? "sm:flex-row-reverse" : ""} gap-8`}
                  >
                    {/* Node dot */}
                    <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[#0B1120] shadow-lg shadow-[var(--color-primary)]/50 z-10 mt-1" />

                    <div className="ml-14 sm:ml-0 sm:w-1/2 sm:px-8 w-full">
                      <div className="glass-card p-7 relative group hover:border-[var(--color-primary-light)] transition-all">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <span className="px-3 py-1 rounded text-xs font-semibold bg-[var(--color-accent)]/20 text-[var(--color-accent)]">
                            {item.type}
                          </span>
                          <span className="text-xs text-[var(--color-text-dim)] flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {item.period}
                          </span>
                        </div>

                        <h3 className="text-lg font-bold text-white">{item.role}</h3>
                        <h4 className="text-sm font-semibold text-[var(--color-primary-light)] mb-5">
                          {item.company}
                        </h4>

                        <ul className="space-y-2.5 mb-5 text-xs text-[var(--color-text-muted)] leading-relaxed">
                          {item.description.map((bullet, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] shrink-0 mt-1.5" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="flex flex-wrap gap-2 pt-4 border-t border-white/5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-1 rounded text-[10px] font-mono bg-white/5 text-[var(--color-text-muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ================= 4. EDUCATION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span className="inline-block self-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              Academic Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {educationData.map((edu) => (
              <div key={edu.id} className="glass-card p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/30">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    {edu.grade}
                  </span>
                  <h3 className="text-xl font-bold text-white mt-5 mb-1">{edu.degree}</h3>
                  <h4 className="text-sm font-semibold text-[var(--color-primary-light)] mb-5">
                    {edu.institution} • {edu.period}
                  </h4>
                </div>

                <ul className="space-y-2.5 pt-5 border-t border-white/5 text-xs text-[var(--color-text-muted)]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= 5. FAQ ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="section-header">
            <span className="inline-block self-center px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/20">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Clarifying Common Inquiries
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {faqData.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="glass-card overflow-hidden transition-all duration-200 border border-white/10"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-7 py-6 text-left flex items-center justify-between gap-4 focus:outline-none"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base sm:text-lg font-bold text-white">
                      {faq.question}
                    </span>
                    <div
                      className={`p-2 rounded-full bg-white/5 shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 bg-[var(--color-primary)] text-white" : "text-[var(--color-text-muted)]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-7 pb-7 pt-1 text-sm text-[var(--color-text-muted)] leading-relaxed border-t border-white/5">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />
    </div>
  );
}
