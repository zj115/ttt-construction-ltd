import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

interface ProjectMaterialsProps {
  materials: {
    category: string;
    items: string[];
  }[];
  standards: string[];
}

export default function ProjectMaterials({ materials, standards }: ProjectMaterialsProps) {
  return (
    <section className="py-24">
      <div className="section-shell">
        <SectionHeading eyebrow="Materials & Standards" title="Quality & Compliance">
          <p>Materials and building standards typically used for this project type.</p>
        </SectionHeading>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Materials */}
          <Reveal>
            <div className="glass-card p-8">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Typical Materials
              </h3>
              <div className="grid gap-6">
                {materials.map((category) => (
                  <div key={category.category}>
                    <h4 className="mb-3 font-semibold text-white">{category.category}</h4>
                    <ul className="grid gap-2">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8eebff]" />
                          <span className="text-sm text-white/68">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Standards */}
          <Reveal delay={0.1}>
            <div className="glass-card p-8">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-[#f0b76c]">
                Building Standards
              </h3>
              <ul className="grid gap-4">
                {standards.map((standard) => (
                  <li key={standard} className="flex items-start gap-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#8eebff] shadow-[0_0_12px_rgba(142,235,255,0.6)]" />
                    <span className="text-white/76">{standard}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
