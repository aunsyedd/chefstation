"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

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

  // 🔒 Prevent background scroll when menu is open
  useLayoutEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  useLayoutEffect(() => {
    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-800/80 bg-stone-950/95 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8 h-16">
        
        {/* LOGO */}
        <Link href="/" onClick={() => setOpen(false)}>
          <img
            src="/logo bg.png"
            className="h-12 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* DESKTOP MENU */}
        <ul className="hidden items-center gap-10 md:flex">
          {links.map(({ href, label }) => {
            const active = pathname === href;
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition ${
                    active
                      ? "text-amber-400"
                      : "text-stone-300 hover:text-amber-200"
                  }`}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* DESKTOP RESERVE */}
        <Link
          href="/#reserve"
          className="hidden rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-amber-400 md:inline-block"
        >
          Reserve
        </Link>

        {/* HAMBURGER */}
        <button
          onClick={() => setOpen(true)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-stone-700 text-stone-200 md:hidden"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </nav>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.45 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black md:hidden"
            />

            {/* DRAWER */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              className="
                fixed right-0 top-0 z-50 h-full
                w-full max-w-sm
                bg-stone-950/95 backdrop-blur-xl
                border-l border-stone-800
                md:hidden
                flex flex-col
              "
            >
              {/* HEADER */}
              <div className="flex items-center justify-between border-b border-stone-800 p-4">
                <span className="text-stone-200 font-semibold">Menu</span>

                <button
                  onClick={() => setOpen(false)}
                  className="text-stone-300 text-2xl"
                >
                  ✕
                </button>
              </div>

              {/* LINKS */}
              <nav className="flex flex-col gap-6 p-6">
                {links.map((link, i) => {
                  const active = pathname === link.href;

                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={`text-lg font-medium transition ${
                          active
                            ? "text-amber-400"
                            : "text-stone-200 hover:text-amber-300"
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  );
                })}
              </nav>

              {/* FIXED BOTTOM BUTTON */}
              <div className="mt-auto p-6">
                <Link
                  href="/#reserve"
                  onClick={() => setOpen(false)}
                  className="block w-full rounded-full bg-amber-500 py-3 text-center font-semibold text-black transition active:scale-95 hover:bg-amber-400"
                >
                  Reserve a table
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}