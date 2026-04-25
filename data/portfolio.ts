/**
 * Portfolio entries. Add `image: "/images/work/your-shot.webp"` when you have a real screenshot;
 * entries without `image` render as labeled layout samples (not implied live sites).
 */
export type PortfolioProject = {
  slug: string;
  name: string;
  location: string;
  country: "Australia" | "USA";
  trade: string;
  note?: string;
  featured?: boolean;
  tone: "warm" | "teal" | "amber" | "sage";
  /** Path under `public/`, e.g. `/images/work/binpro-home.webp` */
  image?: string;
  /** When true (default if no image), UI labels the tile as a layout sample. */
  isSample?: boolean;
};

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "binpro",
    name: "BinPro",
    location: "Melbourne, VIC",
    country: "Australia",
    trade: "Bin Cleaning",
    note: "2 → 8 inquiries/week in first month",
    featured: true,
    tone: "warm",
  },
  {
    slug: "melbourne-mint",
    name: "Melbourne Mint",
    location: "Melbourne, VIC",
    country: "Australia",
    trade: "Cleaning",
    featured: true,
    tone: "amber",
  },
  {
    slug: "inspect-buy-drive",
    name: "Inspect Buy Drive",
    location: "Sydney, NSW",
    country: "Australia",
    trade: "Vehicle Inspection",
    note: "$4k/mo wasted spend found & fixed",
    featured: true,
    tone: "teal",
  },
  {
    slug: "plumbing-pro",
    name: "Plumbing Pro",
    location: "Brisbane, QLD",
    country: "Australia",
    trade: "Plumbing",
    tone: "teal",
  },
  {
    slug: "roofing-solutions",
    name: "Roofing Solutions",
    location: "Sydney, NSW",
    country: "Australia",
    trade: "Roofing",
    tone: "amber",
  },
  {
    slug: "electrical-services",
    name: "Electrical Services",
    location: "Melbourne, VIC",
    country: "Australia",
    trade: "Electrical",
    tone: "warm",
  },
  {
    slug: "fence-deck",
    name: "Fence & Deck Co",
    location: "Perth, WA",
    country: "Australia",
    trade: "Landscaping",
    tone: "sage",
  },
  {
    slug: "binbutler",
    name: "Binbutler",
    location: "Gold Coast, QLD",
    country: "Australia",
    trade: "Bin Cleaning",
    tone: "warm",
  },
  {
    slug: "inspire-energy",
    name: "Inspire Energy",
    location: "Adelaide, SA",
    country: "Australia",
    trade: "Solar/Electrical",
    tone: "amber",
  },
  {
    slug: "gutter-masters",
    name: "Gutter Masters",
    location: "Newcastle, NSW",
    country: "Australia",
    trade: "Gutter Cleaning",
    tone: "sage",
  },
  {
    slug: "bin-cleaning-co",
    name: "Bin Cleaning Co",
    location: "Austin, TX",
    country: "USA",
    trade: "Bin Cleaning",
    tone: "warm",
  },
  {
    slug: "landscape-design",
    name: "Landscape Design",
    location: "Miami, FL",
    country: "USA",
    trade: "Landscaping",
    tone: "sage",
  },
  {
    slug: "pressure-washing-pros",
    name: "Pressure Washing Pros",
    location: "San Diego, CA",
    country: "USA",
    trade: "Pressure Washing",
    tone: "teal",
  },
  {
    slug: "gutter-guys",
    name: "Gutter Guys",
    location: "Phoenix, AZ",
    country: "USA",
    trade: "Gutter Cleaning",
    tone: "amber",
  },
  {
    slug: "dallas-roofing",
    name: "Dallas Roofing",
    location: "Dallas, TX",
    country: "USA",
    trade: "Roofing",
    tone: "warm",
  },
  {
    slug: "atlantic-plumbing",
    name: "Atlantic Plumbing",
    location: "Charleston, SC",
    country: "USA",
    trade: "Plumbing",
    tone: "teal",
  },
];

export function projectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find((p) => p.slug === slug);
}
