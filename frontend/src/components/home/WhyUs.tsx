import { Sparkles, PhoneOff, IndianRupee, Users } from "lucide-react";
import Heading from "../common/Heading";

// ─── Data ────────────────────────────────────────────────
const points = [
  {
    tag: "Exclusive",
    icon: Sparkles,
    title: "AI-Powered Matching",
    description:
      "Our AI reads your requirements and surfaces venues that truly fit — not just keyword matches. Get relevant results in seconds, not hours.",
  },
  {
    tag: "Promise",
    icon: PhoneOff,
    title: "Zero Spam Calls",
    description:
      "Your number stays private until you choose to share it. No cold calls, no unsolicited follow-ups — you control every interaction.",
  },
  {
    tag: "Smart",
    icon: IndianRupee,
    title: "Budget-Friendly Options",
    description:
      "Set your per-plate or total budget and we'll never show you venues outside it. Transparent pricing, no hidden costs, no surprises.",
  },
  {
    tag: "Support",
    icon: Users,
    title: "Assisted Booking Support",
    description:
      "A dedicated booking expert guides you from shortlist to final sign-off — negotiating rates, coordinating visits, and handling paperwork.",
  },
];

// ─── Card ─────────────────────────────────────────────────
function WhyCard({
  tag,
  icon: Icon,
  title,
  description,
}: (typeof points)[0]) {
  return (
    <div className="group relative rounded-[20px] border border-[rgba(201,168,76,0.15)] bg-gradient-to-br from-[rgba(201,168,76,0.05)] to-[#0f0d0a] p-8 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(201,168,76,0.38)] hover:shadow-[0_16px_48px_rgba(0,0,0,0.5)]">

      {/* Corner glow */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-[rgba(201,168,76,0.07)] blur-3xl pointer-events-none transition-opacity duration-300 group-hover:opacity-200" />

      {/* Tag */}
      <span className="absolute top-5 right-5 text-[10px] font-semibold tracking-widest uppercase text-[#C9A84C] bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.22)] rounded-full px-2.5 py-1">
        {tag}
      </span>

      {/* Icon */}
      <div className="w-[52px] h-[52px] rounded-[14px] border border-[rgba(201,168,76,0.28)] bg-[rgba(201,168,76,0.08)] flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.15)] group-hover:border-[rgba(201,168,76,0.5)]">
        <Icon size={22} strokeWidth={1.8} className="text-[#C9A84C]" />
      </div>

      {/* Title */}
      <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[20px] font-semibold text-[#f0e6cc] mb-2.5 tracking-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[13.5px] text-[#7a7060] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────
export default function WhyUs() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <Heading heading="Why EaseMyVenue?" />

      <div className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto">
        {points.map((p) => (
          <WhyCard key={p.title} {...p} />
        ))}
      </div>
    </section>
  );
}