import "./globals.css";
import NavBar from "./navBar/NavBar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { mainMetadata } from "@/utils/metadata";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata: Metadata = mainMetadata;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body className="text-darkGray">
        <NavBar />
        {children}
      </body>
    </html>
  );
}
