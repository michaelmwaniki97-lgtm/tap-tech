export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-yellow-400/30 bg-yellow-400/10 px-4 py-2 text-sm font-semibold text-yellow-400">
          TAP TECH
        </span>

        <h1 className="mt-8 text-5xl font-black tracking-tight md:text-7xl">
          Tap.
          <br />
          Connect.
          <br />
          Impress.
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-zinc-400">
          Share your contact details, portfolio and social media instantly
          with a premium NFC business card.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <button className="rounded-xl bg-yellow-400 px-8 py-4 font-bold text-black transition hover:scale-105">
            Order Yours
          </button>

          <button className="rounded-xl border border-zinc-700 px-8 py-4 transition hover:border-yellow-400">
            Learn More
          </button>
        </div>
      </section>
    </main>
  );
}