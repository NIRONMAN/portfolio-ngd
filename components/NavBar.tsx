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
  { label: "Home", href: "header", icon: <Home size={18} /> },
  { label: "About", href: "about", icon: <UserRound size={18} /> },
  { label: "Projects", href: "projects", icon: <BriefcaseBusiness size={18} /> },
  { label: "Skills", href: "skills", icon: <Wrench size={18} /> },
  { label: "Contact", href: "contact", icon: <Mail size={18} /> },
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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/75 backdrop-blur-xl">
      <div className="section-shell flex h-16 items-center justify-between gap-3">
        <button
          type="button"
          onClick={() => router.push("/")}
          className="group flex items-center gap-3 text-left"
        >
          <Image
            className="rounded-full border border-border/70 bg-black"
            alt="Nironman"
            src="/new-logo.png"
            height={36}
            width={36}
          />
          <span className="hidden text-lg font-semibold tracking-tight group-hover:text-primary md:block">
            Niranjan Dabhade
          </span>
        </button>

        <div className="flex items-center gap-2 md:gap-3">
          {pathname === "/" && (
            <ul className="hidden items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 md:flex">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(item.href)}
                      className={`rounded-full px-3 py-1.5 text-sm font-medium transition-all ${isActive
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:text-foreground"
                        }`}
                    >
                      {item.label}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}

          {pathname === "/" && (
            <ul className="flex items-center gap-1 rounded-full border border-border/70 bg-card/70 p-1 md:hidden">
              {navItems.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <li key={item.href}>
                    <button
                      type="button"
                      onClick={() => handleNavigation(item.href)}
                      className={`rounded-full p-2 transition-all ${isActive
                        ? "bg-primary text-primary-foreground"
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
          )}

          {pathname !== "/" && (
            <Button variant="outline" onClick={() => router.push("/")} className="rounded-full">
              Back Home
            </Button>
          )}

          <Button
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
            variant="outline"
            size="icon"
            className="rounded-full"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
