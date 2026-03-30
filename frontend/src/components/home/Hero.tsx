"use client";

import { useState } from "react";
import { Sparkles, SlidersHorizontal, Search } from "lucide-react";
import SearchBox from "./SearchBox";

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden px-4 py-20 h-[100vh]">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-[url('/hero-banner.png')] bg-cover bg-center opacity-25"
      />

      {/* Vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(5,4,2,0.85)_100%)]" />

      {/* Top-bottom gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[rgba(8,6,4,0.55)] via-[rgba(8,6,4,0.25)] to-[rgba(8,6,4,0.75)]" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-3xl text-center">

        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.45)] rounded-full px-4 py-1.5 text-[#C9A84C] text-[11px] font-medium tracking-widest uppercase bg-[rgba(201,168,76,0.06)] backdrop-blur-sm mb-7">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
          AI-Powered Venue Discovery
        </div>

        {/* Headline */}
        <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(36px,6vw,62px)] font-semibold text-[#f5ead8] leading-[1.12] tracking-tight mb-5">
          Find Your Perfect{" "}
          <em className="italic text-[#C9A84C]">Celebration</em>{" "}
          Venue in Minutes
        </h1>

        {/* Subheading */}
        <p className="text-[clamp(14px,2vw,17px)] text-[#979797] leading-relaxed max-w-[520px] mx-auto mb-9 font-light">
          No more 50 irrelevant options. Get venues that match your{" "}
          <span className="text-[#b09070] font-medium">
            budget, guest count & location
          </span>{" "}
          — powered by AI.
        </p>

        {/* Search Box */}
        <SearchBox />

        {/* Stats */}
        <div className="flex items-center justify-center gap-7 mt-7">
          {[
            { num: "2,400+", label: "Venues Listed" },
            { num: "18K+",   label: "Events Booked" },
            { num: "4.9★",   label: "Avg Rating" },
          ].map((s, i) => (
            <div key={s.label} className="flex items-center gap-7">
              <div className="text-center">
                <div className="font-['Cormorant_Garamond',Georgia,serif] text-[22px] font-semibold text-[#C9A84C] leading-none">
                  {s.num}
                </div>
                <div className="text-[11px] text-[#5a5045] mt-1 tracking-widest uppercase">
                  {s.label}
                </div>
              </div>
              {i < 2 && (
                <div className="w-px h-7 bg-[rgba(201,168,76,0.2)]" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}