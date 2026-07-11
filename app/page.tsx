"use client";

import { useEffect, useRef, useState } from "react";

const faqs = [
  {
    q: "Does the other person need an app?",
    a: "No. The recipient does not need any app or TAP TECH account to receive your information. Your profile opens instantly in their native web browser.",
  },
  {
    q: "Is it secure?",
    a: "Yes, we prioritize security. You can lock your card at any time via your digital dashboard, and all data transfers are encrypted using industry-standard protocols.",
  },
  {
    q: "Can I change my details later?",
    a: "Absolutely. Your card is linked to a dynamic digital profile. You can update your phone number, social links, or portfolio anytime without needing a new physical card.",
  },
];

export default function Home() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMouseMove(e: MouseEvent) {
      const card = cardRef.current;
      if (!card) return;
      const x = (window.innerWidth / 2 - e.pageX) / 40;
      const y = (window.innerHeight / 2 - e.pageY) / 40;
      card.style.transform = `rotateY(${x}deg) rotateX(${-y}deg)`;
    }
    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* TopAppBar Navigation Shell */}
      <header className="fixed top-0 w-full bg-background/80 backdrop-blur-xl border-b border-white/5 z-50">
        <nav className="flex justify-between items-center px-margin-desktop py-4 max-w-container-max mx-auto">
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              contactless
            </span>
            <span className="font-headline-md text-headline-md font-bold tracking-tighter text-primary-container">
              TAP TECH
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a
              className="text-on-surface/70 hover:text-primary-container transition-colors duration-300 font-label-sm text-label-sm uppercase"
              href="#features"
            >
              Features
            </a>
            <a
              className="text-on-surface/70 hover:text-primary-container transition-colors duration-300 font-label-sm text-label-sm uppercase"
              href="#pricing"
            >
              Pricing
            </a>
            <a
              className="text-on-surface/70 hover:text-primary-container transition-colors duration-300 font-label-sm text-label-sm uppercase"
              href="#faq"
            >
              FAQ
            </a>
            <a
  href="https://wa.me/254732730770?text=Hi%20TAP%20TECH!%20I'm%20interested%20in%20ordering%20an%20NFC%20business%20card.%0A%0AName%3A%0ACompany%3A%0APhone%3A%0AEmail%3A%0APreferred%20Card%20Color%3A"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-primary-container text-on-primary-fixed font-bold px-8 py-4 rounded-xl active:scale-95 transition-all text-body-md hover:shadow-[0_0_25px_rgba(255,212,0,0.4)] inline-block"
>
  Order Now
</a>
          </div>
          <button className="md:hidden text-on-surface">
            <span className="material-symbols-outlined">menu</span>
          </button>
        </nav>
      </header>

      <main className="relative">
        {/* Hero Section */}
        <section className="min-h-screen pt-32 pb-20 px-margin-desktop max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-center relative">
          <div className="z-10 space-y-8">
            <span className="inline-block px-3 py-1 bg-primary-container/10 border border-primary-container/20 text-primary-container font-label-sm text-label-sm rounded-full">
              NOW SHIPPING WORLDWIDE
            </span>
            <h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight">
              The Smart Business Card That Makes Every{" "}
              <span className="text-primary-container">First Impression</span> Count.
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-lg">
              Share your contact details, portfolio, socials and business information instantly with one tap. No apps required.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
            <a
  href="/profile"
  className="bg-primary-container text-on-primary-fixed font-bold px-8 py-4 rounded-xl active:scale-95 transition-all text-body-md hover:shadow-[0_0_25px_rgba(255,212,0,0.4)] inline-block"
>
  View Demo Profile
