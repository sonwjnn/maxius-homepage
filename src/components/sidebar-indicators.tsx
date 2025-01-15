"use client";

import { cn } from "@/lib/utils";
import { useFullpageIndex } from "@/store/use-fullpage-index";
declare var window: {
  fullpage_api: any;
} & typeof globalThis;

import { getCorlorNavByIndex } from "@/lib/utils";

export const SidebarIndicators = () => {
  const [index] = useFullpageIndex();

  const items = Array.from({ length: 5 }, (_, i) => i);

  const handleMoveToSection = (sectionIndex: number) => {
    console.log(sectionIndex);
    window.fullpage_api.moveTo(sectionIndex);
  };

  const color = getCorlorNavByIndex(index) ? "bg-white" : "bg-black";

  return (
    <div className="fixed top-1/2 right-14 -translate-y-1/2 flex flex-col space-y-1.5 z-10">
      {items.map((item) => {
        const isActive = item === index;
        return (
          <div
            key={item}
            onClick={() => handleMoveToSection(item + 1)}
            className={cn(
              "size-2 transition-all aspect-square duration-300 hover:w-6 cursor-pointer self-end",
              color,
              isActive && "opacity-100 w-7 bg-orange-400"
            )}
          />
        );
      })}
    </div>
  );
};
