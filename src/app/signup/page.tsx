import SignupClient from "./SignupClient";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import AuthContainer from "@/components/auth/AuthContainer";
import { authOptions } from "../api/auth/[...nextauth]/route";

export default async function Signup() {
  if (await getServerSession(authOptions)) redirect("/");

  return (
    <AuthContainer
      label="Register Now!"
      footerText="Already have an account?"
      link="/login"
      footerLabel="Login"
    >
      <SignupClient />
    </AuthContainer>
  );
}
