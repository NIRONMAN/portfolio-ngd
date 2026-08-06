# AGENTS.md

Welcome to **portfolio-niranjan** (`portfolio-ngd`). This document serves as the guide for AI agents, developers, and automated tools working on this codebase.

## 🚀 Project Overview

`portfolio-niranjan` is a modern, high-performance developer portfolio built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, **Framer Motion**, and **Radix UI / Shadcn primitives**.

- **App Router:** Utilizes Next.js `app` directory structure.
- **Interactive UI:** Smooth animations with Framer Motion, 3D card effects, and background particle effects (`@tsparticles`).
- **Contact & API:** Contact form integration with **React Hook Form**, **Zod**, **reCAPTCHA**, and **Nodemailer** via Next.js API routes (`app/api`).
- **Containerization:** Production-ready Docker build support (`Dockerfile`, `compose.yaml`).

---

## 🛠️ Tech Stack & Key Libraries

| Category | Technology / Library |
|---|---|
| **Framework** | Next.js 14 (App Router), React 18 |
| **Language** | TypeScript 5 |
| **Styling** | Tailwind CSS 3, `tailwindcss-animate`, CSS Modules (`globals.css`) |
| **Animation & Effects** | Framer Motion, `@tsparticles/react`, `@tsparticles/slim`, `@tsparticles/fireworks` |
| **UI Primitives** | Radix UI primitives (`@radix-ui/react-slot`, `@radix-ui/react-toast`, `@radix-ui/react-label`), Class Variance Authority (`cva`), `clsx`, `tailwind-merge` |
| **Form & Validation** | React Hook Form, Zod schema validation, `react-google-recaptcha` |
| **Icons** | Lucide React, Tabler Icons, Devicon, Ant Design Icons, React Icons |
| **Backend & Email** | Nodemailer, Axios |
| **Deployment & Ops** | Docker, Docker Compose, Next.js standalone output support |

---

## 📁 Repository Structure

```
portfolio-ngd/
├── app/                  # Next.js App Router root
│   ├── api/              # API routes (e.g. contact form submission)
│   ├── High-Blogs/       # Sub-project / showcase page
│   ├── InfectiGuard/     # Sub-project / showcase page
│   ├── Learnability2.0/  # Sub-project / showcase page
│   ├── Niropay/          # Sub-project / showcase page
│   ├── globals.css       # Global styles & Tailwind directives
│   ├── layout.tsx        # Root layout wrapper
│   └── page.tsx          # Home page
├── components/           # React components
│   ├── ui/               # Reusable UI primitives (buttons, inputs, toasts)
│   ├── About.tsx         # About section
│   ├── Card.tsx          # Base card component
│   ├── Card3D.tsx        # 3D interactive card component
│   ├── ContactMe.tsx     # Contact section & form
│   ├── Header.tsx        # Header component
│   ├── NavBar.tsx        # Navigation bar
│   ├── Projects.tsx      # Projects display section
│   ├── Skills.tsx        # Tech stack & skills showcase
│   └── TyperCompo.tsx    # Typing animation text effect
├── config/               # Configuration utilities (e.g. nodeMailer.ts)
├── lib/                  # Helper utilities (e.g. utils.ts with `cn` merge helper)
├── public/               # Static assets (images, icons, documents)
├── .env                  # Environment configuration (git-ignored)
├── Dockerfile            # Docker production container spec
├── compose.yaml          # Docker Compose setup
├── next.config.mjs       # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
└── tsconfig.json         # TypeScript configuration
```

---

## 💻 Commands & Development Workflow

### Setup & Installation
```bash
npm install
```

### Running Locally
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the development server.

### Building & Production Check
```bash
npm run build
npm run start
```

### Linting
```bash
npm run lint
```

### Docker Commands
```bash
# Build and run container with Docker Compose
docker compose up --build

# Run in detached mode
docker compose up -d
```

---

## 🤖 Guidelines for AI Agents

When editing or adding code in this repository, follow these rules:

1. **Client Components:**
   - Always add `'use client';` at the top of files using React hooks (`useState`, `useEffect`), browser APIs, or interactive libraries (Framer Motion, `@tsparticles`, reCAPTCHA).

2. **Component Architecture:**
   - Keep page-level components (`app/page.tsx`, `app/*/page.tsx`) lean. Delegate UI blocks to modular components in `components/`.
   - Put low-level reusable primitives in `components/ui/`.

3. **Styling & Utility Merging:**
   - Use Tailwind CSS classes for styling.
   - For combining dynamic or conditional classes, use the `cn(...)` utility from `@/lib/utils` (`clsx` + `tailwind-merge`).

4. **Types & Imports:**
   - Maintain strict TypeScript types. Avoid `any`.
   - Use path aliases (e.g., `@/components/...`, `@/lib/...`, `@/config/...`).

5. **Environment Variables:**
   - Ensure external credentials (Nodemailer SMTP keys, reCAPTCHA keys) are read from `process.env` and kept out of client-side code unless prefixed with `NEXT_PUBLIC_`.

6. **Verification:**
   - Before finishing any task, run `npm run build` or `npm run lint` to ensure there are no build, syntax, or type errors.
