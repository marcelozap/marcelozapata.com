// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "Solo piano & voice",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "Marcelo Zapata — solo piano and vocals for restaurants, hotels, private dinners and events in Miami. Soft, elegant, unhurried. Book a night.",
  // Public-facing email (also used as the mailto fallback before Resend is configured)
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
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

export const whatToExpect = [
  {
    title: "Sets built for the room",
    body: "Two to four hours of continuous music, played at a level that lets people talk. Tempo and volume follow the night — softer for the first seating, warmer as the room fills.",
  },
  {
    title: "Self-contained",
    body: "I bring my own keyboard, sound and lighting. All I need is a corner, one outlet, and about fifteen minutes to set up. If you have a house piano, even better.",
  },
  {
    title: "Requests welcome",
    body: "Guests can ask. Birthdays, anniversaries and proposals get handled quietly and well.",
  },
];

export const repertoire = [
  {
    heading: "Standards & jazz",
    songs: ["Fly Me to the Moon", "The Way You Look Tonight", "Misty", "La Vie en Rose", "Autumn Leaves"],
  },
  {
    heading: "Soul, pop & film",
    songs: ["Make You Feel My Love", "Stand by Me", "Your Song", "Perfect", "Can't Help Falling in Love"],
  },
  {
    heading: "Latin & boleros",
    songs: ["Bésame Mucho", "Sabor a Mí", "Historia de un Amor", "Contigo en la Distancia", "Piel Canela"],
  },
  {
    heading: "Instrumental",
    songs: ["Clair de Lune", "Gymnopédie No. 1", "River Flows in You", "Nuvole Bianche", "Comptine d'un autre été"],
  },
];

// Public schedule. Leave the array empty to hide the section.
// Sylvia-Ruth model: residencies listed here, streamed live on TikTok.
export type ScheduleItem = {
  date: string; // ISO date, e.g. "2026-09-19"
  time: string; // "7:00–10:00 PM"
  venue: string;
  area: string; // neighborhood / city
  note?: string; // "Live on TikTok", "Private event", etc.
  url?: string; // venue link, optional
};

export const schedule: ScheduleItem[] = [];
