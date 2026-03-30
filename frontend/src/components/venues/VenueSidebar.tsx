"use client";

import { Dispatch, SetStateAction } from "react";

// ─── Types ────────────────────────────────────────────────
export interface FilterState {
  venueTypes: string[];
  budgetMax: number;
  guestRange: string;
  eventTypes: string[];
  amenities: string[];
  minRating: string;
}

interface Props {
  filters: FilterState;
  onChange: Dispatch<SetStateAction<FilterState>>;
}

// ─── Sub-components ───────────────────────────────────────
function FilterCard({
  title,
  onClear,
  children,
}: {
  title: string;
  onClear?: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[rgba(15,12,8,0.8)] border border-[rgba(201,168,76,0.12)] rounded-[18px] p-5">
      <div className="flex items-center justify-between mb-3.5">
        <h3 className="font-['Cormorant_Garamond',Georgia,serif] text-[13px] font-semibold text-[#C9A84C] tracking-[0.1em] uppercase">
          {title}
        </h3>
        {onClear && (
          <button
            onClick={onClear}
            className="text-[10px] text-[#4a4035] tracking-widest uppercase border-none bg-none cursor-pointer transition-colors hover:text-[#C9A84C]"
          >
            Clear
          </button>
        )}
      </div>
      {children}
    </div>
  );
}

function CheckItem({
  label,
  count,
  checked,
  onChange,
}: {
  label: string;
  count?: number;
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <label className="flex items-center gap-2.5 cursor-pointer group">
      <div
        onClick={() => onChange(!checked)}
        className={`w-[15px] h-[15px] rounded-[4px] border flex-shrink-0 flex items-center justify-center transition-all cursor-pointer ${
          checked
            ? "bg-[#C9A84C] border-[#C9A84C]"
            : "border-[rgba(201,168,76,0.3)] bg-transparent"
        }`}
      >
        {checked && <span className="text-[9px] text-[#0f0d0a] font-bold leading-none">✓</span>}
      </div>
      <span className="flex-1 flex items-center justify-between text-[13px] text-[#7a7060] group-hover:text-[#b09070] transition-colors">
        {label}
        {count !== undefined && (
          <span className="text-[10px] text-[#4a4035] bg-[rgba(201,168,76,0.08)] rounded-full px-2 py-0.5">
            {count}
          </span>
        )}
      </span>
    </label>
  );
}

function Pill({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`px-3 py-1.5 rounded-full border text-[11.5px] transition-all ${
        active
          ? "bg-[rgba(201,168,76,0.12)] border-[rgba(201,168,76,0.45)] text-[#C9A84C]"
          : "border-[rgba(201,168,76,0.2)] text-[#6b5f4f] hover:bg-[rgba(201,168,76,0.08)] hover:border-[rgba(201,168,76,0.35)] hover:text-[#b09070]"
      }`}
    >
      {label}
    </button>
  );
}

// ─── Sidebar ──────────────────────────────────────────────
const VENUE_TYPES  = [{ id: "indoor", label: "Indoor", count: 24 }, { id: "outdoor", label: "Outdoor", count: 18 }, { id: "garden", label: "Garden", count: 12 }, { id: "rooftop", label: "Rooftop", count: 9 }, { id: "farmhouse", label: "Farmhouse", count: 7 }, { id: "hotel", label: "Hotel Banquet", count: 15 }];
const EVENT_TYPES  = ["Wedding", "Reception", "Corporate", "Birthday", "Engagement"];
const AMENITIES    = ["Parking", "In-House Catering", "DJ Setup", "Bridal Suite", "Outdoor Lawn"];
const GUEST_RANGES = ["50–100", "100–300", "300–500", "500–800", "800+"];
const RATINGS      = ["Any", "4.0+", "4.5+", "4.8+"];

export default function VenueSidebar({ filters, onChange }: Props) {
  const toggle = <K extends keyof FilterState>(key: K, value: string) => {
    onChange((f) => {
      const arr = f[key] as string[];
      return {
        ...f,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      };
    });
  };

  return (
    <aside className="flex flex-col gap-3.5">

      {/* Venue Type */}
      <FilterCard title="Venue Type" onClear={() => onChange((f) => ({ ...f, venueTypes: [] }))}>
        <div className="flex flex-col gap-2.5">
          {VENUE_TYPES.map(({ id, label, count }) => (
            <CheckItem
              key={id}
              label={label}
              count={count}
              checked={filters.venueTypes.includes(id)}
              onChange={() => toggle("venueTypes", id)}
            />
          ))}
        </div>
      </FilterCard>

      {/* Budget */}
      <FilterCard title="Budget / Plate" onClear={() => onChange((f) => ({ ...f, budgetMax: 5000 }))}>
        <div className="flex justify-between text-[12px] text-[#C9A84C] font-medium mb-2">
          <span>₹500</span>
          <span>₹{filters.budgetMax.toLocaleString()}</span>
        </div>
        <input
          type="range"
          min={500}
          max={5000}
          step={100}
          value={filters.budgetMax}
          onChange={(e) => onChange((f) => ({ ...f, budgetMax: +e.target.value }))}
          className="w-full h-1 rounded-full appearance-none cursor-pointer accent-[#C9A84C] bg-[rgba(201,168,76,0.15)]"
        />
        <p className="text-[11.5px] text-[#5a5045] mt-2">
          Up to <span className="text-[#C9A84C] font-semibold">₹{filters.budgetMax.toLocaleString()}</span> per plate
        </p>
      </FilterCard>

      {/* Guest Count */}
      <FilterCard title="Guest Count">
        <div className="flex flex-wrap gap-2">
          {GUEST_RANGES.map((r) => (
            <Pill
              key={r}
              label={r}
              active={filters.guestRange === r}
              onClick={() => onChange((f) => ({ ...f, guestRange: f.guestRange === r ? "" : r }))}
            />
          ))}
        </div>
      </FilterCard>

      {/* Event Type */}
      <FilterCard title="Event Type" onClear={() => onChange((f) => ({ ...f, eventTypes: [] }))}>
        <div className="flex flex-col gap-2.5">
          {EVENT_TYPES.map((t) => (
            <CheckItem
              key={t}
              label={t}
              checked={filters.eventTypes.includes(t.toLowerCase())}
              onChange={() => toggle("eventTypes", t.toLowerCase())}
            />
          ))}
        </div>
      </FilterCard>

      {/* Amenities */}
      <FilterCard title="Amenities" onClear={() => onChange((f) => ({ ...f, amenities: [] }))}>
        <div className="flex flex-col gap-2.5">
          {AMENITIES.map((a) => (
            <CheckItem
              key={a}
              label={a}
              checked={filters.amenities.includes(a.toLowerCase())}
              onChange={() => toggle("amenities", a.toLowerCase())}
            />
          ))}
        </div>
      </FilterCard>

      {/* Rating */}
      <FilterCard title="Minimum Rating">
        <div className="flex flex-wrap gap-2">
          {RATINGS.map((r) => (
            <Pill
              key={r}
              label={r}
              active={filters.minRating === r}
              onClick={() => onChange((f) => ({ ...f, minRating: r === "Any" ? "" : r }))}
            />
          ))}
        </div>
      </FilterCard>

      {/* Apply */}
      <button className="w-full py-3 rounded-[12px] bg-[rgba(201,168,76,0.1)] border border-[rgba(201,168,76,0.35)] text-[#C9A84C] text-[12.5px] font-semibold tracking-widest uppercase transition-all hover:bg-[rgba(201,168,76,0.2)] hover:border-[rgba(201,168,76,0.6)]">
        Apply Filters
      </button>
    </aside>
  );
}