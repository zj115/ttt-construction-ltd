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
        scrolled ? "border-b border-[#6e5a42]/15 bg-[#fffaf1]/82 shadow-2xl shadow-[#6e4d2c]/10 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="section-shell flex h-20 items-center justify-between">
        <a href="#home" className="group flex items-center gap-3" aria-label="TTT Construction Ltd home">
          <span className="grid h-11 w-11 place-items-center border border-[#b87943]/35 bg-[#fffaf1]/80 font-display text-sm font-bold text-[#2f4a39] shadow-[0_12px_36px_rgba(184,121,67,0.16)]">
            TTT
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-[#243126] sm:text-base">
            Construction Ltd
          </span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-[#5f675b] transition hover:text-[#2f4a39]"
            >
              {link}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="liquid-glass hidden px-5 py-3 text-sm font-semibold text-[#243126] transition hover:-translate-y-0.5 lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="grid h-11 w-11 place-items-center border border-[#6e5a42]/20 bg-[#fffaf1]/80 text-[#243126] lg:hidden"
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
            className="section-shell mb-4 border border-[#6e5a42]/15 bg-[#fffaf1]/96 p-4 shadow-2xl shadow-[#6e4d2c]/14 backdrop-blur-xl lg:hidden"
          >
            <div className="grid gap-2">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="px-4 py-3 text-sm font-medium text-[#4f594d] transition hover:bg-[#eadcc8] hover:text-[#243126]"
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
