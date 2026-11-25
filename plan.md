# Trekking Agency Dashboard — Implementation Plan

## Scope and approach

Build a managed full-stack web application for a trekking and adventure travel agency. The first increment delivers the premium dashboard experience and the core information architecture: authenticated-style admin shell, responsive sidebar/topbar, overview analytics, content and trekking navigation, interactive quick actions, global search, notification affordances, and representative management views for packages, itineraries, destinations, enquiries, bookings, media, and settings. The UI will use local typed seed data with an explicit “demo data / not connected” treatment until the API and database layers are implemented.

The architecture is intentionally modular so the same presentation primitives can be connected to Node/Express REST endpoints and a relational database in later increments. Navigation is route-driven, reusable table/card/form patterns are centralized, and domain data is typed by feature.

## Design exploration

- Expedition editorial desk — 0.07 probability: calm whitespace, editorial typography, route cards, and restrained trail-orange accents.
- Mountain operations desk — 0.05 probability: deep charcoal surfaces, high-contrast status, and dense operational panels.
- **Royal Trek field desk — 0.08 probability (chosen):** premium trekking operations UI that pairs charcoal navigation with trail-orange wayfinding, warm stone surfaces, and compact editorial hierarchy.

### Chosen design system

- **Design movement:** Royal Trek field desk; a contemporary expedition-journal sensibility translated into a high-clarity CMS control room.
- **Core principles:** calm density, operational clarity, warm human details, and progressive disclosure.
- **Color philosophy:** deep charcoal anchors trust and groundedness; trail orange marks actions and wayfinding; moss supports status; warm stone neutrals keep the interface breathable.
- **Layout paradigm:** a fixed command rail and offset content canvas, with wide editorial hero bands and asymmetric two-column operational panels instead of a uniform centered grid.
- **Signature elements:** contour-line background texture, orange “trail marker” status dots, and compact route chips for region/difficulty/status.
- **Interaction philosophy:** every affordance should reveal consequence quickly: active nav states, visible selection feedback, actionable empty states, and filter/search controls that narrow data in place.
- **Animation:** subtle 160–220ms ease-out transitions for hover, nav selection, drawer entry, and chart emphasis; no looping decorative motion.
- **Typography system:** Manrope for interface/UI copy; DM Serif Display for editorial display moments such as the greeting and section titles. Use strong 12–14px labels, 16–18px body copy, and 30–42px display hierarchy.
- **Brand essence:** an operations desk for teams who move people through mountains safely and beautifully; grounded, capable, welcoming.
- **Brand voice:** concise, observant, and action-oriented. Example lines: “Keep the next departure moving.” and “A clear view of every trail, traveller, and story.”
- **Wordmark & logo:** a compact contour-line peak mark paired with a lowercase wordmark, used as a simple CSS/SVG lockup in the sidebar.
- **Signature brand color:** trail orange `#F47529`, grounded by deep charcoal `#151515`.

## Product architecture

### Frontend

- React + Vite + TypeScript.
- Tailwind CSS for tokens and responsive composition, with a small CSS layer for the editorial texture and custom font loading.
- React Router for route-driven pages.
- Lucide React for interface icons.
- Recharts for dashboard and analytics visualizations.
- Feature modules under `src/features/` with shared primitives under `src/components/`.
- Local typed demo data in `src/data/` with status metadata so analytics are never presented as connected production statistics.

### Backend and persistence path

The managed project is provisioned with server and database capability. The follow-up increment will add an Express REST API, validation, auth middleware, and a relational schema. The current UI keeps an API boundary in `src/services/` so replacing demo data with TanStack Query-backed endpoints does not require rewriting views.

### Planned project structure

```text
src/
  components/      shared buttons, badges, cards, tables, charts, logo
  data/            typed demo records and chart series
  features/        dashboard, packages, itinerary, customers, content modules
  layouts/         app shell, sidebar, topbar
  pages/           route-level screens
  routes/          route definitions and navigation metadata
  services/        data access boundary and future API clients
  types/           shared domain and UI types
  utils/           formatting and navigation helpers
  App.tsx
  main.tsx
public/
  manus-routes.json
```

## Frontend visual refresh — Royal Trek CMS

The CMS frontend uses a compact modern trekking-agency system: deep charcoal `#151515` for navigation and authority, trail orange `#F47529` for actions and wayfinding, warm stone `#F7F5F0` for the canvas, moss `#486052` for supporting states, and ink `#1B1B1B` for readable content. Manrope handles all interface copy and DM Serif Display is reserved for editorial page headings so the UI feels operational without losing a travel-story character. The shell keeps a fixed command rail on desktop, collapses to a slide-out drawer on mobile, uses touch-safe controls, and avoids AI-like assistant surfaces or decorative noise.

## Delivery sequence

1. Dashboard shell and route manifest with responsive navigation.
2. Overview dashboard with clearly labelled demo analytics, recent enquiries, upcoming departures, and quick actions.
3. Representative operational pages for packages, itineraries, destinations, enquiries, bookings, media, and settings with functional filtering/search/tabs.
4. API/database layer, authentication, RBAC, and persistence.
5. CMS modules, SEO, media upload, and editorial workflows.
6. Analytics integrations, audit logs, settings, and production hardening.

## Material constraints

- Do not claim analytics are live until GA4/Search Console integrations are configured.
- Use local demo data only for the initial UI and label it in the interface.
- Keep all route declarations synchronized with `public/manus-routes.json`.
- Use the configured preview port 3000 and declare the dev command through the managed runtime configuration.
- Do not add decorative photography to the internal dashboard; operational clarity takes priority.
