"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import type { ReactNode } from "react";

export default function SiteMotion({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
    restDelta: 0.001
  });

  return (
    <>
      <motion.div
        className="fixed left-0 right-0 top-0 z-[80] h-[3px] origin-left bg-gradient-to-r from-[#21a8ff] via-white to-[#f6b655] shadow-[0_0_28px_rgba(33,168,255,0.8)]"
        style={{ scaleX }}
      />
      <motion.div
        aria-hidden="true"
        initial={{ y: 0 }}
        animate={{ y: "-110%" }}
        transition={{ duration: 1.15, ease: [0.76, 0, 0.24, 1], delay: 0.18 }}
        className="pointer-events-none fixed inset-0 z-[70] overflow-hidden bg-[#05070a]"
      >
        <motion.div
          className="absolute left-0 top-1/2 h-px w-full bg-[#21a8ff] shadow-[0_0_60px_18px_rgba(33,168,255,0.42)]"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(115deg,transparent_0%,rgba(33,168,255,0.16)_42%,rgba(246,182,85,0.18)_52%,transparent_66%)]" />
        <div className="absolute inset-0 grid-bg opacity-60" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)" }}
        animate={{ opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 0.85, delay: 0.5 }}
      >
        {children}
      </motion.div>
    </>
  );
}
