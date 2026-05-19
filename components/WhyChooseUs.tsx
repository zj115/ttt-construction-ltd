import { BadgeCheck, Clock3, Gem, MessageSquareText, ReceiptText, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const reasons = [
  { title: "NZ construction standards", icon: BadgeCheck },
  { title: "Clear communication", icon: MessageSquareText },
  { title: "Reliable timeline", icon: Clock3 },
  { title: "Skilled team", icon: Users },
  { title: "Quality materials", icon: Gem },
  { title: "Transparent pricing", icon: ReceiptText }
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Why Choose Us" title="Professional Delivery Without Guesswork">
          <p>
            TTT Construction Ltd combines practical construction capability with transparent project
            habits that help clients feel informed and protected.
          </p>
        </SectionHeading>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            return (
              <Reveal key={reason.title} delay={index * 0.05}>
                <div className="flex h-full items-center gap-4 border border-[#6e5a42]/12 bg-[#fffaf1]/78 p-5 shadow-[0_14px_35px_rgba(95,73,44,0.07)] transition hover:border-[#b87943]/45 hover:bg-white">
                  <span className="grid h-11 w-11 shrink-0 place-items-center border border-[#b87943]/35 bg-[#b87943]/10 text-[#8a5a31]">
                    <Icon size={21} />
                  </span>
                  <h3 className="font-display text-lg font-semibold text-[#243126]">{reason.title}</h3>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
