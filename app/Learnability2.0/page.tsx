"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { BackgroundGradient } from "../../components/ui/background-gradient";
import { Button } from "../../components/ui/button";

const ProjectDetails: React.FC = () => {
  const router = useRouter();

  const projectData = {
    title: "Learnability AI 2.0",
    githubUrl: "https://github.com/NIRONMAN/Learnability_2.0",
    additionalReferences: [],
    description: `
      <p><strong>Technologies:</strong> Next.js, Flask, LangChain, Firebase, LlamaParse, yt-dlp, FFmpeg</p>
      <ul>
        <li>Built an AI-driven learning platform processing large documents via LlamaParse and a LangChain RAG pipeline, successfully scaling to handle 1,000+ concurrent queries.</li>
        <li>Boosted user engagement by 25% by implementing interactive Mermaid-based mind maps and flashcards for optimized student retention.</li>
        <li>Automated content generation pipelines using yt-dlp and FFmpeg to extract, parse, and summarize technical video resources seamlessly.</li>
      </ul>
    `
  };

  return (
    <div className="min-h-[calc(100vh-76px)] flex flex-col  text-gray-800 dark:text-white p-8 justify-center items-center">
      <BackgroundGradient>
        <div className=' rounded-3xl bg-primary-foreground p-8 dark:bg-slate-800'>

        <div className="mb-6 flex flex-row justify-between">
          <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
          <div className='flex justify-center items-start'>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105">
              <Link href={"https://linktr.ee/learnability"}>Live Link</Link>
            </Button>
          </div>
          <div className='flex justify-center items-start'>
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105">
              <Link href={projectData.githubUrl}>View on GitHub</Link>
            </Button>
          </div>
        </div>
        
        {projectData.additionalReferences.length > 0 && (
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Additional References</h2>
            <ul className="list-disc list-inside">
              {projectData.additionalReferences.map((ref, index) => (
                <li key={index}>
                  <a
                    href={ref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {ref}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        
        <div className="prose max-w-none">
          <h2 className="text-xl font-semibold mb-2">About this Project</h2>
          <div dangerouslySetInnerHTML={{ __html: projectData.description }} />
        </div>
        
        <Button 
          onClick={() => router.back()}
          className="mt-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transform transition duration-200 ease-in-out hover:scale-105"
        >
          Back to Projects
        </Button>
          </div>
      </BackgroundGradient>
    </div>
  );
};

export default ProjectDetails;