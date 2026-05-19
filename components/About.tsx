import { BadgeCheck, ClipboardCheck, Hammer, MessageSquareText } from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const values = [
  {
    title: "Quality Workmanship",
    text: "We focus on durable construction details, clean finishes, and work that meets New Zealand building expectations.",
    icon: Hammer
  },
  {
    title: "Transparent Communication",
    text: "Clients receive clear updates, practical advice, and honest communication throughout each stage of the project.",
    icon: MessageSquareText
  },
  {
    title: "Reliable Delivery",
    text: "We plan each project carefully to support smooth progress, realistic timelines, and professional handover.",
    icon: ClipboardCheck
  },
  {
    title: "NZ Building Standards",
    text: "Our work is guided by local building requirements, safety awareness, and responsible construction practice.",
    icon: BadgeCheck
  }
];

export default function About() {
  return (
    <section id="about" className="section-glow relative py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="About" title="About TTT Construction Ltd">
          <p>
            A New Zealand construction company focused on quality, transparency, and reliable
            project delivery.
          </p>
          <p className="mt-4">
            TTT Construction Ltd provides residential construction, renovation, extension, and
            project management services across New Zealand. We focus on clear communication,
            practical planning, safe building practices, and high-quality workmanship from the first
            consultation to final handover.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {values.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <GlassCard className="glow-border h-full p-6">
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-2xl border border-white/15 bg-white/8 text-[#70d7ff]">
                    <Icon size={25} />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-4 leading-7 text-white/68">{item.text}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
