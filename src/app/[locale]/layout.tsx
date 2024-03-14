/* eslint-disable prettier/prettier */
import localFont from "@next/font/local";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import "./globals.css";

const helixa = localFont({
  src: [
    {
      path: "../../../public/fonts/Helixa-Light.ttf",
      weight: "300",
    },
    {
      path: "../../../public/fonts/Helixa-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../../public/fonts/Helixa-Bold.ttf",
      weight: "700",
    },
    {
      path: "../../../public/fonts/Helixa-Black.ttf",
      weight: "900",
    },
  ],
  variable: "--font-helixa",
});

export const metadata: Metadata = {
  title: "executa.co",
};

export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const messages = useMessages();
  return (
    <html lang={locale} className={`${helixa.variable} font-sans`}>
      <body className="bg-gray-back antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
