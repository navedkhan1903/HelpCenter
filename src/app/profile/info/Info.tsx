"use client";

import axios from "axios";
import Wrapper from "../Wrapper";
import InfoInput from "./InfoInput";
import { signIn } from "next-auth/react";
import InfoSkeleton from "./InfoSkeleton";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { DefaultSession } from "next-auth";
import { FiHeart } from "react-icons/fi";

declare module "next-auth" {
  interface Session {
    user: DefaultSession["user"] & {
      _id: string;
      email: string;
      pass: string;
    };
  }
}

export default function Info() {
  const session = useSession();

  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (session.data) {
      setName(session.data.user?.name!);
      setEmail(session.data.user?.email!);
    }
  }, [session, disabled]);

  async function saveEdit() {
    try {
      if (session.data) {
        await axios.post("/api/updateInfo", {
          id: session.data.user._id,
          name,
          email,
        });
        const res = await signIn("credentials", {
          email,
          pass: session.data.user?.pass!,
          redirect: false,
        });
        if (res!.error) throw new Error(res!.error);
        redirect("/profile");
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Wrapper
      label="Personal Information"
      onEdit={() => setDisabled(false)}
      onSave={saveEdit}
      onCancel={() => setDisabled(true)}
      disabled={disabled}
    >
      {session.data ? (
        <>
          <InfoInput
            label="Full Name"
            type="text"
            value={disabled ? session.data.user?.name! : name}
            onChange={(event) => setName(event.target.value)}
            disabled={disabled}
          />
          <InfoInput
            label="Email Address"
            type="email"
            value={disabled ? session.data.user?.email! : email}
            onChange={(event) => setEmail(event.target.value)}
            disabled={disabled}
          />
        </>
      ) : (
        <InfoSkeleton />
      )}
    </Wrapper>
  );
}
