"use client";

import { useState } from "react";
import { Sparkles, SlidersHorizontal, Search } from "lucide-react";

type Tab = "ai" | "filter";

const chips = [
  "🌸 Garden wedding 500 pax",
  "💼 Corporate 200 pax",
  "🎂 Rooftop Birthday",
  "💍 Luxury Reception",
];

export default function SearchBox() {
  const [activeTab, setActiveTab] = useState<Tab>("ai");
  const [query, setQuery] = useState("");

  return (
    <div className="bg-[rgba(15,12,8,0.72)] backdrop-blur-2xl border border-[rgba(201,168,76,0.2)] rounded-[20px] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.5)]">

      {/* ── Tabs ── */}
      <div className="flex gap-1.5 mb-4 bg-black/40 rounded-xl p-1">
        {(
          [
            { id: "ai",     label: "AI Search",     icon: Sparkles       },
            { id: "filter", label: "Filter Search",  icon: SlidersHorizontal },
          ] as { id: Tab; label: string; icon: React.ElementType }[]
        ).map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-[9px] text-[13px] font-medium transition-all duration-200 ${
              activeTab === id
                ? "bg-[#C9A84C] text-[#0f0d0a]"
                : "text-[#dfdfdf] hover:text-[#b09070]"
            }`}
          >
            <Icon size={14} strokeWidth={2} />
            {label}
          </button>
        ))}
      </div>

      {/* ── AI Search Panel ── */}
      {activeTab === "ai" && (
        <>
          <div className="flex gap-2.5">
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="e.g. Garden wedding in Noida for 150 guests under ₹5 lakh"
              className="flex-1 px-4 py-3 rounded-xl bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#4a4035] text-[14px] outline-none transition-colors focus:border-[rgba(201,168,76,0.45)] font-['DM_Sans',sans-serif]"
            />
            <button className="flex items-center gap-1.5 px-5 py-3 rounded-xl bg-[#C9A84C] hover:bg-[#a8843a] text-[#0f0d0a] text-[13px] font-semibold whitespace-nowrap transition-all duration-200 hover:-translate-y-0.5">
              <Search size={14} strokeWidth={2.5} />
              Find My Venue
            </button>
          </div>

          {/* Suggestion chips */}
          <div className="flex flex-wrap gap-2 mt-3">
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => setQuery(chip)}
                className="px-3 py-1.5 rounded-full border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] text-[#9a8a72] text-[12px] transition-all duration-200 hover:bg-[rgba(201,168,76,0.14)] hover:border-[rgba(201,168,76,0.45)] hover:text-[#C9A84C]"
              >
                {chip}
              </button>
            ))}
          </div>
        </>
      )}

      {/* ── Filter Search Panel ── */}
      {activeTab === "filter" && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 items-end">
          {[
            { placeholder: "Location",   col: "" },
            { placeholder: "Guests",     col: "" },
            { placeholder: "Budget",     col: "" },
            { placeholder: "Event Type", col: "" },
          ].map(({ placeholder }) => (
            <input
              key={placeholder}
              placeholder={placeholder}
              className="px-4 py-3 rounded-xl bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#4a4035] text-[13px] outline-none transition-colors focus:border-[rgba(201,168,76,0.45)] font-['DM_Sans',sans-serif]"
            />
          ))}
          <button className="md:col-span-4 flex items-center justify-center gap-2 py-3 rounded-xl bg-[#C9A84C] hover:bg-[#a8843a] text-[#0f0d0a] text-[13px] font-semibold transition-all duration-200 hover:-translate-y-0.5 mt-1">
            <Search size={14} strokeWidth={2.5} />
            Search Venues
          </button>
        </div>
      )}
    </div>
  );
}