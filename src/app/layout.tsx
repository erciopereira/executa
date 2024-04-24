/* eslint-disable prettier/prettier */
import { AppWrapper } from "@/context";
import localFont from "@next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const helixa = localFont({
  src: [
    {
      path: "../assets/fonts/Helixa-Light.ttf",
      weight: "300",
    },
    {
      path: "../assets/fonts/Helixa-Regular.ttf",
      weight: "400",
    },
    {
      path: "../assets/fonts/Helixa-Bold.ttf",
      weight: "700",
    },
    {
      path: "../assets/fonts/Helixa-Black.ttf",
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
  return (
    <html lang={locale} className={`${helixa.variable} font-sans`}>
      <body className="bg-gray-back antialiased">
        <AppWrapper>{children}</AppWrapper>
      </body>
    </html>
  );
}
