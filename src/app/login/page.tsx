import { loginMetadata } from "@/utils/metadata";
import Session from "@/components/shared/Session";
import LoginClient from "@/components/auth/LoginClient";
import AuthContainer from "@/components/auth/AuthContainer";
import ReduxProvider from "@/components/shared/ReduxProvider";

export const metadata = loginMetadata;

export default function Login() {
  return (
    <Session status="unauthenticated" path="/">
      <AuthContainer
        label="Login to HelpCenter!"
        footerText="Don't have an account?"
        link="/signup"
        footerLabel="Sign Up"
      >
        <ReduxProvider>
          <LoginClient />
        </ReduxProvider>
      </AuthContainer>
    </Session>
  );
}
