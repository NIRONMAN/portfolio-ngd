"use client"
import React from 'react';
import { useRouter} from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

const ProjectDetails: React.FC = () => {
  const router = useRouter();

  const projectData = {
    title: "Learnability 2.0",
    githubUrl: "https://github.com/NIRONMAN/Learnability_2.0",
    additionalReferences: [],
    description: `
      <p>Learnability AI 2.0</p>
      <p><strong>Technologies:</strong> Next.js, Flask, Firebase Firestore, RAG (Retrieval-Augmented Generation)</p>
      <ul>
        <li>Developed an advanced educational application designed to enhance student learning through multiple modes including learning, revision, flashcards, and mind maps.</li>
        <li>Implemented a RAG system to handle large contextual datasets, improving the relevance and depth of information retrieval.</li>
        <li>Leveraged Firebase Firestore for efficient data storage and retrieval, ensuring seamless user experience.</li>
        <li>Utilized Next.js for both frontend and backend development, integrating Flask for the backend RAG functionalities to ensure robust performance.</li>
      </ul>
    `
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-white">
      <Image className=' -z-10' alt={projectData.title} fill src={"/wall2.jpg"}></Image>
      <div className="mb-6 flex flex-row justify-between">
      <h1 className="text-3xl font-bold mb-4">{projectData.title}</h1>
        <div className='   flex justify-center items-start'>
          <div className=' bg-white text-black p-2 rounded-lg hover:text-blue-500 hover:bg-slate-100'><Link href={projectData.githubUrl}>View on GitHub</Link></div>
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
      
      <button
        onClick={() => router.back()}
        className="mt-8 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
      >
        Back to Projects
      </button>
    </div>
  );
};

export default ProjectDetails;