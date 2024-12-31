import React, { FC } from 'react';


interface Skill {
  name: string;
  icon: FC;
}

const skills: Skill[] = [
  { name: 'Next.js', icon: ()=>(
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" />
          
  ) },
  { name: 'React', icon: ()=>(
    

    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
                    
  ) },
  { name: 'React Native', icon: ()=>(
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />

  )},
  { name: 'JavaScript', icon: ()=>(
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" />
          
  ) },
  
  
  { name: 'Node.js', icon: ()=>(
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg" />
          
  ) },
  { name: 'Express', icon: ()=>(
    
    <img className=' bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" />
          
          
  )},
  
  { name: 'Tailwind CSS', icon: ()=>(
    
    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
          
  ) },
  { name: 'Python', icon: ()=>(<img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" />
  )
   },
  { name: 'Flask', icon:()=>(

    <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg" />
          
  )
  },
  
  {
    name:'Django Rest Framework',icon:()=>(
      
      <img className='bg-white' src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/djangorest/djangorest-original.svg" />
          
    )
  }
];

const SkillsComponent: FC = () => {
  return (
    <section className="py-10 min-h-[100vh] flex justify-center items-center ">
      <div className="px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-primary dark:text-white">Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-14 ">
          {skills.map((skill) => (
            <div
              key={skill.name}
              className=" h-40 w-40 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md flex flex-col items-center justify-center transition-transform hover:scale-110"
            >
              <skill.icon  />
              <span className="text-center font-medium">{skill.name}</span>
            </div>
          ))}
          
          
        </div>
      </div>
    </section>
  );
};

export default SkillsComponent;