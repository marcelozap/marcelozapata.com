// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "Songs in English and Spanish",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "Songs in English and Spanish. Guitar, voice, and production. Marcelo Zapata’s music.",
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
    spotify: "https://open.spotify.com/search/Marcelo%20Zapata",
  },
  links: {
    shows: "/#shows",
    music: "https://open.spotify.com/search/Marcelo%20Zapata",
    patreon: "",
    discord: "",
    venmo: "",
    cashapp: "",
    contact: "/#book",
  },
};

export const eventTypes = [
  "Collaboration",
  "Session",
  "A hello",
  "Other",
];

export type ScheduleItem = {
  date: string;
  time: string;
  venue: string;
  area: string;
  note?: string;
  url?: string;
};

export const schedule: ScheduleItem[] = [];
