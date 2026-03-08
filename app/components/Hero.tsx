"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-end overflow-hidden">
      {/* Full-bleed photo background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://www.goldmarket.fr/wp-content/uploads/2025/08/thumbnail-148.jpeg.webp')",
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-stone-950/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-transparent to-stone-950/20" />

      {/* Content */}
      <div className="relative mx-auto w-full max-w-6xl px-6 pb-20 pt-40">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
        >
          Investor Advisory — Kampala, Uganda
        </motion.p>

        {/* Headline — proof-first, specific */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2 }}
          className="mb-6 font-[family-name:var(--font-playfair)] text-5xl font-bold leading-[1.1] tracking-tight text-white sm:text-6xl lg:text-7xl"
        >
          Uganda&apos;s mineral sector
          <br />
          is open to serious investors.
          <br />
          <span className="text-amber-400">We are already inside.</span>
        </motion.h1>

        {/* Short subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38 }}
          className="mb-10 max-w-xl text-lg leading-relaxed text-stone-300"
        >
          DCA buys from licensed gold miners in Kampala every week. Our advisory
          gives you access to the operators, regulators, and relationships that
          no research report can replicate.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-sm bg-red-700 px-8 py-4 text-base font-semibold text-white transition-all hover:bg-red-800 hover:shadow-xl"
          >
            Book a discovery call
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="relative border-t border-white/10 bg-amber-400/10 backdrop-blur-sm"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-3 divide-x divide-white/10 px-6">
          {[
            { label: "Weekly gold purchasing", sub: "Active in Kampala markets" },
            { label: "UCDA certified", sub: "Bank of Uganda compliant" },
            { label: "Full export chain", sub: "Verified international shipments" },
          ].map((stat) => (
            <div key={stat.label} className="px-8 py-5 first:pl-0 last:pr-0">
              <p className="text-sm font-semibold text-amber-300">{stat.label}</p>
              <p className="text-xs text-white/50">{stat.sub}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
