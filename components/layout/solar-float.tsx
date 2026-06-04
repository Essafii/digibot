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
        gap-3
        rounded-2xl
        bg-amber-500
        px-8
        py-5
        text-lg
        font-bold
        text-white
        shadow-2xl
        transition-all
        hover:scale-105
        hover:bg-amber-600
      "
      aria-label="Énergie solaire"
    >
      <span className="text-2xl">☀️</span>

      <div className="flex flex-col leading-none">
        <span className="text-sm opacity-90">
          Nouvelle activité
        </span>

        <span className="text-xl font-extrabold">
          Énergie solaire
        </span>
      </div>
    </Link>
  );
}