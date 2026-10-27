"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "@/components/Logo";
import { contact } from "@/data/site";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  // Scroll to #hash targets after navigation (sections may mount late in production).
  useLayoutEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.slice(1);
      if (!id) return;

      let tries = 0;
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          const top = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top, behavior: "smooth" });
        } else if (tries++ < 30) {
          setTimeout(tryScroll, 100);
        }
      };
      tryScroll();
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-paper/90 backdrop-blur-md">
      {/* Announcement strip */}
      <div className="bg-ink text-center text-xs font-semibold text-white">
        <p className="container-x py-1.5">
          🚂 <span className="hidden sm:inline">Now boarding at </span>Aziziyah, Prince Majid Rd ·{" "}
          <a href={contact.maps} target="_blank" rel="noopener noreferrer" className="text-kraft underline-offset-2 hover:underline">
            Get directions
          </a>
        </p>
      </div>

      <nav className="container-x flex h-[72px] items-center justify-between">
        <Logo onClick={() => setOpen(false)} />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`relative rounded-full px-4 py-2 font-display text-[15px] font-bold transition-colors ${
                    active ? "bg-ink text-white" : "text-ink hover:bg-kraft-light"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a href={contact.phoneHref} className="text-sm font-bold text-ink hover:text-brand">
            {contact.phoneDisplay}
          </a>
          <Link
            href="/#reserve"
            className="pop rounded-full bg-brand px-5 py-2.5 font-display text-sm font-extrabold text-white"
          >
            Book a table
          </Link>
        </div>

        <button
          type="button"
          className="pop flex h-11 w-11 items-center justify-center rounded-full bg-kraft text-ink md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="relative block h-3.5 w-5">
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 rotate-45" : "top-0"}`} />
            <span className={`absolute left-0 top-1.5 h-0.5 w-5 rounded bg-current transition-opacity ${open ? "opacity-0" : ""}`} />
            <span className={`absolute left-0 h-0.5 w-5 rounded bg-current transition-all duration-300 ${open ? "top-1.5 -rotate-45" : "top-3"}`} />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="overflow-hidden border-t-2 border-ink bg-kraft-light md:hidden"
          >
            <ul className="container-x flex flex-col gap-2 py-5">
              {links.map(({ href, label }, i) => (
                <li key={href}>
                  <Link
                    href={href}
                    onClick={() => setOpen(false)}
                    className={`flex items-center justify-between rounded-2xl border-2 border-ink px-5 py-3.5 font-display text-2xl font-extrabold ${
                      pathname === href ? "bg-ink text-white" : "bg-white text-ink"
                    }`}
                  >
                    {label}
                    <span className="text-sm font-bold text-brand">Platform {i + 1}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  href="/#reserve"
                  onClick={() => setOpen(false)}
                  className="pop block rounded-full bg-brand py-3.5 text-center font-display font-extrabold text-white"
                >
                  Book a table
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
