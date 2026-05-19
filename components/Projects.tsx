import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "Modern Residential Build",
    category: "New Detached Home",
    location: "Auckland, NZ",
    text: "A full standalone home build focused on structure, light, street appeal, and long-term liveability.",
    image: "/images/modern-detached-home.jpg"
  },
  {
    name: "Premium Family Home",
    category: "Residential Build",
    location: "Wellington, NZ",
    text: "A refined two-storey home concept with strong exterior detailing and clean residential finishes.",
    image: "/images/luxury-suburban-home.jpg"
  },
  {
    name: "Rural Single-Family Home",
    category: "Standalone House",
    location: "Christchurch, NZ",
    text: "A practical standalone home build for lifestyle sections, rural settings, and resilient everyday use.",
    image: "/images/rural-single-family-home.jpg"
  },
  {
    name: "Residential Construction Site",
    category: "New Build Stage",
    location: "Hamilton, NZ",
    text: "Framing, site coordination, materials staging, and construction control for a new residential project.",
    image: "/images/residential-construction-site.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Standalone Home Project Capabilities">
          <p>
            Residential project examples showing the type of standalone homes, new build stages,
            and renovation-led improvement work TTT Construction Ltd can support across New Zealand.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07}>
              <article className="group overflow-hidden border border-[#6e5a42]/12 bg-[#fffaf1]/82 shadow-[0_18px_45px_rgba(95,73,44,0.08)]">
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
                    <span>{project.category}</span>
                    <span className="text-[#9b8469]">/</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-[#243126]">{project.name}</h3>
                  <p className="mt-3 leading-7 text-[#646b60]">{project.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
