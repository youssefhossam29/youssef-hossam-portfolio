"use client";

import React from "react";
import { Server, Database, Layout, ShieldCheck, Code2, Zap } from "lucide-react";

const tickerLogos = [
  { name: "Laravel", icon: Server },
  { name: "PHP 8+", icon: Code2 },
  { name: "MySQL", icon: Database },
  { name: "WordPress", icon: Layout },
  { name: "WooCommerce", icon: Zap },
  { name: "Redis", icon: Zap },
  { name: "RESTful APIs", icon: Server },
  { name: "Docker", icon: Server },
  { name: "WebSockets", icon: Zap },
  { name: "ACF Pro", icon: Code2 },
  { name: "OWASP Security", icon: ShieldCheck },
];

export default function TechMarquee() {
  return (
    <section className="page-section overflow-hidden relative border-y border-white/5 bg-[#080C16]">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-16 sm:w-32 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-16 sm:w-32 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <div className="page-container mb-8 sm:mb-10">
        <div className="section-header !mb-6">
          {/* Hover Style 4: Neon Cyber Depth with Inner & Outer Glow */}
          <span
            style={{ padding: "8px 20px" }}
            className="inline-block self-center rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
          >
            Engineering Stack
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
            Specialized Technologies & Core Competencies
          </h2>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Logically structured across backend engineering, commercial e-commerce, cloud infrastructure, and security standards.
          </p>
        </div>
      </div>

      {/* Dynamic Animated Marquee Ribbons */}
      <div className="relative flex flex-col gap-4 sm:gap-5 pt-4 pb-2">
        {/* Ribbon 1: Left */}
        <div className="animate-marquee-left flex gap-5">
          {[...tickerLogos, ...tickerLogos, ...tickerLogos].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`ticker-top-${index}`}
                style={{ padding: "10px" }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white min-w-[170px] sm:min-w-[190px] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/20 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.25)] group"
              >
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-tight text-center">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>

        {/* Ribbon 2: Right (Reverse Direction) */}
        <div className="animate-marquee-right flex gap-5">
          {[...tickerLogos, ...tickerLogos, ...tickerLogos].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`ticker-bottom-${index}`}
                style={{ padding: "10px" }}
                className="flex items-center justify-center gap-3 rounded-2xl bg-white/[0.03] border border-white/10 text-white min-w-[170px] sm:min-w-[190px] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/20 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.25)] group"
              >
                <div className="p-2.5 rounded-lg bg-[var(--color-primary)]/15 text-[var(--color-primary-light)] group-hover:scale-105 transition-transform flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-white leading-tight text-center">
                  {tech.name}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
