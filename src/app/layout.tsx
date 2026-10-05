import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: "Youssef Hossam — Backend Engineer | Laravel, PHP & WordPress",
  description:
    "Backend Engineer specializing in Laravel, PHP, RESTful APIs, and custom WordPress & WooCommerce architectures. Building scalable backend solutions and high-converting commercial web platforms.",
  keywords: [
    "Youssef Hossam",
    "Software Engineer",
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "WordPress Specialist",
    "WooCommerce",
    "RESTful APIs",
    "MySQL Database Optimization",
    "Redis Caching",
    "Web Development Alexandria Egypt",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  alternates: {
    canonical: siteConfig.brand.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.brand.url,
    title: "Youssef Hossam — Backend Engineer | Laravel, PHP & WordPress",
    description:
      "Backend Engineer specializing in scalable Laravel APIs, database architecture, and custom high-converting WordPress & WooCommerce platforms.",
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/images/youssef-hero-grid.png",
        width: 1200,
        height: 630,
        alt: "Youssef Hossam — Software Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youssef Hossam — Backend Engineer | Laravel, PHP & WordPress",
    description:
      "Backend Engineer specializing in scalable Laravel APIs, database architecture, and custom high-converting WordPress & WooCommerce platforms.",
    images: ["/images/youssef-hero-grid.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.brand.name,
    jobTitle: "Backend Software Engineer",
    description: siteConfig.brand.shortBio,
    url: siteConfig.brand.url,
    sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    knowsAbout: [
      "PHP",
      "Laravel",
      "RESTful APIs",
      "MySQL",
      "Redis",
      "WordPress",
      "WooCommerce",
      "Docker",
    ],
  };

  return (
    <html lang="en" className="dark" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col justify-between selection:bg-[var(--color-primary)] selection:text-white"
      >
        <Header />
        <main className="flex-grow pt-24 sm:pt-28">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
