"use client";

import AuthBtn from "./AuthBtn";
import { useState } from "react";
import AuthInput from "./AuthInput";
import { FiMail } from "react-icons/fi";
import { Toaster } from "react-hot-toast";
import useLogin from "@/hooks/auth/useLogin";
import {
  AiOutlineKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function LoginClient() {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const { loading, handleLogin } = useLogin();

  return (
    <>
      <Toaster position="top-center" />
      <AuthInput
        icon={<FiMail color="#767676" size="18" />}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleLogin(email, pass);
        }}
      />

      <AuthInput
        icon={<AiOutlineKey color="#767676" size="18" />}
        type={passVisible ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleLogin(email, pass);
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

      <AuthBtn
        loading={loading}
        label="Login"
        onClick={() => handleLogin(email, pass)}
      />
    </>
  );
}
