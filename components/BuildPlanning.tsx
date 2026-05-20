import { BarChart3, Calendar, Package, ShoppingCart, TrendingUp, Users } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const planningAreas = [
  {
    title: "Build Cost Planning",
    text: "Material costs, labour, subcontractors, and contingency are planned before work begins.",
    icon: BarChart3
  },
  {
    title: "Supplier Coordination",
    text: "Materials are sourced from reliable suppliers with lead times and availability confirmed.",
    icon: ShoppingCart
  },
  {
    title: "Purchase Order Tracking",
    text: "Orders are tracked to ensure materials arrive on time and match specifications.",
    icon: Package
  },
  {
    title: "Trade Scheduling",
    text: "Subcontractors are scheduled in the correct sequence to maintain project flow.",
    icon: Users
  },
  {
    title: "Site Sequencing",
    text: "Work stages are planned to avoid delays, rework, and coordination issues.",
    icon: Calendar
  },
  {
    title: "Progress Communication",
    text: "Regular updates keep homeowners informed of progress, changes, and next steps.",
    icon: TrendingUp
  }
];

export default function BuildPlanning() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_20%,rgba(142,235,255,0.08),transparent_32rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Planning" title="Planned from Cost to Completion">
          <p>
            Effective planning reduces delays, manages costs, and keeps projects on track. Every
            stage is coordinated to deliver quality results.
          </p>
        </SectionHeading>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {planningAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Reveal key={area.title} delay={index * 0.05}>
                <div className="glass-card group h-full p-6 transition duration-300 hover:scale-[1.02]">
                  <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl border border-[#8eebff]/30 bg-[#8eebff]/12 text-[#8eebff] transition group-hover:border-[#8eebff]/50 group-hover:shadow-[0_18px_30px_rgba(142,235,255,0.18)]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-white">{area.title}</h3>
                  <p className="mt-4 text-sm leading-6 text-white/68">{area.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} className="glass-card mx-auto mt-10 max-w-3xl p-6">
          <p className="text-center leading-7 text-white/72">
            Planning is adapted to each project's scope, site conditions, and timeline. Variations
            and changes are discussed before they affect cost or schedule.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
