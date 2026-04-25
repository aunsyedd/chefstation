"use client";

import { useState } from "react";

export function ReservationSection() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section
      id="reserve"
      className="scroll-mt-24 border-y border-stone-200 bg-stone-100 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
              Reservations
            </p>
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
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Name</span>
                    <input
                      required
                      type="text"
                      name="name"
                      autoComplete="name"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                      placeholder="Alex Morgan"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Guests</span>
                    <select
                      name="guests"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    >
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
                    <span className="font-medium text-stone-700">Date</span>
                    <input
                      required
                      type="date"
                      name="date"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 bg-white px-4 py-2.5 text-stone-900 outline-none ring-amber-500/30 transition focus:border-amber-500 focus:ring-2"
                    />
                  </label>
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Time</span>
                    <select
                      name="time"
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
                <label className="block text-sm">
                  <span className="font-medium text-stone-700">Email</span>
                  <input
                    required
                    type="email"
                    name="email"
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
          </div>
        </div>
      </div>
    </section>
  );
}
