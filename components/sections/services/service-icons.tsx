import type { ComponentType } from "react";
import { Camera, Code2, Megaphone, Network } from "lucide-react";

import type { HomeServiceIcon } from "@/data/services/types";

export const serviceIcons: Record<
  HomeServiceIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  security: Camera,
  network: Network,
  web: Code2,
  marketing: Megaphone,
};
