"use client";

import React from "react";
import { ProjectDetailView } from "@/components/ProjectDetailView";

const HighBlogsDetails: React.FC = () => {
  return (
    <ProjectDetailView
      title="High-Blogs"
      subtitle="Full-Stack Serverless Blogging Platform with Cloudflare Workers"
      category="Full Stack & Serverless"
      githubUrl="https://github.com/NIRONMAN/High-Blogs"
      liveUrl="https://high-blogs.pages.dev/"
      technologies={[
        "React",
        "TypeScript",
        "Cloudflare Workers",
        "Wrangler",
        "Prisma Accelerate",
        "Hono",
        "PostgreSQL",
      ]}
      description="High-Blogs is a high-performance full-stack blogging platform built on Cloudflare's serverless edge environment with Prisma connection pooling and Hono API routing."
      highlights={[
        "Developed a full-stack blog application leveraging serverless architecture for instant global response times.",
        "Built the frontend using React and TypeScript, with a common shared npm module for consistent type management across client and server API.",
        "Implemented serverless backend using Cloudflare Workers and Wrangler, utilizing Prisma ORM with Prisma Accelerate for efficient connection pooling.",
        "Employed Hono framework to create lightweight, fast backend endpoints ensuring high concurrency and minimal cold starts.",
      ]}
    />
  );
};

export default HighBlogsDetails;