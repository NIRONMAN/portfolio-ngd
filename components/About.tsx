import React from "react";
import { GraduationCap } from "lucide-react";

const About: React.FC = () => {
  return (
    <div className="section-shell">
      <div className="border-t border-border/80 pt-16 dark:border-white/[0.08]">
        <p className="section-kicker">01 / Background &amp; Experience</p>
        <h2 className="section-title">Where I&apos;ve Been &amp; What I Work On</h2>
        <p className="section-subtitle">
          Engineering track record focused on distributed enterprise services, telemetry streaming, and reliable cloud deployments.
        </p>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Work Experience with visual timeline */}
          <div className="space-y-6">
            <div className="surface-panel space-y-6">
              <div className="flex items-center justify-between border-b border-border/80 pb-4 dark:border-white/[0.08]">
                <div>
                  <h3 className="text-base font-bold text-foreground">Findability Sciences</h3>
                  <p className="text-xs text-muted-foreground mt-0.5">Enterprise Cloud &amp; AI Products</p>
                </div>
                <span className="font-mono text-xs font-semibold text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-md">
                  Jan 2025 – Present
                </span>
              </div>

              {/* Position 1: Jr. Software Engineer */}
              <div className="relative pl-5 border-l-2 border-indigo-500/40 space-y-2">
                <span className="absolute -left-[5px] top-1.5 h-2 w-2 rounded-full bg-indigo-500 ring-2 ring-background" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">Jr. Software Engineer</h4>
                  <span className="font-mono text-xs text-indigo-600 dark:text-indigo-400 font-medium">Aug 2025 – Present</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 select-none font-bold mt-0.5">•</span>
                    <span>
                      Engineered a centralized <strong className="text-foreground font-semibold">SSO authentication service</strong> across a 4-product enterprise suite using <strong className="text-foreground font-semibold">Java Spring Boot, Auth0, and Redis</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 select-none font-bold mt-0.5">•</span>
                    <span>
                      Built device monitoring telemetry pipelines using <strong className="text-foreground font-semibold">Google BigQuery &amp; Pub/Sub</strong>, optimizing query execution and cloud costs.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 select-none font-bold mt-0.5">•</span>
                    <span>
                      Automated Kubernetes cluster delivery by migrating manual deployment pipelines to <strong className="text-foreground font-semibold">ArgoCD GitOps</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-indigo-500 select-none font-bold mt-0.5">•</span>
                    <span>
                      Configured production infrastructure telemetry and alerts with <strong className="text-foreground font-semibold">Prometheus &amp; Grafana</strong>.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Position 2: Software Engineer Intern */}
              <div className="relative pl-5 border-l-2 border-border/80 space-y-2 pt-3">
                <span className="absolute -left-[5px] top-4 h-2 w-2 rounded-full bg-muted-foreground/60 ring-2 ring-background" />
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-semibold text-foreground">Software Engineer Intern</h4>
                  <span className="font-mono text-xs text-muted-foreground">Jan 2025 – Jul 2025</span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground select-none font-bold mt-0.5">•</span>
                    <span>
                      Built an internal <strong className="text-foreground font-semibold">RAG-based search system</strong> for document retrieval across product documentation and BI data teams.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground select-none font-bold mt-0.5">•</span>
                    <span>
                      Developed responsive operational management dashboards using <strong className="text-foreground font-semibold">Next.js &amp; FastAPI</strong>.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-muted-foreground select-none font-bold mt-0.5">•</span>
                    <span>
                      Maintained a shared UI component system using <strong className="text-foreground font-semibold">Storybook</strong> published to GCP Artifact Registry.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Education & Technical Philosophy */}
          <div className="space-y-6">
            {/* Education Panel */}
            <div className="surface-panel">
              <div className="flex items-center gap-2.5 mb-4">
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-indigo-500/10 text-indigo-500 border border-indigo-500/20">
                  <GraduationCap size={16} />
                </div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono">
                  Education
                </h3>
              </div>
              <div>
                <p className="text-base font-bold text-foreground">Maharashtra Institute of Technology</p>
                <p className="text-sm text-muted-foreground mt-0.5">B.Tech in Computer Science and Engineering</p>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-mono font-semibold px-2.5 py-1 rounded-md bg-indigo-500/10 text-indigo-700 dark:text-indigo-300 border border-indigo-500/20">
                    CGPA: 8.6 / 10.0
                  </span>
                  <span className="font-mono text-muted-foreground">2021 – 2025</span>
                </div>
              </div>
            </div>

            {/* Core Values / Architecture Principles */}
            <div className="surface-panel">
              <h3 className="text-xs font-bold uppercase tracking-wider text-muted-foreground font-mono mb-4">
                Architecture Principles
              </h3>
              <div className="space-y-3 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground font-semibold">Reliability Over Hype:</strong> I prioritize type safety, predictable database transactions (ACID), and deterministic infrastructure as code over ephemeral frameworks.
                </p>
                <p>
                  <strong className="text-foreground font-semibold">Declarative Delivery:</strong> Application deployments should live as auditable Git commits rather than manual terminal commands.
                </p>
                <p>
                  <strong className="text-foreground font-semibold">Pragmatic AI:</strong> Using LLMs where they genuinely accelerate retrieval, synthesis, or developer workflows, paired with deterministic verification.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
