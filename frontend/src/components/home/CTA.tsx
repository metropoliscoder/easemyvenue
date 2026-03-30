"use client";

import { useState } from "react";
import { Sparkles, Search, Phone, Check } from "lucide-react";

// ─── Data ─────────────────────────────────────────────────
const chips = [
  "Garden wedding 300 pax",
  "Corporate seminar 100 pax",
  "Rooftop birthday under ₹2L",
  "Luxury reception 500 pax",
];

const trustPoints = [
  "Free service, no charges",
  "No spam calls guaranteed",
  "Results in under 60 seconds",
];

// ─── Corner Ornament ──────────────────────────────────────
function Corner({ className }: { className: string }) {
  return (
    <div className={`absolute w-10 h-10 opacity-35 ${className}`}>
      <svg viewBox="0 0 40 40" fill="none" stroke="#C9A84C" strokeWidth="1.2">
        <path d="M2 20 L2 2 L20 2" />
      </svg>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────
export default function CTA() {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    // TODO: wire to your AI search route, e.g.:
    // router.push(`/venues?q=${encodeURIComponent(query)}`);
    console.log("AI search:", query);
  };

  return (
    <section className="relative bg-[#080604] overflow-hidden py-20 px-8">

      {/* Ambient centre glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full bg-[radial-gradient(ellipse,rgba(201,168,76,0.09)_0%,transparent_70%)] pointer-events-none" />

      {/* Top / bottom border fade */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(201,168,76,0.3)] to-transparent" />

      {/* Corner ornaments */}
      <Corner className="top-5 left-5" />
      <Corner className="top-5 right-5 scale-x-[-1]" />
      <Corner className="bottom-5 left-5 scale-y-[-1]" />
      <Corner className="bottom-5 right-5 scale-[-1]" />

      {/* Content */}
      <div className="relative z-10 max-w-2xl mx-auto text-center">


        {/* Ghost CTA */}
        <button className="inline-flex items-center gap-2 px-8 py-3.5 rounded-[14px] border border-[rgba(201,168,76,0.4)] bg-[rgba(201,168,76,0.08)] text-[#C9A84C] text-[13px] font-semibold tracking-widest uppercase transition-all duration-200 hover:bg-[rgba(201,168,76,0.16)] hover:border-[rgba(201,168,76,0.65)] hover:-translate-y-0.5">
          <Phone size={15} strokeWidth={2} />
          Talk to a Venue Expert
        </button>

        {/* Trust signals */}
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mt-7">
          {trustPoints.map((point) => (
            <div key={point} className="flex items-center gap-1.5 text-[12px] text-[#4a4035]">
              <Check size={13} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
              {point}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}