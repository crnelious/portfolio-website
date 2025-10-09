# Cornelious Williams – Portfolio Site

A personal portfolio for showcasing product design and front-end work. The site highlights selected projects, current collaborations, and background information in a clean, accessibility-minded layout.

## Features

- Animated hero section with quick bio and current/previous roles
- Project gallery with hover interactions and lock states for private work
- Dedicated About page detailing experience, education, and contact links
- Responsive layout tuned for small screens (adjusted spacing, stacked sections)
- Image handling with `next/image` and optimized assets under `public/projects`
- Motion and scroll reveals powered by Framer Motion

## Tech Stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Getting Started

```bash
# install dependencies
npm install

# start the dev server
npm run dev

# build for production
npm run build
```

Visit `http://localhost:3000` while the dev server is running.

## Project Structure

```
src/
  app/
    page.tsx          # Home page with project grid
    about/page.tsx    # About page with timeline + contact icons
    layout.tsx        # Shared shell & metadata
    globals.css       # Global styles & Tailwind layers
  components/
    GradientOrb.tsx   # Reusable gradient graphic
public/
  projects/
    <project-name>/   # Project hero assets
```

## Updating Content

- **Projects:** Edit the array inside `src/app/page.tsx`. Each entry controls a card in the grid. Images belong in `public/projects/<project-name>/`.
- **About page:** Update copy blocks in `src/app/about/page.tsx`. Contact icons live in `/public/icons`.
- **Branding:** Global typography and colors can be adjusted in `src/app/globals.css`.

## Deployment

The site can be deployed to any platform that supports Node.js (Vercel, Netlify, Render, etc.). Run `npm run build` and follow your host’s instructions—no extra configuration files are required.

---

This project is maintained by Cornelious Williams. Feel free to adapt it for future portfolio iterations.
