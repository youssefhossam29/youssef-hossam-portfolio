"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import {
  skillsData,
  experienceData,
  educationData,
} from "@/data/about";
import TechMarquee from "@/components/common/TechMarquee";
import {
  Download,
  GraduationCap,
  Sparkles,
  Calendar,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="relative">

      {/* ================= 1. BIO & INTRODUCTION ================= */}
      <section className="page-section">
        <div className="page-container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center pt-8">

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
                <span
                  style={{ padding: "8px 20px" }}
                  className="rounded-xl text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.5),inset_0_0_12px_rgba(16,185,129,0.3)]"
                >
                  Open to New Opportunities
                </span>
                <span
                  style={{ padding: "8px 20px" }}
                  className="rounded-xl text-xs font-semibold bg-white/5 text-[var(--color-text-muted)] border border-white/10 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_24px_rgba(255,255,255,0.3),inset_0_0_12px_rgba(255,255,255,0.15)]"
                >
                  Alexandria, Egypt
                </span>
              </div>
            </div>

            {/* Bio Column */}
            <div className="lg:col-span-7 flex flex-col items-center text-center lg:items-start lg:text-left gap-6">
              <div
                style={{ padding: "8px 20px" }}
                className="self-center lg:self-start w-fit inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
              >
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

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-5 pt-2">
                <a
                  href={siteConfig.brand.cvPath}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25"
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
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-accent)]/10 text-[var(--color-accent)] border border-[var(--color-accent)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-accent)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(245,158,11,0.5),inset_0_0_12px_rgba(245,158,11,0.3)]"
            >
              Competencies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Technical & Professional Skillset
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              A comprehensive matrix of tools, architectural standards, and operational competencies.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillsData.map((category) => (
              <div
                key={category.title}
                style={{ padding: "20px" }}
                className="glass-card flex flex-col justify-start group hover:border-[var(--color-accent)] transition-all gap-5"
              >
                <div className="flex flex-col gap-3 min-h-[145px] sm:min-h-[155px]">
                  <span
                    style={{ padding: "8px" }}
                    className="self-start w-fit inline-block rounded-md text-[11px] font-bold uppercase tracking-wider bg-[var(--color-primary)]/20 text-[var(--color-primary-light)]"
                  >
                    {category.badge}
                  </span>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                  <p className="text-xs text-[var(--color-text-dim)] leading-relaxed">
                    {category.description}
                  </p>
                </div>

                <div style={{ padding: "10px 0" }} className="flex flex-col gap-3.5 border-t border-white/5">
                  {category.skills.map((skill) => (
                    <div key={skill} className="flex items-center gap-2.5 text-xs text-[var(--color-text)]">
                      <span className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
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
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              Work Experience
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Professional Engineering Timeline
            </h2>
            <p className="text-sm sm:text-base text-[var(--color-text-muted)]">
              Hands-on production track record in software agencies and intensive technical institutes.
            </p>
          </div>

          <div className="relative w-full mx-auto">
            {/* Timeline Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-0.5 bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-accent)] to-transparent hidden sm:block" />

            <div className="space-y-12">
              {experienceData.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    className={`relative flex flex-col sm:flex-row items-center ${isEven ? "sm:flex-row-reverse" : ""} w-full`}
                  >
                    {/* Node dot */}
                    <div className="hidden sm:block absolute left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-[var(--color-primary)] border-4 border-[#0B1120] shadow-lg shadow-[var(--color-primary)]/50 z-10" />

                    <div
                      style={{ padding: "0 20px" }}
                      className="w-full sm:w-1/2 sm:px-8 mx-auto"
                    >
                      <div
                        style={{ padding: "20px" }}
                        className="glass-card relative group hover:border-[var(--color-primary-light)] transition-all flex flex-col gap-5"
                      >
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span
                            style={{ padding: "8px" }}
                            className="rounded text-xs font-semibold bg-[var(--color-accent)]/20 text-[var(--color-accent)]"
                          >
                            {item.type}
                          </span>
                          <span
                            style={{ padding: "8px" }}
                            className="text-xs text-[var(--color-text-dim)] flex items-center gap-1.5 rounded-lg bg-white/5 border border-white/5"
                          >
                            <Calendar className="w-3.5 h-3.5" />
                            {item.period}
                          </span>
                        </div>

                        <div>
                          <h3 className="text-lg font-bold text-white">{item.role}</h3>
                          <h4 className="text-sm font-semibold text-[var(--color-primary-light)]">
                            {item.company}
                          </h4>
                        </div>

                        <ul className="space-y-5 text-xs text-[var(--color-text-muted)] leading-relaxed">
                          {item.description.map((bullet, i) => (
                            <li key={i} className="flex items-center gap-2.5">
                              <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-primary-light)] shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        <div style={{ padding: "10px 0" }} className="flex flex-wrap gap-2.5 border-t border-white/5">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              style={{ padding: "8px" }}
                              className="rounded-md text-[10px] font-mono bg-white/5 text-[var(--color-text-muted)] border border-white/5"
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
            <span
              style={{ padding: "8px 20px" }}
              className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-emerald-500/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(16,185,129,0.5),inset_0_0_12px_rgba(16,185,129,0.3)]"
            >
              Academic Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              Education & Certifications
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full">
            {educationData.map((edu) => (
              <div
                key={edu.id}
                style={{ padding: "20px" }}
                className="glass-card flex flex-col justify-between gap-5"
              >
                <div className="flex flex-col gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center border border-emerald-500/30 p-3">
                    <GraduationCap className="w-7 h-7" />
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <span
                      style={{ padding: "8px" }}
                      className="self-start w-fit rounded-xl text-xs font-bold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                    >
                      {edu.grade}
                    </span>
                    <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    <h4 className="text-sm font-semibold text-[var(--color-primary-light)]">
                      {edu.institution} • {edu.period}
                    </h4>
                  </div>
                </div>

                <ul style={{ padding: "10px 0" }} className="flex flex-col gap-4 border-t border-white/5 text-xs text-[var(--color-text-muted)]">
                  {edu.highlights.map((h, i) => (
                    <li key={i} className="flex items-center gap-2.5">
                      <span className="p-1 rounded-lg bg-emerald-500/15 text-emerald-400 shrink-0 border border-emerald-500/20">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                      </span>
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Marquee */}
      <TechMarquee />
    </div>
  );
}
