# CMS & Internationalization Plan
**Falkenberg NEXT - Content Management & Translation Strategy**

---

## 🎯 Mål

- Enkelt underhålla content utan att lära sig ny plattform
- Automatisk översättning Svenska → Engelska
- Snygg language selector med globus-ikon
- Allt programmatiskt via Git/JSON
- Paul kan uppdatera via Claude eller direkt i JSON-filer

---

## 📁 Content Structure

```
/content
  /sv                      # Svenska (master)
    - hero.json           # Hero section
    - sections.json       # Alla sections
    - metrics.json        # Siffror & fakta
    - timeline.json       # Projektet framåt
    - contact.json        # Kontaktinfo
    - metadata.json       # SEO & Open Graph

  /en                      # English (AI-genererad)
    - hero.json
    - sections.json
    - metrics.json
    - timeline.json
    - contact.json
    - metadata.json
```

---

## 🔄 Workflow

### Variant A: Paul uppdaterar direkt
```bash
1. Öppna content/sv/hero.json i VSCode
2. Ändra texten
3. Kör: npm run translate
4. Commit & push
5. Auto-deploy
```

### Variant B: Paul ber Claude (enklast!)
```
Paul: "Uppdatera hero-texten till 'Ny text här' och översätt"

Claude:
  ✓ Uppdaterar /content/sv/hero.json
  ✓ Kör translation script
  ✓ Uppdaterar /content/en/hero.json
  ✓ Committar allt
  ✓ Deployer
```

---

## 🤖 Translation Pipeline

### Setup
```bash
# Installera dependencies
npm install @google/generative-ai dotenv

# Lägg till i .env.local
GEMINI_API_KEY=your_key_here
```

### Script: scripts/translate.js
```javascript
// Läser alla JSON-filer i /content/sv
// För varje fil:
//   - Skickar till Gemini 2.5 Flash
//   - Översätter text (behåller struktur)
//   - Sparar till /content/en/[samma-fil].json
// Snabbt, billigt, bra kvalitet
```

### NPM Commands
```json
{
  "scripts": {
    "translate": "node scripts/translate.js",
    "translate:watch": "nodemon scripts/translate.js"
  }
}
```

---

## 🌍 i18n Implementation

### Tech Stack
- **next-intl** (bäst för Next.js 15)
- Middleware för locale detection
- `/sv` och `/en` routes

### Routing
```
https://falkenberg-next.vercel.app/sv    → Svenska
https://falkenberg-next.vercel.app/en    → English
https://falkenberg-next.vercel.app/      → Redirect till /sv (default)
```

### Middleware Setup
```typescript
// middleware.ts
import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['sv', 'en'],
  defaultLocale: 'sv'
});
```

### Component Usage
```typescript
// I komponenter:
import { useTranslations } from 'next-intl';

// Eller direkt från JSON:
import heroContent from '@/content/[locale]/hero.json';
```

---

## 🎨 Language Selector

### Design (från referensbild)
```
┌─────────────────────┐
│  🌐  English  ▼     │  ← Outline version (light bg)
└─────────────────────┘

┌─────────────────────┐
│  🌐  English  ▼     │  ← Filled version (dark bg)
└─────────────────────┘
```

### Placering
- I Navbar (top right)
- Sticky, alltid synlig
- Mobile: Kompakt version

### Funktionalitet
- Dropdown med SV/EN
- Sparar val i localStorage
- Smooth transition mellan språk
- Behåller scroll position

---

## 📝 Example Content Files

### content/sv/hero.json
```json
{
  "title": "NU\nÅKER\nVI!",
  "paragraphs": [
    "En byggnad är färdig, en annan planeras. Området kring stationen börjar ta form. Falkenberg NEXT händer nu.",
    "Därför söker vi fastighetsutvecklare som med kunskap, erfarenhet och driv vill hjälpa oss att flytta gränserna för vad som är möjligt för Falkenberg, Halland, Västkusten och Sverige."
  ]
}
```

### content/sv/sections.json
```json
{
  "qualityOfLife": {
    "title": "LIVSKVALITET\nMED UTSIKT",
    "paragraphs": [
      "I Falkenberg kombinerar vi affärsmöjligheter med en livskvalitet som är svår att slå...",
      "Våra medarbetare och företagare får det bästa av två världar..."
    ]
  },
  "readySetBuild": {
    "title": "KLARA.\nFÄRDIGA.\nBYGG.",
    "paragraphs": [...]
  }
}
```

