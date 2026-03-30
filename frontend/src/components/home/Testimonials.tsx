"use client";

import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Play } from "lucide-react";
import Heading from "../common/Heading";

// ─── Types & Data ─────────────────────────────────────────
interface Testimonial {
  tag: string;
  quote: string;
  name: string;
  event: string;
  initials: string;
  rating: number;
  venueName: string;
  venueImg: string;
  stats: { label: string; value: string }[];
  videoUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    tag: "Wedding",
    quote:
      "Got the perfect venue within our budget in just 2 days! The AI suggestions were spot on — no irrelevant calls, no wasted site visits.",
    name: "Neha & Rahul",
    event: "Wedding · Noida · 300 guests",
    initials: "NR",
    rating: 5,
    venueName: "Royal Orchid Banquet, Noida",
    venueImg: "/venues/v1.jpg",
    stats: [
      { label: "Guests",  value: "300"    },
      { label: "/ Plate", value: "₹2,000" },
      { label: "To Book", value: "2 days" },
    ],
  },
  {
    tag: "Corporate",
    quote:
      "Booked a 200-person conference hall in Delhi in under 48 hours. The filter search saved us days of back-and-forth with random venues.",
    name: "Arjun Patel",
    event: "Corporate Event · Delhi · 200 guests",
    initials: "AP",
    rating: 5,
    venueName: "Skyline Rooftop, Delhi",
    venueImg: "/venues/v3.jpg",
    stats: [
      { label: "Guests",  value: "200"    },
      { label: "/ Plate", value: "₹3,000" },
      { label: "To Book", value: "48 hrs" },
    ],
  },
  {
    tag: "Reception",
    quote:
      "The booking support team was incredible — they negotiated the rate down and handled all the paperwork. Felt like having a personal event planner.",
    name: "Priya & Sameer",
    event: "Reception · Gurgaon · 450 guests",
    initials: "PS",
    rating: 5,
    venueName: "Green Acres Garden, Gurgaon",
    venueImg: "/venues/v2.jpg",
    stats: [
      { label: "Guests",  value: "450"    },
      { label: "/ Plate", value: "₹1,500" },
      { label: "To Book", value: "3 days" },
    ],
  },
];

// ─── Star Rating ──────────────────────────────────────────
function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={14} strokeWidth={0} fill="#C9A84C" className="shrink-0" />
      ))}
    </div>
  );
}

