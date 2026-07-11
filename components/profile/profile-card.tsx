"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, type Variants } from "framer-motion";
import QRCode from "react-qr-code";
import {
  Phone,
  Mail,
  Globe,
  Link,
  MapPin,
  MessageCircle,
  Share2,
  Download,
  QrCode,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { buildVCard, getProfileUrl, profile } from "@/lib/profile-data";

const BG = "#090909";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const actionLinks = [
  {
    icon: Phone,
    label: "Call",
    href: `tel:${profile.phone}`,
    description: profile.phone,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: `https://wa.me/${profile.whatsapp}`,
    description: "Message on WhatsApp",
  },
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${profile.email}`,
    description: profile.email,
  },
  {
    icon: Globe,
    label: "Website",
    href: profile.website,
    description: "Visit website",
  },
  {
    icon: Link,
    label: "Linkedin",
    href: profile.linkedin,
  description: "Connect on Linkedin",
  },
  {
    icon: MapPin,
    label: "Location",
    href: profile.location.url,
    description: profile.location.label,
  },
] as const;

function ActionButton({
  icon: Icon,
  label,
  href,
  description,
  index,
}: {
  icon: typeof Phone;
  label: string;
  href: string;
  description: string;
  index: number;
}) {
  return (
    <motion.a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
      variants={itemVariants}
      whileHover={{ scale: 1.03, y: -2 }}
      whileTap={{ scale: 0.97 }}
      className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 backdrop-blur-xl transition-colors hover:border-[#FFD400]/35 hover:bg-white/[0.07]"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at top, rgba(255,212,0,0.12) 0%, transparent 70%)",
        }}
      />
      <div className="relative flex flex-col items-center gap-2.5 text-center">
        <div
          className="flex size-11 items-center justify-center rounded-xl border border-[#FFD400]/20 bg-[#FFD400]/10 transition-colors group-hover:border-[#FFD400]/40 group-hover:bg-[#FFD400]/15"
        >
          <Icon className="size-5 text-[#FFD400]" strokeWidth={1.75} />
        </div>
        <div>
          <p className="text-sm font-semibold text-white">{label}</p>
          <p className="mt-0.5 line-clamp-1 text-[11px] text-white/45">
            {description}
          </p>
        </div>
      </div>
    </motion.a>
  );
}

export default function ProfileCard() {
  const [shareState, setShareState] = useState<"idle" | "copied">("idle");
  const [saveState, setSaveState] = useState<"idle" | "saved">("idle");
  const [profileUrl, setProfileUrl] = useState("");

  useEffect(() => {
    setProfileUrl(window.location.href);
  }, []);

  const handleSaveContact = useCallback(() => {
    const vcard = buildVCard();
    const blob = new Blob([vcard], { type: "text/vcard;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${profile.name.replace(/\s+/g, "_")}.vcf`;
    anchor.click();
    URL.revokeObjectURL(url);
    setSaveState("saved");
    window.setTimeout(() => setSaveState("idle"), 2200);
  }, []);

  const handleShareProfile = useCallback(async () => {
    const url = window.location.href;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `${profile.name} | ${profile.company}`,
          text: `${profile.title} at ${profile.company}`,
          url,
        });
        return;
      } catch {
        /* user cancelled or share failed */
      }
    }

    await navigator.clipboard.writeText(url);
    setShareState("copied");
    window.setTimeout(() => setShareState("idle"), 2200);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-12">
      {/* Ambient background */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[520px] w-[520px] -translate-x-1/2 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,212,0,0.14) 0%, transparent 68%)",
          }}
        />
        <div
          className="absolute -left-24 bottom-0 h-72 w-72 rounded-full blur-3xl"
          style={{
            background:
              "radial-gradient(circle, rgba(255,212,0,0.06) 0%, transparent 70%)",
          }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto w-full max-w-md"
      >
        <div className="profile-glass overflow-hidden rounded-[28px] shadow-[0_24px_80px_rgba(0,0,0,0.55)]">
          {/* Banner */}
          <div className="relative h-40 overflow-hidden sm:h-44">
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(135deg, rgba(255,212,0,0.35) 0%, #1a1608 38%, #090909 100%)",
              }}
            />
            <div
              aria-hidden
              className="absolute inset-0 opacity-[0.18]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD400' fill-opacity='0.45'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
            <motion.div
              aria-hidden
              animate={{ opacity: [0.35, 0.65, 0.35] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, transparent 30%, rgba(255,212,0,0.12) 50%, transparent 70%)",
              }}
            />
            <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-[#090909]/90 to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative px-5 pb-6 pt-0 sm:px-7 sm:pb-8"
          >
            {/* Avatar */}
            <motion.div variants={itemVariants} className="-mt-14 flex justify-center sm:-mt-16">
              <div className="relative">
                <div
                  aria-hidden
                  className="absolute -inset-1 rounded-full blur-md"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(255,212,0,0.45) 0%, transparent 70%)",
                  }}
                />
                <div
                  className="relative flex size-24 items-center justify-center rounded-full border-[3px] border-[#FFD400] bg-gradient-to-br from-[#1c1c1c] to-[#090909] text-2xl font-bold tracking-tight text-white shadow-xl sm:size-28 sm:text-3xl"
                >
                  {profile.initials}
                </div>
                <div className="absolute -bottom-1 -right-1 flex size-8 items-center justify-center rounded-full border-2 border-[#090909] bg-[#FFD400] text-[#090909] shadow-lg">
                  <Sparkles className="size-3.5" strokeWidth={2.5} />
                </div>
              </div>
            </motion.div>

            {/* Identity */}
            <motion.div variants={itemVariants} className="mt-4 text-center">
              <h1 className="text-2xl font-bold tracking-tight text-white sm:text-[1.75rem]">
                {profile.name}
              </h1>
              <p className="mt-1 text-base font-medium text-[#FFD400]">
                {profile.title}
              </p>
              <p className="mt-0.5 text-sm font-medium tracking-[0.18em] text-white/50 uppercase">
                {profile.company}
              </p>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mx-auto mt-4 max-w-xs text-center text-sm leading-relaxed text-white/60 sm:max-w-sm sm:text-[0.9375rem]"
            >
              {profile.bio}
            </motion.p>

            {/* Action grid */}
            <motion.div
              variants={itemVariants}
              className="mt-7 grid grid-cols-2 gap-3 sm:gap-3.5"
            >
              {actionLinks.map((link, index) => (
                <ActionButton key={link.label} {...link} index={index} />
              ))}
            </motion.div>

            {/* QR Code */}
            <motion.div
              variants={itemVariants}
              className="mt-7 overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 backdrop-blur-xl"
            >
              <div className="flex items-center justify-center gap-2 text-white/70">
                <QrCode className="size-4 text-[#FFD400]" />
                <p className="text-xs font-semibold tracking-[0.14em] uppercase">
                  Scan to connect
                </p>
              </div>

              <div className="mx-auto mt-4 flex w-fit items-center justify-center rounded-2xl bg-white p-3 shadow-[0_8px_32px_rgba(255,212,0,0.12)]">
               {profileUrl ? (
                <QRCode
                 value={profileUrl}
                size={148}
                bgColor="#FFFFFF"
                fgColor={BG}
                level="M"
               />
                ) : (
              <div className="h-[148px] w-[148px]" />
                 )}
                </div>

              <p className="mt-3 text-center text-[11px] text-white/40">
                Point your camera here to save this profile
              </p>
            </motion.div>

            {/* Primary actions */}
            <motion.div
              variants={itemVariants}
              className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2"
            >
              <Button
                onClick={handleSaveContact}
                className={cn(
                  "h-12 w-full rounded-xl border-0 text-sm font-semibold shadow-[0_8px_24px_rgba(255,212,0,0.22)] transition-all hover:brightness-105 active:scale-[0.98]",
                  "bg-[#FFD400] text-[#090909] hover:bg-[#FFD400]/90"
                )}
              >
                <Download className="size-4" />
                {saveState === "saved" ? "Contact Saved" : "Save Contact"}
              </Button>

              <Button
                variant="outline"
                onClick={handleShareProfile}
                className="h-12 w-full rounded-xl border-white/10 bg-white/[0.04] text-sm font-semibold text-white backdrop-blur-xl transition-all hover:border-[#FFD400]/30 hover:bg-white/[0.07] active:scale-[0.98]"
              >
                <Share2 className="size-4 text-[#FFD400]" />
                {shareState === "copied" ? "Link Copied" : "Share Profile"}
              </Button>
            </motion.div>

            <motion.p
              variants={itemVariants}
              className="mt-5 text-center text-[10px] tracking-[0.2em] text-white/25 uppercase"
            >
              Powered by TAP TECH
            </motion.p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
