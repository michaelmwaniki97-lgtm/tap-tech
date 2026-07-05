import { Nfc, Globe, AtSign } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          <p className="flex items-center gap-2 font-display text-lg font-bold">
            <Nfc size={18} className="text-[#FFD400]" />
            TAP<span className="text-[#FFD400]">TECH</span>
          </p>
          <p className="mt-2 max-w-xs text-sm text-white/50">
            The smart NFC business card that makes every first impression
            count.
          </p>
          <div className="mt-5 flex gap-3">
            <a
              href="#"
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full transition hover:text-[#FFD400]"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              className="glass-card flex h-10 w-10 items-center justify-center rounded-full transition hover:text-[#FFD400]"
            >
              <AtSign size={18} />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
          <div>
            <p className="text-sm font-semibold text-white/80">Product</p>
            <ul className="mt-3 space-y-2 text-sm text-white/50">
              <li><a href="#features" className="hover:text-white">Features</a></li>
              <li><a href="#pricing" className="hover:text-white">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white">FAQ</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">Company</p>
            <ul className="mt-3 space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-white">About</a></li>
              <li><a href="#" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/80">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-white/50">
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Terms</a></li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-6 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} TAP TECH. All rights reserved.
      </div>
    </footer>
  );
}
