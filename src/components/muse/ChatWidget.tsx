import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content:
    "Welcome to MUSE Aesthetics & Spa by Missi. How may I assist you with your wellness and skincare goals today — services, booking, or directions?",
};

// --- BASE DE CONHECIMENTO LOCAL (COM LINKS CLICÁVEIS EM HTML) ---
const KNOWLEDGE_BASE = [
  {
    keys: ["hello", "hi", "hey", "good morning", "good afternoon", "anyone there"],
    reply: "Hello! Thank you for reaching out to MUSE Aesthetics & Spa by Missi. We'd be delighted to help you find the treatment that best suits your skincare goals. How can we help you step into your MUSE moment today?"
  },
  {
    keys: ["location", "address", "where", "directions", "shrewsbury", "place", "map"],
    reply: "MUSE Aesthetics & Spa by Missi is located at 284 Boston Turnpike, Shrewsbury, MA 01545, United States. Please note that we operate by appointment only to ensure a private, premium experience for each guest. We look forward to welcoming you!"
  },
  {
    keys: ["book", "appointment", "reserve", "reservation", "schedule", "calendar", "vagaro"],
    reply: "To book your personalized experience, you can use our convenient online reservation area right here on our website, or visit us directly at <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>vagaro.com/mizzmissiaesthetics</a>.<br><br>Want to see more of our work? Feel free to check out our <a href='https://www.instagram.com/mizz.missi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>Instagram @mizz.missi</a>!"
  },
  {
    keys: ["facial", "facials", "skin", "cleaning", "deep cleaning", "pore", "dermaplaning", "led"],
    reply: "We specialize in premium clinical facials designed for visible results:<br><br>• Deep Cleaning Facial Mizz Missi ($95 - 60 min)<br>• Deep Cleaning with LED Lamp ($120 - 60 min)<br>• Deep Cleaning with Dermaplaning ($140 - 60 min)<br><br>We would be delighted to welcome you for a personalized assessment. <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>Click here to book</a>."
  },
  {
    keys: ["peeling", "peels", "algae", "chemical", "acne", "dark spot", "spots", "stain", "scars"],
    reply: "For skin renewal and tone correction, we offer high-performance treatments:<br><br>• Algae Peeling / Organic Peeling ($120 - 50 min)<br>• Microneedling Facial ($180 - 80 min)<br>• Chemical Peels: Tailored for Acne or Dark Spots.<br><br>We recommend a professional evaluation prior to treatment to ensure optimum safety and results."
  },
  {
    keys: ["wax", "waxing", "hair removal", "brazilian", "bikini", "leg", "lip"],
    reply: "Our professional waxing services utilize a specialized wax formulated for sensitive skin, ensuring low irritation and maximum comfort:<br><br>• Upper Lip ($15) | Armpit ($25)<br>• Bikini ($45) | Full Brazilian ($55)<br>• Lower Leg ($40) | Full Leg ($60) | Back ($60)<br><br>Would you like to <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>book a waxing session</a>?"
  },
  {
    keys: ["body", "massage", "contour", "relax", "detox", "cellulite", "blanket"],
    reply: "Rejuvenate your body with our sophisticated body therapies:<br><br>• Body Relaxing Treatment ($120 - 60 min)<br>• Body Contour Brazilian ($130 - 60 min)<br>• Body Contour Detox with Thermal Blanket ($130 - 75 min)<br><br>We invite you to <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>book a session</a> to experience true relaxation."
  },
  {
    keys: ["price", "cost", "how much", "rates", "menu"],
    reply: "Our premium services range from quick aesthetic enhancements to complete renewal rituals. Facials start at $95, body treatments at $120, and specialized advanced protocols like Microneedling are available from $220. You can explore our full menu of services right here, or <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>view our full pricing on Vagaro</a>."
  },
  {
    keys: ["pay", "finance", "financing", "cherry", "installment", "card", "split"],
    reply: "Yes! To make your wellness journey even more seamless, MUSE Aesthetics & Spa offers flexible payment and financing options through Cherry. Feel free to inquire about setting up your payment plan during your next visit."
  },
  {
    keys: ["phone", "call", "contact", "number", "email", "talk", "instagram", "insta"],
    reply: "You can reach our team directly by calling <a href='tel:+17745591684' class='text-gold underline hover:opacity-80 transition-opacity'>+1 (774) 559-1684</a>.<br><br>Alternatively, you can send us a Direct Message on our <a href='https://www.instagram.com/mizz.missi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>Instagram @mizz.missi</a> or use the Contact Form on this website. We are always here to assist you."
  },
  {
    keys: ["history", "old name", "mizz missi", "brand", "missi"],
    reply: "Founded in June 2022 as Mizz Missi Aesthetics, our brand evolved into MUSE Aesthetics & Spa by Missi. The name 'MUSE' represents inspiration, authentic beauty, femininity, and confidence—reflecting our growth and our commitment to delivering elevated, quiet luxury experiences."
  },
  {
    keys: ["review", "reviews", "good", "best", "feedback", "rating"],
    reply: "MUSE is proud to hold thousands of highly rated reviews from our clients! Guests consistently praise our relaxing atmosphere, welcoming customer service, and the exceptional results of our Deep Cleanings, Microneedling, and body treatments."
  }
];

