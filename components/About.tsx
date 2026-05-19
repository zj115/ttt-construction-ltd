import { CheckCircle2, Eye, Handshake } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    title: "Quality First",
    text: "Workmanship, materials, and finishing standards are treated as core project priorities.",
    icon: CheckCircle2
  },
  {
    title: "Reliable Delivery",
    text: "Clear planning and practical site coordination keep each stage moving with confidence.",
    icon: Eye
  },
  {
    title: "Client Focused",
    text: "Transparent communication helps owners and stakeholders understand progress at every step.",
    icon: Handshake
  }
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About TTT Construction Ltd">
          <p>
            TTT Construction Ltd is a professional construction company supporting New Zealand
            clients with quality workmanship, transparent communication, and reliable project
            delivery aligned with local standards.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-3">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="glow-border h-full border border-white/10 bg-white/[0.045] p-6 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.07]">
                  <div className="mb-7 grid h-14 w-14 place-items-center border border-[#21a8ff]/35 bg-[#21a8ff]/10 text-[#67c7ff]">
                    <Icon size={25} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{item.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
