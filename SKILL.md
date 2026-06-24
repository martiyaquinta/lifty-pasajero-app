---
name: lifty-design
description: Use this skill to generate well-branded interfaces and assets for Lifty, a local ride-hailing app for Villa Dolores, Córdoba, Argentina. Contains essential design guidelines, colors, type, fonts, assets, and UI kit components for prototyping the passenger app and any future surfaces.
user-invocable: true
---

Read the README.md file within this skill, and explore the other available files.

If creating visual artifacts (screens, flows, mocks, prototypes, slides, etc), copy assets out and create static HTML files for the user to view. Use the tokens from `styles.css` and reference the component JSX files in `components/`.

If working on production code (React Native / Expo), read the token files in `tokens/` to extract CSS custom properties as JS constants, and use the component `.d.ts` files to understand the props API for each UI primitive.

Key context:
- App is Android-first, mobile-first (390px canvas)
- All copy in Argentine Spanish using "vos" treatment
- Primary brand color: #00C2B3 (teal), dark bg: #0D1F2D (navy)
- Font: Inter (all weights, Google Fonts)
- CTAs are full-width pill buttons, UPPERCASE, letter-spaced
- Bottom tab bar: Inicio / Mis Viajes / Perfil
- Prices in Argentine Pesos: $2.000 format (dot as thousands separator)

If the user invokes this skill without any other guidance, ask them what they want to build or design, ask some questions about the screen/flow/component they need, and act as a senior Product Designer who outputs HTML prototypes or React Native component code depending on the need.
