import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content:
    "Welcome to MUSE Aesthetics & Spa by Missi. I am your digital concierge. How may I assist you with your wellness and skincare goals today?",
};

// Sugestões de botões iniciais de conversação para o cliente
const INITIAL_SUGGESTIONS = [
  { label: "✨ Facials & Skin", text: "Tell me about your facials and skincare treatments" },
  { label: "📅 Book Now", text: "How can I book an appointment?" },
  { label: "📌 Location & Hours", text: "Where are you located and what are your rules?" },
  { label: "💳 Payment Options", text: "Do you offer financing or payment plans?" },
];

const KNOWLEDGE_BASE = [
  {
    keys: ["hello", "hi", "hey", "good morning", "good afternoon", "anyone there", "start", "menu"],
    reply: "Hello! Thank you for reaching out to MUSE Aesthetics & Spa by Missi. We'd be delighted to help you find the treatment that best suits your skincare goals. How can we help you step into your MUSE moment today?",
    suggestions: [
      { label: "✨ Facials Menu", text: "Facial treatments" },
      { label: "🌿 Body & Massage", text: "Body treatments" },
      { label: "📅 Book Online", text: "Book an appointment" }
    ]
  },
  {
    keys: ["location", "address", "where", "directions", "shrewsbury", "place", "map", "hours"],
    reply: "MUSE Aesthetics & Spa by Missi is located at <strong>284 Boston Turnpike, Shrewsbury, MA 01545, United States</strong>.<br><br>⏱️ <em>By appointment only</em> to ensure a private, premium experience for each guest. We also maintain a firm <strong>24-hour cancellation policy</strong> (30% fee within 24h, full price for same-day/no-show).",
    suggestions: [
      { label: "📅 Book Visit", text: "Book an appointment" },
      { label: "📞 Contact Us", text: "How can I contact you?" }
    ]
  },
  {
    keys: ["book", "appointment", "reserve", "reservation", "schedule", "calendar", "vagaro"],
    reply: "To book your personalized experience, you can use our convenient online reservation area right here on our website, or visit us directly at <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>vagaro.com/mizzmissiaesthetics</a>.<br><br>Want to see real results and clinical updates? Check out our <a href='https://www.instagram.com/musebymissi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>Instagram @musebymissi</a>!",
    suggestions: [
      { label: "💰 Pricing Info", text: "What are your prices?" },
      { label: "💬 Speak to Team", text: "What is your phone number?" }
    ]
  },
  {
    keys: ["facial", "facials", "skin", "cleaning", "deep cleaning", "pore", "dermaplaning", "led", "assessment"],
    reply: "We specialize in premium clinical facials designed for visible results:<br><br>• <strong>Skin Assessment ($30 - 30 min)</strong> — Ideal first step!<br>• <strong>Deep Cleansing Facial Mizz Missi ($95 - 60 min)</strong><br>• <strong>Led Lamp Therapy w/ Deep Facial ($120 - 60 min)</strong><br>• <strong>Dermaplaning Glow w/ Deep Facial ($140 - 75 min)</strong><br>• <strong>Advanced Age-Defying Facial ($180 - 75 min)</strong><br><br><a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>Click here to reserve your facial slot</a>.",
    suggestions: [
      { label: "🧬 Advanced Peels", text: "Tell me about your peeling treatments" },
      { label: "📅 Book Now", text: "Book an appointment" }
    ]
  },
  {
    keys: ["peeling", "peels", "algae", "chemical", "acne", "dark spot", "spots", "stain", "scars", "microneedling", "melasma"],
    reply: "For advanced cellular renewal, acne defense, and hyperpigmentation correction:<br><br>• <strong>Jessner Clarifying Peel ($140 - 30 min)</strong><br>• <strong>Acne Defense Facial Peel (From $160 - 45 min)</strong><br>• <strong>Seaweed Detox Peel / Organic Algae ($160 - 45 min)</strong><br>• <strong>Melasma Treatment Facial ($180 - 60 min)</strong><br>• <strong>Collagen Induction / Microneedling (From $220 - 90 min)</strong><br><br>We recommend starting with an Assessment if you are unsure.",
    suggestions: [
      { label: "🩺 Skin Assessment", text: "Skin Assessment" },
      { label: "💳 Cherry Financing", text: "Do you offer financing?" }
    ]
  },
  {
    keys: ["wax", "waxing", "hair removal", "brazilian", "bikini", "leg", "lip", "ipl", "laser"],
    reply: "We offer both high-performance <strong>Waxing</strong> (using premium formulas for sensitive skin) and advanced <strong>IPL Hair Removal</strong>:<br><br><strong>Waxing Highlights:</strong><br>• Upper Lip ($15) | Armpit ($25) | Bikini ($45) | Full Brazilian ($55)<br><br><strong>IPL Laser Hair Removal:</strong><br>• Underarms ($55) | Full Face ($90) | Full Brazilian ($100) | Full Legs ($150)<br><br><a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>Book your hair removal session here</a>.",
    suggestions: [
      { label: "⚡ IPL Face Laser", text: "IPL Hair Removal - Full Face" },
      { label: "📅 Book Now", text: "Book an appointment" }
    ]
  },
  {
    keys: ["body", "massage", "contour", "relax", "detox", "cellulite", "blanket", "lymphatic", "drainage"],
    reply: "Rejuvenate your form with our professional body protocols:<br><br>• <strong>Lymphatic Drainage ($120 - 60 min)</strong> — Detox & reduce swelling.<br>• <strong>Body Relaxing Treatment ($120 - 60 min)</strong> — Melt stress.<br>• <strong>Body Contour Brazilian ($130 - 60 min)</strong> — Sculpt contours.<br>• <strong>Detox & Glow Body Exfoliating ($140 - 45 min)</strong> — Heated blanket.<br>• <strong>Stretch Marks Organic Peeling ($480 - 3 Sessions package)</strong>",
    suggestions: [
      { label: "🌿 Lymphatic Drainage", text: "Lymphatic Drainage" },
      { label: "📅 Book Body Care", text: "Book an appointment" }
    ]
  },
  {
    keys: ["price", "cost", "how much", "rates", "menu"],
    reply: "Our pricing scales according to treatment complexity. Quick aesthetic waxing elements start at $15, Clinical Facials start at $95, Body therapies start at $120, and specialized medical-grade solutions like Microneedling from $220. <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>You can view our complete service rate sheets live on Vagaro</a>.",
    suggestions: [
      { label: "💳 Financing Details", text: "Do you offer financing?" },
      { label: "📅 Check Calendar", text: "Book an appointment" }
    ]
  },
  {
    keys: ["pay", "finance", "financing", "cherry", "installment", "card", "split"],
    reply: "Yes, we prioritize accessible luxury! MUSE Aesthetics & Spa offers flexible financing and split monthly installment plans directly through <strong>Cherry</strong>. You can apply easily and establish your payment package prior to or during your spa session.",
    suggestions: [
      { label: "✨ Explore Services", text: "What are your services?" },
      { label: "📞 Ask a Question", text: "What is your phone number?" }
    ]
  },
  {
    keys: ["phone", "call", "contact", "number", "email", "talk", "instagram", "insta"],
    reply: "Connect directly with us:<br><br>• <strong>Phone Support:</strong> <a href='tel:+17745591684' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>+1 (774) 559-1684</a><br>• <strong>Instagram Concierge:</strong> <a href='https://www.instagram.com/musebymissi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>@musebymissi</a><br>• <strong>Digital Inbox:</strong> You can also utilize our Contact Form right here on our website. We aim to respond swiftly!",
    suggestions: [
      { label: "📅 Book Slot", text: "Book an appointment" },
      { label: "📍 View Address", text: "Where are you located?" }
    ]
  },
  {
    keys: ["history", "old name", "mizz missi", "brand", "missi", "meaning"],
    reply: "MUSE Aesthetics & Spa by Missi was originally founded in June 2022 under the brand name <em>Mizz Missi Aesthetics</em>. Our recent evolution to <strong>MUSE</strong> mirrors our dedication to premium clinical results. 'MUSE' honors pure confidence, individual empowerment, and aesthetic harmony.",
    suggestions: [
      { label: "⭐️ Client Reviews", text: "Tell me about reviews" },
      { label: "✨ Facials Menu", text: "Tell me about your facials" }
    ]
  },
  {
    keys: ["review", "reviews", "good", "best", "feedback", "rating"],
    reply: "MUSE proudly maintains high client retention rates with excellent reviews on Google and Vagaro! Clients routinely highlight our relaxing private environment, targeted results for stubborn acne or melasma, and comfortable body therapies.",
    suggestions: [
      { label: "📅 Experience Muse", text: "Book an appointment" },
      { label: "📸 Instagram Feed", text: "How can I contact you?" }
    ]
  }
];

