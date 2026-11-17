<div align="center">

# 🌐 Niranjan Dabhade — Portfolio (`portfolio-ngd`)

<p align="center">
  <strong>Production-grade developer portfolio featuring a dual-mode Cyberpunk HUD & Classic editorial experience. Showcasing distributed backend engineering in Java Spring Boot, cloud orchestration with Kubernetes & ArgoCD, BigQuery data pipelines, and enterprise AI RAG systems.</strong>
</p>

[![Live Site](https://img.shields.io/badge/Live%20Demo-niranjandabhade.dev-indigo?style=for-the-badge&logo=vercel&logoColor=white)](https://niranjandabhade.dev)
[![Alternate Domain](https://img.shields.io/badge/Portfolio%20Domain-nironman.com-blue?style=for-the-badge&logo=googlechrome&logoColor=white)](https://www.nironman.com)
[![GitHub Profile](https://img.shields.io/badge/GitHub-NIRONMAN-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/NIRONMAN)

<br />

[![Next.js](https://img.shields.io/badge/Next.js-14.2.35-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0_(Strict)-3178C6?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Multi--Stage_Standalone-2496ED?style=flat-square&logo=docker&logoColor=white)](https://www.docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](LICENSE)

</div>

---

## ⚡ Live Deployments

| Environment | Production URL | Description |
| :--- | :--- | :--- |
| **Primary Domain** | [**https://niranjandabhade.dev**](https://niranjandabhade.dev) | Canonical production domain with SSL, edge caching, and automated deployment |
| **Portfolio Alias** | [**https://www.nironman.com**](https://www.nironman.com) | Alternate vanity domain pointing to the live portfolio instance |

---

## 📑 Table of Contents

- [Overview & Design Philosophy](#-overview--design-philosophy)
- [Dual-Mode Visitor Experience](#-dual-mode-visitor-experience)
- [Featured Projects Showcase](#-featured-projects-showcase)
- [Architecture & Tech Stack](#-architecture--tech-stack)
- [Project Directory Structure](#-project-directory-structure)
- [Security, Rate Limiting & SEO](#-security-rate-limiting--seo)
- [Local Development & Setup](#-local-development--setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running Locally](#running-locally)
  - [Production Build](#production-build)
- [Docker & Containerized Deployment](#-docker--containerized-deployment)
  - [Multi-Stage Dockerfile Architecture](#multi-stage-dockerfile-architecture)
  - [Docker Compose](#docker-compose)
  - [Direct Docker Build & Run](#direct-docker-build--run)
- [Author & Connect](#-author--connect)

---

## 💡 Overview & Design Philosophy

`portfolio-ngd` is the personal portfolio and digital engineering dossier of **Niranjan Dabhade**, Jr. Software Engineer at **Findability Sciences**. 

Unlike conventional, static developer portfolios, `portfolio-ngd` is engineered as a modern, high-performance web platform utilizing **Next.js 14 App Router**, **React 18**, and **TypeScript 5 (Strict Mode)**. It demonstrates core production principles:

- **Tailored Multi-Persona UX:** Recognizes that technical peers and technical recruiters inspect portfolios through distinct lenses, providing dynamic interactive modes.
- **Enterprise-Grade Type Safety:** Strict TypeScript compilation with zero implicit `any`, unified models across contexts, and comprehensive Zod validation.
- **Edge Performance & Standalone Efficiency:** Optimized asset delivery, dynamic font optimization via `next/font`, and multi-stage containerization with Next.js `standalone` output for low memory footprints.
- **Resilient Serverless API Design:** Secured communication channels featuring in-memory IP sliding-window rate limiting, input sanitization against email header injection, and Google reCAPTCHA v2 verification.

---

## 🕹️ Dual-Mode Visitor Experience

Visitors are greeted with an interactive mode selector allowing them to customize the interface to their browsing intent:

```
+-----------------------------------------------------------------------------------+
|                            EXPERIENCE_SELECT // v2.0                              |
|                                                                                   |
|   [1] DEV.SYS HUD (Developer Mode)        [2] CLASSIC VIEW (Recruiter Mode)       |
|   --------------------------------        ---------------------------------       |
|   • Cyberpunk terminal aesthetics         • Clean, elegant editorial typography   |
|   • Real-time system telemetry            • High-level engineering summaries      |
|   • Neovim-style statusline & breadcrumbs • Comprehensive career track record     |
|   • Reactive project explorer             • Streamlined contact form              |
+-----------------------------------------------------------------------------------+
```

### 1. Developer HUD Mode (`developer`)
- **Aesthetic:** Cyberpunk-inspired terminal palette (`#0f171d`, neon ambers, emeralds, and violets).
- **Interactive Telemetry:** Live uptime clock, memory monitor simulation, language distribution donut charts, and interactive filtering by stack tags.
- **Developer Ergonomics:** Full keyboard navigation support (press <kbd>1</kbd> or <kbd>2</kbd> to switch modes, <kbd>Esc</kbd> to dismiss).
- **Neovim Statusline:** Terminal-inspired status bar tracking current view state, Git branch, and system status.

### 2. Classic Editorial Mode (`normal`)
- **Aesthetic:** Minimalist, high-contrast editorial design with typography pairing **Cormorant Garamond** (display), **Manrope** (sans-serif), and **JetBrains Mono** (code).
- **Recruiter-Focused Hierarchy:** Structured project deep dives, architecture highlights, skill categorization, and direct social contact channels.
- **Dark & Light Mode Integration:** Powered by `next-themes` with zero flicker on initial server render.

---

## 🚀 Featured Projects Showcase

The portfolio showcases production systems and full-stack platforms engineered by Niranjan:

### 1. [Learnability AI 2.0](https://github.com/NIRONMAN/Learnability_2.0)
*Enterprise Multimodal Learning Platform with RAG & Agentic Processing*
- **Stack:** Next.js 14, Python Flask, LangChain, LlamaParse, RAG Architecture, Firebase Firestore, Mermaid.js, FFmpeg.
- **Key Highlights:**
  - Engineered hybrid Retrieval-Augmented Generation (RAG) indexing dense textbooks and research papers with LlamaParse table parsing.
  - Streaming LLM token output transformed on the fly into interactive visual concept hierarchies via dynamic Mermaid.js generation.
  - Asynchronous audio and video ingestion pipeline powered by FFmpeg for lecture summarization.

### 2. [InfectiGuard](https://github.com/NIRONMAN/InfectiGuard)
*Offline-First Hospital ICU Monitoring & Biomedical Audit Platform*
- **Stack:** React Native, Expo, Redux Toolkit, SQLite, Firebase Firestore, ExcelJS.
- **Key Highlights:**
  - True offline-first architecture using local SQLite storage and Redux persistence for zero-connectivity ICU environments.
  - Automatic bidirectional delta synchronization and conflict-free reconciliation once network connectivity is re-established.
  - On-device client-side Excel reporting engine compliant with NABH hospital biomedical safety standards.

### 3. [High Blogs](https://github.com/NIRONMAN/High-Blogs) ([Live Demo](https://high-blogs.pages.dev/))
*Edge-Rendered Serverless Publishing Platform on Cloudflare Workers*
- **Stack:** React, TypeScript, Cloudflare Workers, Hono Framework, Prisma Accelerate, PostgreSQL, Tailwind CSS.
- **Key Highlights:**
  - Sub-50ms global response latency achieved by distributing the API over Cloudflare's edge network using the ultra-lightweight Hono router.
  - Scaled serverless database queries through Prisma Accelerate connection pooling against PostgreSQL.
  - Strict monorepo architecture with 100% end-to-end type safety shared between the frontend client and edge workers.

### 4. [Niropay](https://github.com/NIRONMAN/Niropay)
*Fintech Digital Wallet & Transaction Engine with ACID Guarantees*
- **Stack:** Node.js, Express, MongoDB Sessions, Mongoose Transactions, JWT Security, React, Tailwind CSS.
- **Key Highlights:**
  - Implemented multi-document transactional integrity using MongoDB Sessions to eliminate double-spend vulnerabilities during concurrent peer-to-peer transfers.
  - Fortified authentication layer utilizing HTTP-only cookie-based JWTs, bcrypt salt hashing, and strict payload sanitization.
  - Automated integration testing suite verifying transactional rollbacks under simulated network partitions.

---

## 🛠️ Architecture & Tech Stack

```
+---------------------------------------------------------------------------------+
|                                 CLIENT LAYER                                    |
|   Next.js 14 App Router  |  React 18  |  Tailwind CSS  |  Radix UI Primitives   |
|   Theme Manager (next-themes)  |  Experience Context (Cyberpunk vs Classic)     |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
|                               SERVERLESS API                                    |
|   Next.js Edge/Node Runtime (/api/sendmail)                                     |
|   + In-Memory Sliding-Window IP Rate Limiter (10 min / 5 req)                   |
|   + Payload Validation & Typing (Zod)                                           |
|   + Anti-Abuse Human Verification (Google reCAPTCHA v2 API)                     |
|   + Sanitized Dispatch Engine (Nodemailer via secure SMTP)                      |
+---------------------------------------------------------------------------------+
                                      |
                                      v
+---------------------------------------------------------------------------------+
|                             CONTAINER & DEPLOYMENT                              |
|   Multi-Stage Dockerfile (Alpine Linux)  |  Next.js Standalone Runner           |
|   Non-Root Execution (UID 1001)          |  Docker Compose Orchestration        |
+---------------------------------------------------------------------------------+
```

| Layer | Technologies | Purpose & Implementation |
| :--- | :--- | :--- |
| **Framework** | Next.js `14.2.35` (App Router) | Server-side rendering (SSR), static site generation (SSG), routing, and serverless API handlers |
| **UI Library** | React `18`, Lucide Icons | Declarative component model, responsive icons, and modular component composition |
| **Styling & System** | Tailwind CSS `3.4`, Radix UI | Utility-first responsive design, accessible headless UI primitives, custom design tokens |
| **Typography** | `next/font` | Zero-layout-shift font optimization: Cormorant Garamond, Manrope, JetBrains Mono |
| **Form Management** | React Hook Form, Zod | Uncontrolled performant form inputs backed by strict schema runtime validation |
| **Security & Email** | Nodemailer, Google reCAPTCHA v2 | Secure SMTP mail dispatching with HTML entity escaping and human verification |
| **Deployment** | Docker, Docker Compose | Self-contained multi-stage Alpine container with standalone Node output |

---

## 📁 Project Directory Structure

```plaintext
portfolio-ngd/
├── app/                              # Next.js App Router root
│   ├── api/
│   │   └── sendmail/
│   │       └── route.ts              # Contact form API handler (Zod, Rate-limiting, reCAPTCHA, Nodemailer)
│   ├── projects/
│   │   └── [slug]/
│   │       └── page.tsx              # Dynamic deep-dive project case study route
│   ├── globals.css                   # Global Tailwind utilities, theme variables & animations
│   ├── layout.tsx                    # Root HTML layout, font loaders, JSON-LD Schema & providers
│   ├── page.tsx                      # Primary page view switching between Developer and Classic views
│   ├── robots.ts                     # Dynamic robots.txt SEO handler
│   └── sitemap.ts                    # Dynamic sitemap.xml generator with canonical routes
├── components/                       # Modular React UI components
│   ├── ui/                           # Reusable design system primitives (Radix UI / Tailwind)
│   │   ├── button.tsx
│   │   ├── form.tsx
│   │   ├── input.tsx
│   │   ├── label.tsx
│   │   └── textarea.tsx
│   ├── About.tsx                     # Career narrative, engineering philosophy & timeline
│   ├── ContactMe.tsx                 # Interactive contact form with live reCAPTCHA validation
│   ├── DeveloperPortfolio.tsx        # Cyberpunk DEV.SYS HUD terminal interface
│   ├── Footer.tsx                    # Footer with copyright, back-to-top, and social links
│   ├── Header.tsx                    # Hero introduction, headline, badges, and CTA triggers
│   ├── ModeSelectionModal.tsx        # Modal dialogue for visitor experience selection
│   ├── NavBar.tsx                    # Navigation bar with theme toggle and mode switcher
│   ├── ProjectDetailView.tsx         # Comprehensive case study view for project slugs
│   ├── Projects.tsx                  # Classic view project catalog with preview cards
│   └── Skills.tsx                    # Capability matrices (Backend, Cloud, AI, Security)
├── config/
│   └── nodeMailer.ts                 # Nodemailer transporter configuration
├── lib/                              # Shared application utilities and state stores
│   ├── experience-context.tsx        # React context managing Cyberpunk HUD vs Classic state
│   ├── projects-data.ts              # Centralized data model and metadata for showcased projects
│   └── utils.ts                      # Tailwind clsx + twMerge utility function
├── public/                           # Static assets, SVG logos, and OpenGraph imagery
│   ├── Logo.svg
│   ├── programmer.png
│   ├── blog.avif
│   └── niropay.jpg
├── compose.yaml                      # Docker Compose service specification
├── Dockerfile                        # Multi-stage production Docker build (deps, builder, runner)
├── next.config.mjs                   # Next.js configuration (standalone output, redirects, images)
├── package.json                      # Dependencies and npm script definitions
├── tailwind.config.ts                # Tailwind design system, colors, fonts, and animation tokens
└── tsconfig.json                     # TypeScript strict configuration and path aliases (@/*)
```

---

## 🔒 Security, Rate Limiting & SEO

### In-Memory Sliding-Window Rate Limiting
To protect the serverless contact endpoint from abuse, brute-force spamming, and credential exhaustion, an in-memory IP rate limiter is built directly into [`app/api/sendmail/route.ts`](app/api/sendmail/route.ts):
- **Window Size:** 10 minutes (`RATE_LIMIT_WINDOW_MS = 600,000ms`).
- **Threshold:** Maximum 5 submissions per unique IP per window.
- **Exceeding Requests:** Immediately short-circuited with HTTP `429 Too Many Requests`.

### Sanitization & Anti-Abuse
- **XSS & Header Injection Prevention:** All inputs (`senderName`, `email`, `message`) undergo newline stripping and HTML entity encoding before passing into email templates.
- **Google reCAPTCHA v2:** Validates tokens against the Google Verification API before processing. If no key is configured in local development, it gracefully bypasses checks to allow offline testing.

### Search Engine Optimization (SEO) & Structured Data
- **JSON-LD Schema.org:** Injected in [`app/layout.tsx`](app/layout.tsx) declaring structured entities for [`Person`](https://schema.org/Person) and [`WebSite`](https://schema.org/WebSite), indexing technical skills, education, and social coordinates.
- **Dynamic OpenGraph & Twitter Cards:** Configured for high-resolution 1200x630 social share cards.
- **Automated Crawlers:** [`app/sitemap.ts`](app/sitemap.ts) and [`app/robots.ts`](app/robots.ts) dynamically announce URLs and crawling directives.

---

## 🛠️ Local Development & Setup

### Prerequisites
- **Node.js:** `>= 18.17.0` (Recommended: Node 20 LTS)
- **npm:** `>= 9.0.0` (or `pnpm` / `yarn`)
- **Git**

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/NIRONMAN/portfolio-ngd.git
   cd portfolio-ngd
   ```

2. **Install project dependencies:**
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env.local` file in the root directory by following the template below:

```bash
# Create local environment file
touch .env.local
```

Populate `.env.local` with your configuration:

```env
# -----------------------------------------------------------------------------
# Nodemailer Email Configuration
# -----------------------------------------------------------------------------
# The Gmail address that will dispatch and receive portfolio contact messages
EMAIL=your-email@gmail.com

# Gmail App Password (generated via Google Account -> Security -> App Passwords)
PASS=your-16-character-app-password

# -----------------------------------------------------------------------------
# Google reCAPTCHA v2 Configuration
# -----------------------------------------------------------------------------
# Public client site key (safe for browser exposure)
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key

# Secret key used on the server API route to verify submission tokens
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

> **Note:** If `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` and `RECAPTCHA_SECRET_KEY` are omitted during local development, the contact form automatically operates in fallback mode without blocking submissions.

### Running Locally

Start the local development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The application will hot-reload automatically as you edit files.

### Production Build

To test the production build locally:

```bash
# Build optimized production bundle
npm run build

# Start production server
npm run start
```

---

## 🐳 Docker & Containerized Deployment

`portfolio-ngd` features an enterprise-grade, multi-stage Docker build producing an ultra-lightweight, standalone container image.

### Multi-Stage Dockerfile Architecture

The build process is divided into three isolated stages in [`Dockerfile`](Dockerfile):

1. **`deps` (Alpine Node base):** Installs required OS packages (`libc6-compat`) and resolves dependencies via `npm ci` using lockfile caching.
2. **`builder`:** Copies dependency layers and project source, executing `npm run build`. Next.js leverages `output: "standalone"` in `next.config.mjs` to trace and bundle only the exact node_modules needed at runtime.
3. **`runner`:** Prepares a secure, minimal production container, creates a dedicated unprivileged user group (`nodejs:nextjs`, UID 1001), copies only `.next/standalone`, `.next/static`, and `public`, exposing port `3000`.

### Docker Compose

Launch the containerized application with a single command:

```bash
# Build and start in foreground
docker compose up --build

# Or start in detached mode
docker compose up --build -d
```

View running logs:
```bash
docker compose logs -f server
```

Stop the service:
```bash
docker compose down
```

### Direct Docker Build & Run

Alternatively, build and run using standard Docker commands:

```bash
# Build the Docker image
docker build -t portfolio-ngd .

# Run the container mapping port 3000
docker run -p 3000:3000 \
  -e EMAIL="your-email@gmail.com" \
  -e PASS="your-app-password" \
  -e RECAPTCHA_SECRET_KEY="your-recaptcha-secret-key" \
  --name portfolio-app portfolio-ngd
```

The containerized application will be available at [http://localhost:3000](http://localhost:3000).

---

## 👨‍💻 Author & Connect

**Niranjan Dabhade**  
*Jr. Software Engineer @ Findability Sciences*  
Specializing in Java Spring Boot, Cloud Infrastructure (Kubernetes & ArgoCD), BigQuery, and AI RAG Systems.

- **Portfolio:** [niranjandabhade.dev](https://niranjandabhade.dev)
- **Alternate Domain:** [nironman.com](https://www.nironman.com)
- **GitHub:** [@NIRONMAN](https://github.com/NIRONMAN)
- **LinkedIn:** [linkedin.com/in/nironman](https://www.linkedin.com/in/nironman/)
- **LeetCode:** [leetcode.com/u/nironman](https://leetcode.com/u/nironman/)
- **Email:** [niranjan.dabhade7@gmail.com](mailto:niranjan.dabhade7@gmail.com)

---

<div align="center">
  <sub>Designed &amp; Engineered with ❤️ by Niranjan Dabhade. Powered by Next.js &amp; Tailwind CSS.</sub>
</div>
