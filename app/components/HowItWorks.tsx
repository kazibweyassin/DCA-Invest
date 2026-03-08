"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Discovery call",
    duration: "45 min",
    body: "We understand your mandate, your timeline, and what you already know. You understand what we actually do and whether it fits. No pitch deck. Just a real conversation.",
  },
  {
    step: "02",
    title: "Engagement proposal",
    duration: "Within 5 days",
    body: "We scope the work based on what you need, set clear terms, and agree on deliverables. Retainer or project-based, depending on what makes sense.",
  },
  {
    step: "03",
    title: "Active advisory",
    duration: "Ongoing",
    body: "Direct access to our network, our operational knowledge, and our ground-level intelligence. Introductions when you are ready. Honest answers when you have hard questions.",
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="process" className="bg-[#fdfbf7] px-6 py-24">
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
              Process
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-stone-900"
            >
              Three steps
              <br />
              from interest
              <br />
              to engagement.
            </motion.h2>
          </div>

          <div className="relative">
            <div className="absolute left-6 top-6 bottom-6 w-px bg-stone-200" />
            <div className="flex flex-col gap-0">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative flex gap-8 pb-12 last:pb-0"
                >
                  <div className="relative z-10 flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-amber-300 bg-[#fdfbf7]">
                      <span className="font-[family-name:var(--font-playfair)] text-sm font-bold text-amber-600">
                        {s.step}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="mb-2 flex items-center gap-3">
                      <h3 className="font-[family-name:var(--font-playfair)] text-xl font-semibold text-stone-900">
                        {s.title}
                      </h3>
                      <span className="rounded-full bg-stone-100 px-2.5 py-0.5 text-xs text-stone-500">
                        {s.duration}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-stone-600">{s.body}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
