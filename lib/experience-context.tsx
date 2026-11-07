"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

export type ExperienceMode = "developer" | "normal";

interface ExperienceContextType {
  mode: ExperienceMode;
  setMode: (mode: ExperienceMode) => void;
  isModalOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
  mounted: boolean;
}

const STORAGE_KEY = "portfolio_experience_mode_preference";

const ExperienceContext = createContext<ExperienceContextType | undefined>(undefined);

export const ExperienceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [mode, setModeState] = useState<ExperienceMode>("normal");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem(STORAGE_KEY) as ExperienceMode | null;
    if (saved === "developer" || saved === "normal") {
      setModeState(saved);
      setIsModalOpen(false);
    } else {
      // First visit: open modal for visitor to pick their experience
      setIsModalOpen(true);
    }
  }, []);

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (mode === "developer") {
      document.body.classList.add("dev-mode-active");
    } else {
      document.body.classList.remove("dev-mode-active");
    }
  }, [mode]);

  const setMode = (newMode: ExperienceMode) => {
    setModeState(newMode);
    localStorage.setItem(STORAGE_KEY, newMode);
    setIsModalOpen(false);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <ExperienceContext.Provider
      value={{
        mode,
        setMode,
        isModalOpen,
        openModal,
        closeModal,
        mounted,
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error("useExperience must be used within an ExperienceProvider");
  }
  return context;
};
