# Portfolio Website - Diego Martínez

## Project Overview

A modern, immersive portfolio website built with Astro, React, and Framer Motion. The design features a dark theme with elegant animations and out-of-the-box visual effects.

## Tech Stack

- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion (motion/react)
- **Package Manager**: Bun
- **Build**: Static site generation

## Key Features

### Visual Design
- Dark theme with navy (#0a0a0a) background
- Custom cursor with smooth follow animation
- Animated gradient orbs floating in background
- Grid pattern overlay for depth
- Glassmorphism effects on cards

### Animations (Framer Motion)
- Staggered hero text reveal on load
- Custom cursor that follows mouse movement
- Scroll progress bar at top
- 3D tilt effect on project cards (mouse-tracking)
- Smooth skill bar animations on scroll
- Floating background orbs with continuous motion
- Section reveals with fade-up animations

### Sections
1. **Hero**: Full-screen intro with animated name reveal
2. **Work**: Project cards with hover 3D effects
3. **About**: Skills with animated progress bars
4. **Experience**: Timeline with gradient line
5. **Contact**: Contact form with gradient buttons

## Project Structure

```
portfolio2026/
├── src/
│   ├── components/
│   │   ├── Portfolio.tsx      # Main React component with all sections
│   │   ├── Header.astro       # Navigation header
│   │   ├── Footer.astro       # Footer component
│   │   └── ThemeToggle.astro  # Theme toggle (if needed)
│   ├── layouts/
│   │   └── Layout.astro       # Base layout
│   ├── pages/
│   │   ├── index.astro        # Main portfolio page
│   │   └── blog.astro        # Blog placeholder
│   └── styles/
│       └── globals.css        # Global styles & CSS variables
├── public/                    # Static assets
├── astro.config.mjs          # Astro configuration
├── package.json              # Dependencies
└── tsconfig.json             # TypeScript config
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

## Design System

### Colors
- Primary: `#0b3d91` (Navy Blue)
- Accent: `#7c3aed` (Purple)
- Background: `#0a0a0a` (Near Black)
- Surface: `#111111` (Dark Gray)
- Text: `#ffffff` (White)
- Text Muted: `#71717a` (Gray)

### Typography
- Sans: Inter
- Display: Space Grotesk

## Animation Details

The portfolio uses sophisticated Framer Motion animations:

- **Stagger Children**: Hero text animates with 0.1s delay between items
- **3D Card Tilt**: Project cards respond to mouse position with rotation
- **Scroll Progress**: Smooth spring animation tied to scroll position
- **Floating Orbs**: Continuous parallax movement with varying durations

## Customization

To customize content, edit `src/components/Portfolio.tsx`:
- Update `skills` array with your skills
- Modify `projects` array with your work
- Edit `experience` array with your history
- Update contact information in the Contact section

## Notes

- The blog page is a placeholder - can be expanded with a CMS
- Uses Tailwind CSS v4 with @theme directive for CSS variables
- All animations are progressively enhanced (work without JS but enhanced with)
- Fully responsive design with mobile-first approach
