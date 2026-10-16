# CASE 404 - Project Structure

## Root Level
```
case-404/
├── .next/                          # Next.js build output (auto-generated)
├── node_modules/                   # Dependencies (auto-generated)
├── public/                         # Static assets (images, fonts, etc.)
│   ├── images/
│   │   ├── logo.svg               # Event logo
│   │   ├── hero-bg.jpg            # Landing page hero background
│   │   ├── prizes/                # Prize images
│   │   └── sponsors/              # Sponsor logos
│   ├── fonts/                     # Custom fonts
│   └── favicon.ico                # Site favicon
│
├── src/
│   ├── app/                       # Next.js App Router pages
│   │   ├── (public)/              # Public routes group (no auth required)
│   │   │   ├── page.tsx           # Landing page (/) - Event info, timeline, prizes
│   │   │   └── layout.tsx         # Public layout wrapper
│   │   │
│   │   ├── (protected)/           # Protected routes group (auth required)
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx       # Dashboard/Briefing Room - Team hub
│   │   │   ├── quiz-arena/
│   │   │   │   └── page.tsx       # Quiz Arena - Round 1 interactive portal
│   │   │   └── layout.tsx         # Protected layout with auth check
│   │   │
│   │   ├── api/                   # API routes
│   │   │   ├── auth/
│   │   │   │   └── route.ts       # Authentication endpoints
│   │   │   ├── quiz/
│   │   │   │   ├── submit/
│   │   │   │   │   └── route.ts   # Quiz answer submission
│   │   │   │   └── track/
│   │   │   │       └── route.ts   # Anti-cheat tracking endpoint
│   │   │   └── leaderboard/
│   │   │       └── route.ts       # Leaderboard data
│   │   │
│   │   ├── globals.css            # Global styles and Tailwind imports
│   │   ├── layout.tsx             # Root layout (metadata, fonts, providers)
│   │   └── not-found.tsx          # 404 page
│   │
│   ├── components/                # Reusable React components
│   │   ├── landing/
│   │   │   ├── Hero.tsx           # Landing hero section
│   │   │   ├── Timeline.tsx       # Event timeline component
│   │   │   ├── Prizes.tsx         # Prizes showcase
│   │   │   ├── About.tsx          # About the event
│   │   │   └── Footer.tsx         # Landing page footer
│   │   │
│   │   ├── dashboard/
│   │   │   ├── TeamCard.tsx       # Team information display
│   │   │   ├── BriefingPanel.tsx  # Mission briefing display
│   │   │   └── ProgressTracker.tsx # Round progress indicator
│   │   │
│   │   ├── quiz/
│   │   │   ├── QuestionCard.tsx   # Individual question display
│   │   │   ├── Timer.tsx          # Quiz countdown timer
│   │   │   ├── AnswerInput.tsx    # Answer submission input
│   │   │   └── AntiCheatMonitor.tsx # Tab/window tracking overlay
│   │   │
│   │   ├── ui/                    # Shared UI primitives
│   │   │   ├── Button.tsx         # Reusable button component
│   │   │   ├── Card.tsx           # Card wrapper component
│   │   │   ├── Modal.tsx          # Modal dialog component
│   │   │   ├── Input.tsx          # Form input component
│   │   │   └── Loader.tsx         # Loading spinner
│   │   │
│   │   └── shared/
│   │       ├── Navbar.tsx         # Site navigation bar
│   │       └── BackgroundEffect.tsx # Animated background effects
│   │
│   ├── lib/                       # Utility functions and configurations
│   │   ├── utils.ts               # General utility functions (cn, formatters)
│   │   ├── db.ts                  # Database connection/ORM instance
│   │   ├── auth.ts                # Authentication utilities
│   │   └── constants.ts           # App-wide constants (URLs, limits, etc.)
│   │
│   ├── hooks/                     # Custom React hooks
│   │   ├── useAuth.ts             # Authentication state hook
│   │   ├── useTimer.ts            # Quiz timer hook
│   │   ├── useAntiCheat.ts        # Tab visibility tracking hook
│   │   └── useQuiz.ts             # Quiz state management hook
│   │
│   ├── types/                     # TypeScript type definitions
│   │   ├── index.ts               # Exported types barrel file
│   │   ├── quiz.ts                # Quiz-related types
│   │   ├── user.ts                # User/team types
│   │   └── api.ts                 # API response types
│   │
│   ├── store/                     # State management (if using Zustand/Redux)
│   │   ├── authStore.ts           # Authentication state store
│   │   └── quizStore.ts           # Quiz session state store
│   │
│   └── config/                    # App configuration
│       ├── site.ts                # Site metadata and config
│       └── navigation.ts          # Navigation menu configuration
│
├── .env.local                     # Environment variables (local)
├── .env.example                   # Environment variables template
├── .eslintrc.json                 # ESLint configuration
├── .gitignore                     # Git ignore rules
├── next.config.js                 # Next.js configuration
├── postcss.config.js              # PostCSS configuration (for Tailwind)
├── tailwind.config.ts             # Tailwind CSS configuration
├── tsconfig.json                  # TypeScript configuration
├── package.json                   # Dependencies and scripts
├── package-lock.json              # Locked dependency versions
└── README.md                      # Project documentation
```

## Key Features of This Structure

### 1. **Route Groups**
- `(public)` - Routes accessible without authentication
- `(protected)` - Routes requiring team authentication

### 2. **Component Organization**
- **landing/** - Landing page specific components
- **dashboard/** - Dashboard/briefing room components
- **quiz/** - Quiz arena interactive components
- **ui/** - Reusable UI primitives (design system)
- **shared/** - Components used across multiple pages

### 3. **Core Utilities**
- **lib/** - Business logic and utilities
- **hooks/** - Custom React hooks for reusable logic
- **types/** - Centralized TypeScript definitions
- **config/** - App-wide configuration

### 4. **API Routes**
- Authentication handling
- Quiz submission and tracking
- Anti-cheat monitoring endpoints
- Leaderboard data

## Environment Variables (.env.local)
```bash
# App
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_UNSTOP_REGISTRATION_URL=https://unstop.com/event/case-404

# Database
DATABASE_URL=

# Authentication
NEXTAUTH_SECRET=
NEXTAUTH_URL=

# Quiz Configuration
NEXT_PUBLIC_QUIZ_DURATION=3600
NEXT_PUBLIC_ENABLE_ANTI_CHEAT=true
```

## Next Steps to Initialize

1. **Install Dependencies:**
   ```bash
   npx create-next-app@latest case-404 --typescript --tailwind --app
   ```

2. **Install Additional Packages:**
   ```bash
   npm install @radix-ui/react-* class-variance-authority clsx tailwind-merge
   npm install -D @types/node
   ```

3. **Create Folder Structure:**
   - Manually create the folders as shown above
   - Or use a script to generate them automatically

4. **Configure Tailwind:**
   - Set up custom theme colors for CASE 404 branding
   - Add custom animations for interactive elements

5. **Set Up Authentication:**
   - Implement team login/session management
   - Create middleware for protected routes

## Notes

- **Anti-cheat:** The `useAntiCheat` hook will track tab switches, window blur events, and fullscreen exits
- **Timer:** Real-time countdown with backend validation
- **Responsive:** All components built mobile-first with Tailwind
- **Performance:** Use Next.js Image component, lazy loading, and code splitting
