const plans = [
  {
    name: "Starter",
    price: "KES 2,500",
    period: "one-time",
    description: "One NFC card, your full digital profile.",
    features: ["1 NFC card", "Digital profile page", "Unlimited taps", "Basic analytics"],
    highlighted: false,
  },
  {
    name: "Professional",
    price: "KES 4,500",
    period: "one-time",
    description: "For professionals who want the full picture.",
    features: [
      "1 premium NFC card",
      "Custom profile design",
      "Unlimited taps",
      "Full analytics dashboard",
      "QR code backup",
    ],
    highlighted: true,
  },
  {
    name: "Team",
    price: "Custom",
    period: "per team",
    description: "For companies rolling this out across staff.",
    features: [
      "Cards for every team member",
      "Shared brand template",
      "Team analytics dashboard",
      "Priority support",
    ],
    highlighted: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Simple pricing, no subscriptions
        </h2>
        <p className="mt-4 text-white/60">
          Pay once for your card. Your profile stays live for as long as you need it.
        </p>
      </div>

      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`glass-card rounded-2xl p-8 ${
              plan.highlighted ? "border-[#FFD400]/40 bg-[#FFD400]/[0.06]" : ""
            }`}
          >
            {plan.highlighted && (
              <span className="mb-4 inline-block rounded-full bg-[#FFD400] px-3 py-1 text-xs font-semibold text-[#090909]">
                MOST POPULAR
              </span>
            )}
            <h3 className="font-display text-xl font-semibold">{plan.name}</h3>
            <p className="mt-1 text-sm text-white/60">{plan.description}</p>
            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-3xl font-bold">{plan.price}</span>
              <span className="text-sm text-white/50">/ {plan.period}</span>
            </div>

            <ul className="mt-6 space-y-3">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                  <span className="text-[#FFD400]">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#order"
              className={`mt-8 block w-full rounded-full px-6 py-3 text-center text-sm font-semibold transition ${
                plan.highlighted
                  ? "bg-[#FFD400] text-[#090909] hover:bg-[#e6bf00]"
                  : "border border-white/20 text-white hover:border-white/40"
              }`}
            >
              {plan.name === "Team" ? "Talk to Us" : "Order Your Card"}
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
