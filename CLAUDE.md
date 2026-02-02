# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Project Overview

This is a React-based web application for exploring Nepal's election candidates data from the 2082 (2025) election cycle. It displays 3000+ candidates with filtering, search, and analytics features.

## Key Commands

### Development
- **Start dev server**: `npm run dev` (runs on port 8080)
- **Production build**: `npm run build`
- **Preview build**: `npm run preview`

### Testing
- **Run tests**: `npm run test`
- **Watch mode**: `npm run test:watch`

### Linting
- **Run ESLint**: `npm run lint`

## Architecture Overview

### Tech Stack
- **React 18** with **TypeScript**
- **Vite** for build tooling
- **Tailwind CSS** + **shadcn/ui** for styling
- **Recharts** for data visualization
- **TanStack React Query** for data management
- **React Router v6** for routing

### Project Structure

```
src/
├── pages/           # Route components (Index, CandidatesPage, AnalyticsPage)
├── components/      # Reusable UI components
│   ├── layout/      # Header, Layout wrapper
│   ├── candidates/  # CandidateCard, CandidateDetail
│   ├── filters/     # FilterPanel
│   ├── charts/      # PartyBarChart, QualificationPieChart, etc.
│   ├── dashboard/   # StatCard
│   └── ui/          # shadcn/ui primitives
├── hooks/           # Custom hooks (useElectionData.ts)
├── types/           # TypeScript interfaces (election.ts)
├── data/            # Static data (mockCandidates.ts, mappings.ts)
└── lib/             # Utilities (utils.ts)
```

### Key Files

- `src/data/mockCandidates.ts` - Contains 3000+ candidate records (3.8 MB)
- `src/data/mappings.ts` - English-to-Nepali translations for search functionality
- `src/hooks/useElectionData.ts` - Core data filtering and aggregation logic
- `src/types/election.ts` - TypeScript interfaces for Candidate and FilterState

### Routes

| Route | Component | Purpose |
|-------|-----------|---------|
| `/` | Index | Home dashboard with stats |
| `/candidates` | CandidatesPage | Full candidate list with filters |
| `/analytics` | AnalyticsPage | Detailed charts and analytics |

## Important Patterns

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
- Custom components wrap shadcn primitives
- Searchable comboboxes for province, district, and party filters

### Theming
- Dark/light mode via `next-themes`
- CSS variables defined in `index.css`
- Tailwind config in `tailwind.config.ts`

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow existing component patterns
- Keep components focused and reusable
- Use custom hooks for data logic

### Adding New Filters
1. Update `FilterState` interface in `src/types/election.ts`
2. Add filter logic in `useFilteredCandidates` hook
3. Add UI control in `FilterPanel.tsx`

### Adding New Charts
1. Create chart component in `src/components/charts/`
2. Use Recharts library
3. Get data via hooks from `useElectionData.ts`

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
  province: string;
  district: string;
  constituency: string;
  party: string;
  qualification: string;
  gender: string;
  ageMin: number;
  ageMax: number;
}
```

## Notes

- Nepali language (Devanagari) is used throughout the UI
- English keywords are mapped to Nepali for search functionality
- The app is fully client-side with no backend
- Data is sourced from Nepal Election Commission
