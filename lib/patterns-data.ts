export type PatternCategory = "ALL" | "DRESSES" | "TOPS" | "BOTTOMS" | "JACKETS" | "SETS" | "OTHER"

export type PatternBadge = "PASSION" | "BUSINESS"

export interface Pattern {
  id: string
  title: string
  designer: string
  price: number
  image: string
  category: PatternCategory
  badge: PatternBadge
  liked: boolean
  featured: boolean
  height: "tall" | "medium" | "short"
  sales?: number
}

export const patterns: Pattern[] = [
  {
    id: "1",
    title: "Parisian Evening Gown",
    designer: "Maison Élise",
    price: 48,
    image: "/images/pattern-1.jpg",
    category: "DRESSES",
    badge: "PASSION",
    liked: false,
    featured: true,
    height: "tall",
  },
  {
    id: "2",
    title: "Silk Drape Blouse",
    designer: "Atelier Noémie",
    price: 28,
    image: "/images/pattern-2.jpg",
    category: "TOPS",
    badge: "BUSINESS",
    liked: true,
    featured: true,
    height: "medium",
  },
  {
    id: "3",
    title: "Structured Blazer",
    designer: "Maison Duval",
    price: 56,
    image: "/images/pattern-3.jpg",
    category: "JACKETS",
    badge: "BUSINESS",
    liked: false,
    featured: true,
    height: "short",
  },
  {
    id: "4",
    title: "Wide-Leg Trousers",
    designer: "Clara Fontaine",
    price: 32,
    image: "/images/pattern-4.jpg",
    category: "BOTTOMS",
    badge: "PASSION",
    liked: false,
    featured: false,
    height: "medium",
  },
  {
    id: "5",
    title: "Coordinated Set",
    designer: "Studio Margaux",
    price: 64,
    image: "/images/pattern-5.jpg",
    category: "SETS",
    badge: "BUSINESS",
    liked: true,
    featured: false,
    height: "tall",
  },
  {
    id: "6",
    title: "Flowing Wrap Dress",
    designer: "Atelier Noémie",
    price: 42,
    image: "/images/pattern-6.jpg",
    category: "DRESSES",
    badge: "PASSION",
    liked: false,
    featured: false,
    height: "short",
  },
  {
    id: "7",
    title: "Wool Overcoat",
    designer: "Maison Duval",
    price: 72,
    image: "/images/pattern-7.jpg",
    category: "JACKETS",
    badge: "BUSINESS",
    liked: false,
    featured: false,
    height: "tall",
  },
  {
    id: "8",
    title: "Boned Corset Bodice",
    designer: "Maison Élise",
    price: 38,
    image: "/images/pattern-8.jpg",
    category: "TOPS",
    badge: "PASSION",
    liked: true,
    featured: false,
    height: "medium",
  },
]

export const userPatterns: Pattern[] = [
  {
    id: "u1",
    title: "Linen Summer Dress",
    designer: "You",
    price: 36,
    image: "/images/pattern-1.jpg",
    category: "DRESSES",
    badge: "PASSION",
    liked: false,
    featured: false,
    height: "medium",
    sales: 24,
  },
  {
    id: "u2",
    title: "Cropped Bolero",
    designer: "You",
    price: 22,
    image: "/images/pattern-3.jpg",
    category: "JACKETS",
    badge: "BUSINESS",
    liked: false,
    featured: false,
    height: "short",
    sales: 12,
  },
]

export const purchasedPatterns: Pattern[] = [
  patterns[0],
  patterns[1],
  patterns[4],
  patterns[7],
]

export const categories: PatternCategory[] = [
  "ALL",
  "DRESSES",
  "TOPS",
  "BOTTOMS",
  "JACKETS",
  "SETS",
  "OTHER",
]
