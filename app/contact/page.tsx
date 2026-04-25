"use client";

import { useState } from "react";
<<<<<<< HEAD
import { supabase } from "@/lib/supabaseClient";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: form.get("name"),
      email: form.get("email"),
      subject: form.get("subject"),
      message: form.get("message"),
    };

    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    setLoading(false);

    if (!error) {
      setSent(true);
      e.currentTarget.reset(); // clears form
    } else {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
=======

export default function ContactPage() {
  const [sent, setSent] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSent(true);
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
  }

  return (
    <div>
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
<<<<<<< HEAD
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">
            Contact
          </p>
=======
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Contact</p>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
            Say hello
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-600">
            Reservations, events, or feedback—we read every message.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5 lg:gap-16">
<<<<<<< HEAD
          
          {/* LEFT SIDE INFO */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Visit
              </h2>
              <p className="mt-2 text-stone-800">
                Aziziyah Prince Majid Road
                <br />
                Jeddah, Saudi Arabia
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Hours
              </h2>
=======
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Visit</h2>
              <p className="mt-2 text-stone-800">
                Aziziyah Prince Majid Road
                <br />
                Jeddah,  Saudi Arabia
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Hours</h2>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
              <p className="mt-2 text-stone-600">
                Tue–Thu: 5pm – 10pm
                <br />
                Fri–Sat: 5pm – 11pm
                <br />
                Sun: 5pm – 9pm
                <br />
                <span className="text-stone-500">Closed Mondays</span>
              </p>
            </div>
<<<<<<< HEAD

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">
                Phone & email
              </h2>
              <p className="mt-2 text-stone-600">
                <a
                  href="tel:+966531881668"
                  className="text-stone-900 underline-offset-4 hover:underline"
                >
                  +966 53 188 1668
                </a>
                <br />
                <a
                  href="mailto:hello@chefstation.com"
                  className="text-stone-900 underline-offset-4 hover:underline"
                >
=======
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone & email</h2>
              <p className="mt-2 text-stone-600">
                <a href="tel:+15551234567" className="text-stone-900 underline-offset-4 hover:underline">
                  +966 53 188 1668
                </a>
                <br />
                <a href="mailto:hello@chefstation.com" className="text-stone-900 underline-offset-4 hover:underline">
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  hello@chefstation.com
                </a>
              </p>
            </div>
<<<<<<< HEAD
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-medium text-stone-900">
                Send a message
              </h2>

              {sent ? (
                <p className="mt-6 text-stone-600">
                  Thank you—we will get back to you within one business day.
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  
=======
<div className="overflow-hidden rounded-2xl border border-stone-200 bg-stone-100">
  <iframe
    title="ChefStation map"
    className="h-56 w-full grayscale contrast-[0.95] sm:h-64"
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5652!2d39.2038691!3d21.5561173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d10022c7d821%3A0x27367a3663c7ebd4!2sChef%20Station!5e0!3m2!1sen!2ssa!4v1710000000000!5m2!1sen!2ssa"
  />

  <p className="border-t border-stone-200 px-4 py-3 text-center text-xs text-stone-500">
    Chef Station location — Jeddah, Saudi Arabia
  </p>
</div>
          </div>

          <div className="lg:col-span-3">
            <div className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8">
              <h2 className="font-display text-2xl font-medium text-stone-900">Send a message</h2>
              {sent ? (
                <p className="mt-6 text-stone-600">Thank you—we will get back to you within one business day. (Demo form.)</p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="font-medium text-stone-700">Name</span>
                      <input
                        required
                        type="text"
                        name="name"
<<<<<<< HEAD
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none focus:border-amber-500 focus:ring-2"
                      />
                    </label>

=======
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      />
                    </label>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                    <label className="block text-sm">
                      <span className="font-medium text-stone-700">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
<<<<<<< HEAD
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none focus:border-amber-500 focus:ring-2"
                      />
                    </label>
                  </div>

=======
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      />
                    </label>
                  </div>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Subject</span>
                    <input
                      required
                      type="text"
                      name="subject"
<<<<<<< HEAD
                      placeholder="Private dining, press, etc."
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none focus:border-amber-500 focus:ring-2"
                    />
                  </label>

=======
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      placeholder="Private dining, press, etc."
                    />
                  </label>
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Message</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
<<<<<<< HEAD
                      className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 px-4 py-2.5 outline-none focus:border-amber-500 focus:ring-2"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400 disabled:opacity-50"
                  >
                    {loading ? "Sending..." : "Send message"}
=======
                      className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                    />
                  </label>
                  <button
                    type="submit"
                    className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
                  >
                    Send message
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
                  </button>
                </form>
              )}
            </div>
          </div>
<<<<<<< HEAD

=======
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
        </div>
      </div>
    </div>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 94cb200e5b73938db0010008af3e6d8c04ea9e1a
