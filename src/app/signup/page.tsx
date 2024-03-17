import Session from "@/components/shared/Session";
import { signupMetadata } from "@/utils/metadata";
import SignupClient from "@/components/auth/SignupClient";
import AuthContainer from "@/components/auth/AuthContainer";

export const metadata = signupMetadata;

export default function Signup() {
  return (
    <Session status="unauthenticated" path="/">
      <AuthContainer
        label="Register Now!"
        footerText="Already have an account?"
        link="/login"
        footerLabel="Login"
      >
        <SignupClient />
      </AuthContainer>
    </Session>
  );
}
