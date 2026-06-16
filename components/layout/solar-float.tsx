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
        gap-2
        rounded-xl
        bg-gradient-to-r
        from-amber-500
        to-yellow-400
        px-4
        py-2
        text-white
        shadow-lg
        transition-all
        duration-300
        hover:scale-105
      "
      aria-label="Énergie solaire"
    >
      <div
        className="
          flex
          h-8
          w-8
          items-center
          justify-center
          rounded-full
          bg-white/20
          text-sm
        "
      >
        ☀️
      </div>

      <div className="leading-tight">
        <div className="text-[10px] font-semibold uppercase tracking-wider opacity-90">
          Nouvelle activité
        </div>

        <div className="text-sm font-bold">
          Énergie solaire
        </div>
      </div>
    </Link>
  );
}