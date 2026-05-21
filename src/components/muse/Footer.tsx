import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gold/15 pt-20 pb-10 px-6 bg-card/30">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h4 className="font-serif text-2xl text-gold-gradient">MUSE</h4>
          <p className="font-display text-[9px] tracking-[0.4em] text-gold/60 mt-2">AESTHETICS &amp; SPA</p>
          <p className="mt-6 text-[10px] uppercase tracking-[0.3em] text-gold/70">By appointment only</p>
        </div>
        <div>
          <h5 className="font-display text-[10px] tracking-[0.3em] text-gold mb-4">EXPLORE</h5>
          <ul className="space-y-2 text-sm text-foreground/70">
            <li><Link to="/about" className="hover:text-gold transition-colors">About</Link></li>
            <li><Link to="/services" className="hover:text-gold transition-colors">Services</Link></li>
            <li><Link to="/offers" className="hover:text-gold transition-colors">Offers</Link></li>
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
          <p className="text-sm text-foreground/70 mb-4">Rituals, openings & private invitations.</p>
          <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-input border border-gold/30 px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none focus:border-gold rounded-sm"
            />
            <button
              type="submit"
              className="px-5 py-3 text-[10px] uppercase tracking-[0.3em] text-background gold-gradient rounded-sm hover:opacity-90 transition-all"
            >
              Join
            </button>
          </form>
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