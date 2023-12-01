"use client";

import axios from "axios";
import bcryptjs from "bcryptjs";
import Wrapper from "../Wrapper";
import InfoInput from "./InfoInput";
import { signIn } from "next-auth/react";
import InfoSkeleton from "./InfoSkeleton";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import type { DefaultSession } from "next-auth";

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
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");

  useEffect(() => {
    if (session.data) {
      setName(session.data.user?.name!);
      setEmail(session.data.user?.email!);
      setPass("");
      setNewPass("");
    }
  }, [session, disabled]);

  async function saveEdit() {
    try {
      if (session.data) {
        const salt = await bcryptjs.genSalt(10);
        const hashedPass = await bcryptjs.hash(newPass, salt);

        await axios.post("/api/updateInfo", {
          id: session.data.user._id,
          name,
          email,
          pass: hashedPass,
        });

        const res = await signIn("credentials", {
          email,
          pass: newPass,
          redirect: false,
        });
        if (res!.error) throw new Error(res!.error);

        setDisabled(true);
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
          <div className="flex justify-between">
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
          </div>

          <div className="flex justify-between">
            <InfoInput
              label="Password"
              type="password"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
              disabled={disabled}
            />
            <InfoInput
              label="New Password"
              type="password"
              value={newPass}
              onChange={(event) => setNewPass(event.target.value)}
              disabled={disabled}
            />
          </div>
        </>
      ) : (
        <InfoSkeleton />
      )}
    </Wrapper>
  );
}
