import type { Metadata } from "next";
import Session from "@/components/Session";
import ProfileClient from "./ProfileClient";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer/Footer";
import { profileMetadata } from "@/utils/metadata";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = profileMetadata;

export default function Profile() {
  return (
    <Session status="authenticated" path="/login">
      <>
        <Toaster />
        <div className="mx-auto mb-40 mt-20 w-10/12 translate-y-[69.71px]">
          <SectionHeading
            title="My Profile"
            subTitle="Bringing convenience to your doorstep – because life's too short for waiting in line!"
          />
          <ProfileClient />
        </div>
        <Footer />
      </>
    </Session>
  );
}
