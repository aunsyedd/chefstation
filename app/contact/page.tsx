"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    };

    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    setLoading(false);

    if (error) {
      console.log(error);
      alert("Something went wrong. Try again.");
      return;
    }

    setSent(true);
    e.currentTarget.reset();
  }

  return (
    <div>
      {/* HEADER */}
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Contact
          </p>

          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
            Say hello
          </h1>

          <p className="mt-4 max-w-xl text-lg text-stone-600">
            Reservations, events, or feedback—we read every message.
          </p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">

          {/* LEFT */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase text-stone-500">
                Visit
              </h2>
              <p className="mt-2 text-stone-800">
                Aziziyah Prince Majid Road
                <br />
                Jeddah, Saudi Arabia
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase text-stone-500">
                Hours
              </h2>
              <p className="mt-2 text-stone-600">
                Tue–Thu: 5pm – 10pm
                <br />
                Fri–Sat: 5pm – 11pm
                <br />
                Sun: 5pm – 9pm
                <br />
                Closed Mondays
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase text-stone-500">
                Contact
              </h2>
              <p className="mt-2 text-stone-600">
                <a href="tel:+966531881668">+966 53 188 1668</a>
                <br />
                <a href="mailto:hello@chefstation.com">
                  hello@chefstation.com
                </a>
              </p>
            </div>
          </div>

          {/* FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 sm:p-8">

              {sent ? (
                <p className="text-stone-600">
                  ✅ Message sent successfully. We’ll reply soon.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">

                  <input name="name" placeholder="Name" className="w-full border p-2 rounded" />
                  <input name="email" placeholder="Email" className="w-full border p-2 rounded" />
                  <input name="subject" placeholder="Subject" className="w-full border p-2 rounded" />
                  <textarea name="message" placeholder="Message" className="w-full border p-2 rounded" />

                  <button
                    type="submit"
                    disabled={loading}
                    className="bg-black text-white px-4 py-2 rounded"
                  >
                    {loading ? "Sending..." : "Send message"}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
}