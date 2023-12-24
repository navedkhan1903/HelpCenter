import "./globals.css";
import NavBar from "./navBar/NavBar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });
const title = "HelpCenter - On-Demand Services";
const desc =
  "Your wish, our command! Get what you need, when you need it, with just a click. Experience convenience like never before!";

export const metadata: Metadata = {
  title: title,
  description: desc,
  openGraph: {
    title: title,
    description: desc,
  },
  twitter: {
    title: title,
    description: desc,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
