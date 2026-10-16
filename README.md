# CASE 404: The Vanishing Prototype 🔍

<div align="center">

![Next.js](https://img.shields.io/badge/Next.js-14.2-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.6-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=for-the-badge&logo=tailwind-css)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**An immersive tech-investigation event landing page with a cyber-investigator aesthetic**

[🚀 Live Demo](https://code404.vercel.app) • [📝 Register on Unstop](https://unstop.com/o/XQkuWGr?lb=J6zwCX2Z)

</div>

---

## 🎯 Event Overview

**CASE 404: The Vanishing Prototype** is a premier tech-investigation event organized by **VICTORS Club**.

- 📅 **Event Dates:** October 23-24, 2026
- 💰 **Prize Pool:** ₹18,000 (₹10K + ₹5K + ₹3K)
- 💼 **Special Perks:** Exclusive internship opportunities for top 3 teams
- 👥 **Team Size:** 3-4 members
- 📆 **Registration Closes:** October 20, 2026

### 📍 Event Schedule

| Round | Date | Time | Duration |
|-------|------|------|----------|
| **Round 1:** Clearance Quiz | Oct 23, 2026 | 9:40 AM - 10:40 AM | 1 hour |
| **Round 2:** Evidence Collection | Oct 23, 2026 | 12:15 PM - 2:00 PM | ~1.75 hours |
| **Round 3:** Final Investigation | Oct 24, 2026 | 10:00 AM - 1:00 PM | 3 hours |

---

## ✨ Features

### 🎨 Visual Design
- **Dark Cyber Theme:** Deep slate backgrounds with glowing emerald-green and cyan accents
- **Terminal Aesthetic:** Monospace fonts and command-line inspired UI
- **Retro CRT Effects:** Animated scan line for authentic monitor feel
- **Smooth Animations:** Typewriter effects, glowing borders, and hover transitions
- **Custom Scrollbar:** Emerald-themed scrollbar matching the design

### 📄 Landing Page Sections

1. **🎯 Hero Section**
   - Typewriter animation spelling out the event name
   - Event dates with icon accents
   - AURA storyline introduction
   - Terminal-style mission briefing
   - Prominent Unstop registration CTA

2. **🏆 Prizes & Perks**
   - Three-tier prize cards (Gold, Silver, Bronze)
   - Cash prize breakdown with animations
   - Special internship opportunity callout
   - Hover effects with gradient glows

3. **📅 Timeline**
   - Interactive three-round breakdown
   - Visual connecting lines between rounds
   - Locked/unlocked round indicators
   - Detailed feature lists per round
   - Team registration info

4. **📖 About Section**
   - Immersive case file storyline
   - Terminal-style briefing box
   - Feature highlights with icons
   - VICTORS Club information

5. **📞 Footer**
   - Quick event info
   - Contact details
   - Registration CTA
   - Terminal closing message

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ 
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/priiyanshii02/CODE404.git
cd CODE404
```

2. **Install dependencies:**
```bash
npm install
```

3. **Run development server:**
```bash
npm run dev
```

4. **Open in browser:**
```
http://localhost:3000
```

### Build for Production

```bash
npm run build
npm start
```

---

## 🛠️ Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe development |
| **Tailwind CSS** | Utility-first styling |
| **Lucide React** | Modern icon library |
| **Google Fonts** | Inter & JetBrains Mono fonts |

---

## 📁 Project Structure

```
CODE404/
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles & custom animations
│   │   ├── layout.tsx           # Root layout with metadata
│   │   └── page.tsx             # Main landing page
│   └── components/
│       └── landing/
│           ├── Hero.tsx         # Hero section with typewriter
│           ├── Prizes.tsx       # Prize pool showcase
│           ├── Timeline.tsx     # Event timeline
│           ├── About.tsx        # Case story & VICTORS info
│           └── Footer.tsx       # Footer with links
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── next.config.js              # Next.js config
└── package.json                # Dependencies
```

---

## 🎨 Customization Guide

### Update Event Details

**Registration Link:**
- `src/components/landing/Hero.tsx` - Main CTA button
- `src/components/landing/Timeline.tsx` - Registration reminder
- `src/components/landing/Footer.tsx` - Footer link

**Event Timings:**
- `src/components/landing/Timeline.tsx` - Update `rounds` array

**Contact Information:**
- `src/components/landing/Footer.tsx` - Update email and details

### Add Custom Images

Place images in `public/images/`:
```
public/
└── images/
    ├── logo.svg
    ├── hero-bg.jpg
    ├── prizes/
    └── sponsors/
```

### Modify Color Scheme

**Tailwind Config:**
```typescript
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      'cyber-green': '#10b981',
      'cyber-cyan': '#06b6d4',
    }
  }
}
```

**CSS Variables:**
```css
/* src/app/globals.css */
:root {
  --cyber-green: 142 76% 36%;
  --cyber-cyan: 189 94% 43%;
}
```

---

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. **Push to GitHub** (if not already done)
2. **Visit** [vercel.com](https://vercel.com)
3. **Import** your repository
4. **Deploy** with one click!

Vercel will automatically detect Next.js and configure everything.

### Deploy to Netlify

1. **Build command:** `npm run build`
2. **Publish directory:** `.next`
3. **Framework preset:** Next.js

---

## 📱 Responsive Design

Fully optimized for all screen sizes:

| Device | Breakpoint | Optimizations |
|--------|-----------|---------------|
| Mobile | 320px+ | Stacked layout, touch-friendly buttons |
| Tablet | 768px+ | Two-column grids, larger text |
| Desktop | 1024px+ | Multi-column layouts, hover effects |
| Large | 1280px+ | Maximum width containers, enhanced spacing |

---

## 🤝 Contributing

We welcome contributions! Here's how:

1. **Fork** the repository
2. **Create** a feature branch (`git checkout -b feature/AmazingFeature`)
3. **Commit** your changes (`git commit -m 'Add AmazingFeature'`)
4. **Push** to the branch (`git push origin feature/AmazingFeature`)
5. **Open** a Pull Request

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Organized by:** VICTORS Club
- **Design & Development:** Custom Next.js build
- **Icons:** [Lucide React](https://lucide.dev)
- **Fonts:** [Google Fonts](https://fonts.google.com)

---

## 📞 Contact & Support

- **Event Registration:** [Unstop Event Page](https://unstop.com/o/XQkuWGr?lb=J6zwCX2Z)
- **Email:** victors@example.com
- **GitHub:** [@priiyanshii02](https://github.com/priiyanshii02)

---

<div align="center">

**⚡ Built with Next.js & Tailwind CSS ⚡**

*Good luck, investigator. The truth awaits.* 🔍

[⬆ Back to Top](#case-404-the-vanishing-prototype-)

</div>
