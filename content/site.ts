// Everything on the site that changes lives here. Edit this file, push, done.

export const site = {
  name: "Marcelo Zapata",
  tagline: "Software engineer, musician, and builder of useful systems.",
  city: "Miami, FL",
  url: "https://marcelozapata.com",
  description:
    "Marcelo Zapata is a software engineer and Florida State University graduate with 4+ years working with AI. He builds applications, integrations, and automation, from enterprise warehouse systems to Vela Tennis.",
  email: "marcelozapata00@gmail.com",
  socials: {
    instagram: "https://instagram.com/marcelozapatamusic",
    tiktok: "https://tiktok.com/@malosound",
    spotify: "https://open.spotify.com/artist/4hdF3VHgVpZA7wIVDY6DdE",
    youtube: "https://www.youtube.com/shorts/ORnQzXVgnic",
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
