import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex justify-center items-center p-8">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-purple-600 dark:text-purple-400">
          👋 Hi there!
        </h1>
        
        <p className="mb-6 text-gray-700 dark:text-gray-300">
          I&apos;m a final-year student based in Maharashtra, India, pursuing a Bachelor&apos;s degree in Computer Science and Engineering. 
          With a strong foundation in full-stack development and a growing interest in artificial intelligence and data science, 
          I enjoy building innovative applications that solve real-world problems.
        </p>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600 dark:text-purple-400">🎓 Education</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Bachelor&apos;s Degree in Computer Science and Engineering</strong> (Ongoing)<br />
            Maharashtra Institute of Technology, Aurangabad<br />
            CGPA: 8.52 (Graduation Date: June 2025)
          </p>
        </div>
        
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2 text-purple-600 dark:text-purple-400">💼 Work Experience</h2>
          <p className="text-gray-700 dark:text-gray-300">
            <strong>Data Science Intern</strong> - Findability Sciences, Aurangabad<br />
            Developed data collection processes and time series forecasting models using Auto ARIMA with 95%-97% accuracy for Nikkei 225 and S&P 500 datasets.
          </p>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300">
          ⚡ I&apos;m currently learning to integrate my Full-Stack skills with LLMs to supercharge my applications.
        </p>
      </div>
    </div>
  );
};

export default About;