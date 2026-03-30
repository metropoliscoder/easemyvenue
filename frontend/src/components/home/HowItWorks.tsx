import { Pencil, SearchCheck, Home } from "lucide-react";
import Heading from "../common/Heading";

// ─── Step Data ────────────────────────────────────────────
const steps = [
  {
    number: "01",
    icon: Pencil,
    title: "Tell Us Your\nRequirements",
    description:
      "Share your event date, guest count, budget, and preferred venue style in minutes.",
  },
  {
    number: "02",
    icon: SearchCheck,
    title: "Get Matched\nVenues",
    description:
      "We surface the best-fit venues based on your needs — curated, not cluttered.",
  },
  {
    number: "03",
    icon: Home,
    title: "Visit & Book\nConfidently",
    description:
      "Schedule a site visit and lock in your venue with full confidence and zero stress.",
  },
];

// ─── Connector Arrow ─────────────────────────────────────
function StepConnector() {
  return (
    <div className="hidden md:flex items-center flex-1 max-w-20 pt-9">
      <div className="flex-1 h-px bg-gradient-to-r from-[rgba(201,168,76,0.5)] to-[rgba(201,168,76,0.12)]" />
      <div
        className="w-0 h-0 shrink-0"
        style={{
          borderTop: "5px solid transparent",
          borderBottom: "5px solid transparent",
          borderLeft: "7px solid rgba(201,168,76,0.4)",
        }}
      />
    </div>
  );
}

// ─── Single Step Card ─────────────────────────────────────
function Step({
  number,
  icon: Icon,
  title,
  description,
}: (typeof steps)[0]) {
  return (
    <div className="group flex flex-col items-center gap-5 flex-1 px-3 text-center max-w-[300px]">
      {/* Icon Ring + Badge */}
      <div className="relative">
        <span className="absolute -top-2 -right-2 z-10 w-[22px] h-[22px] rounded-full bg-[#C9A84C] text-[#0f0d0a] text-[10px] font-bold flex items-center justify-center">
          {number}
        </span>
        <div className="w-[72px] h-[72px] rounded-full border border-[rgba(201,168,76,0.3)] bg-[rgba(201,168,76,0.07)] flex items-center justify-center transition-all duration-300 group-hover:bg-[rgba(201,168,76,0.14)] group-hover:border-[rgba(201,168,76,0.55)]">
          <Icon
            size={28}
            strokeWidth={1.8}
            className="text-[#C9A84C]"
          />
        </div>
      </div>

      {/* Title */}
      <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[18px] font-semibold text-[#f0e6cc] leading-snug tracking-wide whitespace-pre-line">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[16px] text-[#7a7060] leading-relaxed">
        {description}
      </p>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────
export default function HowItWorks() {
  return (
    <section className="bg-black text-white py-16 px-8" id="how-it-works">
      <Heading heading="How It Works" />

      <div className="flex flex-col md:flex-row items-start justify-center gap-6 md:gap-0 max-w-7xl mx-auto">
        {steps.map((step, i) => (
          <>
            <Step key={step.number} {...step} />
            {i < steps.length - 1 && <StepConnector key={`conn-${i}`} />}
          </>
        ))}
      </div>
    </section>
  );
}