import Link from "next/link";

function SolarGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <path
        d="M12 3v2M12 19v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M3 12h2M19 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export function SolarFloat() {
  return (
    <Link
      href="/energie-solaire"
      className="fixed bottom-24 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-yellow-500 text-white shadow-xl transition hover:scale-105 hover:bg-yellow-600"
      aria-label="Énergie solaire"
    >
      <SolarGlyph className="h-8 w-8" />
    </Link>
  );
}