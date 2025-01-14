"use client";

import { useNavSheet } from "@/store/use-nav-sheet";

export const ToggleButton = () => {
  const [open, setOpen] = useNavSheet();
  const genericHamburgerLine = `h-1 w-10 my-1 rounded-full ${
    open ? "bg-white" : "bg-black"
  } transition ease transform duration-300`;

  return (
    <button
      className="flex flex-col h-12 w-12 justify-center items-center group z-50 fixed right-[90px] top-[50px]"
      onClick={() => {
        setOpen(!open);
      }}
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
