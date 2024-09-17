"use client";

import React, { useEffect, useRef, useState } from 'react';
import About from '@/components/About';
import Card3D from '@/components/Card3D';
import ContactMe from '@/components/ContactMe';
import Header from '@/components/Header';
import Projects from '@/components/Projects';
import SkillsComponent from '@/components/Skills';
import { TracingBeam } from "../components/ui/tracing-beam";
import NavBar from '@/components/NavBar';
import { useTheme } from 'next-themes';

const Page: React.FC = () => {
  const [totalHeight, setTotalHeight] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {setTheme}=useTheme();
  
  useEffect(()=>{
    setTheme('dark')
  },[])

  useEffect(() => {
    const updateHeight = () => {
      if (containerRef.current) {
        const height = containerRef.current.scrollHeight;
        setTotalHeight(height);
      }
    };

    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  return (
    <TracingBeam className={`h-[${totalHeight}] dark:bg-slate-950 bg-background`}>
      <div ref={containerRef} className=" mt-[76px]">
        <section id="header">
          <Header />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="skills">
          <SkillsComponent />
        </section>
        <section id="contact">
          <ContactMe />
        </section>
      </div>
    </TracingBeam>
  );
};

export default Page;