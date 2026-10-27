/**
 * Services Configuration
 * Defines the core automotive business services (Buy, Sell, Rent, Exchange)
 * with structured highlights, badges, and actionable contact anchors.
 */

export const servicesConfig = [
  {
    id: "buy",
    title: "Buy Certified Vehicles",
    badge: "180-Pt Certified",
    tagline: "Hand-curated, immaculate luxury and performance motorcars.",
    description:
      "Every vehicle undergoes our master multi-point mechanical inspection, complete CarFax provenance audit, and professional ceramic detailing before entering our showroom floor.",
    perks: [
      "Rigorous 180-point mechanical & safety audit",
      "Comprehensive transparent provenance report",
      "Available 12–36 month extended exclusionary warranty",
      "White-glove nationwide enclosed delivery",
    ],
    actionText: "Browse Current Inventory",
    actionTarget: "#inventory",
    accent: "gold",
    icon: "KeyRound",
  },
  {
    id: "sell",
    title: "Sell Your Vehicle",
    badge: "Instant Valuation",
    tagline: "Effortless liquidation and high-yield consignment.",
    description:
      "Obtain an aggressive market appraisal within 60 minutes. Choose between immediate bank settlement or our exclusive white-glove consignment program with global VIP exposure.",
    perks: [
      "No-obligation valuation powered by live auction data",
      "Same-day wire transfer or cashier check",
      "Professional 4K showroom photography & marketing",
      "Full lien payoff handling & DMV documentation",
    ],
    actionText: "Request Fast Appraisal",
    actionTarget: "#contact",
    accent: "emerald",
    icon: "BadgeDollarSign",
  },
  {
    id: "rent",
    title: "Luxury & Exotic Rental",
    badge: "VIP Fleet",
    tagline: "Unforgettable driving experiences on your schedule.",
    description:
      "Command the world's most coveted supercars, prestigious SUVs, and chauffeur-ready executive saloons for corporate galas, private weekend retreats, or executive travel.",
    perks: [
      "Flexible daily, weekly, or monthly executive leases",
      "Airport tarmac & luxury hotel valet dispatch",
      "Complimentary high-tier insurance cover options",
      "24/7 dedicated personal concierge support",
    ],
    actionText: "Inquire About Rentals",
    actionTarget: "#contact",
    accent: "cyan",
    icon: "Sparkles",
  },
  {
    id: "exchange",
    title: "Vehicle Exchange & Trade-In",
    badge: "Seamless Upgrade",
    tagline: "Transition smoothly into your next automotive masterpiece.",
    description:
      "Roll your existing equity directly into an upgrade from our current showroom. We provide generous trade-in credits, sales tax offset benefits, and zero downtime.",
    perks: [
      "Substantial sales tax savings on net trade difference",
      "Straightforward keys-in-hand single visit transition",
      "Fair appraisals honoring aftermarket enhancements",
      "Custom tailored financing & lease transfers",
    ],
    actionText: "Evaluate Your Trade-In",
    actionTarget: "#contact",
    accent: "amber",
    icon: "RefreshCw",
  },
];
