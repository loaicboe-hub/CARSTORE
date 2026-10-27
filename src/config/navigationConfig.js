/**
 * Navigation & Menu Configuration
 * Centralized labels, anchor targets for single-page scrolling,
 * and future expansion route references for when multi-page routing is added.
 */

export const navigationConfig = {
  // Main header navigation items: 1-Buy, 2-Sell, 3-Exchange, 4-Rent, 5-Management, plus Contact
  navItems: [
    { label: "Buy", labelAr: "شراء", href: "#inventory", id: "nav-buy" },
    { label: "Sell", labelAr: "بيع", href: "#service-sell", id: "nav-sell" },
    { label: "Exchange", labelAr: "استبدال", href: "#service-exchange", id: "nav-exchange" },
    { label: "Rent", labelAr: "تأجير", href: "#service-rent", id: "nav-rent" },
    { label: "Management", labelAr: "الإدارة", href: "#management", id: "nav-management" },
    { label: "Contact", labelAr: "تواصل معنا", href: "#contact", id: "nav-contact" },
  ],

  // Call to action button in navbar
  headerCta: {
    label: "Explore Showroom",
    labelAr: "المعرض",
    href: "#inventory",
  },

  // Secondary footer navigation sections
  footerSections: [
    {
      title: "Services",
      links: [
        { label: "Buy Certified Vehicles", href: "#inventory" },
        { label: "Sell Your Vehicle", href: "#service-sell" },
        { label: "Exotic & Luxury Rental", href: "#service-rent" },
        { label: "Bespoke Exchange / Trade-In", href: "#service-exchange" },
      ],
    },
    {
      title: "Showroom",
      links: [
        { label: "Featured Supercars", href: "#inventory" },
        { label: "High-Performance SUVs", href: "#inventory" },
        { label: "Executive Sedans", href: "#inventory" },
        { label: "Electric GT", href: "#inventory" },
      ],
    },
    {
      title: "Client Care",
      links: [
        { label: "180-Point Inspection", href: "#why-us" },
        { label: "Dealership Management", href: "#management" },
        { label: "Enclosed Delivery", href: "#why-us" },
        { label: "Inquire on a Vehicle", href: "#contact" },
      ],
    },
  ],

  // Architecture Roadmap: Future multi-page route definitions
  futureRoutes: {
    buy: { path: "/buy", title: "Buy Vehicles | CAR IN" },
    sell: { path: "/sell", title: "Sell or Consign Your Car" },
    rent: { path: "/rent", title: "Luxury & Exotic Rental Fleet" },
    exchange: { path: "/exchange", title: "Trade-In & Vehicle Exchange" },
    management: { path: "/management", title: "Executive Management & Portal | CAR IN" },
    vehicleDetails: { path: "/vehicles/:id", title: "Vehicle Specification & Provenance" },
    admin: { path: "/admin", title: "Dealer Portal & Inventory Management" },
  },
};
