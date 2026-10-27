"use client";

import { menuCategoryNav } from "@/data/menu";
import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

/** Keep in sync with menu page `scroll-mt-*` on sections (floating header + this bar). */
const SCROLL_TRIGGER_PX = 240;

function slugFromScrollPosition(): string {
  const trigger = SCROLL_TRIGGER_PX;
  const current = menuCategoryNav[0]?.slug ?? "";

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
    <nav aria-label="Menu sections" className="sticky top-[100px] z-30 border-b-2 border-ink bg-paper/95 backdrop-blur-md">
      <div className="container-x">
        <div
          ref={listRef}
          className="flex snap-x snap-mandatory gap-2 overflow-x-auto overscroll-x-contain py-3 [scrollbar-width:none] md:justify-center [&::-webkit-scrollbar]:hidden"
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
                  "snap-center shrink-0 whitespace-nowrap rounded-full border-2 border-ink px-4 py-2 font-display text-sm font-extrabold transition-all duration-150",
                  isActive
                    ? "-translate-y-0.5 bg-brand text-white shadow-[3px_3px_0_var(--color-ink)]"
                    : "bg-white text-ink hover:bg-kraft-light",
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
