"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";

const navLinks = [
  { label: "Home",         href: "/"           },
  { label: "Venues",       href: "/venues"     },
  { label: "Contact",      href: "/contact"    },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 z-50 h-16 flex items-center justify-between px-8 bg-[rgba(8,6,4,0.85)] backdrop-blur-2xl border-b border-[rgba(201,168,76,0.14)]">

      {/* ── Logo ── */}
      <Link href="/" className="flex items-center gap-2.5 group">
        <div className="w-8 h-8 rounded-[8px] border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.1)] flex items-center justify-center transition-all duration-200 group-hover:bg-[rgba(201,168,76,0.18)]">
          <Home size={15} strokeWidth={2} className="text-[#C9A84C]" />
        </div>
        <span className="font-['Cormorant_Garamond',Georgia,serif] text-[20px] font-semibold text-[#f0e6cc] tracking-wide">
          Ease<span className="text-[#C9A84C]">My</span>Venue
        </span>
      </Link>

      {/* ── Nav Links ── */}
      <div className="hidden md:flex items-center gap-0.5">
        {navLinks.map(({ label, href }) => {
          const isActive = pathname === href || (href !== "/" && pathname.startsWith(href));
          return (
            <Link
              key={label}
              href={href}
              className={`px-3.5 py-2 rounded-lg text-[16px] font-medium tracking-wide transition-all duration-200 ${
                isActive
                  ? "text-[#C9A84C]"
                  : "text-[#7a7060] hover:text-[#e8dfc8] hover:bg-[rgba(201,168,76,0.07)]"
              }`}
            >
              {label}
            </Link>
          );
        })}
      </div>

      {/* ── CTA Buttons ── */}
      <div className="flex items-center gap-2.5">
        <Link
          href="/login"
          className="hidden sm:block px-4 py-2 rounded-[10px] border border-[rgba(201,168,76,0.35)] text-[#C9A84C] text-[12.5px] font-medium tracking-wide transition-all duration-200 hover:bg-[rgba(201,168,76,0.1)] hover:border-[rgba(201,168,76,0.6)]"
        >
          Log In
        </Link>
        <Link
          href="/list-venue"
          className="px-4 py-2 rounded-[10px] bg-[#C9A84C] text-[#0f0d0a] text-[12.5px] font-semibold tracking-wide transition-all duration-200 hover:bg-[#a8843a] hover:-translate-y-0.5"
        >
          List Your Venue
        </Link>
      </div>
    </nav>
  );
}