// ─── Single Slide ─────────────────────────────────────────
function TestimonialSlide({
  tag, quote, name, event, initials, rating,
  venueName, venueImg, stats, videoUrl,
}: Testimonial) {
  return (
    <div className="grid md:grid-cols-2 min-h-[340px] rounded-[22px] border border-[rgba(201,168,76,0.18)] overflow-hidden bg-gradient-to-br from-[rgba(201,168,76,0.06)] to-[#0c0a07]">

      {/* ── Left: Quote ── */}
      <div className="flex flex-col justify-between gap-5 p-10 border-b md:border-b-0 md:border-r border-[rgba(201,168,76,0.1)]">
        <div className="flex flex-col gap-4">
          <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase text-[#C9A84C] bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.22)] rounded-full px-3 py-1 w-fit">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
            {tag}
          </span>
          <StarRating count={rating} />
          <div className="font-['Cormorant_Garamond',Georgia,serif] text-[64px] font-semibold text-[rgba(201,168,76,0.18)] leading-none select-none -mb-2">
            "
          </div>
          <p className="font-['Cormorant_Garamond',Georgia,serif] italic text-[19px] text-[#d4c5a9] leading-relaxed">
            {quote}
          </p>
        </div>

        <div className="flex items-center gap-3.5 pt-5 border-t border-[rgba(201,168,76,0.12)]">
          <div className="w-11 h-11 rounded-full bg-[rgba(201,168,76,0.12)] border-[1.5px] border-[rgba(201,168,76,0.35)] flex items-center justify-center text-[13px] font-semibold text-[#C9A84C] shrink-0">
            {initials}
          </div>
          <div>
            <div className="text-[14px] font-semibold text-[#e8dfc8]">{name}</div>
            <div className="text-[11.5px] text-[#5a5045] mt-0.5">{event}</div>
          </div>
        </div>
      </div>

      {/* ── Right: Video Panel ── */}
      <div className="relative flex items-center justify-center bg-[#0a0806] overflow-hidden">
        <img
          src={venueImg}
          alt={venueName}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[rgba(8,6,4,0.7)] to-[rgba(8,6,4,0.3)]" />

        <div className="relative z-10 text-center px-8 py-10">
          <a
            href={videoUrl ?? "#"}
            target="_blank"
            rel="noopener noreferrer"
            className="w-[68px] h-[68px] rounded-full border-2 border-[rgba(201,168,76,0.6)] bg-[rgba(201,168,76,0.12)] flex items-center justify-center mx-auto mb-5 transition-all duration-200 hover:bg-[rgba(201,168,76,0.25)] hover:border-[#C9A84C] hover:scale-110 backdrop-blur-sm"
            aria-label="Watch video testimonial"
          >
            <Play size={24} fill="#C9A84C" strokeWidth={0} className="ml-1" />
          </a>
          <p className="font-['Cormorant_Garamond',Georgia,serif] italic text-[15px] text-[rgba(201,168,76,0.78)] tracking-wide">
            Watch Their Story
          </p>
          <p className="text-[11px] text-[#5a5045] mt-1.5 tracking-widest uppercase">
            {venueName}
          </p>

          <div className="flex items-stretch justify-center mt-6">
            {stats.map((s, i) => (
              <div key={s.label} className="flex items-stretch">
                <div className="text-center px-4">
                  <div className="font-['Cormorant_Garamond',Georgia,serif] text-[22px] font-semibold text-[#C9A84C]">
                    {s.value}
                  </div>
                  <div className="text-[10px] text-[#5a5045] tracking-widest uppercase mt-0.5">
                    {s.label}
                  </div>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px bg-[rgba(201,168,76,0.2)] self-stretch" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────
export default function Testimonials() {
  const [cur, setCur] = useState(0);
  const total = testimonials.length;

  const go = useCallback((n: number) => setCur((n + total) % total), [total]);

  useEffect(() => {
    const id = setInterval(() => go(cur + 1), 5000);
    return () => clearInterval(id);
  }, [cur, go]);

  return (
    <section className="bg-black text-white py-16 px-8">
      <Heading heading="What Our Clients Say" />

      <div className="max-w-5xl mx-auto">
        {/* Track */}
        <div className="overflow-hidden rounded-[24px]">
          <div
            className="flex transition-transform duration-[550ms] ease-[cubic-bezier(0.77,0,0.175,1)]"
            style={{ transform: `translateX(-${cur * 100}%)` }}
          >
            {testimonials.map((t) => (
              <div key={t.name} className="min-w-full p-0.5">
                <TestimonialSlide {...t} />
              </div>
            ))}
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4 mt-7">
          <button
            onClick={() => go(cur - 1)}
            aria-label="Previous"
            className="w-[42px] h-[42px] rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.07)] flex items-center justify-center transition-all hover:bg-[rgba(201,168,76,0.18)] hover:border-[rgba(201,168,76,0.6)]"
          >
            <ChevronLeft size={16} strokeWidth={2} className="text-[#C9A84C]" />
          </button>

          <div className="flex gap-2 items-center">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
                className={`h-2 rounded-full border-none transition-all duration-300 ${
                  i === cur ? "w-6 bg-[#C9A84C]" : "w-2 bg-[rgba(201,168,76,0.25)]"
                }`}
              />
            ))}
          </div>

          <button
            onClick={() => go(cur + 1)}
            aria-label="Next"
            className="w-[42px] h-[42px] rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.07)] flex items-center justify-center transition-all hover:bg-[rgba(201,168,76,0.18)] hover:border-[rgba(201,168,76,0.6)]"
          >
            <ChevronRight size={16} strokeWidth={2} className="text-[#C9A84C]" />
          </button>
        </div>
      </div>
    </section>
  );
}