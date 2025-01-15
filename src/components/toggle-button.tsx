"use client";

import { getCorlorNavByIndex } from "@/lib/utils";
import { useFullpageIndex } from "@/store/use-fullpage-index";
import { useNavSheet } from "@/store/use-nav-sheet";

export const ToggleButton = () => {
  const [open, setOpen] = useNavSheet();

  const [index] = useFullpageIndex();

  const color = getCorlorNavByIndex(index) ? "bg-white" : "bg-black";

  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full ${color} ${
    open ? "bg-white" : "bg-black"
  } transition ease transform duration-300 `;

  const onClick = () => {
    setOpen(!open);
  };
  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group z-50 pointer-events-auto fixed right-[50px] lg:right-[90px] top-5 lg:top-[50px]"
      onClick={onClick}
    >
      <div
        className={`${genericHamburgerLine} ${
          open && "rotate-45 translate-y-3"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open ? "opacity-0" : "opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          open ? "-rotate-45 -translate-y-3" : "opacity-100"
        }`}
      />
    </button>
  );
};
