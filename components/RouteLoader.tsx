"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // ⏱ loader time (change if you want)

    return () => clearTimeout(timer);
  }, [pathname]);

  // 🍳 LOADER SCREEN
  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-stone-950 text-white z-[9999]">
        <div className="text-center">
          <div className="text-5xl animate-spin mb-4">🍳</div>
          <p className="animate-pulse text-lg">
            Cooking your page...
          </p>
        </div>
      </div>
    );
  }

  // 🎬 PAGE FADE + ANIMATION AFTER LOADER
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, y: 20, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}