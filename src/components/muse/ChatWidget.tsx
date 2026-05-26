import { useEffect, useRef, useState } from "react";

type Msg = { role: "user" | "assistant"; content: string };

const INITIAL: Msg = {
  role: "assistant",
  content:
    "Hi! I'm the Mizz Missi Aesthetics assistant. How can I help you today — services, booking, or directions?",
};

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
    const next = [...messages, { role: "user" as const, content: text }];
    setMessages(next);
    setInput("");
    setLoading(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: next }),
      });
      if (!res.ok) throw new Error(await res.text());
      const data = (await res.json()) as { reply: string };
      setMessages((m) => [...m, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages((m) => [
        ...m,
        {
          role: "assistant",
          content:
            "I'm having trouble right now. Please call +1 (774) 559-1684 or use our Contact form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
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
                    : "mr-auto max-w-[90%] text-sm text-foreground/85 leading-relaxed whitespace-pre-wrap"
                }
              >
                {m.content}
              </div>
            ))}
            {loading && (
              <div className="mr-auto text-xs uppercase tracking-[0.25em] text-gold/70">
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