"use client";

import { useMountedState } from "react-use";
import { NavSheet } from "./nav-sheet";

export const SheetProvider = () => {
  const isMounted = useMountedState();

  if (!isMounted) return null;

  return (
    <>
      <NavSheet />
    </>
  );
};
