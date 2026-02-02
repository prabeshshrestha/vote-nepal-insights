# Nepal Election Candidates Dashboard

An interactive web application to explore Nepal election candidates data from the 2082 (2025) election cycle. Built to help citizens understand candidates from their area and analyze election trends like political parties, qualifications, age, and gender distribution.

## Features

- View **3000+ election candidates** with detailed profiles
- **Advanced filtering** by:
  - Province (7 provinces)
  - District (75+ districts with dependent filtering)
  - Constituency
  - Political Party
  - Qualification/Education level
  - Gender
  - Age range (25-70 slider)
- **Searchable comboboxes** with English keyword support for Nepali data
- **Interactive charts and analytics**:
  - Party distribution bar charts
  - Qualification pie charts
  - Gender breakdown
  - Province-wise analysis
  - Party-qualification breakdown
  - Age group statistics
  - University representation
- **Bilingual support** (Nepali UI with English search keywords)
- **Dark/Light theme** support
- Responsive design (mobile, tablet, desktop)
- Infinite scroll pagination

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS + shadcn/ui components
- **Charts**: Recharts
- **State Management**: TanStack React Query
- **Forms**: React Hook Form + Zod validation
- **Routing**: React Router v6

## Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/prabeshshrestha/vote-nepal-insights.git
cd vote-nepal-insights

# Install dependencies
npm install
```

### Development

```bash
# Start the development server
npm run dev
```

The app will be available at `http://localhost:8080`

### Build

```bash
# Production build
npm run build

# Development build
npm run build:dev

# Preview production build
npm run preview
```

### Testing

```bash
# Run tests once
npm run test

# Run tests in watch mode
npm run test:watch
```

### Linting

```bash
npm run lint
```

## Project Structure

```
src/
├── pages/                    # Route pages
│   ├── Index.tsx            # Home page with stats overview
│   ├── CandidatesPage.tsx   # Full candidates list with filtering
│   ├── AnalyticsPage.tsx    # Detailed analytics & charts
│   └── NotFound.tsx         # 404 page
│
├── components/              # Reusable UI components
│   ├── layout/              # Layout components (Header, Layout)
│   ├── candidates/          # Candidate card and detail components
│   ├── filters/             # Filter panel components
│   ├── charts/              # Chart components (Party, Gender, etc.)
│   ├── dashboard/           # Dashboard stat cards
│   └── ui/                  # shadcn/ui base components
│
├── hooks/                   # Custom React hooks
│   └── useElectionData.ts   # Data filtering and aggregation hooks
│
├── types/                   # TypeScript interfaces
│   └── election.ts          # Candidate and filter types
│
├── data/                    # Static data
│   ├── mockCandidates.ts    # Election candidates dataset
│   └── mappings.ts          # English-to-Nepali search mappings
│
├── lib/                     # Utility functions
│   └── utils.ts
│
├── App.tsx                  # Router configuration
├── main.tsx                 # Application entry point
└── index.css                # Global styles and Tailwind config
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page with dashboard overview and candidate preview |
| `/candidates` | Full searchable candidate list with pagination |
| `/analytics` | Advanced analytics with detailed charts |

## Data Source

Official data from Nepal Election Commission:
- Source: https://result.election.gov.np/JSONFiles/ElectionResultCentral2082.txt
- Candidate Images: `https://result.election.gov.np/Images/Candidate/{CandidateID}.jpg`

## Candidate Information

Each candidate record includes:
- Name, Age, Gender
- Political Party and Symbol
- District, Province, Constituency
- Educational Qualification and Institution
- Experience, Address
- Family details (Father's Name, Spouse's Name)
- Votes Received, Election Status

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available for civic awareness and educational purposes.
