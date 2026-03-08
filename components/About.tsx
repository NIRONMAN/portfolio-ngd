import { BriefcaseBusiness, GraduationCap, Sparkles } from "lucide-react";
import React from "react";

const About = () => {
  return (
    <div className="section-shell">
      <div className="mb-8">
        <p className="section-kicker">About</p>
        <h2 className="section-title">A profile shaped by product thinking and data work.</h2>
      </div>

      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="surface-panel p-6 md:p-8">
          <p className="text-base leading-7 text-muted-foreground md:text-lg">
            I am a final-year Computer Science and Engineering student from Maharashtra, India.
            My work focuses on full-stack applications that are practical, maintainable, and
            visually clear. I am actively blending software engineering fundamentals with modern
            AI capabilities to build useful products.
          </p>
          <p className="mt-4 text-base leading-7 text-muted-foreground md:text-lg">
            During my internship experience, I contributed to data collection and time-series
            forecasting projects, which strengthened my analytical mindset and experimentation
            process.
          </p>
        </article>

        <div className="space-y-5">
          <article className="surface-panel p-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Bachelor&apos;s in Computer Science and Engineering (ongoing)
              <br />
              Maharashtra Institute of Technology, Aurangabad
              <br />
              CGPA: 8.52 | Graduation: June 2025
            </p>
          </article>

          <article className="surface-panel p-6">
            <div className="flex items-center gap-3">
              <BriefcaseBusiness className="text-primary" size={20} />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Data Science Intern at Findability Sciences, Aurangabad.
              <br />
              Built data collection pipelines and Auto-ARIMA forecasting models with strong
              prediction reliability on financial market datasets.
            </p>
          </article>

          <article className="surface-panel flex items-start gap-3 p-6">
            <Sparkles className="mt-0.5 text-primary" size={18} />
            <p className="text-sm leading-6 text-muted-foreground">
              Currently exploring LLM-assisted product workflows to ship faster and smarter.
            </p>
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
