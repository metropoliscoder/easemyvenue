import Link from "next/link";
import {
  MapPin, Users, Utensils, Star, Heart, ArrowUpRight,
  Trees, Building2, Sun, Layers,
} from "lucide-react";

type VenueType = "garden" | "indoor" | "outdoor" | "both";

interface ListingVenue {
  id: string;
  name: string;
  location: string;
  pricePerPlate: number;
  guestCapacity: number;
  venueType: VenueType;
  rating: number;
  img: string;
  isFeatured?: boolean;
}

const venueTypeConfig: Record<VenueType, { label: string; icon: React.ElementType; color: string }> = {
  garden:  { label: "Garden",           icon: Trees,     color: "text-emerald-400" },
  indoor:  { label: "Indoor",           icon: Building2, color: "text-sky-400"     },
  outdoor: { label: "Outdoor",          icon: Sun,       color: "text-amber-400"   },
  both:    { label: "Indoor & Outdoor", icon: Layers,    color: "text-violet-400"  },
};

// Replace with your API data / props
const venues: ListingVenue[] = [
  { id: "v1", name: "Royal Orchid Banquet",  location: "Connaught Place, Delhi", pricePerPlate: 2000, guestCapacity: 500, venueType: "indoor",  rating: 4.9, img: "/venues/v1.jpg", isFeatured: true  },
  { id: "v2", name: "Green Acres Garden",    location: "Mehrauli, Delhi",         pricePerPlate: 1500, guestCapacity: 300, venueType: "garden",  rating: 4.7, img: "/venues/v2.jpg"                    },
  { id: "v3", name: "Skyline Rooftop",       location: "Aerocity, Delhi",         pricePerPlate: 3000, guestCapacity: 200, venueType: "outdoor", rating: 4.8, img: "/venues/v3.jpg", isFeatured: true  },
  { id: "v4", name: "Grand Elegance Hall",   location: "Dwarka, Delhi",           pricePerPlate: 1800, guestCapacity: 450, venueType: "both",    rating: 4.6, img: "/venues/v4.jpg"                    },
  { id: "v5", name: "The Ivory Farmhouse",   location: "Chattarpur, Delhi",       pricePerPlate: 2200, guestCapacity: 600, venueType: "both",    rating: 4.8, img: "/venues/v1.jpg", isFeatured: true  },
  { id: "v6", name: "Lotus Garden Resort",   location: "Noida, UP",               pricePerPlate: 1200, guestCapacity: 250, venueType: "garden",  rating: 4.5, img: "/venues/v2.jpg"                    },
  { id: "v1", name: "Royal Orchid Banquet",  location: "Connaught Place, Delhi", pricePerPlate: 2000, guestCapacity: 500, venueType: "indoor",  rating: 4.9, img: "/venues/v1.jpg", isFeatured: true  },
  { id: "v2", name: "Green Acres Garden",    location: "Mehrauli, Delhi",         pricePerPlate: 1500, guestCapacity: 300, venueType: "garden",  rating: 4.7, img: "/venues/v2.jpg"                    },
  { id: "v3", name: "Skyline Rooftop",       location: "Aerocity, Delhi",         pricePerPlate: 3000, guestCapacity: 200, venueType: "outdoor", rating: 4.8, img: "/venues/v3.jpg", isFeatured: true  },
];

function VenueCard({ id, name, location, pricePerPlate, guestCapacity, venueType, rating, img, isFeatured }: ListingVenue) {
  const { label, icon: TypeIcon, color } = venueTypeConfig[venueType];

  return (
    <Link href={`/venues/${id}`} className="group block">
      <div className="rounded-[20px] overflow-hidden bg-[#0f0d0a] border border-[rgba(201,168,76,0.15)] transition-all duration-300 hover:-translate-y-1.5 hover:scale-[1.01] hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] hover:border-[rgba(201,168,76,0.35)]">

        {/* Image */}
        <div className="relative h-48 overflow-hidden">
          <img src={img} alt={name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.08]" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#0f0d0a]/80 pointer-events-none" />

          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {isFeatured ? (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(201,168,76,0.93)] text-[#0f0d0a] text-[10px] font-bold tracking-widest uppercase">
                <Star size={9} fill="currentColor" strokeWidth={0} />
                Featured
              </span>
            ) : <span />}
            <button
              aria-label="Save"
              onClick={(e) => e.preventDefault()}
              className="w-8 h-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:bg-rose-600/80 hover:border-transparent"
            >
              <Heart size={13} strokeWidth={2} />
            </button>
          </div>

          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(15,13,10,0.75)] border border-white/10 backdrop-blur-sm">
            <TypeIcon size={12} strokeWidth={2} className={color} />
            <span className="text-[#e8dfc8] text-[11px] font-medium">{label}</span>
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          <div className="flex items-center gap-1 mb-1.5">
            <MapPin size={11} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
            <span className="text-[11px] text-[#7a7060] tracking-wide truncate">{location}</span>
          </div>
          <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[20px] font-semibold text-[#f0e6cc] leading-tight tracking-tight mb-3">
            {name}
          </h3>
          <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.3)] to-transparent mb-3" />

          <div className="flex items-center mb-3.5">
            <div className="flex items-center gap-1.5 flex-1">
              <Users size={12} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
              <span className="text-[12.5px] font-semibold text-[#e8dfc8]">{guestCapacity.toLocaleString()}</span>
              <span className="text-[10px] text-[#5e5548]">Guests</span>
            </div>
            <div className="w-px h-4 bg-[rgba(201,168,76,0.18)] mx-2.5 shrink-0" />
            <div className="flex items-center gap-1.5 flex-1">
              <Utensils size={12} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
              <span className="text-[12.5px] font-semibold text-[#e8dfc8]">₹{pricePerPlate.toLocaleString()}</span>
              <span className="text-[10px] text-[#5e5548]">/ Plate</span>
            </div>
            <div className="w-px h-4 bg-[rgba(201,168,76,0.18)] mx-2.5 shrink-0" />
            <div className="flex items-center gap-1.5">
              <Star size={12} fill="#C9A84C" strokeWidth={0} />
              <span className="text-[12.5px] font-semibold text-[#e8dfc8]">{rating}</span>
            </div>
          </div>

          <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-[11px] border border-[rgba(201,168,76,0.45)] bg-[rgba(201,168,76,0.09)] text-[#C9A84C] text-[12px] font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-gradient-to-r hover:from-[#C9A84C] hover:to-[#a8843a] hover:border-transparent hover:text-[#0f0d0a] group/btn">
            View Details
            <ArrowUpRight size={13} strokeWidth={2.5} className="transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </Link>
  );
}

export default function VenueListingGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {venues.map((v) => (
        <VenueCard key={v.id} {...v} />
      ))}
    </div>
  );
}