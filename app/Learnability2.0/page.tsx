"use client";

import React from "react";
import { ProjectDetailView } from "@/components/ProjectDetailView";

const LearnabilityDetails: React.FC = () => {
  return (
    <ProjectDetailView
      title="Learnability AI 2.0"
      subtitle="AI-Driven Document & Video Processing Learning Ecosystem"
      category="AI Engineering & RAG"
      githubUrl="https://github.com/NIRONMAN/Learnability_2.0"
      liveUrl="https://linktr.ee/learnability"
      technologies={[
        "Next.js",
        "Flask",
        "LangChain",
        "RAG Pipeline",
        "LlamaParse",
        "Firebase",
        "yt-dlp",
        "FFmpeg",
        "Mermaid.js",
      ]}
      description="Learnability AI 2.0 is an intelligent educational platform that ingests complex documents and technical videos to automatically build RAG knowledge graphs, mind maps, and interactive flashcards."
      highlights={[
        "Built an AI-driven learning platform processing large documents via LlamaParse and a LangChain RAG pipeline scaling to 1,000+ concurrent queries.",
        "Boosted user engagement by 25% by generating interactive Mermaid-based mind maps and AI flashcards for optimized student retention.",
        "Automated video processing pipelines using yt-dlp and FFmpeg to extract audio, generate transcription embeddings, and summarize technical lectures.",
      ]}
    />
  );
};

export default LearnabilityDetails;