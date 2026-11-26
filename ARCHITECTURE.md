# Royal Trek application structure

The repository keeps the public website and CMS responsibilities separated.

## Frontend

`frontend/` contains the public Royal Trek website pages and the public catalogue boundary:

- `frontend/pages/PublicSite.tsx` — public home, trek, destination, tour, journal, about, and contact pages.
- `frontend/data/public-catalog.ts` — the public read boundary; only published CMS records are exposed to the website.

The Next.js App Router lives in `app/`. It provides the web entrypoint and API route handlers while the existing React page composition is mounted through `src/App.tsx`.

## CMS/backend boundary

`backend/cms/` contains the existing CMS/admin implementation and its supporting records:

- `backend/cms/layouts/AppShell.tsx` — existing CMS shell.
- `backend/cms/pages/DashboardPages.tsx` — existing dashboard and management pages.
- `backend/cms/data/demo.ts` — current CMS/demo records.
- `backend/cms/components`, `routes`, `services`, and `types` — CMS support modules.

The CMS implementation was moved without redesigning or replacing it. CMS routes remain available under `/admin` and the existing management paths. The Next.js API handlers remain under `app/api/` because that is the framework's server route boundary.

The current repository still uses demo/local records; a durable database-backed CMS persistence layer has not yet been confirmed.
