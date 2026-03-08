"use client";

import { motion, AnimatePresence, useInView } from "framer-motion";
import { useRef, useState } from "react";

const faqs = [
  {
    q: "How can a foreign investor enter Uganda's gold sector?",
    a: "The most reliable path is through an established, licensed operator already active in the market. Uganda's gold supply chain runs through UCDA-certified exporters and Bank of Uganda-registered entities. Diamond Capital Africa can introduce you to vetted suppliers, walk you through the regulatory requirements, and help you structure an investment that is compliant from day one.",
  },
  {
    q: "What licences are required to invest in Uganda's mining sector?",
    a: "Depending on your investment structure, you may need a UCDA export licence, a Bank of Uganda compliance registration, and potentially a licence from the Directorate of Geological Survey and Mines (DGSM) under the Ministry of Energy. The specific requirements vary by activity — trading, equity stake, or joint venture. We map this for you based on your exact situation.",
  },
  {
    q: "Is Uganda's mineral sector safe for foreign investors?",
    a: "Uganda has a functioning regulatory framework, active export infrastructure, and a growing track record with institutional investors. The risks are real but manageable — supplier verification, compliance gaps, and currency exposure are the main ones. DCA's value is in navigating these risks using operational knowledge, not desk research.",
  },
  {
    q: "What does Diamond Capital Africa's advisory engagement include?",
    a: "Every engagement starts with a discovery call to understand your investment thesis. From there we offer market entry assessments, regulatory mapping, warm introductions to vetted suppliers, and ongoing intelligence retainers. Engagements are structured as a one-time advisory or monthly retainer depending on what you need.",
  },
  {
    q: "Does DCA work with investors outside East Africa?",
    a: "Yes. The majority of our advisory clients are foreign investors — family offices, mining funds, and institutional investors based in Europe, the Middle East, and North America. We operate in Kampala and provide ground-truth access to investors who cannot be on the ground themselves.",
  },
  {
    q: "What is the difference between this site and diamondcapitalafrica.com?",
    a: "The main Diamond Capital Africa site (diamondcapitalafrica.com) is for institutional buyers who want to purchase physical verified gold. This site is for investors who want to enter Uganda's gold or mineral sector as equity partners, fund managers, or strategic investors. Different audience, different product.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="faq"
      className="border-t border-stone-100 bg-[#fdfbf7] px-6 py-24"
      aria-labelledby="faq-heading"
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-4 lg:grid-cols-[1fr_2fr]">
          <div>
            <motion.p
              ref={ref}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4 }}
              className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
            >
              Common questions
            </motion.p>
            <motion.h2
              id="faq-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-stone-900"
            >
              Frequently asked questions
            </motion.h2>
          </div>
        </div>

        <div className="divide-y divide-stone-200">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.05 * i }}
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-start justify-between gap-6 py-6 text-left"
                aria-expanded={open === i}
              >
                <h3 className="font-[family-name:var(--font-playfair)] text-lg font-semibold leading-snug text-stone-900">
                  {faq.q}
                </h3>
                <span className="mt-1 flex-shrink-0 text-amber-500">
                  {open === i ? (
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                    </svg>
                  )}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base leading-relaxed text-stone-600">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
