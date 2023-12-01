import LoginClient from "./LoginClient";
import AuthContainer from "@/components/auth/AuthContainer";

export default function Login() {
  return (
    <AuthContainer
      label="Login to HelpCenter!"
      footerText="Don't have an account?"
      link="/signup"
      footerLabel="Sign Up"
    >
      <LoginClient />
    </AuthContainer>
  );
}
