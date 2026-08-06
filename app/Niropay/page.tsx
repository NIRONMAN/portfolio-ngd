"use client";

import React from "react";
import { ProjectDetailView } from "@/components/ProjectDetailView";

const NiropayDetails: React.FC = () => {
  return (
    <ProjectDetailView
      title="Niropay"
      subtitle="Digital Wallet & Person-to-Person Payment Gateway Application"
      category="Fintech & Full Stack"
      githubUrl="https://github.com/NIRONMAN/Niropay"
      technologies={["React", "Node.js", "Express", "MongoDB", "Mongoose", "Zod", "JWT", "Tailwind CSS"]}
      description="Niropay is a secure fintech money transfer application supporting user registration, wallet balance top-up, and real-time transaction processing between users."
      highlights={[
        "Developed a digital wallet application enabling instant person-to-person money transfers with transactional safety.",
        "Built Express backend endpoints with MongoDB/Mongoose session handling and Zod input validation schemas.",
        "Implemented JWT authentication with bcrypt password hashing and token validation middleware.",
        "Designed responsive, intuitive mobile-friendly UI using React and Tailwind CSS.",
      ]}
    />
  );
};

export default NiropayDetails;