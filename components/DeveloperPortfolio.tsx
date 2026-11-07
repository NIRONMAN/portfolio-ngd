"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useExperience } from "@/lib/experience-context";
import {
  Github,
  ExternalLink,
  ChevronDown,
  ChevronRight,
  Sparkles,
  RefreshCw,
  Search,
} from "lucide-react";

type CoreTab = "profile" | "projects" | "stack" | "archive";

interface ProjectNode {
  id: string;
  name: string;
  langTag: string;
  subtitle: string;
  version: string;
  tech: string;
  link: string;
  githubUrl: string;
  liveUrl?: string;
  status: string;
  category: "AI & Cloud" | "Full Stack" | "Mobile App" | "Systems & Tools";
  isHighlighted?: boolean;
}

const PROJECTS_LIST: ProjectNode[] = [
  {
    id: "learnability",
    name: "Learnability_AI_2.0",
    langTag: "(Next.js/Python)",
    subtitle: "Enterprise Multimodal Learning & RAG Platform",
    version: "v2.0 // STABLE",
    tech: "Next.js 14, Python Flask, LangChain, LlamaParse, RAG, Firestore, Mermaid",
    link: "https://github.com/NIRONMAN/Learnability_2.0",
    githubUrl: "https://github.com/NIRONMAN/Learnability_2.0",
    status: "learnability//ready",
    category: "AI & Cloud",
    isHighlighted: true,
  },
  {
    id: "high-blogs",
    name: "High_Blogs",
    langTag: "(Hono/Cloudflare)",
    subtitle: "Edge-Rendered Serverless Publishing Platform",
    version: "v1.0 // STABLE",
    tech: "React, TypeScript, Cloudflare Workers, Hono, Prisma, PostgreSQL",
    link: "https://high-blogs.pages.dev/",
    githubUrl: "https://github.com/NIRONMAN/High-Blogs",
    liveUrl: "https://high-blogs.pages.dev/",
    status: "high-blogs.pages.dev",
    category: "Full Stack",
  },
  {
    id: "infectiguard",
    name: "InfectiGuard",
    langTag: "(React Native/Expo)",
    subtitle: "Offline-First Hospital ICU Audit & Biomedical Suite",
    version: "v1.2 // STABLE",
    tech: "React Native, Expo, Redux Toolkit, SQLite, Firebase Firestore, ExcelJS",
    link: "https://github.com/NIRONMAN/InfectiGuard",
    githubUrl: "https://github.com/NIRONMAN/InfectiGuard",
    status: "infectiguard//mobile",
    category: "Mobile App",
  },
  {
    id: "niropay",
    name: "Niropay",
    langTag: "(Node/Mongoose)",
    subtitle: "Fintech Digital Wallet & ACID Transaction Engine",
    version: "v1.0 // STABLE",
    tech: "Node.js, Express, MongoDB Sessions, JWT Security, React, Tailwind",
    link: "https://github.com/NIRONMAN/Niropay",
    githubUrl: "https://github.com/NIRONMAN/Niropay",
    status: "niropay//wallet",
    category: "Full Stack",
  },
  {
    id: "niroflix",
    name: "NiroFlix",
    langTag: "(TypeScript/React)",
    subtitle: "Modern Streaming & Video Browsing Web Application",
    version: "v1.0 // ACTIVE",
    tech: "TypeScript, React, TMDB API, Tailwind CSS, Responsive Video UI",
    link: "https://github.com/NIRONMAN/NiroFlix",
    githubUrl: "https://github.com/NIRONMAN/NiroFlix",
    status: "niroflix//streaming",
    category: "Full Stack",
  },
  {
    id: "typogym",
    name: "TypoGym",
    langTag: "(TypeScript)",
    subtitle: "Developer Typing Performance & Speed Benchmark Engine",
    version: "v1.1 // STABLE",
    tech: "TypeScript, React, Dynamic WPM/Accuracy Engine, Key Listener Hooks",
    link: "https://github.com/NIRONMAN/TypoGym",
    githubUrl: "https://github.com/NIRONMAN/TypoGym",
    status: "typogym//metrics",
    category: "Full Stack",
  },
  {
    id: "anyfiletomp4",
    name: "anyFileTomp4",
    langTag: "(Python/Media)",
    subtitle: "File-to-Video Cloud Storage Protocol Encoder",
    version: "v0.9 // BETA",
    tech: "Python, FFmpeg, Binary-to-Pixel Encoding, Cloud Storage Protocol",
    link: "https://github.com/NIRONMAN/anyFileTomp4",
    githubUrl: "https://github.com/NIRONMAN/anyFileTomp4",
    status: "anyfiletomp4//codec",
    category: "Systems & Tools",
  },
  {
    id: "dotfiles",
    name: "dotfiles",
    langTag: "(Lua/Neovim)",
    subtitle: "Personal Neovim, Tmux & Linux Development Environment",
    version: "v2.5 // MAIN",
    tech: "Lua, Neovim LSP, Treesitter, Tmux, Zsh, Custom Statusline Config",
    link: "https://github.com/NIRONMAN/dotfiles",
    githubUrl: "https://github.com/NIRONMAN/dotfiles",
    status: "dotfiles//config",
    category: "Systems & Tools",
  },
  {
    id: "react-native-tailwind-boilerplate",
    name: "RN_Tailwind_Boilerplate",
    langTag: "(JavaScript/Expo)",
    subtitle: "Production Ready Starter Kit for React Native & Tailwind",
    version: "v1.0 // TEMPLATE",
    tech: "React Native, Expo SDK, NativeWind / Tailwind CSS, Modular Nav",
    link: "https://github.com/NIRONMAN/React-Native-with-tailwind-Boilerplate",
    githubUrl: "https://github.com/NIRONMAN/React-Native-with-tailwind-Boilerplate",
    status: "rn-template//ready",
    category: "Mobile App",
  },
];

