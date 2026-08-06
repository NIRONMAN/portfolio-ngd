import React from "react";
import Image from "next/image";
import { Code2, Server, Cloud, Bot, Database, ShieldCheck } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="text-primary" size={20} />,
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Server className="text-primary" size={20} />,
    skills: ["Spring Boot", "Next.js", "React.js", "React Native", "Node.js", "FastAPI", "Django"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-primary" size={20} />,
    skills: [
      "AWS (EC2)",
      "Azure",
      "GCP (Compute, Pub/Sub, BigQuery)",
      "Docker",
      "Kubernetes",
      "ArgoCD",
      "Ansible",
      "Jenkins",
      "Prometheus",
      "Grafana",
      "HashiCorp Vault",
      "OpenBao",
      "Linux / Bash",
      "Git",
    ],
  },
  {
    title: "AI Engineering",
    icon: <Bot className="text-primary" size={20} />,
    skills: ["RAG (Hybrid Search)", "LangChain", "Prompt Engineering", "Agentic Tool Calling", "MCP Servers"],
  },
  {
    title: "Databases & Data Tools",
    icon: <Database className="text-primary" size={20} />,
    skills: ["PostgreSQL", "MongoDB", "BigQuery", "Redis", "Milvus", "Firebase"],
  },
  {
    title: "Security & Quality",
    icon: <ShieldCheck className="text-primary" size={20} />,
    skills: ["DAST", "OWASP ZAP", "Trivy", "GitLeaks", "SonarQube"],
  },
];

const featuredDevIcons = [
  { name: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
  { name: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" },
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-plain.svg" },
  { name: "ArgoCD", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/argocd/argocd-original.svg" },
  { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg" },
  { name: "Redis", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/redis/redis-original.svg" },
];

const SkillsComponent = () => {
  return (
    <section className="section-shell">
      <p className="section-kicker">Skills & Tools</p>
      <h2 className="section-title">Technical stack across Enterprise Systems, Cloud & AI.</h2>

      {/* Featured Icon Ribbon */}
      <div className="mt-6 flex flex-wrap items-center justify-start gap-3 rounded-2xl border border-border/80 bg-card/60 p-4">
        {featuredDevIcons.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2 rounded-xl border border-border/60 bg-background/80 px-3 py-1.5 transition hover:scale-105"
          >
            <Image src={item.icon} alt={item.name} width={20} height={20} className="h-5 w-5 object-contain" unoptimized />
            <span className="text-xs font-semibold text-foreground">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="surface-panel p-6">
            <div className="flex items-center gap-3 border-b border-border/80 pb-3">
              {category.icon}
              <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full bg-secondary/80 px-3 py-1 text-xs font-medium text-foreground transition hover:bg-primary/10 hover:text-primary"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
