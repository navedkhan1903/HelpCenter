import type { Metadata } from "next";
import LoginClient from "./LoginClient";
import Session from "../../components/Session";
import AuthContainer from "@/components/auth/AuthContainer";

const title = "Login - HelpCenter";
const desc =
  "Securely access a world of convenience with our user-friendly login page – your gateway to personalized on-demand services.";

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

export default function Login() {
  return (
    <Session status="unauthenticated" path="/">
      <AuthContainer
        label="Login to HelpCenter!"
        footerText="Don't have an account?"
        link="/signup"
        footerLabel="Sign Up"
      >
        <LoginClient />
      </AuthContainer>
    </Session>
  );
}
