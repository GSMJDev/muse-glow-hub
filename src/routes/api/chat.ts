import { createFileRoute } from "@tanstack/react-router";

const SYSTEM_PROMPT = `You are the virtual assistant for 'Mizz Missi Aesthetics', a premium beauty and aesthetic salon located in Worcester, MA.

Your tone is welcoming, highly professional, polite, and reassuring.

Key Information you know:
- Team Members: Fernanda Missi, Michele, and Neia Silva.
- Phone Contact: +1 (774) 559-1684.
- Core Services: Full Brazilian Wax, Skin Treatments, and premium aesthetic procedures.
- Booking System: All bookings are strictly 'By appointment only' through our Vagaro system (https://www.vagaro.com/mizzmissiaesthetics).

Your primary goal is to answer basic questions about the salon, explain the benefits of our treatments, and gently guide the user to click the 'Book Online' button or contact us directly. Keep your answers concise, formatted for quick reading, and never invent pricing or medical advice. If you don't know the answer, politely ask the user to leave a message in the Contact Form or call the salon.`;

type ChatMessage = { role: "user" | "assistant"; content: string };

export const Route = createFileRoute("/api/chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.GEMINI_API_KEY;
        if (!apiKey) {
          return new Response("Missing GEMINI_API_KEY", { status: 500 });
        }

        let body: { messages?: ChatMessage[] };
        try {
          body = await request.json();
        } catch {
          return new Response("Invalid JSON", { status: 400 });
        }

        const messages = Array.isArray(body.messages) ? body.messages.slice(-20) : [];
        if (messages.length === 0) {
          return new Response("messages required", { status: 400 });
        }

        const contents = messages.map((m) => ({
          role: m.role === "assistant" ? "model" : "user",
          parts: [{ text: String(m.content ?? "").slice(0, 4000) }],
        }));

        const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

        const res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            systemInstruction: { parts: [{ text: SYSTEM_PROMPT }] },
            contents,
            generationConfig: { temperature: 0.7, maxOutputTokens: 512 },
          }),
        });

        if (!res.ok) {
          const errText = await res.text();
          console.error("Gemini API error:", res.status, errText);
          return new Response("AI service error", { status: 502 });
        }

        const data = (await res.json()) as {
          candidates?: { content?: { parts?: { text?: string }[] } }[];
        };
        const text =
          data.candidates?.[0]?.content?.parts?.map((p) => p.text ?? "").join("") ??
          "I'm sorry, I couldn't generate a response. Please call us at +1 (774) 559-1684.";

        return Response.json({ reply: text });
      },
    },
  },
});