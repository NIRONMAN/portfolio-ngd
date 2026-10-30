"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Github } from "lucide-react";

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
  accentColor: "indigo" | "emerald" | "amber" | "violet";
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
      "Enterprise multimodal learning platform parsing complex technical PDFs and textbooks via LlamaParse and LangChain RAG. Features streaming Mermaid mind map generation and FFmpeg media slicing.",
    imageUrl: "/Logo.svg",
    gitHubLink: "https://github.com/NIRONMAN/Learnability_2.0",
    route: "/projects/learnability-ai",
    tags: ["Next.js 14", "Python Flask", "LangChain", "RAG", "Firebase"],
    category: "AI & Cloud",
    accentColor: "indigo",
  },
  {
    title: "InfectiGuard",
    description:
      "Offline-first hospital ICU inspection & biomedical audit mobile application built with React Native and Redux persistence. Syncs conflict-free audit state to Firebase and generates automated Excel compliance reports.",
    imageUrl: "/programmer.png",
    gitHubLink: "https://github.com/NIRONMAN/InfectiGuard",
    route: "/projects/infectiguard",
    tags: ["React Native", "Expo", "Redux", "SQLite", "Firebase"],
    category: "Mobile App",
    accentColor: "emerald",
  },
  {
    title: "High Blogs",
    description:
      "Global serverless blogging platform running on Cloudflare Workers edge nodes with Hono routing, Prisma Accelerate connection pooling, and shared npm packages for end-to-end TypeScript safety.",
    imageUrl: "/blog.avif",
    gitHubLink: "https://github.com/NIRONMAN/High-Blogs",
    route: "/projects/high-blogs",
    liveUrl: "https://high-blogs.pages.dev/",
    tags: ["Cloudflare Workers", "Hono", "Prisma", "PostgreSQL", "React"],
    category: "Full Stack",
    accentColor: "violet",
  },
  {
    title: "Niropay",
    description:
      "Fintech digital wallet application built around atomic multi-document transactions using MongoDB Sessions to guarantee zero double-spends during concurrent peer-to-peer transfers.",
    imageUrl: "/niropay.jpg",
    gitHubLink: "https://github.com/NIRONMAN/Niropay",
    route: "/projects/niropay",
    tags: ["Node.js", "Express", "MongoDB", "Mongoose ACID", "JWT"],
    category: "Full Stack",
    accentColor: "amber",
  },
];

function normalizeHomepage(homepage: string | null): string | null {
  if (!homepage) return null;
  const trimmed = homepage.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

const categories = ["All", "AI & Cloud", "Full Stack", "Mobile App"] as const;

function Projects() {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>("All");

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
            const dynamicTags = [repo.language, "Open Source"].filter(Boolean) as string[];

            return {
              title: repo.name,
              description: repo.description ?? "Hosted open-source repository from GitHub.",
              gitHubLink: repo.html_url,
              liveUrl,
              isDynamic: true,
              tags: dynamicTags.length > 0 ? dynamicTags : ["Open Source"],
              category: "Full Stack",
              accentColor: "indigo",
            };
          });

        if (isMounted) {
          setGithubProjects(hostedProjects);
        }
      } catch {
        // Fallback gracefully
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

    if (selectedCategory === "All") return merged;
    return merged.filter((p) => p.category === selectedCategory);
  }, [githubProjects, selectedCategory]);

  const getTagClass = (color: Project["accentColor"]) => {
    switch (color) {
      case "emerald":
        return "mono-tag-emerald";
      case "amber":
        return "mono-tag-amber";
      case "violet":
        return "mono-tag-violet";
      default:
        return "mono-tag-indigo";
    }
  };

  const getCardTopTint = (color: Project["accentColor"]) => {
    switch (color) {
      case "emerald":
        return "from-emerald-500/10 via-emerald-500/5 to-transparent";
      case "amber":
        return "from-amber-500/10 via-amber-500/5 to-transparent";
      case "violet":
        return "from-purple-500/10 via-purple-500/5 to-transparent";
      default:
        return "from-indigo-500/10 via-indigo-500/5 to-transparent";
    }
  };

  return (
    <div className="section-shell">
      <div className="border-t border-border/80 pt-16 dark:border-white/[0.08]">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="section-kicker">02 / Selected Projects</p>
            <h2 className="section-title">Software &amp; Architecture Work</h2>
            <p className="section-subtitle">
              Systems designed for verifiable utility, clean data flow, and minimal operational overhead.
            </p>
          </div>

          {/* Minimalist Filter Tabs with indigo accent */}
          <div className="flex flex-wrap gap-1 border border-border/80 bg-secondary/50 p-1 rounded-lg self-start sm:self-auto dark:border-white/[0.08]">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-mono font-medium rounded-md transition-colors ${
                  selectedCategory === cat
                    ? "bg-indigo-600 text-white shadow-sm font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="surface-panel flex flex-col justify-between group"
            >
              <div>
                {/* Media Preview Banner with subtle gradient wash */}
                <div className={`relative h-44 w-full rounded-lg border border-border/70 bg-gradient-to-b ${getCardTopTint(project.accentColor)} p-4 mb-5 overflow-hidden dark:border-white/[0.06]`}>
                  {project.imageUrl ? (
                    <Image
                      src={project.imageUrl}
                      alt={project.title}
                      fill
                      className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="font-mono text-xl font-bold text-muted-foreground/40">
                        {project.title}
                      </span>
                    </div>
                  )}
                  <span className={`absolute top-2.5 right-2.5 font-mono text-[10px] font-semibold px-2 py-0.5 rounded ${getTagClass(project.accentColor)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Content */}
                <h3 className="text-lg font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-muted-foreground line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span key={tag} className={getTagClass(project.accentColor)}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-6 pt-4 border-t border-border/80 flex items-center justify-between gap-3 dark:border-white/[0.06]">
                {project.route ? (
                  <Link
                    href={project.route}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    View Architecture Specs
                    <ArrowUpRight size={13} />
                  </Link>
                ) : (
                  <Link
                    href={project.liveUrl ?? project.gitHubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                  >
                    Live Demo
                    <ArrowUpRight size={13} />
                  </Link>
                )}
                <Link
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-muted-foreground hover:text-foreground"
                  aria-label={`View ${project.title} repository`}
                >
                  <Github size={13} />
                  Source
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
