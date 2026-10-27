import Image from "next/image";
import type { MenuItem } from "@/data/menu";

type MenuCardProps = {
  item: MenuItem;
};

export function MenuCard({ item }: MenuCardProps) {
  return (
    <article className="pop group flex h-full flex-col overflow-hidden rounded-3xl bg-white">
      <div className="relative aspect-[4/3] overflow-hidden border-b-2 border-ink bg-kraft-light">
        <Image
          src={item.image}
          alt={item.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        {item.featured && (
          <span className="tag absolute left-3 top-3 -rotate-3 border-2 border-ink bg-brand text-white">
            🔥 Popular
          </span>
        )}
        <span className="absolute bottom-3 right-3 rounded-2xl border-2 border-ink bg-kraft px-3 py-1.5 font-display text-lg font-extrabold leading-none shadow-[3px_3px_0_var(--color-ink)]">
          {item.price}
          <span className="ml-1 text-[11px] font-bold">SAR</span>
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-bold uppercase tracking-[0.15em] text-brand">{item.category}</p>
        <h3 className="mt-1 font-display text-xl font-extrabold leading-tight">{item.name.trim()}</h3>
        <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink/65">{item.description}</p>
      </div>
    </article>
  );
}
