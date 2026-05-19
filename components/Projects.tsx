import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    name: "Modern Residential Build",
    category: "Residential",
    location: "Auckland, NZ",
    text: "A crisp new-build concept focused on structure, light, and long-term liveability.",
    accent: "from-[#21a8ff] via-[#22384d] to-[#07111d]"
  },
  {
    name: "Commercial Interior Upgrade",
    category: "Commercial",
    location: "Wellington, NZ",
    text: "Interior improvement work designed for efficient handover and daily business use.",
    accent: "from-[#f6b655] via-[#36404c] to-[#081018]"
  },
  {
    name: "Home Renovation Project",
    category: "Renovation",
    location: "Christchurch, NZ",
    text: "A practical renovation program improving flow, finish quality, and usability.",
    accent: "from-[#82e5ff] via-[#1d3342] to-[#05070a]"
  },
  {
    name: "Structural Improvement Work",
    category: "Maintenance",
    location: "Hamilton, NZ",
    text: "Targeted strengthening and repair scope with careful staging and quality checks.",
    accent: "from-[#ff9d42] via-[#26323d] to-[#07111d]"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Projects" title="Recent Project Capabilities">
          <p>
            Representative project examples showing the type of construction, renovation, and
            improvement work TTT Construction Ltd can support across New Zealand.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, index) => (
            <Reveal key={project.name} delay={index * 0.07}>
              <article className="group overflow-hidden border border-white/10 bg-white/[0.045]">
                <div className={`relative h-64 overflow-hidden bg-gradient-to-br ${project.accent}`}>
                  <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.09)_1px,transparent_1px)] bg-[size:42px_42px] opacity-45 transition duration-500 group-hover:scale-110" />
                  <div className="absolute inset-x-8 bottom-8 h-24 border border-white/20 bg-black/10 backdrop-blur-[2px] transition duration-500 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-black/0 transition duration-500 group-hover:bg-black/24" />
                  <ArrowUpRight className="absolute right-6 top-6 text-white opacity-70 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:opacity-100" />
                </div>
                <div className="p-6">
                  <div className="mb-4 flex flex-wrap gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#67c7ff]">
                    <span>{project.category}</span>
                    <span className="text-slate-500">/</span>
                    <span>{project.location}</span>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-3 leading-7 text-slate-300">{project.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
