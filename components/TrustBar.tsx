"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  HardHat,
  HeartHandshake,
  ShieldCheck,
  Wrench
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  {
    title: "LBP coordination",
    text: "Licensed Building Practitioner support can be coordinated where restricted building work requires it.",
    icon: BadgeCheck
  },
  {
    title: "Workmanship guarantee",
    text: "Clear workmanship expectations, defect follow-up, and a practical handover process.",
    icon: ShieldCheck
  },
  {
    title: "NZ Building Code aware",
    text: "Residential work is planned around New Zealand consent, code, and inspection expectations.",
    icon: ClipboardCheck
  },
  {
    title: "Health & safety focused",
    text: "Site conduct, trade coordination, and daily work habits are treated as part of professional delivery.",
    icon: HardHat
  },
  {
    title: "Aftercare support",
    text: "Post-handover questions, minor adjustments, and maintenance guidance can be discussed clearly.",
    icon: HeartHandshake
  },
  {
    title: "Insurance ready",
    text: "Public liability and project-specific cover can be confirmed during quotation where applicable.",
    icon: Wrench
  }
];

export default function TrustBar() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Trust & Compliance" title="Built Around Confidence, Not Guesswork">
          <p>
            Mature building companies do more than look good online. They explain standards,
            responsibilities, warranties, safety, and what happens after handover.
          </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <Reveal key={item.title} delay={index * 0.05}>
                <motion.div
                  whileHover={{ y: -7 }}
                  className="soft-card h-full p-6"
                >
                  <Icon className="mb-5 text-[#8a5a31]" size={26} />
                  <h3 className="font-display text-xl font-semibold text-[#243126]">{item.title}</h3>
                  <p className="mt-3 leading-7 text-[#646b60]">{item.text}</p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-8 flex flex-col gap-4 rounded-[28px] border border-[#8fa58d]/28 bg-[#8fa58d]/14 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-7 text-[#4f594d]">
            Need a clearer answer on consent, drawings, scope, warranty, or insurance? Start with a
            free consultation and we will tell you what information is needed before pricing.
          </p>
          <a href="#contact" className="liquid-glass inline-flex justify-center px-6 py-3 font-semibold text-[#243126]">
            Request a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
