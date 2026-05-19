import Image from "next/image";
import {
  BadgeCheck,
  DraftingCompass,
  HardHat,
  Home,
  Layers3,
  ShieldCheck
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const capabilities = [
  "New detached house builds",
  "Architectural and custom homes",
  "House extensions and additions",
  "Renovations and reconfiguration",
  "Site coordination and trades",
  "Final quality checks and handover"
];

const buildCards = [
  {
    title: "Pre-build clarity",
    text: "Scope review, practical build advice, budget alignment, and sequencing before site work starts.",
    icon: DraftingCompass
  },
  {
    title: "Site execution",
    text: "Coordinated residential construction with reliable supervision and clean communication.",
    icon: HardHat
  },
  {
    title: "Finished home quality",
    text: "Detail-focused finishing, documentation, and handover for homes built to be lived in.",
    icon: ShieldCheck
  }
];

export default function ResidentialBuilds() {
  return (
    <section id="residential" className="relative overflow-hidden py-24 sm:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,rgba(33,168,255,0.13),transparent_34rem),radial-gradient(circle_at_80%_70%,rgba(246,182,85,0.11),transparent_30rem)]" />
      <div className="section-shell relative">
        <SectionHeading eyebrow="Detached Homes" title="Specialists in Standalone Residential Builds">
          <p>
            TTT Construction Ltd is built around the needs of New Zealand homeowners planning a
            reliable, well-managed standalone home, renovation, or extension.
          </p>
        </SectionHeading>

        <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="relative min-h-[520px] overflow-hidden border border-white/10 bg-white/[0.04]">
              <Image
                src="/images/luxury-suburban-home.jpg"
                alt="Modern standalone residential home exterior"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/20 to-transparent" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(33,168,255,0.28)_0,transparent_22%,transparent_72%,rgba(246,182,85,0.28)_100%)] mix-blend-screen" />
              <div className="pointer-events-none absolute inset-x-8 top-8 h-px bg-[#21a8ff]/80 shadow-[0_0_34px_rgba(33,168,255,0.9)]" />
              <div className="pointer-events-none absolute bottom-12 left-8 top-8 w-px bg-white/20" />
              <div className="pointer-events-none absolute bottom-12 right-8 top-8 w-px bg-white/20" />
              <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8">
                <div className="glass max-w-sm p-5">
                  <div className="mb-4 flex items-center gap-3 text-[#f6b655]">
                    <Home size={22} />
                    <span className="text-xs font-bold uppercase tracking-[0.24em]">Home Build Focus</span>
                  </div>
                  <p className="font-display text-2xl font-semibold text-white">
                    Practical construction control for detached homes.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-5">
            <Reveal delay={0.08}>
              <div className="border border-white/10 bg-[#08101a]/88 p-6 sm:p-8">
                <div className="grid gap-4 sm:grid-cols-2">
                  {capabilities.map((item) => (
                    <div key={item} className="flex items-start gap-3 text-slate-200">
                      <BadgeCheck className="mt-0.5 shrink-0 text-[#67c7ff]" size={19} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <div className="grid gap-5 md:grid-cols-3">
              {buildCards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <Reveal key={card.title} delay={0.14 + index * 0.06}>
                    <div className="glow-border h-full border border-white/10 bg-white/[0.045] p-5 transition hover:-translate-y-1 hover:bg-white/[0.07]">
                      <Icon className="mb-5 text-[#f6b655]" size={25} />
                      <h3 className="font-display text-lg font-semibold text-white">{card.title}</h3>
                      <p className="mt-3 text-sm leading-6 text-slate-300">{card.text}</p>
                    </div>
                  </Reveal>
                );
              })}
            </div>

            <Reveal delay={0.24}>
              <div className="flex flex-col gap-4 border border-[#21a8ff]/25 bg-[#21a8ff]/10 p-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex items-center gap-3">
                  <Layers3 className="text-[#67c7ff]" size={24} />
                  <p className="font-display text-xl font-semibold text-white">
                    From concept support to final handover.
                  </p>
                </div>
                <a
                  href="#contact"
                  className="inline-flex justify-center bg-white px-5 py-3 text-sm font-bold text-[#06101a] transition hover:bg-[#f6b655]"
                >
                  Plan a Home Build
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
