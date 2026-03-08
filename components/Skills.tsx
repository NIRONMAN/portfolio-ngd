import React from "react";
import Image from "next/image";

type Skill = {
  name: string;
  icon: string;
};

const skills: Skill[] = [
  { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" },
  { name: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "React Native", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
  { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
  { name: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" },
  { name: "Express", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
  { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
  { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
  { name: "Flask", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" },
  {
    name: "Django REST",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg",
  },
];

const SkillsComponent = () => {
  return (
    <section className="section-shell">
      <p className="section-kicker">Skills</p>
      <h2 className="section-title">Technologies I use to design, build, and ship.</h2>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="surface-panel flex h-36 flex-col items-center justify-center gap-4 p-5 transition duration-200 hover:-translate-y-0.5 hover:shadow-md"
          >
            <Image
              src={skill.icon}
              alt={skill.name}
              width={40}
              height={40}
              className="h-10 w-10 object-contain"
              unoptimized
            />
            <span className="text-center text-sm font-medium text-foreground">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsComponent;
