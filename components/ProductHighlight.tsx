import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const points = [
  "Durable, water-resistant matte finish",
  "Encrypted profile data — you control what's shared",
  "Editable digital profile, no reprinting a card to update it",
];

export default function ProductHighlight() {
  return (
    <section className="border-y border-white/5 bg-white/[0.02] py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-16 px-6 md:grid-cols-2">
        <div className="grid grid-cols-2 gap-4">
          <div className="glass-card aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/nfc-card.png"
              alt="TAP TECH card detail"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="glass-card mt-8 aspect-square overflow-hidden rounded-2xl">
            <Image
              src="/images/nfc-card.png"
              alt="TAP TECH card in use"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        <div>
          <h2 className="font-display text-3xl font-bold leading-tight md:text-4xl">
            Built for how you actually{" "}
            <span className="text-[#FFD400]">network</span>
          </h2>
          <p className="mt-6 text-lg text-white/60">
            A card that survives your pocket, your wallet and a hundred
            handshakes — and a profile behind it you can update anytime.
          </p>

          <ul className="mt-8 space-y-4">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-[#FFD400]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
