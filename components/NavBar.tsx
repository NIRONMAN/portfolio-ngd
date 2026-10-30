"use client";

import { Moon, Sun, ArrowLeft } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
};

const navItems: NavItem[] = [
  { label: "About", href: "about" },
  { label: "Projects", href: "projects" },
  { label: "Skills", href: "skills" },
  { label: "Contact", href: "contact" },
];

const NavBar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("");
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sectionEls = navItems.map((item) => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 200;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const section = sectionEls[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavigation = (href: string) => {
    if (pathname !== "/") {
      router.push(`/#${href}`);
      return;
    }

    const element = document.getElementById(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const isHome = pathname === "/";

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md dark:border-white/[0.08]">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Name / Brand Mark with subtle indigo tint */}
        <button
          type="button"
          onClick={() => router.push("/")}
          className="flex items-center gap-2.5 text-left focus:outline-none group"
        >
          <div className="flex h-7 w-7 items-center justify-center rounded-md border border-indigo-500/30 bg-indigo-500/10 font-mono text-xs font-bold text-indigo-600 dark:text-indigo-400 transition-colors group-hover:bg-indigo-500/20">
            ND
          </div>
          <span className="text-sm font-bold tracking-tight text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            Niranjan Dabhade
          </span>
        </button>

        {/* Navigation Items */}
        <div className="flex items-center gap-4">
          {isHome ? (
            <nav aria-label="Main Navigation">
              <ul className="flex items-center gap-1 sm:gap-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.href;
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        onClick={() => handleNavigation(item.href)}
                        className={`rounded-md px-2.5 py-1 text-xs font-medium transition-colors ${
                          isActive
                            ? "bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-500/20"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
                        }`}
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => router.push("/")}
              className="text-xs font-medium text-muted-foreground hover:text-foreground"
            >
              <ArrowLeft size={13} className="mr-1.5" />
              Overview
            </Button>
          )}

          {/* Theme Toggle */}
          {mounted && (
            <Button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-md text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default NavBar;
