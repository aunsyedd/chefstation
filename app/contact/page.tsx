"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import PhoneInput from "react-phone-input-2";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const form = new FormData(e.currentTarget);

    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
    phone: phone
  ? phone.startsWith("+")
    ? phone
    : `+${phone}`
  : "",
    };

    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    setLoading(false);

    if (!error) {
      setSent(true);
      e.currentTarget.reset();
    } else {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div>
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Contact</p>
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
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Visit</h2>
              <p className="mt-2 text-stone-800">
                Aziziyah Prince Majid Road
                <br />
                Jeddah, Saudi Arabia
              </p>
            </div>

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Hours</h2>
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

            <div>
              <h2 className="text-xs font-semibold uppercase tracking-wider text-stone-500">Phone & email</h2>
              <p className="mt-2 text-stone-600">
                <a href="tel:+966531881668" className="text-stone-900 underline-offset-4 hover:underline">
                  +966 53 188 1668
                </a>
                <br />
                <a href="mailto:hello@chefstation.com" className="text-stone-900 underline-offset-4 hover:underline">
                  hello@chefstation.com
                </a>
              </p>
            </div>

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
                <p className="mt-6 text-stone-600">
                  Thank you—we will get back to you soon. 
                </p>
              ) : (
                <form onSubmit={handleSubmit} className="mt-6 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="block text-sm">
                      <span className="font-medium text-stone-700">Name</span>
                      <input
                        required
                        type="text"
                        name="name"
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      />
                    </label>

                    <label className="block text-sm">
                      <span className="font-medium text-stone-700">Email</span>
                      <input
                        required
                        type="email"
                        name="email"
                        className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      />
                    </label>
                  </div>

                  {/* PHONE */}
<label className="block text-sm">
<span className="font-medium text-stone-700">
  Phone Number (WhatsApp preferred for quick confirmation)
</span>

  <div className="mt-1.5">
<PhoneInput
  country={"pk"}
  enableSearch={true}
  value={phone}
  onChange={(value) => setPhone(value)}
  inputStyle={{
    width: "100%",
    height: "42px",
    borderRadius: "12px",
    border: "1px solid #d6d3d1",
    paddingLeft: "48px",
    fontSize: "14px",
  }}
  containerStyle={{ width: "100%" }}
/>
  </div>
</label>

                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Subject</span>
                    <input
                      required
                      type="text"
                      name="subject"
                      className="mt-1.5 w-full rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                      placeholder="Private dining, press, etc."
                    />
                  </label>

                  <label className="block text-sm">
                    <span className="font-medium text-stone-700">Message</span>
                    <textarea
                      required
                      name="message"
                      rows={5}
                      className="mt-1.5 w-full resize-none rounded-xl border border-stone-300 px-4 py-2.5 outline-none ring-amber-500/30 focus:border-amber-500 focus:ring-2"
                    />
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="rounded-full bg-amber-500 px-8 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-400 disabled:opacity-60"
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