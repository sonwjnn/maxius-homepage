"use client";

import { cn, getCorlorNavByIndex } from "@/lib/utils";
import { useFullpageIndex } from "@/store/use-fullpage-index";
import { useNavSheet } from "@/store/use-nav-sheet";
import { useParams, useRouter } from "next/navigation";

export const LanguageSwitcher = () => {
  const [index] = useFullpageIndex();
  const [open] = useNavSheet();
  const params = useParams();
  const lang = params.locale || "en";
  const router = useRouter();

  const changeLanguage = (lang: string) => {
    router.push(`/${lang}`);
  };

  const color = getCorlorNavByIndex(index) ? "text-white" : "text-black";

  return (
    <div
      className={cn(
        "flex gap-x-2 text-[21px] font-light z-50 pointer-events-auto fixed right-[50px] lg:right-[90px] top-20 lg:top-[100px]",
        color,
        open && "text-white"
      )}
    >
      <button
        onClick={() => changeLanguage("en")}
        className={cn(lang === "en" && "text-orange-400")}
      >
        EN
      </button>
      <button
        onClick={() => changeLanguage("ko")}
        className={cn(lang === "ko" && "text-orange-400")}
      >
        KR
      </button>
    </div>
  );
};