// Resposta elegante caso o robozinho caia no "else"
const FALLBACK_REPLY = 
  "Thank you for your inquiry. To give you the most accurate advice regarding your skincare goals, I highly recommend speaking with our professionals directly.<br><br>Please feel free to <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>book a consultation</a>, call us at <a href='tel:+17745591684' class='text-gold underline hover:opacity-80 transition-opacity'>+1 (774) 559-1684</a>, or DM us on <a href='https://www.instagram.com/mizz.missi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity'>Instagram @mizz.missi</a> so we can provide more personalized details.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open]);

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    // 1. Adiciona a mensagem do usuário na tela
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);

    // 2. Simula o tempo de resposta ("Thinking...")
    setTimeout(() => {
      const lowerText = text.toLowerCase();
      let matchedReply = "";

      // 3. Mecanismo de busca por palavras-chave relevantes
      for (const item of KNOWLEDGE_BASE) {
        const found = item.keys.some((key) => lowerText.includes(key));
        if (found) {
          matchedReply = item.reply;
          break; // Para na primeira correspondência forte
        }
      }

      // Se não achou palavra-chave, usa o fallback com links
      const finalReply = matchedReply || FALLBACK_REPLY;

      setMessages((m) => [...m, { role: "assistant", content: finalReply }]);
      setLoading(false);
    }, 800);
  };

  return (
    <>
      {/* Floating button */}
      <button
        aria-label={open ? "Close chat" : "Open chat"}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-6 z-[90] h-14 w-14 rounded-full gold-gradient text-background shadow-2xl flex items-center justify-center hover:scale-105 transition-transform"
      >
        {open ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 6l12 12M6 18L18 6" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
          </svg>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[calc(100vw-3rem)] sm:w-96 max-h-[70vh] flex flex-col rounded-sm border border-gold/30 bg-background shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          <div className="px-5 py-4 border-b border-gold/20 bg-card/50">
            <p className="font-display text-[10px] tracking-[0.3em] text-gold/80">MUSE · CONCIERGE</p>
            <h4 className="font-serif text-lg text-gold-gradient mt-1">How can we help?</h4>
          </div>
          
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] px-4 py-2 rounded-sm gold-gradient text-background text-sm"
                    : "mr-auto max-w-[90%] text-sm text-foreground/85 leading-relaxed"
                }
              >
                {/* O usuário não renderiza HTML, apenas o assistente */}
                {m.role === "user" ? (
                  m.content
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: m.content }} />
                )}
              </div>
            ))}
            {loading && (
              <div className="mr-auto text-xs uppercase tracking-[0.25em] text-gold/70 animate-pulse">
                Thinking…
              </div>
            )}
            <div ref={endRef} />
          </div>
          
          <form onSubmit={send} className="flex border-t border-gold/20">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about services, booking…"
              maxLength={500}
              className="flex-1 bg-transparent px-4 py-3 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 text-[10px] uppercase tracking-[0.3em] text-background gold-gradient disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}