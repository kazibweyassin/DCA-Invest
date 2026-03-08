"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

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
        <a href="https://diamondcapitalafrica.com" className="flex items-center">
          <Image
            src="/Logo.png"
            alt="Diamond Capital Africa"
            width={120}
            height={40}
            className={`h-10 w-auto object-contain transition-all duration-300 ${
              scrolled ? "brightness-100" : "brightness-0 invert"
            }`}
            priority
          />
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
