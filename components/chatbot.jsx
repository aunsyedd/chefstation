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
      {/* Chat Window (ANIMATED) */}
      <div
        className={`fixed bottom-24 right-6 w-[360px] bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden z-50
        transition-all duration-300 ease-out origin-bottom-right
        ${open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-4 pointer-events-none"}
        `}
        style={{ height: 500 }}
      >
        {/* Header */}
        <div
          className="flex items-center gap-3 px-4 py-3 flex-shrink-0"
          style={{ background: "#B85C38" }}
        >
          <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center text-lg">
            👨‍🍳
          </div>

          <div>
            <p className="text-white font-medium text-sm">Chef Station Bot</p>
            <p className="text-white/70 text-xs flex items-center gap-1">
              <span className="inline-block w-2 h-2 bg-green-400 rounded-full" />
              Online · replies instantly
            </p>
          </div>

          <button
            onClick={() => setOpen(false)}
            className="ml-auto text-white/70 hover:text-white text-2xl"
          >
            ×
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-2 bg-zinc-50 dark:bg-zinc-800">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex gap-2 max-w-[85%] ${
                m.role === "user"
                  ? "self-end flex-row-reverse"
                  : "self-start"
              }`}
            >
              {m.role === "assistant" && (
                <div
                  className="w-7 h-7 rounded-full flex items-center justify-center text-xs mt-1"
                  style={{ background: "#B85C38", color: "white" }}
                >
                  👨‍🍳
                </div>
              )}

              <div
                className={`px-3 py-2 rounded-xl text-sm ${
                  m.role === "user"
                    ? "text-white"
                    : "bg-white dark:bg-zinc-700 text-zinc-800 dark:text-zinc-100 border"
                }`}
                style={m.role === "user" ? { background: "#B85C38" } : {}}
              >
                {m.content}
              </div>
            </div>
          ))}

          {/* Typing */}
          {loading && (
            <div className="flex gap-2 self-start">
              <div
                className="w-7 h-7 rounded-full flex items-center justify-center text-xs mt-1"
                style={{ background: "#B85C38", color: "white" }}
              >
                👨‍🍳
              </div>
              <div className="bg-white dark:bg-zinc-700 px-4 py-3 rounded-xl flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 bg-zinc-400 rounded-full animate-bounce"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
            </div>
          )}

          <div ref={bottomRef} />
        </div>

        {/* Quick Chips */}
        <div className="flex flex-wrap gap-1.5 px-3 py-2 border-t bg-zinc-50 dark:bg-zinc-800">
          {QUICK_CHIPS.map((c) => (
            <button
              key={c.label}
              onClick={() => sendMessage(c.text)}
              className="text-xs px-2.5 py-1 rounded-full border border-orange-400 text-orange-600 hover:bg-orange-50"
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Input */}
        <div className="flex gap-2 px-3 py-2 border-t bg-white dark:bg-zinc-900">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            placeholder="Ask about food, menu..."
            className="flex-1 text-sm px-3 py-1.5 rounded-full border bg-zinc-50 dark:bg-zinc-800 outline-none"
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading || !input.trim()}
            className="w-8 h-8 rounded-full text-white flex items-center justify-center disabled:opacity-50"
            style={{ background: "#B85C38" }}
          >
            ➤
          </button>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full text-white flex items-center justify-center z-50 shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-2xl"
        style={{ background: "#B85C38" }}
      >
        <span className={`transition-transform duration-300 ${open ? "rotate-180" : ""}`}>
          {open ? "✕" : "👨‍🍳"}
        </span>
      </button>
    </>
  );
}