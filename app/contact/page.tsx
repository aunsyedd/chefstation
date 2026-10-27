"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { supabase } from "@/lib/supabaseClient";
import { contact, openingHours } from "@/data/site";
import PhoneInput from "react-phone-input-2";
import { PageHeader } from "@/components/PageHeader";

const cards = [
  { label: "Call us", value: contact.phoneDisplay, href: contact.phoneHref, icon: "📞", bg: "bg-white" },
  { label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, icon: "💬", bg: "bg-[#25D366]" },
  { label: "Email", value: contact.email, href: `mailto:${contact.email}`, icon: "✉️", bg: "bg-kraft" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [phone, setPhone] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);

    const formEl = e.currentTarget;
    const form = new FormData(formEl);

    const data = {
      name: String(form.get("name") || ""),
      email: String(form.get("email") || ""),
      subject: String(form.get("subject") || ""),
      message: String(form.get("message") || ""),
      phone: phone ? (phone.startsWith("+") ? phone : `+${phone}`) : "",
    };

    const { error } = await supabase
      .from("contact_messages")
      .insert([data]);

    setLoading(false);

    if (!error) {
      setSent(true);
      formEl.reset();
    } else {
      console.log(error);
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <div>
      <PageHeader
        tag="📍 Contact"
        title={
          <>
            Chalo, <span className="text-brand">baat karein!</span>
          </>
        }
        description="Reservations, take-away orders, events or feedback — we read every message and reply fast."
      />

      <div className="container-x grid gap-5 pt-12 sm:grid-cols-3">
        {cards.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noopener noreferrer"
            className={`pop flex items-center gap-4 rounded-3xl p-5 ${c.bg}`}
          >
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border-2 border-ink bg-paper text-2xl">
              {c.icon}
            </span>
            <span className="min-w-0">
              <span className="block text-xs font-bold uppercase tracking-wider text-ink/60">{c.label}</span>
              <span className="mt-0.5 block truncate font-display text-lg font-extrabold">{c.value}</span>
            </span>
          </a>
        ))}
      </div>

      <div className="container-x grid gap-8 py-12 pb-24 lg:grid-cols-[1fr_1.3fr]">
        <div className="space-y-6">
          <div className="pop rounded-3xl bg-ink p-7 text-white">
            <p className="font-display text-sm font-extrabold uppercase tracking-wider text-kraft">🕔 Timings</p>
            <ul className="mt-4 divide-y divide-white/10">
              {openingHours.map((h) => (
                <li key={h.day} className="flex justify-between py-3 text-sm">
                  <span className="text-white/70">{h.day}</span>
                  <span className={h.time === "Closed" ? "font-bold text-brand" : "font-bold"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pop overflow-hidden rounded-3xl bg-white">
            <iframe
              title="Chef Station map"
              className="h-72 w-full border-b-2 border-ink"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.5652!2d39.2038691!3d21.5561173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c3d10022c7d821%3A0x27367a3663c7ebd4!2sChef%20Station!5e0!3m2!1sen!2ssa!4v1710000000000!5m2!1sen!2ssa"
            />
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-sm font-semibold text-ink/70">{contact.address}</p>
              <a
                href={contact.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 rounded-full border-2 border-ink bg-brand px-4 py-2 text-sm font-extrabold text-white"
              >
                Directions
              </a>
            </div>
          </div>
        </div>

        <div className="pop rounded-3xl bg-white p-6 sm:p-10">
          {sent ? (
            <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
              <span className="text-6xl">🎉</span>
              <h2 className="mt-4 font-display text-3xl font-extrabold">Message sent!</h2>
              <p className="mt-2 max-w-xs text-ink/65">Thank you — we will get back to you soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <p className="font-hand text-3xl font-bold text-brand">Write to us</p>
                <h2 className="font-display text-3xl font-extrabold sm:text-4xl">Send a message</h2>
              </div>

              <div className="grid gap-5 sm:grid-cols-2">
                <label className="block text-sm">
                  <span className="mb-1.5 block font-bold">Name</span>
                  <input required type="text" name="name" placeholder="Your name" className="field" />
                </label>
                <label className="block text-sm">
                  <span className="mb-1.5 block font-bold">Email</span>
                  <input required type="email" name="email" placeholder="you@example.com" className="field" />
                </label>
              </div>

              <div className="block text-sm">
                <span className="mb-1.5 block font-bold">
                  Phone <span className="font-normal text-ink/50">— WhatsApp preferred</span>
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
                <span className="mb-1.5 block font-bold">Subject</span>
                <input required type="text" name="subject" placeholder="Take away, events, feedback…" className="field" />
              </label>

              <label className="block text-sm">
                <span className="mb-1.5 block font-bold">Message</span>
                <textarea required name="message" rows={5} placeholder="How can we help?" className="field resize-none" />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="pop rounded-full bg-brand px-8 py-4 font-display text-base font-extrabold text-white disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message →"}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
