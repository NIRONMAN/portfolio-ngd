# Niranjan Dabhade — Portfolio (`portfolio-ngd`)

> Modern developer portfolio showcasing backend engineering in **Java Spring Boot**, cloud infrastructure with **Kubernetes & ArgoCD**, analytical pipelines in **Google BigQuery**, and modern **AI RAG Orchestration**.

[![Next.js](https://img.shields.io/badge/Next.js-14.2-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?logo=tailwind-css)](https://tailwindcss.com/)
[![Docker](https://img.shields.io/badge/Docker-Ready-2496ED?logo=docker)](https://www.docker.com/)

---

## 🚀 Key Highlights & Stack

- **Framework:** Next.js 14 (App Router) + React 18
- **Language:** TypeScript 5 (Strict Mode)
- **Styling & Design System:** Tailwind CSS, Radix UI primitives, dynamic Dark/Light modes (`next-themes`)
- **Backend & Contact Form:** Next.js API Routes, Zod schema validation, in-memory IP rate-limiting, Google reCAPTCHA v2, Nodemailer
- **Containerization:** Multi-stage production `Dockerfile` with standalone Next.js build output
- **SEO & Social:** Dynamic OpenGraph metadata, JSON-LD Schema.org structure (`Person`, `WebSite`), `sitemap.xml`, and `robots.txt`

---

## 🛠️ Local Development

### Prerequisites
- Node.js >= 18
- npm >= 9

### Installation
```bash
git clone https://github.com/NIRONMAN/portfolio-ngd.git
cd portfolio-ngd
npm install
```

### Environment Configuration
Create a `.env.local` file in the project root:
```env
# Contact Form Nodemailer
EMAIL=your-email@gmail.com
PASS=your-app-password

# Google reCAPTCHA
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-recaptcha-site-key
RECAPTCHA_SECRET_KEY=your-recaptcha-secret-key
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📦 Production & Docker Deployment

### Local Build
```bash
npm run build
npm run start
```

### Docker
```bash
# Build & start containerized application
docker compose up --build

# Run in detached mode
docker compose up -d
```

---

## 👤 Author

**Niranjan Dabhade**  
Jr. Software Engineer @ Findability Sciences  
- **GitHub:** [@NIRONMAN](https://github.com/NIRONMAN)  
- **LinkedIn:** [linkedin.com/in/nironman](https://www.linkedin.com/in/nironman/)  
- **LeetCode:** [leetcode.com/u/nironman](https://leetcode.com/u/nironman/)  
