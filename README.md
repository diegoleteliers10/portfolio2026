# Diego Letelier - Portfolio

Personal portfolio website showcasing my work as a Software & Data Engineer | AI.

## Tech Stack

- **Framework**: Astro 5.x with React
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Package Manager**: Bun
- **Deployment**: Vercel

## Features

- Responsive design with light theme
- Smooth scroll animations
- Project showcase with dashed borders
- Skills with level indicators (Avanzado/Intermedio/Básico)
- Experience timeline
- Contact form
- SEO optimized (meta tags, Open Graph, JSON-LD, sitemap)

## Getting Started

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run preview
```

## Project Structure

```
src/
├── components/
│   └── Portfolio.tsx    # Main component with all sections
├── layouts/
│   └── Layout.astro     # Base layout with SEO
├── pages/
│   └── index.astro      # Main page
└── styles/
    └── globals.css      # Global styles
```

## Customization

Edit `src/components/Portfolio.tsx` to update:
- Skills (`skills` array)
- Projects (`projects` array)
- Experience (`experience` array)
- Contact info

## Deployment

Deploy to Vercel with:

```bash
vercel deploy
```

Or connect your GitHub repository to Vercel for automatic deployments.

## License

MIT
