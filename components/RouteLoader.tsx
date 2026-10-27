"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Splash runs on full page loads only and is CSS-driven, so it never waits on hydration.
// The timeout below removes it even if the animation can't run.
// Client-side route changes get a quick fade instead.
export function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [splash, setSplash] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setSplash(false), 1600);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {splash && (
        <div
          aria-hidden
          className="kraft-texture pointer-events-none fixed inset-0 z-[9999] flex animate-splash-out flex-col items-center justify-center"
        >
          <img src="/logo bg.png" alt="" className="h-48 w-48 animate-splash-pop object-contain" />
          <div className="mt-6 w-56 overflow-hidden">
            <div className="animate-splash-train text-3xl">🚂💨</div>
            <div className="rail mt-1" />
          </div>
        </div>
      )}

      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-1 flex-col"
      >
        {children}
      </motion.div>
    </>
  );
}
