"use client";
import { useState, useRef, useEffect } from "react";

const QUICK_CHIPS = [
  { label: "🔥 BBQ", text: "What BBQ items do you have?" },
  { label: "🫕 Handi", text: "Tell me about your handi dishes." },
  { label: "🍖 Main Course", text: "What's in the main course?" },
  { label: "⭐ Best Dishes", text: "What are your most popular dishes?" },
  { label: "🌯 Rolls", text: "What rolls do you serve?" },
  { label: "🍝 Pasta", text: "What pasta dishes do you have?" },
  { label: "🥪 Sandwiches", text: "What sandwiches do you have?" },
];

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Welcome to Chef Station! 🍽️ I can help you explore our menu, check specials, or answer any questions. How can I help?",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async (text) => {
    const userText = text || input.trim();
    if (!userText || loading) return;

    const newMessages = [...messages, { role: "user", content: userText }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await res.json();

      setMessages([
        ...newMessages,
        { role: "assistant", content: data.reply },
      ]);
    } catch {
      setMessages([
        ...newMessages,
        {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again! 🙏",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Chat window */}
      <div
        className={`fixed bottom-24 right-4 z-50 flex h-[min(540px,calc(100svh-8rem))] w-[calc(100vw-2rem)] max-w-[380px] origin-bottom-right flex-col overflow-hidden rounded-3xl border-2 border-ink bg-paper shadow-[6px_6px_0_var(--color-ink)] transition-all duration-300 ease-out sm:right-6 ${
          open ? "translate-y-0 scale-100 opacity-100" : "pointer-events-none translate-y-4 scale-90 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex flex-shrink-0 items-center gap-3 border-b-2 border-ink bg-brand px-4 py-3 text-white">
          <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-full border-2 border-ink bg-kraft">
            <img src="/logo bg.png" alt="" className="h-full w-full scale-[1.35] object-contain" />
          </div>
          <div>
            <p className="font-display text-lg font-extrabold leading-tight">Chef Station Bot</p>
            <p className="flex items-center gap-1.5 text-xs text-white/80">
              <span className="inline-block h-2 w-2 rounded-full bg-[#25D366]" />
              Online · replies instantly
            </p>
          </div>
          <button
            onClick={() => setOpen(false)}
            className="ml-auto flex h-9 w-9 items-center justify-center rounded-full text-white/80 transition hover:bg-white/15 hover:text-white"
            aria-label="Close chat"
          >
            ✕
          </button>
        </div>

        {/* Messages */}
        <div className="flex flex-1 flex-col gap-3 overflow-y-auto p-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                m.role === "user"
                  ? "self-end rounded-br-md border-2 border-ink bg-ink text-white"
                  : "self-start rounded-bl-md border-2 border-ink bg-white text-ink"
              }`}
            >
              {m.content}
            </div>
          ))}

          {loading && (
            <div className="flex items-center gap-1 self-start rounded-2xl rounded-bl-md border-2 border-ink bg-white px-4 py-3.5">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="inline-block h-1.5 w-1.5 animate-bounce rounded-full bg-ink/40"
                  style={{ animationDelay: `${i * 0.15}s` }}
                />
              ))}
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick chips */}
        <div className="flex flex-shrink-0 gap-1.5 overflow-x-auto border-t-2 border-ink/10 px-4 py-2.5 [scrollbar-width:none]">
          {QUICK_CHIPS.map((c) => (
            <button
              key={c.label}
              onClick={() => sendMessage(c.text)}
              className="shrink-0 whitespace-nowrap rounded-full border-2 border-ink bg-kraft-light px-3 py-1 text-xs font-bold text-ink transition hover:bg-brand hover:text-white"
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex flex-shrink-0 gap-2 border-t-2 border-ink bg-white p-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about food, hours, menu…"
            className="flex-1 rounded-full border-2 border-ink/15 bg-paper px-4 py-2 text-sm text-ink outline-none transition placeholder:text-ink/35 focus:border-ink"
          />
          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border-2 border-ink bg-brand text-white transition disabled:opacity-40"
            aria-label="Send"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Floating toggle */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-5 right-4 z-50 flex h-14 w-14 items-center justify-center pop rounded-full bg-brand text-2xl text-white sm:right-6"
        aria-label="Toggle chat"
      >
        {!open && <span className="absolute inset-0 animate-ping rounded-full bg-brand opacity-25" />}
        <span className={`relative transition-transform duration-300 ${open ? "rotate-90 text-lg" : ""}`}>
          {open ? "✕" : "👨‍🍳"}
        </span>
      </button>
    </>
  );
}
