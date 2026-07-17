import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";

import logoDark from "@/assets/muse-logo-horizontal.png";
import logoWhite from "@/assets/muse-logo-white.png";

const links = [
  { to: "/about", label: "About Us" },
  { to: "/services", label: "Services" },
  { to: "/offerings", hash: "membership", label: "Membership" },
  { to: "/offerings", hash: "packages", label: "Packages" },
  { to: "/offerings", hash: "gift-card", label: "Gift Card" },
  { to: "/gallery", label: "Gallery" },
  { to: "/team", label: "Meet the Team" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-[999] transition-all duration-500 ${
        scrolled ? "glass border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center -ml-2 md:-ml-4 lg:-ml-6">
          <img
            src={isHome && !scrolled ? logoWhite : logoDark}
            alt="Muse Aesthetics & Spa by Missi"
            width={480}
            height={160}
            className="h-16 md:h-20 w-auto object-contain scale-[1.3] md:scale-[1.5] lg:scale-[1.85] origin-left [image-rendering:auto] drop-shadow-[0_2px_10px_rgba(0,0,0,0.25)] transition-all duration-300"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              activeProps={{ className: "text-gold" }}
              className={`text-[10px] uppercase tracking-[0.2em] transition-colors whitespace-nowrap ${
                isHome && !scrolled 
                  ? "text-white/95 hover:text-white" 
                  : "text-foreground/80 hover:text-gold"
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <Link
            to="/book"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-background gold-gradient hover:opacity-90 transition-all rounded-sm shadow-sm"
          >
            Book Now
          </Link>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className={`lg:hidden p-2 transition-colors ${
              isHome && !scrolled ? "text-white" : "text-gold"
            }`}
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? <path d="M6 6l12 12M6 18L18 6"/> : <path d="M4 7h16M4 12h16M4 17h16"/>}
            </svg>
          </button>
        </div>
      </div>
      
      {open && (
        <div className="lg:hidden glass border-t border-gold/10 px-6 py-6 flex flex-col gap-4">
          {links.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              hash={"hash" in l ? l.hash : undefined}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-foreground/85 hover:text-gold"
            >
              {l.label}
            </Link>
          ))}
          <Link
            to="/book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-background gold-gradient rounded-sm"
          >
            Book Now
          </Link>
        </div>
      )}
    </header>
  );
}