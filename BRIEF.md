# DCA-Invest — Project Brief

**URL:** invest.diamondcapitalafrica.com
**Type:** Standalone Next.js site, separate Vercel project, separate Git repo
**Purpose:** Investor advisory service for Diamond Capital Africa

---

## What this is

A separate landing site for foreign investors who want to *enter* Uganda'sr —
as opposed to the main DCA site (diamondcapitalafrica.com) which is for buyers who want
to *purchase* physical gold.

This is not general FDI consulting. It is gold-sector-specific advisory backed by DCA's
active trading operations on the ground in Kampala.

---

## Relationship to main DCA site

| | Main site (diamondcapitalafrica.com) | This site (invest.diamondcapitalafrica.com) |
|---|---|---|
| Audience | Institutional gold buyers | Foreign investors / mining funds |
| Product | Physical verified gold | Advisory engagements |
| How they pay | Per shipment | Retainer or consulting fee |
| CTA | "Get a quote" | "Book a call" |

The main site already has two hooks pointing here:
1. Final CTA section: "Looking to invest in Uganda's gold sector? We offer advisory engagements →"
2. Footer nav: "Investor advisory ↗"

Both link to invest.diamondcapitalafrica.com.

---

## Competitive context

Trans African Investments (taiafri.com) does generalist FDI across 10+ industries.
Their gold page looks like SEO filler — no operational depth.

DCA's advantage: we are active traders, not researchers. We buy gold in Kampala weekly.
Our advisory is backed by real relationships, real licenses, real compliance infrastructure.

---

## Tech stack

Same as main DCA site:
- Next.js 15 (App Router), TypeScript
- Tailwind CSS v4, Framer Motion
- Fonts: Playfair Display (headings), Source Sans 3 (body)
- Colors: #fdfbf7 cream bg, amber accents, red-700 CTAs, emerald-700 labels
- Logo: same DCA logo

Repo: kazibweyassin/DCA-Invest
Deploy: Vercel (separate project from main DCA)

---

## DNS setup (when ready)

In your domain DNS panel, add:
- Type: CNAME
- Name: invest
- Value: cname.vercel-dns.com

Then in the Vercel project for DCA-Invest, add domain: invest.diamondcapitalafrica.com

---

## Page structure (single-page MVP)

1. Hero — "Want to invest in Uganda's gold sector? We live here."
2. Why DCA — Not consultants from London. Active traders in Kampala.
3. What we offer — 3-4 specific advisory services
4. How it works — Engagement process (3 steps)
5. Who this is for — Foreign investors, family offices, mining funds
6. CTA — Contact form / booking

---

## Voice rules (match main DCA humanization)

- No: "facilitate investment opportunities and foster economic growth"
- Yes: "We know the mines, the labs, the regulators. We will show you how it actually works."
- Specific only. No vague credentials.
- Human sentences, not noun lists.

---

## Last updated: March 8, 2026
