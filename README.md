# TTT Construction Ltd — Company Website

A modern company website built for a residential construction business in New Zealand. The site introduces the company, walks through its service areas, and shows representative project capabilities.

**Live site:** https://ttt-construction-ltd.vercel.app

## Overview

This is a frontend-only Next.js project. All content is pre-rendered at build time, so the site loads quickly and behaves well for visitors discovering the business through search.

The business goal is straightforward — give homeowners and property developers a clean, mobile-friendly first impression of the company and a clear way to get in touch.

## Tech Stack

- **Next.js** (App Router) with static generation
- **React** and **TypeScript**
- **Tailwind CSS** for layout and styling
- **Framer Motion** for scroll and reveal animations
- **Vercel** for deployment (automatic builds on push to `main`)
- ESLint for code quality

## Key Features

- Dynamic `/projects/[slug]` pages, statically generated at build time.
- Mobile-first responsive layout with tablet and desktop breakpoints.
- Scroll-driven reveals using `IntersectionObserver` and Framer Motion.
- Glass-style visual treatment with subtle motion.
- Semantic HTML, meta tags, and Open Graph for SEO.
- Contact form with client-side validation.

## Screenshots

![Homepage hero](screenshots/homepage-hero.jpg)
*Homepage hero introducing the construction business.*

![About and services](screenshots/about-services-section.jpg)
*About section followed by the services overview.*

![Project capabilities](screenshots/project-capabilities.jpg)
*Project capabilities grid linking through to detail pages.*

## Project Structure

```
ttt-construction-ltd/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                # Homepage
│   └── projects/[slug]/
│       └── page.tsx            # Dynamic project detail pages
├── components/
│   ├── project-detail/
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Reveal.tsx
│   └── SectionHeading.tsx
├── lib/data/projects.ts        # Project data with TypeScript interfaces
├── public/images/
├── screenshots/
└── styles/globals.css
```

## Setup

```bash
git clone https://github.com/zj115/ttt-construction-ltd.git
cd ttt-construction-ltd
npm install
npm run dev
```

Visit http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## Environment Variables

None required. The project is a static frontend with no backend services or external APIs.

## Project Work

I built this as a frontend project for a residential construction business. The design brief was "modern but trustworthy" — not too tech-startup, not too corporate.

I set up the Next.js App Router with static generation for the project detail pages, and put the project data in a small TypeScript module so the four detail pages share a single source of truth. Animations are handled with Framer Motion through a reusable `<Reveal>` wrapper, which keeps the per-section markup clean.

Tailwind handles the layout and the glass-style surface treatment. The site is deployed on Vercel with automatic builds on push.

## Security and Privacy

No production credentials, API keys, or customer data are included in this repository. Screenshots use generic content that doesn't expose real client information.

## Future Improvements

- Add a small CMS layer (Sanity or Contentful) so the team can edit content without code changes.
- Wire the contact form to a backend with email notifications.
- Add a blog or news section for construction tips and company updates.
- Integrate Google Analytics or a privacy-friendly alternative.

## License

*Shared for portfolio and demonstration purposes only. Commercial reuse is not permitted without permission.*
