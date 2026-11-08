"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

export type ProjectDetailProps = {
  title: string;
  subtitle: string;
  category: string;
  githubUrl: string;
  liveUrl?: string;
  imageUrl?: string;
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
  imageUrl,
  technologies,
  highlights,
  description,
  additionalReferences,
}) => {
  const router = useRouter();

  return (
    <div className="section-shell py-12">
      <div className="max-w-3xl mx-auto">
        {/* Back navigation */}
        <div className="mb-6">
          <Button
            onClick={() => router.push("/#projects")}
            variant="ghost"
            size="sm"
            className="text-xs font-mono text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft size={13} className="mr-1.5" />
            Back to Projects
          </Button>
        </div>

        {/* Content Panel */}
        <div className="surface-panel p-6 sm:p-8">
          {imageUrl && (
            <div className="relative h-52 sm:h-64 w-full rounded-xl border border-border/70 bg-gradient-to-b from-indigo-500/10 via-indigo-500/5 to-transparent p-4 mb-6 overflow-hidden dark:border-white/[0.06]">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-contain p-4"
                sizes="(max-width: 768px) 100vw, 768px"
                priority
              />
            </div>
          )}
          <div className="border-b border-border/80 pb-6 dark:border-white/[0.08]">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground font-semibold">
              {category}
            </span>
            <h1 className="mt-2 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
              {title}
            </h1>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground leading-relaxed">
              {subtitle}
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {liveUrl && (
                <Button asChild size="sm" className="rounded-lg text-xs font-semibold">
                  <Link href={liveUrl} target="_blank" rel="noreferrer">
                    <ExternalLink size={13} className="mr-1.5" />
                    Live Application
                  </Link>
                </Button>
              )}
              <Button asChild variant="outline" size="sm" className="rounded-lg text-xs font-semibold">
                <Link href={githubUrl} target="_blank" rel="noreferrer">
                  <Github size={13} className="mr-1.5" />
                  GitHub Repository
                </Link>
              </Button>
            </div>
          </div>

          {/* Technologies */}
          <div className="mt-6">
            <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
              Technologies &amp; Architecture
            </h2>
            <div className="flex flex-wrap gap-1.5">
              {technologies.map((tech) => (
                <span key={tech} className="mono-tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          {description && (
            <div className="mt-8">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-2">
                Overview
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}

          {/* Highlights */}
          {highlights.length > 0 && (
            <div className="mt-8 space-y-3">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold">
                Key Engineering Highlights
              </h2>
              <ul className="space-y-2">
                {highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    <span className="text-foreground font-mono select-none mt-0.5">•</span>
                    <span className="text-foreground">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Additional References */}
          {additionalReferences && additionalReferences.length > 0 && (
            <div className="mt-8 pt-6 border-t border-border/80 dark:border-white/[0.08]">
              <h2 className="font-mono text-xs uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                References
              </h2>
              <div className="flex flex-wrap gap-3">
                {additionalReferences.map((ref, index) => (
                  <Link
                    key={index}
                    href={ref.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-foreground hover:underline"
                  >
                    <ExternalLink size={12} />
                    {ref.label}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
