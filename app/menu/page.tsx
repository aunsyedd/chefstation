import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { MenuCard } from "@/components/MenuCard";
import { menuCategoryNav, menuItems } from "@/data/menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore ChefStation's full menu—BBQ, handi, mains, rolls, sandwiches, pasta, fish, tandoori, drinks, and more.",
};

export default function MenuPage() {
  return (
    <div className="bg-stone-50">
      <div className="border-b border-stone-200 bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-600">Menu</p>
          <h1 className="font-display mt-3 text-4xl font-medium tracking-tight text-stone-900 sm:text-5xl">
            Eat well, drink well
          </h1>
          <p className="mt-4 max-w-xl text-lg text-stone-600">
            Wood-fired pies, hearty burgers, handmade pasta, and bar classics—made to share or savor solo.
          </p>
        </div>
      </div>

      <MenuCategoryNav />

      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
        {menuCategoryNav.map(({ slug, category }) => {
          const items = menuItems.filter((i) => i.category === category);
          return (
            <section key={category} id={slug} className="mb-16 scroll-mt-40 last:mb-0">
              <h2 className="font-display border-b border-stone-200 pb-4 text-2xl font-medium text-stone-900">
                {category}
              </h2>
              <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item) => (
                  <MenuCard key={item.id} item={item} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
