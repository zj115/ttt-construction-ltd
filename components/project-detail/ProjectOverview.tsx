import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface ProjectOverviewProps {
  scope: string;
  suitableFor: string;
  overview: {
    description: string;
    duration: string;
    budget: string;
    complexity: string;
  };
}

export default function ProjectOverview({ scope, suitableFor, overview }: ProjectOverviewProps) {
  return (
    <section className="section-glow py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Project Overview" title="What This Project Involves">
          <p>{overview.description}</p>
        </SectionHeading>

        {/* Stats grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          <Reveal delay={0}>
            <div className="glass-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Typical Duration
              </p>
              <p className="font-display text-2xl font-semibold text-white">
                {overview.duration}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.07}>
            <div className="glass-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Budget Range
              </p>
              <p className="font-display text-2xl font-semibold text-white">
                {overview.budget}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.14}>
            <div className="glass-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Complexity
              </p>
              <p className="font-display text-2xl font-semibold text-white">
                {overview.complexity}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.21}>
            <div className="glass-card p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Location
              </p>
              <p className="font-display text-2xl font-semibold text-white">
                New Zealand
              </p>
            </div>
          </Reveal>
        </div>

        {/* Scope & Suitable For */}
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <Reveal>
            <div className="glass-card p-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Typical Scope
              </h3>
              <p className="text-white/68">{scope}</p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Suitable For
              </h3>
              <p className="text-white/68">{suitableFor}</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
