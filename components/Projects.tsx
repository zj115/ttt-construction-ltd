import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "New Detached Home Capability",
    projectType: "New detached home",
    scope: "Residential construction coordination from site readiness through handover",
    location: "Waikato / wider NZ by consultation",
    timeline: "Indicative 6-9 months depending on consent, ground conditions, and selections",
    keyWork: ["Set-out and foundations", "Framing and roof structure", "Cladding coordination", "Final quality checks"],
    image: "/images/modern-detached-home.jpg"
  },
  {
    name: "Renovation & Extension Capability",
    projectType: "Renovation and extension",
    scope: "Layout changes, added living space, interior finishing, and staged work around the existing home",
    location: "New Zealand residential sites",
    timeline: "Indicative 10-18 weeks depending on scope, access, and materials",
    keyWork: ["Site protection", "Demolition and preparation", "Structural coordination", "Finish detailing"],
    image: "/images/luxury-suburban-home.jpg"
  },
  {
    name: "Lifestyle Section Build Capability",
    projectType: "Lifestyle residential build",
    scope: "Standalone home construction planning for rural, lifestyle, or larger residential sites",
    location: "Waikato and regional NZ by discussion",
    timeline: "Indicative 7-10 months depending on access, services, weather, and inspections",
    keyWork: ["Site access review", "Materials staging", "Weatherproofing", "Exterior works"],
    image: "/images/rural-single-family-home.jpg"
  },
  {
    name: "Construction Stage Support",
    projectType: "Project management and site delivery",
    scope: "Trade coordination, materials staging, and progress communication",
    location: "Residential projects across NZ by consultation",
    timeline: "Stage-based support aligned with the construction programme",
    keyWork: ["Trade sequencing", "Progress updates", "Materials coordination", "Quality review"],
    image: "/images/residential-construction-site.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Project Capability" title="Clear Residential Scope Before Construction Starts">
          <p>
            Until verified completed projects are ready to publish, these capability profiles show
            how TTT Construction Ltd discusses scope, location, timing, and key work with homeowners.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07}>
              <article className="soft-card group overflow-hidden">
                <div className="relative h-72 overflow-hidden bg-[#efe4d4]">
                  <Image
                    src={project.image}
                    alt={`${project.name} exterior residential construction image`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#243126]/76 via-[#243126]/18 to-transparent" />
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:42px_42px] opacity-0 mix-blend-screen transition duration-500 group-hover:opacity-55" />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/24" />
                  <div className="absolute bottom-6 left-6 right-16 h-px origin-left scale-x-0 bg-[#d9b48b] shadow-[0_0_28px_rgba(184,121,67,0.58)] transition duration-500 group-hover:scale-x-100" />
                  <ArrowUpRight className="absolute right-6 top-6 text-white opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#8a5a31]">
                    <span>{project.projectType}</span>
                    <span className="text-[#9b8469]">/</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#243126]">{project.name}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-[#4f594d]">
                    <p>
                      <span className="font-semibold text-[#243126]">Scope:</span> {project.scope}
                    </p>
                    <p>
                      <span className="font-semibold text-[#243126]">Estimated timeline:</span>{" "}
                      {project.timeline}
                    </p>
                  </div>
                  <div className="mt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#8a5a31]">
                      Key work included
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.keyWork.map((item) => (
                        <span key={item} className="liquid-glass inline-flex px-3 py-2 text-xs font-medium text-[#4f594d]">
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-9 text-center">
          <a href="#contact" className="liquid-glass inline-flex px-7 py-4 font-semibold text-[#243126]">
            Discuss Your Project
          </a>
        </Reveal>
      </div>
    </section>
  );
}
