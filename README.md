# CASE 404: The Vanishing Prototype

A high-converting, immersive landing page for a college tech-investigation event organized by VICTORS Club.

## 🎯 Event Details

- **Event Name:** CASE 404: The Vanishing Prototype
- **Dates:** October 23-24, 2026
- **Prize Pool:** ₹18,000 (₹10K + ₹5K + ₹3K)
- **Special Perks:** Exclusive internship opportunities for top 3 teams
- **Theme:** Cyber-investigator / Terminal aesthetic

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🎨 Features

### Visual Design
- **Dark Mode Theme:** Slate-950/black backgrounds with neon emerald-green and cyber-cyan accents
- **Glowing Effects:** Subtle animations and hover effects throughout
- **Terminal Aesthetic:** Monospace typography and command-line inspired UI elements
- **Scan Line Animation:** Retro CRT monitor effect

### Sections

1. **Hero Section**
   - Typewriter animation for main headline
   - Event dates prominently displayed
   - Compelling storyline introduction
   - Clear CTA button to Unstop registration

2. **Prizes & Perks**
   - Cash prize breakdown with visual cards
   - Internship opportunity highlight
   - Animated hover effects

3. **Timeline**
   - Three investigation phases
   - Round-by-round breakdown
   - Time and date information
   - Team registration reminder

4. **About Section**
   - Event storyline and lore
   - Case briefing in terminal format
   - VICTORS Club information

5. **Footer**
   - Contact information
   - Quick links
   - Registration CTA

## 🛠️ Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Icons:** Lucide React
- **Fonts:** Inter (sans-serif) + JetBrains Mono (monospace)
- **Language:** TypeScript

## 📁 Project Structure

```
case-404/
├── src/
│   ├── app/
│   │   ├── globals.css        # Global styles and Tailwind utilities
│   │   ├── layout.tsx         # Root layout with fonts and metadata
│   │   └── page.tsx           # Landing page composition
│   └── components/
│       └── landing/
│           ├── Hero.tsx       # Hero section with typewriter effect
│           ├── Prizes.tsx     # Prize pool and perks showcase
│           ├── Timeline.tsx   # Event timeline and rounds
│           ├── About.tsx      # Story and VICTORS Club info
│           └── Footer.tsx     # Footer with contact info
├── public/                    # Static assets (add images here)
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json             # TypeScript configuration
└── next.config.js            # Next.js configuration
```

## 🎯 Customization

### Update Registration Link
Edit the Unstop registration URL in:
- `src/components/landing/Hero.tsx` (line ~80)
- `src/components/landing/Timeline.tsx` (line ~155)
- `src/components/landing/Footer.tsx` (line ~70)

### Add Images
Place event images in the `public/` directory:
- Logo: `public/images/logo.svg`
- Hero background: `public/images/hero-bg.jpg`
- Prize images: `public/images/prizes/`
- Sponsor logos: `public/images/sponsors/`

### Modify Colors
Update color schemes in:
- `src/app/globals.css` (custom CSS variables)
- `tailwind.config.ts` (Tailwind theme extensions)

## 📱 Responsive Design

The landing page is fully responsive and optimized for:
- Mobile devices (320px+)
- Tablets (768px+)
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repository to Vercel for automatic deployments.

## 📄 License

This project is created for VICTORS Club's CASE 404 event.

## 🙏 Credits

- **Design & Development:** Custom built with Next.js and Tailwind CSS
- **Icons:** Lucide React
- **Organized by:** VICTORS Club

---

**Good luck, investigator. The truth awaits.** 🔍
