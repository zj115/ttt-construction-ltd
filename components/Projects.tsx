import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "Residential New Build",
    projectType: "Capability Type: New Build",
    scope: "Site preparation, foundations, framing, exterior envelope, interior finishing, and handover planning",
    suitableFor: "Homeowners planning a detached home or lifestyle property",
    location: "New Zealand",
    keyWork: ["Foundations", "Timber framing", "Envelope coordination", "Handover checks"],
    image: "/images/modern-detached-home.jpg"
  },
  {
    name: "Home Renovation",
    projectType: "Capability Type: Renovation",
    scope: "Layout improvements, room upgrades, kitchen and bathroom works, finish detailing, and staged delivery",
    suitableFor: "Owners improving comfort, functionality, and long-term value",
    location: "New Zealand",
    keyWork: ["Site protection", "Preparation", "Interior upgrades", "Finish detailing"],
    image: "/images/luxury-suburban-home.jpg"
  },
  {
    name: "Extension Project",
    projectType: "Capability Type: Extension",
    scope: "Added living areas, bedrooms, garages, structural openings, tie-ins, and exterior completion",
    suitableFor: "Families needing more usable space without moving",
    location: "New Zealand",
    keyWork: ["Buildability review", "Structural coordination", "Weatherproofing", "Exterior works"],
    image: "/images/rural-single-family-home.jpg"
  },
  {
    name: "Commercial Interior Fit-out",
    projectType: "Capability Type: Fit-out",
    scope: "Interior preparation, linings, fixtures, finishing works, trade coordination, and practical close-out",
    suitableFor: "Small commercial spaces needing tidy construction delivery",
    location: "New Zealand",
    keyWork: ["Trade sequencing", "Fit-out coordination", "Materials staging", "Quality review"],
    image: "/images/residential-construction-site.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="section-glow py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Project Capabilities" title="Project Capabilities">
          <p>
            These examples show the types of construction and renovation work TTT Construction Ltd
            can support.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 md:items-stretch">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07} className="h-full">
              <article className="glass-card liquid-highlight group flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#0d1821]">
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
                  <div className="absolute bottom-6 left-6 right-16 h-px origin-left scale-x-0 bg-[#70d7ff] shadow-[0_0_28px_rgba(112,215,255,0.58)] transition duration-500 group-hover:scale-x-100" />
                  <ArrowUpRight className="absolute right-6 top-6 text-white opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#f0b76c]">
                    <span>{project.projectType}</span>
                    <span className="text-white/34">/</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                  <div className="mt-5 grid gap-3 text-sm text-white/68">
                    <p>
                      <span className="font-semibold text-white">Typical Scope:</span> {project.scope}
                    </p>
                    <p>
                      <span className="font-semibold text-white">Suitable For:</span>{" "}
                      {project.suitableFor}
                    </p>
                  </div>
                  <div className="mt-auto pt-5">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                      Key work included
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.keyWork.map((item) => (
                        <span key={item} className="liquid-glass inline-flex px-3 py-2 text-xs font-medium text-white/76">
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
          <a href="#contact" className="liquid-glass inline-flex px-7 py-4 font-semibold text-white">
            Discuss Your Project
          </a>
        </Reveal>
      </div>
    </section>
  );
}
