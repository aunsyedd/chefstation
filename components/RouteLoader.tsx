"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export function RouteLoader({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // ✅ ALWAYS start true to prevent flash
  const [loading, setLoading] = useState(true);
  const [showPage, setShowPage] = useState(false);

  useEffect(() => {
    setLoading(true);
    setShowPage(false);

    const timer = setTimeout(() => {
      setLoading(false);

      // small delay ensures smooth transition
      setTimeout(() => {
        setShowPage(true);
      }, 200);
    }, 1200);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      {/* 🍳 LOADER */}
<AnimatePresence>
  {loading && (
    <motion.div
      key="loader"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.4 }}
      className="fixed inset-0 flex items-center justify-center bg-stone-950 text-white z-[9999]"
    >
      {/* 👇 ADD FLEX COLUMN HERE */}
      <motion.div className="flex flex-col items-center justify-center">
        
        <motion.div
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1,
            ease: "linear",
          }}
          className="text-5xl mb-3"
        >
          🍳
        </motion.div>

        {/* 👇 This will now go to next line properly */}
        <p className="text-lg text-white/80 text-center">
          Cooking your page...
        </p>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      {/* 📄 PAGE (ONLY SHOW AFTER LOADER) */}
      {showPage && (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          {children}
        </motion.div>
      )}
    </>
  );
}