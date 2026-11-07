"use client";

import React, { useEffect } from "react";
import { useExperience } from "@/lib/experience-context";
import { Terminal, Sparkles, Code2, ArrowRight, X, Cpu, Layers } from "lucide-react";

export const ModeSelectionModal: React.FC = () => {
  const { isModalOpen, setMode, closeModal, mounted } = useExperience();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isModalOpen) return;
      if (e.key === "1") {
        setMode("developer");
      } else if (e.key === "2") {
        setMode("normal");
      } else if (e.key === "Escape") {
        closeModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isModalOpen, setMode, closeModal]);

  if (!mounted || !isModalOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-2xl rounded-2xl border border-border/80 bg-background/95 p-6 sm:p-8 shadow-2xl dark:border-white/[0.12] dark:bg-[#0c1218]/95 overflow-hidden"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Subtle decorative glow */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-48 w-48 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-48 w-48 rounded-full bg-emerald-500/10 blur-3xl" />

        {/* Close Button */}
        <button
          type="button"
          onClick={closeModal}
          className="absolute top-4 right-4 rounded-lg p-2 text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Header */}
        <div className="text-center sm:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-3 py-1 text-xs font-mono font-medium text-indigo-600 dark:text-indigo-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500" />
            </span>
            <span>EXPERIENCE_SELECT // v2.0</span>
          </div>

          <h2 id="modal-title" className="mt-3 text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground">
            Welcome to Niranjan&apos;s Portfolio
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Choose your preferred interface. Are you an engineer looking for raw code and telemetry, or exploring for recruitment?
          </p>
        </div>

        {/* Options Grid */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Option 1: Developer Mode */}
          <button
            type="button"
            onClick={() => setMode("developer")}
            className="group relative flex flex-col justify-between rounded-xl border-2 border-amber-500/30 bg-[#0f171d]/80 p-5 text-left transition-all hover:border-amber-400 hover:bg-[#131f28] hover:shadow-lg hover:shadow-amber-500/10 focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-amber-500/30 bg-amber-500/10 text-amber-400 group-hover:scale-105 transition-transform">
                <Terminal size={20} />
              </div>
              <span className="rounded font-mono text-[10px] font-bold uppercase tracking-wider text-amber-300 bg-amber-500/20 px-2 py-0.5 border border-amber-500/30">
                Key [ 1 ]
              </span>
            </div>

            <div className="mt-4">
              <div className="flex items-center gap-2">
                <h3 className="font-mono text-base font-bold text-amber-300 group-hover:text-amber-200">
                  I&apos;m a Developer
                </h3>
              </div>
              <p className="mt-1 text-xs text-neutral-300 leading-relaxed">
                Cyberpunk system HUD, reactive projects, live telemetry, donut language stats &amp; Neovim statusline.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-1.5 font-mono text-xs font-semibold text-amber-400 group-hover:translate-x-1 transition-transform">
              <span>Launch DEV.SYS HUD</span>
              <ArrowRight size={13} />
            </div>
          </button>

          {/* Option 2: Classic / Recruiter Mode */}
          <button
            type="button"
            onClick={() => setMode("normal")}
            className="group relative flex flex-col justify-between rounded-xl border-2 border-border/80 bg-secondary/30 p-5 text-left transition-all hover:border-indigo-500/40 hover:bg-secondary/60 hover:shadow-lg hover:shadow-indigo-500/5 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-white/[0.08] dark:bg-white/[0.03]"
          >
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-indigo-500/20 bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 group-hover:scale-105 transition-transform">
                <Sparkles size={20} />
              </div>
              <span className="rounded font-mono text-[10px] font-bold uppercase tracking-wider text-muted-foreground bg-muted px-2 py-0.5">
                Key [ 2 ]
              </span>
            </div>

            <div className="mt-4">
              <h3 className="text-base font-bold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                I&apos;m a Recruiter / Visitor
              </h3>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                Classic editorial portfolio featuring architectural summaries, career track record, and contact form.
              </p>
            </div>

            <div className="mt-5 flex items-center gap-1.5 text-xs font-semibold text-foreground group-hover:text-indigo-600 dark:group-hover:text-indigo-400 group-hover:translate-x-1 transition-transform">
              <span>Enter Classic View</span>
              <ArrowRight size={13} />
            </div>
          </button>
        </div>

        {/* Footer tip */}
        <div className="mt-6 flex items-center justify-between text-[11px] text-muted-foreground pt-4 border-t border-border/80 dark:border-white/[0.08]">
          <span>💡 You can switch themes anytime using the toggle in the header.</span>
          <span className="hidden sm:inline font-mono">Press 1 or 2 to choose</span>
        </div>
      </div>
    </div>
  );
};
