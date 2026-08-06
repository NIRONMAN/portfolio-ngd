import { BriefcaseBusiness, GraduationCap, ShieldCheck, Cpu, Sparkles } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="section-shell">
      <div className="mb-8">
        <p className="section-kicker">About</p>
        <h2 className="section-title">Engineered for Enterprise Systems, GitOps, and AI Integration.</h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-6">
          <article className="surface-panel p-6 md:p-8">
            <p className="text-base leading-7 text-muted-foreground md:text-lg">
              I am a Jr. Software Engineer at <strong className="text-foreground">Findability Sciences</strong> holding a B.Tech in Computer Science and Engineering (CGPA: 8.6) from Maharashtra Institute of Technology.
            </p>
            <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
              My engineering experience focuses on building enterprise-grade authentication backends (Java Spring Boot, Auth0, Redis), streaming real-time digital twin telemetry (BigQuery, Pub/Sub), accelerating release cycles via GitOps & Ansible (ArgoCD, Jenkins, Docker, Kubernetes), and architecting Retrieval-Augmented Generation (RAG) and NLQ orchestration systems.
            </p>
          </article>

          <article className="surface-panel p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <div className="mt-4 text-sm leading-6 text-muted-foreground">
              <p className="font-semibold text-foreground">Maharashtra Institute of Technology</p>
              <p>B.Tech in Computer Science and Engineering</p>
              <p className="mt-1 font-medium text-primary">CGPA: 8.6 <span className="text-muted-foreground font-normal">| 2021 – 2025</span></p>
            </div>
          </article>
        </div>

        <div className="space-y-6">
          <article className="surface-panel p-6 md:p-8">
            <div className="flex items-center justify-between border-b border-border/80 pb-4">
              <div className="flex items-center gap-3">
                <BriefcaseBusiness className="text-primary" size={22} />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Findability Sciences Pvt. Ltd.</h3>
                  <p className="text-xs text-muted-foreground">Chh. Sambhajinagar, Maharashtra</p>
                </div>
              </div>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                Jan 2025 – Present
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-foreground">Jr. Software Engineer</h4>
                  <span className="text-xs font-medium text-muted-foreground">Aug 2025 – Present</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground list-disc list-inside">
                  <li>
                    Engineered centralized <strong className="text-foreground">SSO authentication</strong> across a 4-product enterprise suite (1000+ users) using <strong className="text-foreground">Java Spring Boot, Auth0, PKCE</strong> & Redis cache (30–50% latency reduction).
                  </li>
                  <li>
                    Architected real-time factory digital twin data pipelines using <strong className="text-foreground">BigQuery & Pub/Sub</strong> (100+ concurrent users, 40% query cost reduction).
                  </li>
                  <li>
                    Accelerated CI/CD deployment speeds by <strong className="text-foreground">78%</strong> (45 mins to 10 mins) migrating Kubernetes pipelines to GitOps (<strong className="text-foreground">ArgoCD</strong>) and Ansible.
                  </li>
                  <li>
                    Migrated build pipelines from SVN to GitHub & Jenkins with SHA diff checking (30–40% build time reduction).
                  </li>
                  <li>
                    Deployed <strong className="text-foreground">Prometheus & Grafana</strong> for logging/alerting across 15+ production servers (60% faster incident detection).
                  </li>
                </ul>
              </div>

              <div className="border-t border-border/60 pt-5">
                <div className="flex items-center justify-between">
                  <h4 className="text-base font-semibold text-foreground">Software Engineer Intern</h4>
                  <span className="text-xs font-medium text-muted-foreground">Jan 2025 – Jul 2025</span>
                </div>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-muted-foreground list-disc list-inside">
                  <li>
                    Architected a <strong className="text-foreground">RAG & NLQ orchestration system</strong> for enterprise metadata search, adopted by 3 BI teams (70% executive retrieval time reduction).
                  </li>
                  <li>
                    Built full-stack BI chatbots using <strong className="text-foreground">Next.js & FastAPI</strong>, serving 50 active internal users.
                  </li>
                  <li>
                    Accelerated UI development by 25% with reusable Next.js templates and shared <strong className="text-foreground">Storybook</strong> component library on GCP npm registry.
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
