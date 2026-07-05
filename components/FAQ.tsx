"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "How does the NFC card work?",
    a: "Tap your TAP TECH card against the back of any modern iPhone or Android phone. Your digital profile opens instantly in the browser — no app needed on either side.",
  },
  {
    q: "What if someone's phone doesn't support NFC?",
    a: "Every card also has a QR code printed on it. If NFC isn't available, they just scan the code with their camera instead.",
  },
  {
    q: "Can I update my profile after ordering?",
    a: "Yes. Your card links to a live profile page you control from your dashboard, so you can update your details, links and photo anytime without reordering a card.",
  },
  {
    q: "How long does delivery take?",
    a: "Cards are printed and shipped within 3-5 business days after you finish setting up your profile.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="mx-auto max-w-3xl px-6 py-20">
      <div className="text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Frequently asked questions
        </h2>
      </div>

      <div className="mt-10 space-y-4">
        {faqs.map((item, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={item.q} className="glass-card rounded-xl">
              <button
                onClick={() => setOpenIndex(isOpen ? null : i)}
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-medium">{item.q}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-[#FFD400] transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isOpen && (
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/60">
                  {item.a}
                </p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
