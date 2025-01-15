"use client";

import { cn, getCorlorNavByIndex } from "@/lib/utils";
import { useFullpageIndex } from "@/store/use-fullpage-index";
import Link from "next/link";

export const Logo = () => {
  const [index] = useFullpageIndex();

  const color = getCorlorNavByIndex(index) ? "text-white" : "text-black";

  return (
    <Link
      href="/"
      className={cn(
        "text-[20.5px] font-bold fixed z-10 left-[50px] lg:left-[100px] top-5 lg:top-[50px] text-black transition",
        color
      )}
    >
      MAXIUS
    </Link>
  );
};
