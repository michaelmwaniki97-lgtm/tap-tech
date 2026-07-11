import type { Metadata } from "next";
import ProfileCard from "@/components/profile/profile-card";
import { profile } from "@/lib/profile-data";

export const metadata: Metadata = {
  title: `${profile.name} | ${profile.company}`,
  description: profile.bio,
  openGraph: {
    title: `${profile.name} — ${profile.title}`,
    description: profile.bio,
    type: "profile",
  },
};

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-[#090909] text-white">
      <ProfileCard />
    </main>
  );
}
