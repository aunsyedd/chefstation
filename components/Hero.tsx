"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { menuItems } from "@/data/menu";

const ease = [0.22, 1, 0.36, 1] as const;
const lowestPrice = Math.min(...menuItems.map((i) => i.price));

const lines = [
  { text: "Desi food.", className: "text-ink" },
  { text: "Fast bites.", className: "text-brand" },
  { text: "Full meals.", className: "text-ink" },
];

export function Hero() {
  return (
    <section className="kraft-texture relative overflow-hidden">
      <div className="container-x grid items-center gap-12 pb-16 pt-10 sm:pt-14 lg:grid-cols-[1.1fr_1fr] lg:pb-24 lg:pt-16">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.5 }}
            className="tag pop bg-white text-ink"
          >
            🔥 Aziziyah&apos;s favourite desi stop
          </motion.span>

          <h1 className="mt-6 font-display text-[3.4rem] font-extrabold leading-[0.92] tracking-[-0.03em] sm:text-7xl lg:text-[5.6rem]">
            {lines.map((l, i) => (
              <motion.span
                key={l.text}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.15 + i * 0.1, duration: 0.6, ease }}
                className={`block ${l.className}`}
              >
                {l.text}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, rotate: -8, scale: 0.8 }}
            animate={{ opacity: 1, rotate: -4, scale: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200 }}
            className="mt-3 inline-block font-hand text-4xl font-bold text-ink sm:text-5xl"
          >
            Great prices, <span className="text-brand underline decoration-wavy decoration-2 underline-offset-8">great taste!</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.55, duration: 0.5 }}
            className="mt-6 max-w-md text-lg leading-relaxed text-ink/75"
          >
            Charcoal BBQ, sizzling karahi, creamy handi, rolls and more — cooked fresh every
            evening on Prince Majid Road.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.65, duration: 0.5 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <Link href="/menu" className="pop rounded-full bg-brand px-7 py-4 font-display text-base font-extrabold text-white">
              See the menu →
            </Link>
            <Link href="/#reserve" className="pop rounded-full bg-white px-7 py-4 font-display text-base font-extrabold text-ink">
              Book a table
            </Link>
          </motion.div>
        </div>

        {/* Plate + stickers */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ delay: 1.2, duration: 0.9, ease }}
          className="relative mx-auto aspect-square w-full max-w-[30rem]"
        >
          <div className="absolute inset-0 rounded-full border-[3px] border-dashed border-ink/30" />
          <div className="absolute inset-5 overflow-hidden rounded-full border-[6px] border-brand bg-ink shadow-[10px_10px_0_var(--color-ink)]">
            <Image
              src="/chicken karahi.jpg"
              alt="Chicken karahi"
              fill
              priority
              sizes="(max-width: 1024px) 90vw, 480px"
              className="object-cover"
            />
          </div>

          <div className="absolute -left-2 top-6 animate-wiggle sm:-left-6">
            <div className="pop flex h-28 w-28 flex-col items-center justify-center rounded-full bg-brand text-center text-white sm:h-32 sm:w-32">
              <span className="text-xs font-bold uppercase">From</span>
              <span className="font-display text-4xl font-extrabold leading-none">{lowestPrice}</span>
              <span className="text-xs font-bold">SAR</span>
            </div>
          </div>

          <div className="absolute -right-1 bottom-10 animate-float sm:-right-4">
            <div className="pop rotate-3 rounded-2xl bg-white px-4 py-3">
              <p className="font-hand text-2xl font-bold leading-none text-brand">Chef&apos;s pick!</p>
              <p className="font-display text-lg font-extrabold">Chicken Karahi</p>
            </div>
          </div>

          <img
            src="/logo bg.png"
            alt=""
            className="absolute -bottom-4 left-4 h-24 w-24 -rotate-12 object-contain drop-shadow-[3px_3px_0_rgba(23,18,15,0.6)] sm:h-28 sm:w-28"
          />
        </motion.div>
      </div>
    </section>
  );
}
