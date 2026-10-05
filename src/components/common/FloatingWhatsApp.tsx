"use client";

import React from "react";
import { siteConfig } from "@/config/site";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="Direct Chat Support"
      className="fixed bottom-6 right-6 z-40"
    >
      <a
        href={siteConfig.brand.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat directly on WhatsApp"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 pulse-whatsapp focus:outline-none"
      >
        <MessageCircle className="w-7 h-7 fill-white stroke-none" />

        {/* Hover Tooltip */}
        <span
          role="tooltip"
          className="absolute right-16 top-1/2 -translate-y-1/2 px-3 py-1.5 rounded-lg bg-[#111827] text-white text-xs font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10 shadow-xl"
        >
          Chat with Youssef
        </span>
      </a>
    </aside>
  );
}
