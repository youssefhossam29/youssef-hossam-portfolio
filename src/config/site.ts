/**
 * Centralized Design System & Configuration (Single Source of Truth)
 * =================================================================
 * All colors, typography, logos, brand voice, contact info, social links,
 * and navigation can be configured from this single file.
 */

export const siteConfig = {
  // Brand & Identity
  brand: {
    name: "Youssef Hossam",
    firstName: "Youssef",
    lastName: "Hossam",
    title: "Software Engineer",
    specialty: "Backend Engineer (Laravel & PHP) & WordPress Specialist",
    shortBio:
      "Passionate Software Engineer dedicated to engineering scalable web architectures with Laravel, high-throughput APIs, and high-converting WordPress platforms.",
    slogan:
      "Engineering growth. From WordPress to Laravel — Building scalable backends and high-converting web solutions.",
    location: "Alexandria, Egypt (Available for Remote & Relocation)",
    email: "youssefhossam2902@gmail.com",
    phone: "(+20) 1279932792",
    url: "https://youssefhossam.dev",
    whatsappNumber: "201279932792",
    whatsappUrl: "https://wa.me/201279932792",
    cvPath: "/files/Youssef Hossam.pdf",
    status: {
      isAvailable: true,
      text: "Available for Opportunities",
    },
  },

  // Social Links
  social: {
    github: "https://github.com/youssefhossam29",
    linkedin: "https://linkedin.com/in/youssef-hossam",
    whatsapp: "https://wa.me/201279932792",
    email: "mailto:youssefhossam2902@gmail.com",
  },

  // Navigation Links
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Contact", href: "/contact" },
  ],

  // Logos (Switchable easily from here)
  logos: {
    // Header Avatar Logo (Default: new modern sticker style)
    header: "/logo/logo-avatar-new.svg",
    headerDark: "/logo/logo-avatar-new-dark.png",
    headerOriginal: "/logo/logo-avatar.svg",
    // Wordmark logos
    wordmarkPrimary: "/logo/logo-wordmark-primary.svg",
    wordmarkAccent: "/logo/logo-wordmark.svg",
    // Badges
    badgePrimary: "/logo/youssef-badge-primary-new.png",
    badgeAccent: "/logo/youssef-badge-accent-new.png",
    badgeDual: "/logo/youssef-badge-dual-new.png",
    // Reference / Hero Art (Youssef Hossam Modular Grid Portrait)
    heroArt: "/images/youssef-hero-grid.png",
  },

  // Design Tokens (Colors, Typography, Glassmorphism, Radii)
  theme: {
    colors: {
      primary: "#0649C1", // Royal Blue
      primaryHover: "#2563EB", // Electric Blue
      primaryLight: "#3B82F6", // Bright Blue for glowing text
      accent: "#676CDB", // Iris Violet
      accentHover: "#7B80E6", // Bright Iris
      accentGlow: "rgba(103, 108, 219, 0.35)",
      lavenderTint: "#EDEBFF", // Soft Lavender

      // Dark Mode (Default)
      bgDark: "#0B1120", // Deep Space Navy
      surfaceDark: "#111827", // Gray-900
      surfaceDarkElevated: "#1E293B", // Slate-800
      borderDark: "rgba(255, 255, 255, 0.08)",
      borderGlow: "rgba(103, 108, 219, 0.3)",
      textPrimary: "#F8FAFC", // Slate-50
      textSecondary: "#94A3B8", // Slate-400
      textDim: "#64748B", // Slate-500

      // Light Mode (Ready for activation)
      bgLight: "#F8FAFC",
      surfaceLight: "#FFFFFF",
      borderLight: "#E2E8F0",
      textPrimaryLight: "#0F172A",
      textSecondaryLight: "#64748B",

      // Functional
      success: "#10B981", // Emerald
      whatsapp: "#25D366", // WhatsApp Green
      danger: "#EF4444", // Rose Red
    },

    glassmorphism: {
      headerBg: "rgba(11, 17, 32, 0.80)",
      headerBorder: "rgba(255, 255, 255, 0.08)",
      cardBg: "rgba(17, 24, 39, 0.70)",
      cardBorder: "rgba(255, 255, 255, 0.08)",
      blur: "16px",
    },

    typography: {
      fontFamilySans:
        "'Plus Jakarta Sans', system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
      fontFamilyHeading: "'Plus Jakarta Sans', sans-serif",
    },

    radii: {
      sm: "6px",
      md: "10px",
      lg: "16px",
      xl: "24px",
      full: "9999px",
    },
  },
} as const;

export type SiteConfig = typeof siteConfig;
