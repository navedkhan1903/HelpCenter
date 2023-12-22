"use client";

import axios from "axios";
import Wrapper from "../Wrapper";
import InfoInput from "./InfoInput";
import { FiMail } from "react-icons/fi";
import { LuUser2 } from "react-icons/lu";
import { useState } from "react";
import { AiOutlineKey } from "react-icons/ai";

export default function Info() {
  const [disabled, setDisabled] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [loading, setLoading] = useState(false);

  async function saveEdit() {
    try {
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      {/* {session.data && (
        <Wrapper
          label="Personal Information"
          onEdit={() => setDisabled(false)}
          onSave={saveEdit}
          onCancel={() => setDisabled(true)}
          disabled={disabled}
          loading={loading}
        >
          <>
            <InfoInput
              label="Full Name"
              type="text"
              value={disabled ? session.data.user?.name! : name}
              onChange={(event) => setName(event.target.value)}
              disabled={disabled}
              icon={<LuUser2 size={15} />}
            />
            <InfoInput
              label="Email Address"
              type="email"
              value={disabled ? session.data.user?.email! : email}
              onChange={(event) => setEmail(event.target.value)}
              disabled={disabled}
              icon={<FiMail size={15} />}
            />
            <InfoInput
              label="Password"
              type="password"
              value={pass}
              onChange={(event) => setPass(event.target.value)}
              disabled={disabled}
              icon={<AiOutlineKey size={15} />}
            />
            <InfoInput
              label="New Password"
              type="password"
              value={newPass}
              onChange={(event) => setNewPass(event.target.value)}
              disabled={disabled}
              icon={<AiOutlineKey size={15} />}
            />
          </>
        </Wrapper>
      )} */}
    </>
  );
}
