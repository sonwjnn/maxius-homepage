import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// 1: white, 0: black
export const getCorlorNavByIndex = (index: number) => {
  switch (index) {
    case 0:
    case 3:
      return false;
    default:
      return true;
  }
};
