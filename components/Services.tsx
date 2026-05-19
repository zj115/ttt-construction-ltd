import {
  Building,
  ClipboardCheck,
  Hammer,
  Home,
  Paintbrush,
  Wrench
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const services = [
  {
    title: "Residential Construction",
    text: "New home builds shaped around durable structure, smart detailing, and everyday living.",
    icon: Home
  },
  {
    title: "Commercial Construction",
    text: "Practical commercial spaces delivered with disciplined coordination and site control.",
    icon: Building
  },
  {
    title: "Renovation & Extensions",
    text: "Careful upgrades that respect existing structures while improving comfort and value.",
    icon: Hammer
  },
  {
    title: "Project Management",
    text: "Planning, supplier coordination, timeline tracking, and delivery oversight from start to finish.",
    icon: ClipboardCheck
  },
  {
    title: "Interior Fit-outs",
    text: "Clean, functional interiors for homes, offices, retail, and specialist commercial spaces.",
    icon: Paintbrush
  },
  {
    title: "Maintenance & Repairs",
    text: "Responsive repair and upkeep services to protect buildings and keep operations moving.",
    icon: Wrench
  }
];

export default function Services() {
  return (
    <section id="services" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_20%,rgba(33,168,255,0.12),transparent_34rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Services" title="Construction Services Built for New Zealand">
          <p>
            From full builds to precise renovation and maintenance work, TTT Construction Ltd brings
            structured delivery and professional care to every project type.
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
