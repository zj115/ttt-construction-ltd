"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const testimonials = [
  {
    quote:
      "Clear updates, practical advice, and a tidy handover. The process felt calm even when decisions had to be made quickly.",
    name: "Homeowner",
    location: "Auckland"
  },
  {
    quote:
      "The team understood the rhythm of a family home project: timing, disruption, finish quality, and communication all mattered.",
    name: "Renovation Client",
    location: "Hamilton"
  },
  {
    quote:
      "Professional coordination from planning through site work. We always knew what was happening and what came next.",
    name: "Residential Developer",
    location: "Wellington"
  }
];

const areas = ["Auckland", "Hamilton", "Tauranga", "Wellington", "Christchurch", "Regional NZ"];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Trust" title="Built for Local Homeowners and Developers">
          <p>
            The tone of the work is simple: careful planning, clear communication, and a finish that
            feels ready to live in.
          </p>
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08}>
              <motion.article
                whileHover={{ y: -8 }}
                className="soft-card h-full p-6"
              >
                <Quote className="mb-6 text-[#8a5a31]" size={28} />
                <div className="mb-5 flex gap-1 text-[#b87943]">
                  {Array.from({ length: 5 }).map((_, starIndex) => (
                    <Star key={starIndex} size={16} fill="currentColor" />
                  ))}
                </div>
                <p className="leading-8 text-[#4f594d]">{item.quote}</p>
                <div className="mt-7 border-t border-[#6e5a42]/12 pt-5">
                  <p className="font-display text-lg font-semibold text-[#243126]">{item.name}</p>
                  <p className="mt-1 text-sm text-[#7a6c5a]">{item.location}, New Zealand</p>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 overflow-hidden border-y border-[#6e5a42]/12 py-4">
          <motion.div
            className="flex w-max gap-3"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          >
            {[...areas, ...areas].map((area, index) => (
              <span key={`${area}-${index}`} className="rounded-full bg-[#fffaf1]/78 px-5 py-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#8a5a31]">
                {area}
              </span>
            ))}
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
