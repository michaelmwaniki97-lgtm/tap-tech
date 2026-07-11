export const profile = {
  name: "Michael Mwaniki",
  title: "AI Developer",
  company: "TAP TECH",
  bio: "Building smart digital experiences that help professionals connect instantly. Passionate about AI, NFC, and the future of networking.",
  phone: "+254700000000",
  email: "michael@taptech.co",
  website: "https://tap-tech.vercel.app",
  linkedin: "https://linkedin.com/in/taptech",
  whatsapp: "254700000000",
  location: {
    label: "Nairobi, Kenya",
    url: "https://maps.google.com/?q=Nairobi,Kenya",
  },
  initials: "MM",
} as const;

export function getProfileUrl() {
  if (typeof window !== "undefined") {
    return window.location.href;
  }
  return "https://tap-tech.vercel.app/profile";
}

export function buildVCard() {
  const { name, title, company, phone, email, website, location } = profile;

  return [
    "BEGIN:VCARD",
    "VERSION:3.0",
    `FN:${name}`,
    `N:${name.split(" ").reverse().join(";")};;;`,
    `TITLE:${title}`,
    `ORG:${company}`,
    `TEL;TYPE=CELL:${phone}`,
    `EMAIL;TYPE=INTERNET:${email}`,
    `URL:${website}`,
    `ADR;TYPE=WORK:;;${location.label};;;;`,
    "END:VCARD",
  ].join("\r\n");
}
