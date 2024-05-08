import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { setAuthInfo } from "@/store/authSlice";
import { useSearchParams } from "next/navigation";
import { validateSignup } from "@/utils/functions";
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function useSignup(name: string, email: string, pass: string) {
  const [signupLoading, setSignupLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set("flow", "signup");
  router.prefetch(`/verify-otp?${params}`);

  async function handleSignup() {
    setSignupLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      toast.success("Login Successful. Redirecting");
    } catch (err: any) {
      toast.error(err.message);
    }
    setSignupLoading(false);
  }

  async function handleRedirect() {
    if (validateSignup(name, email, pass)) {
      setSignupLoading(true);
      try {
        await createUserWithEmailAndPassword(auth, email, pass).then(
          async (res) => {
            router.push(`/verify-otp?${params}`);
            signOut(auth);
            dispatch(setAuthInfo({ name, email, pass }));
            await axios.post("/api/signup", {
              uid: res.user.uid,
              name,
              email,
            });
          },
        );
      } catch (err: any) {
        toast.error(
          err.code === "auth/email-already-in-use"
            ? "Email already in use"
            : err.message,
        );
        signOut(auth);
      }
      setSignupLoading(false);
    }
  }

  return { signupLoading, handleSignup, handleRedirect };
}
