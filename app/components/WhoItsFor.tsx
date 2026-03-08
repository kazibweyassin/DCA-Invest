"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const profiles = [
  {
    title: "Foreign investors",
    body: "You have capital and a mandate to allocate to frontier markets. You know Uganda is producing gold but you have no operational foothold. You need someone who can walk you through it honestly.",
  },
  {
    title: "Family offices & private funds",
    body: "You are building emerging market exposure and want real assets, not paper instruments. You need a counterpart who understands the local market from inside it.",
  },
  {
    title: "Mining companies",
    body: "You are assessing East Africa for sourcing or operational entry. You need ground truth about the supply chain, the regulatory environment, and who the credible local players are.",
  },
  {
    title: "Development finance institutions",
    body: "You need operator-level intelligence to underwrite a thesis or assess a portfolio company. You do not need another sector overview. You need someone who can verify what you are being told.",
  },
];

export default function WhoItsFor() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="who" className="bg-stone-900 text-white">
      <div className="mx-auto grid max-w-none lg:grid-cols-2">
        <div className="px-10 py-20 lg:px-16 lg:py-24">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-amber-400"
          >
            Who we work with
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-4 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight"
          >
            This is not for everyone.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-12 text-base leading-relaxed text-stone-400"
          >
            We work with a small number of principals at a time. We are not a
            consulting firm scaling headcount. We are operators offering access.
          </motion.p>
          <div className="space-y-6">
            {profiles.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="border-l-2 border-amber-400 pl-5"
              >
                <p className="mb-1 font-semibold text-white">{p.title}</p>
                <p className="text-sm leading-relaxed text-stone-400">{p.body}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="mt-10 rounded border border-stone-700 bg-stone-800/60 p-5"
          >
            <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-stone-500">
              Not for:
            </p>
            <ul className="space-y-1.5 text-sm text-stone-500">
              {[
                "Anyone looking for a one-page sector overview",
                "Anyone who wants a conference introduction and nothing more",
                "Companies needing generalist FDI consulting across multiple industries",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="mt-0.5 flex-shrink-0 text-stone-600">&#215;</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
        <div className="relative hidden min-h-[600px] overflow-hidden lg:block">
          <Image
            src="https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?auto=format&fit=crop&w=900&q=80"
            alt="Investment meeting"
            fill
            className="object-cover"
            sizes="50vw"
          />
          <div className="absolute inset-0 bg-stone-950/40" />
        </div>
      </div>
    </section>
  );
}
