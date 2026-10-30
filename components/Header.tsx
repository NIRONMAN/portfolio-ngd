"use client";

import React, { useEffect, useMemo, useState } from "react";
import { ArrowUpRight, Download, Github, Mail, Terminal, MapPin } from "lucide-react";
import { Button } from "./ui/button";

type GithubUserProps = {
  login: string;
  html_url: string;
  location: string;
  public_repos: number;
  followers: number;
};

const Header: React.FC = () => {
  const [profile, setProfile] = useState<GithubUserProps | null>(null);

  useEffect(() => {
    let isMounted = true;

    const loadProfile = async () => {
      try {
        const response = await fetch("https://api.github.com/users/NIRONMAN");
        if (!response.ok) return;
        const data = (await response.json()) as GithubUserProps;
        if (isMounted) {
          setProfile(data);
        }
      } catch {
        // Fallback default stats are already populated
      }
    };

    loadProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  const stats = useMemo(
    () => [
      {
        label: "Public Repositories",
        value: profile?.public_repos ? `${profile.public_repos}` : "26",
      },
      {
        label: "Current Role",
        value: "Jr. Software Engineer",
      },
      {
        label: "Core Stack",
        value: "Java, K8s & RAG",
      },
    ],
    [profile],
  );

  return (
    <div className="section-shell pt-4 sm:pt-8">
      {/* Top Status Bar with faint emerald accent */}
      <div className="inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 dark:bg-emerald-500/10">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-[11px] font-semibold text-emerald-700 dark:text-emerald-300">
          Findability Sciences • Chh. Sambhajinagar, India
        </span>
      </div>

      <div className="mt-6 grid items-start gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Left: Bio & Statement */}
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl md:text-5xl leading-[1.15]">
            Niranjan Dabhade
          </h1>
          <p className="mt-2 text-lg sm:text-xl font-medium text-muted-foreground">
            Building resilient <span className="serif-accent">distributed backends</span>, GitOps cloud, &amp; practical AI.
          </p>

          <p className="mt-6 text-sm sm:text-base leading-relaxed text-muted-foreground">
            I engineer production microservices with <strong className="text-foreground font-semibold">Java Spring Boot</strong>, deploy cloud workloads via declarative <strong className="text-foreground font-semibold">GitOps on Kubernetes with ArgoCD</strong>, optimize high-throughput telemetry pipelines on <strong className="text-foreground font-semibold">Google BigQuery &amp; Pub/Sub</strong>, and construct practical <strong className="text-foreground font-semibold">Retrieval-Augmented Generation (RAG)</strong> systems.
          </p>

          {/* Quick Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-lg px-5 py-2.5 text-xs font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-sm shadow-indigo-500/20">
              <a href="/Resume.pdf" download="Niranjan_Dabhade_Resume.pdf">
                <Download size={14} className="mr-2" />
                Resume (PDF)
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-5 py-2.5 text-xs font-semibold border-border/80 hover:border-indigo-500/30 hover:bg-indigo-500/5">
              <a href={profile?.html_url ?? "https://github.com/NIRONMAN"} target="_blank" rel="noreferrer">
                <Github size={14} className="mr-2" />
                GitHub
                <ArrowUpRight size={13} className="ml-1 text-muted-foreground" />
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-lg px-5 py-2.5 text-xs font-semibold border-border/80 hover:border-indigo-500/30 hover:bg-indigo-500/5">
              <a href="mailto:niranjan.dabhade7@gmail.com">
                <Mail size={14} className="mr-2" />
                Email Me
              </a>
            </Button>
          </div>

          {/* Quick Metrics */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-border/80 dark:border-white/[0.08]">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-[11px] text-muted-foreground uppercase tracking-wider">{stat.label}</p>
                <p className="text-sm font-semibold text-foreground mt-1">{stat.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Technical Spec Terminal Card with refined syntax colors */}
        <div className="rounded-xl border border-indigo-500/20 bg-[#090d16] text-neutral-100 shadow-lg shadow-indigo-950/20 overflow-hidden font-mono text-xs dark:border-indigo-500/25">
          {/* Terminal Title Bar */}
          <div className="flex items-center justify-between px-4 py-2.5 border-b border-indigo-500/15 bg-neutral-900/60">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-rose-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
              <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
              <span className="ml-2 text-[11px] text-indigo-300/80">niranjan@workstation:~$</span>
            </div>
            <span className="text-[10px] text-emerald-400 font-semibold bg-emerald-500/10 px-2 py-0.5 rounded">
              env: production
            </span>
          </div>

          {/* Code Spec Content */}
          <div className="p-4 space-y-3 leading-relaxed text-neutral-300">
            <div>
              <span className="text-indigo-400 font-semibold"># Current Production Responsibilities</span>
            </div>
            <div className="space-y-1">
              <p className="text-neutral-400">
                <span className="text-indigo-500">&gt; </span>
                <span className="text-sky-300 font-medium">service</span>: Centralized SSO Authentication
              </p>
              <p className="pl-4 text-neutral-400">
                stack: <span className="text-amber-300">[Java Spring Boot, Auth0, Redis]</span>
              </p>
              <p className="pl-4 text-neutral-400">
                scope: 4-product enterprise suite
              </p>
            </div>

            <div className="space-y-1 pt-1.5 border-t border-indigo-500/10">
              <p className="text-neutral-400">
                <span className="text-indigo-500">&gt; </span>
                <span className="text-sky-300 font-medium">data_pipeline</span>: Device Telemetry &amp; Analytics
              </p>
              <p className="pl-4 text-neutral-400">
                tools: <span className="text-amber-300">[Google BigQuery, Pub/Sub, Kafka]</span>
              </p>
            </div>

            <div className="space-y-1 pt-1.5 border-t border-indigo-500/10">
              <p className="text-neutral-400">
                <span className="text-indigo-500">&gt; </span>
                <span className="text-sky-300 font-medium">infrastructure</span>: Declarative GitOps
              </p>
              <p className="pl-4 text-neutral-400">
                tools: <span className="text-amber-300">[Kubernetes, ArgoCD, Docker, Helm]</span>
              </p>
            </div>

            <div className="space-y-1 pt-1.5 border-t border-indigo-500/10">
              <p className="text-neutral-400">
                <span className="text-indigo-500">&gt; </span>
                <span className="text-sky-300 font-medium">ai_orchestration</span>: Enterprise RAG Workflows
              </p>
              <p className="pl-4 text-neutral-400">
                tools: <span className="text-amber-300">[LangChain, Hybrid Search, Milvus]</span>
              </p>
            </div>

            <div className="pt-2 text-neutral-400 border-t border-indigo-500/15 flex items-center justify-between">
              <span>status: <span className="text-emerald-400 font-medium">active &amp; shipping</span></span>
              <span className="text-[10px] text-neutral-400">java 21 • linux 6.x</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
