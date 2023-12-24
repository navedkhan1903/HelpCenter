import type { Metadata } from "next";
import SignupClient from "./SignupClient";
import Session from "@/components/Session";
import AuthContainer from "@/components/auth/AuthContainer";

const title = "Sign Up - HelpCenter";
const desc =
  "Unlock a universe of tailored on-demand services by seamlessly signing up – your journey to personalized convenience begins here.";

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
