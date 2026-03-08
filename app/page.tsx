"use client";

import React from 'react';
import About from '@/components/About';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SkillsComponent from '@/components/Skills';

const Page: React.FC = () => {
  return (
    <main className="pb-14 pt-24">
      <section id="header" className="scroll-mt-28">
        <Header />
      </section>
      <section id="about" className="scroll-mt-28 mt-20 md:mt-24">
        <About />
      </section>
      <section id="projects" className="scroll-mt-28 mt-20 md:mt-24">
        <Projects />
      </section>
      <section id="skills" className="scroll-mt-28 mt-20 md:mt-24">
        <SkillsComponent />
      </section>
      <section id="contact" className="scroll-mt-28 mt-20 md:mt-24">
        <ContactMe />
      </section>
    </main>
  );
};

export default Page;
