# Shaik Umar Basha — Premium Personal Developer Portfolio

[![Production Build](https://img.shields.io/badge/Build-Passing-brightgreen?style=flat-square)](https://github.com/Basha15)
[![Stack](https://img.shields.io/badge/Stack-React%20%7C%20TypeScript%20%7C%20Vite%20%7C%20TailwindCSS-blue?style=flat-square)](https://vite.dev)
[![Current Role](https://img.shields.io/badge/Current%20Role-Backend%20Engineer%20%40%20DropXcorp-emerald?style=flat-square)](https://github.com/Basha15)

A world-class, recruiter-focused personal developer portfolio engineered for **Shaik Umar Basha**, Backend Engineer at DropXcorp and B.Tech Information Technology scholar (May 2026).

---

## 💎 Design Philosophy & Architecture

Built by synthesizing the core design principles of top product design agencies:
1. **Impeccable Craft Standards**: Out-of-distribution quality, zero generic "AI template" slop, honest non-percentage proficiency indicators, and surface-aware custom scrollbars, selection tokens, and focus rings.
2. **Taste-Skill Anti-Slop Discipline**: Direct evidence-first presentation, real code telemetry (`/api/v1/engineers/shaik-umar-basha`), equal margins, and micro-interactions.
3. **High-End Architectural Variance**: Double-bezel ("Doppelrand") nested card enclosures, button-in-button nested trailing icons, deep luxury slate/ink dark mode (`#07080a`), electric lime spot accent (`#b8f34a`), and fluid spring physics.

---

## ⚡ Tech Stack

- **Framework**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS 3.4 with custom double-bezel utilities and typography hierarchy
- **Icons**: Lucide React
- **Motion**: Fluid CSS spring curves and responsive layout transitions
- **GitHub Integration**: Direct public REST API integration with 15-minute caching and verified fallback configurations
- **Contact Channel**: Multi-layer recruiter contact system supporting Resend serverless dispatch + client validation + honeypot anti-spam + rate limiting + guaranteed mailto fallback.

---

## 📂 Project Structure

```
Portfolio/
├── api/
│   └── contact.ts              # Serverless API endpoint for Resend delivery
├── public/
│   └── resume.pdf              # Official developer CV (downloadable & printable)
├── src/
│   ├── components/
│   │   ├── about/              # Professional narrative & factual data cards
│   │   ├── contact/            # Recruiter-tailored inquiry form & direct channels
│   │   ├── education/          # B.Tech IT at Malla Reddy College (CGPA 7.9)
│   │   ├── experience/         # DropXcorp Backend Engineer verified timeline
│   │   ├── hero/               # Hero headline, CTAs & Live API telemetry widget
│   │   ├── layout/             # Floating island Navbar & Recruiter Footer
│   │   ├── projects/           # Dynamic GitHub integration, ProjectCards & Modal
│   │   ├── resume/             # Embedded CV preview, print & download handlers
│   │   ├── skills/             # Categorized stack with honest proficiency tiers
│   │   └── ui/                 # ThemeToggle, buttons & reusable elements
│   ├── data/
│   │   └── portfolioData.ts    # Centralized single-source-of-truth configuration
│   ├── services/
│   │   ├── contact.ts          # Validation, spam defense & delivery service
│   │   └── github.ts           # GitHub API fetcher, caching & data formatting
│   ├── types/
│   │   └── portfolio.ts        # TypeScript interfaces for profile, skills, projects
│   ├── App.tsx                 # Root layout with dark/light theme management
│   ├── index.css               # Design system tokens, scrollbars, double-bezel styles
│   └── main.tsx                # Application mount point
├── .env.example                # Environment variable documentation
├── netlify.toml                # Netlify deployment configuration
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vercel.json                 # Vercel deployment configuration
└── vite.config.ts
```

---

## 🚀 Quick Start (Local Development)

### 1. Prerequisites
- Node.js 18+ (tested on Node v24.x)
- npm 9+

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Dev Server
```bash
npm run dev
```
Visit `http://localhost:3000` in your browser.

### 4. Build for Production
```bash
npm run build
```
Creates an optimized, production-ready bundle in `dist/`.

---

## ⚙️ Configuration & Customization

All personal details, skills, projects, and contact info are maintained in one clean file:
`src/data/portfolioData.ts`

- **Personal Information**: Name, headline, bio, location, email, social links.
- **DropXcorp Experience**: Responsibilities, verified technologies, dates.
- **Academic Credentials**: Degree, university, graduation year, CGPA.
- **Skills**: Add or adjust proficiency levels (`Proficient`, `Working Knowledge`, `Foundational`).
- **Featured Projects**: Curate titles, descriptions, and feature lists for your GitHub repos.

---

## 🌐 Production Deployment

### Option 1: Vercel (Recommended)
1. Push your repository to GitHub (`https://github.com/Basha15/portfolio` or your repo name).
2. Go to [vercel.com](https://vercel.com) and import the repository.
3. Vercel automatically detects the Vite configuration and `vercel.json`.
4. (Optional) In **Environment Variables**, add:
   - `VITE_RESEND_API_KEY`: Your Resend API key (from [resend.com](https://resend.com)).
   - `VITE_CONTACT_EMAIL`: `shaikumarbasha19@gmail.com`.
   - `VITE_GITHUB_TOKEN`: (Optional) GitHub Personal Access Token to raise API rate limits.
5. Click **Deploy**. Your portfolio goes live with HTTPS in under 60 seconds!

### Option 2: Netlify
1. Go to [netlify.com](https://netlify.com) and import the repository.
2. Build command: `npm run build`
3. Publish directory: `dist`
4. In **Site Configuration > Environment Variables**, add `VITE_CONTACT_EMAIL` and `VITE_RESEND_API_KEY`.
5. Deploy site.

---

## 🛡️ Recruiter Contact Form Integration

The contact form is architected to work out-of-the-box with two layers:
1. **Direct Resend API / Serverless Endpoint**: If `VITE_RESEND_API_KEY` is provided, emails are dispatched securely to `shaikumarbasha19@gmail.com` via the Resend API.
2. **Guaranteed Instant Fallback**: If no API key is provided, the form validates all fields, protects against bots, and generates an instant, pre-filled `mailto:` link that opens the recruiter's native email client with the subject and body neatly populated.

---

## 📄 License & Attribution
Designed and built for **Shaik Umar Basha**.
All credentials, roles, and project references are verified and accurate.
