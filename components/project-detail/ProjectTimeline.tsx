import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import type { TimelinePhase } from "@/lib/data/projects";

interface ProjectTimelineProps {
  timeline: TimelinePhase[];
}

export default function ProjectTimeline({ timeline }: ProjectTimelineProps) {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Construction Timeline" title="Project Phases">
          <p>A typical construction sequence for this type of project.</p>
        </SectionHeading>

        <div className="grid gap-6">
          {timeline.map((phase, index) => (
            <Reveal key={phase.phase} delay={index * 0.08}>
              <div className="glass-card p-8">
                <div className="mb-6 flex flex-wrap items-baseline justify-between gap-4">
                  <h3 className="font-display text-2xl font-semibold text-white">
                    {phase.phase}
                  </h3>
                  <span className="text-sm font-semibold text-[#f0b76c]">
                    {phase.duration}
                  </span>
                </div>

                <p className="mb-6 text-white/68">{phase.description}</p>

                <div className="grid gap-2 sm:grid-cols-2">
                  {phase.tasks.map((task) => (
                    <div key={task} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8eebff] shadow-[0_0_12px_rgba(142,235,255,0.6)]" />
                      <span className="text-sm text-white/76">{task}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
