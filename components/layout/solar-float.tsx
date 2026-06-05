import Link from "next/link";

export function SolarFloat() {
  return (
    <Link
      href="/energie-solaire"
      className="
        fixed
        bottom-24
        right-6
        z-50
        flex
        items-center
        gap-4
        rounded-2xl
        border
        border-white/20
        bg-gradient-to-r
        from-amber-500
        to-yellow-400
        px-6
        py-4
        text-white
        shadow-2xl
        transition-all
        duration-300
        hover:scale-105
        hover:shadow-amber-500/30
      "
      aria-label="Énergie solaire"
    >
      <div
        className="
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-white/20
          text-2xl
        "
      >
        ☀️
      </div>

      <div className="flex flex-col">
        <span className="text-xs font-semibold uppercase tracking-wider opacity-90">
          ÉNERGIE SOLAIRE
        </span>

        <span className="text-sm font-medium">
          Découvrez nos solutions
        </span>
      </div>
    </Link>
  );
}