"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = ["Home", "About", "Services", "Projects", "Process", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "border-b border-white/10 bg-[#05070a]/72 shadow-2xl shadow-black/30 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="TTT Construction Ltd home">
          <span className="grid h-11 w-11 place-items-center border border-[#21a8ff]/40 bg-white/[0.06] font-display text-sm font-bold text-white shadow-[0_0_36px_rgba(33,168,255,0.25)]">
            TTT
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">
            Construction Ltd
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-slate-300 transition hover:text-white"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-[#21a8ff]/50 bg-[#21a8ff]/10 px-5 py-3 text-sm font-semibold text-white shadow-[0_0_30px_rgba(33,168,255,0.12)] transition hover:border-[#f6b655]/60 hover:bg-[#f6b655]/10 lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-white/15 bg-white/[0.06] text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="section-shell mb-4 border border-white/10 bg-[#08101a]/95 p-4 shadow-2xl shadow-black/40 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/[0.06] hover:text-white"
                >
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
