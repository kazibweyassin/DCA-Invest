"use client";

import { useState } from "react";

type MemberForm = {
  name: string;
  email: string;
  phone: string;
  whatsapp: string;
  organisation: string;
  investorType: string;
  jurisdiction: string;
  membershipType: string;
  ticketSize: string;
  allocationTimeline: string;
  investmentHorizon: string;
  riskAppetite: string;
  targetCommodities: string;
  objectives: string;
  accreditation?: string;
  notes: string;
  consent: boolean;
};

export default function MultiStepFormMember() {
  const [step, setStep] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState<MemberForm>({
    name: "",
    email: "",
    phone: "",
    whatsapp: "",
    organisation: "",
    investorType: "",
    jurisdiction: "",
    membershipType: "investor",
    ticketSize: "",
    allocationTimeline: "",
    investmentHorizon: "",
    riskAppetite: "",
    targetCommodities: "",
    objectives: "",
    accreditation: "",
    notes: "",
    consent: false,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (e.target instanceof HTMLInputElement && e.target.type === "checkbox") {
      setForm((p) => ({ ...p, [name]: e.target.checked }));
    } else {
      setForm((p) => ({ ...p, [name]: value }));
    }
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
  }

  function validateStep(s: number) {
    const err: Record<string, string> = {};
    if (s === 0) {
      if (!form.name.trim()) err.name = "Name required";
      if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) err.email = "Valid email required";
      if (!form.phone.trim()) err.phone = "Phone required";
      if (!form.organisation.trim()) err.organisation = "Organisation required";
      if (!form.investorType.trim()) err.investorType = "Select investor type";
      if (!form.jurisdiction.trim()) err.jurisdiction = "Jurisdiction required";
    }
    if (s === 1) {
      if (!form.membershipType) err.membershipType = "Select membership track";
      if (!form.ticketSize) err.ticketSize = "Select expected ticket size";
      if (!form.allocationTimeline) err.allocationTimeline = "Select timeline";
      if (!form.investmentHorizon) err.investmentHorizon = "Select horizon";
      if (!form.riskAppetite) err.riskAppetite = "Select risk appetite";
    }
    if (s === 2) {
      if (!form.targetCommodities.trim()) err.targetCommodities = "Add target commodities";
      if (!form.objectives.trim()) err.objectives = "Please share your investment objective";
      if (!form.consent) err.consent = "Consent is required";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  }

  async function handleSubmit() {
    if (!validateStep(step)) return;
    setStatus("sending");
    try {
      const body = {
        name: form.name,
        email: form.email,
        organisation: form.organisation,
        message:
          `Investor membership enquiry:\n` +
          `Investor type: ${form.investorType}\n` +
          `Jurisdiction: ${form.jurisdiction}\n` +
          `Phone: ${form.phone}\n` +
          `WhatsApp: ${form.whatsapp || "N/A"}\n` +
          `Membership track: ${form.membershipType}\n` +
          `Ticket size: ${form.ticketSize}\n` +
          `Timeline: ${form.allocationTimeline}\n` +
          `Horizon: ${form.investmentHorizon}\n` +
          `Risk appetite: ${form.riskAppetite}\n` +
          `Target commodities: ${form.targetCommodities}\n` +
          `Objectives: ${form.objectives}\n` +
          `Accreditation: ${form.accreditation || "N/A"}\n` +
          `Additional notes: ${form.notes || "N/A"}`,
      };

      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      if (res.ok) setStatus("sent");
      else {
        setStatus("idle");
        alert("Failed to submit. Please email info@diamondcapitalafrica.com");
      }
    } catch {
      setStatus("idle");
      alert("Network error. Please try again or email info@diamondcapitalafrica.com");
    }
  }

  if (status === "sent") {
    return (
      <div className="py-12 text-center">
        <h4 className="mb-2 text-lg font-semibold text-stone-900">Membership request received</h4>
        <p className="text-sm text-stone-600">We will review your request and be in touch within one business day.</p>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <div className="text-sm text-stone-700">Step {step + 1} of 4</div>

      {step === 0 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <div>
            <label className="block text-xs font-semibold text-stone-500">Full name</label>
            <input name="name" value={form.name} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" />
            {errors.name && <p className="mt-1 text-xs text-red-600">{errors.name}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500">Email</label>
            <input name="email" value={form.email} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" />
            {errors.email && <p className="mt-1 text-xs text-red-600">{errors.email}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500">Phone</label>
            <input name="phone" value={form.phone} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" placeholder="+256..." />
            {errors.phone && <p className="mt-1 text-xs text-red-600">{errors.phone}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500">WhatsApp (optional)</label>
            <input name="whatsapp" value={form.whatsapp} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" placeholder="+256..." />
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500">Organisation</label>
            <input name="organisation" value={form.organisation} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" />
            {errors.organisation && <p className="mt-1 text-xs text-red-600">{errors.organisation}</p>}
          </div>
          <div>
            <label className="block text-xs font-semibold text-stone-500">Investor type</label>
            <select name="investorType" value={form.investorType} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">Select type</option>
              <option value="Family office">Family office</option>
              <option value="Institutional fund">Institutional fund</option>
              <option value="Commodity trader">Commodity trader</option>
              <option value="Mining company">Mining company</option>
              <option value="Private investor">Private investor</option>
            </select>
            {errors.investorType && <p className="mt-1 text-xs text-red-600">{errors.investorType}</p>}
          </div>
          <div className="sm:col-span-2">
            <label className="block text-xs font-semibold text-stone-500">Country / jurisdiction</label>
            <input name="jurisdiction" value={form.jurisdiction} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2" placeholder="Where your entity is registered" />
            {errors.jurisdiction && <p className="mt-1 text-xs text-red-600">{errors.jurisdiction}</p>}
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="grid gap-3 sm:grid-cols-2">
          <label className="text-xs font-semibold text-stone-500">Membership type</label>
          <div className="sm:col-span-2">
            <select name="membershipType" value={form.membershipType} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="investor">Investor Access — prioritised opportunities</option>
              <option value="partner">Partner Network — supplier introductions</option>
              <option value="standard">Market Intelligence — advisory updates</option>
            </select>
            {errors.membershipType && <p className="mt-1 text-xs text-red-600">{errors.membershipType}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500">Expected ticket size</label>
            <select name="ticketSize" value={form.ticketSize} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">Select range</option>
              <option value="Under USD 250k">Under USD 250k</option>
              <option value="USD 250k - 1M">USD 250k - 1M</option>
              <option value="USD 1M - 5M">USD 1M - 5M</option>
              <option value="USD 5M+">USD 5M+</option>
            </select>
            {errors.ticketSize && <p className="mt-1 text-xs text-red-600">{errors.ticketSize}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500">Allocation timeline</label>
            <select name="allocationTimeline" value={form.allocationTimeline} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">Select timeline</option>
              <option value="Immediate (0-30 days)">Immediate (0-30 days)</option>
              <option value="Short-term (1-3 months)">Short-term (1-3 months)</option>
              <option value="Mid-term (3-6 months)">Mid-term (3-6 months)</option>
              <option value="Exploring (6+ months)">Exploring (6+ months)</option>
            </select>
            {errors.allocationTimeline && <p className="mt-1 text-xs text-red-600">{errors.allocationTimeline}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500">Investment horizon</label>
            <select name="investmentHorizon" value={form.investmentHorizon} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">Select horizon</option>
              <option value="Tactical (under 12 months)">Tactical (under 12 months)</option>
              <option value="Medium (1-3 years)">Medium (1-3 years)</option>
              <option value="Long-term (3+ years)">Long-term (3+ years)</option>
            </select>
            {errors.investmentHorizon && <p className="mt-1 text-xs text-red-600">{errors.investmentHorizon}</p>}
          </div>

          <div>
            <label className="text-xs font-semibold text-stone-500">Risk appetite</label>
            <select name="riskAppetite" value={form.riskAppetite} onChange={handleChange} className="mt-1 w-full rounded border px-3 py-2">
              <option value="">Select risk level</option>
              <option value="Conservative">Conservative</option>
              <option value="Balanced">Balanced</option>
              <option value="Opportunistic">Opportunistic</option>
              <option value="High-conviction">High-conviction</option>
            </select>
            {errors.riskAppetite && <p className="mt-1 text-xs text-red-600">{errors.riskAppetite}</p>}
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="grid gap-3">
          <label className="text-xs font-semibold text-stone-500">Target commodities / assets</label>
          <input
            name="targetCommodities"
            value={form.targetCommodities}
            onChange={handleChange}
            placeholder="e.g., Gold dore, refined bullion, strategic mineral projects"
            className="mt-1 w-full rounded border px-3 py-2"
          />
          {errors.targetCommodities && <p className="mt-1 text-xs text-red-600">{errors.targetCommodities}</p>}

          <label className="text-xs font-semibold text-stone-500">Investment objective</label>
          <textarea
            name="objectives"
            value={form.objectives}
            onChange={handleChange}
            rows={4}
            placeholder="What you want to achieve and what support you need from DCA"
            className="mt-1 w-full rounded border px-3 py-2"
          />
          {errors.objectives && <p className="mt-1 text-xs text-red-600">{errors.objectives}</p>}

          <label className="text-xs font-semibold text-stone-500">Accreditation (optional)</label>
          <input name="accreditation" value={form.accreditation} onChange={handleChange} placeholder="e.g., Regulated fund number or accreditation" className="mt-1 w-full rounded border px-3 py-2" />

          <label className="text-xs font-semibold text-stone-500 mt-2">Additional notes (optional)</label>
          <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="mt-1 w-full rounded border px-3 py-2" />

          <label className="mt-2 flex items-start gap-2 text-sm text-stone-700">
            <input type="checkbox" name="consent" checked={form.consent} onChange={handleChange} className="mt-1" />
            <span>I confirm this is an investment-related enquiry and consent to being contacted by DCA.</span>
          </label>
          {errors.consent && <p className="mt-1 text-xs text-red-600">{errors.consent}</p>}
        </div>
      )}

      {step === 3 && (
        <div className="rounded border p-3">
          <p className="text-sm"><strong>Name:</strong> {form.name || "—"}</p>
          <p className="text-sm"><strong>Email:</strong> {form.email || "—"}</p>
          <p className="text-sm"><strong>Phone:</strong> {form.phone || "—"}</p>
          <p className="text-sm"><strong>WhatsApp:</strong> {form.whatsapp || "—"}</p>
          <p className="text-sm"><strong>Organisation:</strong> {form.organisation || "—"}</p>
          <p className="text-sm"><strong>Investor type:</strong> {form.investorType || "—"}</p>
          <p className="text-sm"><strong>Jurisdiction:</strong> {form.jurisdiction || "—"}</p>
          <p className="text-sm"><strong>Type:</strong> {form.membershipType}</p>
          <p className="text-sm"><strong>Ticket size:</strong> {form.ticketSize || "—"}</p>
          <p className="text-sm"><strong>Timeline:</strong> {form.allocationTimeline || "—"}</p>
          <p className="text-sm"><strong>Horizon:</strong> {form.investmentHorizon || "—"}</p>
          <p className="text-sm"><strong>Risk appetite:</strong> {form.riskAppetite || "—"}</p>
          <p className="text-sm"><strong>Target commodities:</strong> {form.targetCommodities || "—"}</p>
          <p className="mt-2 text-sm"><strong>Objectives:</strong> {form.objectives || "—"}</p>
          <p className="text-sm"><strong>Accreditation:</strong> {form.accreditation || "—"}</p>
          <p className="text-sm"><strong>Notes:</strong> {form.notes || "—"}</p>
        </div>
      )}

      <div className="flex items-center gap-3">
        {step > 0 && <button type="button" onClick={() => setStep((s) => s - 1)} className="rounded border px-3 py-2 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm">Back</button>}
        {step < 3 && (
          <button
            type="button"
            onClick={() => {
              if (validateStep(step)) setStep((s) => s + 1);
            }}
            className="ml-auto rounded bg-red-700 px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md"
          >
            Next
          </button>
        )}
        {step === 3 && (
          <button
            type="button"
            onClick={handleSubmit}
            disabled={status === "sending"}
            className="ml-auto rounded bg-red-700 px-4 py-2 text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md"
          >
            {status === "sending" ? "Sending…" : "Request membership"}
          </button>
        )}
      </div>
    </div>
  );
}