</a>
                 
              
              <button className="bg-transparent border border-white/30 text-on-surface font-bold px-8 py-4 rounded-xl active:scale-95 transition-all text-body-md hover:bg-white/5">
                Watch Demo
              </button>
            </div>
            <div className="flex items-center gap-4 pt-8">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-highest" />
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container-high" />
                <div className="w-10 h-10 rounded-full border-2 border-background bg-surface-container" />
              </div>
              <span className="font-label-sm text-label-sm text-on-surface/60">
                No app. No hassle. Just tap.
              </span>
            </div>
          </div>

          <div className="relative flex items-center justify-center h-full">
            <div className="hero-glow absolute w-[600px] h-[600px] rounded-full z-0" />
            <div className="floating-card z-10 w-full max-w-md">
              <div ref={cardRef} style={{ transformStyle: "preserve-3d" }}>
                <img
                  alt="TAP TECH Smart Business Card"
                  className="w-full drop-shadow-[0_35px_60px_rgba(0,0,0,0.8)] rounded-2xl border border-white/5"
                  src="/images/nfc-card.png"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features Bento Grid */}
        <section className="py-32 px-margin-desktop max-w-container-max mx-auto" id="features">
          <div className="mb-16 text-center space-y-4">
            <h2 className="font-headline-lg text-headline-lg text-on-surface">
              Precision Engineered Networking
            </h2>
            <p className="text-on-surface-variant font-body-md max-w-xl mx-auto">
              Designed for the modern professional. Built on standard NFC technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-10 rounded-2xl group hover:border-primary-container/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  tap_and_play
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">One Tap Sharing</h3>
              <p className="text-on-surface-variant font-body-md">
                Simply tap your card to any modern smartphone. No extra app download required for the recipient.
              </p>
            </div>
            <div className="glass-card p-10 rounded-2xl group hover:border-primary-container/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  devices
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Works on Every Phone</h3>
              <p className="text-on-surface-variant font-body-md">
                Built on standard NFC, so it works on both iPhone and Android out of the box.
              </p>
            </div>
            <div className="glass-card p-10 rounded-2xl group hover:border-primary-container/30 transition-all duration-500">
              <div className="w-12 h-12 rounded-xl bg-primary-container/10 flex items-center justify-center mb-6 text-primary-container group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                  analytics
                </span>
              </div>
              <h3 className="font-headline-md text-headline-md mb-4 text-on-surface">Analytics Dashboard</h3>
              <p className="text-on-surface-variant font-body-md">
                Track every scan. See where, when, and how often your profile is being viewed in real-time.
              </p>
            </div>
          </div>
        </section>

        {/* Product Highlight */}
        <section className="py-32 bg-surface-container-low/30">
          <div className="max-w-container-max mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden glass-card">
                <img className="w-full h-full object-cover" alt="Card detail" src="/images/nfc-card.png" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden glass-card mt-8">
                <img className="w-full h-full object-cover" alt="Card in use" src="/images/nfc-card.png" />
              </div>
            </div>
            <div className="space-y-6">
              <h2 className="font-headline-lg text-headline-lg leading-tight">
                Elevate Your Identity With <span className="text-primary-container">Superior</span> Craftsmanship
              </h2>
              <p className="text-body-lg text-on-surface-variant">
                Each TAP TECH card is built to survive daily use. It&apos;s not just a card; it&apos;s a tool designed for professionals who demand excellence.
              </p>
              <ul className="space-y-4 pt-4">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="font-body-md">Water-resistant and durable finish</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="font-body-md">Secure end-to-end data encryption</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary-container">check_circle</span>
                  <span className="font-body-md">Customizable digital profile dashboard</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-32 px-margin-desktop max-w-container-max mx-auto" id="pricing">
          <div className="text-center mb-16 space-y-4">
            <h2 className="font-headline-lg text-headline-lg">Simple, Transparent Pricing</h2>
            <p className="text-on-surface-variant font-body-md">Choose the card that fits your professional needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter max-w-4xl mx-auto">
            <div className="glass-card p-12 rounded-3xl relative overflow-hidden border-white/5 flex flex-col h-full">
              <div className="mb-8">
                <h3 className="font-headline-md text-headline-md mb-2">Standard Card</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-headline-lg font-bold text-on-surface">KES 800</span>
                  <span className="text-on-surface-variant font-label-sm">ONCE</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Premium Matte Black Finish
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Standard QR Code Inclusion
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Basic Profile Analytics
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Free Shipping
                </li>
              </ul>
              <button className="w-full py-4 border border-white/20 rounded-xl font-bold hover:bg-white/5 transition-all active:scale-95">
                Get Standard
              </button>
            </div>

            <div className="bg-primary-container/5 border border-primary-container/30 p-12 rounded-3xl relative overflow-hidden flex flex-col h-full shadow-[0_0_40px_rgba(255,212,0,0.05)]">
              <div className="absolute top-4 right-4 px-3 py-1 bg-primary-container text-on-primary-fixed font-label-sm text-xs font-bold rounded-full">
                POPULAR
              </div>
              <div className="mb-8">
                <h3 className="font-headline-md text-headline-md mb-2">Custom Edition</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-headline-lg font-bold text-primary-container">KES 1,000</span>
                  <span className="text-on-surface-variant font-label-sm">ONCE</span>
                </div>
              </div>
              <ul className="space-y-4 mb-10 flex-grow">
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Full Logo Engraving
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Advanced CRM Integration
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Priority Lead Capture Mode
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Lifetime Pro Analytics
                </li>
                <li className="flex items-center gap-3 text-on-surface/80">
                  <span className="material-symbols-outlined text-primary-container text-sm">done</span>
                  Expedited Shipping
                </li>
              </ul>
              <button className="w-full py-4 bg-primary-container text-on-primary-fixed rounded-xl font-bold hover:shadow-[0_0_30px_rgba(255,212,0,0.4)] transition-all active:scale-95">
                Design Yours
              </button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-32 px-margin-desktop max-w-3xl mx-auto" id="faq">
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="glass-card rounded-xl border-white/5 cursor-pointer group"
                  onClick={() => setOpenFaq(isOpen ? null : i)}
                >
                  <div className="p-6 flex justify-between items-center">
                    <h4 className="font-headline-md text-headline-md text-on-surface">{item.q}</h4>
                    <span
                      className="material-symbols-outlined transition-transform duration-300"
                      style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                    >
                      expand_more
                    </span>
                  </div>
                  <div
                    className="faq-transition"
                    style={{ maxHeight: isOpen ? "200px" : "0" }}
                  >
                    <p className="px-6 pb-6 text-on-surface-variant">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-32 px-margin-desktop text-center">
          <div className="max-w-4xl mx-auto glass-card p-20 rounded-[40px] relative overflow-hidden border-primary-container/20">
            <div className="absolute inset-0 hero-glow -z-10" />
            <h2 className="font-headline-xl text-headline-xl mb-6">Ready to ditch paper cards?</h2>
            <p className="text-body-lg text-on-surface-variant mb-10">
              Order your TAP TECH card and have your digital profile live in minutes.
            </p>
            <a
  href="https://wa.me/254732730770?text=Hi%20TAP%20TECH!%20I'm%20interested%20in%20ordering%20an%20NFC%20business%20card.%0A%0AName%3A%0ACompany%3A%0APhone%3A%0AEmail%3A%0APreferred%20Card%20Color%3A"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-primary-container text-on-primary-fixed font-bold px-12 py-5 rounded-2xl active:scale-95 transition-all text-body-lg hover:shadow-[0_0_40px_rgba(255,212,0,0.4)]"
