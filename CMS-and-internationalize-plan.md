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

## 🔄 Workflow (Super Enkelt!)

### Så här funkar det:
```
1. Paul får updates från projektteamet
   (email, telefon, meetings - ofta ostrukturerat/tal-språk)

   Exempel:
   "Hej! Förra veckan blev byggnaden klar, jättebra!
    3 företag intresserade. Oj och kommunen godkände planen
    i torsdags. Emma har ny telefon: 070-123..."

2. Paul: "Här är lite updates från projektet:"
   [copy/paste från email eller skriver sammanfattning]

3. Claude: "Ok, jag ser:
   📰 2 nyheter (byggnad klar + plan godkänd)
   👤 Kontakt uppdatering (Emma ny telefon)
   Stämmer det? Vilken kategori på första nyheten?"

4. Paul: "Ja! Första är Byggnation"

5. Claude:
   ✓ Tolkar och strukturerar texten
   ✓ Skapar snygga rubriker & excerpts
   ✓ Uppdaterar /content/sv/*.json
   ✓ Översätter till /content/en/*.json
   ✓ Committar & deployar

6. Klart! Båda språken uppdaterade på 2-3 minuter
```

### Verkligt Exempel
```
Paul: "Hej, här är vad som hänt:

Byggnaden vid stationen äntligen klar! Tre företag redan
intresserade. Kommunen godkände detaljplan fas 2 i torsdags,
siktar på byggstart mars 2025."

Claude: "Perfekt! Jag tolkar det som:

📰 Nyhet 1: 'Första byggnaden invigd' (Byggnation)
📰 Nyhet 2: 'Detaljplan fas 2 godkänd' (Utveckling)
📅 Timeline: 'Byggstart fas 2' (Mars 2025)

Kör jag?"

Paul: "Kör!"

Claude: ✓ Skapar 2 nyheter med snygga rubriker
        ✓ Lägger till timeline event
        ✓ Översätter allt till engelska
        ✓ Deployar

        Klart! 🚀
```

---

## 🤖 Translation & Content Parsing (Automatiskt!)

### Inget script, inget API, inga dependencies!

**Claude hanterar:**
- ✅ Tolkar ostrukturerade updates (email, tal-språk, meetings)
- ✅ Strukturerar till snygga JSON-fält
- ✅ Skapar rubriker och excerpts från "messy" text
- ✅ Översätter till perfekt engelska
- ✅ Rensar bort signatures, hälsningar, etc.
- ✅ Frågar om oklarheter (kategori, datum, etc.)

**Du behöver aldrig:**
- ❌ Skriva JSON själv
- ❌ Tänka på struktur
- ❌ Formatera text
- ❌ Översätta manuellt
- ❌ Committa eller deploya

**Bara copy/paste updates från teamet - Claude gör resten!**

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

### Phase 2: Initial Translation (30 min)
- [ ] Claude översätter all befintlig content till engelska
- [ ] Generera alla EN-filer
- [ ] Granska översättningarna

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

**Total tid: ~5-6 timmar** (sparar 1 timme utan script setup!)

---

## 💰 Kostnad

**$0** - Helt gratis! 🎉

Ingen API-kostnad eftersom Claude översätter direkt i chatten.
Du betalar redan för Claude Code, så översättning ingår.

---

## 🔧 Maintenance

### Uppdatera Content (framöver)

**Så enkelt som det kan bli:**

```
Paul: [Får email/txt från projektteamet med nya texter]

Paul: "Hej Claude, här är uppdaterad text:
[klistrar in]
Uppdatera content och översätt till engelska"

Claude:
  ✓ Läser texten
  ✓ Uppdaterar content/sv/*.json
  ✓ Översätter till content/en/*.json
  ✓ Committar & deployar

Paul: "Tack! 🚀"
```

**Det är allt!** Ingen kod, inga scripts, inga API-nycklar.

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

**Skapad:** 2025-01-07
**Uppdaterad:** 2025-01-07
**Status:** 📋 Plan klar, implementeras vid senare tillfälle
**Estimerad tid:** 5-6 timmar totalt
**Kostnad:** $0 (Claude Code översätter direkt)
