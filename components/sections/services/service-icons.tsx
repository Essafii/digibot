import type { ComponentType } from "react";
import {
  BellRing,
  Cable,
  Camera,
  Code2,
  DoorOpen,
  KeyRound,
  Megaphone,
  Network,
  Tv,
  Video,
  Volume2,
} from "lucide-react";

import type { HomeServiceIcon } from "@/data/services/types";

export const serviceIcons: Record<
  HomeServiceIcon,
  ComponentType<{ className?: string; "aria-hidden"?: boolean }>
> = {
  security: Camera,
  network: Network,
  web: Code2,
  marketing: Megaphone,
  tv: Tv,
  lock: KeyRound,
  cable: Cable,
  alarm: BellRing,
  speaker: Volume2,
  videophone: Video,
  door: DoorOpen,
};
