/* eslint-disable prettier/prettier */
import localFont from "@next/font/local";
import type { Metadata } from "next";
import { NextIntlClientProvider, useMessages } from "next-intl";
import Image from "next/image";
import vetorLogo from "../../../public/images/vetor_logo_topo.png";
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
        <div className="h-full w-full absolute bg-gradient-to-b from-gray-top" />
        <Image
          src={vetorLogo}
          alt=""
          height={2061.04}
          width={2433.97}
          className="absolute right-0 top-20"
        />
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
