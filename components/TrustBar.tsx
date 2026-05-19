"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  ClipboardCheck,
  HardHat,
  ShieldCheck,
  ReceiptText
} from "lucide-react";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

const trustItems = [
  {
    title: "NZ Building Code",
    text: "Residential work is planned around New Zealand Building Code, consent, inspection, and practical handover expectations.",
    icon: BadgeCheck
  },
  {
    title: "Health & Safety",
    text: "Site access, trade coordination, tidy work habits, and risk awareness are treated as part of daily delivery.",
    icon: HardHat
  },
  {
    title: "Transparent Quoting",
    text: "Quotes are discussed around scope, drawings, site conditions, exclusions, and realistic timing before work begins.",
    icon: ReceiptText
  },
  {
    title: "Workmanship Guarantee",
    text: "Clear workmanship expectations, defect follow-up, aftercare support, and warranty discussions are part of the handover process.",
    icon: ShieldCheck
  }
];

export default function TrustBar() {
  return (
    <section className="py-20 sm:py-28">
      <div className="section-shell">
        <SectionHeading eyebrow="Trust & Compliance" title="Licensed. Insured. Built to NZ Standards.">
          <p>
            Professional residential construction depends on clear responsibility, compliant work,
            documented scope, safe site habits, and a handover process clients can understand.
          </p>
        </SectionHeading>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
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

        <Reveal className="soft-card mt-8 flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-2xl leading-7 text-[#4f594d]">
            LBP involvement, public liability insurance, project-specific warranty details, and
            documentation can be confirmed during consultation and quotation where applicable.
          </p>
          <a href="#contact" className="liquid-glass inline-flex justify-center px-6 py-3 font-semibold text-[#243126]">
            Request a Free Consultation
          </a>
        </Reveal>
      </div>
    </section>
  );
}
