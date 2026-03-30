"use client";

import { useState } from "react";
import {
  MapPin, Star, Clock, Users, CalendarDays, Lock,
  Wifi, Car, Utensils, Wind, Heart, Music, Home,
  Tv, Shield, Phone, Check, Play,
} from "lucide-react";
import Navbar from "@/src/components/layout/Navbar";
import Footer from "@/src/components/layout/Footer";

// ─── Types ────────────────────────────────────────────────
interface PricingRow {
  name: string;
  includes: string;
  price: string;
  tag?: string;
}

interface Review {
  initials: string;
  name: string;
  date: string;
  rating: number;
  text: string;
}

// ─── Static Data (replace with API/props) ─────────────────
const venue = {
  name: "The Grand Imperial",
  location: "Connaught Place, New Delhi",
  rating: 4.9,
  reviewCount: 312,
  badges: ["Premium", "5-Star", "Indoor & Outdoor"],
  about:
    "The Grand Imperial has been Delhi's most celebrated banquet destination for over two decades. With four magnificently appointed halls and a sprawling outdoor lawn, every event here becomes a cherished memory. Our expert culinary team crafts menus from across India and internationally, while our décor specialists create visual masterpieces tailored to your vision.",
  stats: [
    { num: "800",   label: "Max Guests"   },
    { num: "4",     label: "Halls"        },
    { num: "22",    label: "Years"        },
    { num: "2,400", label: "Events Done"  },
  ],
  photos: [
    "/venues/v1.jpg",
    "/venues/v2.jpg",
    "/venues/v3.jpg",
    "/venues/v4.jpg",
  ],
  videoThumbnail: "/venues/v1.jpg",
  videoUrl: "https://youtube.com/watch?v=REPLACE_ME",
  amenities: [
    { icon: Car,      label: "Valet Parking"      },
    { icon: Utensils, label: "In-House Catering"  },
    { icon: Wind,     label: "Fully AC"           },
    { icon: Heart,    label: "Bridal Suite"       },
    { icon: Music,    label: "Live DJ Setup"      },
    { icon: Home,     label: "Outdoor Lawn"       },
    { icon: Tv,       label: "LED Screens"        },
    { icon: Wifi,     label: "High-Speed Wi-Fi"   },
    { icon: Shield,   label: "24/7 Security"      },
  ],
  pricing: [
    { name: "Veg Standard",   includes: "Starter · Main · Dessert · Mocktail",   price: "₹2,200", tag: "Popular"    },
    { name: "Non-Veg Premium",includes: "+ Grills · Live Counters · Dessert Bar", price: "₹2,600"                   },
    { name: "Royal Banquet",  includes: "All-inclusive · Bar · 5-course dinner",  price: "₹3,400", tag: "Best Value" },
    { name: "Customised",     includes: "Tailored to your event",                 price: "On Request"               },
  ] satisfies PricingRow[],
  reviews: [
    { initials: "NR", name: "Neha & Rahul",  date: "March 2025 · Wedding",    rating: 5, text: "Absolutely spectacular venue. The staff handled every detail flawlessly — from décor to catering. Our 400 guests couldn't stop raving about the experience."      },
    { initials: "AP", name: "Arjun Patel",   date: "Jan 2025 · Corporate",    rating: 5, text: "The AV setup was world-class for our annual conference. Seamless coordination, impeccable service, and the food was genuinely outstanding."                       },
    { initials: "PS", name: "Priya & Sameer",date: "Dec 2024 · Reception",    rating: 5, text: "The team went above and beyond. Our reception felt like a royal affair. Highly recommend the Royal Banquet package — worth every rupee."                          },
  ] satisfies Review[],
  ratingBreakdown: [82, 13, 3, 1, 1],
  quickInfo: [
    { icon: Clock,       label: "Timing",   value: "7 AM – 12 AM"       },
    { icon: CalendarDays,label: "Advance",  value: "30% to confirm"     },
    { icon: Users,       label: "Capacity", value: "100 – 800 guests"   },
    { icon: MapPin,      label: "Area",     value: "Connaught Place"    },
  ],
};

