"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      <div className="absolute inset-0 bg-gradient-to-r from-[#071018]/88 via-[#101c26]/62 to-[#071018]/24" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071018] via-[#071018]/16 to-[#101c26]/26" />
      <div className="beam left-[-10rem] top-28 bg-[#8eebff]" />
      <div className="beam bottom-10 right-[-12rem] bg-[#d8b57a]" />
      <motion.div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-shell relative flex min-h-[calc(100vh-7rem)] items-center py-16">
        <div className="hero-content mx-auto max-w-[760px] px-6 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="glass-panel mb-5 inline-flex items-center gap-3 rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#d8b57a]"
          >
            <span className="h-2 w-2 rounded-full bg-[#d8b57a] shadow-[0_0_18px_rgba(216,181,122,0.65)]" />
            New Zealand Construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="hero-title font-serif-display text-5xl font-normal leading-[1.02] text-[#f8fafc] sm:text-6xl lg:text-7xl"
          >
            Residential New Builds, Renovations & <span className="text-gradient">Extensions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="hero-subtitle mx-auto mt-7 max-w-[620px] text-lg leading-8 text-white/72 sm:text-xl"
          >
            Reliable residential construction, renovation, and project management across New Zealand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.8 }}
            className="hero-actions mt-7 flex flex-wrap items-center justify-center gap-4"
          >
            <a
              href="#contact"
              className="hero-btn hero-btn-primary group inline-flex items-center justify-center gap-3 px-7 py-4 font-semibold text-white transition"
            >
              Get a Quote
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="hero-btn inline-flex items-center justify-center px-7 py-4 font-semibold text-white transition"
            >
              View Services
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
