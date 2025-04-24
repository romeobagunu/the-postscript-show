import type { Metadata } from "next";
import { Merriweather, Bebas_Neue } from "next/font/google";
import "./globals.css";

const merriweather = Merriweather({
  variable: "--font-merriweather",
  subsets: ["latin"],
  weight: "300"
})

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  weight: "400"
})

export const metadata: Metadata = {
  title: "The Postscript Show",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body 
        className={`${merriweather.variable} ${bebasNeue.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
