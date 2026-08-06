"use client";

import { BriefcaseBusiness, Home, Mail, Moon, Sun, UserRound, Wrench } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

type NavItem = {
  label: string;
  href: string;
  icon: React.ReactNode;
};

const navItems: NavItem[] = [
  { label: "Home", href: "header", icon: <Home size={16} /> },
  { label: "About", href: "about", icon: <UserRound size={16} /> },
  { label: "Projects", href: "projects", icon: <BriefcaseBusiness size={16} /> },
  { label: "Skills", href: "skills", icon: <Wrench size={16} /> },
  { label: "Contact", href: "contact", icon: <Mail size={16} /> },
];

const NavBar: React.FC = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("header");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sectionEls = navItems.map((item) => document.getElementById(item.href));
      const scrollPosition = window.scrollY + 180;

      for (let i = sectionEls.length - 1; i >= 0; i--) {
        const section = sectionEls[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
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

  return (
    <header className="fixed inset-x-0 top-0 z-50 transition-all duration-300">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 pt-3">
        <div className="flex h-14 items-center justify-between gap-3 rounded-full border border-border/60 bg-background/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl dark:bg-card/50 dark:shadow-black/20">
          <button
            type="button"
            onClick={() => router.push("/")}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
          >
            <div className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border border-border/80 bg-black/5 shadow-inner">
              <Image
                className="rounded-full object-cover transition-transform duration-300 group-hover:scale-110"
                alt="Nironman"
                src="/new-logo.png"
                height={32}
                width={32}
              />
            </div>
            <div className="hidden flex-col sm:flex">
              <span className="text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
                Niranjan Dabhade
              </span>
              <span className="inline-flex items-center gap-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available for Engineering
              </span>
            </div>
          </button>

          <div className="flex items-center gap-2">
            {pathname === "/" && (
              <nav aria-label="Main Navigation">
                <ul className="hidden items-center gap-1 rounded-full border border-border/50 bg-secondary/50 p-1 md:flex">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() => handleNavigation(item.href)}
                          className={`flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-sm scale-105"
                              : "text-muted-foreground hover:text-foreground hover:bg-background/40"
                          }`}
                        >
                          {item.icon}
                          {item.label}
                        </button>
                      </li>
                    );
                  })}
                </ul>

                <ul className="flex items-center gap-1 rounded-full border border-border/50 bg-secondary/50 p-1 md:hidden">
                  {navItems.map((item) => {
                    const isActive = activeSection === item.href;
                    return (
                      <li key={item.href}>
                        <button
                          type="button"
                          onClick={() => handleNavigation(item.href)}
                          className={`rounded-full p-2 transition-all ${
                            isActive
                              ? "bg-primary text-primary-foreground shadow-sm"
                              : "text-muted-foreground hover:text-foreground"
                          }`}
                          aria-label={item.label}
                        >
                          {item.icon}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
            )}

            {pathname !== "/" && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => router.push("/")}
                className="rounded-full text-xs font-medium border-border/70 hover:bg-secondary"
              >
                Back Home
              </Button>
            )}

            <Button
              onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
              variant="ghost"
              size="icon"
              className="h-8 w-8 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-transform active:scale-95"
              aria-label="Toggle theme"
            >
              {resolvedTheme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} />}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

