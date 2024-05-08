import { useState } from "react";
import toast from "react-hot-toast";
import { auth } from "@/utils/firebase";
import { useDispatch } from "react-redux";
import { setAuthInfo } from "@/store/authSlice";
import { validateLogin } from "@/utils/functions";
import { useRouter, useSearchParams } from "next/navigation";
import { signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function useLogin(email: string, pass: string) {
  const [loginLoading, setLoginLoading] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  params.set("flow", "login");
  router.prefetch(`/verify-otp?${params}`);

  async function handleLogin() {
    setLoginLoading(true);
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      toast.success("Login Successful. Redirecting");
    } catch (err: any) {
      toast.error(err.message);
    }
    setLoginLoading(false);
  }

  async function handleRedirect() {
    if (validateLogin(email, pass)) {
      setLoginLoading(true);
      try {
        await signInWithEmailAndPassword(auth, email, pass).then(() => {
          router.push(`/verify-otp?${params}`);
          signOut(auth);
          dispatch(setAuthInfo({ email, pass }));
        });
      } catch (err: any) {
        toast.error(
          err.code === "auth/invalid-credential"
            ? "Invalid Email or Password"
            : err.message,
        );
      }
      setLoginLoading(false);
    }
  }

  return { loginLoading, handleLogin, handleRedirect };
}
