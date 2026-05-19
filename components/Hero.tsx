"use client";

import { motion } from "framer-motion";
import { ArrowRight, House, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="noise relative min-h-screen overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/residential-construction-site.jpg"
        aria-label="Residential house construction background video"
      >
        <source src="/videos/house-construction.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e7]/96 via-[#f7f1e7]/76 to-[#f7f1e7]/34" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f1e7] via-[#f7f1e7]/8 to-[#fffaf1]/40" />
      <div className="beam left-[-10rem] top-28 bg-[#8fa58d]" />
      <div className="beam bottom-10 right-[-12rem] bg-[#b87943]" />
      <motion.div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-shell relative flex min-h-[calc(100vh-7rem)] items-center py-16">
        <div className="max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-5 inline-flex items-center gap-3 border border-[#6e5a42]/15 bg-[#fffaf1]/75 px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#8a5a31] shadow-[0_12px_35px_rgba(95,73,44,0.08)]"
          >
            <span className="h-2 w-2 bg-[#b87943] shadow-[0_0_18px_rgba(184,121,67,0.55)]" />
            New Zealand Construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-5xl font-normal leading-[1.02] text-[#243126] sm:text-6xl lg:text-7xl"
          >
            Building the Future with <span className="text-gradient">Precision and Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-[#5f675b] sm:text-xl"
          >
            TTT Construction Ltd delivers reliable construction, renovation, and project
            management services across New Zealand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="liquid-glass group inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold text-[#243126] transition hover:-translate-y-0.5 hover:text-[#111812]"
            >
              Get a Quote
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="liquid-glass inline-flex items-center justify-center px-7 py-4 font-semibold text-[#243126] transition hover:-translate-y-0.5"
            >
              View Services
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1 }}
            className="mt-10 grid max-w-2xl gap-3 sm:grid-cols-2"
          >
            <div className="liquid-glass p-4">
              <House className="mb-3 text-[#8a5a31]" size={23} />
              <p className="font-display text-lg font-semibold text-[#243126]">Detached Homes</p>
              <p className="mt-1 text-sm text-[#5f675b]">New builds, extensions, and renovations.</p>
            </div>
            <div className="liquid-glass p-4">
              <ShieldCheck className="mb-3 text-[#8a5a31]" size={23} />
              <p className="font-display text-lg font-semibold text-[#243126]">Reliable Handover</p>
              <p className="mt-1 text-sm text-[#5f675b]">Clear communication and quality checks.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
