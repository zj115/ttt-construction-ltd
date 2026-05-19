"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Building2, House, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="noise relative min-h-screen overflow-hidden pt-28">
      <div className="beam left-[-10rem] top-28 bg-[#21a8ff]" />
      <div className="beam bottom-10 right-[-12rem] bg-[#f6b655]" />
      <motion.div
        aria-hidden="true"
        className="grid-bg absolute inset-0"
        animate={{ backgroundPosition: ["0px 0px", "54px 54px"] }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
      />

      <div className="section-shell relative grid min-h-[calc(100vh-7rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex items-center gap-3 border border-white/12 bg-white/[0.05] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#67c7ff]"
          >
            <span className="h-2 w-2 bg-[#f6b655] shadow-[0_0_18px_#f6b655]" />
            New Zealand Construction
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 34 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
          >
            Building the Future with <span className="text-gradient">Precision and Trust</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.18 }}
            className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            TTT Construction Ltd delivers reliable construction, renovation, and project
            management services across New Zealand.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.28 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-3 bg-[#21a8ff] px-7 py-4 font-semibold text-[#03101a] shadow-[0_0_42px_rgba(33,168,255,0.35)] transition hover:bg-[#7ed4ff]"
            >
              Get a Quote
              <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center border border-white/16 bg-white/[0.06] px-7 py-4 font-semibold text-white transition hover:border-[#f6b655]/70 hover:bg-[#f6b655]/10"
            >
              View Services
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, rotateX: 8 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0 }}
          transition={{ duration: 1, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-xl"
        >
          <div className="glass relative aspect-[4/5] overflow-hidden p-4 sm:p-6">
            <Image
              src="/images/modern-detached-home.jpg"
              alt="Modern detached home exterior built for residential clients"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#05070a] via-[#05070a]/32 to-[#05070a]/10" />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(33,168,255,0.22)_0,transparent_32%,transparent_66%,rgba(246,182,85,0.22)_100%)] mix-blend-screen" />
            <div className="absolute inset-6 border border-white/16" />
            <div className="absolute left-12 right-12 top-20 h-px bg-[#21a8ff]/80 shadow-[0_0_28px_#21a8ff]" />
            <div className="absolute bottom-24 left-10 right-10 h-px bg-[#f6b655]/75 shadow-[0_0_28px_#f6b655]" />
            <div className="absolute inset-x-14 bottom-24 top-24 border-x border-white/14" />
            <motion.div
              className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#21a8ff]/24 to-transparent mix-blend-screen"
              animate={{ y: [0, 280, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
              className="absolute -left-24 top-0 h-full w-28 rotate-12 bg-white/18 blur-2xl"
              animate={{ x: [0, 820] }}
              transition={{ duration: 5.8, repeat: Infinity, repeatDelay: 2.2, ease: "easeInOut" }}
            />
            <div className="absolute bottom-6 left-6 right-6 grid grid-cols-2 gap-3">
              <div className="border border-white/12 bg-black/20 p-4">
                <House className="mb-3 text-[#67c7ff]" size={24} />
                <p className="font-display text-xl font-semibold">Detached Homes</p>
                <p className="mt-1 text-sm text-slate-300">New builds & extensions</p>
              </div>
              <div className="border border-white/12 bg-black/20 p-4">
                <ShieldCheck className="mb-3 text-[#f6b655]" size={24} />
                <p className="font-display text-xl font-semibold">Deliver</p>
                <p className="mt-1 text-sm text-slate-400">Quality checked handover</p>
              </div>
            </div>
            <div className="absolute right-6 top-6 flex items-center gap-2 border border-white/12 bg-black/30 px-3 py-2 text-xs font-bold uppercase tracking-[0.2em] text-white backdrop-blur">
              <Building2 size={16} className="text-[#67c7ff]" />
              Home Build
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
