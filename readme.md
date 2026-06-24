# Lifty Design System

**Lifty** is a local urban ride-hailing app for Villa Dolores, Córdoba, Argentina — a city of ~30,000 people. It connects passengers with trusted local drivers for quick, safe trips. Think DiDi/Uber but local, human, and close.

**Product:** Passenger mobile app (Android-first, Expo/React Native target)  
**Market:** Villa Dolores, Córdoba, Argentina  
**Currency:** Argentine Pesos ($)  
**Language:** Argentine Spanish ("vos", "pedir", "viaje")

---

## Sources

- `uploads/Lifty - Pasajero.pen` — Pencil design file with 21 screens (JSON format, parsed in full)
- `uploads/Direccion visual LIFTY 2.pdf` — Visual direction PDF (not accessible at build time; token decisions derived from the .pen file color/type usage)

---

## CONTENT FUNDAMENTALS

### Voice & Tone
- **Close, warm, local.** Not a global tech giant — a neighbor with a car.
- **Vos-treatment** throughout: "¿A dónde vas?", "Pedí tu viaje", "Llegaste".
- **No corporate English leftovers.** Never "Submit", "Cancel", "Continue" — always "Pedir auto", "Cancelar solicitud", "CONTINUAR".
- **Reassuring in errors.** "No te preocupes, no se aplicó ningún cargo." — calm, not alarming.
- **Tip-style nudges** prefixed with 💡 for soft guidance: "¿Necesitás pedir otro viaje?"
- **Bullet-free UX copy.** Sentences, not lists, for descriptions.

### Casing
- **CTAs / primary buttons:** FULL UPPERCASE with letter-spacing (e.g., `PEDIR VIAJE`, `CONFIRMAR VIAJE · $2.000`)
- **Headings:** Sentence case ("¿Cómo te llamás?", "Verificá tu número")
- **Labels / nav:** Title case for section headers; lowercase for sub-labels
- **Prices:** Always prefixed with `$` and no decimals for round amounts: `$2.000`, `$1.500`

### Emoji usage
Used sparingly and purposefully — not decorative:
- 🇦🇷 Country flag in phone prefix
- 🏠💼🏛️ Place type icons in quick destinations
- ⭐ Ratings
- 💡 Tips / nudges
- 🆘 Emergency actions only
- 🎉 Celebration on arrival
- Never in body copy or headings

### Sample copy
| Context | Copy |
|---|---|
| Home greeting | `¡Hola, Martina! 👋` |
| CTA | `SOLICITAR VIAJE · $2.000` |
| Empty state | `Todavía no tenés viajes` |
| Wait reassurance | `El conductor te espera hasta 5 min` |
| Cancel success | `No te preocupes, no se aplicó ningún cargo.` |
| Error | `Código incorrecto. Intentá de nuevo.` |
| Permission ask | `Tu ubicación solo se usa durante el viaje y no se comparte.` |

---

## VISUAL FOUNDATIONS

### Color system
- **Brand teal `#00C2B3`** — primary CTA, active tab, origin pin, accent. High energy, trust.
- **Brand navy `#0D1F2D`** — dark screen backgrounds (login, onboarding), status bar on dark screens.
- **Navy range `#0D2B45` → `#1E3A5F`** — card bg on dark, map fill. Creates depth.
- **Orange `#F5A623`** — destination pin only; also warning/demand banners. Never primary.
- **White `#FFFFFF` + Neutral-50 `#F4F7FA`** — surfaces, cards, bottom sheets.

### Typography
- **Typeface:** Inter exclusively (all weights 400–800)
- **No serif, no mono** in product UI
- **Display size:** 42px / 800 weight — brand name "Lifty" on splash/login only
- **Body:** 14–15px / 400 — main content
- **CTAs:** 15px / 700 / uppercase / 0.10em letter-spacing
- **Captions:** 12px / 400 — pricing notes, sub-labels

### Backgrounds
- **Login / onboarding:** Full dark navy `#0D1F2D` — immersive, no distractions
- **Map screens:** Linear gradient `135deg, #152D4A → #1E3A5F` — simulated map depth
- **Content screens:** White `#FFFFFF` with `#F4F7FA` for inset cards/inputs
- **No textures, no patterns, no photography in UI chrome**

### Layout
- **Mobile canvas:** 390 × 844px (standard Android viewport)
- **Status bar:** 44px — dark on dark screens, light on white screens
- **Header:** 56px — left back arrow + title centered or left-aligned
- **Content:** flex-1, scrollable
- **Bottom sheet:** white card with `border-radius: 24px 24px 0 0`, drag handle (36×4px rounded bar)
- **Tab bar:** 64px — 3 items, teal active / neutral-300 inactive
- **Screen padding:** 24px horizontal

### Cards
- **Background:** `#F4F7FA` (subtle) or `#FFFFFF` with `box-shadow: 0 4px 12px rgba(13,31,45,.10)`
- **Radius:** 14–16px
- **Padding:** 14–20px

### Buttons
- **Primary CTA:** Full-width pill, `border-radius: 9999px`, height 52–56px, teal bg, white text, uppercase
- **Dark CTA:** Navy bg — used on dark screens (login)
- **Outline:** Transparent + 1.5px border — secondary action ("Seguir con el viaje")
- **Destructive outline:** Red border + red text ("Cancelar viaje")
- **Ghost:** Transparent, brand-teal text ("Cambiar →")
- **Press state:** `scale(0.98)` + `opacity: 0.85`
- **No gradient buttons** — solid flat color only

