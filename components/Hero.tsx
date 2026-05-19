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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071017]/90 via-[#071017]/66 to-[#071017]/26" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071017] via-[#071017]/18 to-[#0f1b24]/28" />
      <div className="beam left-[-10rem] top-28 bg-[#70d7ff]" />
      <div className="beam bottom-10 right-[-12rem] bg-[#f0b76c]" />
      <motion.div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[8%] top-32 hidden rounded-full border border-white/16 bg-[#08131d]/44 px-5 py-3 text-sm font-semibold text-white/84 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-2xl lg:block"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: [0, -10, 0] }}
        transition={{ opacity: { duration: 0.7, delay: 1.1 }, y: { duration: 5, repeat: Infinity, ease: "easeInOut" } }}
      >
        Warm homes. Clear builds.
      </motion.div>
      <motion.div
        aria-hidden="true"
        className="absolute bottom-28 right-[16%] hidden rounded-full border border-white/16 bg-[#08131d]/42 px-5 py-3 text-sm font-semibold text-white/84 shadow-[0_18px_45px_rgba(0,0,0,0.22)] backdrop-blur-2xl xl:block"
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
            className="glass-panel mb-5 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#f0b76c]"
          >
            <span className="h-2 w-2 rounded-full bg-[#f0b76c] shadow-[0_0_18px_rgba(240,183,108,0.65)]" />
            New Zealand Construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="font-serif-display text-5xl font-normal leading-[1.02] text-[#f7fbff] sm:text-6xl lg:text-7xl"
          >
            Residential New Builds, Renovations & <span className="text-gradient">Extensions in New Zealand</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl"
          >
            TTT Construction Ltd supports homeowners with reliable construction planning, clear
            communication, quality workmanship, and residential project management.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.72 }}
            className="mt-5 flex flex-wrap gap-3 text-sm font-semibold text-white/82"
          >
            {heroServices.map((service) => (
              <span key={service} className="glass-panel rounded-full px-4 py-2">
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
              className="liquid-glass group inline-flex items-center justify-center gap-3 px-8 py-4 font-semibold text-white transition hover:-translate-y-1"
            >
              Get a Quote
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="liquid-glass inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition hover:-translate-y-1"
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
              <House className="mb-3 text-[#f0b76c]" size={23} />
              <p className="font-display text-lg font-semibold text-white">Detached Homes</p>
              <p className="mt-1 text-sm text-white/66">New builds, extensions, and renovations.</p>
            </motion.div>
            <motion.div whileHover={{ y: -6, scale: 1.01 }} className="liquid-glass liquid-panel p-4">
              <ShieldCheck className="mb-3 text-[#f0b76c]" size={23} />
              <p className="font-display text-lg font-semibold text-white">Reliable Handover</p>
              <p className="mt-1 text-sm text-white/66">Clear communication and quality checks.</p>
            </motion.div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 1.15 }}
            className="mt-5 flex flex-wrap gap-3 text-sm font-medium text-white/72"
          >
            {["Concept advice", "Fixed-scope quoting", "Trade coordination", "Quality checks"].map((item) => (
              <span key={item} className="glass-panel inline-flex items-center gap-2 rounded-full px-4 py-2">
                <Hammer size={15} className="text-[#f0b76c]" />
                {item}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
