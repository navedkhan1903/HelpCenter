import SignupClient from "./SignupClient";
import Session from "@/components/Session";
import AuthContainer from "@/components/auth/AuthContainer";

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
