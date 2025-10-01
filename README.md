# Falkenberg NEXT 🚀

En modern, interaktiv landing page för Falkenberg NEXT - framtidens stadsdel i Falkenberg.

## ✨ Features

- **3D Tilt Effects** - Interaktiva bilder med djup och dimension
- **Smooth Animations** - Framer Motion animationer som triggas vid scroll
- **Progress Timeline** - Visuell tidslinje som visar projektets framsteg
- **Interactive Map** - Klickbar karta med markörer för olika områden
- **Metrics Dashboard** - Animated counters som räknar upp statistik
- **News Section** - Filtrerbar nyhetssektion med kategorier
- **Parallax Effects** - Mjuka parallax-effekter för djup
- **Responsive Design** - Fungerar perfekt på alla enheter
- **Optimerade Bilder** - Next.js Image för snabb laddning

## 🛠️ Tech Stack

- **Next.js 15** - React framework med App Router
- **TypeScript** - Type-safe kod
- **Tailwind CSS v4** - Utility-first CSS
- **Framer Motion** - Kraftfull animations-library
- **React Parallax Tilt** - 3D tilt effekter
- **React CountUp** - Animated number counters
- **React Intersection Observer** - Scroll-triggered animations

## 🚀 Kom igång

### Installation

\`\`\`bash
npm install
\`\`\`

### Development

\`\`\`bash
npm run dev
\`\`\`

Öppna [http://localhost:3000](http://localhost:3000) i din browser.

### Build för produktion

\`\`\`bash
npm run build
npm start
\`\`\`

## 📁 Projektstruktur

\`\`\`
falkenberg-next/
├── app/
│   ├── layout.tsx          # Root layout med metadata
│   ├── page.tsx            # Huvudsida
│   └── globals.css         # Global styling + Tailwind
├── components/
│   ├── Hero.tsx            # Hero sektion med 3D tilt
│   ├── DreamBigger.tsx     # Parallax sektion
│   ├── ProgressTracker.tsx # Timeline komponent
│   ├── MetricsDashboard.tsx # Statistik med counters
│   ├── NewsSection.tsx     # Nyheter med filter
│   ├── InteractiveMap.tsx  # Interaktiv karta
│   ├── AnimatedSection.tsx # Utility för animationer
│   └── RemainingSection.tsx # Övriga sektioner
├── public/
│   └── images/             # Bilder för projektet
├── next.config.ts
├── tailwind.config.ts
└── tsconfig.json
\`\`\`

## 🎨 Anpassa Innehållet

### Uppdatera Timeline
Editera \`components/ProgressTracker.tsx\` och ändra \`events\` array:

\`\`\`typescript
const events: TimelineEvent[] = [
  {
    year: '2024',
    quarter: 'Q3',
    title: 'Din Händelse',
    description: 'Beskrivning här',
    status: 'completed' | 'in-progress' | 'planned'
  },
  // ...
];
\`\`\`

### Uppdatera Nyheter
Editera \`components/NewsSection.tsx\` och ändra \`newsItems\` array.

### Uppdatera Statistik
Editera \`components/MetricsDashboard.tsx\` och ändra \`metrics\` array.

### Uppdatera Kartan
Editera \`components/InteractiveMap.tsx\` och ändra \`markers\` array med x/y koordinater (procent).

## 🌐 Deploy till Vercel

Enklaste sättet att deploya är via Vercel:

1. Pusha projektet till GitHub
2. Gå till [vercel.com](https://vercel.com)
3. Importera ditt repo
4. Vercel detekterar automatiskt Next.js och deployer!

### Alternativ: Deploy via CLI

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## 🎯 Framtida Features att Lägga Till

- **CMS Integration** - Lägg till Sanity/Contentful för enkel contentredigering
- **Kontaktformulär** - Integration med formspree eller liknande
- **Google Maps** - Ersätt statisk karta med Google Maps
- **Språkväxling** - Svenska/Engelska
- **Dark Mode** - Mörkt tema
- **Analytics** - Google Analytics eller Plausible
- **Newsletter** - Mailchimp integration
- **Video Background** - Hero med video
- **3D Models** - Three.js visualisering av byggnader

## 📝 Original Design

Den ursprungliga statiska sidan finns kvar i \`index.html\` i root-mappen.

## 📄 License

© 2024 Falkenbergs Kommun

## 🤝 Kontakt

**Mattias Fornell**
Näringslivsutvecklare
070-231 88 40
mattias.fornell@falkenberg.se

**Emma Carlström**
Näringslivschef
070-208 56 03
emma.carlstrom@falkenberg.se

---

Byggt med ❤️ för Falkenberg NEXT