import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import { mainMetadata } from "@/utils/metadata";
import ReduxProvider from "@/components/shared/ReduxProvider";

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
        <ReduxProvider>
          <>{children}</>
        </ReduxProvider>
        {/* {children} */}
      </body>
    </html>
  );
}
