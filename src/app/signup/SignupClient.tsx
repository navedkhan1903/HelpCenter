"use client";

import axios from "axios";
import { useState } from "react";
import { FiMail } from "react-icons/fi";
import { auth } from "@/utils/firebase";
import { LuUser2 } from "react-icons/lu";
import AuthBtn from "@/components/auth/AuthBtn";
import toast, { Toaster } from "react-hot-toast";
import { validateSignup } from "@/utils/functions";
import AuthInput from "@/components/auth/AuthInput";
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
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
  const [loading, setLoading] = useState(false);

  async function handleSignup() {
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
        if (err.code === "auth/email-already-in-use")
          toast.error("Email already in use");
        else {
          toast.error("Sign Up failed");
        }
        signOut(auth);
      }
    }
    setLoading(false);
  }

  return (
    <>
      <Toaster position="top-center" />
      <AuthInput
        icon={<LuUser2 color="#767676" size="18" />}
        type="text"
        placeholder="Full Name"
        onChange={(event) => setName(event.target.value)}
      />

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
