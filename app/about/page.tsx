import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "The story behind ChefStation—our team, our values, and how we cook.",
};

export default function AboutPage() {
  return (
    <div>
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">About</p>
          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
            Our story
          </h1>
          <p className="mt-4 text-lg text-stone-600">
At Chef Station, we believe the kitchen is the heart of every home and every great dining experience. Our journey began with a simple idea — to make cooking easier, smarter, and more enjoyable for everyone, from professional chefs to home cooks.

With a strong passion for quality and innovation, we provide reliable kitchenware and cooking essentials designed to solve real kitchen challenges. Every product is carefully selected or crafted to improve efficiency, save time, and bring consistency to your cooking.

Over the years, Chef Station has grown into a trusted name in kitchen supplies, serving both household users and the food & beverage industry. We are committed to offering durable, practical, and affordable solutions that support creativity in every kitchen.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-stone-200">
            <Image
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=900&q=80"
              alt="Team preparing food in a restaurant kitchen"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="space-y-6 text-stone-600">
            <p>
       Chef Station began in the heart of Jeddah with a simple passion for serving flavorful food made with care. What started as a small idea soon grew into a welcoming dining spot where quality, taste, and hospitality come together. As more guests discovered us, our menu expanded while staying true to the same commitment that started it all.

We believe great food is not just about ingredients but about the experience that comes with every bite. From carefully prepared dishes to warm service, every detail is designed to make you feel at home.

At Chef Station, we continue to grow with the same passion we started with, always striving to bring people together over food that creates lasting memories.
            </p>
            <Link
              href="/menu"
              className="inline-flex rounded-full bg-stone-900 px-6 py-3 text-sm font-semibold text-amber-50 transition hover:bg-stone-800"
            >
              Explore the menu
            </Link>
          </div>
        </div>

        <div className="mt-20 grid gap-10 sm:grid-cols-3">
          {[
{
  title: "Fresh ingredients",
  body: "We focus on quality ingredients in every dish to ensure rich flavor, freshness, and consistency in every bite.",
},
{
  title: "Warm hospitality",
  body: "Great dining is about comfort, not formality. Our team serves with care, respect, and a welcoming touch.",
},
{
  title: "Crafted with care",
  body: "Every dish is prepared with attention to detail, bringing together taste, presentation, and a memorable dining experience.",
},
          ].map((block) => (
            <div
              key={block.title}
              className="rounded-2xl border border-stone-200 bg-white p-6 shadow-sm sm:p-8"
            >
              <h2 className="font-display text-xl font-medium text-stone-900">{block.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-stone-600">{block.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
