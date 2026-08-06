import { BriefcaseBusiness, GraduationCap, ShieldCheck, Cpu, Sparkles, TrendingUp, Zap, Server, Lock } from "lucide-react";
import React from "react";

const impactMetrics = [
  { label: "CI/CD Deployment Speedup", value: "78%", detail: "45m to 10m via ArgoCD", color: "text-blue-500" },
  { label: "SSO User Scale", value: "1,000+", detail: "4 Enterprise Suites", color: "text-purple-500" },
  { label: "RAG Executive Retrieval", value: "-70%", detail: "Time Reduction", color: "text-emerald-500" },
];

const About = () => {
  return (
    <div className="section-shell">
      <div className="mb-8">
        <p className="section-kicker">
          <Sparkles size={14} />
          About Me
        </p>
        <h2 className="section-title">Engineered for Enterprise Backends, GitOps & AI Orchestration.</h2>
      </div>

      {/* Impact metrics highlight bar */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {impactMetrics.map((metric) => (
          <div key={metric.label} className="surface-panel p-5 relative overflow-hidden group">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">{metric.label}</span>
              <TrendingUp size={16} className={metric.color} />
            </div>
            <p className={`mt-2 text-3xl font-extrabold tracking-tight ${metric.color}`}>
              {metric.value}
            </p>
            <p className="mt-1 text-xs text-muted-foreground font-medium">{metric.detail}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        {/* Left Column: Background & Education */}
        <div className="space-y-6">
          <article className="surface-panel p-6 md:p-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">Engineering Focus</h3>
            <p className="text-base leading-relaxed text-muted-foreground">
              I am a Jr. Software Engineer at <strong className="text-foreground font-semibold">Findability Sciences</strong> holding a B.Tech in Computer Science and Engineering (CGPA: 8.6) from Maharashtra Institute of Technology.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              My core focus is building resilient <strong className="text-foreground font-semibold">Java Spring Boot SSO backends</strong> with Redis caching, orchestrating real-time telemetry streaming over <strong className="text-foreground font-semibold">BigQuery & Pub/Sub</strong>, enforcing GitOps pipeline automation via <strong className="text-foreground font-semibold">ArgoCD & Kubernetes</strong>, and deploying state-of-the-art <strong className="text-foreground font-semibold">RAG & NLQ AI agents</strong>.
            </p>
          </article>

          <article className="surface-panel p-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                <GraduationCap size={20} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Education</h3>
                <p className="text-xs text-muted-foreground">B.Tech in Computer Science & Engineering</p>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-border/60 bg-secondary/40 p-4">
              <p className="font-semibold text-foreground">Maharashtra Institute of Technology</p>
              <p className="text-sm text-muted-foreground mt-0.5">Computer Science and Engineering</p>
              <div className="mt-2 flex items-center justify-between text-xs font-semibold">
                <span className="text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20">CGPA: 8.6 / 10.0</span>
                <span className="text-muted-foreground">2021 – 2025</span>
              </div>
            </div>
          </article>
        </div>

        {/* Right Column: Work Experience Timeline */}
        <div className="space-y-6">
          <article className="surface-panel p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 border border-blue-500/20">
                  <BriefcaseBusiness size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground">Findability Sciences Pvt. Ltd.</h3>
                  <p className="text-xs text-muted-foreground">Chh. Sambhajinagar, Maharashtra</p>
                </div>
              </div>
              <span className="rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                Jan 2025 – Present
              </span>
            </div>

            <div className="mt-6 space-y-6">
              {/* Jr. Software Engineer */}
              <div className="relative pl-6 border-l-2 border-primary/30">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-foreground">Jr. Software Engineer</h4>
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">Aug 2025 – Present</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Engineered centralized <strong className="text-foreground font-semibold">SSO authentication</strong> across a 4-product enterprise suite (1000+ users) using <strong className="text-foreground font-semibold">Java Spring Boot, Auth0, PKCE</strong> & Redis (30–50% latency drop).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Architected factory digital twin telemetry using <strong className="text-foreground font-semibold">BigQuery & Pub/Sub</strong> (40% query cost reduction).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Accelerated CI/CD speeds by <strong className="text-foreground font-semibold">78%</strong> (45m to 10m) migrating Kubernetes pipelines to <strong className="text-foreground font-semibold">ArgoCD & Ansible</strong>.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary font-bold">•</span>
                    <span>Deployed <strong className="text-foreground font-semibold">Prometheus & Grafana</strong> telemetry across 15+ production servers (60% faster incident detection).</span>
                  </li>
                </ul>
              </div>

              {/* Software Engineer Intern */}
              <div className="relative pl-6 border-l-2 border-border">
                <div className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-muted-foreground ring-4 ring-background" />
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-bold text-foreground">Software Engineer Intern</h4>
                  <span className="text-xs font-semibold text-muted-foreground bg-secondary px-2.5 py-0.5 rounded-full">Jan 2025 – Jul 2025</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Architected a <strong className="text-foreground font-semibold">RAG & NLQ orchestration system</strong> for enterprise metadata search, adopted by 3 BI teams (70% executive retrieval time reduction).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Built full-stack BI chatbots using <strong className="text-foreground font-semibold">Next.js & FastAPI</strong>, serving 50 active internal users.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground font-bold">•</span>
                    <span>Accelerated UI development by 25% with shared <strong className="text-foreground font-semibold">Storybook</strong> component library on GCP npm registry.</span>
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;

