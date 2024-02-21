"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { Toaster } from "react-hot-toast";
import useSignup from "@/hooks/auth/useSignup";
import AuthBtn from "@/components/auth/AuthBtn";
import AuthInput from "@/components/auth/AuthInput";
import {
  AiOutlineKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function LoginClient() {
  const [passVisible, setPassVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");

  const { loading, handleSignup } = useSignup();

  return (
    <>
      <Toaster position="top-center" />
      <AuthInput
        icon={<LuUser2 color="#767676" size="18" />}
        type="text"
        placeholder="Full Name"
        onChange={(e) => setName(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleSignup(name, email, pass);
        }}
      />

      <AuthInput
        icon={<FiMail color="#767676" size="18" />}
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleSignup(name, email, pass);
        }}
      />

      <AuthInput
        icon={<AiOutlineKey color="#767676" size="18" />}
        type={passVisible ? "text" : "password"}
        placeholder="Password"
        onChange={(e) => setPass(e.target.value)}
        onKeyDown={(e) => {
          e.key === "Enter" && handleSignup(name, email, pass);
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

      <AuthBtn
        loading={loading}
        label="Sign Up"
        onClick={() => handleSignup(name, email, pass)}
      />
    </>
  );
}
