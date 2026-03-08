"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-stone-200 bg-[#fdfbf7]/95 shadow-sm backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="https://diamondcapitalafrica.com"
          className="flex items-center gap-2.5 group"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
            <span className="text-[11px] font-bold tracking-tight text-stone-900">DCA</span>
          </div>
          <div className="flex flex-col leading-none">
            <span
              className={`text-[11px] font-semibold uppercase tracking-[0.15em] transition-colors ${
                scrolled ? "text-stone-500" : "text-white/70"
              }`}
            >
              Diamond Capital Africa
            </span>
            <span
              className={`text-[10px] transition-colors ${
                scrolled ? "text-stone-400" : "text-white/50"
              }`}
            >
              Investor Advisory
            </span>
          </div>
        </a>

        <a
          href="#contact"
          className="rounded-sm bg-red-700 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-red-800"
        >
          Book a call
        </a>
      </div>
    </motion.nav>
  );
}