### content/sv/metrics.json
```json
{
  "metrics": [
    {
      "value": 27000,
      "label": "Kvadratmeter",
      "description": "Total projektarea med färdig detaljplan"
    },
    {
      "value": 7,
      "label": "Våningar",
      "description": "Max höjd för centrum- och kontorsbyggnader"
    }
  ]
}
```

---

## 🚀 Implementation Steps

### Phase 1: Content Structure (1-2 timmar)
- [ ] Skapa `/content` mapp
- [ ] Extrahera all text till JSON-filer
- [ ] Uppdatera komponenter att läsa från JSON
- [ ] Testa att allt fungerar som innan

### Phase 2: Translation Setup (1 timme)
- [ ] Installera Gemini SDK
- [ ] Skapa translation script
- [ ] Testa översättning av en fil
- [ ] Generera alla EN-filer

### Phase 3: i18n Routing (2 timmar)
- [ ] Installera next-intl
- [ ] Setup middleware
- [ ] Konfigurera `/sv` och `/en` routes
- [ ] Uppdatera alla komponenter att använda locale

### Phase 4: Language Selector (1 timme)
- [ ] Designa komponenten
- [ ] Implementera dropdown
- [ ] Lägg till i Navbar
- [ ] Testa på mobile & desktop

### Phase 5: Testing & Deploy (30 min)
- [ ] Testa alla sidor på båda språk
- [ ] Testa language switcher
- [ ] Testa Open Graph för båda språk
- [ ] Deploy till produktion

**Total tid: ~6-7 timmar**

---

## 💰 Kostnad

### Gemini 2.5 Flash API
- **Input:** $0.075 per 1M tokens
- **Output:** $0.30 per 1M tokens

**Estimering för detta projekt:**
- ~5000 ord content = ~7000 tokens
- Översättning: ~$0.002 per körning
- **Kostnad per månad:** ~$0.10 (om ni uppdaterar 50 gånger/månad)

**= Praktiskt taget gratis! 🎉**

---

## 🔧 Maintenance

### Uppdatera Content (framöver)

**Alternativ 1: Direkt i JSON**
```bash
1. Öppna content/sv/[fil].json
2. Ändra text
3. npm run translate
4. git add . && git commit -m "Update content" && git push
```

**Alternativ 2: Via Claude**
```
Paul: "Ändra hero-titeln till 'FRAMTIDEN ÄR HÄR' och översätt"
Claude: [Gör allt automatiskt]
```

**Alternativ 3: Bulk-uppdatering**
```
Paul: "Uppdatera alla metrics siffror och översätt"
Claude: [Uppdaterar metrics.json för båda språk]
```

---

## 🎁 Bonusfunktioner (framtida utbyggnad)

### Om ni vill senare:
- **Fler språk:** Lägg till `/de` (tyska), `/no` (norska)
- **Content preview:** Lokalt dev-server med hot-reload
- **Translation memory:** Cache översättningar för konsistens
- **Auto-deploy:** GitHub Action som översätter vid push
- **Dashboard:** Enkel Next.js-sida för att se alla översättningar

---

## 📚 Tech Stack Summary

| Layer | Technology | Why |
|-------|-----------|-----|
| Content Storage | JSON files in Git | Simple, versioned, no database |
| Translation | Gemini 2.5 Flash API | Cheap, fast, good quality |
| i18n Framework | next-intl | Best for Next.js 15 |
| Routing | Next.js App Router | `/sv` and `/en` routes |
| Language Selector | Custom React component | Full control, matches design |
| Deployment | Vercel | Already setup, auto-deploy |

---

## ✅ Success Criteria

- ✓ Paul kan uppdatera content på < 2 minuter
- ✓ AI-översättning händer automatiskt
- ✓ Ingen ny plattform att lära sig
- ✓ Snygg language selector på alla sidor
- ✓ SEO fungerar för båda språk
- ✓ Open Graph images för båda språk
- ✓ Mobile-friendly

---

## 🚦 Next Steps

**Paul beslutar:**
1. Ska vi köra denna plan?
2. Vill du göra Phase 1 nu? (content structure)
3. Några ändringar i planen?

**När du säger go:**
- Claude påbörjar implementation
- Varje phase committas separat
- Du kan testa efter varje steg

---

**Skapad:** 2025-01-XX
**Status:** ⏳ Väntar på godkännande
**Estimerad tid:** 6-7 timmar totalt
**Kostnad:** ~$0.10/månad (Gemini API)