// ─── Helpers ──────────────────────────────────────────────
function Stars({ count, size = 13 }: { count: number; size?: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} size={size} strokeWidth={0} fill="#C9A84C" className="shrink-0" />
      ))}
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="flex items-center gap-3 font-['Cormorant_Garamond',Georgia,serif] text-[20px] font-semibold text-[#C9A84C] mb-5 tracking-wide">
      {children}
      <span className="flex-1 h-px bg-gradient-to-r from-[rgba(201,168,76,0.25)] to-transparent" />
    </h2>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.13)] rounded-[20px] p-7 ${className}`}>
      {children}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────
export default function VenueDetailPage() {
  const [inquiryForm, setInquiryForm] = useState({
    date: "", guests: "", eventType: "", name: "", phone: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: POST to your inquiry API
    console.log("Inquiry:", inquiryForm);
  };

  return (
    <>
      <Navbar />
      <div className="bg-[#080604] text-[#e8dfc8] min-h-screen pt-16">

        {/* ── HERO PHOTO GRID ── */}
        <section className="relative h-[520px] overflow-hidden">
          <div className="grid grid-cols-[1.6fr_1fr] grid-rows-2 gap-0.5 h-full">

            {/* Main photo */}
            <div className="row-span-2 overflow-hidden">
              <img src={venue.photos[0]} alt={venue.name} className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.03]" />
            </div>

            {/* Sub photos */}
            <div className="overflow-hidden relative">
              <img src={venue.photos[1]} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]" />
            </div>
            <div className="overflow-hidden relative">
              <img src={venue.photos[2]} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-[1.04]" />
              <button className="absolute bottom-3 right-3 bg-[rgba(15,12,8,0.82)] border border-[rgba(201,168,76,0.4)] text-[#C9A84C] text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-lg backdrop-blur-sm transition-all hover:bg-[rgba(201,168,76,0.15)]">
                + 14 Photos
              </button>
            </div>
          </div>

          {/* Overlay + info */}
          <div className="absolute inset-0 bg-gradient-to-t from-[rgba(8,6,4,0.92)] via-[rgba(8,6,4,0.1)] to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 right-0 px-10 pb-8 flex items-end justify-between">
            <div>
              <div className="flex gap-2 mb-2.5">
                {venue.badges.map((b, i) => (
                  <span key={b} className={`text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full ${i === 0 ? "bg-[rgba(201,168,76,0.92)] text-[#0f0d0a]" : "bg-[rgba(201,168,76,0.12)] text-[#C9A84C] border border-[rgba(201,168,76,0.35)]"}`}>
                    {b}
                  </span>
                ))}
              </div>
              <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-[38px] font-bold text-[#f5ead8] leading-tight tracking-tight">
                {venue.name}
              </h1>
              <div className="flex items-center gap-1.5 text-[13px] text-[#9a8a72] mt-2">
                <MapPin size={14} strokeWidth={2} className="text-[#C9A84C]" />
                {venue.location}
              </div>
            </div>
            <div className="text-right">
              <div className="font-['Cormorant_Garamond',serif] text-[42px] font-bold text-[#C9A84C] leading-none">
                {venue.rating}
              </div>
              <Stars count={5} size={13} />
              <div className="text-[12px] text-[#5a5045] mt-1">{venue.reviewCount} reviews</div>
            </div>
          </div>
        </section>

        {/* ── STICKY NAV TABS ── */}
        <nav className="sticky top-16 z-40 bg-[rgba(8,6,4,0.92)] backdrop-blur-2xl border-b border-[rgba(201,168,76,0.14)] px-10 flex gap-0 overflow-x-auto">
          {["Overview","Gallery","Amenities","Pricing","Reviews","Location"].map((t, i) => (
            <a key={t} href={`#${t.toLowerCase()}`} className={`px-4 py-3.5 text-[13px] font-medium whitespace-nowrap border-b-2 transition-all ${i === 0 ? "text-[#C9A84C] border-[#C9A84C]" : "text-[#5a5045] border-transparent hover:text-[#b09070]"}`}>
              {t}
            </a>
          ))}
        </nav>

        {/* ── MAIN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-6  mx-auto px-10 py-8 pb-20">

          {/* ── LEFT ── */}
          <div className="flex flex-col gap-5" id="overview">

            {/* About */}
            <Card id="overview">
              <SectionTitle>About This Venue</SectionTitle>
              <p className="text-[14px] text-[#7a7060] leading-[1.85]">{venue.about}</p>
              <div className="grid grid-cols-4 mt-6 border border-[rgba(201,168,76,0.13)] rounded-[14px] overflow-hidden">
                {venue.stats.map((s, i) => (
                  <div key={s.label} className={`py-4 text-center ${i < venue.stats.length - 1 ? "border-r border-[rgba(201,168,76,0.1)]" : ""}`}>
                    <div className="font-['Cormorant_Garamond',serif] text-[26px] font-bold text-[#C9A84C] leading-none">{s.num}</div>
                    <div className="text-[11px] text-[#5a5045] mt-1 uppercase tracking-widest">{s.label}</div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Gallery */}
            <Card id="gallery">
              <SectionTitle>Photo Gallery</SectionTitle>
              <div className="grid grid-cols-5 gap-2">
                {venue.photos.map((src, i) => (
                  <div key={i} className="aspect-square rounded-[10px] overflow-hidden cursor-pointer">
                    <img src={src} alt="" className="w-full h-full object-cover transition-transform duration-300 hover:scale-110" />
                  </div>
                ))}
                <div className="aspect-square rounded-[10px] border border-[rgba(201,168,76,0.25)] bg-[rgba(201,168,76,0.05)] flex flex-col items-center justify-center cursor-pointer hover:bg-[rgba(201,168,76,0.12)] transition-all">
                  <span className="font-['Cormorant_Garamond',serif] text-[22px] font-semibold text-[#C9A84C]">+10</span>
                  <span className="text-[10px] text-[#5a5045] mt-0.5 uppercase tracking-widest">More</span>
                </div>
              </div>
            </Card>

            {/* Video tour */}
            <Card>
              <SectionTitle>Venue Tour</SectionTitle>
              <a href={venue.videoUrl} target="_blank" rel="noopener noreferrer" className="relative block rounded-[14px] overflow-hidden aspect-video cursor-pointer group">
                <img src={venue.videoThumbnail} alt="Venue tour" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                <div className="absolute inset-0 bg-[rgba(8,6,4,0.5)] group-hover:bg-[rgba(8,6,4,0.35)] transition-all flex items-center justify-center">
                  <div className="w-[68px] h-[68px] rounded-full border-2 border-[rgba(201,168,76,0.7)] bg-[rgba(201,168,76,0.15)] flex items-center justify-center backdrop-blur-sm transition-all group-hover:scale-110 group-hover:bg-[rgba(201,168,76,0.28)]">
                    <Play size={24} fill="#C9A84C" strokeWidth={0} className="ml-1" />
                  </div>
                </div>
              </a>
            </Card>

            {/* Amenities */}
            <Card id="amenities">
              <SectionTitle>Amenities & Features</SectionTitle>
              <div className="grid grid-cols-3 gap-2.5">
                {venue.amenities.map(({ icon: Icon, label }) => (
                  <div key={label} className="flex items-center gap-2.5 px-3.5 py-3 rounded-[12px] border border-[rgba(201,168,76,0.13)] bg-[rgba(201,168,76,0.04)] text-[13px] text-[#b09070] transition-all hover:border-[rgba(201,168,76,0.35)] hover:bg-[rgba(201,168,76,0.09)] hover:text-[#e8dfc8] cursor-default">
                    <Icon size={15} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
                    {label}
                  </div>
                ))}
              </div>
            </Card>

            {/* Pricing */}
            <Card id="pricing">
              <SectionTitle>Pricing Packages</SectionTitle>
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="text-left text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] pb-3 px-3.5">Package</th>
                    <th className="text-left text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] pb-3 px-3.5">Includes</th>
                    <th className="text-right text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] pb-3 px-3.5">Price / Plate</th>
                  </tr>
                </thead>
                <tbody className="border-t border-[rgba(201,168,76,0.1)]">
                  {venue.pricing.map((row) => (
                    <tr key={row.name} className="group hover:bg-[rgba(201,168,76,0.03)] transition-colors">
                      <td className="py-3.5 px-3.5 text-[14px] text-[#b09070] border-b border-[rgba(201,168,76,0.07)]">
                        {row.name}
                        {row.tag && (
                          <span className="ml-2 text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded-full bg-[rgba(201,168,76,0.1)] text-[#C9A84C] border border-[rgba(201,168,76,0.2)] align-middle">
                            {row.tag}
                          </span>
                        )}
                      </td>
                      <td className="py-3.5 px-3.5 text-[12px] text-[#5a5045] border-b border-[rgba(201,168,76,0.07)]">{row.includes}</td>
                      <td className="py-3.5 px-3.5 text-right font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-[#C9A84C] border-b border-[rgba(201,168,76,0.07)]">{row.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>

            {/* Reviews */}
            <Card id="reviews">
              <SectionTitle>Reviews</SectionTitle>

              {/* Rating summary */}
              <div className="flex items-center gap-6 p-5 bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.12)] rounded-[14px] mb-6">
                <div className="text-center shrink-0">
                  <div className="font-['Cormorant_Garamond',serif] text-[52px] font-bold text-[#C9A84C] leading-none">{venue.rating}</div>
                  <Stars count={5} size={14} />
                  <div className="text-[11px] text-[#5a5045] mt-1">{venue.reviewCount} reviews</div>
                </div>
                <div className="flex-1 flex flex-col gap-1.5">
                  {venue.ratingBreakdown.map((pct, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <span className="text-[11px] text-[#5a5045] w-3">{5 - i}</span>
                      <div className="flex-1 h-1.5 rounded-full bg-[rgba(201,168,76,0.1)] overflow-hidden">
                        <div className="h-full rounded-full bg-[#C9A84C]" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="text-[11px] text-[#5a5045] w-8">{pct}%</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Individual reviews */}
              {venue.reviews.map((r, i) => (
                <div key={r.name} className={`py-5 ${i < venue.reviews.length - 1 ? "border-b border-[rgba(201,168,76,0.08)]" : ""}`}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-10 h-10 rounded-full bg-[rgba(201,168,76,0.12)] border border-[rgba(201,168,76,0.28)] flex items-center justify-center text-[13px] font-semibold text-[#C9A84C]">
                        {r.initials}
                      </div>
                      <div>
                        <div className="text-[13.5px] font-semibold text-[#e8dfc8]">{r.name}</div>
                        <div className="text-[11px] text-[#4a4035] mt-0.5">{r.date}</div>
                      </div>
                    </div>
                    <Stars count={r.rating} size={12} />
                  </div>
                  <p className="font-['Cormorant_Garamond',serif] italic text-[15.5px] text-[#9a8a72] leading-relaxed">{r.text}</p>
                </div>
              ))}
            </Card>
          </div>

          {/* ── RIGHT: STICKY BOOKING CARD ── */}
          <div className="relative">
            <div className="sticky top-[70px] flex flex-col gap-3">

              {/* Booking form */}
              <form onSubmit={handleSubmit} className="bg-[rgba(15,12,8,0.9)] border border-[rgba(201,168,76,0.2)] rounded-[20px] p-6">

                <div className="mb-4 pb-4 border-b border-[rgba(201,168,76,0.1)]">
                  <div className="font-['Cormorant_Garamond',serif] text-[32px] font-bold text-[#C9A84C] leading-none">
                    ₹2,200 <span className="text-[16px] text-[#5a5045] font-['DM_Sans',sans-serif] font-normal">/ plate</span>
                  </div>
                  <div className="text-[12px] text-[#5a5045] mt-1">onwards · all packages available</div>
                </div>

                {/* Date + Guests */}
                <div className="grid grid-cols-2 gap-2.5 mb-2.5">
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Event Date</label>
                    <input type="date" value={inquiryForm.date} onChange={e => setInquiryForm(p => ({...p, date: e.target.value}))} className="w-full px-3.5 py-2.5 rounded-[11px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] text-[13px] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors" />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Guests</label>
                    <input placeholder="e.g. 250" value={inquiryForm.guests} onChange={e => setInquiryForm(p => ({...p, guests: e.target.value}))} className="w-full px-3.5 py-2.5 rounded-[11px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors" />
                  </div>
                </div>

                {["Event Type", "Your Name", "Phone Number"].map((label) => {
                  const key = label === "Event Type" ? "eventType" : label === "Your Name" ? "name" : "phone";
                  return (
                    <div key={label} className="mb-2.5">
                      <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">{label}</label>
                      {label === "Event Type" ? (
                        <select value={inquiryForm.eventType} onChange={e => setInquiryForm(p => ({...p, eventType: e.target.value}))} className="w-full px-3.5 py-2.5 rounded-[11px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] text-[13px] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors">
                          <option value="">Select event type</option>
                          <option>Wedding</option><option>Reception</option><option>Corporate</option><option>Birthday</option>
                        </select>
                      ) : (
                        <input placeholder={label === "Phone Number" ? "+91 98765 43210" : "Full name"} value={(inquiryForm as any)[key]} onChange={e => setInquiryForm(p => ({...p, [key]: e.target.value}))} className="w-full px-3.5 py-2.5 rounded-[11px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors" />
                      )}
                    </div>
                  );
                })}

                <div className="mb-4">
                  <label className="block text-[11px] font-semibold tracking-widest uppercase text-[#5a5045] mb-1.5">Message (Optional)</label>
                  <textarea placeholder="Any specific requirements..." value={inquiryForm.message} onChange={e => setInquiryForm(p => ({...p, message: e.target.value}))} rows={2} className="w-full px-3.5 py-2.5 rounded-[11px] bg-black/60 border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3d3428] text-[13px] outline-none focus:border-[rgba(201,168,76,0.45)] transition-colors resize-none" />
                </div>

                <button type="submit" className="w-full py-3.5 rounded-[12px] bg-[#C9A84C] text-[#0f0d0a] text-[13px] font-bold tracking-wide transition-all hover:bg-[#a8843a] hover:-translate-y-0.5 mb-2">
                  Send Inquiry →
                </button>
                <button type="button" className="w-full flex items-center justify-center gap-2 py-3 rounded-[12px] border border-[rgba(201,168,76,0.3)] text-[#C9A84C] text-[13px] font-medium transition-all hover:bg-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.55)]">
                  <Phone size={14} strokeWidth={2} /> Call Venue
                </button>

                {/* Trust signals */}
                <div className="flex flex-col gap-1.5 mt-4 pt-4 border-t border-[rgba(201,168,76,0.08)]">
                  {["Free inquiry, no booking fee", "Venue responds within 2 hrs", "Your number stays private"].map(t => (
                    <div key={t} className="flex items-center gap-2 text-[12px] text-[#4a4035]">
                      <Check size={12} strokeWidth={2} className="text-[#C9A84C] shrink-0" />{t}
                    </div>
                  ))}
                </div>
              </form>

              {/* Quick info */}
              <div className="bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.12)] rounded-[14px] p-4">
                {venue.quickInfo.map(({ icon: Icon, label, value }, i) => (
                  <div key={label} className={`flex items-center gap-2.5 py-2.5 ${i < venue.quickInfo.length - 1 ? "border-b border-[rgba(201,168,76,0.07)]" : ""}`}>
                    <Icon size={15} strokeWidth={2} className="text-[#C9A84C] shrink-0" />
                    <span className="text-[11px] text-[#5a5045] w-20">{label}</span>
                    <span className="text-[13px] text-[#b09070] font-medium">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}