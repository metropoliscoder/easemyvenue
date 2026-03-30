import Link from "next/link";
import { Home } from "lucide-react";

// ─── Inline social SVGs (lucide dropped Facebook/Youtube) ─
const SocialIcons = {
  Facebook: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  ),
  Instagram: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  ),
  Linkedin: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  Youtube: () => (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A84C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/>
    </svg>
  ),
};

// ─── Data ─────────────────────────────────────────────────
const exploreLinks = [
  { label: "All Venues",       href: "/venues"                },
  { label: "Wedding Venues",   href: "/venues?type=wedding"   },
  { label: "Corporate Spaces", href: "/venues?type=corporate" },
  { label: "Garden Venues",    href: "/venues?type=garden"    },
  { label: "Rooftop Venues",   href: "/venues?type=outdoor"   },
];

const companyLinks = [
  { label: "About Us",     href: "/about"       },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Blog",         href: "/blog"        },
  { label: "Careers",      href: "/careers"     },
  { label: "Contact",      href: "/contact"     },
];

const socials = [
  { icon: SocialIcons.Facebook,  href: "https://facebook.com",  label: "Facebook"  },
  { icon: SocialIcons.Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: SocialIcons.Linkedin,  href: "https://linkedin.com",  label: "LinkedIn"  },
  { icon: SocialIcons.Youtube,   href: "https://youtube.com",   label: "YouTube"   },
];

const bottomLinks = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Sitemap", href: "/sitemap.xml"    },
];

// ─── Footer Column ────────────────────────────────────────
function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-['Cormorant_Garamond',Georgia,serif] text-[13px] font-semibold text-[#C9A84C] tracking-[0.1em] uppercase mb-4">
        {title}
      </h4>
      <ul className="flex flex-col gap-2.5">
        {links.map(({ label, href }) => (
          <li key={label}>
            <Link
              href={href}
              className="text-[13px] text-[#5a5045] transition-colors duration-200 hover:text-[#b09070]"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// ─── Footer ───────────────────────────────────────────────
export default function Footer() {
  return (
    <footer className="bg-[#080604] border-t border-[rgba(201,168,76,0.14)]">
      <div className="container px-8 pt-14 pb-0">

        {/* ── Top Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-11 border-b border-[rgba(201,168,76,0.1)]">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-4 group w-fit">
              <div className="w-8 h-8 rounded-[8px] border border-[rgba(201,168,76,0.5)] bg-[rgba(201,168,76,0.1)] flex items-center justify-center transition-all group-hover:bg-[rgba(201,168,76,0.18)]">
                <Home size={15} strokeWidth={2} className="text-[#C9A84C]" />
              </div>
              <span className="font-['Cormorant_Garamond',Georgia,serif] text-[20px] font-semibold text-[#f0e6cc] tracking-wide">
                Ease<span className="text-[#C9A84C]">My</span>Venue
              </span>
            </Link>
            <p className="text-[13px] text-[#5a5045] leading-relaxed max-w-[230px]">
              India's smartest venue discovery platform. AI-powered matching, zero spam, transparent pricing.
            </p>
            <div className="flex gap-2 mt-5">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-[34px] h-[34px] rounded-[8px] border border-[rgba(201,168,76,0.2)] bg-[rgba(201,168,76,0.05)] flex items-center justify-center transition-all duration-200 hover:bg-[rgba(201,168,76,0.14)] hover:border-[rgba(201,168,76,0.45)]"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Explore */}
          <FooterCol title="Explore" links={exploreLinks} />

          {/* Company */}
          <FooterCol title="Company" links={companyLinks} />

          {/* Newsletter */}
          <div>
            <h4 className="font-['Cormorant_Garamond',Georgia,serif] text-[13px] font-semibold text-[#C9A84C] tracking-[0.1em] uppercase mb-3">
              Stay Updated
            </h4>
            <p className="text-[12.5px] text-[#5a5045] leading-relaxed mb-4">
              Get curated venue picks and exclusive offers straight to your inbox.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 min-w-0 px-3 py-2.5 rounded-[10px] bg-[rgba(201,168,76,0.06)] border border-[rgba(201,168,76,0.18)] text-[#e8dfc8] placeholder-[#3a342c] text-[12.5px] outline-none focus:border-[rgba(201,168,76,0.4)] transition-colors font-['DM_Sans',sans-serif]"
              />
              <button className="px-4 py-2.5 rounded-[10px] bg-[#C9A84C] text-[#0f0d0a] text-[12px] font-semibold whitespace-nowrap transition-colors hover:bg-[#a8843a]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 py-5">
          <p className="text-[11.5px] text-[#3a342c] tracking-wide">
            © 2026 <span className="text-[#5a5045]">EaseMyVenue</span>. All rights reserved.
          </p>

          <div className="flex gap-5">
            {bottomLinks.map(({ label, href }) => (
              <Link
                key={label}
                href={href}
                className="text-[11.5px] text-[#3a342c] transition-colors hover:text-[#7a7060]"
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1.5 text-[10.5px] text-[#3a342c] bg-[rgba(201,168,76,0.05)] border border-[rgba(201,168,76,0.1)] rounded-full px-2.5 py-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            All systems operational
          </div>
        </div>
      </div>
    </footer>
  );
}