>
  Order Now
</a>
              
          
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-surface-container-lowest border-t border-white/5 w-full py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-gutter px-margin-desktop max-w-container-max mx-auto">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span
                className="material-symbols-outlined text-primary-container"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                contactless
              </span>
              <span className="font-headline-md text-headline-md font-bold text-primary-container">TAP TECH</span>
            </div>
            <p className="text-on-surface-variant font-body-md">
              Revolutionizing professional networking one tap at a time.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-on-surface font-bold font-label-sm text-label-sm uppercase tracking-widest mb-2">
              Products
            </h5>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              Standard Card
            </a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              Custom Edition
            </a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              NFC Accessories
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-on-surface font-bold font-label-sm text-label-sm uppercase tracking-widest mb-2">
              Company
            </h5>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              Privacy Policy
            </a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              Terms of Service
            </a>
            <a className="text-on-surface-variant hover:text-primary-container transition-colors" href="#">
              Contact Support
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h5 className="text-on-surface font-bold font-label-sm text-label-sm uppercase tracking-widest mb-2">
              Social
            </h5>
            <div className="flex gap-4">
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">public</span>
              </a>
              <a
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:text-primary-container transition-colors"
                href="#"
              >
                <span className="material-symbols-outlined">alternate_email</span>
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center text-on-surface/40 font-label-sm text-label-sm">
          © {new Date().getFullYear()} TAP TECH. All rights reserved.
        </div>
      </footer>
    </>
  );
}
