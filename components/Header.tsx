"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Download, Github, MapPin, Sparkles } from "lucide-react";
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
      { label: "Public Repos", value: profile?.public_repos ?? "20+" },
      { label: "GitHub Followers", value: profile?.followers ?? "100+" },
      { label: "Location", value: profile?.location ?? "India" },
    ],
    [profile],
  );

  return (
    <div className="section-shell">
      <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <p className="section-kicker">Full-Stack Developer</p>
          <h1 className="mt-4 text-4xl font-semibold leading-tight text-foreground md:text-6xl">
            Niranjan Dabhade
          </h1>
          <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground md:text-base">
            <Sparkles size={16} className="text-primary" />
            Building thoughtful digital products with React, Next.js and AI workflows.
          </p>

          <p className="mt-6 max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
            Final-year computer science student focused on building robust web products with
            clean UX, reliable architecture, and measurable outcomes.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild className="rounded-full px-6">
              <a href="/Resume.pdf" download="Niranjan_Dabhade_Resume.pdf">
                <Download size={16} />
                Download Resume
              </a>
            </Button>
            <Button asChild variant="outline" className="rounded-full px-6">
              <a href={profile?.html_url ?? "https://github.com/NIRONMAN"} target="_blank" rel="noreferrer">
                <Github size={16} />
                GitHub
                <ArrowRight size={16} />
              </a>
            </Button>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.label} className="surface-panel px-4 py-3">
                <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{stat.label}</p>
                <p className="mt-2 text-lg font-semibold text-foreground">
                  {stat.label === "Location" ? (
                    <span className="inline-flex items-center gap-2">
                      <MapPin size={16} className="text-primary" />
                      {stat.value}
                    </span>
                  ) : (
                    stat.value
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="relative mx-auto max-w-md">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-primary/20 via-transparent to-primary/5 blur-2xl" />
          <div className="surface-panel relative overflow-hidden rounded-[2rem] p-4">
            <Image
              alt="Portrait of Niranjan Dabhade"
              width={720}
              height={860}
              src="/mody.png"
              className="h-auto w-full rounded-[1.4rem] object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
