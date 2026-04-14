import { serviceDetailTrustChips } from "@/data/services/trust-hub";
import { Container } from "@/components/ui/container";

export function ServiceDetailTrustStrip() {
  return (
    <div className="border-b border-brand-100 bg-gradient-to-r from-brand-50/90 via-white to-brand-50/90 py-4 sm:py-5">
      <Container className="max-w-6xl">
        <ul className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 sm:gap-x-8">
          {serviceDetailTrustChips.map((label) => (
            <li
              key={label}
              className="flex items-center gap-2 text-xs font-semibold text-brand-800 sm:text-sm"
            >
              <span
                className="h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500"
                aria-hidden
              />
              {label}
            </li>
          ))}
        </ul>
      </Container>
    </div>
  );
}
