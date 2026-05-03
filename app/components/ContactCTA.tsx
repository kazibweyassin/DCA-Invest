"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import MultiStepForm from "./MultiStepForm";

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" className="bg-[#fdfbf7] px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Get in touch
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-5 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-stone-900"
            >
              Ready to have a real conversation?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-10 text-base leading-relaxed text-stone-600"
            >
              Book a 45-minute discovery call. No pitch deck, no sales process.
              Tell us what you are trying to understand about Uganda&apos;s mineral
              sector and we will tell you honestly whether we can help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="space-y-4"
            >
              {[
                { label: "Response time", value: "Within one business day" },
                { label: "Call length", value: "45 minutes" },
                { label: "Format", value: "Video call or phone" },
                { label: "Location", value: "Kampala (EAT, UTC+3)" },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between border-b border-stone-100 pb-4">
                  <span className="text-sm text-stone-500">{item.label}</span>
                  <span className="text-sm font-medium text-stone-800">{item.value}</span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="rounded-lg border border-stone-200 bg-white p-8 shadow-sm"
          >
            <MultiStepForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}