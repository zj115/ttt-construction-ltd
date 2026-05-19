"use client";

import { AnimatePresence, motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";
import { useEffect, useState } from "react";

const timing = [0.22, 1, 0.36, 1] as const;

export default function GlobeIntro() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(false), 6200);
    return () => window.clearTimeout(timeout);
  }, []);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          className="fixed inset-0 z-[90] overflow-hidden bg-[#08111c]"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(14px)" }}
          transition={{ duration: 1, ease: timing }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_38%,rgba(197,222,255,0.22),transparent_34%),linear-gradient(180deg,#07111e_0%,#0c1823_50%,#101a1f_100%)]" />
          <div className="absolute inset-0 opacity-[0.18] [background-image:linear-gradient(rgba(255,255,255,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.16)_1px,transparent_1px)] [background-size:72px_72px]" />

          <motion.div
            className="absolute left-1/2 top-[39%] aspect-square w-[min(72vw,460px)] -translate-x-1/2 -translate-y-1/2 sm:top-[43%]"
            initial={{ scale: 0.58, y: 30, rotate: -8, opacity: 0 }}
            animate={{
              scale: [0.58, 0.92, 1.18, 1.48],
              y: [30, 0, -16, -26],
              rotate: [-8, -2, 2, 4],
              opacity: [0, 1, 1, 1]
            }}
            transition={{ duration: 5.25, ease: timing, times: [0, 0.24, 0.66, 1] }}
          >
            <motion.div
              className="absolute inset-0 rounded-full border border-white/25 shadow-[0_0_70px_rgba(151,196,255,0.38),inset_34px_-24px_70px_rgba(3,8,15,0.72),inset_-22px_18px_44px_rgba(255,255,255,0.18)]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 34% 26%, rgba(255,255,255,0.38), transparent 15%), radial-gradient(circle at 65% 70%, rgba(5,15,22,0.68), transparent 46%), url('/textures/earth_atmos_2048.jpg')",
                backgroundRepeat: "no-repeat"
              }}
              animate={{
                backgroundPosition: [
                  "42% 48%, 50% 50%, 36% 50%",
                  "42% 48%, 50% 50%, 78% 70%",
                  "42% 48%, 50% 50%, 120% 101%"
                ],
                backgroundSize: [
                  "100% 100%, 100% 100%, 190% 98%",
                  "100% 100%, 100% 100%, 260% 134%",
                  "100% 100%, 100% 100%, 380% 195%"
                ]
              }}
              transition={{ duration: 5.25, ease: timing }}
            />

            <motion.div
              className="absolute inset-[-7%] rounded-full border border-[#b7d9ff]/25"
              animate={{ scale: [0.92, 1.08, 1.18], opacity: [0, 0.55, 0] }}
              transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
            />
            <motion.div
              className="absolute left-[43%] top-[50%] flex -translate-x-1/2 -translate-y-1/2 items-center justify-center"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: [0, 0, 1, 1], scale: [0.3, 0.3, 1, 1.08] }}
              transition={{ duration: 5.25, ease: timing, times: [0, 0.56, 0.72, 1] }}
            >
              <span className="absolute h-20 w-20 rounded-full border border-[#ffd5a4]/60" />
              <span className="absolute h-11 w-11 rounded-full bg-[#ffb267]/20 blur-md" />
              <span className="relative h-4 w-4 rounded-full border border-white/80 bg-[#ffbf7b] shadow-[0_0_22px_rgba(255,191,123,0.95)]" />
            </motion.div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-[68%] w-[min(560px,calc(100%-2rem))] -translate-x-1/2 text-center sm:top-[70%]"
            initial={{ opacity: 0, y: 28, scale: 0.96 }}
            animate={{ opacity: [0, 0, 1, 1], y: [28, 28, 0, 0], scale: [0.96, 0.96, 1, 1] }}
            transition={{ duration: 5.35, ease: timing, times: [0, 0.52, 0.72, 1] }}
          >
            <div className="liquid-glass liquid-panel px-6 py-5 text-[#f8fbff] shadow-[0_24px_80px_rgba(0,0,0,0.28)]">
              <div className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#ffd7a8]">
                <MapPin size={16} />
                New Zealand / Waikato
              </div>
              <p className="font-serif-display text-4xl leading-none sm:text-5xl">Arriving in Waikato</p>
              <p className="mt-3 text-sm leading-6 text-white/76">
                Residential new builds, renovations, and project support shaped around local standards.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="absolute left-1/2 top-8 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/16 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-white/78 backdrop-blur-xl"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: [0, 1, 1, 0], y: [-12, 0, 0, -8] }}
            transition={{ duration: 4.9, ease: timing, times: [0, 0.18, 0.7, 1] }}
          >
            <Navigation size={14} />
            Global view to local delivery
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
