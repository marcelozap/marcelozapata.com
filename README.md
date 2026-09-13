# Marcelo Zapata

Personal music website for Marcelo Zapata (Chelo / Marcy), built with Next.js and deployed on the existing Vercel project.

## Local development

Run `npm install`, then `npm run dev`. Use `npm run build` for a production check.

## Public content

- `content/home.ts`: introduction, story and the music / MaloSound / XIV connection.
- `content/site.ts`: email, social links and confirmed public show dates. Empty or past schedules are hidden.
- Performances stay on Instagram and TikTok; no embedded media is required.
- A portrait is optional. Only use a confirmed image of Marcelo.

## Bookings

`/book` redirects to the homepage booking section. The existing `POST /api/booking` endpoint uses Resend when configured, with an email-app fallback. Environment variable names are documented in `.env.example`; credentials do not belong in source control.

Only the public music site is included here. Local planning tools and communication drafts are not part of the published application.
