import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/data/projects";
import ProjectHero from "@/components/project-detail/ProjectHero";
import ProjectOverview from "@/components/project-detail/ProjectOverview";
import ProjectTimeline from "@/components/project-detail/ProjectTimeline";
import ProjectGallery from "@/components/project-detail/ProjectGallery";
import ProjectMaterials from "@/components/project-detail/ProjectMaterials";
import ProjectCTA from "@/components/project-detail/ProjectCTA";

interface Props {
  params: { slug: string };
}

// Generate static params for all projects at build time
export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({
    slug: slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | TTT Construction Ltd",
    };
  }

  return {
    title: `${project.name} | TTT Construction Ltd`,
    description: project.detailPage.overview.description,
    keywords: [
      project.name,
      "TTT Construction Ltd",
      "New Zealand construction",
      project.projectType,
      "residential construction",
    ],
    openGraph: {
      title: `${project.name} | TTT Construction Ltd`,
      description: project.detailPage.overview.description,
      type: "website",
      locale: "en_NZ",
    },
  };
}

export default function ProjectDetailPage({ params }: Props) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  const { detailPage } = project;

  return (
    <main className="aurora-bg min-h-screen overflow-x-hidden bg-[#071018] text-[#f8fafc]">
      <ProjectHero
        name={project.name}
        projectType={project.projectType}
        location={project.location}
        image={project.image}
      />
      <ProjectOverview
        scope={project.scope}
        suitableFor={project.suitableFor}
        overview={detailPage.overview}
      />
      <ProjectTimeline timeline={detailPage.timeline} />
      <ProjectGallery gallery={detailPage.gallery} />
      <ProjectMaterials
        materials={detailPage.materials}
        standards={detailPage.standards}
      />
      <ProjectCTA />
    </main>
  );
}
