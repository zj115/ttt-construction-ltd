"use client";

import {
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  Gem,
  HardHat,
  HeartHandshake,
  ReceiptText
} from "lucide-react";
import GlassCard from "@/components/GlassCard";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  {
    title: "NZ Building Code Awareness",
    text: "Built with awareness of New Zealand building standards, consent pathways, and inspection expectations.",
    icon: BadgeCheck
  },
  {
    title: "Health & Safety",
    text: "Site access, trade coordination, tidy work habits, and risk awareness are treated as part of daily delivery.",
    icon: HardHat
  },
  {
    title: "Clear Quotation Process",
    text: "Quotes are discussed around scope, drawings, site conditions, exclusions, and realistic timing before work begins.",
    icon: ReceiptText
  },
  {
    title: "Quality Materials",
    text: "Material choices are discussed practically, with attention to durability, finish quality, and project suitability.",
    icon: Gem
  },
  {
    title: "Project Timeline Planning",
    text: "Each build is planned around site readiness, sequencing, inspections, weather, and homeowner decisions.",
    icon: CalendarClock
  },
  {
    title: "Aftercare Support",
    text: "Handover can include final checks, maintenance notes, and follow-up for agreed workmanship items.",
    icon: HeartHandshake
  }
];

export default function TrustBar() {
  return (
    <section className="section-glow py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Trust & Standards" title="Built on Trust, Safety, and Professional Standards">
          <p>
            Clients choose TTT Construction Ltd for dependable workmanship, practical project
            planning, and a professional building experience.
          </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <GlassCard className="h-full p-6">
                  <Icon className="mb-5 text-[#f0b76c]" size={26} />
                  <h3 className="font-display text-xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 leading-7 text-white/68">{item.text}</p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="glass-card mt-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-7 text-white/70">
            Specific documentation, trade requirements, warranty expectations, and any restricted
            building work considerations can be confirmed during consultation and quotation.
          </p>
          <a href="#contact" className="liquid-glass inline-flex justify-center px-6 py-3 font-semibold text-white">
            Request a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
