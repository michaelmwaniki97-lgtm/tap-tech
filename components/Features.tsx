import { Zap, Smartphone, BarChart3 } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "One Tap Sharing",
    description:
      "Hold your card near any phone and your contact details, socials and links open instantly. No app required.",
  },
  {
    icon: Smartphone,
    title: "Works on Every Phone",
    description:
      "Built on standard NFC, so it works out of the box on both iPhone and Android — no downloads, no friction.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "See every tap and scan in real time. Know who's viewing your profile and when they reached out.",
  },
];

export default function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Everything your card needs to do the talking
        </h2>
        <p className="mt-4 text-white/60">
          One card, replacing the stack of paper you hand out and forget.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="glass-card group rounded-2xl p-8 transition hover:border-[#FFD400]/30"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFD400]/10 text-[#FFD400] transition-transform group-hover:scale-110">
              <feature.icon size={22} strokeWidth={2} />
            </div>
            <h3 className="font-display text-xl font-semibold">
              {feature.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-white/60">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
