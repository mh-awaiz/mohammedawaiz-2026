# Mohammed Awaiz — Portfolio

A dark-themed, particle-animated developer portfolio built with Next.js 15 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## What's inside

- **Hero** — animated intro with resume download + projects CTA
- **About** — bio + quick stats
- **Tech Stack** — grouped by Frontend / Backend / Database / AI & Tools
- **Projects** — all 7 live projects (CViEx, Webraft Studio, StockIQ, Kapil Store, Qalbi Couture, The Destination Planners, TRS)
- **Contact** — working form (posts to `/api/contact`) + direct email/LinkedIn/Instagram links
- **Header/Footer** — LinkedIn, Instagram, and Email icons always visible
- **ParticleField** — signature ambient constellation background, mouse-reactive, capped particle count for 60fps, respects `prefers-reduced-motion`
- SEO: Metadata API, Open Graph, Twitter cards, JSON-LD (Person schema), `robots.ts`, `sitemap.ts`, canonical URL

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

> Note: `next/font/google` needs internet access to fetch Inter and Space Grotesk at build/dev time. This is normal — it just needs to run somewhere with regular internet access (your machine, Vercel, etc.).

## Wiring up the contact form to actually send email

The form posts to `app/api/contact/route.ts`. Right now it logs submissions to the server console. To have it actually deliver email:

1. Create a free account at resend.com and grab an API key.
2. Create `.env.local` in the project root:
   ```
   RESEND_API_KEY=re_xxxxxxxxxxxx
   CONTACT_TO_EMAIL=awaizshamshad@gmail.com
   ```
3. Restart the dev server. Submissions will now be emailed to you.

(You can swap Resend for EmailJS or any other provider — the form just needs `POST /api/contact` to return `{ ok: true }` on success.)

## Editing content

All project cards, tech stack groups, and social links live in one place:

```
data/content.ts
```

Update project names, descriptions, tech stack, or links there — no need to touch the components.

## Deploying

The easiest path is Vercel:

```bash
npm i -g vercel
vercel
```

Add `RESEND_API_KEY` and `CONTACT_TO_EMAIL` as environment variables in the Vercel dashboard if you want the contact form to send real emails.

## Project structure

```
app/
  layout.tsx            — fonts, metadata, JSON-LD
  page.tsx               — assembles all sections
  globals.css             — design tokens (colors, type)
  api/contact/route.ts    — contact form handler
  robots.ts, sitemap.ts
components/
  ParticleField.tsx       — canvas constellation background
  Header.tsx, Hero.tsx, About.tsx, TechStack.tsx,
  Projects.tsx, Contact.tsx, Footer.tsx
data/
  content.ts               — projects, tech stack, social links
public/
  Mohammed_Awaiz_Resume.pdf
```
