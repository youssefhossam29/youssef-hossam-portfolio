import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#070B14] border-t border-white/10 pt-16 pb-12 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand & Slogan */}
          <div className="space-y-5">
            <Link href="/" className="inline-block">
              <Image
                src={siteConfig.logos.header}
                alt={siteConfig.brand.name}
                width={200}
                height={48}
                className="h-10 w-auto"
              />
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
              {siteConfig.brand.slogan}
            </p>
            <div className="pt-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {siteConfig.brand.status.text}
              </span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="space-y-5">
              {siteConfig.nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors flex items-center gap-1 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-light)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact & Social Links (Combined with 20px gaps and padded icons) */}
          <div className="space-y-5">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact & Networks
            </h4>
            <ul className="space-y-5 text-sm text-[var(--color-text-muted)]">
              <li className="flex items-start gap-3">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-[var(--color-primary-light)] shrink-0 mt-0.5">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>{siteConfig.brand.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-[var(--color-primary-light)] shrink-0">
                  <Mail className="w-4 h-4" />
                </span>
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.brand.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="p-1.5 rounded-lg bg-white/5 border border-white/5 text-[var(--color-primary-light)] shrink-0">
                  <Phone className="w-4 h-4" />
                </span>
                <a
                  href={`tel:${siteConfig.brand.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.brand.phone}
                </a>
              </li>
            </ul>

            {/* Padded Social Icons with 20px gap and rounded-xl */}
            <div className="pt-4 border-t border-white/10">
              <div className="flex items-center gap-5">
                <a
                  href={siteConfig.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 hover:border-emerald-500 transition-all hover:-translate-y-0.5"
                  aria-label="WhatsApp Message"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={siteConfig.social.email}
                  className="p-3 rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-primary-light)] transition-all hover:-translate-y-0.5"
                  aria-label="Direct Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Attribution */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[var(--color-text-dim)] gap-4">
          <p>© {currentYear} {siteConfig.brand.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Engineered with <span className="text-rose-500 font-bold">Next.js</span> & Clean Architecture.
          </p>
        </div>
      </div>
    </footer>
  );
}
