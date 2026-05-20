import { CheckCircle2, FileText, MapPin, Ruler, Settings, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  {
    title: "Scope Review",
    text: "Project type, site location, drawings status, consent stage, and timeline expectations.",
    icon: FileText
  },
  {
    title: "Site Assessment",
    text: "Access conditions, ground conditions, existing services, and site-specific constraints.",
    icon: MapPin
  },
  {
    title: "Specifications",
    text: "Material selections, finishing levels, fixtures, and quality expectations are clarified.",
    icon: Settings
  },
  {
    title: "Trade Coordination",
    text: "Subcontractor requirements, sequencing, and specialist work are identified.",
    icon: Users
  },
  {
    title: "Exclusions & Allowances",
    text: "What is included, what is excluded, and provisional allowances are clearly defined.",
    icon: Ruler
  },
  {
    title: "Final Quotation",
    text: "A detailed quotation is provided based on confirmed scope, drawings, and specifications.",
    icon: CheckCircle2
  }
];

export default function QuotationProcess() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(142,235,255,0.08),transparent_32rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Quotation" title="Transparent Quotation Process">
          <p>
            Quotation details are confirmed based on drawings, site conditions, specifications, and
            agreed scope. Clear documentation helps avoid surprises during construction.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.06}>
                <div className="glass-card group h-full p-6 transition duration-300 hover:scale-[1.02]">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center rounded-2xl border border-[#8eebff]/30 bg-[#8eebff]/12 text-[#8eebff] transition group-hover:border-[#8eebff]/50 group-hover:shadow-[0_18px_30px_rgba(142,235,255,0.18)]">
                      <Icon size={24} />
                    </span>
                    <span className="font-display text-sm text-white/50">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{step.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.2} className="glass-card mx-auto mt-10 max-w-3xl p-6">
          <p className="text-center leading-7 text-white/72">
            <strong className="text-white">Important:</strong> Quotations are based on the information
            provided at the time. Changes to scope, specifications, site conditions, or drawings may
            require quotation adjustments. Variations are discussed before proceeding.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
