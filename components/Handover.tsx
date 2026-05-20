import { BookOpen, CheckSquare, ClipboardCheck, FileText, Home, Wrench } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const handoverSteps = [
  {
    title: "Final Walkthrough",
    text: "A comprehensive walkthrough to review completed work and identify any outstanding items.",
    icon: Home
  },
  {
    title: "Workmanship Check",
    text: "Quality review of finishes, fixtures, and construction details against agreed specifications.",
    icon: CheckSquare
  },
  {
    title: "Defect Resolution",
    text: "Any agreed defects or minor items are documented and scheduled for completion.",
    icon: Wrench
  },
  {
    title: "Maintenance Notes",
    text: "Guidance on care, maintenance, and warranty information for materials and installations.",
    icon: BookOpen
  },
  {
    title: "Product Information",
    text: "Relevant product documentation, warranties, and supplier details where applicable.",
    icon: FileText
  },
  {
    title: "Project Sign-Off",
    text: "Final documentation, keys, and project handover once all items are completed.",
    icon: ClipboardCheck
  }
];

export default function Handover() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(216,181,122,0.08),transparent_30rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Handover" title="Handover with Confidence">
          <p>
            A structured handover process ensures the project is completed to agreed standards and
            homeowners understand how to care for their new or renovated home.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {handoverSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.05}>
                <div className="glass-card group h-full p-6 transition duration-300 hover:scale-[1.02]">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#d8b57a]/30 bg-[#d8b57a]/12 text-[#d8b57a] transition group-hover:border-[#d8b57a]/50 group-hover:shadow-[0_16px_28px_rgba(216,181,122,0.16)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="glass-card mx-auto mt-10 max-w-3xl p-6">
          <p className="text-center leading-7 text-white/72">
            Handover timing depends on project completion and any outstanding items. Clear
            communication throughout the process helps ensure a smooth transition to your completed
            home.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
