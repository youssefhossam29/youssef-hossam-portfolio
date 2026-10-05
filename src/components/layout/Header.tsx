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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "glass-header py-3 sm:py-3.5 min-h-[66px] shadow-lg shadow-black/25"
            : "bg-transparent py-4 sm:py-5 min-h-[76px]"
        }`}
      >
        <div className="page-container flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none"
            aria-label="Youssef Hossam Homepage"
          >
            <div className="relative w-auto h-10 sm:h-11 md:h-12 flex items-center transition-transform duration-200 group-hover:scale-105">
              <Image
                src={siteConfig.logos.header}
                alt={siteConfig.brand.name}
                width={260}
                height={60}
                priority
                className="h-9 sm:h-10 md:h-11 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation Links Container */}
          <nav className="hidden md:flex items-center gap-1.5 p-1.5 rounded-2xl bg-[rgba(17,24,39,0.85)] border border-white/10 backdrop-blur-xl shadow-lg shadow-black/25">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    isActive
                      ? "bg-[var(--color-primary)] text-white shadow-md shadow-[var(--color-primary)]/40 font-bold"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Controls & CTA (Desktop) */}
          <div className="hidden md:flex items-center gap-2.5">
            {/* Language Switcher */}
            <button
              onClick={toggleLang}
              className="h-10 px-3 flex items-center gap-2 rounded-xl text-xs font-bold uppercase tracking-wider bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-[var(--color-text)] transition-all duration-200 shadow-sm"
              title="Toggle Language"
              aria-label="Toggle Language"
            >
              <Globe className="w-3.5 h-3.5 text-[var(--color-primary-light)]" />
              <span>{lang}</span>
            </button>

            {/* Dark / Light Mode Toggle */}
            <button
              onClick={toggleTheme}
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

            {/* CV Download Button */}
            <a
              href={siteConfig.brand.cvPath}
              download="Youssef-Hossam-Software-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-primary !py-2.5 !px-5"
            >
              <Download className="w-4 h-4 text-white" />
              <span>Download CV</span>
            </a>
          </div>

          {/* Mobile Right Controls: Lang + Theme + Hamburger */}
          <div className="flex md:hidden items-center gap-2.5">
            <button
              onClick={toggleLang}
              className="h-10 px-3 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white"
            >
              {lang}
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
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
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
        {/* Top Bar inside Sidebar: Generous Height & Padding from Top, Right, Left */}
        <div className="flex items-center justify-between border-b border-white/10 pt-8 pb-6 px-6 sm:px-8 min-h-[96px]">
          <Link
            href="/"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center gap-2"
          >
            <Image
              src={siteConfig.logos.header}
              alt={siteConfig.brand.name}
              width={280}
              height={66}
              className="h-13 sm:h-14 w-auto object-contain"
            />
          </Link>

          {/* Close Button: Square with Border-Radius & Comfortable Padding */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-white transition-all duration-200 shadow-sm"
            aria-label="Close Menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Center Navigation Links + CV Button placed right under Contact (Not Full Width) */}
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-8">
          <nav className="flex flex-col items-center justify-center gap-6 w-full">
            {siteConfig.nav.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-2xl font-bold tracking-tight transition-all duration-200 ${
                    isActive
                      ? "text-[var(--color-primary-light)] font-extrabold scale-105"
                      : "text-white/80 hover:text-white hover:scale-105"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* CV Download Button - Standardized with Unified Padding, Font Size & Hover Animation */}
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

        {/* Bottom Bar: Extra Controls for Mobile Drawer */}
        <div className="border-t border-white/10 p-6 flex items-center justify-between text-xs text-[var(--color-text-dim)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for Opportunities</span>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={toggleLang}
              className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-white font-semibold"
            >
              {lang}
            </button>
            <button
              onClick={toggleTheme}
              className="p-1.5 rounded-lg bg-white/5 border border-white/10 text-white"
            >
              {theme === "dark" ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-400" />}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
