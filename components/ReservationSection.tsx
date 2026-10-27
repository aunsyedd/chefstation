"use client";

import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import { supabase } from "@/lib/supabaseClient";
import { contact, openingHours } from "@/data/site";
import { Reveal } from "@/components/Reveal";

const times = ["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"];

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: String(form.get("name") || ""),
      guests: Number(form.get("guests") || 1),
      reservation_date: String(form.get("date") || ""),
      reservation_time: String(form.get("time") || ""),
      email: String(form.get("email") || ""),
      notes: String(form.get("notes") || ""),
      phone: phone ? (phone.startsWith("+") ? phone : `+${phone}`) : "",
    };

    const { error } = await supabase.from("reservations").insert([data]);

    if (error) {
      console.log("Insert error:", error);
      alert(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
    setSubmitted(true);
  }

  return (
    <section id="reserve" className="scroll-mt-24 border-t-2 border-ink bg-brand py-20 sm:py-28">
      <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
        <Reveal className="text-white">
          <span className="tag border-2 border-ink bg-white text-ink">🎟️ Reservations</span>
          <h2 className="mt-5 font-display text-5xl font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl">
            Book your seat on the flavour express.
          </h2>
          <p className="mt-5 max-w-md text-lg leading-relaxed text-white/85">
            Tell us when you&apos;d like to come — we&apos;ll confirm your table quickly, usually on WhatsApp.
          </p>

          <div className="pop mt-8 rounded-3xl bg-ink p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-widest text-kraft">Departure times</p>
            <ul className="mt-3 divide-y divide-white/10 font-mono text-sm">
              {openingHours.map((h) => (
                <li key={h.day} className="flex justify-between py-2.5">
                  <span className="text-white/70">{h.day}</span>
                  <span className={h.time === "Closed" ? "font-bold text-brand" : "font-bold text-kraft"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pop rounded-full bg-[#25D366] px-6 py-3.5 font-display font-extrabold text-ink"
            >
              💬 WhatsApp us
            </a>
            <a href={contact.phoneHref} className="pop rounded-full bg-white px-6 py-3.5 font-display font-extrabold text-ink">
              📞 {contact.phoneDisplay}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl border-2 border-ink bg-paper shadow-[8px_8px_0_var(--color-ink)]">
            {/* Ticket header */}
            <div className="flex items-center justify-between rounded-t-[22px] bg-ink px-6 py-4 text-white sm:px-8">
              <div>
                <p className="font-mono text-[11px] font-bold uppercase tracking-[0.25em] text-kraft">Boarding pass</p>
                <p className="font-display text-2xl font-extrabold">Table reservation</p>
              </div>
              <img src="/logo bg.png" alt="" className="h-14 w-14 scale-125 object-contain" />
            </div>

            {/* Perforation */}
            <div className="relative">
              <span className="absolute -left-[15px] top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-2 border-ink bg-brand [clip-path:inset(0_0_0_50%)]" />
              <span className="absolute -right-[15px] top-1/2 h-7 w-7 -translate-y-1/2 rounded-full border-2 border-ink bg-brand [clip-path:inset(0_50%_0_0)]" />
              <div className="mx-6 border-t-2 border-dashed border-ink/25" />
            </div>

            <div className="p-6 sm:p-8">
              {submitted ? (
                <div className="flex min-h-[380px] flex-col items-center justify-center text-center">
                  <span className="text-6xl">🎟️</span>
                  <h3 className="mt-4 font-display text-3xl font-extrabold">You&apos;re booked in!</h3>
                  <p className="mt-2 max-w-xs text-ink/65">Thanks — we will confirm your table shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="mb-1.5 block font-bold">Passenger name</span>
                      <input required type="text" name="name" placeholder="Your full name" className="field" />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-1.5 block font-bold">Guests</span>
                      <select name="guests" className="field">
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>
                            {n} {n === 1 ? "guest" : "guests"}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="mb-1.5 block font-bold">Date</span>
                      <input required type="date" name="date" className="field" />
                    </label>
                    <label className="block text-sm">
                      <span className="mb-1.5 block font-bold">Time</span>
                      <select name="time" className="field">
                        {times.map((t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ))}
                      </select>
                    </label>
                  </div>

                  <label className="block text-sm">
                    <span className="mb-1.5 block font-bold">Email</span>
                    <input required type="email" name="email" placeholder="you@example.com" className="field" />
                  </label>

                  <div className="block text-sm">
                    <span className="mb-1.5 block font-bold">
                      Phone <span className="font-normal text-ink/50">— WhatsApp preferred for quick confirmation</span>
                    </span>
                    <PhoneInput
                      country={"sa"}
                      enableSearch={true}
                      value={phone}
                      onChange={(value) => setPhone(value)}
                      containerClass="phone-field"
                    />
                  </div>

                  <label className="block text-sm">
                    <span className="mb-1.5 block font-bold">Notes</span>
                    <textarea
                      name="notes"
                      rows={3}
                      placeholder="Allergies, occasion, seating preference…"
                      className="field resize-none"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="pop w-full rounded-full bg-brand py-4 font-display text-base font-extrabold text-white disabled:opacity-60"
                  >
                    {loading ? "Sending…" : "Confirm my seat →"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
