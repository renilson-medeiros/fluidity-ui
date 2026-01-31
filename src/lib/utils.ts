import { type ClassValue, clsx } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

const customTwMerge = extendTailwindMerge({
  extend: {
    theme: {
      color: [
        "background",
        "foreground",
        "muted",
        "muted-foreground",
        "accent",
        "accent-foreground",
        "border",
        "input",
        "ring",
        "vibrant-red",
        "vibrant-green",
        "vibrant-blue",
        "vibrant-purple",
        "vibrant-pink",
        "vibrant-yellow",
        "vibrant-orange",
      ],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs));
}
