"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import logo from "@/assets/logo.jpg";

const links = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isFirstPath = useRef(true);

  useLayoutEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-stone-950/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 h-16">
        
        <Link href="/" onClick={() => setOpen(false)}>
          <img src="/logo bg.png" className="h-19 w-auto object-contain" />
        </Link>

        <ul className="hidden items-center gap-10 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium tracking-wide transition-colors ${
                    active ? "text-amber-400" : "text-stone-300 hover:text-amber-200"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
<button
  onClick={() => {
    setOpen(false);

    const el = document.getElementById("reserve");
    if (!el) return;

    const navbarHeight = 90;

    const top =
      el.getBoundingClientRect().top +
      window.pageYOffset -
      navbarHeight;

    window.scrollTo({
      top,
      behavior: "smooth",
    });
  }}
  className="hidden md:inline-flex items-center rounded-full bg-amber-500 px-5 py-2 text-sm font-semibold text-stone-950 hover:bg-amber-400 transition"
>
  Reserve
</button>
        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-stone-700 text-stone-200 md:hidden"
          aria-expanded={open}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? "✕" : "☰"}
        </button>
      </nav>

      {/* SMOOTH DROPDOWN (FIXED) */}
      <div
        className={`md:hidden overflow-hidden border-t border-stone-800 bg-stone-950 px-4 transition-all duration-300 ease-in-out
        ${open ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"}`}
      >
        <ul className="flex flex-col gap-3">
          {links.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="block py-2 text-stone-200"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/#reserve"
              className="mt-2 block rounded-full bg-amber-500 py-3 text-center text-sm font-semibold text-stone-950"
              onClick={() => setOpen(false)}
            >
              Reserve a table
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}