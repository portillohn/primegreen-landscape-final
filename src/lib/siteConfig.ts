/**
 * Centralized site configuration.
 * Update these values to reflect changes across the entire site.
 */
export const siteConfig = {
  name: "Prime Green Landscape LLC",
  legalName: "Prime Green Landscape LLC",
  url: "https://www.primegreenlandscape.com",
  phone: "(571) 405-0031",
  phoneRaw: "+15714050031",
  email: "kevin@primegreenlandscape.com",
  serviceSinceYear: 2025,
  currentYear: new Date().getFullYear(),
  primaryOgImage: "/images/home/premium-lawn-mowing-montgomery-county-md-home-hero.webp",
  serviceAreaOgImage: "/images/services/professional-lawn-care-services-montgomery-county.webp",
  address: {
    city: "Montgomery Village",
    state: "MD",
    zip: "20879",
    county: "Montgomery County",
    country: "US",
  },
  serviceAreas: [
    "Montgomery Village",
    "Gaithersburg",
    "Rockville",
    "Germantown",
    "Bethesda",
    "Silver Spring",
  ],
  social: {
    facebook: "https://www.facebook.com/PrimeGreenLandscape/",
    instagram: "https://www.instagram.com/primegreenmoco/",
  },
} as const;
