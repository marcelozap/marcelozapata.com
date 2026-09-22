// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "I write songs and build the sound around them.",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "I write songs and build the sound around them. Guitar, voice, everything after.",
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
    spotify: "https://open.spotify.com/artist/4hdF3VHgVpZA7wIVDY6DdE",
    youtube: "https://www.youtube.com/@marcelozapataofficial",
  },
  links: {
    shows: "/#shows",
    music: "https://open.spotify.com/artist/4hdF3VHgVpZA7wIVDY6DdE",
    patreon: "",
    discord: "",
    venmo: "",
    cashapp: "",
    contact: "/#hello",
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
