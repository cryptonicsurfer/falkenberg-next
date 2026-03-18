# Falkenberg NEXT

Marketing/landing page for the Falkenberg NEXT urban development project.

## Tech Stack

- **Framework**: Next.js 15 (App Router, Turbopack dev)
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (auto-deploy on push to `main`)
- **Repo**: `cryptonicsurfer/falkenberg-next`

## Project Structure

```
app/           → Next.js App Router (layout, page, globals.css)
components/    → All page sections as separate components
public/images/ → Static assets (hero image, maps, logos)
```

## Key Components

| Component | Section | Notes |
|-----------|---------|-------|
| `Hero.tsx` | Hero banner | "NU ÅKER VI!" with CTA pill → #contact |
| `Navbar.tsx` | Navigation | Sticky top nav |
| `InsightsTabs.tsx` | Insikter & Data | Tab system (Översikt & Senaste Nytt currently hidden) |
| `MetricsDashboard.tsx` | Fakta & Siffror | 2x3 stat cards, shown inside InsightsTabs |
| `NewsSection.tsx` | Senaste Nytt | News content (currently hidden via tab) |
| `ProgressTracker.tsx` | Projektet Framåt | Vertical timeline with milestone cards |
| `DreamBigger.tsx` | Falkenberg drömmer större | Vision section |
| `QualityOfLife.tsx` | Livskvalitet | Quality of life stats |
| `InteractiveMap.tsx` | Karta | Location/map section |
| `WestCoastMapSVG.tsx` | Västkusten | SVG map of west coast |
| `RemainingSection.tsx` | Multiple | Falkenberg Växer + Contact (#contact) section |
| `ImageCarousel.tsx` | Bildkarusell | Image slideshow |

## Design System

- **Colors**: Purple (`purple-bg`, `purple-light`), Yellow (`yellow-bright`), Dark text (`dark-text`)
- **Typography**: Montserrat (headings), system font stack (body)
- **Patterns**: Rounded cards, tilt effects (`react-parallax-tilt`), scroll-triggered animations

## Commands

```bash
npm run dev    # Dev server with Turbopack
npm run build  # Production build
npm run lint   # ESLint
```
