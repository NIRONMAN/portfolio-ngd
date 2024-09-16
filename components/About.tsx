import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="h-[calc(100vh)] bg-black flex justify-center items-center">
      <div className="w-3/4 flex flex-row justify-between p-10 text-white text-lg">
        {/* Left Column */}
        <div className="w-1/2 pr-5">
          <p>
            Hi there! I&#39;m <span className="font-bold">Niranjan Gopinath Dabhade</span>, a final-year student based in
            Maharashtra, India, pursuing a Bachelor&#39;s degree in Computer Science and Engineering. 
            With a strong foundation in full-stack development and a growing interest in artificial intelligence and data science, 
            I enjoy building innovative applications that solve real-world problems.
            <br />
            <br />
            <span className="font-bold">Education :</span>
            <br />
            Bachelor&#39;s Degree in Computer Science and Engineering (Ongoing) <br />
            Maharashtra Institute of Technology, Aurangabad <br />
            CGPA: 8.52 (Graduation Date: June 2025)
            <br />
            <br />
            <span className="font-bold">Skills :</span>
            <br />
            <span className="font-bold">Languages:</span> Python, JavaScript <br />
            <span className="font-bold">Frameworks & Technologies:</span> React, Node.js, Next.js, MERN Stack, Flask, 
            Tailwind CSS <br />
            <span className="font-bold">Databases:</span> PostgreSQL, Prisma, MongoDB
          </p>
        </div>

        {/* Right Column */}
        <div className="w-1/2 pl-5">
          <p>
            <span className="font-bold">Work Experience :</span>
            <br />
            <span className="font-bold">Data Science Intern</span> - Findability Sciences, Aurangabad <br />
            Developed data collection processes and time series forecasting models using Auto ARIMA with 95%-97% accuracy for Nikkei 225 and S&P 500 datasets.
            <br />
            <br />
            <span className="font-bold">Project Highlights :</span>
            <br />
            <span className="font-bold">Learnability AI 2.0:</span> An educational app utilizing RAG (Retrieval-Augmented Generation) and Firebase Firestore to enhance student learning via revision modes, flashcards, and mind maps. <br />
            <span className="font-bold">Niropay:</span> A PayTM-like app allowing secure transactions, with JWT-based authentication and MongoDB for data management.
            <br />
            <br />
            🌱 I&#39;m currently learning advanced full-stack development techniques while exploring AI and data science applications.
            <br />
            <br />
            <span className="font-bold">Contact :</span>
            <br />
            I&#39;m always open to engaging discussions and collaborative opportunities! Feel free to reach out to me on <a href="https://www.linkedin.com/in/niranjan-dabhade" className="underline">LinkedIn</a> or <a href="https://github.com/NIRONMAN" className="underline">Github</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
