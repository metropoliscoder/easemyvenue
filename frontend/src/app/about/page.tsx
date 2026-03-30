import { Sparkles, PhoneOff, IndianRupee } from "lucide-react";
import Navbar from "@/src/components/layout/Navbar";
import Heading from "@/src/components/common/Heading";
import Footer from "@/src/components/layout/Footer";

// ─── Data ─────────────────────────────────────────────────
const stats = [
  { num: "2,400+", label: "Venues Listed"  },
  { num: "18K+",   label: "Events Booked"  },
  { num: "12",     label: "Cities Covered" },
  { num: "4.9★",   label: "Avg Rating"     },
];

const values = [
  {
    icon: Sparkles,
    title: "AI-First Discovery",
    desc: "Smart matching that learns what you actually need — not just keywords, but context, budget, and vibe.",
  },
  {
    icon: PhoneOff,
    title: "Zero Spam Promise",
    desc: "Your contact details stay private until you choose to share them. No cold calls, ever.",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Every price is shown upfront. No hidden charges, no surprise costs at checkout.",
  },
];

const team = [
  { initials: "AK", name: "Aditya Kumar",  role: "Co-Founder & CEO"                },
  { initials: "PS", name: "Priya Sharma",  role: "Co-Founder & Head of Product"    },
  { initials: "RG", name: "Rohan Gupta",   role: "Head of Venue Partnerships"      },
];

// ─── Page ─────────────────────────────────────────────────
export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#080604] text-[#e8dfc8] min-h-screen pt-16">

        {/* ── Hero ── */}
        <section className="relative h-[400px] overflow-hidden flex items-center">
          {/* Background mosaic */}
          <div className="absolute inset-0 grid grid-cols-2 gap-0.5">
            {["/venues/v1.jpg", "/venues/v2.jpg"].map((src, i) => (
              <div key={i} className="overflow-hidden">
                <img src={src} alt="" className="w-full h-full object-cover opacity-30" />
              </div>
            ))}
          </div>
          {/* Overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-[rgba(8,6,4,0.92)] via-[rgba(8,6,4,0.7)] to-[rgba(8,6,4,0.4)]" />
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#080604]" />

          <div className="relative z-10 px-14 max-w-[580px]">
            <div className="inline-flex items-center gap-2 border border-[rgba(201,168,76,0.32)] rounded-full px-3.5 py-1.5 text-[#C9A84C] text-[10.5px] font-medium tracking-[0.12em] uppercase bg-[rgba(201,168,76,0.06)] mb-5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] animate-pulse" />
              Our Story
            </div>
            <h1 className="font-['Cormorant_Garamond',Georgia,serif] text-[clamp(28px,4vw,44px)] font-bold text-[#f5ead8] leading-[1.12] mb-4">
              Built by Event Planners,<br />
              for <em className="italic text-[#C9A84C]">Every Occasion</em>
            </h1>
            <p className="text-[16px] text-[#7a7060] leading-[1.8] max-w-[440px]">
              EaseMyVenue was born from a simple frustration — finding the right venue shouldn't take weeks of dead ends and spam calls. So we built the platform we always wished existed.
            </p>
          </div>
        </section>

        {/* ── Mission + Stats ── */}
        <section className="container grid grid-cols-1 lg:grid-cols-2 gap-10  mx-auto px-10 py-12">
          {/* Mission text */}
          <div>
            <Heading heading="Our Mission" />
            <div className="flex flex-col gap-4 text-[18px] text-[#7a7060] leading-[1.85]">
              <p>
                To simplify and modernize venue discovery by delivering precise, personalized, and high-quality matches — saving time for users and driving better conversions for venues.
              </p>
            </div>
          </div>

          <div>
            <Heading heading="Our Vision" />
            <div className="flex flex-col gap-4 text-[18px] text-[#7a7060] leading-[1.85]">
              <p>
                To become the default platform for venue discovery and booking in India, powered by intelligent matchmaking and seamless user experience.
              </p>
            </div>
          </div>

          {/* Stats grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 content-start">
            {stats.map(({ num, label }) => (
              <div key={label} className="py-5 px-4 bg-[rgba(201,168,76,0.04)] border border-[rgba(201,168,76,0.13)] rounded-[14px] text-center">
                <div className="font-['Cormorant_Garamond',serif] text-[32px] font-bold text-[#C9A84C] leading-none">{num}</div>
                <div className="text-[13px] text-[#5a5045] uppercase tracking-[0.07em] mt-2">{label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Values ── */}
        <section className="container mx-auto px-10 pb-12">
          <Heading heading="What We Stand For" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {values.map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="group p-6 bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.13)] rounded-[18px] transition-all duration-300 hover:border-[rgba(201,168,76,0.35)] hover:-translate-y-1"
              >
                <div className="w-[46px] h-[46px] rounded-[12px] border border-[rgba(201,168,76,0.28)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center mb-4 transition-all group-hover:bg-[rgba(201,168,76,0.16)] group-hover:border-[rgba(201,168,76,0.5)]">
                  <Icon size={20} strokeWidth={1.8} className="text-[#C9A84C]" />
                </div>
                <h3 className="font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-[#f0e6cc] mb-2">{title}</h3>
                <p className="text-[16px] text-[#6b5f4f] leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Team ── */}
        <section className="container mx-auto px-10 pb-20">
          <Heading heading="Meet the Team" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {team.map(({ initials, name, role }) => (
              <div
                key={name}
                className="group text-center p-6 bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.12)] rounded-[18px] transition-all duration-300 hover:border-[rgba(201,168,76,0.3)] hover:-translate-y-1"
              >
                <div className="w-[72px] h-[72px] rounded-full bg-[rgba(201,168,76,0.1)] border-2 border-[rgba(201,168,76,0.3)] flex items-center justify-center mx-auto mb-4 font-['Cormorant_Garamond',serif] text-[22px] font-semibold text-[#C9A84C] transition-all group-hover:border-[rgba(201,168,76,0.6)]">
                  {initials}
                </div>
                <div className="font-['Cormorant_Garamond',serif] text-[17px] font-semibold text-[#f0e6cc] mb-1">{name}</div>
                <div className="text-[14px] text-[#5a5045] tracking-wide">{role}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}