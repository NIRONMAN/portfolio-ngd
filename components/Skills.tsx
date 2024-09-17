import { FC } from 'react';
import { 
  SiPython, 
  SiFlask, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiExpress, 
  SiTailwindcss 
} from 'react-icons/si';
import { IconType } from 'react-icons';

interface Skill {
  name: string;
  icon: IconType;
}

const skills: Skill[] = [
  { name: 'Python', icon: SiPython },
  { name: 'Flask', icon: SiFlask },
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Express', icon: SiExpress },
  { name: 'React Native', icon: SiReact },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
];

const SkillsComponent: FC = () => {
  return (
    <section className="py-10 min-h-[100vh] flex justify-center items-center">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className="bg-white dark:bg-black p-4 rounded-lg shadow-md flex flex-col items-center justify-center transition-transform hover:scale-105"
            >
              <skill.icon className="text-4xl mb-2 " />
              <span className="text-center font-medium">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;