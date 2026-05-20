import { Bath, DoorOpen, Layers, Paintbrush, Warehouse, Zap } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const specs = [
  {
    title: "Exterior Specifications",
    items: [
      "Exterior cladding and weatherproofing",
      "Roofing materials and drainage",
      "Windows and exterior doors",
      "Decks and outdoor structures"
    ],
    icon: Warehouse
  },
  {
    title: "Interior Specifications",
    items: [
      "Wall linings and ceiling finishes",
      "Interior doors and hardware",
      "Skirting, architraves, and trims",
      "Paint finishes and wall treatments"
    ],
    icon: Paintbrush
  },
  {
    title: "Kitchen & Bathroom",
    items: [
      "Kitchen cabinetry and benchtops",
      "Bathroom fixtures and fittings",
      "Tiling and waterproofing",
      "Tapware and accessories"
    ],
    icon: Bath
  },
  {
    title: "Flooring",
    items: [
      "Flooring type and quality level",
      "Carpet, timber, tile, or vinyl",
      "Underlay and preparation",
      "Transitions and finishing"
    ],
    icon: Layers
  },
  {
    title: "Services Coordination",
    items: [
      "Electrical layout and fixtures",
      "Plumbing and drainage coordination",
      "Heating and ventilation",
      "Insulation and building envelope"
    ],
    icon: Zap
  },
  {
    title: "Doors & Joinery",
    items: [
      "Internal and external door styles",
      "Wardrobe and storage joinery",
      "Hardware and locking systems",
      "Custom joinery requirements"
    ],
    icon: DoorOpen
  }
];

export default function Specifications() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(216,181,122,0.09),transparent_30rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Specifications" title="Clear Specifications Before We Build">
          <p>
            Detailed specifications help ensure the right materials, finishes, and quality levels are
            delivered. Selections are confirmed before construction begins.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {specs.map((spec, index) => {
            const Icon = spec.icon;
            return (
              <Reveal key={spec.title} delay={index * 0.05}>
                <div className="glass-card group h-full p-6 transition duration-300 hover:scale-[1.02]">
                  <div className="mb-5 flex items-center gap-4">
                    <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl border border-[#d8b57a]/30 bg-[#d8b57a]/12 text-[#d8b57a] transition group-hover:border-[#d8b57a]/50 group-hover:shadow-[0_16px_28px_rgba(216,181,122,0.16)]">
                      <Icon size={22} />
                    </span>
                    <h3 className="font-display text-lg font-semibold text-white">{spec.title}</h3>
                  </div>
                  <ul className="space-y-2.5">
                    {spec.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-sm leading-6 text-white/68">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8eebff]/60" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="glass-card mx-auto mt-10 max-w-3xl p-6">
          <p className="text-center leading-7 text-white/72">
            Specifications are discussed during the quotation stage and confirmed before work begins.
            Changes to specifications during construction may affect cost and timeline.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