export const DeveloperPortfolio: React.FC = () => {
  const { setMode, openModal } = useExperience();
  const [activeTab, setActiveTab] = useState<CoreTab>("profile");
  const [isCoreOpen, setIsCoreOpen] = useState(true);
  const [projectSearch, setProjectSearch] = useState("");
  const [selectedFilter, setSelectedFilter] = useState<string>("ALL");
  const [ping, setPing] = useState(24);
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalLogs, setTerminalLogs] = useState<string[]>([
    "[21:24:10] ArgoCD GitOps sync: cluster-mesh synced",
    "[21:25:02] Spring Boot SSO health check: 200 OK",
    "[21:26:15] BigQuery telemetry stream: 14.8k events/min",
    "[21:27:00] RAG vector index retrieval: 18ms latency",
    "[21:28:40] Production workloads: active & healthy",
  ]);

  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Dynamic ping simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setPing(20 + Math.floor(Math.random() * 9));
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const filteredProjects = PROJECTS_LIST.filter((proj) => {
    const matchesFilter =
      selectedFilter === "ALL" || proj.category === selectedFilter;
    const matchesSearch =
      proj.name.toLowerCase().includes(projectSearch.toLowerCase()) ||
      proj.subtitle.toLowerCase().includes(projectSearch.toLowerCase()) ||
      proj.tech.toLowerCase().includes(projectSearch.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const handleCommandSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = terminalInput.trim().toLowerCase();
    if (!cmd) return;

    let response = "";
    if (cmd === "help") {
      response = "Commands: projects, stack, whoami, ping, clear, classic";
    } else if (cmd === "projects") {
      response = `${PROJECTS_LIST.length} projects loaded: Learnability_AI, High_Blogs, InfectiGuard, Niropay, NiroFlix, TypoGym, anyFileTomp4, dotfiles...`;
    } else if (cmd === "stack") {
      response = "Stack: Java 21, Spring Boot, Kubernetes, ArgoCD, RAG, BigQuery, TypeScript";
    } else if (cmd === "whoami") {
      response = "Niranjan Dabhade | Jr. Software Engineer at Findability Sciences";
    } else if (cmd === "ping") {
      response = `Pong! RTT: ${ping}ms | Latency: Optimal`;
    } else if (cmd === "classic") {
      setMode("normal");
      return;
    } else if (cmd === "clear") {
      setTerminalLogs([]);
      setTerminalInput("");
      return;
    } else {
      response = `Command '${cmd}' not found. Type 'help' for options.`;
    }

    const now = new Date();
    const timeStr = now.toTimeString().split(" ")[0];
    setTerminalLogs((prev) => [...prev, `[${timeStr}] > ${cmd}`, `[${timeStr}] ${response}`]);
    setTerminalInput("");
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [terminalLogs]);

  return (
    <div className="fixed inset-0 h-screen w-screen overflow-hidden bg-[#090e12] text-[#c9d1d9] font-mono selection:bg-amber-400/20 selection:text-amber-300 p-2 sm:p-3 flex flex-col justify-between z-40">
      {/* Outer Cyber Console Window */}
      <div className="mx-auto w-full max-w-7xl h-full rounded-2xl border border-[#1c2730] bg-[#0c1217] shadow-2xl flex flex-col overflow-hidden">
        {/* Top Header Bar */}
        <header className="flex-none flex items-center justify-between border-b border-[#1c2730] bg-[#0e161c] px-4 py-2 sm:px-5">
          <div className="flex items-center gap-2.5">
            <span className="text-amber-400 text-sm font-bold animate-pulse">⚡</span>
            <span className="text-xs sm:text-sm font-bold tracking-wider text-emerald-400">
              NIRONMAN.SYS
            </span>
            <span className="text-neutral-500 text-xs">|</span>
            <span className="text-[11px] sm:text-xs font-semibold text-emerald-400/90 flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 inline-block animate-ping" />
              [STATUS: ONLINE]
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Mode Switcher Button */}
            <button
              type="button"
              onClick={() => setMode("normal")}
              className="group flex items-center gap-1.5 rounded-lg border border-[#2b3a47] bg-[#141f27] px-2.5 py-1 text-xs font-semibold text-neutral-300 hover:border-amber-400/60 hover:text-amber-300 transition-colors"
              title="Switch to Classic Portfolio view"
            >
              <Sparkles size={12} className="text-amber-400 group-hover:rotate-12 transition-transform" />
              <span className="hidden sm:inline">Classic View</span>
            </button>

            {/* Re-open Selector */}
            <button
              type="button"
              onClick={openModal}
              className="rounded-lg border border-[#2b3a47] bg-[#141f27] p-1 text-neutral-400 hover:text-neutral-200 transition-colors"
              title="Change theme preference"
            >
              <RefreshCw size={12} />
            </button>
          </div>
        </header>

        {/* Hero Netrunner Banner */}
        <div className="flex-none border-b border-[#1c2730] px-4 py-2 sm:px-5 bg-[#0a0f14]/60 flex items-center justify-between">
          <div>
            <h1 className="text-base sm:text-lg md:text-xl font-extrabold text-amber-300 flex items-center gap-2">
              <span>Welcome, Netrunner.</span>
              <span className="inline-block w-2 h-4 bg-amber-400 animate-pulse" />
            </h1>
            <p className="text-[11px] sm:text-xs text-neutral-400 truncate">
              &gt; _Building resilient distributed backends, GitOps cloud deployments &amp; AI RAG workflows._
            </p>
          </div>
          <span className="hidden md:inline font-mono text-[10px] text-neutral-500 border border-[#1f2b34] px-2 py-0.5 rounded">
            SYS: LINUX_x86 // JAVA_21
          </span>
        </div>

        {/* Main 3-Column Dashboard Body: exactly fits available height, internal panels scroll */}
        <div className="flex-1 min-h-0 grid grid-cols-1 lg:grid-cols-12 gap-3 p-3 sm:p-4 bg-[#0c1217]">
          {/* Column 1: CORE_MODULES (3 cols on lg) */}
          <div className="lg:col-span-3 min-h-0 flex flex-col rounded-xl border border-[#1c2730] bg-[#10171d] p-3.5">
            {/* Header with collapse toggle */}
            <div
              onClick={() => setIsCoreOpen(!isCoreOpen)}
              className="flex-none flex items-center justify-between cursor-pointer text-amber-300 font-bold text-xs tracking-wider select-none hover:text-amber-200 pb-2 border-b border-[#1c2730]"
            >
              <div className="flex items-center gap-1.5">
                <span>&gt;&gt;</span>
                <span>CORE_MODULES</span>
              </div>
              {isCoreOpen ? <ChevronDown size={14} /> : <ChevronRight size={14} />}
            </div>

            {isCoreOpen && (
              <div className="flex-1 min-h-0 flex flex-col pt-2.5">
                {/* Tabs */}
                <div className="flex-none flex items-center gap-2.5 border-b border-[#1c2730] pb-1.5 text-xs font-semibold">
                  <button
                    type="button"
                    onClick={() => setActiveTab("profile")}
                    className={`pb-0.5 transition-colors ${
                      activeTab === "profile"
                        ? "text-amber-300 border-b-2 border-amber-400 font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    Profile
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("projects")}
                    className={`pb-0.5 transition-colors ${
                      activeTab === "projects"
                        ? "text-amber-300 border-b-2 border-amber-400 font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    projects
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("stack")}
                    className={`pb-0.5 transition-colors ${
                      activeTab === "stack"
                        ? "text-amber-300 border-b-2 border-amber-400 font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    stack
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveTab("archive")}
                    className={`pb-0.5 transition-colors ${
                      activeTab === "archive"
                        ? "text-amber-300 border-b-2 border-amber-400 font-bold"
                        : "text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    archive
                  </button>
                </div>

                {/* Tab Body: scrollable if needed */}
                <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-3">
                  {/* Profile Tab Content */}
                  {activeTab === "profile" && (
                    <div className="flex flex-col items-center text-center">
                      {/* Avatar */}
                      <div className="relative h-32 w-32 sm:h-36 sm:w-36 rounded-xl overflow-hidden border-2 border-amber-400/40 shadow-md shadow-amber-500/10 flex-none">
                        <Image
                          src="/cyber-dev.jpg"
                          alt="Niranjan Dabhade Avatar"
                          fill
                          sizes="(max-width: 768px) 128px, 144px"
                          className="object-cover"
                          priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                        <span className="absolute bottom-1 right-1.5 rounded bg-amber-500/80 px-1 py-0.2 text-[8px] font-bold text-black uppercase tracking-wider">
                          CORE: ONLINE
                        </span>
                      </div>

                      {/* Bio Details */}
                      <div className="mt-3 space-y-1">
                        <h2 className="text-sm sm:text-base font-bold text-amber-300">
                          Niranjan Dabhade
                        </h2>
                        <p className="text-xs font-semibold text-neutral-200">
                          Jr. Software Engineer
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          Backend &amp; AI Systems Developer.
                        </p>
                        <p className="text-[11px] text-neutral-400">
                          Based in Maharashtra, India.
                        </p>
                        <p className="text-[11px] text-neutral-400 pt-0.5">
                          Working with Java Spring Boot, Kubernetes, GitOps &amp; RAG.
                        </p>
                      </div>

                      {/* Action Links */}
                      <div className="mt-3 flex flex-wrap justify-center items-center gap-2 text-xs text-amber-400 font-bold">
                        <a
                          href="/Resume.pdf"
                          download="Niranjan_Dabhade_Resume.pdf"
                          className="hover:underline hover:text-amber-300"
                        >
                          [cv.pdf]
                        </a>
                        <span className="text-neutral-600">•</span>
                        <a
                          href="https://github.com/NIRONMAN"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-amber-300"
                        >
                          [github]
                        </a>
                        <span className="text-neutral-600">•</span>
                        <a
                          href="https://www.linkedin.com/in/nironman/"
                          target="_blank"
                          rel="noreferrer"
                          className="hover:underline hover:text-amber-300"
                        >
                          [linkedin]
                        </a>
                      </div>
                    </div>
                  )}

                  {/* Projects Tab */}
                  {activeTab === "projects" && (
                    <div className="space-y-2 text-xs">
                      <p className="text-neutral-400 text-[10px] uppercase tracking-wider font-semibold">
                        Repositories ({PROJECTS_LIST.length})
                      </p>
                      {PROJECTS_LIST.map((p) => (
                        <div
                          key={p.id}
                          className="rounded border border-[#1f2b34] bg-[#0c1217] p-2 hover:border-amber-400/50 transition-colors"
                        >
                          <div className="font-bold text-amber-300 flex items-center justify-between">
                            <span>{p.name}</span>
                            <span className="text-[9px] text-neutral-500">{p.category}</span>
                          </div>
                          <div className="text-[10px] text-neutral-400">{p.version}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Stack Tab */}
                  {activeTab === "stack" && (
                    <div className="space-y-2.5 text-xs text-neutral-300">
                      <div>
                        <span className="text-amber-400 font-bold">&gt; Backend &amp; Microservices:</span>
                        <p className="text-[11px] text-neutral-400">Java 21, Spring Boot 3, Redis, Auth0 SSO, FastAPI</p>
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold">&gt; Cloud Infrastructure &amp; GitOps:</span>
                        <p className="text-[11px] text-neutral-400">Kubernetes, ArgoCD, Docker, Helm, GCP (BigQuery, Pub/Sub)</p>
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold">&gt; AI &amp; Retrieval Systems:</span>
                        <p className="text-[11px] text-neutral-400">LangChain, LlamaParse, RAG Architecture, Vector DBs</p>
                      </div>
                      <div>
                        <span className="text-amber-400 font-bold">&gt; Web &amp; Mobile:</span>
                        <p className="text-[11px] text-neutral-400">Next.js 14, React Native, TypeScript, Tailwind CSS</p>
                      </div>
                    </div>
                  )}

                  {/* Archive Tab */}
                  {activeTab === "archive" && (
                    <div className="space-y-2.5 text-xs text-neutral-300">
                      <div className="border-l-2 border-emerald-400 pl-2">
                        <p className="text-emerald-400 font-bold text-[11px]">Jan 2025 – Present</p>
                        <p className="text-[11px] text-neutral-200 font-semibold">Findability Sciences</p>
                        <p className="text-[10px] text-neutral-400">Jr. Software Engineer</p>
                      </div>
                      <div className="border-l-2 border-neutral-600 pl-2">
                        <p className="text-neutral-400 font-bold text-[11px]">2021 – 2025</p>
                        <p className="text-[11px] text-neutral-200 font-semibold">MIT Aurangabad</p>
                        <p className="text-[10px] text-neutral-400">B.Tech Computer Science &amp; Engineering</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Column 2: PROJECTS_REACTIVE (6 cols on lg) */}
          <div className="lg:col-span-6 min-h-0 flex flex-col rounded-xl border border-[#1c2730] bg-[#10171d] p-3.5">
            {/* Header with Search and Category filters */}
            <div className="flex-none border-b border-[#1c2730] pb-2.5 space-y-2">
              <div className="flex items-center justify-between text-amber-300 font-bold text-xs tracking-wider">
                <div className="flex items-center gap-1.5">
                  <span>&gt;&gt;</span>
                  <span>PROJECTS_REACTIVE</span>
                </div>
                <span className="rounded bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 border border-emerald-500/20">
                  {filteredProjects.length} / {PROJECTS_LIST.length} Units Available
                </span>
              </div>

              {/* Filters & Search Row */}
              <div className="flex items-center gap-2">
                <div className="relative flex-1">
                  <Search size={11} className="absolute left-2 top-2 text-neutral-500" />
                  <input
                    type="text"
                    value={projectSearch}
                    onChange={(e) => setProjectSearch(e.target.value)}
                    placeholder="filter projects..."
                    className="w-full rounded bg-[#090e12] border border-[#1f2b34] pl-6 pr-2 py-1 text-[11px] text-neutral-200 placeholder:text-neutral-600 focus:outline-none focus:border-amber-400/50"
                  />
                </div>
                <div className="flex items-center gap-1 text-[10px]">
                  {["ALL", "AI & Cloud", "Full Stack", "Mobile App"].map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setSelectedFilter(cat)}
                      className={`px-2 py-0.5 rounded transition-colors ${
                        selectedFilter === cat
                          ? "bg-amber-400 text-black font-bold"
                          : "bg-[#141f27] text-neutral-400 hover:text-neutral-200"
                      }`}
                    >
                      {cat === "AI & Cloud" ? "AI" : cat === "Full Stack" ? "Web" : cat === "Mobile App" ? "App" : "All"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Scrollable Project Cards Container */}
            <div className="flex-1 min-h-0 overflow-y-auto pr-1 pt-2.5 space-y-2.5">
              {filteredProjects.map((proj) => (
                <div
                  key={proj.id}
                  className={`group relative rounded-xl border p-3 transition-all duration-150 ${
                    proj.isHighlighted
                      ? "border-amber-400/80 bg-[#131b22] shadow-md shadow-amber-500/5 ring-1 ring-amber-400/30"
                      : "border-[#1c2730] bg-[#0c1217] hover:border-[#2a3a46] hover:bg-[#11181e]"
                  }`}
                >
                  {/* Top Row: Title + Links */}
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h3 className="text-xs sm:text-sm font-bold text-amber-300 group-hover:text-amber-200 flex flex-wrap items-center gap-1.5">
                        <span>{proj.name}</span>
                        <span className="text-neutral-400 font-normal text-[11px]">{proj.langTag}</span>
                      </h3>
                      <p className="text-[11px] text-neutral-300 font-medium">
                        {proj.subtitle}{" "}
                        <span className="text-amber-400/80 font-mono text-[10px]">| [{proj.version}]</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 flex-none">
                      <a
                        href={proj.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded p-1 text-neutral-400 hover:text-amber-300 hover:bg-[#1c2730] transition-colors"
                        title="View Source on GitHub"
                      >
                        <Github size={14} />
                      </a>
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded p-1 text-neutral-400 hover:text-amber-300 hover:bg-[#1c2730] transition-colors"
                          title="Launch Live Application"
                        >
                          <ExternalLink size={14} />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Tech details */}
                  <div className="mt-2 text-[10.5px] space-y-0.5 text-neutral-400">
                    <p>
                      <span className="text-neutral-500 font-semibold">Tech:</span>{" "}
                      <span className="text-neutral-300">{proj.tech}</span>
                    </p>
                    <p className="truncate">
                      <span className="text-neutral-500 font-semibold">Links:</span>{" "}
                      <a
                        href={proj.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-amber-400/90 underline hover:text-amber-300"
                      >
                        {proj.link}
                      </a>
                    </p>
                  </div>

                  {/* Bottom status badge */}
                  <div className="mt-2 flex items-center justify-between pt-1.5 border-t border-[#1c2730]/70 text-[10px]">
                    <span className="text-neutral-400">
                      Status: <span className="text-neutral-300 font-mono">{proj.status}</span>
                    </span>
                    <span className="inline-flex items-center gap-1 text-emerald-400 font-semibold">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                      Ready
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: TELEMETRY & STATS (3 cols on lg) */}
          <div className="lg:col-span-3 min-h-0 flex flex-col gap-2.5">
            {/* Box 1: TELEMETRY_LOGS */}
            <div className="flex-none rounded-xl border border-[#1c2730] bg-[#10171d] p-3">
              <div className="flex items-center gap-1.5 text-amber-300 font-bold text-xs tracking-wider border-b border-[#1c2730] pb-1.5">
                <span>&gt;</span>
                <span>[TELEMETRY_LOGS]</span>
              </div>
              <div className="mt-2 space-y-1.5 text-[11px]">
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Status:</span>
                  <span className="text-emerald-400 font-bold">[Operational]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Commits:</span>
                  <span className="text-amber-300 font-mono">[48/7 Days]</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-neutral-400">Ping:</span>
                  <span className="text-cyan-400 font-mono">[{ping}ms]</span>
                </div>
              </div>
            </div>

            {/* Box 2: Language_Stats with Donut Chart */}
            <div className="flex-none rounded-xl border border-[#1c2730] bg-[#10171d] p-2.5">
              <div className="text-amber-300 font-bold text-xs tracking-wider border-b border-[#1c2730] pb-1.5">
                Language_Stats
              </div>
              <div className="mt-2 flex items-center justify-around gap-2">
                {/* SVG Donut Chart */}
                <div className="relative h-20 w-20 flex-none">
                  <svg className="h-full w-full -rotate-90 transform" viewBox="0 0 36 36">
                    <path
                      className="text-[#19242d]"
                      strokeWidth="4.2"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Java (38%) */}
                    <path
                      className="text-amber-400"
                      strokeDasharray="38, 100"
                      strokeDashoffset="0"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* TypeScript (30%) */}
                    <path
                      className="text-orange-400"
                      strokeDasharray="30, 100"
                      strokeDashoffset="-38"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Python / RAG (18%) */}
                    <path
                      className="text-emerald-400"
                      strokeDasharray="18, 100"
                      strokeDashoffset="-68"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    {/* Cloud / Bash (14%) */}
                    <path
                      className="text-cyan-400"
                      strokeDasharray="14, 100"
                      strokeDashoffset="-86"
                      strokeWidth="4.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="text-[9px] font-bold text-amber-300">JAVA/TS</span>
                    <span className="text-[8px] text-neutral-400">68%</span>
                  </div>
                </div>

                {/* Legend */}
                <div className="grid grid-cols-1 gap-y-0.5 text-[9.5px] text-neutral-300">
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>Java (38%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                    <span>TS (30%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>Python (18%)</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                    <span>Cloud (14%)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 3: Recent_Activity / Interactive CLI: fills remaining height */}
            <div className="flex-1 min-h-0 rounded-xl border border-[#1c2730] bg-[#10171d] p-3 flex flex-col">
              <div className="flex-none text-amber-300 font-bold text-xs tracking-wider border-b border-[#1c2730] pb-1.5">
                &gt;_ Recent_Activity
              </div>
              <div className="flex-1 min-h-0 overflow-y-auto space-y-1 text-[9.5px] text-neutral-400 pt-1.5 pr-1">
                {terminalLogs.map((log, idx) => (
                  <p key={idx} className="leading-tight break-all font-mono">
                    {log}
                  </p>
                ))}
                <div ref={terminalEndRef} />
              </div>

              {/* Interactive CLI prompt */}
              <form onSubmit={handleCommandSubmit} className="flex-none mt-2 pt-1.5 border-t border-[#1c2730] flex items-center gap-1">
                <span className="text-emerald-400 text-xs font-bold">&gt;</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  placeholder="type 'help' or 'classic'"
                  className="w-full bg-transparent text-[10.5px] text-amber-300 placeholder:text-neutral-600 focus:outline-none font-mono"
                />
                <span className="inline-block w-1.5 h-3 bg-emerald-400 animate-pulse" />
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Vim Status Bar (matching reference image) */}
        <footer className="flex-none border-t border-[#1c2730] bg-[#090d11] text-[10.5px] font-mono text-neutral-300 px-3 py-1 flex items-center justify-between gap-2">
          {/* Left section: Neovim mode & file */}
          <div className="flex items-center gap-2">
            <span className="rounded bg-emerald-500/20 px-1.5 py-0.2 font-bold text-emerald-400 border border-emerald-500/40 text-[9.5px]">
              [N]
            </span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-300">normal</span>
            <span className="text-neutral-500">|</span>
            <span className="text-amber-400">[master] +</span>
            <span className="text-neutral-500">|</span>
            <span className="text-neutral-200">⑂ portfolio.tsx</span>
            <span className="text-neutral-500">|</span>
            <span className="text-cyan-400">[TS]</span>
          </div>

          {/* Right section: System telemetry details + quick switch */}
          <div className="flex items-center gap-2.5">
            <span className="hidden sm:inline text-neutral-400">UTF-8</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-amber-300">[48/100]</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-neutral-300">42:18</span>
            <span className="hidden sm:inline text-neutral-600">|</span>
            <span className="hidden sm:inline text-neutral-300">70%</span>
            <span className="rounded bg-emerald-500 px-1.5 py-0.2 font-bold text-black text-[9.5px]">
              nironman.sys/v2.4.0 (AETHER)
            </span>
            <button
              type="button"
              onClick={() => setMode("normal")}
              className="text-amber-300 hover:text-amber-200 underline font-semibold text-[10.5px] ml-1"
            >
              [Switch to Classic]
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
};
