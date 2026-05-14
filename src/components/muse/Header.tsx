import { useEffect, useState } from "react";
import logo from "@/assets/muse-logo.png";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#services", label: "Services" },
  { href: "#giftcard", label: "Gift Card" },
  { href: "#membership", label: "Membership" },
  { href: "#packages", label: "Packages" },
  { href: "#gallery", label: "Gallery" },
  { href: "#team", label: "Meet the Team" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-20">
        <a href="#top" className="flex items-center gap-3">
          <img src={logo} alt="Muse Aesthetics & Spa by Missi" className="h-12 w-auto" />
        </a>
        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[11px] uppercase tracking-[0.2em] text-foreground/80 hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <a
            href="#book"
            className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-background gold-gradient hover:opacity-90 transition-all rounded-sm"
          >
            Book Now
          </a>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden text-gold p-2"
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
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-foreground/85 hover:text-gold"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#book"
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex justify-center px-6 py-3 text-[11px] uppercase tracking-[0.25em] text-background gold-gradient rounded-sm"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}