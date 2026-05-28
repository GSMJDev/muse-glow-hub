import { useEffect, useRef } from "react";

/**
 * Embedded Vagaro booking widget.
 * - Responsive (w-full max-w-md)
 * - Inherits site typography
 * - SEO/footer links hidden
 */
export function VagaroWidget() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://www.vagaro.com//resources/WidgetEmbeddedLoader/OZqpCJGtCZGcT3qmV35y6JuPlXez3Ly6puSdBuOc1WJD1wOc1WO61Ctdg4tjxMG9pUxapkUcvCu7gCmjZcoapOUc9CvdfQOW?v=ybpOFb1H06bjszZGkXdzIOI63LdoYmD2TJ2BnU9JH800#";
    ref.current.appendChild(script);
  }, []);

  return (
    <div className="w-full max-w-md mx-auto">
      <style>{`
        .vagaro-host .vagaro a { display: none !important; }
        .vagaro-host iframe { width: 100% !important; max-width: 100% !important; border: 0; }
        .vagaro-host * { font-family: inherit !important; }
      `}</style>
      <div className="vagaro-host bg-card/40 border border-gold/20 rounded-sm p-6">
        <div className="embedded-widget-title font-display text-[10px] tracking-[0.4em] text-gold/80 mb-4 text-center">
          BOOK NOW
        </div>
        <div ref={ref} className="vagaro" />
      </div>
    </div>
  );
}