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

// True once at least one music/support link above is filled in. Used to show/hide
// the Music section and its nav link together, so they never disagree.
export const showMusicSection = Boolean(
  site.links.music || site.links.patreon || site.links.venmo || site.links.cashapp
);

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

// Full TikTok video URLs to embed on the TikTok section, most recent first.
// e.g. "https://www.tiktok.com/@malosound/video/1234567890123456789"
// Leave empty to show just the follow button.
export const tiktokPosts: string[] = [];
