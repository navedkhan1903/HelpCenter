"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { auth } from "@/utils/firebase";
import AuthBtn from "@/components/auth/AuthBtn";
import toast, { Toaster } from "react-hot-toast";
import { validateLogin } from "@/utils/functions";
import AuthInput from "@/components/auth/AuthInput";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
  AiOutlineKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function LoginClient() {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);
    if (validateLogin(email, pass)) {
      try {
        await signInWithEmailAndPassword(auth, email, pass);
        toast.success("Login Successful. Redirecting");
      } catch (err: any) {
        if (err.code === "auth/invalid-credential")
          toast.error("Invalid Email or Password");
        else toast.error("Login Failed");
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Toaster position="top-center" />
      <AuthInput
        icon={<FiMail color="#767676" size="18" />}
        type="email"
        placeholder="Email"
        onChange={(event) => setEmail(event.target.value)}
      />

      <AuthInput
        icon={<AiOutlineKey color="#767676" size="18" />}
        type={passVisible ? "text" : "password"}
        placeholder="Password"
        onChange={(event) => setPass(event.target.value)}
        onKeyDown={(event) => {
          if (event.key === "Enter") handleLogin();
        }}
        isVisible={
          passVisible ? (
            <AiOutlineEyeInvisible color="#767676" size={18} />
          ) : (
            <AiOutlineEye color="#767676" size={18} />
          )
        }
        onToggleVisibility={() => setPassVisible(!passVisible)}
      />

      <button className="mb-5 ml-auto justify-end text-sm font-semibold text-sky-700">
        Forgot Password?
      </button>

      <AuthBtn loading={loading} label="Login" onClick={handleLogin} />
    </>
  );
}
