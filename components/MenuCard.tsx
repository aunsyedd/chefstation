import Image from "next/image";
import type { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-stone-200/80 bg-white shadow-sm transition hover:border-amber-200/80 hover:shadow-lg">
      <div className="relative aspect-[4/3] overflow-hidden bg-stone-200">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-stone-950/85 px-3 py-1 text-xs font-medium uppercase tracking-wide text-amber-300 backdrop-blur-sm">
          {item.category}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-xl font-medium text-stone-900">
            {item.name}
          </h3>
          <span className="shrink-0 text-lg font-semibold text-amber-600">
            ⃁ {item.price}
          </span>
        </div>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-stone-600">
          {item.description}
        </p>
      </div>
    </article>
  );
}
