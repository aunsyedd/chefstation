import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { Marquee } from "@/components/Marquee";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind Chef Station — our kitchen, our values, and how we cook.",
};

const values = [
  {
    title: "Fresh ingredients",
    body: "We focus on quality ingredients in every dish to ensure rich flavour, freshness, and consistency in every bite.",
    icon: "🌿",
    bg: "bg-white",
  },
  {
    title: "Warm hospitality",
    body: "Great dining is about comfort, not formality. Our team serves with care, respect, and a welcoming touch.",
    icon: "🤝",
    bg: "bg-kraft",
  },
  {
    title: "Crafted with care",
    body: "Every dish is prepared with attention to detail, bringing together taste, presentation, and a memorable experience.",
    icon: "🔥",
    bg: "bg-brand text-white",
  },
];

const gallery = ["/chicken tikka.jpg", "/white handi.jpg", "/malai boti roll.jpg", "/Fettuccine Alfredo.jpg"];

export default function AboutPage() {
  return (
    <div>
      <PageHeader
        tag="👨‍🍳 About us"
        title={
          <>
            Food that brings <span className="text-brand">people together.</span>
          </>
        }
        note="Since day one, same passion"
        description="A Jeddah kitchen built on bold spices, live charcoal and the belief that every meal should feel like home."
      />

      <section className="container-x grid gap-14 py-20 sm:py-28 lg:grid-cols-2 lg:items-center lg:gap-20">
        <Reveal className="relative">
          <div className="pop relative aspect-[4/5] rotate-2 overflow-hidden rounded-3xl bg-kraft-light">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=1200&q=80"
              alt="Team preparing food in a restaurant kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <img
            src="/logo bg.png"
            alt=""
            className="absolute -bottom-8 -left-4 h-32 w-32 -rotate-12 object-contain drop-shadow-[3px_3px_0_rgba(23,18,15,0.6)]"
          />
        </Reveal>

        <Reveal delay={0.1}>
          <span className="tag bg-ink text-white">Our story</span>
          <h2 className="mt-4 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            Born in the heart of <span className="text-brand">Jeddah.</span>
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/70">
            <p>
              Chef Station began in the heart of Jeddah with a simple passion for serving flavourful food
              made with care. What started as a small idea soon grew into a welcoming dining spot where
              quality, taste, and hospitality come together.
            </p>
            <p>
              We believe great food is not just about ingredients but about the experience that comes with
              every bite. From carefully prepared dishes to warm service, every detail is designed to make
              you feel at home.
            </p>
            <p>
              As more guests discovered us, our menu expanded — while staying true to the same commitment
              that started it all.
            </p>
          </div>
          <Link href="/menu" className="pop mt-8 inline-block rounded-full bg-brand px-7 py-4 font-display font-extrabold text-white">
            Explore the menu →
          </Link>
        </Reveal>
      </section>

      <Marquee label="Our promise" items={["Fresh", "Flame-grilled", "Slow-cooked", "Served fast", "Great prices"]} />

      <section className="container-x py-20 sm:py-28">
        <Reveal className="text-center">
          <p className="font-hand text-3xl font-bold text-brand sm:text-4xl">No compromise</p>
          <h2 className="mt-1 font-display text-4xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-6xl">
            What we stand for
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className={`pop h-full rounded-3xl p-7 ${v.bg}`}>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl border-2 border-ink bg-paper text-3xl">
                  {v.icon}
                </span>
                <h3 className="mt-6 font-display text-2xl font-extrabold">{v.title}</h3>
                <p className="mt-2 text-sm leading-relaxed opacity-80">{v.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {gallery.map((src, i) => (
            <Reveal key={src} delay={i * 0.05}>
              <div className={`pop relative aspect-square overflow-hidden rounded-3xl bg-kraft-light ${i % 2 ? "rotate-2" : "-rotate-2"}`}>
                <Image src={src} alt="" fill sizes="(max-width: 768px) 50vw, 25vw" className="object-cover" />
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
