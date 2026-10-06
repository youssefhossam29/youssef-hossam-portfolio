import React from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { GithubIcon, LinkedinIcon, WhatsAppIcon } from "@/components/common/Icons";

export default function Footer() {
  return (
    <footer style={{ padding: "20px" }} className="relative bg-[#070B14] border-t border-white/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-[var(--color-primary)]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[var(--color-accent)]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative page-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {/* Column 1: Brand & Slogan (Centered on mobile, left on desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 sm:gap-6">
            <Link href="/" className="inline-flex items-center justify-center md:justify-start" aria-label="Youssef Hossam Homepage">
              <Image
                src={siteConfig.logos.header}
                alt={siteConfig.brand.name}
                width={340}
                height={85}
                className="h-16 sm:h-18 md:h-20 lg:h-[72px] w-auto object-contain"
              />
            </Link>
            <p className="text-sm text-[var(--color-text-muted)] leading-relaxed max-w-sm">
              {siteConfig.brand.slogan}
            </p>
          </div>

          {/* Column 2: Quick Links (Centered on mobile, left on desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-4 sm:gap-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Quick Navigation
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-3 w-full">
              {siteConfig.nav.map((item) => (
                <li key={item.href} className="w-full flex justify-center md:justify-start">
                  <Link
                    href={item.href}
                    className="text-sm text-[var(--color-text-muted)] hover:text-white transition-colors flex items-center justify-center md:justify-start gap-1.5 group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-[var(--color-primary-light)]" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Direct Contact & Social Links (Centered on mobile, left on desktop) */}
          <div className="flex flex-col items-center text-center md:items-start md:text-left gap-5 sm:gap-6">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white">
              Direct Contact & Networks
            </h4>
            <ul className="flex flex-col items-center md:items-start gap-3 text-sm text-[var(--color-text-muted)] w-full">
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0">
                  <MapPin className="w-4 h-4" />
                </span>
                <span>{siteConfig.brand.location}</span>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0">
                  <Mail className="w-4 h-4" />
                </span>
                <a
                  href={`mailto:${siteConfig.brand.email}`}
                  className="hover:text-white transition-colors"
                >
                  {siteConfig.brand.email}
                </a>
              </li>
              <li className="flex items-center justify-center md:justify-start gap-3">
                <span className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0">
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

            {/* Padded Social Icons with 0 border */}
            <div className="pt-2 border-0 flex justify-center md:justify-start w-full">
              <div className="flex items-center justify-center md:justify-start gap-4">
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
          </div>
        </div>
      </div>
    </footer>
  );
}
