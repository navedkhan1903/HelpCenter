import Info from "./Info";
import Address from "./Address";
import type { Metadata } from "next";
import Session from "@/components/Session";
import Footer from "@/components/footer/Footer";
import SectionHeading from "@/components/SectionHeading";

const title = "My Profile - HelpCenter";
const desc =
  "Bringing convenience to your doorstep – because life's too short for waiting in line!";

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

export default function Profile() {
  return (
    <Session status="authenticated" path="/login">
      <>
        <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[69.71px]">
          <SectionHeading
            title="Hello, User"
            subTitle="Bringing convenience to your doorstep – because life's too short for waiting in line!"
          />
          <div className="w-12/12 mx-auto md:w-8/12 lg:w-7/12">
            <Info />
            <Address />
          </div>
        </div>
        <Footer />
      </>
    </Session>
  );
}
