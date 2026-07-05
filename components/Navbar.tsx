"use client";

import { useState } from "react";
import { Nfc } from "lucide-react";

const links = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#090909]/70 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <Nfc size={20} className="text-[#FFD400]" />
          TAP<span className="text-[#FFD400]">TECH</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#order"
            className="rounded-full bg-[#FFD400] px-5 py-2 text-sm font-semibold text-[#090909] transition hover:shadow-[0_0_20px_rgba(255,212,0,0.3)] active:scale-95"
          >
            Order Your Card
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="text-white md:hidden"
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {open && (
        <div className="flex flex-col gap-4 border-t border-white/5 px-6 py-6 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/70"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            className="mt-2 rounded-full bg-[#FFD400] px-5 py-2 text-center text-sm font-semibold text-[#090909]"
          >
            Order Your Card
          </a>
        </div>
      )}
    </header>
  );
}
