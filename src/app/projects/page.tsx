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
    <div className="relative">
      <section className="page-section">
        <div className="page-container">

          {/* Page Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-5 pt-8">
            <div
              style={{ padding: "8px 20px" }}
              className="inline-flex items-center gap-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[var(--color-primary)]/10 text-[var(--color-primary-light)] border border-[var(--color-primary)]/25 cursor-pointer transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[var(--color-primary)]/25 hover:border-white/50 hover:shadow-[0_0_24px_rgba(59,130,246,0.5),inset_0_0_12px_rgba(59,130,246,0.3)]"
            >
              <span>Proven Track Record</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight">
              Real Projects Driving Tangible Business Outcomes
            </h1>

            <p className="text-base sm:text-lg text-[var(--color-text-muted)] leading-relaxed">
              Live production platforms, high-conversion ecommerce storefronts, and bespoke digital experiences engineered for forward-moving businesses.
            </p>
          </div>

          {/* Category Filter (20px gap between category elements) */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
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
                  className={`btn-base ${
                    isSelected
                      ? "btn-primary shadow-lg shadow-[var(--color-primary)]/25 scale-105"
                      : "btn-outline text-[var(--color-text-muted)]"
                  }`}
                >
                  <span>{category}</span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs ${
                      isSelected ? "bg-white/20 text-white font-bold" : "bg-white/10 text-[var(--color-text-dim)]"
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

          {/* Summary Bar (20px spacing) */}
          <div className="mt-14 p-6 sm:p-7 rounded-2xl glass-card text-center text-sm text-[var(--color-text-muted)] flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-primary-light)] shrink-0 bg-transparent border-0">
                <Layers className="w-5 h-5" />
              </span>
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
      </section>
    </div>
  );
}
