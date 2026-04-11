import Link from "next/link";
import Image from "next/image";
import { Hero } from "@/components/Hero";
import { MenuCard } from "@/components/MenuCard";
import { ReservationSection } from "@/components/ReservationSection";
import { featuredItems } from "@/data/menu";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Featured</p>
          <h2 className="font-display mt-3 text-3xl font-medium tracking-tight text-stone-900 sm:text-4xl">
            Dishes our guests love
          </h2>
          <p className="mt-4 text-stone-600">
            A taste of our menu—ingredient-led cooking with bold, balanced flavors.
          </p>
        </div>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featuredItems.map((item) => (
            <MenuCard key={item.id} item={item} />
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full border border-stone-300 px-8 py-3 text-sm font-semibold text-stone-800 transition hover:border-amber-400 hover:text-amber-800"
          >
            See full menu
          </Link>
        </div>
      </section>

      <section className="relative overflow-hidden bg-stone-900 py-20 text-stone-100 sm:py-24">
        <div className="pointer-events-none absolute -right-24 top-0 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?w=900&q=80"
              alt="Chef plating a dish in the kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-400">Chef's Station</p>
            <h2 className="font-display mt-3 text-3xl font-medium tracking-tight sm:text-4xl">
          An evening worth remembering
            </h2>
            <p className="mt-4 text-stone-400">
            From appetizers to desserts, every dish is prepared with care, warmth, and authentic flavor.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
            >
              Our story
            </Link>
          </div>
        </div>
      </section>

      <ReservationSection />

      <section className="mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8">
        <h2 className="font-display text-3xl font-medium text-stone-900 sm:text-4xl">Join us tonight</h2>
        <p className="mx-auto mt-4 max-w-lg text-stone-600">
          Questions or private events? Reach out—we would love to host you.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-stone-900 px-8 py-3.5 text-sm font-semibold text-amber-50 transition hover:bg-stone-800"
          >
            Contact
          </Link>
          <Link
            href="/menu"
            className="inline-flex rounded-full border border-stone-300 px-8 py-3.5 text-sm font-semibold text-stone-800 transition hover:border-amber-400"
          >
            Browse menu
          </Link>
        </div>
      </section>
    </>
  );
}
