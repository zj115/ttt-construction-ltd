import { Calendar, CheckCircle2, CreditCard, FileCheck, Foundation, Home } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const stages = [
  {
    title: "Deposit",
    text: "Initial deposit to secure project scheduling and commence planning.",
    icon: CreditCard
  },
  {
    title: "Site Preparation",
    text: "Payment for site works, earthworks, and foundation preparation.",
    icon: Foundation
  },
  {
    title: "Framing & Enclosure",
    text: "Payment milestone for framing, roof, and weathertight enclosure completion.",
    icon: Home
  },
  {
    title: "Interior Stage",
    text: "Payment for interior linings, services installation, and finishing preparation.",
    icon: FileCheck
  },
  {
    title: "Practical Completion",
    text: "Payment when the build reaches practical completion and is ready for handover.",
    icon: CheckCircle2
  },
  {
    title: "Final Handover",
    text: "Final payment after walkthrough, defect resolution, and project sign-off.",
    icon: Calendar
  }
];

export default function PaymentSchedule() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_60%,rgba(142,235,255,0.07),transparent_28rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Payment" title="Clear Payment Milestones">
          <p>
            Payment stages depend on the project scope and will be confirmed in the quotation or
            contract documentation. Typical stages are outlined below.
          </p>
        </SectionHeading>

        <div className="relative mx-auto max-w-4xl">
          <div className="absolute left-8 top-16 bottom-16 w-px bg-gradient-to-b from-[#8eebff]/40 via-[#8eebff]/20 to-[#8eebff]/40 hidden md:block" />

          <div className="space-y-5">
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              return (
                <Reveal key={stage.title} delay={index * 0.06}>
                  <div className="glass-card group relative flex items-start gap-6 p-6 transition duration-300 hover:scale-[1.01]">
                    <div className="relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-[#8eebff]/30 bg-[#8eebff]/12 text-[#8eebff] transition group-hover:border-[#8eebff]/50 group-hover:shadow-[0_18px_30px_rgba(142,235,255,0.18)]">
                      <Icon size={26} />
                    </div>
                    <div className="flex-1 pt-2">
                      <div className="mb-2 flex items-center justify-between gap-4">
                        <h3 className="font-display text-xl font-semibold text-white">{stage.title}</h3>
                        <span className="font-display text-sm text-white/50">Stage {index + 1}</span>
                      </div>
                      <p className="leading-7 text-white/68">{stage.text}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal delay={0.2} className="glass-card mx-auto mt-10 max-w-3xl p-6">
          <p className="text-center leading-7 text-white/72">
            <strong className="text-white">Note:</strong> Payment milestones are tailored to each
            project. The number of stages, timing, and amounts are confirmed before work begins.
            Progress payments are linked to completed work stages, not calendar dates.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
