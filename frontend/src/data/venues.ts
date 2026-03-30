export type VenueType = "garden" | "indoor" | "outdoor" | "both";
export interface Venue {
  name: string;
  slug: string;
  pricePerPlate: number;
  guestCapacity: number;
  venueType: VenueType;
  location: string;
  img: string;
  rating?: number;
  isFeatured?: boolean;
}

// ─── Data ────────────────────────────────────────────────
export const venues: Venue[] = [
  {
    name: "Royal Orchid Banquet",
    slug: "royal-orchid-banquet",
    pricePerPlate: 2000,
    guestCapacity: 500,
    venueType: "indoor",
    location: "Connaught Place, Delhi",
    img: "/venues/v1.jpg",
    rating: 4.9,
    isFeatured: true,
  },
  {
    name: "Green Acres Garden",
    slug: "green-acres-garden",
    pricePerPlate: 1500,
    guestCapacity: 300,
    venueType: "garden",
    location: "Mehrauli, Delhi",
    img: "/venues/v2.jpg",
    rating: 4.7,
  },
  {
    name: "Skyline Rooftop",
    slug: "skyline-rooftop",
    pricePerPlate: 3000,
    guestCapacity: 200,
    venueType: "outdoor",
    location: "Aerocity, Delhi",
    img: "/venues/v3.jpg",
    rating: 4.8,
    isFeatured: true,
  },
  {
    name: "Grand Elegance Hall",
    slug: "grand-elegance-hall",
    pricePerPlate: 1800,
    guestCapacity: 450,
    venueType: "both",
    location: "Dwarka, Delhi",
    img: "/venues/v4.jpg",
    rating: 4.6,
  },
  {
    name: "Royal Orchid Banquet",
    slug: "royal-orchid-banquet",
    pricePerPlate: 2000,
    guestCapacity: 500,
    venueType: "indoor",
    location: "Connaught Place, Delhi",
    img: "/venues/v1.jpg",
    rating: 4.9,
    isFeatured: true,
  },
  {
    name: "Green Acres Garden",
    slug: "green-acres-garden",
    pricePerPlate: 1500,
    guestCapacity: 300,
    venueType: "garden",
    location: "Mehrauli, Delhi",
    img: "/venues/v2.jpg",
    rating: 4.7,
  },
  {
    name: "Green Acres Garden",
    slug: "green-acres-garden",
    pricePerPlate: 1500,
    guestCapacity: 300,
    venueType: "garden",
    location: "Mehrauli, Delhi",
    img: "/venues/v2.jpg",
    rating: 4.7,
  },
  {
    name: "Skyline Rooftop",
    slug: "skyline-rooftop",
    pricePerPlate: 3000,
    guestCapacity: 200,
    venueType: "outdoor",
    location: "Aerocity, Delhi",
    img: "/venues/v3.jpg",
    rating: 4.8,
    isFeatured: true,
  },
];