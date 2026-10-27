import Link from "next/link";
import { Logo } from "@/components/Logo";
import { contact, openingHours } from "@/data/site";

const social = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/chefstationme?igsh=dmJ3cDNkbW82eDJ0",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/chefstation1/?ref=NONE_xav_ig_profile_page_web#",
    icon: (
      <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  // {
  //   name: "X",
  //   href: "https://x.com",
  //   icon: (
  //     <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
  //       <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  //     </svg>
  //   ),
  // },
];

const explore = [
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/#reserve", label: "Book a table" },
];

export function Footer() {
  return (
    <footer className="border-t-2 border-ink">
      {/* CTA band */}
      <div className="kraft-texture border-b-2 border-ink text-ink">
        <div className="container-x flex flex-col items-start justify-between gap-6 py-12 md:flex-row md:items-center">
          <div>
            <p className="font-hand text-3xl font-bold text-brand">Bhook lagi hai?</p>
            <h2 className="font-display text-4xl font-extrabold leading-none tracking-tight sm:text-5xl">
              Next stop: Chef Station.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/#reserve" className="pop rounded-full bg-brand px-6 py-3.5 font-display font-extrabold text-white">
              Book a table
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="pop rounded-full bg-ink px-6 py-3.5 font-display font-extrabold text-white"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      </div>

      <div className="bg-ink text-white/70">
        <div className="container-x grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo light />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Desi food, fast bites and full meals at great prices — in the heart of Aziziyah, Jeddah.
            </p>
            <div className="mt-5 flex gap-2">
              {social.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-white/20 text-white transition hover:border-brand hover:bg-brand"
                  aria-label={s.name}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wider text-kraft">Explore</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {explore.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wider text-kraft">Timings</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              {openingHours.map((h) => (
                <li key={h.day} className="flex justify-between gap-4">
                  <span>{h.day}</span>
                  <span className={h.time === "Closed" ? "text-brand" : "text-white"}>{h.time}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-display text-sm font-extrabold uppercase tracking-wider text-kraft">Find us</p>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="transition hover:text-white">
                  {contact.address}
                </a>
              </li>
              <li>
                <a href={contact.phoneHref} className="transition hover:text-white">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition hover:text-white">
                  {contact.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container-x">
          <div className="rail opacity-30 invert" />
        </div>
        <div className="container-x flex flex-col items-center justify-between gap-2 py-6 text-xs text-white/40 sm:flex-row">
          <p>© {new Date().getFullYear()} Chef Station. All rights reserved.</p>
          <p>🚂 Good food, great prices.</p>
        </div>
      </div>
    </footer>
  );
}
