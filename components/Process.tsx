import { Check, ClipboardList, HardHat, MessagesSquare, Ruler, Send } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const steps = [
  { title: "Consultation", text: "We clarify project goals, site needs, budget direction, and priorities.", icon: MessagesSquare },
  { title: "Planning & Quotation", text: "Scope, materials, staging, and pricing are shaped into a clear plan.", icon: ClipboardList },
  { title: "Construction", text: "The build phase is managed with disciplined site coordination.", icon: HardHat },
  { title: "Quality Check", text: "Key details are reviewed against workmanship and delivery expectations.", icon: Check },
  { title: "Handover", text: "Your completed project is handed over cleanly with final communication.", icon: Send }
];

export default function Process() {
  return (
    <section id="process" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-y-16 left-1/2 w-px bg-gradient-to-b from-transparent via-[#8fa58d]/38 to-transparent" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Process" title="A Clear Path from Idea to Handover">
          <p>
            A structured process keeps projects easier to understand, easier to manage, and easier
            to deliver with confidence.
          </p>
        </SectionHeading>

        <div className="relative grid gap-5 lg:grid-cols-5">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-transparent via-white/18 to-transparent lg:block" />
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Reveal key={step.title} delay={index * 0.08}>
                <div className="relative h-full border border-[#6e5a42]/12 bg-[#fffaf1]/82 p-5 shadow-[0_16px_38px_rgba(95,73,44,0.07)] transition hover:-translate-y-1 hover:border-[#8fa58d] hover:bg-white">
                  <div className="mb-6 flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center border border-[#8fa58d]/40 bg-[#8fa58d]/16 text-[#2f4a39]">
                      <Icon size={23} />
                    </span>
                    <span className="font-display text-sm text-[#9b8469]">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-[#243126]">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#646b60]">{step.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.18} className="mx-auto mt-10 flex max-w-2xl items-center gap-4 border border-[#6e5a42]/12 bg-[#fffaf1]/80 p-5 text-[#646b60] shadow-[0_14px_35px_rgba(95,73,44,0.07)]">
          <Ruler className="shrink-0 text-[#8a5a31]" size={24} />
          <p className="leading-7">
            Every project has its own constraints. The process is adapted to the site, scope, and
            client requirements while keeping communication direct.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
