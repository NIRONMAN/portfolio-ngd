"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github, Sparkles, Code2, Bot, Layers, Smartphone } from "lucide-react";

type Project = {
  title: string;
  description: string;
  imageUrl?: string;
  gitHubLink: string;
  route?: string;
  liveUrl?: string;
  isDynamic?: boolean;
  tags: string[];
  category: "AI & Cloud" | "Full Stack" | "Mobile App";
};

type GitHubRepo = {
  name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  has_pages: boolean;
  updated_at: string;
  language: string | null;
};

const GITHUB_USERNAME = "NIRONMAN";
const EXCLUDED_REPO_NAME = "portfolio-ngd";

const curatedProjects: Project[] = [
  {
    title: "Learnability AI 2.0",
    description:
      "AI-driven educational platform processing large docs via LlamaParse & LangChain RAG pipeline (handling 1,000+ concurrent queries), interactive Mermaid mind maps, and FFmpeg video pipelines.",
    imageUrl: "/Logo.svg",
    gitHubLink: "https://github.com/NIRONMAN/Learnability_2.0",
    route: "/Learnability2.0",
    tags: ["Next.js", "Flask", "LangChain", "RAG", "Firebase"],
    category: "AI & Cloud",
  },
  {
    title: "InfectiGuard",
    description:
      "Offline-first hospital ICU monitoring & audit mobile platform with biomedical waste tracking, Firebase Firestore syncing, and automated Excel reporting.",
    imageUrl: "/programmer.png",
    gitHubLink: "https://github.com/NIRONMAN/InfectiGuard",
    route: "/InfectiGuard",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
    category: "Mobile App",
  },
  {
    title: "High Blogs",
    description:
      "A full-stack blogging platform where users can create and read posts on a scalable Cloudflare Workers serverless architecture.",
    imageUrl: "/blog.avif",
    gitHubLink: "https://github.com/NIRONMAN/High-Blogs",
    route: "/High-Blogs",
    tags: ["React", "Cloudflare Workers", "Prisma", "PostgreSQL"],
    category: "Full Stack",
  },
  {
    title: "Niropay",
    description:
      "A payments-focused application inspired by modern wallet products, supporting person-to-person transfers and transactional safety.",
    imageUrl: "/niropay.jpg",
    gitHubLink: "https://github.com/NIRONMAN/Niropay",
    route: "/Niropay",
    tags: ["Fintech", "Node.js", "MongoDB", "Express"],
    category: "Full Stack",
  },
];

function normalizeHomepage(homepage: string | null): string | null {
  if (!homepage) return null;
  const trimmed = homepage.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const categories = ["All Work", "AI & Cloud", "Full Stack", "Mobile App"] as const;

function Projects() {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All Work");

  useEffect(() => {
    let isMounted = true;

    const loadHostedProjects = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
        );
        if (!response.ok) return;

        const repos = (await response.json()) as GitHubRepo[];

        const hostedProjects: Project[] = repos
          .filter((repo) => repo.name.toLowerCase() !== EXCLUDED_REPO_NAME)
          .filter((repo) => Boolean(normalizeHomepage(repo.homepage)) || repo.has_pages)
          .sort((a, b) => {
            const first = new Date(b.updated_at).getTime();
            const second = new Date(a.updated_at).getTime();
            return first - second;
          })
          .map((repo) => {
            const homepage = normalizeHomepage(repo.homepage);
            const liveUrl = homepage ?? `https://${GITHUB_USERNAME.toLowerCase()}.github.io/${repo.name}`;
            const dynamicTags = [repo.language, "Hosted"].filter(Boolean) as string[];

            return {
              title: repo.name,
              description: repo.description ?? "Hosted project from my GitHub repositories.",
              gitHubLink: repo.html_url,
              liveUrl,
              isDynamic: true,
              tags: dynamicTags.length > 0 ? dynamicTags : ["Hosted"],
              category: "Full Stack",
            };
          });

        if (isMounted) {
          setGithubProjects(hostedProjects);
        }
      } catch {
        // Keep only curated cards when GitHub API request fails.
      }
    };

    loadHostedProjects();

    return () => {
      isMounted = false;
    };
  }, []);

  const projects = useMemo(() => {
    const seen = new Set<string>();
    const merged: Project[] = [];

    for (const project of curatedProjects) {
      seen.add(project.gitHubLink.toLowerCase());
      seen.add(project.title.toLowerCase());
      merged.push(project);
    }

    for (const project of githubProjects) {
      const githubKey = project.gitHubLink.toLowerCase();
      const titleKey = project.title.toLowerCase();
      if (seen.has(githubKey) || seen.has(titleKey)) continue;

      seen.add(githubKey);
      seen.add(titleKey);
      merged.push(project);
    }

    if (selectedCategory === "All Work") return merged;
    return merged.filter((p) => p.category === selectedCategory);
  }, [githubProjects, selectedCategory]);

  return (
    <div className="section-shell">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <p className="section-kicker">
            <Sparkles size={14} />
            Featured Projects
          </p>
          <h2 className="section-title">Selected work focused on real-world utility.</h2>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-1.5 rounded-full border border-border/60 bg-secondary/40 p-1.5 backdrop-blur-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-full px-4 py-1.5 text-xs font-bold transition-all duration-200 ${
                selectedCategory === cat
                  ? "bg-primary text-primary-foreground shadow-md scale-105"
                  : "text-muted-foreground hover:text-foreground hover:bg-background/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.title}
            className="surface-panel overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:-translate-y-1.5"
          >
            <div>
              {/* Image banner */}
              <div className="relative h-52 w-full border-b border-border/60 bg-gradient-to-br from-secondary/60 to-card p-6 overflow-hidden">
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {project.imageUrl ? (
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-contain p-6 transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                ) : (
                  <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-border/80 bg-background/60">
                    <span className="text-4xl font-extrabold tracking-wider text-muted-foreground/60">
                      {project.title.charAt(0).toUpperCase()}
                    </span>
                  </div>
                )}
                <span className="absolute top-3 right-3 rounded-full bg-background/80 px-3 py-1 text-[11px] font-bold text-primary border border-border/60 shadow-sm backdrop-blur-md">
                  {project.category}
                </span>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-semibold text-foreground border border-border/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Card Actions Footer */}
            <div className="px-6 pb-6 pt-2 flex items-center gap-3">
              {project.route ? (
                <Link
                  href={project.route}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 hover:scale-[1.02]"
                >
                  View Details & Specs
                  <ArrowUpRight size={15} />
                </Link>
              ) : (
                <Link
                  href={project.liveUrl ?? project.gitHubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-xs font-semibold text-primary-foreground shadow-md transition hover:bg-primary/90 hover:scale-[1.02]"
                >
                  Visit Live Project
                  <ArrowUpRight size={15} />
                </Link>
              )}
              <Link
                href={project.gitHubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border/80 px-4 py-2.5 text-xs font-semibold text-foreground transition hover:bg-secondary hover:scale-[1.02]"
              >
                <Github size={15} />
                Code
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;

