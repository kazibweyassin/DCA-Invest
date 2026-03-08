export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#fdfbf7] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-amber-400">
                <span className="text-[11px] font-bold text-stone-900">DCA</span>
              </div>
              <span className="text-sm font-semibold text-stone-800">Diamond Capital Africa</span>
            </div>
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-stone-400">
              Investor advisory for Uganda&apos;s mineral sector. Active traders in
              Kampala since our founding — not researchers.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
            <a href="https://diamondcapitalafrica.com" className="text-stone-500 transition hover:text-stone-800">
              diamondcapitalafrica.com &#8599;
            </a>
            <a href="#contact" className="text-stone-500 transition hover:text-stone-800">
              Book a call
            </a>
          </div>
        </div>
        <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-stone-100 pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-stone-400">
            &copy; {new Date().getFullYear()} Diamond Capital Africa. All rights reserved.
          </p>
          <p className="text-xs text-stone-400">invest.diamondcapitalafrica.com</p>
        </div>
      </div>
    </footer>
  );
}
