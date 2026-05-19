import {
  ClipboardCheck,
  DraftingCompass,
  Hammer,
  Home,
  Paintbrush,
  Trees
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "New Detached Homes",
    text: "Standalone residential builds shaped around durable structure, practical layouts, and everyday living.",
    icon: Home
  },
  {
    title: "Design-to-Build Support",
    text: "Early construction advice, buildability review, planning coordination, and clear quotation support.",
    icon: DraftingCompass
  },
  {
    title: "Renovation & Extensions",
    text: "House upgrades, additions, layout changes, and extensions that improve comfort, flow, and value.",
    icon: Hammer
  },
  {
    title: "Project Management",
    text: "Planning, supplier coordination, timeline tracking, and delivery oversight from start to finish.",
    icon: ClipboardCheck
  },
  {
    title: "Interior Finishing",
    text: "Kitchen, bathroom, flooring, wall lining, detailing, and finishing work for complete residential handover.",
    icon: Paintbrush
  },
  {
    title: "Outdoor Living & Repairs",
    text: "Decks, exterior upgrades, maintenance, repairs, and practical improvements around the home.",
    icon: Trees
  }
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(33,168,255,0.12),transparent_34rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Services" title="Residential Construction Services Built for New Zealand">
          <p>
            From new standalone homes to extensions, finishing, and repairs, TTT Construction Ltd
            brings structured delivery and professional care to residential projects.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={index * 0.05}>
                <div className="glow-border group h-full border border-white/10 bg-[#0b1118]/84 p-6 transition duration-300 hover:-translate-y-2 hover:border-[#21a8ff]/45">
                  <div className="mb-8 flex items-center justify-between">
                    <span className="grid h-14 w-14 place-items-center border border-white/12 bg-white/[0.06] text-[#67c7ff] transition group-hover:border-[#21a8ff]/50 group-hover:shadow-[0_0_30px_rgba(33,168,255,0.18)]">
                      <Icon size={25} />
                    </span>
                    <span className="font-display text-sm text-slate-500">0{index + 1}</span>
                  </div>
                  <h3 className="font-display text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-4 leading-7 text-slate-300">{service.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
