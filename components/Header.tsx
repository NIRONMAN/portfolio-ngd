"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download, Github, MapPin, Sparkles, Code2, Server, Bot, Terminal } from "lucide-react";
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
        // Keep UI functional even if GitHub API fails.
      }
    };

    loadProfile();
    return () => {
      isMounted = false;
    };
  }, []);

  const stats = useMemo(
    () => [
      { label: "Public Repos", value: profile?.public_repos ?? "20+", icon: <Code2 size={16} className="text-blue-500" /> },
      { label: "GitHub Followers", value: profile?.followers ?? "100+", icon: <Github size={16} className="text-purple-500" /> },
      { label: "Location", value: profile?.location ?? "India", icon: <MapPin size={16} className="text-emerald-500" /> },
    ],
    [profile],
  );

  return (
    <div className="section-shell relative pt-4">
      {/* Background radial ambient lights */}
      <div className="absolute -top-10 left-1/4 h-72 w-72 rounded-full bg-blue-500/10 blur-[100px] pointer-events-none" />
      <div className="absolute top-20 right-10 h-72 w-72 rounded-full bg-purple-500/10 blur-[100px] pointer-events-none" />

      <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 backdrop-blur-md shadow-sm">
            <Sparkles size={14} className="text-primary animate-pulse" />
            <span className="text-xs font-bold uppercase tracking-wider text-primary">
              Jr. Software Engineer @ Findability Sciences
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-6xl leading-[1.1]">
            Building Scalable Backends, <span className="text-gradient">Cloud Infrastructure</span> & <span className="text-gradient-gold">AI Workflows</span>.
          </h1>

          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Focused on <strong className="text-foreground font-semibold">Java Spring Boot</strong>, cloud-native deployments with <strong className="text-foreground font-semibold">Kubernetes & ArgoCD</strong>, data pipelines via <strong className="text-foreground font-semibold">BigQuery</strong>, and integrating <strong className="text-foreground font-semibold">LLM tools</strong>.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button asChild className="rounded-full px-7 py-6 text-sm font-semibold shadow-lg shadow-primary/20 transition-all hover:scale-105 hover:shadow-primary/30">
              <a href="/Resume.pdf" download="Niranjan_Dabhade_Resume.pdf">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-7 py-6 text-sm font-semibold border-border/80 hover:bg-secondary transition-all hover:scale-105">
              <a href={profile?.html_url ?? "https://github.com/NIRONMAN"} target="_blank" rel="noreferrer">
                <Github size={18} className="mr-2" />
                GitHub Profile
                <ArrowRight size={16} className="ml-2" />
              </a>
            </Button>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-panel p-4 flex items-center gap-3 transition-transform hover:-translate-y-1">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border/60 bg-secondary/80">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">{stat.label}</p>
                  <p className="text-base font-bold text-foreground">{stat.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Hero Profile Photo Container with Floating Badges */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-emerald-500/20 blur-2xl opacity-70" />
          
          <div className="surface-panel relative overflow-hidden rounded-[2.5rem] p-3 border-white/20 dark:border-white/10 shadow-2xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-secondary/40 to-card">
              <Image
                alt="Portrait of Niranjan Dabhade"
                width={720}
                height={860}
                src="/mody.png"
                className="h-auto w-full rounded-[2rem] object-cover transition-transform duration-500 hover:scale-105"
                priority
              />

              {/* Floating tech badge top-left */}
              <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md">
                <Server size={14} className="text-emerald-500" />
                <span>Spring Boot & Cloud</span>
              </div>

              {/* Floating tech badge bottom-right */}
              <div className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full border border-border/60 bg-background/80 px-3.5 py-1.5 text-xs font-semibold shadow-lg backdrop-blur-md">
                <Bot size={14} className="text-purple-500" />
                <span>AI Engineering</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

