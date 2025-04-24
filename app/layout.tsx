import type { Metadata } from "next";
import { Merriweather, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/nav";

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
        <Navbar />
        <main className="container mx-auto px-5">
          {children}
        </main>
        <footer>
          <p className="text-center">© Copyright {new Date().getFullYear()}</p>
        </footer>
      </body>
    </html>
  );
}
