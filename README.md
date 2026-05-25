# SIMTECHINDO 3D Web

Digital Solution Partner for Healthcare & Enterprise — company website built with React, TypeScript, Vite, and Three.js.

## Tech Stack

- **React 19** + TypeScript
- **Vite** for bundling
- **Tailwind CSS v4** for styling
- **Three.js** (`@react-three/fiber`, `@react-three/drei`) for 3D hero visuals
- **Framer Motion** for animations
- **GSAP** for scroll animations
- **Lucide React** for icons
- **React Router v7** for routing
- **i18next**-style language switching (ID/EN)

## Scripts

```bash
npm install
npm run dev      # Start dev server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Project Structure

```
src/
├── components/
│   ├── layout/      # Navbar, Footer, FloatingWhatsApp, BackToTopButton, PageLoader
│   ├── sections/    # HeroSection, ServicesSection, SolutionsSection, etc.
│   └── three/       # Three.js 3D components (HeroCanvas)
├── hooks/           # useThemeMode, useLanguageMode, useScrollDirection
├── i18n/            # translations (ID/EN)
├── pages/           # AboutUsPage, TeamsPage, PortfolioPage, OurClientsPage, ServiceDetailPage
├── App.tsx          # Root component with routing
├── main.tsx         # Entry point
└── index.css        # Tailwind + global styles
```