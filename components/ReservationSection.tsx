"use client";

import { useState } from "react";
<<<<<<< HEAD
import { supabase } from "@/lib/supabaseClient";

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    // ✅ SAFE & CLEAN DATA MAPPING
    const data = {
      name: String(form.get("name") || ""),
      guests: Number(form.get("guests") || 1),
      reservation_date: String(form.get("date") || ""),
      reservation_time: String(form.get("time") || ""),
      email: String(form.get("email") || ""),
      notes: String(form.get("notes") || ""),
    };

    // ❌ INSERT INTO SUPABASE
    const { error } = await supabase
      .from("reservations")
      .insert([data]);

    // ❌ ERROR HANDLING (IMPORTANT)
    if (error) {
      console.log("🔥 Insert error:", error);
      alert(error.message);
      setLoading(false);
      return;
    }

    setLoading(false);
=======

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
    setSubmitted(true);
  }

  return (
    <section
      id="reserve"
      className="scroll-mt-24 border-y border-stone-200 bg-stone-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
<<<<<<< HEAD

          {/* LEFT CONTENT */}
=======
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Reservations
            </p>
<<<<<<< HEAD

            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
              Save your seat
            </h2>

            <p className="mt-4 max-w-md text-stone-600">
              Tell us when you would like to dine. We will confirm your booking.
            </p>
          </div>

          {/* FORM */}
          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">

            {submitted ? (
              <p className="py-8 text-center text-stone-600">
                ✅ Thanks — we will confirm your table shortly.
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* NAME + GUESTS */}
                <div className="grid gap-5 sm:grid-cols-2">

=======
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
              Save your seat
            </h2>
            <p className="mt-4 max-w-md text-stone-600">
              Tell us when you would like to dine. This is a demo form—no booking is sent. For real service, wire this to your reservation platform.
            </p>
            <ul className="mt-8 space-y-3 text-sm text-stone-600">
              <li className="flex gap-2">
                <span className="text-amber-600">—</span>
                Parties of 8+ please call ahead
              </li>
              <li className="flex gap-2">
                <span className="text-amber-600">—</span>
                Outdoor patio seasonally available
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
            {submitted ? (
              <p className="py-8 text-center text-stone-600">
                Thanks—we will confirm your table shortly. (Demo only.)
              </p>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
<<<<<<< HEAD
                      placeholder="Alex Morgan"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
                    />
                  </label>

=======
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                      placeholder="Alex Morgan"
                    />
                  </label>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Guests</span>
                    <select
                      name="guests"
<<<<<<< HEAD
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
=======
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                        <option key={n} value={n}>
                          {n} {n === 1 ? "guest" : "guests"}
                        </option>
                      ))}
                    </select>
                  </label>
<<<<<<< HEAD

                </div>

                {/* DATE + TIME */}
                <div className="grid gap-5 sm:grid-cols-2">

=======
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Date</span>
                    <input
                      required
                      type="date"
                      name="date"
<<<<<<< HEAD
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
                    />
                  </label>

=======
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    />
                  </label>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Time</span>
                    <select
                      name="time"
<<<<<<< HEAD
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
                    >
                      {[
                        "5:00 PM",
                        "5:30 PM",
                        "6:00 PM",
                        "6:30 PM",
                        "7:00 PM",
                        "7:30 PM",
                        "8:00 PM",
                        "8:30 PM",
                        "9:00 PM",
                      ].map((t) => (
                        <option key={t} value={t}>
                          {t}
                        </option>
                      ))}
                    </select>
                  </label>

                </div>

                {/* EMAIL */}
=======
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    >
                      {["5:00 PM", "5:30 PM", "6:00 PM", "6:30 PM", "7:00 PM", "7:30 PM", "8:00 PM", "8:30 PM", "9:00 PM"].map(
                        (t) => (
                          <option key={t} value={t}>
                            {t}
                          </option>
                        ),
                      )}
                    </select>
                  </label>
                </div>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
<<<<<<< HEAD
                    placeholder="you@example.com"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
                  />
                </label>

                {/* NOTES */}
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">Notes</span>
                  <textarea
                    name="notes"
                    rows={3}
                    placeholder="Allergies, occasion, seating preference…"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5"
                  />
                </label>

                {/* BUTTON */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-amber-50"
                >
                  {loading ? "Sending..." : "Request reservation"}
                </button>

              </form>
            )}

=======
                    autoComplete="email"
                    className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    placeholder="you@example.com"
                  />
                </label>
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">Notes (optional)</span>
                  <textarea
                    name="notes"
                    rows={3}
                    className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    placeholder="Allergies, occasion, seating preference…"
                  />
                </label>
                <button
                  type="submit"
                  className="w-full rounded-full bg-stone-900 py-3.5 text-sm font-semibold text-amber-50 transition hover:bg-stone-800"
                >
                  Request reservation
                </button>
              </form>
            )}
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
          </div>
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
