// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "Music & performances",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "My mom calls me Chelo. People call me Marcy. I sing and write songs in English and Spanish, on piano and guitar.",
  // Public-facing email (also used as the mailto fallback before Resend is configured)
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
  },
  // Leave any of these empty ("") and its panel is hidden on the homepage.
  links: {
    shows: "/#shows",
    music: "", // e.g. YouTube / Spotify artist link
    patreon: "",
    discord: "",
    venmo: "",
    cashapp: "",
    contact: "/#book",
  },
};

export const eventTypes = [
  "Restaurant residency",
  "Hotel lobby / lounge",
  "Private dinner",
  "Wedding or engagement",
  "Corporate event",
  "Other",
];

// Public schedule. Leave the array empty to hide the section.
// Residencies listed here; add note: "Live on TikTok" for streamed nights.
export type ScheduleItem = {
  date: string; // ISO date, e.g. "2026-09-19"
  time: string; // "7:00–10:00 PM"
  venue: string;
  area: string; // neighborhood / city
  note?: string; // "Live on TikTok", "Private event", etc.
  url?: string; // venue link, optional
};

export const schedule: ScheduleItem[] = [];
