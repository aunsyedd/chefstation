import { MenuCategoryNav } from "@/components/MenuCategoryNav";
import { MenuCard } from "@/components/MenuCard";
import { PageHeader } from "@/components/PageHeader";
import { Reveal } from "@/components/Reveal";
import { menuCategoryNav, menuItems } from "@/data/menu";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Chef Station's full menu — BBQ, handi, main course, rolls, sandwiches and pasta at great prices.",
};

export default function MenuPage() {
  return (
    <div>
      <PageHeader
        tag="🚉 Menu"
        title={
          <>
            Pick a platform, <span className="text-brand">dig in.</span>
          </>
        }
        note="All prices in SAR"
        description="Charcoal BBQ, slow-cooked handi, sizzling karahi, rolls, sandwiches and pasta — made fresh, served fast."
      />

      <MenuCategoryNav />

      <div className="container-x pb-24 pt-6">
        {menuCategoryNav.map(({ slug, category }, idx) => {
          const items = menuItems.filter((i) => i.category === category);
          return (
            <section key={category} id={slug} className="scroll-mt-44 pt-14">
              <Reveal className="flex flex-wrap items-center gap-4">
                <span className="rounded-xl border-2 border-ink bg-ink px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-kraft">
                  Platform {String(idx + 1).padStart(2, "0")}
                </span>
                <h2 className="font-display text-4xl font-extrabold tracking-[-0.03em] sm:text-5xl">{category}</h2>
                <span className="text-sm font-bold text-muted">
                  {items.length} {items.length === 1 ? "dish" : "dishes"}
                </span>
              </Reveal>
              <div className="rail mt-5" />
              <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((item, i) => (
                  <Reveal key={item.id} delay={(i % 3) * 0.05}>
                    <MenuCard item={item} />
                  </Reveal>
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}
