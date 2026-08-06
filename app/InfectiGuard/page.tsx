"use client";

import React from "react";
import { ProjectDetailView } from "@/components/ProjectDetailView";

const InfectiGuardDetails: React.FC = () => {
  return (
    <ProjectDetailView
      title="InfectiGuard"
      subtitle="Offline-First Hospital ICU Monitoring & Compliance Platform"
      category="Mobile Application & Healthcare"
      githubUrl="https://github.com/NIRONMAN/InfectiGuard"
      technologies={["React Native", "Redux", "Firebase Firestore", "Expo", "Excel Export Engine"]}
      description="An offline-first mobile platform for hospital ICU monitoring, hand hygiene audits, and biomedical waste tracking with automated administrative auditing."
      highlights={[
        "Developed an offline-first mobile platform for hospital ICU monitoring, biomedical waste management, and hand hygiene compliance tracking.",
        "Engineered reliable offline data syncing via Firebase Firestore offline cache for seamless clinical workflow continuity.",
        "Built robust reporting modules generating automated Excel dashboard exports for medical compliance and administrative audits.",
      ]}
    />
  );
};

export default InfectiGuardDetails;
