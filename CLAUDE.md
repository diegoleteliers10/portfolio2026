# Portfolio Website - Diego Letelier

## Project Overview

Personal portfolio website for Diego Letelier - Software & Data Engineer | AI. Built with Astro, React, and Framer Motion featuring a clean, modern design with animations.

## Tech Stack

- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (motion/react)
- **Package Manager**: Bun
- **Deployment**: Vercel

## Key Features

### Visual Design
- Clean light theme (#f2f2f2 background)
- Dashed borders on cards and buttons
- Smooth animations and transitions

### Sections
1. **Hero**: Full-screen intro with animated text reveal
2. **Work**: Project cards with hover effects (Biovity, GigSy, Dashboard Analytics, ML Models)
3. **About**: Skills with level indicators (Avanzado/Intermedio/Básico)
4. **Experience**: Timeline (Biovity, indies.la, Telefónica)
5. **Contact**: Contact form with links to email and LinkedIn

## Project Structure

```
portfolio2026/
├── src/
│   ├── components/
│   │   ├── Portfolio.tsx      # Main React component with all sections
│   │   ├── Header.astro       # Navigation header
│   │   ├── Footer.astro       # Footer component
│   │   └── ThemeToggle.astro  # Theme toggle
│   ├── layouts/
│   │   └── Layout.astro       # Base layout with SEO meta tags
│   ├── pages/
│   │   ├── index.astro        # Main portfolio page
│   │   └── blog.astro         # Blog placeholder
│   └── styles/
│       └── globals.css        # Global styles
├── public/
│   ├── favicon.svg
│   ├── robots.txt
│   └── sitemap.xml
├── astro.config.mjs           # Astro configuration
└── package.json               # Dependencies
```

## Commands

```bash
# Install dependencies
bun install

# Development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Customization

To customize content, edit `src/components/Portfolio.tsx`:
- Update `skills` array with skills and levels
- Modify `projects` array with your projects
- Edit `experience` array with your work history
- Update contact information in the Contact section

## SEO

The site includes comprehensive SEO optimization:
- Meta titles and descriptions
- Open Graph and Twitter Card tags
- JSON-LD structured data (Person, WebSite schemas)
- robots.txt and sitemap.xml
- Canonical URLs
