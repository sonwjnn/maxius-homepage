"use client";

import { JotaiProvider } from "@/components/jotai-provider";
import { SheetProvider } from "@/components/sheet-provider";

interface ProvidersProps {
  children: React.ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <JotaiProvider>
      <SheetProvider />
      {children}
    </JotaiProvider>
  );
};
