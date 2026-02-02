# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a Next.js web application for exploring Nepal's election candidates data from the 2082 (2025) election cycle. It displays 3000+ candidates with filtering, search, and analytics features.

## Key Commands

### Development
- **Start dev server**: `npm run dev` (runs on port 3000)
- **Production build**: `npm run build`
- **Start production**: `npm run start`

### Linting
- **Run ESLint**: `npm run lint`

## Architecture Overview

### Tech Stack
- **Next.js 14** (App Router) with **TypeScript**
- **Tailwind CSS** + **shadcn/ui** for styling
- **Recharts** for data visualization
- **TanStack React Query** for data management
- **next-themes** for dark/light mode

### Project Structure

```
src/
├── app/                 # Next.js App Router pages
│   ├── layout.tsx       # Root layout with providers
│   ├── page.tsx         # Home page (/)
│   ├── globals.css      # Global styles
│   ├── not-found.tsx    # 404 page
│   ├── candidates/
│   │   └── page.tsx     # Candidates page (/candidates)
│   └── analytics/
│       └── page.tsx     # Analytics page (/analytics)
├── components/          # Reusable UI components
│   ├── layout/          # Header, Layout wrapper
│   ├── candidates/      # CandidateCard, CandidateDetail
│   ├── filters/         # FilterPanel
│   ├── charts/          # PartyBarChart, QualificationPieChart, etc.
│   ├── dashboard/       # StatCard
│   ├── ui/              # shadcn/ui primitives
│   ├── theme-provider.tsx   # next-themes provider wrapper
│   └── query-provider.tsx   # React Query provider wrapper
├── hooks/               # Custom hooks (useElectionData.ts)
├── types/               # TypeScript interfaces (election.ts)
├── data/                # Static data (mockCandidates.ts, mappings.ts)
└── lib/                 # Utilities (utils.ts)
```

### Key Files

- `src/app/layout.tsx` - Root layout with ThemeProvider, QueryProvider, and fonts
- `src/data/mockCandidates.ts` - Contains 3000+ candidate records (3.8 MB)
- `src/data/mappings.ts` - English-to-Nepali translations for search functionality
- `src/hooks/useElectionData.ts` - Core data filtering and aggregation logic
- `src/types/election.ts` - TypeScript interfaces for Candidate and FilterState

### Routes

| Route | Page Component | Purpose |
|-------|----------------|---------|
| `/` | `src/app/page.tsx` | Home dashboard with stats |
| `/candidates` | `src/app/candidates/page.tsx` | Full candidate list with filters |
| `/analytics` | `src/app/analytics/page.tsx` | Detailed charts and analytics |

## Important Patterns

### Next.js App Router
- All page components are in `src/app/` directory
- Client components use `"use client"` directive at the top
- Layout wraps all pages with providers (theme, query, tooltip)
- Static generation is used for all pages

### Data Flow
- All candidate data is loaded from `mockCandidates.ts` (static JSON)
- `useElectionData.ts` hooks handle filtering, aggregation, and stats
- Filters are dependent: selecting a province updates available districts

### Filtering System
The filter system in `FilterPanel.tsx` supports:
- Province/District/Constituency (hierarchical)
- Political Party
- Qualification (education level)
- Gender
- Age range (slider)

Search uses English-to-Nepali mappings from `mappings.ts` to allow English keyword searches on Nepali data.

### UI Components
- Uses shadcn/ui components (in `src/components/ui/`)
- All UI components have `"use client"` directive
- Custom components wrap shadcn primitives
- Searchable comboboxes for province, district, and party filters

### Theming
- Dark/light mode via `next-themes`
- ThemeProvider wrapper in `src/components/theme-provider.tsx`
- CSS variables defined in `src/app/globals.css`
- Tailwind config in `tailwind.config.ts`
- Fonts loaded via `next/font/google` (Inter, Noto Sans Devanagari)

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Keep components focused and reusable
- Use custom hooks for data logic
- Add `"use client"` directive to components using React hooks

### Adding New Pages
1. Create a new directory in `src/app/` (e.g., `src/app/new-page/`)
2. Add a `page.tsx` file with the page component
3. Use `"use client"` if the page uses hooks or browser APIs
4. Wrap content with `<Layout>` component

### Adding New Filters
1. Update `FilterState` interface in `src/types/election.ts`
2. Add filter logic in `useFilteredCandidates` hook
3. Add UI control in `FilterPanel.tsx`

### Adding New Charts
1. Create chart component in `src/components/charts/`
2. Add `"use client"` directive at the top
3. Use Recharts library
4. Get data via hooks from `useElectionData.ts`

### Styling
- Use Tailwind CSS classes
- Follow existing spacing and color patterns
- Support both light and dark themes
- Use shadcn/ui components for consistency

## Data Structure

### Candidate Interface
```typescript
interface Candidate {
  CandidateID: number;
  CandidateName: string;
  AGE_YR: number;
  Gender: string;           // "पुरुष" | "महिला"
  PoliticalPartyName: string;
  DistrictName: string;
  StateName: string;        // Province
  QUALIFICATION: string;
  SCConstID?: number;       // Constituency ID
  // ... additional fields
}
```

### Filter State
```typescript
interface FilterState {
  province: string | null;
  district: string | null;
  constituency: number | null;
  party: string | null;
  qualification: string | null;
  gender: string | null;
  ageMin: number | null;
  ageMax: number | null;
}
```

## Configuration Files

- `next.config.js` - Next.js configuration (image domains)
- `tailwind.config.ts` - Tailwind CSS configuration
- `tsconfig.json` - TypeScript configuration
- `postcss.config.js` - PostCSS configuration
- `.eslintrc.json` - ESLint configuration (extends next/core-web-vitals)

## Notes

- Nepali language (Devanagari) is used throughout the UI
- English keywords are mapped to Nepali for search functionality
- The app is fully client-side with no backend API
- Data is sourced from Nepal Election Commission
- All pages are statically generated at build time
