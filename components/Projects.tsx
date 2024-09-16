"use client";
import Card from "@/components/Card";
import React from "react";
import { useRouter } from "next/navigation";
import Card3D from "./Card3D";

function Projects() {
  const router = useRouter();
  return (
    <div className="flex-1 h-[100vh] flex flex-col relative">
      
      <h1 className="text-4xl font-bold text-white text-center mt-5 mb-5">
        My Projects
      </h1>
      <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card3D
          onClick={() => router.push("/projects/Learnability2.0")}
          title="Learnability 2.0"
          description="Developed an advanced educational application designed to enhance student learning through multiple modes including learning, revision, flashcards, and mind maps. Also has RAG implemention For handling Bigger Context."
          key={1}
          imageUrl="/Logo.svg"
        >
          
        </Card3D>
        <Card3D
          onClick={() => router.push("/projects/High-Blogs")}
          title="High Blogs"
          description="Developed a full-stack blog application where users can create and view blogs, leveraging a serverless architecture."
          key={2}
          imageUrl="/blog.avif"
        ></Card3D>
        <Card3D
          onClick={() => router.push("/projects/Niropay")}
          title="Niropay"
          description="Developed a PayTM-like application that enables users to send money to each other."
          key={3}
          imageUrl="/niropay.jpg"
        ></Card3D>
      </div>
    </div>
  );
}

export default Projects;
