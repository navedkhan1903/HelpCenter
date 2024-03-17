import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/navBar/NavBar";
import { mainMetadata } from "@/utils/metadata";

const montserrat = Montserrat({ subsets: ["latin"] });
export const metadata = mainMetadata;

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
