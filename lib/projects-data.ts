export type ProjectDetail = {
  slug: string;
  title: string;
  subtitle: string;
  category: "AI & Cloud" | "Full Stack" | "Mobile App";
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  technologies: string[];
  highlights: string[];
  description: string;
  additionalReferences?: { label: string; url: string }[];
};

export const PROJECTS_DATA: ProjectDetail[] = [
  {
    slug: "learnability-ai",
    title: "Learnability AI 2.0",
    subtitle: "Enterprise Multimodal Learning Platform with RAG & Agentic Processing",
    category: "AI & Cloud",
    githubUrl: "https://github.com/NIRONMAN/Learnability_2.0",
    imageUrl: "/Logo.svg",
    technologies: [
      "Next.js 14",
      "Python Flask",
      "LangChain",
      "LlamaParse",
      "RAG Architecture",
      "Firebase Firestore",
      "Mermaid.js",
      "FFmpeg",
    ],
    description:
      "Learnability AI 2.0 is an intelligent educational pipeline platform designed to parse dense multimodal textbooks, technical papers, and course lectures into modular, interactive study material, structured mind maps, and instant retrieval indexes.",
    highlights: [
      "Engineered a hybrid Retrieval-Augmented Generation (RAG) system with LlamaParse for complex document parsing, table extraction, and dense embedding indexing.",
      "Built dynamic mind map generation utilizing Mermaid.js syntax parsed directly from LLM streaming responses for visual concept hierarchies.",
      "Integrated FFmpeg media processing pipeline to transcribe audio lectures and slice key video segments into timestamped chapter summaries.",
      "Architected clean Next.js App Router frontend with real-time Firestore synchronization for collaborative notes and quizzes.",
    ],
    additionalReferences: [
      { label: "GitHub Repository", url: "https://github.com/NIRONMAN/Learnability_2.0" },
    ],
  },
  {
    slug: "infectiguard",
    title: "InfectiGuard",
    subtitle: "Offline-First Hospital ICU Monitoring & Biomedical Audit Platform",
    category: "Mobile App",
    githubUrl: "https://github.com/NIRONMAN/InfectiGuard",
    imageUrl: "/programmer.png",
    technologies: [
      "React Native",
      "Expo",
      "Redux Toolkit",
      "Firebase Firestore",
      "Offline SQLite",
      "Biomedical Compliance",
      "ExcelJS",
    ],
    description:
      "InfectiGuard is a critical healthcare inspection and audit mobile application built for hospital infection control teams. Designed for high-stress hospital environments with intermittent connectivity, it operates completely offline-first with robust background sync.",
    highlights: [
      "Implemented an offline-first mobile architecture using Redux persistence and SQLite, automatically reconciling conflict-free mutations with Firestore when reconnected.",
      "Streamlined hospital biomedical waste auditing according to NABH and international clinical safety compliance standards.",
      "Built automated client-side Excel reporting engine generating immediate ICU hygiene audit reports for hospital administrators.",
      "Optimized form rendering and camera image compression to minimize memory footprint on low-spec hospital handheld devices.",
    ],
    additionalReferences: [
      { label: "GitHub Repository", url: "https://github.com/NIRONMAN/InfectiGuard" },
    ],
  },
  {
    slug: "high-blogs",
    title: "High Blogs",
    subtitle: "Edge-Rendered Serverless Publishing Platform on Cloudflare Workers",
    category: "Full Stack",
    githubUrl: "https://github.com/NIRONMAN/High-Blogs",
    liveUrl: "https://high-blogs.pages.dev/",
    imageUrl: "/blog.avif",
    technologies: [
      "React",
      "TypeScript",
      "Cloudflare Workers",
      "Hono Framework",
      "Prisma Accelerate",
      "PostgreSQL",
      "Tailwind CSS",
    ],
    description:
      "High Blogs is a modern developer blogging platform engineered for sub-50ms global edge latency. Powered by Cloudflare Workers and Hono, it avoids traditional server cold starts while keeping database connection pooling scalable.",
    highlights: [
      "Constructed a distributed backend on Cloudflare Workers edge network using Hono for lightweight, ultrafast routing.",
      "Utilized Prisma ORM paired with Prisma Accelerate to provide global connection pooling against serverless PostgreSQL.",
      "Created a shared npm monorepo package for TypeScript type definitions, ensuring 100% end-to-end type safety between backend and frontend.",
      "Implemented JWT authentication and markdown parsing with syntax highlighting optimized for mobile and desktop readers.",
    ],
    additionalReferences: [
      { label: "Live Application", url: "https://high-blogs.pages.dev/" },
      { label: "GitHub Repository", url: "https://github.com/NIRONMAN/High-Blogs" },
    ],
  },
  {
    slug: "niropay",
    title: "Niropay",
    subtitle: "Fintech Digital Wallet & Transaction Engine with ACID Guarantees",
    category: "Full Stack",
    githubUrl: "https://github.com/NIRONMAN/Niropay",
    imageUrl: "/niropay.jpg",
    technologies: [
      "Node.js",
      "Express",
      "MongoDB",
      "Mongoose Transactions",
      "JWT Security",
      "React",
      "Tailwind CSS",
    ],
    description:
      "Niropay is a secure peer-to-peer payments and wallet simulation platform featuring atomic money transfers, debits, credits, and comprehensive ledger verification.",
    highlights: [
      "Implemented atomic multi-document transactions using MongoDB Sessions to guarantee zero double-spend or money loss during concurrent transfer requests.",
      "Secured authentication layer with bcrypt password hashing, HTTP-only JWT cookies, and strict input sanitization.",
      "Designed responsive banking dashboard for account balance tracking, recipient search with debounced queries, and immediate transfer receipts.",
      "Built automated integration test suites validating transactional rollback scenarios under simulated network failure.",
    ],
    additionalReferences: [
      { label: "GitHub Repository", url: "https://github.com/NIRONMAN/Niropay" },
    ],
  },
];
