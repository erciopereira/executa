/* eslint-disable prettier/prettier */
import localFont from "@next/font/local";
import type { Metadata } from "next";
import "./globals.css";

const helixa = localFont({
  src: [
    {
      path: "../../public/fonts/Helixa-Regular.ttf",
      weight: "400",
    },
    {
      path: "../../public/fonts/Helixa-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-helixa",
});

export const metadata: Metadata = {
  title: "executa.co",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className={`${helixa.variable} font-sans`} lang="en">
      <body>{children}</body>
    </html>
  );
}
