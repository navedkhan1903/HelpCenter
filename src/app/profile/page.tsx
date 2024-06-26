import { Toaster } from "react-hot-toast";
import Session from "@/components/shared/Session";
import Wrapper from "@/components/shared/Wrapper";
import ReduxProvider from "@/components/shared/ReduxProvider";
import ProfileClient from "@/components/profile/ProfileClient";

export default function Profile() {
  return (
    <>
      <Toaster containerStyle={{ top: 75 }} />
      <Session status="authenticated" path="/login">
        <Wrapper
          title="My Profile"
          subTitle="Bringing convenience to your doorstep – because life's too short for waiting in line!"
        >
          <ReduxProvider>
            <ProfileClient />
          </ReduxProvider>
        </Wrapper>
      </Session>
    </>
  );
}
