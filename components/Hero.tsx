"use client";

import { motion } from "framer-motion";
import { ArrowRight, Hammer, House, ShieldCheck } from "lucide-react";

const heroServices = ["New Builds", "Renovations", "Extensions", "Project Management"];

export default function Hero() {
  return (
    <section id="home" className="noise relative min-h-screen overflow-hidden pt-28">
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster="/images/detached-home-build-poster.jpg"
        aria-label="Detached home timber frame construction background video"
      >
        <source src="/videos/detached-home-build.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-[#f7f1e7]/92 via-[#f7f1e7]/66 to-[#f7f1e7]/22" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#f7f1e7] via-[#f7f1e7]/10 to-[#fffaf1]/30" />
      <div className="beam left-[-10rem] top-28 bg-[#8fa58d]" />
      <div className="beam bottom-10 right-[-12rem] bg-[#b87943]" />
      <motion.div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-32 hidden rounded-full border border-white/30 bg-white/30 px-5 py-3 text-sm font-semibold text-[#243126] shadow-[0_18px_45px_rgba(95,73,44,0.12)] backdrop-blur-xl lg:block"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.7, delay: 1.1 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      >
        Warm homes. Clear builds.
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute bottom-28 right-[16%] hidden rounded-full border border-white/30 bg-white/24 px-5 py-3 text-sm font-semibold text-[#243126] shadow-[0_18px_45px_rgba(95,73,44,0.12)] backdrop-blur-xl xl:block"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: [0, 12, 0] }}
        transition={{ opacity: { duration: 0.7, delay: 1.3 }, y: { duration: 5.8, repeat: Infinity, ease: "easeInOut" } }}
      >
        Built around New Zealand living.
      </motion.div>

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
            Residential New Builds, Renovations & <span className="text-gradient">Extensions in New Zealand</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-[#5f675b] sm:text-xl"
          >
            TTT Construction Ltd supports homeowners with reliable construction planning, clear
            communication, quality workmanship, and residential project management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72 }}
            className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-[#2f4a39]"
          >
            {heroServices.map((service) => (
              <span key={service} className="rounded-full bg-[#fffaf1]/72 px-4 py-2 shadow-[0_10px_24px_rgba(95,73,44,0.08)] backdrop-blur">
                {service}
              </span>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="liquid-glass group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-[#243126] transition hover:-translate-y-1 hover:text-[#111812]"
            >
              Get a Quote
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="liquid-glass inline-flex items-center justify-center px-8 py-4 font-semibold text-[#243126] transition hover:-translate-y-1"
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
            <motion.div whileHover={{ y: -6, scale: 1.01 }} className="liquid-glass liquid-panel p-4">
              <House className="mb-3 text-[#8a5a31]" size={23} />
              <p className="font-display text-lg font-semibold text-[#243126]">Detached Homes</p>
              <p className="mt-1 text-sm text-[#5f675b]">New builds, extensions, and renovations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6, scale: 1.01 }} className="liquid-glass liquid-panel p-4">
              <ShieldCheck className="mb-3 text-[#8a5a31]" size={23} />
              <p className="font-display text-lg font-semibold text-[#243126]">Reliable Handover</p>
              <p className="mt-1 text-sm text-[#5f675b]">Clear communication and quality checks.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.15 }}
            className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-[#4f594d]"
          >
            {["Concept advice", "Fixed-scope quoting", "Trade coordination", "Quality checks"].map((item) => (
              <span key={item} className="inline-flex items-center gap-2 rounded-full bg-[#fffaf1]/68 px-4 py-2 shadow-[0_10px_24px_rgba(95,73,44,0.08)] backdrop-blur">
                <Hammer size={15} className="text-[#8a5a31]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
