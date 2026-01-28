# CLAUDE.md

This file provides guidance for Claude Code when working with this repository.

## Project Overview

FlipAI marketing website - a static landing page for an AI-powered fix-and-flip real estate deal analysis tool. Hosted on GitHub Pages at getflipai.com.

## Tech Stack

- **Framework**: Astro 5.x (static site generator)
- **Styling**: Tailwind CSS 3.x
- **Language**: TypeScript (strict mode)
- **Deployment**: GitHub Pages via GitHub Actions

## Commands

```bash
npm run dev      # Start dev server at localhost:4321
npm run build    # Build production site to ./dist/
npm run preview  # Preview production build locally
```

## Project Structure

```
src/
├── pages/index.astro      # Main landing page
├── layouts/Layout.astro   # Base HTML template
├── components/            # Astro components (Nav, Hero, Features, etc.)
└── styles/global.css      # Tailwind directives & component classes
public/
├── screenshots/           # Product screenshots
└── favicon.svg/ico        # Site favicons
```

## Code Patterns

### Astro Components
- Logic goes in frontmatter (between `---` markers)
- Data-driven: define arrays in frontmatter, map to render
- Interactive features use vanilla JS in `<script>` blocks
- SVG icons stored as strings, rendered with `set:html`

### Styling
- Use Tailwind utility classes directly
- Custom component classes defined in `src/styles/global.css`:
  - `.btn-primary`, `.btn-secondary` - button styles
  - `.section-heading`, `.section-subheading` - typography

### Design System
- Primary color: navy (#0f2942)
- Accent color: burnt orange (#c27c4e)
- Font: Inter (Google Fonts)

## Architecture Notes

- Single-page site with anchor navigation (#features, #pricing, etc.)
- No backend - email signup handled via ConvertKit external API
- All components are Astro (.astro files), no React/Vue
- Mobile-first responsive design using Tailwind breakpoints (md:, lg:)

## Deployment

Push to `main` triggers GitHub Actions workflow that builds and deploys to GitHub Pages.
