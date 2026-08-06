"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Sparkles, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProjectDetailProps = {
  title: string;
  subtitle: string;
  category: string;
  githubUrl: string;
  liveUrl?: string;
  technologies: string[];
  highlights: string[];
  description?: string;
  additionalReferences?: { label: string; url: string }[];
};

export const ProjectDetailView: React.FC<ProjectDetailProps> = ({
  title,
  subtitle,
  category,
  githubUrl,
  liveUrl,
  technologies,
  highlights,
  description,
  additionalReferences,
}) => {
  const router = useRouter();

  return (
    <div className="min-h-[calc(100vh-80px)] section-shell py-12 flex flex-col justify-center items-center">
      <div className="w-full max-w-4xl">
        {/* Back navigation button */}
        <div className="mb-6">
          <Button
            onClick={() => router.back()}
            variant="ghost"
            className="group rounded-full hover:bg-secondary text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={16} className="mr-2 transition-transform group-hover:-translate-x-1" />
            Back to Projects
          </Button>
        </div>

        {/* Main Glass Card */}
        <div className="surface-panel p-6 sm:p-10 relative overflow-hidden border border-border/80 shadow-2xl backdrop-blur-2xl">
          {/* Top ambient highlight glow */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Header section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 border-b border-border/60 pb-6 relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-3">
                <Sparkles size={13} />
                {category}
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">{title}</h1>
              <p className="text-base text-muted-foreground mt-2 font-medium leading-relaxed">{subtitle}</p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              {liveUrl && (
                <Button asChild className="rounded-full px-5 bg-primary hover:bg-primary/90 text-primary-foreground shadow-md transition hover:scale-105">
                  <Link href={liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={16} className="mr-2" />
                    Live Demo
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" className="rounded-full px-5 hover:bg-secondary transition hover:scale-105">
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} className="mr-2" />
                  GitHub Code
                </Link>
              </Button>
            </div>
          </div>

          {/* Technologies badge cloud */}
          <div className="mt-6 relative z-10">
            <h2 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Technologies & Infrastructure
            </h2>
            <div className="flex flex-wrap gap-2">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary/80 px-3.5 py-1 text-xs font-semibold text-foreground border border-border/60 shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Overview Description if present */}
          {description && (
            <div className="mt-8 relative z-10">
              <h2 className="text-xl font-semibold text-foreground mb-3">About this Project</h2>
              <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
            </div>
          )}

          {/* Architecture Highlights */}
          {highlights.length > 0 && (
            <div className="mt-8 space-y-4 relative z-10">
              <h2 className="text-xl font-semibold text-foreground">Key Highlights & Engineering Focus</h2>
              <ul className="space-y-3">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground text-base leading-relaxed">
                    <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional References */}
          {additionalReferences && additionalReferences.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/60 relative z-10">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                Additional References & Links
              </h2>
              <div className="flex flex-wrap gap-3">
                {additionalReferences.map((ref, index) => (
                  <Link
                    key={index}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                  >
                    <ExternalLink size={14} />
                    {ref.label}
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Back Button */}
          <div className="mt-10 pt-6 border-t border-border/60 flex justify-between items-center relative z-10">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="rounded-full px-6"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
