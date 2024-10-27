import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { twi } from "tw-to-css";
export function inline(...inputs) {
    return twi(twMerge(clsx(inputs)));
}
