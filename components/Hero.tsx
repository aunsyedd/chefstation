import Link from "next/link";

export function Hero() {
  return (
    <section className="relative isolate min-h-[85vh] overflow-hidden bg-stone-950">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80')] bg-cover bg-center"
        aria-hidden
      />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/85 to-stone-950/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-stone-950/30" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-6xl flex-col justify-end px-4 pb-20 pt-32 sm:px-6 sm:pb-28 lg:px-8 lg:justify-center lg:pb-0 lg:pt-24">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-amber-400/90">
          Contemporary dining
        </p>

        <h1 className="font-display max-w-xl text-4xl font-medium leading-[1.1] tracking-tight text-stone-50 sm:text-5xl lg:text-6xl">
          Where culinary tradition meets comforting flavors.
        </h1>

        <p className="mt-6 max-w-md text-base leading-relaxed text-stone-400 sm:text-lg">
          Authentic Pakistani and Indian dishes prepared with bold spices and traditional cooking techniques—served in a cozy, refined setting.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          
          <Link
            href="/menu"
            className="inline-flex items-center justify-center rounded-full bg-amber-500 px-8 py-3.5 text-sm font-semibold text-stone-950 transition hover:bg-amber-400"
          >
            View menu
          </Link>

          {/* FIXED BUTTON */}
          <button
            onClick={() => {
              const el = document.getElementById("reserve");
              if (el) {
                el.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }
            }}
            className="inline-flex items-center justify-center rounded-full border border-stone-500/60 px-8 py-3.5 text-sm font-semibold text-stone-100 transition hover:border-amber-400/60 hover:text-amber-200"
          >
            Book a table
          </button>
        </div>
      </div>
    </section>
  );
}