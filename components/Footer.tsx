"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-24 border-t border-border/60 bg-background/80 backdrop-blur-xl py-12">
      <div className="section-shell flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <Image
            alt="Niranjan Dabhade"
            src="/new-logo.png"
            width={32}
            height={32}
            className="rounded-full border border-border/80 bg-black"
          />
          <div>
            <p className="text-sm font-bold text-foreground">Niranjan Dabhade</p>
            <p className="text-xs text-muted-foreground">
              Jr. Software Engineer • Enterprise Backends, GitOps & AI Workflows
            </p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-muted-foreground">
          <Link
            href="https://github.com/NIRONMAN"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nironman/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href="mailto:niranjan.dabhade7@gmail.com"
            className="hover:text-foreground transition-colors p-2 rounded-full hover:bg-secondary"
            aria-label="Email"
          >
            <Mail size={18} />
          </Link>
          <button
            onClick={scrollToTop}
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-border/80 bg-secondary/80 text-foreground transition hover:scale-110 hover:bg-primary hover:text-primary-foreground"
            aria-label="Scroll to top"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>

      <div className="section-shell mt-8 text-center text-xs text-muted-foreground pt-6 border-t border-border/40">
        © {new Date().getFullYear()} Niranjan Dabhade. Built with Next.js, TypeScript & Tailwind CSS.
      </div>
    </footer>
  );
};

export default Footer;
