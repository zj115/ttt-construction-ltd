"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, MessageSquareText, ShieldCheck } from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const clientPriorities = [
  {
    title: "Clear Decision Points",
    text:
      "Homeowners need to know when drawings, consent, selections, budget, and site access decisions affect the build.",
    icon: ClipboardCheck
  },
  {
    title: "Straight Communication",
    text:
      "Progress updates, scope changes, and next steps should be discussed plainly before they become surprises on site.",
    icon: MessageSquareText
  },
  {
    title: "Handover Confidence",
    text:
      "Final checks, workmanship expectations, maintenance notes, and aftercare give clients a clearer close-out process.",
    icon: ShieldCheck
  }
];

const areas = ["Waikato", "Hamilton", "Tauranga", "Auckland", "Bay of Plenty", "Wider NZ by discussion"];

export default function Testimonials() {
  return (
    <section className="py-24 sm:py-32">
      <div className="section-shell">
        <SectionHeading eyebrow="Client Priorities" title="What Homeowners Need Before They Commit">
          <p>
            A good residential build starts with practical information, steady communication, and
            clear expectations before anyone arrives on site.
          </p>
        </SectionHeading>

        <div className="grid gap-5 lg:grid-cols-3">
          {clientPriorities.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.08}>
                <motion.article
                  whileHover={{ y: -8 }}
                  className="soft-card h-full p-6"
                >
                  <Icon className="mb-6 text-[#8a5a31]" size={28} />
                  <h3 className="font-display text-xl font-semibold text-[#243126]">{item.title}</h3>
                  <p className="mt-4 leading-8 text-[#4f594d]">{item.text}</p>
                </motion.article>
              </Reveal>
            );
          })}
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
