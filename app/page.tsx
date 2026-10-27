import Link from "next/link";
import Image from "next/image";

import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { MenuCard } from "@/components/MenuCard";
import { Reveal } from "@/components/Reveal";
import { ReservationSection } from "@/components/ReservationSection";
import { featuredItems, menuCategoryNav, menuItems } from "@/data/menu";

const categoryEmoji: Record<string, string> = {
  BBQ: "🔥",
  Handi: "🍲",
  "Main Course": "🍛",
  Rolls: "🌯",
  Sandwiches: "🥪",
  Pasta: "🍝",
};

const platforms = menuCategoryNav.map(({ slug, category }) => {
  const items = menuItems.filter((i) => i.category === category);
  return {
    slug,
    category,
    count: items.length,
    image: items[0]?.image,
    from: Math.min(...items.map((i) => i.price)),
  };
});

const perks = [
  { icon: "🍽️", title: "Dine in", body: "Cosy seating for family dinners and friends' nights out." },
  { icon: "🛍️", title: "Take away", body: "Call ahead or WhatsApp us — your order will be ready to grab." },
  { icon: "🎉", title: "Buffet & deals", body: "Ask about our buffet nights and this week's special deals." },
  { icon: "💸", title: "Great prices", body: "Full desi meals that don't empty your wallet." },
];

export default function HomePage() {
  return (
    <>
      <Hero />

      <Marquee items={menuItems.slice(0, 12).map((i) => i.name.trim())} />

      {/* PLATFORMS (categories) */}
      <section className="container-x py-20 sm:py-28">
        <Reveal className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="tag bg-ink text-white">🚉 Choose your platform</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              What are you <span className="text-brand">craving</span> today?
            </h2>
          </div>
          <Link href="/menu" className="font-display text-lg font-extrabold underline decoration-brand decoration-4 underline-offset-8 hover:text-brand">
            Full menu →
          </Link>
        </Reveal>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {platforms.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.05}>
              <Link href={`/menu#${p.slug}`} className="pop group block overflow-hidden rounded-3xl bg-white">
                <div className="flex items-center justify-between border-b-2 border-dashed border-ink/20 bg-ink px-4 py-2 font-mono text-[11px] font-bold uppercase tracking-widest text-kraft sm:text-xs">
                  <span>Platform {String(i + 1).padStart(2, "0")}</span>
                  <span className="hidden sm:inline">{p.count} dishes</span>
                </div>
                <div className="relative aspect-[16/10] overflow-hidden bg-kraft-light">
                  {p.image && (
                    <Image
                      src={p.image}
                      alt={p.category}
                      fill
                      sizes="(max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="flex items-center justify-between gap-2 p-4 sm:p-5">
                  <div>
                    <h3 className="font-display text-xl font-extrabold leading-tight sm:text-2xl">
                      {categoryEmoji[p.category]} {p.category}
                    </h3>
                    <p className="text-sm font-semibold text-muted">from {p.from} SAR</p>
                  </div>
                  <span className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-ink bg-kraft font-bold transition group-hover:bg-brand group-hover:text-white sm:flex">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FEATURED */}
      <section className="kraft-texture border-y-2 border-ink py-20 sm:py-28">
        <div className="container-x">
          <Reveal className="text-center">
            <p className="font-hand text-3xl font-bold text-brand sm:text-4xl">Sab ka favourite</p>
            <h2 className="mx-auto mt-1 max-w-2xl font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Our best-sellers
            </h2>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredItems.slice(0, 6).map((item, i) => (
              <Reveal key={item.id} delay={(i % 3) * 0.06}>
                <MenuCard item={item} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/menu" className="pop inline-block rounded-full bg-ink px-8 py-4 font-display text-base font-extrabold text-white">
              Explore all {menuItems.length} dishes
            </Link>
          </div>
        </div>
      </section>

      {/* PERKS */}
      <section className="container-x py-20 sm:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative">
            <div className="pop relative aspect-[4/5] -rotate-2 overflow-hidden rounded-3xl bg-kraft-light">
              <Image src="/mutton karahi.jpg" alt="Mutton karahi" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
            </div>
            <div className="pop absolute -bottom-6 -right-2 w-40 rotate-6 overflow-hidden rounded-2xl bg-white sm:w-52">
              <div className="relative aspect-square">
                <Image src="/chicken tikka roll.jpg" alt="Chicken tikka roll" fill sizes="208px" className="object-cover" />
              </div>
            </div>
            <span className="tag pop absolute -left-2 top-6 -rotate-6 bg-brand text-white">Made fresh daily</span>
          </Reveal>

          <Reveal delay={0.1}>
            <span className="tag bg-ink text-white">Why Chef Station</span>
            <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
              Ghar jaisa khana, <span className="text-brand">station</span> jaisi speed.
            </h2>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink/70">
              Home-style desi cooking served fast and fresh. Whether you&apos;re here for a quick roll or a
              full karahi feast, we&apos;ve got you.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {perks.map((p) => (
                <div key={p.title} className="rounded-2xl border-2 border-ink bg-white p-5">
                  <span className="text-3xl">{p.icon}</span>
                  <h3 className="mt-2 font-display text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/65">{p.body}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <ReservationSection />
    </>
  );
}
