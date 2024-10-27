import type { ClassValue } from "clsx";

import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { twi } from "tw-to-css";

export function inline(...inputs: ClassValue[]) {
  return twi(twMerge(clsx(inputs)));
}
