import LoginClient from "./LoginClient";
import AuthContainer from "@/components/auth/AuthContainer";
import LoginSession from "./LoginSession";

export default function Login() {
  return (
    <LoginSession>
      <AuthContainer
        label="Login to HelpCenter!"
        footerText="Don't have an account?"
        link="/signup"
        footerLabel="Sign Up"
      >
        <LoginClient />
      </AuthContainer>
    </LoginSession>
  );
}
