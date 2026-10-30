import React from "react";
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Projects from "@/components/Projects";
import SkillsComponent from "@/components/Skills";

export default function HomePage() {
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
