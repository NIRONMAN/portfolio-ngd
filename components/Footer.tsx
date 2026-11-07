"use client";

import React from "react";
import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { useExperience } from "@/lib/experience-context";
import { usePathname } from "next/navigation";

export const Footer: React.FC = () => {
  const { mode } = useExperience();
  const pathname = usePathname();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (mode === "developer" && pathname === "/") {
    return null;
  }

  return (
    <footer className="mt-20 border-t border-border/80 bg-background py-10 dark:border-white/[0.08]">
      <div className="section-shell flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500" />
          <p className="text-xs font-mono text-muted-foreground">
            © {new Date().getFullYear()} Niranjan Dabhade • Backend Systems &amp; Cloud Infrastructure
          </p>
        </div>

        <div className="flex items-center gap-3">
          <Link
            href="https://github.com/NIRONMAN"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1.5"
            aria-label="GitHub Profile"
          >
            <Github size={15} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/nironman/"
            target="_blank"
            rel="noreferrer"
            className="text-muted-foreground hover:text-sky-600 dark:hover:text-sky-400 transition-colors p-1.5"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={15} />
          </Link>
          <Link
            href="mailto:niranjan.dabhade7@gmail.com"
            className="text-muted-foreground hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-1.5"
            aria-label="Send Email"
          >
            <Mail size={15} />
          </Link>
          <button
            onClick={scrollToTop}
            className="ml-2 font-mono text-xs text-muted-foreground hover:text-foreground flex items-center gap-1 transition-colors"
            aria-label="Back to top"
          >
            top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
