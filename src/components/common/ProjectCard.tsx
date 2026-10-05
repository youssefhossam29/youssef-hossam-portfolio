"use client";

import React from "react";
import Image from "next/image";
import { Project } from "@/data/projects";
import { ArrowUpRight, Globe, Layers, MapPin } from "lucide-react";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="glass-card group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5">
      {/* Mac Browser Mini Top Bar (Matching project-info.png) */}
      <div className="flex items-center justify-between px-4 py-3 bg-[rgba(11,17,32,0.9)] border-b border-white/10 select-none">
        {/* Mac OS Window Dots */}
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/90" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]/90" />
        </div>

        {/* Center URL Pill */}
        <div className="px-3 py-0.5 rounded-full bg-white/5 border border-white/10 text-[11px] font-mono text-[var(--color-text-muted)] flex items-center gap-1 max-w-[180px] sm:max-w-[220px] truncate">
          <Globe className="w-3 h-3 text-[var(--color-primary-light)] shrink-0" />
          <span className="truncate">{project.title.toLowerCase().replace(/[^a-z0-9]/g, "")}.com</span>
        </div>

        {/* Live Status Badge */}
        <div className="flex items-center gap-1 text-[11px] font-semibold text-emerald-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          <span className="hidden sm:inline">Live</span>
        </div>
      </div>

      {/* Project Screenshot Display */}
      <div className="relative w-full aspect-[16/10] bg-[#0A0E17] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111827] via-transparent to-transparent opacity-60" />
      </div>

      {/* Card Content & Details (Clean hierarchy: Category -> Title -> Outcome Description -> Tech -> Live Button) */}
      <div className="relative p-5 sm:p-6 flex-1 flex flex-col justify-between space-y-4">
        <div className="space-y-3">
          {/* Metadata Badges: Category, Country, Industry */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/20 text-[var(--color-primary-light)] border border-[var(--color-primary)]/30">
              {project.category}
            </span>
            <span className="flex items-center gap-1.5 text-xs text-slate-400 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
              <MapPin className="w-3 h-3 text-[var(--color-primary-light)]" />
              <span>{project.country}</span>
            </span>
            <span className="text-xs text-slate-500">•</span>
            <span className="text-xs text-slate-400 flex items-center gap-1.5 bg-white/5 px-2 py-0.5 rounded-md border border-white/5">
              <Layers className="w-3 h-3 text-[var(--color-accent)]" />
              <span>{project.industry}</span>
            </span>
          </div>

          {/* Project Title */}
          <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-[var(--color-primary-light)] transition-colors">
            {project.title}
          </h3>

          {/* Outcome-Oriented Description */}
          <p className="text-sm text-slate-300 line-clamp-2 leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* Footer: Key Tech Tags & Live Project Link Button */}
        <div className="flex items-center justify-between pt-3 border-t border-white/10 gap-3">
          <div className="flex flex-wrap items-center gap-1.5 flex-1">
            {project.tools.slice(0, 4).map((tool) => (
              <span
                key={tool}
                className="px-2 py-0.5 rounded-md text-[11px] font-semibold bg-white/5 text-slate-300 border border-white/8"
              >
                {tool}
              </span>
            ))}
          </div>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`View live deployment for ${project.title}`}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-hover)] transition-all hover:scale-105 shadow-md shadow-[var(--color-primary)]/20 shrink-0 border border-white/15"
            >
              <span>Live Site</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
