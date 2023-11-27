import LoginClient from "./LoginClient";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import AuthContainer from "@/components/auth/AuthContainer";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Login() {
  if (await getServerSession(authOptions)) redirect("/");

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
