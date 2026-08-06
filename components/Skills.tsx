import React from "react";
import Image from "next/image";
import { Code2, Server, Cloud, Bot, Database, ShieldCheck, Sparkles } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 className="text-blue-500" size={20} />,
    skills: ["Python", "Java", "TypeScript", "JavaScript", "C++"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Server className="text-purple-500" size={20} />,
    skills: ["Spring Boot", "Next.js", "React.js", "React Native", "Node.js", "FastAPI", "Django"],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="text-emerald-500" size={20} />,
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
    icon: <Bot className="text-amber-500" size={20} />,
    skills: ["RAG (Hybrid Search)", "LangChain", "Prompt Engineering", "Agentic Tool Calling", "MCP Servers"],
  },
  {
    title: "Databases & Data Tools",
    icon: <Database className="text-cyan-500" size={20} />,
    skills: ["PostgreSQL", "MongoDB", "BigQuery", "Redis", "Milvus", "Firebase"],
  },
  {
    title: "Security & Quality",
    icon: <ShieldCheck className="text-rose-500" size={20} />,
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
      <p className="section-kicker">
        <Sparkles size={14} />
        Skills & Tools
      </p>
      <h2 className="section-title">Technical stack across Enterprise Systems, Cloud & AI.</h2>

      {/* Featured Icon Ribbon */}
      <div className="mt-6 flex flex-wrap items-center justify-start gap-3 rounded-2xl border border-border/60 bg-card/50 p-4 shadow-inner backdrop-blur-md">
        {featuredDevIcons.map((item) => (
          <div
            key={item.name}
            className="flex items-center gap-2.5 rounded-xl border border-border/70 bg-background/80 px-3.5 py-2 shadow-sm transition-all hover:scale-105 hover:border-primary/40 hover:bg-card"
          >
            <Image src={item.icon} alt={item.name} width={20} height={20} className="h-5 w-5 object-contain" unoptimized />
            <span className="text-xs font-bold text-foreground">{item.name}</span>
          </div>
        ))}
      </div>

      {/* Categorized Skills Grid */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category.title} className="surface-panel p-6 flex flex-col justify-between transition-all hover:-translate-y-1">
            <div>
              <div className="flex items-center gap-3 border-b border-border/60 pb-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-secondary/80 border border-border/60">
                  {category.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground">{category.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-secondary/70 border border-border/50 px-3 py-1 text-xs font-semibold text-foreground transition-all duration-200 hover:bg-primary/10 hover:border-primary/30 hover:text-primary hover:scale-105"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;

