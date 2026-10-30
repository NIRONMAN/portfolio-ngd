import React from "react";
import { Server, Cloud, Bot, Database, Code2, ShieldCheck } from "lucide-react";

type SkillCategory = {
  title: string;
  icon: React.ReactNode;
  tagClass: string;
  dotColor: string;
  skills: string[];
};

const skillCategories: SkillCategory[] = [
  {
    title: "Backend & Systems",
    icon: <Server size={15} className="text-emerald-500" />,
    tagClass: "mono-tag-emerald",
    dotColor: "bg-emerald-500",
    skills: ["Java 21", "Spring Boot 3", "Node.js", "FastAPI", "Redis", "Auth0 SSO", "REST APIs", "WebSockets"],
  },
  {
    title: "Cloud & GitOps",
    icon: <Cloud size={15} className="text-indigo-500" />,
    tagClass: "mono-tag-indigo",
    dotColor: "bg-indigo-500",
    skills: [
      "Kubernetes",
      "ArgoCD",
      "Docker",
      "Helm",
      "GCP (Pub/Sub, Compute)",
      "AWS (EC2)",
      "HashiCorp Vault",
      "OpenBao",
      "Linux / Bash",
    ],
  },
  {
    title: "AI & Retrieval Systems",
    icon: <Bot size={15} className="text-purple-500" />,
    tagClass: "mono-tag-violet",
    dotColor: "bg-purple-500",
    skills: [
      "RAG Architecture",
      "LangChain",
      "LlamaParse",
      "Hybrid Search",
      "Vector Embeddings",
      "Milvus",
      "Tool Calling & MCP",
    ],
  },
  {
    title: "Databases & Telemetry",
    icon: <Database size={15} className="text-amber-500" />,
    tagClass: "mono-tag-amber",
    dotColor: "bg-amber-500",
    skills: ["Google BigQuery", "PostgreSQL", "MongoDB (ACID)", "Prometheus", "Grafana", "Firestore"],
  },
  {
    title: "Languages & Frameworks",
    icon: <Code2 size={15} className="text-sky-500" />,
    tagClass: "mono-tag-indigo",
    dotColor: "bg-sky-500",
    skills: ["Java", "TypeScript", "Python", "C++", "Next.js 14", "React", "React Native", "Tailwind CSS"],
  },
  {
    title: "Security & Testing",
    icon: <ShieldCheck size={15} className="text-rose-500" />,
    tagClass: "mono-tag",
    dotColor: "bg-rose-500",
    skills: ["DAST", "OWASP ZAP", "Trivy Container Scanner", "GitLeaks", "SonarQube", "Unit & Integration Tests"],
  },
];

const SkillsComponent: React.FC = () => {
  return (
    <section className="section-shell">
      <div className="border-t border-border/80 pt-16 dark:border-white/[0.08]">
        <p className="section-kicker">03 / Capabilities</p>
        <h2 className="section-title">Technical Tooling &amp; Stack</h2>
        <p className="section-subtitle">
          Technologies and tools deployed across production backends, cloud clusters, and software systems.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="surface-panel p-5 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2 pb-3 border-b border-border/70 dark:border-white/[0.06]">
                  <span className={`h-1.5 w-1.5 rounded-full ${category.dotColor}`} />
                  {category.icon}
                  <h3 className="text-xs font-bold uppercase tracking-wider text-foreground font-mono">
                    {category.title}
                  </h3>
                </div>
                <div className="mt-3.5 flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span key={skill} className={category.tagClass}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;
