"use client";

import React from "react";
import { Server, Database, Layout, ShieldCheck, Code2, Zap } from "lucide-react";

const stackCategories = [
  {
    title: "Backend Architecture",
    tagline: "High-throughput server engines",
    icon: Server,
    badgeColor: "bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] border-[var(--color-primary)]/30",
    skills: ["PHP 8+", "Laravel", "RESTful APIs", "MySQL", "Redis"],
  },
  {
    title: "WordPress & E-Commerce",
    tagline: "Commercial conversion engines",
    icon: Layout,
    badgeColor: "bg-[var(--color-accent)]/20 text-[var(--color-accent)] border-[var(--color-accent)]/30",
    skills: ["WordPress", "WooCommerce", "Custom Themes", "ACF Pro", "Payment APIs"],
  },
  {
    title: "Infrastructure & Tools",
    tagline: "Deployment & real-time ops",
    icon: Database,
    badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    skills: ["Docker", "Git & GitHub", "Redis Queues", "WebSockets", "Linux / Nginx"],
  },
  {
    title: "Security & Standards",
    tagline: "Enterprise-grade protection",
    icon: ShieldCheck,
    badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    skills: ["OWASP Hardening", "Laravel Sanctum", "JWT Auth", "Clean Code", "API Specs"],
  },
];

const tickerLogos = [
  { name: "Laravel", tag: "Backend Framework", icon: Server },
  { name: "PHP 8+", tag: "Core Language", icon: Code2 },
  { name: "MySQL", tag: "Relational DB", icon: Database },
  { name: "WordPress", tag: "CMS Architecture", icon: Layout },
  { name: "WooCommerce", tag: "E-Commerce", icon: Zap },
  { name: "Redis", tag: "In-Memory Cache", icon: Zap },
  { name: "RESTful APIs", tag: "Microservices", icon: Server },
  { name: "Docker", tag: "Containerization", icon: Server },
  { name: "WebSockets", tag: "Real-time Protocol", icon: Zap },
  { name: "ACF Pro", tag: "Custom Fields", icon: Code2 },
  { name: "OWASP Security", tag: "API Hardening", icon: ShieldCheck },
];

export default function TechMarquee() {
  return (
    <section className="py-14 sm:py-16 overflow-hidden relative border-y border-white/5 bg-[#080C16]">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <div className="page-container mb-10">
        <div className="section-header !mb-8">
          <span className="inline-block self-center px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
            Engineering Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Specialized Technologies & Core Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
            Logically structured across backend engineering, commercial e-commerce, cloud infrastructure, and security standards.
          </p>
        </div>

        {/* 4 Categorized Stack Cards (Logical Grouping) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stackCategories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="glass-card p-5 flex flex-col justify-between space-y-4 hover:border-white/20 transition-all"
              >
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className={`p-2.5 rounded-xl border shrink-0 ${cat.badgeColor}`}>
                      <Icon className="w-5 h-5" />
                    </span>
                    <div>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {cat.title}
                      </h3>
                      <p className="text-[11px] text-slate-400">
                        {cat.tagline}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2.5 py-1 rounded-md text-xs font-semibold bg-white/5 text-slate-200 border border-white/8 hover:border-white/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dynamic Animated Marquee Ribbon */}
      <div className="relative pt-2">
        <div className="animate-marquee-left flex gap-4">
          {[...tickerLogos, ...tickerLogos, ...tickerLogos].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`ticker-${index}`}
                className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white min-w-[180px] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)] group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-white leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[10px] text-slate-400">
                    {tech.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
