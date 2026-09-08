# marcelozapata.com

Booking site for Marcelo Zapata — solo piano & voice, Miami. Next.js 15, deployed on Vercel.

## Run locally

```
npm install
npm run dev
```

## Edit content

Everything that changes is in `content/site.ts`: email, socials, event types, what-to-expect cards,
repertoire, and the public schedule. Add rows to `schedule` and the Schedule section appears; past dates hide themselves.

Photo: drop `public/marcelo.jpg` and swap the placeholder block in `app/page.tsx` (comment marks the spot).

## Booking form

`POST /api/booking` sends the request by email through [Resend](https://resend.com).

Until `RESEND_API_KEY` is set, submitting the form opens the visitor's mail app with the request pre-filled
and addressed to the email in `content/site.ts` — nothing is lost, it just isn't automatic.

To turn on direct delivery, add these in Vercel → Project → Settings → Environment Variables (see `.env.example`):

- `RESEND_API_KEY` — from resend.com (free tier)
- `BOOKING_TO_EMAIL` — where requests land
- `BOOKING_FROM_EMAIL` — `onboarding@resend.dev` works immediately; use `bookings@marcelozapata.com` once the domain is verified in Resend

`/book` redirects to the form — use `marcelozapata.com/book` as the link in bios.
