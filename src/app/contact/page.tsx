"use client";

import React, { useState } from "react";
import { siteConfig } from "@/config/site";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Copy,
  Check,
  MessageCircle,
  Sparkles,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/common/Icons";

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    subject: "Full-Time Backend Opportunity",
    message: "",
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(siteConfig.brand.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative">
      <section className="page-section">
        <div className="page-container">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-5 pt-8">
            <div
              style={{ padding: "8px 20px" }}
              className="inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              <span>Start a Conversation</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Let&apos;s Talk For Your Next Projects
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Whether you have a technical opportunity, need architectural consulting for your backend, or want to launch a high-converting web store, I&apos;m ready to connect.
            </p>
          </div>

          {/* Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

            {/* Left: Contact Info (Padding: 24px - 28px within 15-30px, 20px internal spacing) */}
            <div className="lg:col-span-5 space-y-5">
              <div className="glass-card p-6 sm:p-7 space-y-5">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Contact Information</h2>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed">
                    Feel free to reach out via email or phone. I prioritize fast responses, typically replying within a few hours.
                  </p>
                </div>

                <div className="space-y-5">
                  {/* Location */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0 p-1">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                        Location
                      </h4>
                      <p className="text-sm font-semibold text-white">
                        {siteConfig.brand.location}
                      </p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start justify-between gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div className="flex items-start gap-4">
                      <div className="text-[var(--color-accent)] shrink-0 bg-transparent border-0 p-1">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                          Email Address
                        </h4>
                        <a
                          href={`mailto:${siteConfig.brand.email}`}
                          className="text-sm font-semibold text-white hover:text-[var(--color-primary-light)] transition-colors break-all"
                        >
                          {siteConfig.brand.email}
                        </a>
                      </div>
                    </div>
                    <button
                      onClick={handleCopyEmail}
                      className="p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-white transition-colors shrink-0 border border-white/10"
                      title="Copy email"
                      aria-label="Copy email"
                    >
                      {copied ? (
                        <Check className="w-4 h-4 text-emerald-400" />
                      ) : (
                        <Copy className="w-4 h-4 text-[var(--color-text-muted)]" />
                      )}
                    </button>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-white/[0.03] border border-white/8">
                    <div className="text-emerald-400 shrink-0 bg-transparent border-0 p-1">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)] mb-1">
                        Phone & WhatsApp
                      </h4>
                      <a
                        href={siteConfig.brand.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors"
                      >
                        {siteConfig.brand.phone}
                      </a>
                    </div>
                  </div>
                </div>

                {/* Social Links (20px gap, padded icons with rounded-xl, 0 border) */}
                <div className="pt-2 border-0 space-y-4">
                  <h4 className="text-xs uppercase font-bold tracking-wider text-[var(--color-text-dim)]">
                    Follow My Engineering Work
                  </h4>
                  <div className="flex items-center gap-5">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="GitHub Profile"
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-white border border-white/10 hover:border-[var(--color-accent)] transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="LinkedIn Profile"
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={siteConfig.social.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 text-emerald-400 border border-white/10 hover:border-emerald-500 transition-all hover:-translate-y-0.5 shadow-sm"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form (Padding: 24px - 30px, strictly within 15-30px, 20px internal spacing) */}
            <div className="lg:col-span-7">
              <div className="glass-card p-6 sm:p-7 md:p-7.5 border border-white/10 shadow-2xl space-y-5">
                {isSubmitted ? (
                  <div className="py-16 text-center space-y-5">
                    <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto border border-emerald-500/30">
                      <CheckCircle className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">Message Sent Successfully!</h3>
                    <p className="text-sm text-[var(--color-text-muted)] max-w-md mx-auto">
                      Thank you for reaching out, {formData.fullName}. I have received your message and will review it promptly.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="btn-base btn-outline mt-4"
                    >
                      <span>Send Another Message</span>
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Full Name */}
                      <div className="space-y-2">
                        <label htmlFor="fullName" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Full Name <span className="text-[var(--color-primary-light)]">*</span>
                        </label>
                        <input
                          id="fullName"
                          type="text"
                          required
                          placeholder="e.g. John Doe"
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                        />
                      </div>

                      {/* Email */}
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Email Address <span className="text-[var(--color-primary-light)]">*</span>
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          placeholder="john@company.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Phone */}
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Phone / WhatsApp
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm"
                        />
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                          Subject <span className="text-[var(--color-primary-light)]">*</span>
                        </label>
                        <select
                          id="subject"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-5 py-3.5 rounded-xl bg-[#111827] border border-white/10 text-white focus:outline-none focus:border-[var(--color-primary-light)] transition-all text-sm"
                        >
                          <option value="Full-Time Backend Opportunity">Full-Time Backend Opportunity</option>
                          <option value="Custom WordPress / E-Commerce Project">Custom WordPress / E-Commerce Project</option>
                          <option value="Database / API Architectural Consultation">Database / API Consultation</option>
                          <option value="Freelance Contract Collaboration">Freelance Contract</option>
                          <option value="General Inquiry">General Inquiry</option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[var(--color-text-muted)]">
                        Project Details <span className="text-[var(--color-primary-light)]">*</span>
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell me about your project, timeline, tech stack, and goals..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-5 py-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-[var(--color-text-dim)] focus:outline-none focus:border-[var(--color-primary-light)] focus:ring-1 focus:ring-[var(--color-primary-light)] transition-all text-sm resize-none"
                      />
                    </div>

                    {/* Submit - Unified Button Standards */}
                    <button
                      type="submit"
                      className="btn-base btn-primary shadow-lg shadow-[var(--color-primary)]/25 w-full"
                    >
                      <span>Send Message</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}
