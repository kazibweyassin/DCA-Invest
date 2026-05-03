"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  organisation: string;
  message: string;
};

export default function MultiStepForm() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState<FormState>({ name: "", email: "", organisation: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validateStep(current: number) {
    const err: Record<string, string> = {};
    if (current === 0) {
      if (!form.name.trim()) err.name = "Name is required.";
      if (!form.email.trim()) err.email = "Email is required.";
      else if (!/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Enter a valid email.";
    }
    if (current === 1) {
      if (!form.message.trim()) err.message = "Please tell us what you're trying to understand.";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function handleSubmit() {
    if (!validateStep(step)) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("sent");
      } else {
        setStatus("idle");
        alert("Something went wrong. Please email us directly at info@diamondcapitalafrica.com");
      }
    } catch {
      setStatus("idle");
      alert("Something went wrong. Please email us directly at info@diamondcapitalafrica.com");
    }
  }

  if (status === "sent") {
    return (
      <div className="flex flex-col items-center justify-center py-16 text-center">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
          <svg className="h-6 w-6 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <p className="text-lg font-semibold text-stone-900">Message received.</p>
        <p className="mt-2 text-sm text-stone-500">We will be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-5">
      <div className="flex items-center justify-between">
        <div className="text-sm font-medium text-stone-800">Step {step + 1} of 3</div>
        <div className="text-xs text-stone-500">{step === 0 ? "Contact" : step === 1 ? "Message" : "Review"}</div>
      </div>

      {step === 0 && (
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="name">Full name</label>
            <input id="name" name="name" type="text" required value={form.name} onChange={handleChange}
              placeholder="Your name"
              className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="email">Email address</label>
            <input id="email" name="email" type="email" required value={form.email} onChange={handleChange}
              placeholder="you@fund.com"
              className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-5">
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="organisation">Organisation</label>
            <input id="organisation" name="organisation" type="text" value={form.organisation} onChange={handleChange}
              placeholder="Fund name, family office, company"
              className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-500" htmlFor="message">What are you trying to understand?</label>
            <textarea id="message" name="message" rows={5} value={form.message} onChange={handleChange}
              placeholder="Your investment mandate, what you already know, what you are trying to figure out."
              className="rounded border border-stone-200 bg-stone-50 px-4 py-3 text-sm text-stone-900 placeholder-stone-400 outline-none transition focus:border-amber-400 focus:ring-1 focus:ring-amber-400" />
            {errors.message && <p className="mt-1 text-xs text-red-600">{errors.message}</p>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="rounded border border-stone-100 bg-stone-50 p-4 text-sm text-stone-700">
            <p><strong>Name:</strong> {form.name || "—"}</p>
            <p><strong>Email:</strong> {form.email || "—"}</p>
            <p><strong>Organisation:</strong> {form.organisation || "—"}</p>
            <div className="mt-2">
              <p className="text-xs text-stone-500">Message</p>
              <div className="mt-1 rounded border-l-4 border-amber-400 bg-white p-3 text-sm text-stone-800">{form.message || "—"}</div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center gap-3">
        {step > 0 && (
          <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded border border-stone-200 bg-white px-4 py-2 text-sm text-stone-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">Back</button>
        )}

        {step < 2 && (
          <button type="button" onClick={() => { if (validateStep(step)) setStep((s) => s + 1); }}
            className="ml-auto rounded-sm bg-red-700 py-3 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md disabled:opacity-60">
            Next
          </button>
        )}

        {step === 2 && (
          <button type="button" onClick={handleSubmit} disabled={status === "sending"}
            className="ml-auto rounded-sm bg-red-700 py-3 px-5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md disabled:opacity-60">
            {status === "sending" ? "Sending…" : "Send message"}
          </button>
        )}
      </div>
    </div>
  );
}
