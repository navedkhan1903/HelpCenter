import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { validateSignup } from "@/utils/functions";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";

export default function useSignup() {
  const [loading, setLoading] = useState(false);

  async function handleSignup(name: string, email: string, pass: string) {
    setLoading(true);
    if (validateSignup(name, email, pass)) {
      try {
        const res = await createUserWithEmailAndPassword(auth, email, pass);
        await axios.post("/api/signup", {
          uid: res.user.uid,
          name,
          email,
        });
        toast.success("Sign Up Successful. Redirecting");
      } catch (err: any) {
        toast.error(
          err.code === "auth/email-already-in-use"
            ? "Email already in use"
            : "Sign Up failed",
        );
        signOut(auth);
      }
    }
    setLoading(false);
  }

  return { loading, handleSignup };
}
