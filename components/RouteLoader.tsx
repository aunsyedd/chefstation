"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

// Splash plays on the first load and again on every route change. It is CSS-driven,
// so it never waits on hydration; keying it by pathname restarts the animation.
// The timeout below removes it even if the animation can't run.
export function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [doneFor, setDoneFor] = useState<string | null>(null);
  const splash = doneFor !== pathname;

  useEffect(() => {
    const t = setTimeout(() => setDoneFor(pathname), 1600);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <>
      {splash && (
        <div
          key={`splash-${pathname}`}
          aria-hidden
          className="kraft-texture pointer-events-none fixed inset-0 z-[9999] flex animate-splash-out flex-col items-center justify-center"
        >
          <img src="/logo bg.png" alt="" className="h-48 w-48 animate-splash-pop object-contain" />
          <TrainTrack />
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

export function TrainTrack() {
  return (
    <div className="mt-6 w-56 overflow-hidden">
      <div className="animate-splash-train text-3xl">🚂💨</div>
      <div className="rail mt-1" />
    </div>
  );
}
