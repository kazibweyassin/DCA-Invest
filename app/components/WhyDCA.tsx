"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const proofPoints = [
  {
    title: "We hold the licenses",
    body: "Active UCDA certification and Bank of Uganda compliance — not pending, not being applied for. We operate under them every week.",
  },
  {
    title: "We know the suppliers",
    body: "Direct relationships with artisanal miners, licensed cooperatives, and verified intermediaries built through years of weekly purchasing in Kampala.",
  },
  {
    title: "We know the regulators",
    body: "Not from reading legislation. From submitting export documentation, handling inspections, and managing compliance in real time.",
  },
  {
    title: "We are actually here",
    body: "Kampala-based. Not London, not Geneva, not Dubai. When you need ground truth about Uganda's mineral market, you call someone who is in it.",
  },
];

export default function WhyDCA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="why-dca" className="bg-[#fdfbf7]">
      <div className="mx-auto grid max-w-none lg:grid-cols-2">
        {/* Photo — left column */}
        <div className="relative min-h-[480px] overflow-hidden lg:min-h-full">
          <Image
            src="https://images.unsplash.com/photo-1516912481808-3406841bd33c?auto=format&fit=crop&w=900&q=80"
            alt="Mining operations in Uganda"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-stone-900/30" />
          {/* Pull-quote overlay */}
          <div className="absolute bottom-8 left-8 right-8">
            <p className="font-[family-name:var(--font-playfair)] text-2xl font-semibold italic leading-snug text-white">
              &ldquo;We know the mines, the labs, the regulators. We will show
              you how it actually works.&rdquo;
            </p>
          </div>
        </div>

        {/* Text — right column */}
        <div className="px-10 py-20 lg:px-16 lg:py-24">
          <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.4 }}
            className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700"
          >
            Why DCA
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="mb-6 font-[family-name:var(--font-playfair)] text-4xl font-bold leading-tight text-stone-900"
          >
            Not consultants from London.
            <br />
            <span className="text-amber-600">Active traders in Kampala.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mb-10 text-base leading-relaxed text-stone-600"
          >
            Generalist FDI consultants will give you a sector overview across
            ten countries and twelve industries. Diamond Capital Africa will
            give you the specific mine, the actual exporter, the real price,
            and the compliance step that most investors miss. Gold is where our
            operational depth is deepest — and the regulatory relationships we
            have built extend across Uganda&apos;s broader mineral sector too.
          </motion.p>

          {/* Proof list — no emojis */}
          <div className="space-y-6">
            {proofPoints.map((point, i) => (
              <motion.div
                key={point.title}
                initial={{ opacity: 0, x: 16 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.45, delay: 0.3 + i * 0.08 }}
                className="flex gap-4"
              >
                <div className="mt-1 flex-shrink-0">
                  <div className="h-5 w-5 rounded-full border-2 border-amber-400 bg-amber-50" />
                </div>
                <div>
                  <p className="mb-0.5 font-semibold text-stone-900">{point.title}</p>
                  <p className="text-sm leading-relaxed text-stone-500">{point.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
