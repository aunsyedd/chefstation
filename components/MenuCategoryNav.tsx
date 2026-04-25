"use client";

import { menuCategoryNav } from "@/data/menu";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/** Keep in sync with menu page `scroll-mt-*` on sections (header ~64px + this bar ~96px). */
const SCROLL_TRIGGER_PX = 160;

function slugFromScrollPosition(): string {
  const trigger = SCROLL_TRIGGER_PX;
  let current = menuCategoryNav[0]?.slug ?? "";

  for (let i = 0; i < menuCategoryNav.length; i++) {
    const slug = menuCategoryNav[i].slug;
    const el = document.getElementById(slug);
    if (!el) continue;

    const rect = el.getBoundingClientRect();

    // Section is considered active only if it's actually crossing the viewport area
    if (rect.top <= trigger && rect.bottom > trigger) {
      return slug;
    }
  }

  return current;
}

export function MenuCategoryNav() {
  const [active, setActive] = useState(menuCategoryNav[0]?.slug ?? "");
  const scrollLockUntil = useRef(0);
  const listRef = useRef<HTMLDivElement>(null);
  const linkRefs = useRef<Map<string, HTMLAnchorElement>>(new Map());

  const setLinkRef = useCallback((slug: string, el: HTMLAnchorElement | null) => {
    if (el) linkRefs.current.set(slug, el);
    else linkRefs.current.delete(slug);
  }, []);

  const applyScrollPosition = useCallback(() => {
    if (typeof window === "undefined") return;
    if (Date.now() < scrollLockUntil.current) return;
    setActive(slugFromScrollPosition());
  }, []);

  const syncFromHash = useCallback(() => {
    const hash = window.location.hash.slice(1);
    if (hash && menuCategoryNav.some((n) => n.slug === hash)) {
      setActive(hash);
      scrollLockUntil.current = Date.now() + 1000;
      return true;
    }
    return false;
  }, []);

  useLayoutEffect(() => {
    const hadHash = syncFromHash();
    if (!hadHash) {
      applyScrollPosition();
    }
  }, [applyScrollPosition, syncFromHash]);

  useEffect(() => {
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, [syncFromHash]);

  useEffect(() => {
    let raf = 0;
    const onScrollOrResize = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        raf = 0;
        applyScrollPosition();
      });
    };

    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);
    return () => {
      if (raf) cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [applyScrollPosition]);

  useEffect(() => {
    const el = linkRefs.current.get(active);
    if (!el || !listRef.current) return;
    const list = listRef.current;
    const canScroll = list.scrollWidth > list.clientWidth + 2;
    if (!canScroll) return;
    el.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
  }, [active]);

  const handleNavClick = (slug: string) => {
    setActive(slug);
    scrollLockUntil.current = Date.now() + 500;
  };

  return (
    <nav
      aria-label="Menu sections"
      className="relative sticky top-16 z-30 border-b border-stone-800 bg-stone-950 shadow-[0_4px_24px_-2px_rgba(0,0,0,0.35)] backdrop-blur-md"
    >
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/35 to-transparent"
        aria-hidden
      />

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-stone-950 via-stone-950/90 to-transparent sm:hidden" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-stone-950 via-stone-950/90 to-transparent sm:hidden" />
<div className="relative mx-auto max-w-6xl px-3 py-2 sm:px-4 sm:py-2 lg:px-6">
        <div className="mb-2 hidden items-center justify-center gap-3 sm:flex">
          <span className="h-px w-12 bg-stone-700 sm:w-16" />
          <span className="font-display text-[11px] font-medium uppercase tracking-[0.28em] text-stone-500">
            Menu sections
          </span>
          <span className="h-px w-12 bg-stone-700 sm:w-16" />
        </div>

        <div
          ref={listRef}
          className="flex snap-x snap-mandatory gap-1.5 overflow-x-auto overscroll-x-contain px-0.5 py-0.5 [scrollbar-width:none] sm:flex-wrap sm:justify-center sm:gap-2 sm:overflow-visible sm:snap-none sm:px-0 [&::-webkit-scrollbar]:hidden"
        >
          {menuCategoryNav.map(({ slug, category }) => {
            const isActive = active === slug;
            return (
              <a
                key={slug}
                ref={(el) => setLinkRef(slug, el)}
                href={`#${slug}`}
                aria-current={isActive ? "location" : undefined}
                onClick={() => handleNavClick(slug)}
                className={[
                  "snap-center shrink-0 rounded-full px-3.5 py-2 text-center text-[11px] font-semibold leading-tight tracking-wide transition-colors duration-200 sm:px-4 sm:py-2.5 sm:text-[13px]",
                  isActive
                    ? "bg-amber-500 text-stone-950 shadow-sm ring-1 ring-amber-400/60"
                    : "border border-stone-700/90 bg-stone-900/60 text-stone-400 hover:border-stone-600 hover:bg-stone-800/90 hover:text-stone-100",
                ].join(" ")}
              >
                {category}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
