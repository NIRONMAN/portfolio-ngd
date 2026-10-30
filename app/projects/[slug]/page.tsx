import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { PROJECTS_DATA } from "@/lib/projects-data";
import { ProjectDetailView } from "@/components/ProjectDetailView";

type Props = {
  params: { slug: string };
};

export async function generateStaticParams() {
  return PROJECTS_DATA.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} — System Architecture & Specs`,
      description: project.subtitle,
      url: `https://niranjandabhade.dev/projects/${project.slug}`,
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.subtitle,
    },
  };
}

export default function ProjectPage({ params }: Props) {
  const project = PROJECTS_DATA.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <ProjectDetailView
      title={project.title}
      subtitle={project.subtitle}
      category={project.category}
      githubUrl={project.githubUrl}
      liveUrl={project.liveUrl}
      technologies={project.technologies}
      highlights={project.highlights}
      description={project.description}
      additionalReferences={project.additionalReferences}
    />
  );
}
