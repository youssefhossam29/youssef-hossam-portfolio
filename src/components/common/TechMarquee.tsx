"use client";

import React from "react";
import { techMarqueeLogos } from "@/data/about";
import { Code2, Server, Database, Layout, ShieldCheck, Zap } from "lucide-react";

const row1 = [
  { name: "Laravel", tag: "Backend Framework", icon: Server },
  { name: "PHP 8+", tag: "Core Language", icon: Code2 },
  { name: "MySQL", tag: "Relational DB", icon: Database },
  { name: "WordPress", tag: "CMS Architecture", icon: Layout },
  { name: "WooCommerce", tag: "E-Commerce", icon: Zap },
  { name: "Redis", tag: "In-Memory Cache", icon: Zap },
];

const row2 = [
  { name: "RESTful APIs", tag: "Microservices", icon: Server },
  { name: "Tailwind CSS", tag: "Modern Styling", icon: Layout },
  { name: "Docker", tag: "Containerization", icon: Server },
  { name: "WebSockets", tag: "Real-time Protocol", icon: Zap },
  { name: "ACF Pro", tag: "Custom Fields", icon: Code2 },
  { name: "OWASP Security", tag: "API Hardening", icon: ShieldCheck },
];

export default function TechMarquee() {
  return (
    <section className="py-16 overflow-hidden relative border-y border-white/5 bg-[#080C16]">
      {/* Edge gradient masks for smooth fade in/out */}
      <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-48 bg-gradient-to-r from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-48 bg-gradient-to-l from-[var(--color-bg)] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <span className="px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
          Engineering Stack
        </span>
        <h3 className="text-2xl font-bold text-white mt-2">
          Technologies & Tools Driving High-Performance Systems
        </h3>
      </div>

      <div className="space-y-4">
        {/* Row 1: Moves Left */}
        <div className="animate-marquee-left flex gap-4">
          {[...row1, ...row1, ...row1, ...row1].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`row1-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white min-w-[200px] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] text-[var(--color-text-dim)]">
                    {tech.tag}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Row 2: Moves Right (Opposite Direction) */}
        <div className="animate-marquee-right flex gap-4">
          {[...row2, ...row2, ...row2, ...row2].map((tech, index) => {
            const Icon = tech.icon;
            return (
              <div
                key={`row2-${index}`}
                className="flex items-center gap-3 px-5 py-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] border border-white/10 text-white min-w-[200px] transition-all group"
              >
                <div className="p-2 rounded-lg bg-[var(--color-accent)]/20 text-[var(--color-accent)] group-hover:scale-110 transition-transform">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    {tech.name}
                  </h4>
                  <span className="text-[11px] text-[var(--color-text-dim)]">
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
