# Ansari Huzair — Portfolio

Personal portfolio built with Next.js 15, TypeScript, Tailwind CSS v4, and Framer Motion.

## Setup

```bash
# Prerequisites: Node 20+
npm install
```

## Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Deploy to Vercel

1. Push to a GitHub repository
2. Import the repo at [vercel.com/new](https://vercel.com/new)
3. Set `NEXT_PUBLIC_SITE_URL` environment variable to your domain (e.g. `https://huzair.dev`)
4. Deploy — Vercel auto-detects Next.js

## Customization

- **Content:** Edit `src/lib/projects.ts` and `src/lib/skills.ts`
- **Colors:** CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark)
- **Resume:** Replace `public/Ansari_Huzair_Resume.pdf` with your actual PDF

## Placeholders

- `public/Ansari_Huzair_Resume.pdf` — add your actual resume PDF
- `public/favicon.ico` — replace with a custom favicon
- `NEXT_PUBLIC_SITE_URL` — set to your domain before deploying

## Suggested Follow-ups

- Add project screenshots to `public/images/` and wire them into `ProjectCard`
- Set up a custom domain on Vercel
- Add Google Analytics or Plausible
