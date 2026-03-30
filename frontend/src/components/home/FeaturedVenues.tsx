import Heading from "../common/Heading";
import VenueCard from "../common/VenueCard";
import { venues } from "../../data/venues";

// ─── Section ─────────────────────────────────────────────
export default function FeaturedVenues() {
  return (
    <section className="bg-black text-white py-16 px-8">
      <Heading heading="Featured Venue" />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {venues.map((venue, i) => (
          <VenueCard key={i} {...venue} />
        ))}
      </div>
    </section>
  );
}