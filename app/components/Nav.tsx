"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Nav() {
  const navItems = [
    { label: "Why DCA", href: "#why-dca" },
    { label: "Services", href: "#services" },
    { label: "Process", href: "#process" },
    { label: "Who it’s for", href: "#who" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div className="hidden md:block bg-stone-900 text-stone-300 text-xs">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-1.5">
          <div className="flex items-center gap-6">
            <span>Kampala, Uganda &mdash; East Africa Time (EAT, UTC+3)</span>
            <a href="tel:+256704833021" className="inline-block text-stone-300 transition-all duration-200 hover:-translate-y-0.5 hover:text-amber-400">
              +256 (0) 704 833 021
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span>
              <span className="text-amber-400 font-medium">Office hours:</span>{" "}
              Mon–Fri, 8:00 am – 6:00 pm EAT
            </span>
            <span>
              <span className="text-amber-400 font-medium">Response:</span>{" "}
              Within 24 hours
            </span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <motion.nav
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-stone-200 bg-white shadow-sm"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a href="https://diamondcapitalafrica.com" className="flex items-center">
            <Image
              src="/Logo.png"
              alt="Diamond Capital Africa"
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </a>

          <ul className="hidden items-center gap-6 lg:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="inline-block text-sm font-medium text-stone-700 transition-all duration-200 hover:-translate-y-0.5 hover:text-red-700"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="rounded-sm bg-red-700 px-5 py-2 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-red-800 hover:shadow-md"
          >
            Book a call
          </a>
        </div>
      </motion.nav>
    </div>
  );
}
