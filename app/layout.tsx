import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ExperienceProvider } from "@/lib/experience-context";
import { ModeSelectionModal } from "@/components/ModeSelectionModal";

const siteUrl = "https://niranjandabhade.dev";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Niranjan Dabhade | Software Engineer & AI Orchestration",
    template: "%s | Niranjan Dabhade",
  },
  description:
    "Portfolio of Niranjan Dabhade, Jr. Software Engineer at Findability Sciences specializing in Java Spring Boot, GitOps Cloud (Kubernetes & ArgoCD) and AI RAG Systems.",
  keywords: [
    "Niranjan Dabhade",
    "Software Engineer",
    "Java Spring Boot",
    "Kubernetes",
    "ArgoCD",
    "GitOps",
    "LangChain",
    "RAG Systems",
    "BigQuery",
    "Findability Sciences",
    "Next.js",
    "TypeScript",
  ],
  authors: [{ name: "Niranjan Dabhade", url: "https://github.com/NIRONMAN" }],
  creator: "Niranjan Dabhade",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Niranjan Dabhade | Software Engineer & AI Orchestration",
    description:
      "Building resilient distributed backends, GitOps cloud deployments with Kubernetes & ArgoCD, and enterprise AI RAG workflows.",
    siteName: "Niranjan Dabhade Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niranjan Dabhade | Software Engineer & AI Orchestration",
    description:
      "Building resilient distributed backends, GitOps cloud deployments, and enterprise AI RAG workflows.",
    creator: "@NIRONMAN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Niranjan Dabhade",
      jobTitle: "Jr. Software Engineer",
      worksFor: {
        "@type": "Organization",
        name: "Findability Sciences",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Maharashtra Institute of Technology",
      },
      knowsAbout: [
        "Java Spring Boot",
        "Kubernetes",
        "ArgoCD",
        "Cloud Infrastructure",
        "RAG Architecture",
        "LangChain",
        "Redis",
        "BigQuery",
        "Next.js",
        "TypeScript",
      ],
      sameAs: [
        "https://github.com/NIRONMAN",
        "https://www.linkedin.com/in/nironman/",
        "https://leetcode.com/u/nironman/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Niranjan Dabhade Portfolio",
      description: "Portfolio of Niranjan Dabhade, Jr. Software Engineer & AI Systems Developer.",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>

      <body
        className="font-sans min-h-screen flex flex-col justify-between selection:bg-primary/20 selection:text-primary"
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ExperienceProvider>
            <ModeSelectionModal />
            <NavBar />
            <div className="flex-1">{children}</div>
            <Footer />
          </ExperienceProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
