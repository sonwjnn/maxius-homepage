import { atom, useAtom } from "jotai";

export const navSheetAtom = atom(false);

export const useNavSheet = () => {
  return useAtom(navSheetAtom);
};