### Animations
- **Sheet entrance:** `translateY + spring easing (0.34, 1.56, 0.64, 1)`, 350ms
- **Fade-in:** `opacity 250ms ease` for screen transitions
- **Bounce-in:** scale 0.6 → 1.1 → 1 for celebration states
- **Spinner:** 0.7s linear infinite rotation for loading CTAs
- **Pulse ring:** Scale + opacity loop for live location pins
- **No parallax, no complex page transitions in MVP**

### Hover / Press states
- **Buttons:** scale(0.98) + opacity 0.85 on touch/press
- **List rows:** Background shifts to `#F4F7FA` on press
- **No hover states** (mobile-first; hover is irrelevant)

### Shadows
- **Cards:** `0 4px 12px rgba(13,31,45,.10)` — soft, warm-tinted
- **Bottom sheets:** `0 -4px 24px rgba(13,31,45,.10)` — upward glow
- **CTA buttons:** `0 4px 16px rgba(0,194,179,.28)` — brand-tinted glow
- **No hard drop shadows**

### Corner radii
- Buttons/pills: 9999px
- Cards/sheets bottom: 16px
- Sheet top corners: 24px
- Inputs: 12–14px
- Small chips: 8px
- Badges: 9999px

### Imagery
- No photography in app chrome
- Map simulated with linear gradient + road lines
- Emoji used as icon substitutes for place types only (🏠💼🏛️)

---

## ICONOGRAPHY

Icons are **not** from a named icon system in the source files. The .pen file uses:
- **Unicode/emoji** for place type icons (🏠, 💼, 🏛️) and decorative moments (🎉, 💡, 🆘)
- **Inline SVG** for nav icons (home, clock, person) in the TabBar and StatusBar components
- **Lucide-style stroke icons** (2px stroke, round linecap) for search, location pin, settings

⚠️ **FLAG:** No icon font or sprite sheet was found in source materials. The design system uses hand-authored SVGs at 16–24px with stroke style. For production, Lucide Icons (https://lucide.dev) is the closest CDN-available match in terms of stroke weight and geometric style.

Assets location: `assets/`  
Logos: `assets/logo.svg` (pending — see Brand card)

---

## FILE INDEX

```
styles.css                    ← CSS entry point (import only)
tokens/
  colors.css                  ← Full color palette + semantic aliases
  typography.css              ← Type scale + role tokens
  spacing.css                 ← 4px grid + semantic layout tokens
  radii.css                   ← Border radius scale
  shadows.css                 ← Elevation / shadow system
  motion.css                  ← Duration + easing tokens
  fonts.css                   ← @import Inter from Google Fonts ⚠️

components/
  actions/   Button.jsx .d.ts .prompt.md + buttons.card.html
  forms/     Input.jsx  .d.ts + inputs.card.html
  feedback/  Badge.jsx  .d.ts + badges.card.html
  display/   Avatar.jsx StarRating.jsx Card.jsx .d.ts files + display.card.html
  navigation/ TabBar.jsx StatusBar.jsx .d.ts files + navigation.card.html

ui_kits/
  pasajero/
    index.html               ← Interactive prototype (all screens, click-through)
    OnboardingScreens.jsx    ← Login, Verify, Register, Permissions
    HomeScreens.jsx          ← Home, Search, Vehicle selection, Confirm
    TripScreens.jsx          ← Searching, Assigned, InProgress, Reminder, Finished, Cancel
    OtherScreens.jsx         ← Profile, Trips, Payment, Addresses, No Connection

guidelines/
  colors-brand.card.html
  colors-neutrals.card.html
  colors-semantic.card.html
  colors-map.card.html
  type-scale.card.html
  type-on-dark.card.html
  type-buttons.card.html
  spacing-scale.card.html
  spacing-layout.card.html
  radii-shadows.card.html

assets/                      ← Logos, icons (pending brand PDF access)
```

---

## COMPONENTS

| Component | Location | Props |
|---|---|---|
| `Button` | `components/actions` | variant, size, fullWidth, disabled, loading, destructive |
| `Input` | `components/forms` | label, prefix, suffix, error, hint, surface (light/dark) |
| `Badge` | `components/feedback` | variant (9 options), size, dot |
| `Avatar` | `components/display` | name, src, size (xs–2xl) |
| `StarRating` | `components/display` | value, onChange, size, readonly |
| `Card` | `components/display` | variant, padding, radius, shadow |
| `TabBar` | `components/navigation` | active, onNavigate |
| `StatusBar` | `components/navigation` | variant (dark/light), time |

---

## CAVEATS

1. **Font:** Inter loaded from Google Fonts CDN. Replace with local `.woff2` files in production for performance and offline support.
2. **Visual direction PDF** was listed as an attachment but not accessible at build time. All tokens were derived from the `.pen` design file. If the PDF contains additional brand assets (logo SVG, color palette), please re-share so the design system can be updated.
3. **Icon system:** No icon library found in source materials. Lucide Icons (stroke, 2px) recommended as a CDN-based match.
4. **Map:** Simulated with CSS gradients. Production app will use a real map SDK (Google Maps / Mapbox).
5. **Screens not yet built as interactive:** Full rating detail flow, support/chat screen, ride history with past trips populated.
