# TTT Construction Ltd — Company Website

A responsive company website built for a residential construction business in New Zealand. Built with Next.js, React, TypeScript, and Tailwind CSS.

## Live Demo

🔗 **Deployed on Vercel:** [View Live Site](https://ttt-construction-ltd.vercel.app)

## Overview

This is a single-page application showcasing a construction company's services, projects, and contact information. The site includes responsive layouts, animated sections, and a clean glass-style interface suitable for clients browsing on any device.

The project uses component-based architecture, TypeScript for type safety, and Next.js App Router for optimized performance.

## Tech Stack

### Frontend
- **Next.js** - React framework with App Router
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **lucide-react** - Icon library

### Fonts
- **Inter** - Body text
- **Space Grotesk** - Headings
- **Instrument Serif** - Accent text

### Deployment
- **Vercel** - Hosting and continuous deployment

## Features

- **Responsive Design** - Mobile-first approach, works on all screen sizes
- **Smooth Animations** - Scroll-triggered animations using Framer Motion
- **Glass Morphism UI** - Clean glass-style design aesthetic
- **SEO Optimized** - Proper metadata and Open Graph tags
- **Component-Based Architecture** - Modular, reusable React components
- **Type Safety** - Full TypeScript implementation
- **Contact Form** - Interactive form for client inquiries
- **Project Gallery** - Showcase of completed construction projects
- **Service Sections** - Detailed breakdown of construction services offered

## Project Structure

```
ttt-construction-ltd/
├── app/
│   ├── layout.tsx          # Root layout with fonts and metadata
│   ├── page.tsx            # Main homepage composition
│   └── globals.css         # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx          # Navigation bar with smooth scroll
│   ├── Hero.tsx            # Landing section with CTA
│   ├── About.tsx           # Company introduction
│   ├── Services.tsx        # Service offerings
│   ├── Projects.tsx        # Project gallery
│   ├── Process.tsx         # Construction process timeline
│   ├── Contact.tsx         # Contact form
│   ├── Footer.tsx          # Footer with links
│   └── ...                 # 14 additional components
├── public/
│   ├── images/             # Construction project images
│   └── videos/             # Video assets
├── .gitignore              # Git ignore rules
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── next.config.ts          # Next.js configuration
└── README.md               # Project documentation
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm installed
- Git installed

### Local Development

1. Clone the repository:
```bash
git clone https://github.com/zj115/ttt-construction-ltd.git
cd ttt-construction-ltd
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and navigate to:
```
http://localhost:3000
```

### Production Build

To create an optimized production build:

```bash
npm run build
npm run start
```

The build output will be in the `.next` folder.

## Deployment

This project is configured for Vercel deployment:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build settings
4. Deploy with default settings (no environment variables required)

The site will be live at your Vercel-provided URL.

## Component Overview

The application is built with modular, reusable components:

| Component | Purpose |
|-----------|---------|
| `Navbar` | Sticky navigation with smooth scroll links |
| `Hero` | Landing section with video background |
| `About` | Company background and mission |
| `Services` | Construction services offered |
| `TrustBar` | Trust indicators and certifications |
| `HomeBuildScope` | Scope of home building services |
| `Projects` | Gallery of completed projects |
| `Process` | Step-by-step construction process |
| `QuotationProcess` | How to get a quote |
| `Specifications` | Build specifications and standards |
| `BuildPlanning` | Planning and design services |
| `PaymentSchedule` | Payment terms and milestones |
| `Handover` | Project completion and handover process |
| `WhyChooseUs` | Company differentiators |
| `Testimonials` | Client reviews and feedback |
| `FAQ` | Frequently asked questions |
| `Contact` | Contact form and information |
| `Footer` | Site footer with links |

## Screenshots

### Desktop View
![Homepage Hero](./public/screenshots/homepage-hero.png)
![Services Section](./public/screenshots/services.png)

### Mobile View
![Mobile Responsive](./public/screenshots/mobile-view.png)

*Screenshots to be added*

## Design

The UI uses a dark glass-style theme with subtle animations and responsive layouts to create a clean and modern browsing experience.

## My Contribution

I developed this project from scratch, including the component architecture, responsive layouts, animations, TypeScript implementation, SEO optimization, and Vercel deployment setup.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance

Built with performance-focused practices using Next.js App Router and optimized assets.

## Future Improvements

- Add a blog section for construction tips and updates
- Implement a project management dashboard for clients
- Add multi-language support (English/Māori)
- Integrate a CMS for easier content updates
- Add backend API for form submissions with email notifications
- Implement analytics tracking (Google Analytics)

## Notes

This repository is shared for portfolio and demonstration purposes.

## Security & Privacy

- No production credentials or environment variables are included in this repository
- Sensitive business information has been removed
- The project uses environment-based configuration for deployment
- Public assets are used for demonstration purposes only

## License

This repository is shared for portfolio and demonstration purposes only.

---

**Developed by:** Zicong Jiang  
**GitHub:** [@zj115](https://github.com/zj115)  
**Year:** 2025
