# BitStacks Analytics Frontend

A modern, responsive Next.js frontend for the BitStacks Analytics DeFi staking platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern UI**: Clean, glassmorphism design with smooth animations
- **Responsive**: Mobile-first design that works on all devices
- **Multi-tier Staking**: Visual representation of staking tiers and rewards
- **Governance Interface**: Create and vote on proposals
- **Analytics Dashboard**: Real-time platform metrics and insights
- **Wallet Integration**: Ready for Stacks wallet connection

## Pages

### Home Page
- Hero section with platform overview
- Feature highlights
- Staking tiers comparison
- Analytics overview

### Staking Page (`/stake`)
- Stake STX tokens with lock period options
- View current staking position
- Real-time rewards calculation
- Tier benefits display

### Governance Page (`/governance`)
- View active proposals
- Create new proposals
- Vote on proposals
- Governance statistics

### Analytics Page (`/analytics`)
- Platform metrics and KPIs
- Staking distribution charts
- Top stakers leaderboard
- Recent activity feed

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Heroicons
- **Package Manager**: npm

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
frontend/
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   ├── stake/             # Staking page
│   ├── governance/        # Governance page
│   └── analytics/         # Analytics page
├── components/            # Reusable components
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── StakingTiers.tsx
│   └── Analytics.tsx
├── public/               # Static assets
├── package.json
├── tailwind.config.js
└── tsconfig.json
```

## Design System

### Colors
- Primary: Blue gradient (#3b82f6 to #2563eb)
- Secondary: Purple gradient (#8b5cf6 to #7c3aed)
- Background: Dark gradient (slate-900 to blue-900)
- Text: White with opacity variants

### Components
- **Cards**: Glassmorphism with backdrop blur
- **Buttons**: Gradient primary, outlined secondary
- **Inputs**: Dark with focus states
- **Animations**: Fade-in and slide-up transitions

## Responsive Design

The application is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.
