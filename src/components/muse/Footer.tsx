import { Link } from "@tanstack/react-router";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail("");
  };

  return (
    <footer id="contact" className="border-t border-gold/15 pt-20 pb-10 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-serif text-2xl text-gold-gradient">MUSE</h4>
          <p className="font-display text-[9px] tracking-[0.4em] text-gold/60 mt-2">AESTHETICS &amp; SPA</p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold/70">By appointment only</p>
          <div className="mt-6 flex gap-3">
            <a
              aria-label="Instagram"
              href="https://www.instagram.com/musebymissi"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center border border-gold/30 rounded-sm text-gold hover:bg-gold/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
              </svg>
            </a>
            <a
              aria-label="Facebook"
              href="https://www.facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 inline-flex items-center justify-center border border-gold/30 rounded-sm text-gold hover:bg-gold/10 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7H8v-2.9h2.4V9.8c0-2.4 1.4-3.7 3.6-3.7 1 0 2.1.2 2.1.2v2.3h-1.2c-1.2 0-1.5.7-1.5 1.5v1.8h2.6l-.4 2.9h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </a>
          </div>
        </div>
        <div>
          <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">EXPLORE</h5>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/gift-card" className="hover:text-gold transition-colors">Gift Card</Link></li>
            <li><Link to="/membership" className="hover:text-gold transition-colors">Membership</Link></li>
            <li><Link to="/packages" className="hover:text-gold transition-colors">Packages</Link></li>
            <li><Link to="/gallery" className="hover:text-gold transition-colors">Gallery</Link></li>
            <li><Link to="/team" className="hover:text-gold transition-colors">Team</Link></li>
            <li><Link to="/book" className="hover:text-gold transition-colors">Book</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">VISIT</h5>
          <p className="text-sm text-foreground/70 leading-relaxed">
            284 Boston Tpke<br />Shrewsbury, MA 01545
          </p>
          <p className="mt-4 text-sm text-foreground/70 leading-relaxed">
            <a href="tel:+17745591684" className="hover:text-gold transition-colors">+1 (774) 559-1684</a>
          </p>
        </div>
        <div>
          <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">NEWSLETTER</h5>
          <p className="text-sm text-foreground/70 mb-4">
            Rituals, openings &amp; private invitations — straight to your inbox.
          </p>
          {subscribed ? (
            <p className="text-sm text-gold">
              ✦ Welcome to the Muse circle. Check your inbox soon.
            </p>
          ) : (
            <form onSubmit={onSubscribe} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="bg-input/60 border border-gold/30 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold rounded-sm"
              />
              <button
                type="submit"
                className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
              >
                Join the Muse Circle
              </button>
              <p className="text-[10px] text-foreground/40">
                No spam. Unsubscribe anytime.
              </p>
            </form>
          )}
        </div>
      </div>
      <div className="mx-auto max-w-7xl mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">
          © {new Date().getFullYear()} Muse Aesthetics &amp; Spa by Missi
        </p>
        <p className="text-[10px] uppercase tracking-[0.3em] text-foreground/40">Crafted with quiet luxury</p>
      </div>
    </footer>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-display text-[10px] tracking-[0.4em] text-gold/80">{children}</span>
  );
}