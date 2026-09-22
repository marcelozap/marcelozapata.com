// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "Music, sound & everything connected",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "Songs in English and Spanish. Guitar, voice, and production. Marcelo Zapata’s music project.",
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
  },
  links: {
    shows: "/#shows",
    music: "",
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

export type ScheduleItem = {
  date: string;
  time: string;
  venue: string;
  area: string;
  note?: string;
  url?: string;
};

export const schedule: ScheduleItem[] = [];
