import { atom, useAtom } from "jotai";

export const fullpageIndexAtom = atom(0);

export const useFullpageIndex = () => {
  return useAtom(fullpageIndexAtom);
};
