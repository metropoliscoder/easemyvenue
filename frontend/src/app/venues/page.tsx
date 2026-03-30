"use client";

import { useState } from "react";
import Navbar from "@/src/components/layout/Navbar";
import VenueSidebar, { FilterState } from "@/src/components/venues/VenueSidebar";
import VenueListingGrid from "@/src/components/venues/VenueListingGrid";
import { Search } from "lucide-react";
import VenuesHero from "@/src/components/venues/VenuesHero";
import Footer from "@/src/components/layout/Footer";

export default function VenuesPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState("relevance");
  const [filters, setFilters] = useState<FilterState>({
    venueTypes: ["indoor", "garden"],
    budgetMax: 3500,
    guestRange: "100-300",
    eventTypes: ["wedding"],
    amenities: ["parking"],
    minRating: "4.0",
  });

  // Active filter pills derived from state
  const activePills: string[] = [
    ...filters.venueTypes,
    filters.guestRange ? `${filters.guestRange} guests` : "",
    ...filters.eventTypes,
    ...filters.amenities,
    filters.minRating ? `${filters.minRating}+ Rating` : "",
  ].filter(Boolean);

  const removeFilter = (pill: string) => {
    setFilters((f) => ({
      ...f,
      venueTypes: f.venueTypes.filter((v) => v !== pill),
      eventTypes: f.eventTypes.filter((v) => v !== pill),
      amenities:  f.amenities.filter((v) => v !== pill),
      guestRange: f.guestRange && `${f.guestRange} guests` === pill ? "" : f.guestRange,
      minRating:  f.minRating && `${f.minRating}+ Rating` === pill ? "" : f.minRating,
    }));
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#080604] text-[#e8dfc8] min-h-screen pt-16">
        <VenuesHero />

        {/* ── Body ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-5 mx-auto px-10 py-6 pb-20">

          {/* Sidebar */}
          <VenueSidebar filters={filters} onChange={setFilters} />

          {/* Main listing */}
          <main>
            {/* Toolbar */}
            <div className="flex items-center justify-between mb-3 gap-3 flex-wrap">
              <p className="text-[13px] text-[#5a5045]">
                <span className="text-[#b09070] font-semibold">48</span> venues found
              </p>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] text-[#4a4035] whitespace-nowrap">Sort by</span>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-3 py-2 rounded-[10px] bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.18)] text-[#b09070] text-[12px] outline-none font-['DM_Sans',sans-serif]"
                  >
                    <option value="relevance">Relevance</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                    <option value="rating">Rating</option>
                    <option value="newest">Newest</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Active filter pills */}
            {activePills.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {activePills.map((pill) => (
                  <div
                    key={pill}
                    className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.07)] text-[11.5px] text-[#C9A84C]"
                  >
                    {pill}
                    <button
                      onClick={() => removeFilter(pill)}
                      className="w-3.5 h-3.5 rounded-full bg-[rgba(201,168,76,0.2)] flex items-center justify-center text-[9px] hover:bg-[rgba(201,168,76,0.4)] transition-colors"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Grid */}
            <VenueListingGrid />

            {/* Pagination */}
            <div className="flex items-center justify-center gap-1.5 mt-7">
              {["‹", "1", "2", "3", "…", "8", "›"].map((p, i) => (
                <button
                  key={i}
                  className={`w-9 h-9 rounded-[9px] border text-[13px] flex items-center justify-center transition-all ${
                    p === "1"
                      ? "bg-[#C9A84C] text-[#0f0d0a] border-[#C9A84C] font-semibold"
                      : "border-[rgba(201,168,76,0.2)] text-[#7a7060] hover:bg-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.4)] hover:text-[#C9A84C]"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}