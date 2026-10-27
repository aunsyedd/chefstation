type MarqueeProps = {
  items: string[];
  label?: string;
};

// Departure-board style ticker.
export function Marquee({ items, label = "Now serving" }: MarqueeProps) {
  const row = [...items, ...items];

  return (
    <div className="flex items-stretch border-y-2 border-ink bg-ink text-kraft">
      <div className="relative z-10 flex shrink-0 items-center gap-2 bg-brand px-4 font-display text-sm font-extrabold uppercase tracking-wide text-white sm:px-6">
        <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
        {label}
      </div>
      <div className="overflow-hidden py-3.5">
        <div className="flex w-max animate-marquee items-center gap-10 pl-10">
          {row.map((item, i) => (
            <span key={i} className="flex items-center gap-10 font-mono text-base font-bold uppercase tracking-[0.15em] sm:text-lg">
              {item}
              <span className="text-brand">◆</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
