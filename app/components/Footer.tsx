import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-[#fdfbf7] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <div>
            <Image
              src="/Logo.png"
              alt="Diamond Capital Africa"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
            <p className="mt-2 max-w-xs text-xs leading-relaxed text-stone-400">
              Investor advisory for Uganda&apos;s mineral sector. Active traders in
              Kampala since our founding — not researchers.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 text-sm sm:items-end">
            <p className="text-[11px] uppercase tracking-widest text-stone-400">Part of</p>
            <a
              href="https://diamondcapitalafrica.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-stone-700 transition hover:text-amber-600"
            >
              diamondcapitalafrica.com &#8599;
            </a>
            <a href="tel:+256704833021" className="text-stone-500 transition hover:text-stone-800">
              +256 (0) 704 833 021
            </a>
            <a
              href="https://wa.me/256704833021?text=Hello%2C%20I%20am%20interested%20in%20your%20investor%20advisory%20services."
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-500 transition hover:text-stone-800"
            >
              Chat on WhatsApp &#8599;
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
