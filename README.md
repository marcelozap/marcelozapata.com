# Marcelo Zapata

Artist homepage built with Next.js for the existing marcelozapata.com Vercel project. The September 2026 direction brings songs, guitar, production, MaloSound, and XIV together through Marcelo’s point of view.

## Local development

Run `npm ci`, then `npm run dev`. Run `npm run build` for a production check. No environment variables are required for the local preview.

## Public content

- `content/home.ts`: introduction and connected MaloSound / XIV project copy.
- `content/site.ts`: public contact details, confirmed social links, metadata, and show dates. Empty or past schedules stay hidden.
- `components/SessionPlayer.tsx`: opt-in playback of the supplied acoustic performance. No autoplay or media download before interaction.
- `public/media/guitar-session.mp4`: web conversion of Marcelo’s supplied September 16 recording, with original audio and frame timing preserved.
- `public/images/malosound-orbit.webp`: existing MaloSound brand artwork, converted for the web. Decorative artwork, not live market data.
- `public/images/future-studio.webp`: the imagined coastal studio concept from the creative direction session. Its visible caption identifies it as a future concept and an AI-generated visual; it does not represent a current residence or owned gear.
- `app/opengraph-image.tsx`: matching portrait-free social sharing card. Uses the PNG orbit asset for renderer compatibility and local fonts.

The earlier portrait asset remains available but is not displayed. The performance is revealed only when someone chooses to play it.

## Bookings

`/book` redirects to the homepage booking section. The existing `POST /api/booking` endpoint uses Resend when configured, with an email-app fallback. Environment variable names are documented in `.env.example`; credentials do not belong in source control.

## Review status

This redesign is prepared in the isolated `codex/artist-world` branch/worktree for visual review. It has not been deployed to the public domain. The original local checkout’s uncommitted files are preserved.
