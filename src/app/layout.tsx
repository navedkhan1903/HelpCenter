import "./globals.css";
import NavBar from "./navBar/NavBar";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import { AuthProvider } from "@/components/auth/AuthProvider";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HelpCenter - On-Demand Services",
  description:
    "Your wish, our command! Get what you need, when you need it, with just a click. Experience convenience like never before!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>
        <AuthProvider>
          <>
            <NavBar />
            {children}
          </>
        </AuthProvider>
      </body>
    </html>
  );
}
