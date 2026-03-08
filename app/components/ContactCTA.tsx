"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function ContactCTA() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [status, setStatus] = useState("idle");
  const [form, setForm] = useState({ name: "", email: "", organisation: "", message: "" });

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  }

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
            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-lg font-semibold text-stone-900">Message received.</p>
                <p className="mt-2 text-sm text-stone-500">We will be in touch within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="name">Full name</label>
                  <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
                    placeholder="Your name"
                    className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="email">Email address</label>
                  <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
                    placeholder="you@fund.com"
                    className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="organisation">Organisation</label>
                  <input id="organisation" name="organisation" type="text" value={form.organisation} onChange={handleChange}
                    placeholder="Fund name, family office, company"
                    className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
                <div className="flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="message">What are you trying to understand?</label>
                  <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleChange}
                    placeholder="Your investment mandate, what you already know, what you are trying to figure out."
                    className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
                </div>
                <div className="sm:col-span-2">
                  <button type="submit" disabled={status === "sending"}
                    className="w-full rounded-sm bg-red-700 py-3.5 text-sm font-semibold text-white transition hover:bg-red-800 disabled:opacity-60 sm:w-auto sm:px-8">
                    {status === "sending" ? "Sending…" : "Send message"}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
