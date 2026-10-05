import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.brand.url),
  title: `${siteConfig.brand.name} | ${siteConfig.brand.title}`,
  description: siteConfig.brand.shortBio,
  keywords: [
    "Youssef Hossam",
    "Software Engineer",
    "Backend Developer",
    "Laravel Developer",
    "PHP Developer",
    "WordPress Specialist",
    "WooCommerce",
    "RESTful APIs",
    "Web Development Alexandria Egypt",
  ],
  authors: [{ name: siteConfig.brand.name }],
  creator: siteConfig.brand.name,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.brand.url,
    title: `${siteConfig.brand.name} | ${siteConfig.brand.title}`,
    description: siteConfig.brand.shortBio,
    siteName: siteConfig.brand.name,
    images: [
      {
        url: "/images/home-persolan-image.png",
        width: 1200,
        height: 630,
        alt: `${siteConfig.brand.name} Portfolio`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.brand.name} | ${siteConfig.brand.title}`,
    description: siteConfig.brand.shortBio,
    images: ["/images/home-persolan-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-[#0B1120] text-[#F8FAFC] flex flex-col justify-between selection:bg-[var(--color-primary)] selection:text-white">
        <Header />
        <main className="flex-grow pt-24">{children}</main>
        <FloatingWhatsApp />
        <Footer />
      </body>
    </html>
  );
}
