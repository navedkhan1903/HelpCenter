"use client";

import axios from "axios";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { signIn } from "next-auth/react";
import { LuUser2 } from "react-icons/lu";
import { useRouter } from "next/navigation";
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
  const [nameSelected, setNameSelected] = useState(false);
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const [err, setErr] = useState("");
  const [success, setSuccess] = useState(false);

  const router = useRouter();

  function validate() {
    if (!name) setErr("Please provide your full name");
    else if (!email) setErr("Please provide an email address");
    else if (!/^\S+@\S+\.\S+$/.test(email)) setErr("Invalid Email Address");
    else if (!pass) setErr("Please provide a password");
    else if (pass.length < 10) setErr("Password is too short");
    else {
      setErr("");
      return true;
    }
    return false;
  }

  async function handleSignup() {
    if (validate()) {
      try {
        setLoading(true);
        await axios.post("/api/signup", { name, email, pass });
        const res = await signIn("credentials", {
          email,
          pass,
          redirect: false,
        });
        if (res!.error) throw new Error(res!.error);
        setSuccess(true);
        router.replace("/");
      } catch (err: any) {
        setErr(err.response.data.message);
        setLoading(false);
      }
    }
  }

  return (
    <>
      {err && <AuthError message={err} />}
      {success && <AuthSuccess message="Sign up Successful. Redirecting" />}

      <AuthInput
        isSelected={nameSelected}
        icon={<LuUser2 color="#767676" size="18" />}
        type="text"
        placeholder="Full Name"
        onFocus={() => setNameSelected(true)}
        onBlur={() => setNameSelected(false)}
        onChange={(event) => setName(event.target.value)}
      />

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
          if (event.key === "Enter") handleSignup();
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

      <AuthBtn loading={loading} label="Sign Up" onClick={handleSignup} />
    </>
  );
}
