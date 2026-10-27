import Link from "next/link";

type LogoProps = {
  onClick?: () => void;
  light?: boolean;
};

export function Logo({ onClick, light = false }: LogoProps) {
  return (
    <Link href="/" onClick={onClick} className="group flex items-center gap-2">
      <img
        src="/logo bg.png"
        alt="Chef Station logo"
        className="h-14 w-14 scale-[1.35] object-contain transition-transform duration-300 group-hover:rotate-[-8deg]"
      />
      <span className="leading-none">
        <span className={`block font-display text-xl font-extrabold tracking-tight ${light ? "text-white" : "text-ink"}`}>
          Chef<span className="text-brand">Station</span>
        </span>
        <span className={`mt-0.5 block text-[13px] font-bold ${light ? "text-white/60" : "text-muted"}`} dir="rtl">
          محطة الشيف
        </span>
      </span>
    </Link>
  );
}
