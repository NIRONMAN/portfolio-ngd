"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { Button } from "../../components/ui/button";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";

const InfectiGuardDetails: React.FC = () => {
  const router = useRouter();

  const projectData = {
    title: "InfectiGuard",
    subtitle: "Hospital Audit & ICU Monitoring Application",
    githubUrl: "https://github.com/NIRONMAN/InfectiGuard",
    technologies: ["React Native", "Redux", "Firebase", "Expo"],
    highlights: [
      "Developed an offline-first mobile platform for hospital ICU monitoring, biomedical waste management, and hand hygiene tracking.",
      "Engineered reliable offline data syncing via Firebase Firestore for seamless clinical workflow continuity.",
      "Built robust reporting modules generating automated Excel dashboard exports for compliance and administrative auditing."
    ]
  };

  return (
    <div className="min-h-[calc(100vh-76px)] flex flex-col text-foreground p-4 md:p-8 justify-center items-center">
      <div className="w-full max-w-4xl">
        <BackgroundGradient className="rounded-[22px] p-6 sm:p-10 bg-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-primary">Mobile Application</span>
              <h1 className="text-3xl font-bold text-foreground mt-1">{projectData.title}</h1>
              <p className="text-muted-foreground mt-1">{projectData.subtitle}</p>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <Button asChild className="rounded-full">
                <Link href={projectData.githubUrl} target="_blank" rel="noreferrer">
                  <Github size={16} className="mr-2" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 mt-2">
              {projectData.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3.5 py-1 text-xs font-medium text-foreground border border-border"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-8 space-y-4">
            <h2 className="text-xl font-semibold text-foreground">Key Architecture & Achievements</h2>
            <ul className="space-y-3 text-muted-foreground list-disc list-inside leading-relaxed">
              {projectData.highlights.map((highlight, index) => (
                <li key={index} className="text-base">
                  <span className="text-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex justify-between items-center">
            <Button
              onClick={() => router.back()}
              variant="outline"
              className="rounded-full"
            >
              <ArrowLeft size={16} className="mr-2" />
              Back to Projects
            </Button>
          </div>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default InfectiGuardDetails;
