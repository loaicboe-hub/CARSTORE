# CAR IN (كار إن) — Luxury Automotive Showroom & Dealership Platform

A high-performance luxury automotive web application and digital showroom designed for elite dealerships, collectors, and automotive trading operations. Built with modern React, Vite, and a modular design token architecture.

---

## Key Features

- **Pristine Luxury Light Scheme**: Curated pearl surfaces, gold accents (`#C28B14`), deep obsidian slate typography (`#0F172A`), and subtle ambient elevations.
- **Full Bilingual Localization (English & Arabic)**: Seamless language switcher with dynamic typography (`Cairo` for Arabic, `Plus Jakarta Sans` & `Outfit` for English) and full **RTL (Right-to-Left)** layout adaptation.
- **Top Visual Hero Banner**: Prominent luxury supercar showcase banner with dynamic spec indicators.
- **5-Pillar Core Navigation**:
  1. **Buy** (شراء) — Curated inventory catalog with category filtering.
  2. **Sell** (بيع) — Instant vehicle appraisal and valuation consultation.
  3. **Exchange** (استبدال) — Bespoke trade-in equity transition.
  4. **Rent** (تأجير) — Exotic & executive fleet reservation.
  5. **Management** (الإدارة) — Executive leadership team & authorized dealer operations portal.
- **Interactive Modals**:
  - VIP Concierge & Vehicle Reservation modal.
  - Authorized Dealership Management Portal with PIN verification (Demo PIN: `123456`).
- **Clean Scalable Architecture**: Design tokens, centralized brand configuration (`brandConfig.js`), bilingual dictionary (`translations.js`), and accessible components.

---

## Tech Stack

- **Framework**: React 19 + Vite 8
- **Styling**: Vanilla CSS Design Tokens (Zero Tailwind overhead, highly customizable)
- **Icons**: Lucide React
- **Fonts**: Outfit, Plus Jakarta Sans, Cairo (via Google Fonts CDN)

---

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/loaicboe-hub/CARSTORE.git

# Enter project directory
cd CARSTORE

# Install dependencies
npm install

# Run the local development server
npm run dev
```

### Production Build

```bash
npm run build
npm run preview
```

---

## Project Structure

```
├── public/
│   └── images/              # Optimized vehicle imagery
├── src/
│   ├── components/
│   │   ├── common/          # Reusable UI primitives (Button, Badge, etc.)
│   │   ├── layout/          # Navbar and Footer components
│   │   ├── modals/          # Inquiry & Dealer Management modals
│   │   └── sections/        # Modular page sections (Hero, Services, Inventory, etc.)
│   ├── config/              # Centralized brand & navigation configurations
│   ├── context/             # Bilingual LanguageContext (EN/AR & RTL)
│   ├── data/                # Mock inventory, services, and testimonials data
│   ├── i18n/                # Bilingual dictionaries
│   └── styles/              # Design tokens and CSS stylesheets
├── index.html
└── package.json
```

---

## License

Private repository & proprietary design for CAR IN Automotive Group.
