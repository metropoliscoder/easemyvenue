"use client";

import { useState } from "react";
import { Search } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────
const quickFilters = [
  { label: "All Venues", value: "" },
  { label: "Wedding",    value: "wedding"    },
  { label: "Corporate",  value: "corporate"  },
  { label: "Garden",     value: "garden"     },
  { label: "Rooftop",    value: "rooftop"    },
  { label: "Farmhouse",  value: "farmhouse"  },
];

const bgImages = [
  "/venues/v1.jpg",
  "/venues/v2.jpg",
  "/venues/v3.jpg",
];

// ─── Corner Ornament ──────────────────────────────────────
function Corner({ className }: { className: string }) {
  return (
    <div className={`absolute w-11 h-11 opacity-30 pointer-events-none ${className}`}>
      <svg viewBox="0 0 44 44" fill="none" stroke="#C9A84C" strokeWidth="1">
        <path d="M2 22 L2 2 L22 2" />
      </svg>
    </div>
  );
}

// ─── Component ────────────────────────────────────────────
interface VenuesHeroProps {
  onSearch?: (query: string) => void;
  onFilterChange?: (type: string) => void;
}

export default function VenuesHero({ onSearch, onFilterChange }: VenuesHeroProps) {
  const [query, setQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const handleSearch = () => {
    onSearch?.(query);
  };

  const handleFilter = (value: string) => {
    setActiveFilter(value);
    onFilterChange?.(value);
  };

  return (
    <section className="relative h-[460px] overflow-hidden flex items-center justify-center">

      {/* ── Mosaic background ── */}
      <div className="absolute inset-0 grid grid-cols-3 gap-0.5">
        {bgImages.map((src, i) => (
          <div key={i} className="overflow-hidden">
            <img
              src={src}
              alt=""
              className="w-full h-full object-cover brightness-[0.42] scale-100 hover:scale-105 transition-transform duration-[8000ms]"
              style={{ animationDelay: `${i * -4}s` }}
            />
          </div>
        ))}
      </div>

      {/* ── Overlays ── */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(8,6,4,0.3)_0%,rgba(8,6,4,0.78)_100%)]" />
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-[rgba(8,6,4,0.7)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-gradient-to-b from-transparent to-[#080604]" />

      {/* ── Corner ornaments ── */}
      <Corner className="top-6 left-6" />
      <Corner className="top-6 right-6 scale-x-[-1]" />
      <Corner className="bottom-16 left-6 scale-y-[-1]" />
      <Corner className="bottom-16 right-6 scale-[-1]" />

      {/* ── Content ── */}
      <div className="relative z-10 text-center px-6 max-w-3xl w-full">

        {/* Breadcrumb */}
        <div className="flex items-center justify-center gap-1.5 text-[11px] text-[#4a4035] tracking-wide mb-4">
          <span>Home</span>
          <span className="text-[#C9A84C]">›</span>
          <span className="text-[#C9A84C]">Venues</span>
        </div>

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.35)] rounded-full px-3.5 py-1.5 text-[#C9A84C] text-[10.5px] font-medium tracking-[0.12em] uppercase bg-[rgba(201,168,76,0.06)] mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse shrink-0" />
          2,400+ Venues Across India
        </div>

        {/* Headline */}
        <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(32px,5.5vw,54px)] font-bold text-[#f5ead8] leading-[1.1] tracking-tight mb-3">
          Discover Your<br />
          <em className="italic text-[#C9A84C]">Perfect</em> Celebration Venue
        </h1>

        {/* Subheading */}
        <p className="text-[14px] text-[#7a7060] leading-relaxed max-w-lg mx-auto mb-6">
          From intimate garden weddings to grand ballroom receptions — find venues that match your vision, budget, and guest count.
        </p>

        {/* Search bar */}
        <div className="flex gap-2 max-w-[580px] mx-auto mb-5">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            placeholder="Search by venue name, area, or city…"
            className="flex-1 px-4 py-3 rounded-[13px] bg-black/65 border border-[rgba(201,168,76,0.2)] text-[#e8dfc8] placeholder-[#3d3428] text-[13.5px] outline-none focus:border-[rgba(201,168,76,0.48)] transition-colors font-['DM_Sans',sans-serif]"
          />
          <button
            onClick={handleSearch}
            className="flex items-center gap-2 px-5 py-3 rounded-[13px] bg-[#C9A84C] text-[#0f0d0a] text-[13px] font-semibold whitespace-nowrap transition-all hover:bg-[#a8843a] hover:-translate-y-0.5"
          >
            <Search size={14} strokeWidth={2.5} />
            Search
          </button>
        </div>

        {/* Quick filter pills */}
        <div className="flex flex-wrap gap-2 justify-center">
          {quickFilters.map(({ label, value }) => (
            <button
              key={value}
              onClick={() => handleFilter(value)}
              className={`px-3.5 py-1.5 rounded-full border text-[11.5px] transition-all duration-200 ${
                activeFilter === value
                  ? "bg-[rgba(201,168,76,0.14)] border-[rgba(201,168,76,0.45)] text-[#C9A84C]"
                  : "border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] text-[#8a7a62] hover:bg-[rgba(201,168,76,0.12)] hover:border-[rgba(201,168,76,0.4)] hover:text-[#C9A84C]"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}