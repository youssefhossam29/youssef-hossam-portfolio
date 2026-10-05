"use client";

import React, { useState } from "react";
import { projectsData, projectCategories, ProjectCategory } from "@/data/projects";
import ProjectCard from "@/components/common/ProjectCard";
import { Layers, Sparkles } from "lucide-react";

export default function ProjectsPage() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("All");

  const filteredProjects =
    selectedCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen py-12 md:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/20">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Proven Track Record</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
          Real Projects Driving Tangible Business Outcomes
        </h1>

        <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
          Live production platforms, high-conversion ecommerce storefronts, and bespoke digital experiences engineered for forward-moving businesses.
        </p>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2.5 mb-14">
        {projectCategories.map((category) => {
          const isSelected = selectedCategory === category;
          const count =
            category === "All"
              ? projectsData.length
              : projectsData.filter((p) => p.category === category).length;

          return (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                isSelected
                  ? "bg-[var(--color-primary)] text-white shadow-lg shadow-[var(--color-primary)]/30 border border-white/20 scale-105"
                  : "bg-white/5 hover:bg-white/10 text-[var(--color-text-muted)] hover:text-white border border-white/10"
              }`}
            >
              <span>{category}</span>
              <span
                className={`px-2 py-0.5 rounded-full text-xs ${
                  isSelected ? "bg-white/20 text-white font-bold" : "bg-white/5 text-[var(--color-text-dim)]"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Bottom Summary Bar */}
      <div className="mt-16 p-6 rounded-2xl glass-card text-center text-sm text-[var(--color-text-muted)] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-[var(--color-primary-light)]" />
          <span>
            Showing <strong className="text-white">{filteredProjects.length}</strong> of{" "}
            <strong className="text-white">{projectsData.length}</strong> enterprise web applications
          </span>
        </div>
        <p className="text-xs text-[var(--color-text-dim)]">
          All projects are live in production or deployed for verified clients.
        </p>
      </div>
    </div>
  );
}
