import LoginClient from "./LoginClient";
import Session from "../../components/Session";
import AuthContainer from "@/components/auth/AuthContainer";

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
