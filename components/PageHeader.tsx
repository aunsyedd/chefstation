type PageHeaderProps = {
  tag: string;
  title: React.ReactNode;
  description?: string;
  note?: string;
};

export function PageHeader({ tag, title, description, note }: PageHeaderProps) {
  return (
    <section className="kraft-texture relative overflow-hidden border-b-2 border-ink">
      <img
        src="/logo bg.png"
        alt=""
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-6 h-64 w-64 rotate-12 object-contain opacity-20 sm:h-80 sm:w-80"
      />
      <div className="container-x relative py-14 sm:py-20">
        <span className="tag pop bg-white text-ink">{tag}</span>
        <h1 className="mt-5 max-w-3xl font-display text-5xl font-extrabold leading-[0.95] tracking-[-0.03em] sm:text-7xl">
          {title}
        </h1>
        {note && <p className="mt-3 -rotate-2 font-hand text-3xl font-bold text-brand sm:text-4xl">{note}</p>}
        {description && <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink/75">{description}</p>}
      </div>
    </section>
  );
}
