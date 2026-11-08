"use client";

import React from "react";
import dynamic from "next/dynamic";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import { useExperience } from "@/lib/experience-context";

const DeveloperPortfolio = dynamic(
  () => import("@/components/DeveloperPortfolio").then((mod) => mod.DeveloperPortfolio),
  {
    ssr: false,
    loading: () => (
      <div className="fixed inset-0 flex items-center justify-center bg-[#090e12] font-mono text-xs text-amber-300">
        <span className="animate-pulse">[INITIALIZING DEV.SYS HUD...]</span>
      </div>
    ),
  }
);

export default function HomePage() {
  const { mode, mounted } = useExperience();

  // If developer mode is selected, render the cyber terminal HUD matching the reference image
  if (mounted && mode === "developer") {
    return <DeveloperPortfolio />;
  }

  // Otherwise, render the classic portfolio
  return (
    <main className="pb-16 pt-24 sm:pt-28">
      <section id="header" className="scroll-mt-28">
        <Header />
      </section>
      <section id="about" className="scroll-mt-28 mt-24 md:mt-32">
        <About />
      </section>
      <section id="projects" className="scroll-mt-28 mt-24 md:mt-32">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-28 mt-24 md:mt-32">
        <SkillsComponent />
      </section>
      <section id="contact" className="scroll-mt-28 mt-24 md:mt-32">
        <ContactMe />
      </section>
    </main>
  );
}
