import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { validateLogin } from "@/utils/functions";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function useLogin() {
  const [loading, setLoading] = useState(false);

  async function handleLogin(email: string, pass: string) {
    setLoading(true);
    if (validateLogin(email, pass)) {
      try {
        await signInWithEmailAndPassword(auth, email, pass);
        toast.success("Login Successful. Redirecting");
      } catch (err: any) {
        toast.error(
          err.code === "auth/invalid-credential"
            ? "Invalid Email or Password"
            : "Login Failed",
        );
      }
    }
    setLoading(false);
  }

  return { loading, handleLogin };
}
