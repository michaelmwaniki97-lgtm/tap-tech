"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  const tiltRef = useRef<HTMLDivElement>(null);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = tiltRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateY = ((e.clientX - centerX) / rect.width) * 14;
    const rotateX = -((e.clientY - centerY) / rect.height) * 14;
    el.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg)`;
  }

  function resetTilt() {
    const el = tiltRef.current;
    if (el) el.style.transform = "rotateY(0deg) rotateX(0deg)";
  }

  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseLeave={resetTilt}
      className="relative mx-auto flex max-w-6xl flex-col items-center gap-16 overflow-hidden px-6 pb-20 pt-16 md:flex-row md:pt-24"
    >
      {/* Text side */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 text-center md:text-left"
      >
        <p className="mb-4 inline-block rounded-full border border-[#FFD400]/20 bg-[#FFD400]/10 px-4 py-1 text-xs font-medium tracking-wide text-[#FFD400]">
          NO APP. NO HASSLE. JUST TAP.
        </p>

        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight md:text-6xl">
          The Smart Business Card That Makes{" "}
          <span className="text-[#FFD400]">Every First Impression</span>{" "}
          Count.
        </h1>

        <p className="mt-6 max-w-lg text-lg text-white/60 md:mx-0 mx-auto">
          Share your contact details, portfolio, socials and business
          information instantly with one tap.
        </p>

        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row md:justify-start justify-center">
          <a
            href="#order"
            className="w-full rounded-xl bg-[#FFD400] px-8 py-3 text-center font-semibold text-[#090909] transition hover:shadow-[0_0_25px_rgba(255,212,0,0.35)] active:scale-95 sm:w-auto"
          >
            Order Your Card
          </a>
          <a
            href="#demo"
            className="w-full rounded-xl border border-white/20 px-8 py-3 text-center font-semibold text-white transition hover:bg-white/5 active:scale-95 sm:w-auto"
          >
            Watch Demo
          </a>
        </div>
      </motion.div>

      {/* Card side */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex flex-1 items-center justify-center"
        style={{ perspective: "1000px" }}
      >
        {/* Glow */}
        <div className="hero-glow absolute h-[420px] w-[420px] rounded-full" />

        <div className="animate-float relative w-72 md:w-96">
          <div
            ref={tiltRef}
            className="transition-transform duration-200 ease-out"
            style={{ transformStyle: "preserve-3d" }}
          >
            <Image
              src="/images/nfc-card.png"
              alt="TAP TECH smart NFC business card"
              width={600}
              height={600}
              priority
              className="relative z-10 w-full rounded-2xl border border-white/5 drop-shadow-2xl"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
