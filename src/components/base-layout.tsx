import { clsx } from "clsx";
import { NextIntlClientProvider } from "next-intl";
import { ReactNode } from "react";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/components/provider";
import { getMessages } from "next-intl/server";
const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export const metadata: Metadata = {
  title: "MAXIUS",
  description: "Maxius Homepage",
};

type Props = {
  children: ReactNode;
  locale: string;
};

export default async function BaseLayout({ children, locale }: Props) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html className="h-full" lang={locale} suppressHydrationWarning>
      <body className={clsx(roboto.className)}>
        <NextIntlClientProvider messages={messages}>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
