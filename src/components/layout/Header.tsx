"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/config/site";
import { Menu, X, Download, Moon, Sun, Globe } from "lucide-react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [lang, setLang] = useState<"EN" | "AR">("EN");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.setAttribute("data-theme", nextTheme);
  };

  const toggleLang = () => {
    setLang((prev) => (prev === "EN" ? "AR" : "EN"));
  };

  return (
    <>
      <header
        style={{ padding: "10px" }}
        className="sticky top-0 w-full z-50 transition-all duration-200 bg-[#0B1120]/90 backdrop-blur-xl border-b border-white/10"
      >
        <div className="page-container flex items-center justify-between gap-4 sm:gap-6">
          {/* Brand Logo - Increased size, responsive, preserves aspect ratio */}
          <Link
            href="/"
            className="flex items-center focus:outline-none shrink-0"
            aria-label="Youssef Hossam Homepage"
          >
            <div className="relative flex items-center">
              <Image
                src={siteConfig.logos.header}
                alt={siteConfig.brand.name}
                width={320}
                height={80}
                priority
                className="h-14 sm:h-16 md:h-16 lg:h-[62px] w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links Container: transparent background, no border, padding: 8px 40px */}
          <nav
            style={{ padding: "8px 40px" }}
            className="hidden md:flex items-center gap-2.5 bg-transparent border-0"
          >
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{ padding: "8px 16px" }}
                  className={`h-10 inline-flex items-center justify-center rounded-xl text-sm font-semibold transition-all duration-200 border ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/40 font-bold border-white/15"
                      : "text-slate-300 hover:text-white hover:bg-white/10 border-transparent hover:border-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls & CTA (Desktop): All items standardized to same height (h-10) */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              style={{ padding: "8px" }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[var(--color-text)] transition-all duration-200 shadow-sm"
              title={lang === "EN" ? "Switch language to Arabic" : "تغيير اللغة إلى الإنجليزية"}
              aria-label={lang === "EN" ? "Switch to Arabic language" : "Switch to English language"}
            >
              <Globe className="w-4 h-4 text-[var(--color-primary-light)]" />
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
              style={{ padding: "8px" }}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[var(--color-text)] transition-all duration-200 shadow-sm"
              aria-label="Toggle Theme"
              title="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>

            {/* CV Download Button: Same height (h-10) with btn-base btn-primary styling & hover */}
            <a
              href={siteConfig.brand.cvPath}
              download="Youssef-Hossam-Software-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              style={{ padding: "8px 22px" }}
              className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25 !h-10 !rounded-xl text-sm"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang + Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={toggleLang}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
              title="Switch Language"
              aria-label="Switch Language"
            >
              <Globe className="w-4 h-4 text-[var(--color-primary-light)]" />
            </button>
            <button
              onClick={toggleTheme}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
              aria-label="Toggle Theme"
            >
              {theme === "dark" ? (
                <Sun className="w-4 h-4 text-amber-400" />
              ) : (
                <Moon className="w-4 h-4 text-indigo-400" />
              )}
            </button>
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide Menu Drawer with Backdrop and Duration Animation */}
      {/* 1. Backdrop Overlay */}
      <div
        onClick={() => setMobileMenuOpen(false)}
        className={`mobile-backdrop ${mobileMenuOpen ? "open" : ""}`}
        aria-hidden="true"
      />

      {/* 2. Slide Drawer (Slides in/out smoothly from right with animation-duration) */}
      <div className={`mobile-drawer ${mobileMenuOpen ? "open" : ""}`}>
        {/* Top Bar inside Sidebar: padding: 15px & larger logo */}
        <div
          style={{ padding: "15px" }}
          className="flex items-center justify-between border-b border-white/10 min-h-[96px] gap-3"
        >
          <div className="flex items-center gap-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center"
            >
              <Image
                src={siteConfig.logos.header}
                alt={siteConfig.brand.name}
                width={320}
                height={80}
                className="h-20 sm:h-24 w-auto object-contain"
              />
            </Link>

            {/* Language & Theme Controls right next to the Logo */}
            <div className="flex items-center gap-2">
              <button
                onClick={toggleLang}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                title="Switch Language"
                aria-label="Switch Language"
              >
                <Globe className="w-4 h-4 text-[var(--color-primary-light)]" />
              </button>
              <button
                onClick={toggleTheme}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle Theme"
              >
                {theme === "dark" ? (
                  <Sun className="w-4 h-4 text-amber-400" />
                ) : (
                  <Moon className="w-4 h-4 text-indigo-400" />
                )}
              </button>
            </div>
          </div>

          {/* Close Button: Same w-10 h-10 size as Language and Theme buttons */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 shadow-sm shrink-0"
            aria-label="Close Menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Center Navigation Links + CV Button placed right under Contact (font-weight: 400) */}
        <div className="flex-1 flex flex-col items-center justify-center px-8 py-10 sm:px-10">
          <nav className="flex flex-col items-center justify-center gap-6 w-full">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-normal tracking-tight transition-all duration-200 ${
                    isActive
                      ? "text-[var(--color-primary-light)] font-normal scale-105"
                      : "text-white/80 hover:text-white hover:scale-105 font-normal"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CV Download Button */}
            <a
              href={siteConfig.brand.cvPath}
              download="Youssef-Hossam-Software-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-3 btn-base btn-primary w-auto min-w-[180px] max-w-[240px]"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download CV</span>
            </a>
          </nav>
        </div>

        {/* Bottom Bar: padding: 15px */}
        <div
          style={{ padding: "15px" }}
          className="border-t border-white/10 flex items-center justify-center text-xs text-[var(--color-text-dim)]"
        >
          <div className="flex items-center gap-2.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="font-semibold text-slate-300">Available for Opportunities</span>
          </div>
        </div>
      </div>
    </>
  );
}