const FALLBACK_REPLY = 
  "Thank you for your inquiry. To give you the most accurate advice regarding your specific skin type or health history, I recommend consulting directly with our specialists.<br><br>Please feel free to <a href='https://www.vagaro.com/mizzmissiaesthetics' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>book a custom consultation</a>, call us at <a href='tel:+17745591684' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>+1 (774) 559-1684</a>, or DM us on <a href='https://www.instagram.com/musebymissi/' target='_blank' rel='noopener noreferrer' class='text-gold underline hover:opacity-80 transition-opacity font-semibold'>Instagram @musebymissi</a>.";

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([INITIAL]);
  const [suggestions, setSuggestions] = useState(INITIAL_SUGGESTIONS);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, open, loading]);

  const processResponse = (userText: string) => {
    const lowerText = userText.toLowerCase();
    let matchedReply = "";
    let nextSuggestions = INITIAL_SUGGESTIONS;

    for (const item of KNOWLEDGE_BASE) {
      const found = item.keys.some((key) => lowerText.includes(key));
      if (found) {
        matchedReply = item.reply;
        if (item.suggestions) {
          nextSuggestions = item.suggestions;
        }
        break;
      }
    }

    const finalReply = matchedReply || FALLBACK_REPLY;

    setMessages((m) => [...m, { role: "assistant", content: finalReply }]);
    setSuggestions(nextSuggestions);
    setLoading(false);
  };

  const handleSuggestionClick = (text: string) => {
    if (loading) return;
    
    // Injeta a sugestão como mensagem do usuário
    setMessages((m) => [...m, { role: "user", content: text }]);
    setLoading(true);

    setTimeout(() => {
      processResponse(text);
    }, 600);
  };

  const send = async (e: React.FormEvent) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    setMessages((m) => [...m, { role: "user", content: text }]);
    setInput("");
    setLoading(true);

    setTimeout(() => {
      processResponse(text);
    }, 700);
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
          <div className="relative flex items-center justify-center w-full h-full">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 12a8 8 0 0 1-11.5 7.2L4 21l1.8-5.5A8 8 0 1 1 21 12z" />
            </svg>
            <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-[#631F37] border border-background animate-pulse" />
          </div>
        )}
      </button>

      {open && (
        <div className="fixed bottom-24 right-6 z-[90] w-[calc(100vw-3rem)] sm:w-[400px] max-h-[80vh] md:max-h-[600px] flex flex-col rounded-sm border border-gold/30 bg-background shadow-2xl overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-300">
          
          {/* Header */}
          <div className="px-5 py-4 border-b border-gold/20 bg-card/50 flex items-center justify-between">
            <div>
              <p className="font-display text-[9px] tracking-[0.3em] text-gold/80">MUSE · DIGITAL CONCIERGE</p>
              <h4 className="font-serif text-base text-gold-gradient mt-0.5">Skincare & Wellness Support</h4>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-wider text-green-500 bg-green-500/10 px-2 py-0.5 rounded-full font-sans font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-green-500 animate-pulse" />
              Online
            </div>
          </div>
          
          {/* Messages Feed */}
          <div className="flex-1 overflow-y-auto px-4 py-4 space-y-4 bg-gradient-to-b from-background via-background/95 to-card/10">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto max-w-[85%] px-4 py-2.5 rounded-sm gold-gradient text-background text-sm shadow-md animate-in slide-in-from-right-2 duration-200"
                    : "mr-auto max-w-[92%] text-sm text-foreground/85 leading-relaxed bg-card/40 border border-gold/5 p-3 rounded-sm animate-in slide-in-from-left-2 duration-200"
                }
              >
                {m.role === "user" ? (
                  m.content
                ) : (
                  <span dangerouslySetInnerHTML={{ __html: m.content }} />
                )}
              </div>
            ))}
            
            {loading && (
              <div className="mr-auto flex items-center gap-2 p-3 bg-card/20 rounded-sm text-xs uppercase tracking-[0.25em] text-gold/70 animate-pulse">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce" />
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce delay-150" />
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-bounce delay-300" />
              </div>
            )}
            <div ref={endRef} />
          </div>

          {/* Quick Replies / Suggestions Area */}
          <div className="px-3 py-2 bg-card/20 border-t border-gold/10 flex flex-wrap gap-1.5">
            {suggestions.map((s) => (
              <button
                key={s.label}
                onClick={() => handleSuggestionClick(s.text)}
                disabled={loading}
                className="text-[11px] font-medium tracking-wide text-foreground/80 border border-gold/30 hover:border-gold hover:text-gold bg-background/50 px-2.5 py-1 rounded-full transition-all duration-200 disabled:opacity-40"
              >
                {s.label}
              </button>
            ))}
          </div>
          
          {/* Input Form */}
          <form onSubmit={send} className="flex border-t border-gold/20 bg-background">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question or use options above..."
              maxLength={500}
              disabled={loading}
              className="flex-1 bg-transparent px-4 py-3.5 text-sm text-foreground placeholder:text-foreground/40 focus:outline-none disabled:opacity-60"
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="px-5 text-[10px] uppercase tracking-[0.3em] text-background gold-gradient disabled:opacity-50 font-semibold transition-all"
            >
              Send
            </button>
          </form>
        </div>
      )}
    </>
  );
}