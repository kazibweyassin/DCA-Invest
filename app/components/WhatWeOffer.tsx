"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const services = [
  {
    number: "01",
    title: "Market Entry Assessment",
    body: "We walk you through the actual supply chain — who the real players are, where the value sits, and what the honest risk picture looks like. Not a desk research report. A guided introduction from people who operate inside it.",
    tag: "Gold · Minerals",
  },
  {
    number: "02",
    title: "Regulatory & Compliance Navigation",
    body: "UCDA licensing, Bank of Uganda compliance, export permits. We know how these work in practice, not just on paper. We will map your specific situation and tell you exactly what you need and what will take time.",
    tag: "Gold · Minerals",
  },
  {
    number: "03",
    title: "Supplier & Mine Introductions",
    body: "Direct introductions to vetted artisanal miners, licensed cooperatives, and intermediaries we purchase from week to week. These are warm relationships, not LinkedIn searches.",
    tag: "Gold",
  },
  {
    number: "04",
    title: "Ongoing Intelligence Retainer",
    body: "Monthly briefings on market conditions, price movements, regulatory changes, and operational signals from the ground. Useful for investment committees that need real data without needing to be in Kampala.",
    tag: "Gold · Minerals",
  },
  {
    number: "05",
    title: "Broader Mineral Sector Due Diligence",
    body: "For investors looking beyond gold — cobalt, nickel, iron ore, phosphates — we offer early-stage due diligence grounded in what we actually know: DGSM licensing, Ministry of Energy relationships, and on-ground introductions. We are clear about where our knowledge ends. This is honest access, not a desk report.",
    tag: "Minerals",
  },
];

export default function WhatWeOffer() {
  const [open, setOpen] = useState<string | null>("01");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="border-t border-stone-100 bg-stone-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_2fr]">
          <div>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Services
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-stone-900"
            >
              Specific help.
              <br />
              Not vague
              <br />
              reports.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-5 text-sm leading-relaxed text-stone-500"
            >
              Gold is our core. For broader minerals, we scope engagements
              honestly — we tell you if something is outside what we can verify
              ourselves.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="divide-y divide-stone-200"
          >
            {services.map((s) => (
              <div key={s.number}>
                <button
                  onClick={() => setOpen(open === s.number ? null : s.number)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <div className="flex items-center gap-5">
                    <span className="font-[family-name:var(--font-playfair)] text-sm font-bold text-amber-400">
                      {s.number}
                    </span>
                    <span className="font-[family-name:var(--font-playfair)] text-lg font-semibold text-stone-900">
                      {s.title}
                    </span>
                  </div>
                  <div className="flex flex-shrink-0 items-center gap-3">
                    <span className="hidden rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 sm:inline">
                      {s.tag}
                    </span>
                    <svg
                      className={
                        open === s.number
                          ? "h-4 w-4 text-stone-400 rotate-45 transition-transform duration-300"
                          : "h-4 w-4 text-stone-400 transition-transform duration-300"
                      }
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === s.number && (
                    <motion.div
                      key="body"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pl-9 text-sm leading-relaxed text-stone-600">
                        {s.body}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
