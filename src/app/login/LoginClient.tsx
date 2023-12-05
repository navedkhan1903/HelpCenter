"use client";

import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { signIn } from "next-auth/react";
import AuthBtn from "@/components/auth/AuthBtn";
import AuthError from "@/components/auth/AuthError";
import AuthInput from "@/components/auth/AuthInput";
import AuthSuccess from "@/components/auth/AuthSuccess";
import {
  AiOutlineKey,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";

export default function LoginClient() {
  const [passVisible, setPassVisible] = useState(false);
  const [passSelected, setPassSelected] = useState(false);
  const [emailSelected, setEmailSelected] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  function validate() {
    if (!email) setErr("Please provide an email address");
    else if (!pass) setErr("Please provide a password");
    else if (!/^\S+@\S+\.\S+$/.test(email)) setErr("Invalid Email Address");
    else {
      setErr("");
      return true;
    }
    return false;
  }

  async function handleLogin() {
    if (validate()) {
      try {
        setLoading(true);
        const res = await signIn("credentials", {
          email,
          pass,
          redirect: false,
        });
        if (res!.error) throw new Error(res!.error);
        setSuccess(true);
      } catch (err: any) {
        setLoading(false);
        setErr(err.message);
      }
    }
  }

  return (
    <>
      {err && <AuthError message={err} />}
      {success && <AuthSuccess message="Login Successful. Redirecting" />}

      <AuthInput
        isSelected={emailSelected}
        icon={<FiMail color="#767676" size="18" />}
        type="email"
        placeholder="Email"
        onFocus={() => setEmailSelected(true)}
        onBlur={() => setEmailSelected(false)}
        onChange={(event) => setEmail(event.target.value)}
      />

      <AuthInput
        isSelected={passSelected}
        icon={<AiOutlineKey color="#767676" size="18" />}
        type={passVisible ? "text" : "password"}
        placeholder="Password"
        onFocus={() => setPassSelected(true)}
        onBlur={() => setPassSelected(false)}
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

      <p className="mb-5 ml-auto cursor-pointer justify-end text-sm font-semibold text-sky-700">
        Forgot Password?
      </p>

      <AuthBtn loading={loading} label="Login" onClick={handleLogin} />
    </>
  );
}
