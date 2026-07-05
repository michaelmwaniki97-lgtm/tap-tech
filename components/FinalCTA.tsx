export default function FinalCTA() {
  return (
    <section className="px-6 py-24">
      <div className="glass-card relative mx-auto max-w-4xl overflow-hidden rounded-[32px] p-16 text-center">
        <div className="hero-glow absolute inset-0" />
        <div className="relative">
          <h2 className="font-display text-3xl font-bold md:text-5xl">
            Ready to ditch paper cards?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-white/60">
            Order your TAP TECH card and have your digital profile live in
            minutes.
          </p>
          <a
            href="#order"
            className="mt-8 inline-block rounded-xl bg-[#FFD400] px-10 py-4 font-semibold text-[#090909] transition hover:shadow-[0_0_30px_rgba(255,212,0,0.35)] active:scale-95"
          >
            Order Your Card
          </a>
        </div>
      </div>
    </section>
  );
}
