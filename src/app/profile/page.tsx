import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import { profileMetadata } from "@/utils/metadata";
import ProfileClient from "@/components/profile/ProfileClient";

export const metadata: Metadata = profileMetadata;

export default function Profile() {
  return (
    <>
      <Toaster />
      <Session status="authenticated" path="/login">
        <Wrapper
          title="My Profile"
          subTitle="Bringing convenience to your doorstep – because life's too short for waiting in line!"
        >
          <ProfileClient />
        </Wrapper>
      </Session>
    </>
  );
}
