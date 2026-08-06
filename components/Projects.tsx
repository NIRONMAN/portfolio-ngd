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
  },
  {
    title: "InfectiGuard",
    description:
      "Offline-first hospital ICU monitoring & audit mobile platform with biomedical waste tracking, Firebase Firestore syncing, and automated Excel reporting.",
    imageUrl: "/programmer.png",
    gitHubLink: "https://github.com/NIRONMAN/InfectiGuard",
    route: "/InfectiGuard",
    tags: ["React Native", "Redux", "Firebase", "Expo"],
  },
  {
    title: "High Blogs",
    description:
      "A full-stack blogging platform where users can create and read posts on a scalable serverless architecture.",
    imageUrl: "/blog.avif",
    gitHubLink: "https://github.com/NIRONMAN/High-Blogs",
    route: "/High-Blogs",
    tags: ["React", "Serverless", "PostgreSQL"],
  },
  {
    title: "Niropay",
    description:
      "A payments-focused application inspired by modern wallet products, supporting person-to-person transfers.",
    imageUrl: "/niropay.jpg",
    gitHubLink: "https://github.com/NIRONMAN/Niropay",
    route: "/Niropay",
    tags: ["Fintech", "Node.js", "MongoDB"],
  },
];

function normalizeHomepage(homepage: string | null): string | null {
  if (!homepage) return null;
  const trimmed = homepage.trim();
  if (!trimmed) return null;
  return /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed}`;
}

function Projects() {
  const [githubProjects, setGithubProjects] = useState<Project[]>([]);

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

    return merged;
  }, [githubProjects]);

  return (
    <div className="section-shell">
      <p className="section-kicker">Projects</p>
      <h2 className="section-title">Selected work focused on real-world utility.</h2>

      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <article key={project.title} className="surface-panel overflow-hidden">
            <div className="relative h-48 border-b border-border/80 bg-secondary/45 p-4">
              {project.imageUrl ? (
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  fill
                  className="object-contain p-4"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="flex h-full items-center justify-center rounded-2xl border border-dashed border-border/60 bg-background/55">
                  <span className="text-4xl font-semibold tracking-wide text-muted-foreground">
                    {project.title.charAt(0).toUpperCase()}
                  </span>
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="text-2xl font-semibold text-foreground">{project.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex items-center gap-3">
                {project.route ? (
                  <Link
                    href={project.route}
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    View details
                    <ArrowUpRight size={15} />
                  </Link>
                ) : (
                  <Link
                    href={project.liveUrl ?? project.gitHubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
                  >
                    Visit live
                    <ArrowUpRight size={15} />
                  </Link>
                )}
                <Link
                  href={project.gitHubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition hover:bg-secondary"
                >
                  <Github size={15} />
                  Code
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Projects;
