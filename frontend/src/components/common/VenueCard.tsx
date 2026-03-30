import React from 'react'
import { Building2, Sun, Layers, Star, Heart, ArrowUpRight, MapPin, Users, Utensils, Trees } from "lucide-react";
import Link from "next/link";
import { Venue, VenueType } from "../../data/venues";

// ─── Venue Type Config ───────────────────────────────────
const venueTypeConfig: Record<
  VenueType,
  { label: string; icon: React.ElementType; colorClass: string }
> = {
  garden:  { label: "Garden",           icon: Trees,     colorClass: "text-emerald-400" },
  indoor:  { label: "Indoor",           icon: Building2, colorClass: "text-sky-400"     },
  outdoor: { label: "Outdoor",          icon: Sun,       colorClass: "text-amber-400"   },
  both:    { label: "Indoor & Outdoor", icon: Layers,    colorClass: "text-violet-400"  },
};

// ─── VenueCard ───────────────────────────────────────────
const VenueCard =({
  name,
  slug,
  pricePerPlate,
  guestCapacity,
  venueType,
  location,
  img,
  rating = 4.8,
  isFeatured = false,
}: Venue) => {
  const { label, icon: TypeIcon, colorClass } = venueTypeConfig[venueType];

  return (
    <Link href={`/venues/${slug}`}>
        <div className="venue-card group relative rounded-[20px] overflow-hidden bg-[#0f0d0a] border border-[rgba(201,168,76,0.18)] shadow-[0_4px_24px_rgba(0,0,0,0.5)] cursor-pointer transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-[1.015] hover:shadow-[0_20px_60px_rgba(0,0,0,0.65),0_0_0_1px_rgba(201,168,76,0.38)] hover:border-[rgba(201,168,76,0.38)]">

        {/* ── Image ── */}
        <div className="relative h-48 overflow-hidden">
            <img
            src={img}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-[#0f0d0a]/85 pointer-events-none" />

            {/* Top Row */}
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            {isFeatured ? (
                <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-[rgba(201,168,76,0.93)] text-[#0f0d0a] text-[10px] font-bold tracking-widest uppercase">
                <Star size={9} fill="currentColor" strokeWidth={0} />
                Featured
                </span>
            ) : (
                <span />
            )}
            <button
                aria-label="Save to wishlist"
                className="w-8 h-8 rounded-full border border-white/20 bg-black/40 backdrop-blur-sm text-white flex items-center justify-center transition-all hover:bg-rose-600/80 hover:border-transparent"
            >
                <Heart size={14} strokeWidth={2} />
            </button>
            </div>

            {/* Venue Type Tag */}
            <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[rgba(15,13,10,0.75)] border border-white/10 backdrop-blur-sm">
            <TypeIcon size={13} strokeWidth={2} className={colorClass} />
            <span className="text-[#e8dfc8] text-[11px] font-medium">{label}</span>
            </div>
        </div>

        {/* ── Body ── */}
        <div className="p-4">

            {/* Location */}
            <div className="flex items-center gap-1 mb-1.5">
            <MapPin size={12} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
            <span className="text-[11px] text-[#7a7060] tracking-wide truncate">{location}</span>
            </div>

            {/* Name */}
            <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[21px] font-semibold text-[#f0e6cc] leading-tight tracking-tight mb-3">
            {name}
            </h3>

            {/* Divider */}
            <div className="h-px bg-gradient-to-r from-[rgba(201,168,76,0.35)] to-transparent mb-3" />

            {/* Stats */}
            <div className="flex items-center mb-4">
            <div className="flex items-center gap-1.5 flex-1">
                <Users size={13} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
                <span className="text-[13px] font-semibold text-[#e8dfc8]">
                {guestCapacity.toLocaleString()}
                </span>
                <span className="text-[10.5px] text-[#5e5548]">Guests</span>
            </div>

            <div className="w-px h-5 bg-[rgba(201,168,76,0.2)] mx-2.5 shrink-0" />

            <div className="flex items-center gap-1.5 flex-1">
                <Utensils size={13} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
                <span className="text-[13px] font-semibold text-[#e8dfc8]">
                ₹{pricePerPlate.toLocaleString()}
                </span>
                <span className="text-[10.5px] text-[#5e5548]">/ Plate</span>
            </div>

            <div className="w-px h-5 bg-[rgba(201,168,76,0.2)] mx-2.5 shrink-0" />

            <div className="flex items-center gap-1.5">
                <Star size={12} fill="#C9A84C" strokeWidth={0} className="shrink-0" />
                <span className="text-[13px] font-semibold text-[#e8dfc8]">{rating}</span>
            </div>
            </div>

            {/* CTA */}
            <button className="w-full flex items-center justify-center gap-1.5 py-2.5 rounded-xl border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.1)] text-[#C9A84C] text-[12px] font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-gradient-to-r hover:from-[#C9A84C] hover:to-[#a8843a] hover:border-transparent hover:text-[#0f0d0a] hover:-translate-y-0.5 group/btn">
            View Details
            <ArrowUpRight
                size={14}
                strokeWidth={2.5}
                className="transition-transform duration-200 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            />
            </button>
        </div>
        </div>
    </Link>
  );
}

export default VenueCard