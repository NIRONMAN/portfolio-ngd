"use client";

import React from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SkillsComponent from "@/components/Skills";
import { DeveloperPortfolio } from "@/components/DeveloperPortfolio";
import { useExperience } from "@/lib/experience-context";

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
