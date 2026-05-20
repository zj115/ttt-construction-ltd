# TTT Construction Ltd — Company Website

A full-stack web application built for a New Zealand construction company, featuring dynamic project pages, responsive design, and modern UI interactions.

**Live Demo:** [https://ttt-construction-ltd.vercel.app](https://ttt-construction-ltd.vercel.app)

## Screenshots

### Homepage Hero Section
![Homepage Hero](screenshots/homepage-hero.jpg)

### About & Services
![About and Services](screenshots/about-services-section.jpg)

### Project Capabilities
![Project Capabilities](screenshots/project-capabilities.jpg)

## Tech Stack

### Frontend
- **Next.js 16** — React framework with App Router for server-side rendering and static generation
- **React 19** — Component-based UI library
- **TypeScript** — Type-safe development
- **Tailwind CSS** — Utility-first CSS framework for responsive design
- **Framer Motion** — Animation library for smooth transitions and interactions

### Development Tools
- **ESLint** — Code linting and quality checks
- **PostCSS** — CSS processing and optimization
- **Vercel** — Deployment platform with automatic CI/CD

## Key Features

- **Dynamic Routing** — `/projects/[slug]` pages generated at build time using Next.js App Router
- **Static Site Generation (SSG)** — All pages pre-rendered for optimal performance
- **Responsive Design** — Mobile-first approach with breakpoints for tablet and desktop
- **Glass Morphism UI** — Modern frosted glass aesthetic with backdrop blur effects
- **Scroll Animations** — Intersection Observer API with Framer Motion for reveal effects
- **SEO Optimized** — Meta tags, Open Graph, and semantic HTML structure
- **Type Safety** — Full TypeScript coverage across components and data layers

## Project Structure

```
ttt-construction-ltd/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with metadata
│   ├── page.tsx                 # Homepage
│   └── projects/[slug]/         # Dynamic project detail pages
│       └── page.tsx
├── components/                   # React components
│   ├── project-detail/          # Project page components
│   │   ├── ProjectHero.tsx
│   │   ├── ProjectOverview.tsx
│   │   ├── ProjectTimeline.tsx
│   │   ├── ProjectGallery.tsx
│   │   ├── ProjectMaterials.tsx
│   │   └── ProjectCTA.tsx
│   ├── Hero.tsx                 # Homepage hero section
│   ├── About.tsx                # About section
│   ├── Services.tsx             # Services grid
│   ├── Projects.tsx             # Project capabilities grid
│   ├── Contact.tsx              # Contact form
│   ├── Navbar.tsx               # Navigation bar
│   ├── Footer.tsx               # Footer component
│   ├── Reveal.tsx               # Scroll reveal wrapper
│   └── SectionHeading.tsx       # Reusable section heading
├── lib/
│   └── data/
│       └── projects.ts          # Centralized project data with TypeScript interfaces
├── public/
│   └── images/                  # Static assets
└── styles/
    └── globals.css              # Global styles and Tailwind config

```

## Component Architecture

| Component | Purpose | Key Technologies |
|-----------|---------|------------------|
| `Hero` | Landing section with CTA | Framer Motion, Tailwind animations |
| `About` | Company introduction | Glass morphism cards, responsive grid |
| `Services` | Service offerings grid | Lucide icons, hover effects |
| `Projects` | Project capabilities with links | Next.js Link, dynamic routing |
| `Contact` | Contact form | Form validation, responsive layout |
| `Navbar` | Navigation with mobile menu | React state, smooth scroll |
| `Reveal` | Scroll-triggered animations | Intersection Observer, Framer Motion |
| `ProjectHero` | Detail page hero | Next.js Image, gradient overlays |
| `ProjectTimeline` | Construction phases | Structured data display |

## Data Layer

The project uses a centralized data architecture in `lib/data/projects.ts`:

```typescript
interface Project {
  slug: string;
  name: string;
  projectType: string;
  scope: string;
  suitableFor: string;
  location: string;
  keyWork: string[];
  image: string;
  detailPage: ProjectDetail;
}
```

This approach provides:
- Single source of truth for project data
- Type safety with TypeScript interfaces
- Easy content updates without touching component code
- Scalable structure for adding new projects

## Installation

```bash
# Clone the repository
git clone https://github.com/zj115/ttt-construction-ltd.git
cd ttt-construction-ltd

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Build & Deploy

```bash
# Create production build
npm run build

# Start production server
npm start
```

The project is configured for automatic deployment on Vercel. Every push to the `main` branch triggers a new deployment.

## Development Workflow

1. **Local Development** — `npm run dev` starts the Next.js development server with hot reload
2. **Type Checking** — TypeScript checks run automatically during build
3. **Linting** — ESLint enforces code quality standards
4. **Build Verification** — `npm run build` validates all pages compile correctly
5. **Git Commit** — Changes committed with descriptive messages
6. **Automatic Deployment** — Vercel deploys on push to main branch

## Technical Highlights

### Performance
- Static generation for instant page loads
- Image optimization with Next.js Image component
- CSS-in-JS with Tailwind for minimal bundle size
- Lazy loading for images and components

### Code Quality
- TypeScript for type safety and better IDE support
- Component-based architecture for reusability
- Centralized data layer separating content from presentation
- Consistent naming conventions and file structure

### User Experience
- Smooth scroll animations with Framer Motion
- Responsive design tested across devices
- Accessible navigation and semantic HTML
- Fast page transitions with Next.js routing

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Security & Privacy

- No sensitive data stored in repository
- Environment variables properly configured
- No API keys or credentials in codebase
- Client-side only application (no backend)

## License

This project is a portfolio demonstration piece.

---

**Built by:** Zicong Jiang  
**Institution:** MIT (Manukau Institute of Technology)  
**Program:** Bachelor of Information Technology  
**Year:** 2025
