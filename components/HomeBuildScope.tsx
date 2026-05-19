"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, DoorOpen, Home, PanelsTopLeft, Ruler, Trees } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const scopes = [
  {
    title: "New Home Builds",
    text: "End-to-end construction support for detached homes, lifestyle properties, and family-focused residential builds.",
    icon: Home
  },
  {
    title: "Extensions",
    text: "Extra bedrooms, living spaces, garages, and practical additions that feel connected to the original home.",
    icon: PanelsTopLeft
  },
  {
    title: "Renovations",
    text: "Layout upgrades, recladding support, kitchen and bathroom improvements, and modernisation work.",
    icon: DoorOpen
  },
  {
    title: "Outdoor Living",
    text: "Decks, entryways, exterior improvements, and details that make the home easier to enjoy year-round.",
    icon: Trees
  }
];

const inclusions = [
  "Scope review and buildability advice",
  "Transparent quotation structure",
  "Trade and supplier coordination",
  "Site progress communication",
  "Materials and finish coordination",
  "Final quality review before handover"
];

export default function HomeBuildScope() {
  return (
    <section className="warm-band overflow-hidden py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Home Build Scope" title="More Than a Build Crew">
          <p>
            Homeowners need clarity as much as craftsmanship. TTT Construction Ltd supports the full
            residential journey from early planning through site delivery and handover.
          </p>
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-4">
          {scopes.map((scope, index) => {
            const Icon = scope.icon;
            return (
              <Reveal key={scope.title} delay={index * 0.06}>
                <motion.div
                  whileHover={{ y: -8, rotate: index % 2 === 0 ? -0.35 : 0.35 }}
                  className="soft-card h-full p-6"
                >
                  <div className="mb-7 grid h-14 w-14 place-items-center rounded-full bg-[#8fa58d]/18 text-[#2f4a39]">
                    <Icon size={24} />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-[#243126]">{scope.title}</h3>
                  <p className="mt-4 leading-7 text-[#646b60]">{scope.text}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 grid gap-6 border border-[#6e5a42]/12 bg-[#fffaf1]/70 p-6 shadow-[0_18px_45px_rgba(95,73,44,0.08)] lg:grid-cols-[0.8fr_1.2fr]">
          <div className="flex gap-4">
            <Ruler className="mt-1 shrink-0 text-[#8a5a31]" size={26} />
            <div>
              <h3 className="font-display text-2xl font-semibold text-[#243126]">What clients can expect</h3>
              <p className="mt-3 leading-7 text-[#646b60]">
                A practical, well-communicated process designed for real residential decisions,
                changing site conditions, and the details that matter at handover.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {inclusions.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-full bg-white/62 px-4 py-3 text-sm font-medium text-[#4f594d]">
                <ClipboardCheck size={17} className="shrink-0 text-[#2f4a39]" />
                {item}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
