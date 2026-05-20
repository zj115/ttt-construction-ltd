"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = ["Home", "About", "Services", "Projects", "Process", "Contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 18);
  });

  useEffect(() => {
    const sections = links
      .map((link) => document.getElementById(link.toLowerCase()))
      .filter((section): section is HTMLElement => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) {
          setActive(visible.target.id.charAt(0).toUpperCase() + visible.target.id.slice(1));
        }
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: [0.1, 0.3, 0.6] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-3 z-50 transition-all duration-300"
    >
      <nav
        className={`section-shell flex h-16 items-center justify-between rounded-full border px-3 shadow-2xl transition-all duration-300 sm:h-[4.5rem] sm:px-4 ${
          scrolled
            ? "border-white/20 bg-[#101c26]/68 shadow-black/30 backdrop-blur-xl"
            : "border-white/14 bg-[#101c26]/32 shadow-black/10 backdrop-blur-lg"
        }`}
      >
        <a href="#home" className="group flex items-center gap-3" aria-label="TTT Construction Ltd home">
          <span className="logo-mark border border-white/28 bg-gradient-to-br from-white/24 to-white/7 font-display font-bold text-white shadow-lg backdrop-blur-xl">
            <span>TTT</span>
          </span>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-white sm:text-base">
            Construction Ltd
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="group relative text-sm font-medium text-white/60 transition hover:text-white"
            >
              {link}
              <span
                className={`absolute -bottom-3 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#8eebff] shadow-[0_0_16px_rgba(142,235,255,0.85)] transition ${
                  active === link ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              />
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hero-btn hidden px-5 py-3 text-sm font-semibold text-white transition lg:inline-flex"
        >
          Get a Quote
        </a>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((value) => !value)}
          className="hero-btn grid h-11 w-11 place-items-center text-white lg:hidden"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open ? (
          <>
            <motion.button
              aria-label="Close menu overlay"
              className="fixed inset-0 -z-10 bg-[#071017]/45 backdrop-blur-md lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -12, scale: 0.96 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel section-shell mt-3 p-4 lg:hidden"
            >
              <div className="grid gap-2">
                {links.map((link, index) => (
                  <motion.a
                    key={link}
                    href={`#${link.toLowerCase()}`}
                    onClick={() => setOpen(false)}
                    className="rounded-2xl px-4 py-4 text-sm font-medium text-white/74 transition hover:bg-white/10 hover:text-white"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.035 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {link}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
