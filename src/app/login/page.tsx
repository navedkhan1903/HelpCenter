import type { Metadata } from "next";
import LoginClient from "./LoginClient";
import Session from "../../components/Session";
import { loginMetadata } from "@/utils/metadata";
import AuthContainer from "@/components/auth/AuthContainer";

export const metadata: Metadata = loginMetadata;

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
